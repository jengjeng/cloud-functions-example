'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _firebaseAdmin = require('firebase-admin');

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();
router.route('/posts').get(function (req, res) {
  (0, _util.getDB)('posts').then(function (posts) {
    res.send({ posts: (0, _util.convertToArray)(posts) });
  });
});
router.route('/posts/:id').get(function (req, res) {
  (0, _util.getDB)('posts/' + req.params.id).then(function (post) {
    res.send({ post: post });
  });
});
router.route('/posts').post(function (req, res) {
  _firebaseAdmin2.default.database().ref('/posts').push(req.body);
  res.send(200);
});
router.route('/posts/:id').delete(function (req, res) {
  (0, _util.delDB)('posts/' + req.params.id).then(function () {
    return res.send(200);
  });
});
router.route('/posts/:id').put(function (req, res) {
  (0, _util.updateDB)('posts/' + req.params.id, req.body).then(function () {
    return res.send(200);
  });
});
exports.default = router;