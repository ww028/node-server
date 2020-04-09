const express = require('express')
const app = express()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '数据库地址',
  user: '用户名',
  password: '密码',
  database: '数据库名'
});

connection.connect();

// 示例get 请求，第一个参数就是接口路径
app.get('/list', function (err, res) {
  const sql = 'select * from 表名';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    // result 返回数据
    // 转换为json 格式
    res.json(result);
  });
})

app.listen(5001, '127.0.0.1', function () {
  console.log("http://127.0.0.1:5001");
})
