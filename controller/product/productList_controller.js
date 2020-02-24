// 产品列表
let db_help = require("../../config/dbHelp.js");

let productList = (data, success) => {
  // sql
  let sql = "SELECT * FROM product_list";
 
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

module.exports = productList
