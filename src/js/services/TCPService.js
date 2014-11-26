function TCPService ($q) {

    var service = this;
    service.status = {};
    service.error = false;

    var tcpp = require('tcp-ping');

    service.ping = function (ip) {

      var d = $q.defer();

      tcpp.ping({ address: ip.address }, function(err, data) {

        if (err) {
          d.reject(err);
        }

        d.resolve(data);

      });

      return d.promise;
    };

};