var HoneyBadgerApi = require('honey_badger_api');

var defaultClient = HoneyBadgerApi.ApiClient.instance;

// Configure API key authorization: sigv4
var sigv4 = defaultClient.authentications['sigv4'];
sigv4.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sigv4.apiKeyPrefix['Authorization'] = "Token"

var api = new HoneyBadgerApi.DefaultApi()

var body = new HoneyBadgerApi.Service(); // {Service} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.servicesCreate(body, callback);