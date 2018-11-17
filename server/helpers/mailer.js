var Q = require('q');
var config = require('config');
var nodemailer = require('nodemailer');
const Email = require('email-templates');
var path = require('path')
// ref link : https://github.com/niftylettuce/email-templates
// ref link : https://codemoto.io/coding/nodejs/nodemailer-email-templates-using-node
module.exports = {
    sendMail: function (from, to, subject, tplName, locals) {
        var d = Q.defer();
        const transport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: config.smtpDetails.username, // Your email id
                pass: config.smtpDetails.password // Your password
            }
        });

        const email = new Email({
            views: {
                root: path.resolve('email-templates'),
                /* options: {
                    // default file extension for template
                    extension: 'html',
                } */
            },
            message: {
                from: from | 'no-reply@vpninfotech.com'
            },
            transport: transport,
            htmlToText: false // <----- HERE
        });

        // var templateDir = path.join(__dirname, "email-templates", "signup");
        // console.log(templateDir);

        email.send({
            template: tplName,
            message: {
                to: to
            },
            locals: locals
        }).then(function (res) {
            console.log("res", res);
            return d.resolve(res);            
        }).catch(console.error);
        return d.promise;
    }
};