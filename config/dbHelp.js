let mysql = require('mysql')
let db_config = require ('../config/dbConfig')
// 数据库链接池
let pool = mysql.createPool({
  host: db_config.database.host,
  user: db_config.database.user,
  password: db_config.database.password,
  database: db_config.database.database,
  prot: db_config.database.prot,
})

let query = (sql, options, callback) =>{
  pool.getConnection((error, connection) =>{
    if(error){
      callback(error, null, null)
    } else {
      connection.query(sql, options, (error, results, fields) =>{
        // 释放链接
        connection.release()
        // 事件驱动回调
        callback(error, results, fields)
      })
    }
  })
}

module.exports = query
