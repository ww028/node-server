const express = require('express')
const app = express()
const router = require('./router/index')
const bodyParser = require('body-parser');

// 解决跨域
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  if (req.method == 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

//解析post请求数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

app.listen(5001, '127.0.0.1', function () {
  console.log("http://127.0.0.1:5001");
})
