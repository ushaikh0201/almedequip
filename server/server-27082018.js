require('rootpath')();
var express                 = require('express');
var public_app              = express();
var admin_app               = express();
var cors                    = require('cors');
var bodyParser              = require('body-parser');
var expressJwt              = require('express-jwt');
var config                  = require('config');
var path                    = require('path');
var http                    = require('http');
var session                 = require('express-session');

public_app.use(cors());
public_app.use(bodyParser.urlencoded({ extended: false }));
public_app.use(bodyParser.json());
public_app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false
}));

public_app.use(express.static(path.join(__dirname, '/public_dist')));
admin_app.use(express.static(path.join(__dirname, '/admin_dist')));

public_app.use('/uploads', express.static(__dirname + '/uploads'));
admin_app.use('/uploads', express.static(__dirname + '/uploads'));

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
admin_app.use('/api/*', expressJwt({
    secret: config.secret,
    getToken: function(req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({
    path: [
        '/api/content-mng/product/insert-product',
        '/api/content-mng/product/get-all-product'
    ]
}));

public_app.set('views', path.join(__dirname, 'views'));
admin_app.set('views', path.join(__dirname, 'views'));

admin_app.use('/api/content-mng/product', require('./controllers/content/product.controller'));

admin_app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/admin_dist/index.html');
});

public_app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public_dist/index.html');
});


//Set public Port
const public_port = process.env.PORT || '3000';
public_app.set('port', public_port);

const public_server = http.createServer(public_app);

public_server.listen(public_port, () => {
    console.log(`Public running on localhost:${public_port}`);
});

//Set admin Port
const admin_port = process.env.PORT || '3001';
admin_app.set('port', admin_port);

const admin_server = http.createServer(admin_app);

admin_server.listen(admin_port, () => {
    console.log(`Admin running on localhost:${admin_port}`);
});