const express = require('express')
const router = express.Router()

const articletype = require('../controller/articletype.js')
router.get('/articletype', function (req, res, next) {
  // get 请求传递 req.query
  // post 请求传递 req.body
  articletype(req.query, data => {
    res.end(JSON.stringify(data))
  })
});

const models_list = require('../controller/models.js')
router.post('/models', function (req, res, next) {
  models_list(req.body, data => {
    res.end(JSON.stringify(data))
  })
});

module.exports = router;
