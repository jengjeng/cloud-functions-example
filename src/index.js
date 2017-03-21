import 'babel-polyfill';
import cors from 'cors';
import express from 'express';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
import postsRoute from './posts.routes';

admin.initializeApp(functions.config().firebase);
const app = express();
// // Enable CORS
app.use(cors());
app.use(postsRoute);
export const api = functions.https.onRequest(app);
