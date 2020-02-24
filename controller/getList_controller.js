// 获取列表
let lodash = require("lodash");
let db_help = require("../config/dbHelp.js");

let getList = (data, success) => {
  // sql
  let sql = "SELECT * FROM list";
  let counter = 0;
  let sql_ = sql + "where";
  // 多个条件时循环data去除key, val
  lodash.forEach(data, (key, val) => {
    if (counter > 0) {
      sql = sql + " AND " + val + " = " + key;
    } else {
      sql = sql_ + val + "= " + key + " OR name LIKE %" + key + "%";
    }
    counter++;
  });

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

module.exports = getList
