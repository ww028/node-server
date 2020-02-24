let mysql = require('mysql')
let db_config = require ('../config/dbConfig')
/**
 * dbConfig 是一个配置文件, 因为有数据库敏感信息, 所以没有提交, 文件内容如下
 * const config = {
    database: {
      database: "数据库名称",
      user: "账号",
      password: "密码",
      host: "数据库地址",
      port: "数据库端口",
      insecureAuth: true,
      useConnectionPooling: true
    }
  };
 */
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
