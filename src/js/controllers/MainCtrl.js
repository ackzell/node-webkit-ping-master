function MainCtrl (PingService) {

    var vm = this;

    /*
      This is going to be the model that the application uses to
      represent an ip address
     */
    var ip = {
      id: null,
      address : "",
      alias   : "",
      status  : "",
      details : ""
    };


    vm.options = {
      frequency: 5000,
      timeout: 5000,
      attempts: 10
    };

    vm.cycleStatus = "Stopped";

    /*
      This array holds the list of IP addresses that will be
      pinged.
     */
    vm.ipArray = [];

    /*
      This object will help to store the interval which
      should be fired / stopped by the user
     */
    vm.pingerInterval = {};


    /*
      This method appends an IP to the list of
      addresses to be pinged.
     */
    vm.addIP = function () {
      //checking if the viewModel has an IP address in it
      // ie. the textfield is filled
      if (vm.ip) {
        vm.ip.id = Date.now();
        vm.ipArray.push(vm.ip);
        vm.ip = {}; // clearing the text field
      }
    };

    vm.removeIP = function (id) {

      if (id) {
        for (var i = 0; i < vm.ipArray.length; i++) {
          if (vm.ipArray[i].id === id) {
            vm.ipArray.splice(i,1);
          }
        }
      }

    };


    /*
      This method makes the actual pings to the list of IPs
     */
    vm.pingRemotes = function () {

      vm.cycleStatus = "Started";

      var len = vm.ipArray.length;

      vm.pingerInterval = setInterval(function(){

        vm.ipArray.forEach(function(currIP) {
          currIP.status = "Pinging...";

          PingService.ping(currIP, vm.options)
            .then(
              function (res){

                if (res) currIP.status = "OK";
                currIP.details = "";

              },
              function (err) {

                currIP.status = "ERR";
                currIP.details = err;

            });
        });

      }, vm.options.frequency);


    };

    /*
      This method stops all the current pings
     */
    vm.stopPing = function() {
      PingService.stop();
      clearInterval(vm.pingerInterval);
      vm.cycleStatus = "Stopped";
    };

  };