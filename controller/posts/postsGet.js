let db_help = require("../../config/dbHelp.js");

let postsGet = (data, success) => {
  console.log(data)
  let sql = 'SELECT * FROM posts'
  let params = ''
  let params_arr = []
  let index = 0;

  if(data.id){
    params_arr[index] = `id=${data.id}`
    index ++
  }

  if(data.title){
    params_arr[index] = `title like '%${data.title}%'`
    index++
  }

  if(data.name){
    params_arr[index] = `name like '%${data.name}%'`
    index++
  }

  params = params_arr.join(' AND ')

  if(params){
    sql += ` WHERE ${params}`
  }

  console.log(sql)
  
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
