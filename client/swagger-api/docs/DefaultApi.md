# HoneyBadgerApi.DefaultApi

All URIs are relative to *http://localhost:10010*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servicesCreate**](DefaultApi.md#servicesCreate) | **POST** /services | 
[**servicesDelete**](DefaultApi.md#servicesDelete) | **DELETE** /services/{serviceId} | 
[**servicesGet**](DefaultApi.md#servicesGet) | **GET** /services/{serviceId} | 
[**servicesList**](DefaultApi.md#servicesList) | **GET** /services | 


<a name="servicesCreate"></a>
# **servicesCreate**
> Service servicesCreate(body)



Adds a Services

### Example
```javascript
var HoneyBadgerApi = require('honey_badger_api');
var defaultClient = HoneyBadgerApi.ApiClient.instance;

// Configure API key authorization: sigv4
var sigv4 = defaultClient.authentications['sigv4'];
sigv4.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sigv4.apiKeyPrefix = 'Token';

var apiInstance = new HoneyBadgerApi.DefaultApi();

var body = new HoneyBadgerApi.Service(); // Service | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servicesCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Service**](Service.md)|  | 

### Return type

[**Service**](Service.md)

### Authorization

[sigv4](../README.md#sigv4)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="servicesDelete"></a>
# **servicesDelete**
> servicesDelete(serviceId)



Deletes a Service

### Example
```javascript
var HoneyBadgerApi = require('honey_badger_api');
var defaultClient = HoneyBadgerApi.ApiClient.instance;

// Configure API key authorization: honeybadger-custom-authorizer
var honeybadger-custom-authorizer = defaultClient.authentications['honeybadger-custom-authorizer'];
honeybadger-custom-authorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//honeybadger-custom-authorizer.apiKeyPrefix = 'Token';

var apiInstance = new HoneyBadgerApi.DefaultApi();

var serviceId = "serviceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.servicesDelete(serviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[honeybadger-custom-authorizer](../README.md#honeybadger-custom-authorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="servicesGet"></a>
# **servicesGet**
> Service servicesGet(serviceId)



Returns a Service

### Example
```javascript
var HoneyBadgerApi = require('honey_badger_api');
var defaultClient = HoneyBadgerApi.ApiClient.instance;

// Configure API key authorization: sigv4
var sigv4 = defaultClient.authentications['sigv4'];
sigv4.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sigv4.apiKeyPrefix = 'Token';

var apiInstance = new HoneyBadgerApi.DefaultApi();

var serviceId = "serviceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servicesGet(serviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 

### Return type

[**Service**](Service.md)

### Authorization

[sigv4](../README.md#sigv4)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="servicesList"></a>
# **servicesList**
> ServicesListResponse servicesList()



Returns List of &#39;Services&#39;

### Example
```javascript
var HoneyBadgerApi = require('honey_badger_api');
var defaultClient = HoneyBadgerApi.ApiClient.instance;

// Configure API key authorization: honeybadger-userPool-authorizer
var honeybadger-userPool-authorizer = defaultClient.authentications['honeybadger-userPool-authorizer'];
honeybadger-userPool-authorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//honeybadger-userPool-authorizer.apiKeyPrefix = 'Token';

var apiInstance = new HoneyBadgerApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servicesList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServicesListResponse**](ServicesListResponse.md)

### Authorization

[honeybadger-userPool-authorizer](../README.md#honeybadger-userPool-authorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

