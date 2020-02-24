// 获取列表
let db_help = require("../config/dbHelp.js");

let createTable = (data, success) => {
  // sql
  // AUTO_INCREMENT id 自增，VARCHAR(字符串 长度255) KEY(ID) id设置为主键
  let sql= `CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),PRIMARY KEY(id))`

  /**
   * resultData
   * @code: 状态码
   * @data：data
   * @codeMessage: 状态消息
   */
  const resultData = {
    code: null,
    data: null,
    codeMessage: null
  };
  db_help(sql, (error, result, fields) => {
    if (error) {
      resultData.error = error.message;
    }
    resultData.code = 200;
    resultData.data = result;
    resultData.codeMessage = "success";
    success(resultData);
  });
};

module.exports = createTable
