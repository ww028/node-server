// 获取列表
let db_help = require("../../config/dbHelp.js");

let postsDelete = (data, success) => {
  let post = {
    id: data.id
  }
  let sql = `DELETE FROM posts WHERE id=${data.id}`
 
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
  db_help(sql, post, (error, result, fields) => {
    resultData.code = 200;
    resultData.codeMessage = "success";
    if (error) {
      resultData.error = error.message;
      resultData.data = {
        message: '删除失败',
        status: false
      };
    } else {
      resultData.data = { 
        message: '删除成功',
        status: true
      };
    }
    success(resultData);
  });
};

module.exports = postsDelete
