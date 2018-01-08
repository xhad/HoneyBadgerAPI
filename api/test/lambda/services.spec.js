'use strict';
var rfr = require('rfr');
var services = rfr('lambda/services');
var chai = require('chai');
var expect = chai.expect;
/* jshint -W024 */
/* jshint expr:true */
describe('Create Get Update Delete', function() {
  
  before((done) => {
    services.Create({
      body: JSON.stringify({
        name: 'Service1',
        description: 'My description'
      })},
      {
        // Empty context object for testing purposes
      },
      // Callback anonymous function for Lambda Node 4.3 runtime
      (err, out) => {
        let data = JSON.parse(out.body);
        expect(err).to.not.exist;
        expect(data.name).to.be.eql('Service1');
        expect(data.serviceId).to.exist;
        this.serviceId = data.serviceId;
        done();
      }
    );
  });
  it('Get and Update value', (done) => {
    services.Get(
      {pathParameters: {serviceId: this.serviceId}},
      {
        // Empty context object for testing purposes
      },
      (err, out) => {
        let data = JSON.parse(out.body);
        expect(err).to.not.exist;
        expect(data.serviceId).to.be.eql(this.serviceId);
        expect(data.name).to.be.eql('Service1');
        services.Update({
          pathParameters: { serviceId: this.serviceId },
          body: JSON.stringify({
            name: 'Services1-Renamed'
          })
        }, {}, (err, out) => {
          expect(err).to.not.exist;
          let data = JSON.parse(out.body);
          expect(data.updateTime).to.exist;
          expect(data.name).to.be.eql('Service1-Renamed');
          done();
        })
      }
    );
  });
  after((done) => {
    services.Delete(
      {
        pathParameters:{ serviceId: this.serviceId }
      },
      {
       // Empty context object for testing
      },
      (err, data) => {
        console.log(JSON.stringify(err, null, 4));
        expect(err).to.not.exist;
        expect(JSON.parse(data.body)).to.be.eql({});
        done();
      }
    );
  });
});

describe('Services Not Found', function() {
  it('Get 404', (done) => {
    services.Get({
        pathParameters: {serviceId: 'something'}
      },
      {
        // Empty context object for testing purposes
      },
      (err, out) => {
        console.log(out);
        expect(err).to.not.exist;
        expect(out.statusCode).to.be.eql(404);
        done();
      });
  });

  it('Update 404', (done) => {
    services.Update({
        pathParameters: {servicesId: 'something'},
        body: JSON.stringify({name : 'foo'})
      },
      {
        // Empty context object for testing purposes
      },
      (err, out) => {
        console.log(out);
        expect(err).to.not.exist;
        expect(out.statusCode).to.be.eql(404);
        done();
      });
  });

  it('Delete 404', (done) => {
    services.Delete({
        pathParameters: {servicesId: 'something'},
      },
      {
        // Empty context object for testing purposes
      },
      (err, out) => {
        console.log(out);
        expect(err).to.not.exist;
        expect(out.statusCode).to.be.eql(404);
        done();
      });
  });
});