/*
 * 创建数据库连接池
 */
const mysql = require('mysql')
const config = require('./config')
const pool = mysql.createPool(config)

const query = function (sql, options, callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      callback(err, null, null)
    } else {
      connection.query(sql, options, function (err, results, fields) {
        callback(err, results, fields)
      })

      // 释放链接
      connection.release()
    }
  })
}

module.exports = query;
