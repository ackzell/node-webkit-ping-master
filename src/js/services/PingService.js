function PingService ($q) {

    var pingService = this;

    pingService.status = {};
    pingService.error = false;
    pingService.session = {};

    var net_ping = require ("net-ping");

    pingService.ping = function (remoteHost, options) {

      var target = remoteHost.address;

      var deferred = $q.defer();

      pingService.session = net_ping.createSession();

      pingService.session.pingHost (target, function (error, target) {

        if (error) {

            deferred.reject(error.toString());

        } else {

          deferred.resolve(target);

        }
      });

      return deferred.promise;
    };

    pingService.stop = function () {
      pingService.session.close();

    };

};