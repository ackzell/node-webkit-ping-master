function TCPService () {

    var service = {};
    service.status = {};
    service.error = false;

    var tcpp = require('tcp-ping');

    service.ping = function (ip) {

      tcpp.ping({ address: ip.address }, function(err, data) {

        if (err) {
          service.status = err;
          service.error = true;
        }
        //console.log(data);
        service.status = data;

      });

    };

    return service;

};