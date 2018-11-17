var config = require('config');
var setting = require('../helpers/setting');
var express = require('express');
var router = express.Router();
var userService = require('services/user.service');
var mailer = require('../helpers/mailer.js');
var fileUploader = require('../helpers/file-uploader.js');
var fs = require('fs');
var path = require('path');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:_id', getById);
router.put('/:_id', update);
router.put('/change_password/:_id', changePassword);
router.delete('/:_id', _delete);

router.post('/forgot-password', forgotPassword);
router.post('/account-activation', accountActivation);
router.post('/check-activation-key', getUserByForgotPasswordCode);
router.post('/reset-password', resetPassword);
router.post('/upload-profile-image', uploadProfileImage);
router.post('/remove-profile-image', removeProfileImage);

module.exports = router;

var response = {};

const clearResponse = () => {
    // Response handling
    response = {
        status: 200,
        data: [],
        message: null
    };
}

// Error handling
const sendError = (err, res) => {
    response.status = 400;
    response.message = err !== null && typeof err === 'object' ? err.message : err;
    res.json(response);
};

function authenticate(req, res) {
    clearResponse();
    userService.authenticate(req.body.email, req.body.password)
        .then(function(authResponse) {
            if (authResponse.status == 1) {
                // authentication successful
                var filePath = config.projectPath + "/uploads/user-profile-image/" + authResponse.data.profile_image;
                response.data = authResponse.data;
                if (fs.existsSync(filePath)) {
                    response.data.profile_image_url = config.siteUrl + "/uploads/user-profile-image/" + authResponse.data.profile_image;
                } else {
                    response.data.profile_image_url = config.siteUrl + "/uploads/no_profile_image.png";
                }
                res.send(response);
            } else {
                // authentication failed
                err = {};
                err.message = authResponse.message;
                sendError(err, res);
                // res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function(err) {
            //res.status(400).send(err);
            sendError(err, res);
        });
}

function register(req, res) {
    clearResponse();
    userService.create(req.body)
        .then(function(user) {

            var recipientName = req.body.firstName + " " + req.body.lastName;
            var activationKey = user.activationKey;
            var activationLink = config.siteUrl + "/account-activation/" + activationKey;
            // var activationLinkHtml = "<a routerLink='" + activationLink + "'>Activate Your Account</a>";
            var activationLinkHtml = "a(href='" + activationLink + "') Activate Your Account";
            var applicationName = config.applicationName;
            var locals = {
                recipientName: recipientName,
                activationLinkHtml: activationLinkHtml,
                activationLink: activationLink,
                applicationName: applicationName
            };
            mailer.sendMail(null, req.body.email, null, 'account-activation', locals).then(function() {
                // res.status(200).send('A welcome email has been sent to ' + req.body.emails + '.');
                response.data = user;
                response.message = "User registration has been done successfully !,Kindly check your email to activate your account.";
                res.send(response);
            }, function(err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
            });

        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    clearResponse();
    userService.getAll()
        .then(function(users) {
            response.data = users;
            response.data.forEach(function(value, i) {
                if (value.profile_image) {
                    var filePath = config.projectPath + "/uploads/user-profile-image/" + value.profile_image;

                    if (fs.existsSync(filePath)) {
                        value.profile_image_url = config.siteUrl + "/uploads/user-profile-image/" + value.profile_image;
                    } else {
                        value.profile_image_url = config.siteUrl + "/uploads/no_profile_image.png";
                        value.profile_image = null;
                    }
                } else {
                    value.profile_image = null;
                }

            });
            res.send(response);
            // res.json(response);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function getCurrent(req, res) {
    clearResponse();
    userService.getById(req.user.sub)
        .then(function(user) {
            if (user) {


                var filePath = config.projectPath + "/uploads/user-profile-image/" + user.profile_image;

                if (fs.existsSync(filePath)) {
                    user.profile_image_url = config.siteUrl + "/uploads/user-profile-image/" + user.profile_image;
                } else {
                    user.profile_image_url = config.siteUrl + "/uploads/no_profile_image.png";
                    user.profile_image = null;
                }
                response.data = user;
                res.send(response);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function getById(req, res) {
    clearResponse();
    userService.getById(req.params._id)
        .then(function(user) {
            if (user) {
                var filePath = config.projectPath + "/uploads/user-profile-image/" + user.profile_image;

                if (fs.existsSync(filePath)) {
                    user.profile_image_url = config.siteUrl + "/uploads/user-profile-image/" + user.profile_image;
                } else {
                    user.profile_image_url = config.siteUrl + "/uploads/no_profile_image.png";
                    user.profile_image = null;
                }
                response.data = user;
                res.send(response);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    clearResponse();
    userService.update(req.params._id, req.body)
        .then(function(user) {
            if (user) {
                response.data = user;
                res.send(response);
            } else {
                err = {};
                err.message = "Something went wrong!";
                sendError(err, res);
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    clearResponse();
    userService.delete(req.params._id)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function forgotPassword(req, res) {
    clearResponse();
    userService.forgotPassword(req.body.email)
        .then(function(user) {
            if (user) {
                var recipientName = user.firstName + " " + user.lastName;
                var forgotPasswordKey = user.forgotPasswordKey;
                var activationLink = config.siteUrl + "/reset-password/" + forgotPasswordKey;
                // var activationLinkHtml = "<a routerLink='" + activationLink + "'>Activate Your Account</a>";
                var activationLinkHtml = "a(href='" + activationLink + "') Reset Your Password";
                var applicationName = config.applicationName;
                var locals = {
                    recipientName: recipientName,
                    activationLinkHtml: activationLinkHtml,
                    activationLink: activationLink,
                    applicationName: applicationName
                };
                mailer.sendMail(null, req.body.email, null, 'forgot-password', locals).then(function() {
                    // res.status(200).send('A welcome email has been sent to ' + req.body.emails + '.');
                    response.data = user;
                    response.message = "Reset password request has been generated successfully. You might have an email along with reset password link. Kindly follow that link to reset your password.";
                    res.send(response);
                }, function(err) {
                    if (err) { return res.status(500).send({ msg: err.message }); }
                });
            } else {
                // authentication failed
                err = {};
                err.message = "E-Mail Address was not found in our records, please try again!";
                sendError(err, res);
                // res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function(err) {
            //res.status(400).send(err);
            sendError(err, res);
        });
}

function changePassword(req, res) {
    clearResponse();
    userService.changePassword(req.user.sub, req.body.old_password)
        .then(function(result) {
            if (result.status) {
                let user = result.data;
                if (user) {
                    var recipientName = user.firstName + " " + user.lastName;
                    var forgotPasswordKey = user.forgotPasswordKey;
                    var activationLink = config.siteUrl + "/reset-password/" + forgotPasswordKey;
                    // var activationLinkHtml = "<a routerLink='" + activationLink + "'>Activate Your Account</a>";
                    var activationLinkHtml = "a(href='" + activationLink + "') Reset Your Password";
                    var applicationName = config.applicationName;
                    var locals = {
                        recipientName: recipientName,
                        activationLinkHtml: activationLinkHtml,
                        activationLink: activationLink,
                        applicationName: applicationName
                    };
                    mailer.sendMail(null, user.email, null, 'forgot-password', locals).then(function() {
                        // res.status(200).send('A welcome email has been sent to ' + req.body.emails + '.');
                        response.data = user;
                        response.message = "Reset password request has been generated successfully. You might have an email along with reset password link. Kindly follow that link to reset your password.";
                        res.send(response);
                    }, function(err) {
                        if (err) { return res.status(500).send({ msg: err.message }); }
                    });
                } else {
                    err = {};
                    err.message = "Old password is incorrect, please try again!";
                    sendError(err, res);
                }
            } else {
                // authentication failed
                err = {};
                err.message = "Old password is incorrect, please try again!";
                sendError(err, res);
                // res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function(err) {
            //res.status(400).send(err);
            sendError(err, res);
        });
}

function accountActivation(req, res) {
    clearResponse();
    userService.accountActivation(req.body.activationKey)
        .then(function(serviceResponse) {
            if (serviceResponse.status == 1) {
                // authentication successful
                response.data = serviceResponse.data;
                response.message = serviceResponse.message;
                res.send(response);
            } else {
                // authentication failed
                err = {};
                err.message = serviceResponse.message;
                sendError(err, res);
                // res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function(err) {
            //res.status(400).send(err);
            sendError(err, res);
        });
}

function getUserByForgotPasswordCode(req, res) {
    clearResponse();
    userService.getUserByForgotPasswordCode(req.body.activationKey)
        .then(function(user) {
            if (user) {
                response.data = user;
                res.send(response);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function resetPassword(req, res) {
    clearResponse();
    userService.resetPassword(req.body._id, req.body)
        .then(function(response) {
            if (response.status) {
                let user = response.data;
                var recipientName = user.firstName + " " + user.lastName;
                var applicationName = config.applicationName;
                var locals = {
                    recipientName: recipientName,
                    applicationName: applicationName
                };
                mailer.sendMail(null, user.email, null, 'reset-password-sucess', locals).then(function() {
                    response.data = user;
                    response.message = "Your password has been chnaged successfully.";
                    res.send(response);
                }, function(err) {
                    if (err) { return res.status(500).send({ msg: err.message }); }
                });
            } else {
                // authentication failed
                err = {};
                err.message = "Your request was not found in our records, please try again!";
                sendError(err, res);
                // res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function(err) {
            //res.status(400).send(err);
            sendError(err, res);
        });
}

function uploadProfileImage(req, res) {
    fileUploader.uploadFile(req, res, "profileImage", "./uploads/user-profile-image/").then(function(fileUploadResponse) {
        req.body.profile_image = fileUploadResponse.data.filename;
        userService.updateProfileImage(req.body._id, req.body)
            .then(function(userResponse) {
                response.data = userResponse.data;
                response.message = userResponse.message;
                res.send(response);
                // res.sendStatus(200);
            })
            .catch(function(err) {
                res.status(400).send(err);
            });
        // res.send(fileUploadResponse);
    }, function(err) {
        if (err) { return res.status(500).send({ msg: err.message }); }
    });
}

function removeProfileImage(req, res) {
    fileUploader.removeFile(req.body.profile_image, "./uploads/user-profile-image/").then(function(removeFileResponse) {
        if (req.body._id) {
            req.body.profile_image = null;
            userService.updateProfileImage(req.body._id, req.body)
                .then(function(userResponse) {
                    response.data = userResponse.data;
                    response.message = userResponse.message;
                    res.send(response);
                    // res.sendStatus(200);
                })
                .catch(function(err) {
                    res.status(400).send(err);
                });
        } else {

            response.data = removeFileResponse.data;
            response.message = removeFileResponse.message;
            res.send(response);
        }
        // res.send(fileUploadResponse);
    }, function(err) {
        if (err) { return res.status(500).send({ msg: err.message }); }
    });
}