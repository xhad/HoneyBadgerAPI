/**
 * HoneyBadger-API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Service'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Service'));
  } else {
    // Browser globals (root is window)
    if (!root.HoneyBadgerApi) {
      root.HoneyBadgerApi = {};
    }
    root.HoneyBadgerApi.ServicesListResponse = factory(root.HoneyBadgerApi.ApiClient, root.HoneyBadgerApi.Service);
  }
}(this, function(ApiClient, Service) {
  'use strict';




  /**
   * The ServicesListResponse model module.
   * @module model/ServicesListResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ServicesListResponse</code>.
   * @alias module:model/ServicesListResponse
   * @class
   * @param items {Array.<module:model/Service>} 
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>ServicesListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServicesListResponse} obj Optional instance to populate.
   * @return {module:model/ServicesListResponse} The populated <code>ServicesListResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [Service]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Service>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


