'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postController = require('./Controllers/postController');

var _postController2 = _interopRequireDefault(_postController);

var _express = require('express');

var _uploadConfig = require('../src/config/uploadConfig');

var _uploadConfig2 = _interopRequireDefault(_uploadConfig);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const upload = (0, _multer2.default)(_uploadConfig2.default);

const route = (0, _express.Router)();

route.get('/', _postController2.default.getAll);
route.post('/register', upload.single('image'), _postController2.default.register);

exports.default = route;