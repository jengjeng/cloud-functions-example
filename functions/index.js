'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = undefined;

require('babel-polyfill');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _posts = require('./posts.routes');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var functions = require('firebase-functions');
var admin = require('firebase-admin');


admin.initializeApp(functions.config().firebase);
var app = (0, _express2.default)();
// // Enable CORS
app.use((0, _cors2.default)());
app.use(_posts2.default);
var api = exports.api = functions.https.onRequest(app);