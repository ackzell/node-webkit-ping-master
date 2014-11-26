function MainCtrl (TCPService) {

    var vm = this;

    /*
      This is going to be the model that the application uses to
      represent an ip address
     */
    var ip = {
      address: null,
      alias: null,
      status: null
    };


    /*
      This array holds the list of IP addresses that will be
      pinged.
     */
    vm.ipArray = [{address: "google.com", alias: "G"}];

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

      console.log('ping started');

      var len = vm.ipArray.length;

      vm.pingerInterval = setInterval(function(){

        vm.ipArray.forEach(function(currIP) {

          TCPService.ping(currIP)
            .then(
              function (res){
                // vm.ipArray[i].status = res;
                currIP.status = res;
                console.log(res);

              },
              function (err) {
                currIP.status = err;
            });
        });

      }, 500);


    };

    /*
      This method stops all the current pings
     */
    vm.stopPing = function() {
      clearInterval(vm.pingerInterval);
    };

  };