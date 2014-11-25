(function () {

  angular
    .module('pinger', ['ui.bootstrap'])
    .controller('MainCtrl', MainCtrl)
    .service('TCPService', TCPService);

})();


