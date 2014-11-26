function MainCtrl (TCPService) {

    var vm = this;

    /*
      This is going to be the model that the application uses to
      represent an ip address
     */
    var ip = {
      address : "",
      alias   : "",
      status  : "",
      details : {}
    };


    vm.options = {
      frequency: 5000,
      timeout: 5000,
      attempts: 10,
      port: 80
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
        vm.ipArray.push(vm.ip);
        vm.ip = {}; // clearing the text field
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

          TCPService.ping(currIP, vm.options)
            .then(
              function (res){

                if (res.min) {
                  currIP.status = "OK";
                } else {
                  currIP.status = "ERR";
                }

                currIP.details = res;
              },
              function (err) {
                //handle error
            });
        });

      }, vm.options.frequency);


    };

    /*
      This method stops all the current pings
     */
    vm.stopPing = function() {
      clearInterval(vm.pingerInterval);
      vm.cycleStatus = "Stopped";
    };

  };