(function () {

  angular
    .module('pingMaster', ['ui.bootstrap'])
    .controller('MainCtrl', MainCtrl)
    .service('PingService', ['$q', PingService]);

})();


