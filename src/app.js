(function () {

  angular
    .module('pinger', ['ui.bootstrap']);

  // MainCtrl.js
  function MainCtrl (tcpFactory) {
    var vm = this;
    var ip = {};

    vm.ipArray = [
    {
      address: '8.8.8.8',
      alias: 'nose'
    },
    {
      address: '127.0.0.1',
      alias: 'localhost'
    },
    {
      address: 'google.com',
      alias: 'gugle'
    }

    ];

    vm.addIP = function () {
      if (vm.ip) {
        vm.ipArray.push(vm.ip);
        vm.ip = {};
      }
    };

    vm.pingRemotes = function () {

      var len = vm.ipArray.length;

      for(var i = 0; i < len; i++ ){
        tcpFactory.ping(vm.ipArray[i]);
      }
    };
  }

  angular
    .module('pinger')
    .controller('MainCtrl', MainCtrl);

  // SomeService.js
  function tcpFactory () {
    var tcpFactory = {};

    var tcpp = require('tcp-ping');

    tcpFactory.ping = function (ip) {

      tcpp.ping({ address: ip.address }, function(err, data) {

        if (err) {
          console.log('There was an error: ', err);
        }

        console.log(data);
      });

    };

    return tcpFactory;
  };

  angular
    .module('pinger')
    .service('tcpFactory', tcpFactory);

  // ...

})();


