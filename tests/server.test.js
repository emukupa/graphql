const chai = require('chai');
const chaiHTTP = require('chai-http');

const server = require('../Server');

const { expect } = chai;

chai.use(chaiHTTP);

describe('Endpoints', function(){
  describe('[GET]', function(){
    it('should return status 200 success ok!', function(done){
      chai.request(server).get('/').end(function(err, response){
        if(err) done(err)
        expect(response.status).to.equal(200);
      })
      done();
    });
  });
});
