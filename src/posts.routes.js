import { Router } from 'express';
import admin from 'firebase-admin';
import moment from 'moment';
import { getDB, convertToArray, delDB, updateDB } from './util';

const router = new Router();
router.route('/posts').get((req, res) => {
  getDB('posts').then(posts => {
    res.send({ posts: convertToArray(posts) });
  });
});
router.route('/posts/:id').get((req, res) => {
  getDB(`posts/${req.params.id}`).then(post => {
    res.send({ post });
  });
});
router.route('/posts').post((req, res) => {
  admin.database().ref('/posts').push(req.body);
  res.send(200);
});
router.route('/posts/:id').delete((req,res) => {
  delDB(`posts/${req.params.id}`).then(() => res.send(200));
});
router.route('/posts/:id').put((req, res) => {
  updateDB(`posts/${req.params.id}`, req.body).then(() => res.send(200));
});
export default router;
