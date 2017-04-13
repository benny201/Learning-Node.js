var configValues = require('./config');

module.exports = {

  getDbConnectionString: function() {
    return 'mongodb://'+ configValues.username + ':' + configValues.pwd + '@ds159670.mlab.com:59670/bennydb';
  }
}
