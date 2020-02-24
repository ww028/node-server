// 添加 修改
let db_help = require("../../config/dbHelp.js");

let postsAdd = (data, success) => {
  console.log(data)
  let sql= ``
  if(data.id){
    sql = `UPDATE posts SET title='${data.title}', name='${data.name}' WHERE id=${data.id}`;
  } else {
    sql =  `INSERT INTO posts(title,name) VALUES ('${data.title}', '${data.name}')`;
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
      resultData.data = {
        status: false,
        data: []
      }
    } else {
      resultData.data = {
        status: true,
        data: result
      }
    }
    resultData.status = true;
    resultData.code = 200;
    resultData.codeMessage = "success";
    success(resultData);
  });
};

module.exports = postsAdd
