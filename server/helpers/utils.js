module.exports = {
    prepareResponse: function (status, data, message) {
        serviceResponse = {};
        // Response handling
        serviceResponse = {
            status: status,
            data: data || [],
            message: message
        };
        return serviceResponse;
    },
    clearResponse: () => {
        // Response handling
        response = {
            status: 200,
            data: [],
            message: null
        };
        console.log("clearResponse called");
    },
    verifyInstagram: function(req, accessToken, refreshToken, params, profile, done) {
        var user            = {};
        user.id             = profile.id;
        user.provider       = profile.provider;
        user.displayName    = profile.displayName;
        user.username       = profile.username;
        user.accessToken    = accessToken;
        done(null, user);
    },
    verifyFacebook: function(accessToken, refreshToken, profile, done) {
        var user            = {};
        user.id             = profile.id;
        user.provider       = profile.provider;
        user.username       = profile.displayName;
        user.accessToken    = accessToken;
        done(null, user);
    },
    verifyLinkedin: function(accessToken, refreshToken, profile, done) {
        var user            = {};
        user.id             = profile.id;
        user.provider       = profile.provider;
        user.username       = profile.displayName;
        user.accessToken    = accessToken;
        done(null, user);
    },
    verifyYoutube: function(req,accessToken, refreshToken, params, profile, done) {
        var user            = {};
        user.id             = profile.id;
        user.provider       = profile.provider;
        user.username       = profile.displayName;
        user.accessToken    = accessToken;
        done(null, user);
    }
}