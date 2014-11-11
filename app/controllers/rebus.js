var rebusApp = angular.module('rebusApp', ['RebusModel', 'ngTouch']);


// Index: http://localhost/views/rebus/index.html

rebusApp.controller('IndexCtrl', function ($scope, RebusRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/rebus/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/rebus.js)
  RebusRestangular.all('rebus').getList().then( function(rebuss) {
    $scope.rebuss = rebuss;
  });

  // Native navigation
  steroids.view.navigationBar.show("Rebus index");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/rebus/show.html?id=<id>

rebusApp.controller('ShowCtrl', function ($scope, $filter, RebusRestangular) {

  // Fetch all objects from the local JSON (see app/models/rebus.js)
  RebusRestangular.all('rebus').getList().then( function(rebuss) {
    // Then select the one based on the view's id query parameter
    $scope.rebus = $filter('filter')(rebuss, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("Rebus: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
