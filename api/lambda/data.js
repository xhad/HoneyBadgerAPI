'use strict';
var AWS = require('aws-sdk');
var uuid = require('uuid');
var dynamoDB = new AWS.DynamoDB();
var documentClient = new AWS.DynamoDB.DocumentClient();
var rfr = require('rfr');
var config = rfr('config');
let LambdaError = require('./errors');

class Table {
  /**
   * [constructor description]
   * @param  {[type]} tableParams is a passthrough parameter for DynamoDB table definition
   * @param  {[type]} options     Custom options, currently supports timestamps and uuid parameters
   * @return {[type]}             [description]
   */
  constructor(tableParams, options) {
    this.options = options || {};
    this.timestamps = this.options.timestamps || false;
    // For all fields in options.uuid an automatic UUID is generated for each PUT request
    this.uuid = this.options.uuid || [];
    this.tableParams = tableParams;
  }

  delete(key) {
    return new Promise((resolve, reject) => {
      documentClient.delete({
        TableName: this.tableParams.TableName,
        Key: key
      }, (err) => {
        if (err) {
          reject(LambdaError.deleteDataFailed(err));
        }
        resolve({});
      });
    })

  }

  get(key) {
    return new Promise((resolve, reject) => {
      documentClient.get({
        TableName: this.tableParams.TableName,
        Key: key
      }, (err, data) => {
        if (err || !data.Item) {
          console.log(err);
          reject(LambdaError.notFound(JSON.stringify(key)));
        } else {
          resolve(data.Item);
        }
      });
    });
  }

  scan() {
    return new Promise((resolve, reject) => {
      documentClient.scan({
        TableName: this.tableParams.TableName,
        ConsistentRead: true
      }, (err, data) => {
        if (err) {
          reject(LambdaError.internalError(err));
        } else {
          let items = [];
          if (data && data.Items) {
            items = data.Items;
          }
          resolve({ items });
        }
      });
    });
  }

  put(data) {
    for (var i=0;i<this.uuid.length;i++) {
      // If provided don't create an UUID on the property that is marked for auto uuid.
      data[this.uuid[i]] = data[this.uuid[i]] || uuid.v1();
    }
    if (this.timestamps) {
      if (data.createTime) {
        data.updateTime = new Date().toISOString();
      } else {
        data.createTime = new Date().toISOString();
      }
    }
    return new Promise((resolve, reject) => {
      documentClient.put({
        TableName: this.tableParams.TableName,
        Item: data
      }, (err) => {
        if (err) {
          console.error(err);
          reject(LambdaError.putDataFailed(err));
        } else {
          resolve(data);
        }
      });
    });
  }

  deleteTable() {
    return new Promise((resolve, reject) => {
      var params = {
        TableName: this.tableParams.TableName
      };
      dynamoDB.deleteTable(params, (err) => {
        if (err) {
          reject(err);
          return;
        }
        console.log(`Table deleted: '${this.tableParams.TableName}'`);
        resolve();
      });
    });
  }

  createTable() {
    return new Promise((resolve, reject) => {
      dynamoDB.createTable(this.tableParams, (err) => {
        if (err) {
          reject(err);
          return;
        }
        console.log(`Table created: '${this.tableParams.TableName}'`);
        resolve();
      });
    });
  }

  safeCreateTable() {
    return new Promise((resolve, reject) => {
      dynamoDB.describeTable({
        TableName: this.tableParams.TableName,
      }, (err, data) => {
        if (err) {
          if (err.code === 'ResourceNotFoundException') {
            this.createTable()
            .then(data => {resolve(data);} )
            .catch(err => {reject(err); });
          } else {
            reject(err);
          }
        } else {
          // Need to update or return?
          console.log(`Table ${this.tableParams.TableName} already exists`);//, data);
          resolve(data);
        }
      });
    });
  }
}

class ServicesTable extends Table {
  constructor() {
    super({
      // Parametrization supported for the name so it can be user configured.
      TableName: config.getName('services'),
      KeySchema: [{ AttributeName: 'serviceId', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'serviceId', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      }
    },
    // These are custom options that the Table class understands
    {
      // Which parameters are auto-generated with uuid.v1() which is time dependant.
      uuid: ['serviceId'],
      // Whether to add timestamps to the entries.
      timestamps: true,
    });
  }

  delete(serviceId) {
    return super.delete({serviceId: serviceId});
  }

  get(serviceId) {
    return super.get({serviceId: serviceId});
  }

  update(serviceId) {
    return super.put({serviceId: serviceId});
  }
}


module.exports = {
  ServicesTable
};
