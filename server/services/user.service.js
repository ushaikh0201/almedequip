var config = require('config');
var setting = require('../helpers/setting');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
var randomstring = require("randomstring"); // ref link : https://www.npmjs.com/package/randomstring
var utils = require('../helpers/utils.js');
db.bind('tbl_users');

var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;
service.forgotPassword = forgotPassword;
service.accountActivation = accountActivation;
service.getUserByForgotPasswordCode = getUserByForgotPasswordCode;
service.resetPassword = resetPassword;
service.changePassword = changePassword;
service.updateProfileImage = updateProfileImage;


module.exports = service;

function authenticate(email, password) {
    var deferred = Q.defer();

    db.tbl_users.findOne({ email: email }, function(err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (user && bcrypt.compareSync(password, user.hash)) {

            if (user.status == setting.status.inactive) {
                let serviceResponse = utils.prepareResponse(0, [], "It seems your account is not confirmed yet ! Kindly Open your email and click on confirmation link to activate it.");
                deferred.resolve(serviceResponse);
            }

            if (user.tbl_role_id != setting.roles.general_user) {
                let serviceResponse = utils.prepareResponse(0, [], "Unautherized access!");
                deferred.resolve(serviceResponse);
            }

            let data = {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.tbl_role_id,
                profile_image: user.profile_image,
                token: jwt.sign({ sub: user._id }, config.secret),
                created: user.created
            };
            let serviceResponse = utils.prepareResponse(1, data, "User authentication has been done successfully.");
            // authentication successful
            deferred.resolve(serviceResponse);
        } else {
            // authentication failed
            let serviceResponse = utils.prepareResponse(0, [], "Username or password is incorrect");
            deferred.resolve(serviceResponse);
        }
    });

    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.tbl_users.find().toArray(function(err, users) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return users (without hashed passwords)
        users = _.map(users, function(user) {
            return _.omit(user, 'hash');
        });

        deferred.resolve(users);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();
    db.tbl_users.findById(_id, function(err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (user) {
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();

    // validation
    db.tbl_users.findOne({ email: userParam.email },
        function(err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                // email already exists
                deferred.reject('email "' + userParam.email + '" is already taken');
            } else {
                createUser();
            }
        });

    function createUser() {
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, 'password');
        user = _.omit(user, 'confirmPassword');
        user = _.omit(user, 'agree');

        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);
        // new user should be inactive when it is created.
        user.status = mongo.helper.toObjectID(setting.status.inactive);
        user.created = new Date();
        var activationKey = randomstring.generate(16);
        user.activationKey = activationKey;
        user.tbl_role_id = mongo.helper.toObjectID(setting.userRoleList.general_user);
        user.total_credit_point = 0;
        db.tbl_users.insert(
            user,
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                let newUser = { "_id": "-1" };
                if (user._id) {
                    newUser._id = user._id;
                    newUser.activationKey = activationKey;
                }
                deferred.resolve(newUser);
            });
    }

    return deferred.promise;
}

