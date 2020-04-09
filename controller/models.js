const query = require('../mysql/pool')

const models_list = (data, success) =>{
  let sql = 'SELECT * FROM models'
  
  if(data.id){
    sql += ` WHERE id='${data.id}'`
  }

  const resultData = {
    code: null,
    data: {},
    codeMessage: null
  };

  query(sql, (error, result, fields) => {
    resultData.code = 200;
    resultData.codeMessage = "success";
    if (error) {
      resultData.error = error.message;
    } else {
      resultData.data = {
        status: true,
        data: result
      }
    }
    success(resultData);
  });
}

module.exports = models_list