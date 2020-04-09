const query = require('../mysql/pool')

const article_type = (data, success) =>{
  let sql = 'SELECT * FROM articletype'

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

module.exports = article_type