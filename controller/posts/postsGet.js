let db_help = require("../../config/dbHelp.js");

let postsGet = (data, success) => {
  console.log(data)
  let params=''
  let sql = ''
  if(data.id){
    params = 'id'
  } else if(data.name){
    params = 'name'
  } else if(data.params){
    params = 'title'
  }
  if(data.id || data.name){
    sql = `SELECT * FROM posts WHERE id=${data.id}`;
  } else {
    sql = "SELECT * FROM posts";
  }
 
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

module.exports = postsGet
