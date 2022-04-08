'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();

const { PORT } = process.env;

const app = (0, _express2.default)();

app.use(_express2.default.json());
app.use((0, _cors2.default)());
app.use(_routes2.default);

app.listen(PORT, () => {
  console.log(` 🧑 API running: ${PORT} `);
});

exports.default = app;