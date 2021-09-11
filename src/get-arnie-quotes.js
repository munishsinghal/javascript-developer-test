const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  // return results;

  //additionally below things can be done for improvement
  // 1. validation
  // 2. enums for json object key
  // 3. enums of http codes
  // 4. separate function can be created for message retrival from json 
  return Promise.all((urls.map(function (url) {
    return httpGet(url).then(response => {
      return (response.status == 200) ?
        { 'Arnie Quote': JSON.parse(response.body).message }
        : { 'FAILURE': JSON.parse(response.body).message }
    });
  })));
}
module.exports = {
  getArnieQuotes,
};
