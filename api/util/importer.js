'use strict';
var rfr = require('rfr');
var logger = rfr('util/logger');
var services = rfr('lambda/services');
var cognito = rfr('util/cognito');

/*
 More information about the UserGroups and the precedence
 http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-user-groups.html#assigning-precedence-values-to-groups
 */

var SampleGroups = [
  {
    name: 'adminGroup',
    description: 'Cognito user group for administrators',
    precedence: 0,
    roleArn: 'cognitoAuthAdminRoleArn'
  },
  {
    name: 'clientGroup',
    description: 'Cognito user group for honeybadger users',
    precedence: 1,
    roleArn: 'cognitoAuthStandardRoleArn'
  },
];


var SampleUsers = [
  {
    username: 'masterbadger',
    email: 'admin@honeybadger.services',
    givenName: 'Admin',
    familyName: 'Badger',
    password: 'Test123!'

  },
  {
    username: 'honeybadger',
    email: 'muffin@honeybadger.services',
    givenName: 'User',
    familyName: 'Badger',
    password: 'Test123!'
  }
];

class SampleData {

  constructor() {

  }

  generateSampleData() {
    return Promise.all([
      // Assassin
      this.generateSampleLocation('Assassin', 'Las Vegas',
        'https://s3.amazonaws.com/honeybadger-public-image-repository/aria.jpg'),
      // Waste Disposal
      this.generateSampleLocation('Waste Disposal', 'Chicago'),
      // Troglydyte
      this.generateSampleLocation('Troggin Service', 'Baltimore',
        'https://s3.amazonaws.com/honeybadger-public-image-repository/encore.jpg'),
      // Honey Badgering
      this.generateSampleLocation('General Badgering', 'Montreal',
        'https://s3.amazonaws.com/honeybadger-public-image-repository/mirage.jpg')
    ]);
  }

  generateSampleLocation(name, description, imageUrl) {
    return new Promise((resolve, reject) => {

      services.Create({
          body: JSON.stringify({
            name: name,
            description: description,
            imageUrl: imageUrl,
          })
        },
        {/* Empty context object */},
        (err, out) => {
          if (err !== null) {
            reject(err);
          } else {
            // return the serviceId
            let data = JSON.parse(out.body);
            resolve(data.serviceId);
          }
        }
      );
    });
  }

  
  


  static createPromiseToCreateUser(user) {
    let promise = new Promise((resolve, reject) => {
      cognito.adminCreateUser(user)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  static generateSampleUsers() {
    let promises = [];
    for (let user of SampleUsers) {
      // create a Promise for each user creation task
      let promise = SampleData.createPromiseToCreateUser(user);
      promises.push(promise);
    }
    // now, run all those Promises in parallel
    return Promise.all(promises);
  }

  //TODO: Update following method to accept a particular username or user details object and lookup their corresponding user identity pools Id
  static getSampleUser() {
    return new Promise((resolve) => {
      let user = SampleUsers[1];
      cognito.getIdentityPoolUserId(user).then((data) => {
        // logger.info(data);
        resolve(data);
      });
    });
  }

  static createPromiseToCreateGroup(group) {
    let promise = new Promise((resolve, reject) => {
      cognito.adminCreateGroup(group)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  static generateSampleUserGroups() {
    let promises = [];
    for (let group of SampleGroups) {
      let promise = SampleData.createPromiseToCreateGroup(group);
      promises.push(promise);
    }
    return Promise.all(promises);
  }


  static createUserAssignmentToGroupPromise(user, group) {
    let promise = new Promise((resolve, reject) => {
      cognito.adminAssignUserToGroup(user, group)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }


  static assignUsersToGroups() {
    let promises = [];
    for (let user of SampleUsers) {
      let group = null;

      if (user.username === "admin1") {
        group = SampleGroups[0];
      } else {
        group = SampleGroups[1];
      }
      let promise = SampleData.createUserAssignmentToGroupPromise(user, group);
      promises.push(promise);
    }
    logger.info(promises.length);
    return Promise.all(promises);


  }


} // end class

module
  .exports = {
  SampleData
};
