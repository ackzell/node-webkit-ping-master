function PingService ($q) {

    var pingService = this;

    pingService.status = {};
    pingService.error = false;
    pingService.session = null;

    var net_ping = require ("net-ping");

    pingService.ping = function (remoteHost, options) {

      var target = remoteHost.address;

      var deferred = $q.defer();

      var net_ping_options = {
        retries: options.attempts,
        timeout: options.timeout
      };

      try {
        pingService.session = net_ping.createSession(net_ping_options);
      } catch (e) {
        console.log(e);
      }

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

      if (pingService.session) {
        pingService.session.close();
      }

    };

};