function update(_id, userParam) {
    var deferred = Q.defer();

    // validation
    db.tbl_users.findById(_id, function(err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        //console.log("From admin services", _id);
        if (userParam.email && user.email !== userParam.email) {
            // email has changed so check if the new email is already taken
            db.tbl_users.findOne({ email: userParam.email },
                function(err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (user) {
                        // email already exists
                        deferred.reject('email "' + userParam.email + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    function updateUser() {
        // fields to update
        var set = {};
        //Update firstName if it was entered
        if (userParam.firstName) {
            set.firstName = userParam.firstName;
        }
        //Update lastName if it was entered
        if (userParam.lastName) {
            set.lastName = userParam.lastName;
        }
        //Update email if it was entered
        if (userParam.email) {
            set.email = userParam.email;
        }
        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        //Update gender if it was entered
        if (userParam.gender) {
            set.gender = userParam.gender;
        }
        //Update dob if it was entered
        // if (userParam.dob) {
        //     set.dob = new Date(userParam.dob);
        // }
        if (userParam.dob) {
            set.dob = userParam.dob;
        }
        //Update dial_code if it was entered
        if (userParam.dial_code) {
            set.dial_code = userParam.dial_code;
        }

        //Update mobile if it was entered
        if (userParam.mobile) {
            set.mobile = userParam.mobile;
        }

        db.tbl_users.update({ _id: mongo.helper.toObjectID(_id) }, { $set: set },
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve({
                    _id: _id,
                    email: set.email,
                    firstName: set.firstName,
                    lastName: set.lastName,
                    token: jwt.sign({ sub: set._id }, config.secret)
                });
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.tbl_users.remove({ _id: mongo.helper.toObjectID(_id) },
        function(err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}

function forgotPassword(email) {
    var deferred = Q.defer();

    db.tbl_users.findOne({ email: email }, function(err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (user) {
            var forgotPasswordKey = randomstring.generate(16);
            user.forgotPasswordKey = forgotPasswordKey;
            var set = {
                forgotPasswordKey: forgotPasswordKey
            };
            //Update activationkey 
            db.tbl_users.update({ _id: user._id }, { $set: set },
                function(err, doc) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    deferred.resolve({
                        _id: user._id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        forgotPasswordKey: forgotPasswordKey
                    });

                });

        } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function changePassword(_id, old_password) {
    var deferred = Q.defer();
    db.tbl_users.findById(_id, function(err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (user && bcrypt.compareSync(old_password, user.hash)) {
            var forgotPasswordKey = randomstring.generate(16);
            user.forgotPasswordKey = forgotPasswordKey;
            var set = {
                forgotPasswordKey: forgotPasswordKey
            };
            //Update activationkey 
            db.tbl_users.update({ _id: user._id }, { $set: set },
                function(err, doc) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
                    let data = {
                        _id: _id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        forgotPasswordKey: forgotPasswordKey
                    };
                    let serviceResponse = utils.prepareResponse(1, data, "Your account has been activated successfully. You can login with your credentials now.");
                    deferred.resolve(serviceResponse);

                });

        } else {
            // authentication failed
            let serviceResponse = utils.prepareResponse(0, [], "Old password is incorrect");
            deferred.resolve(serviceResponse);
        }
    });

    return deferred.promise;
}

function accountActivation(activationKey) {
    //var response = { status: 0, data: [], message: null };
    var deferred = Q.defer();
    db.tbl_users.findOne({ activationKey: activationKey }, function(err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user && user.activationKey && (user.activationKey == activationKey)) {
            var set = {
                activationKey: null,
                // new user should be inactive when it is created.
                status: mongo.helper.toObjectID(setting.status.active),
                modified: new Date()
            };

            let _id = user._id;

            db.tbl_users.update({ _id: mongo.helper.toObjectID(_id) }, { $set: set },
                function(err, doc) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
                    let data = {
                        _id: _id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName
                    };
                    let serviceResponse = utils.prepareResponse(1, data, "Your account has been activated successfully. You can login with your credentials now.");
                    deferred.resolve(serviceResponse);
                });
        } else {
            let serviceResponse = utils.prepareResponse(0, [], "Your account activation link has been expired!");
            deferred.resolve(serviceResponse);
        }
    });

    return deferred.promise;
}


function getUserByForgotPasswordCode(forgotPasswordKey) {
    var deferred = Q.defer();
    db.tbl_users.findOne({ forgotPasswordKey: forgotPasswordKey }, function(err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);


        if (user && user.forgotPasswordKey && (user.forgotPasswordKey == forgotPasswordKey)) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
            let data = {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            };
            let ForgotPasswordKeyResponse = utils.prepareResponse(1, data, "Your forgot password key is valid!");
            deferred.resolve(ForgotPasswordKeyResponse);

        } else {
            let ForgotPasswordKeyResponse = utils.prepareResponse(0, [], "Your forgot password link has been expired!");
            deferred.resolve(ForgotPasswordKeyResponse);
        }
    });

    return deferred.promise;
}

function resetPassword(_id, userParam) {
    var deferred = Q.defer();
    db.tbl_users.findById(_id, function(err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (user && userParam.password) {

            var set = {
                forgotPasswordKey: null,
                modified: new Date()
            };
            // update password if it was entered
            if (userParam.password) {
                set.hash = bcrypt.hashSync(userParam.password, 10);
                //Update activationkey 
                db.tbl_users.update({ _id: user._id }, { $set: set },
                    function(err, doc) {
                        if (err) deferred.reject(err.name + ': ' + err.message);

                        let data = {
                            _id: user._id,
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName
                        };

                        let ForgotPasswordKeyResponse = utils.prepareResponse(1, data, "Your password has been change sucessfully!");
                        deferred.resolve(ForgotPasswordKeyResponse);

                    });
            } else {
                let ForgotPasswordKeyResponse = utils.prepareResponse(0, [], "Something went wrong!");
                deferred.resolve(ForgotPasswordKeyResponse);
            }


        } else {
            let ForgotPasswordKeyResponse = utils.prepareResponse(0, [], "Sorry, You passing wrong details!");
            deferred.resolve(ForgotPasswordKeyResponse);
        }
    });

    return deferred.promise;
}

function updateProfileImage(_id, userParams) {
    var deferred = Q.defer();
    // fields to update
    var set = {};
    console.log("userParams=>", userParams);
    if (userParams.profile_image) {
        set.profile_image = userParams.profile_image;
    } else {
        set.profile_image = null;
    }


    db.tbl_users.update({ _id: mongo.helper.toObjectID(_id) }, { $set: set },
        function(err, doc) {
            if (err) {
                let serviceResponse = utils.prepareResponse(0, [], err.name + ': ' + err.message);
                deferred.reject(serviceResponse);
            }

            let serviceResponse = utils.prepareResponse(1, set, 'Profile Image has been updated successfully.');
            deferred.resolve(serviceResponse);
        });
    return deferred.promise;
}