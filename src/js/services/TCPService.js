function TCPService ($q) {

    var service = this;
    service.status = {};
    service.error = false;

    var tcpp = require('tcp-ping');

    var ping = require ("net-ping");


    service.ping = function (ip, options) {

      var target = ip.address;

      var d = $q.defer();

      // var options = {
      //   address: ip.address,
      //   port: options.port || 80,
      //   timeout: options.timeout || 5000,
      //   attempts: options.attempts || 10
      // };

      // console.log(options);

      // tcpp.ping(options, function(err, data) {

      //   if (err) {
      //     d.reject(err);
      //   }

      //   console.log(data);

      //   d.resolve(data);

      // });



    var session = ping.createSession ();

    session.pingHost (target, function (error, target) {
        if (error) {
            d.reject(error.toString());
            console.log (target + ": " + error.toString());
        } else {
            d.resolve(target);
            console.log (target + ": Alive");
        }
    });

      return d.promise;
    };




  /*  var ping = require('ping');

    service.ping = function(ip) {

        return ping.promise.probe(ip.address, {
            timeout: 5,
            extra: [""]
        });

    };*/





};