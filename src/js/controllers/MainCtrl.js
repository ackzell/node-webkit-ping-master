  // MainCtrl.js
  function MainCtrl (tcpFactory) {
    var vm = this;
    var ip = {};


    vm.ipArray = [];
    vm.pingerInterval = {};

    vm.addIP = function () {
      if (vm.ip) {
        vm.ipArray.push(vm.ip);
        vm.ip = {};
      }
    };

    vm.pingRemotes = function () {

      console.log('ping started');

      var len = vm.ipArray.length;

      vm.pingerInterval = setInterval(function(){
        for(var i = 0; i < len; i++ ){

          console.log('vm.ipArray[i]', vm.ipArray[i]);

          vm.ipArray[i].status = tcpFactory.ping(vm.ipArray[i]);
        }
      }, 500);


    };

    vm.stopPing = function() {
      clearInterval(vm.pingerInterval);
    };

  };