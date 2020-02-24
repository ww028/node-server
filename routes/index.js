var express = require('express');
var router = express.Router();
let getList = require('../controller/getList_controller.js')
let productList = require('../controller/product/productList_controller.js')
let productEditOrAdd = require('../controller/product/productEditOrAdd.js')
let createTable = require('../controller/createTable.js')
let postsGet = require('../controller/posts/postsGet.js')
let postsAdd = require('../controller/posts/postsAdd.js')
let postsDelete = require('../controller/posts/postsDelete.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/createtables', function(req, res, next) {
//   createTable(req.query, data =>{
//     console.log(data)
//     res.end(JSON.stringify(data))
//   })
// });

router.post('/post/get', function(req, res, next) {
  postsGet(req.body, data =>{
    console.log(data)
    res.end(JSON.stringify(data))
  })
});

router.post('/post/delete', function(req, res, next) {
  postsDelete(req.body, data =>{
    console.log(data)
    res.end(JSON.stringify(data))
  })
});

router.post('/post/add', function(req, res, next) {
  postsAdd(req.body, data =>{
    console.log(data)
    res.end(JSON.stringify(data))
  })
});

router.get('/list/get', function(req, res, next) {
  getList(req.body, data =>{
    console.log(data)
    res.end(JSON.stringify(data))
  })
});

router.get('/product/get', function(req, res, next) {
  productList(req.query, data =>{
    console.log(data)
    res.end(JSON.stringify(data))
  })
});

router.get('/product/edit', function(req, res, next) {
  productEditOrAdd(req.query, data =>{
    console.log(data)
    res.end(JSON.stringify(data))
  })
});

module.exports = router;
