// SomeService.js
  function tcpFactory () {
    var tcpFactory = {};

    var tcpp = require('tcp-ping');

    tcpFactory.ping = function (ip) {

      tcpp.ping({ address: ip.address }, function(err, data) {

        if (err) {
          console.log('There was an error: ', err);
          return "Error: " + err;
        }
        console.log(data);

        return data;

      });

    };

    return tcpFactory;
  };