require('rootpath')();
var express                 = require('express');
var app                     = express();
var cors                    = require('cors');
var bodyParser              = require('body-parser');
var expressJwt              = require('express-jwt');
var config                  = require('config');
var path                    = require('path');
var http                    = require('http');
var session                 = require('express-session');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false
}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/uploads', express.static(__dirname + '/uploads'));

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
app.use('/api/*', expressJwt({
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
        '/api/content-mng/product/update-product',
        '/api/content-mng/product/get-all-product',
        '/api/content-mng/product/get-product-categories'
    ]
}));

app.set('views', path.join(__dirname, 'views'));

app.use('/api/content-mng/product', require('./controllers/content/product.controller'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/admin_dist/index.html');
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Running on localhost:${port}`);
});