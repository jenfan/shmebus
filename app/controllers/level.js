var levelApp = angular.module('levelApp', ['LevelModel', 'ngTouch']);


// Index: http://localhost/views/level/index.html

levelApp.controller('IndexCtrl', function ($scope, LevelRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/level/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/level.js)
  LevelRestangular.all('level').getList().then( function(levels) {
    $scope.levels = levels;
  });

  // Native navigation
  steroids.view.navigationBar.show("Level index");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/level/show.html?id=<id>

levelApp.controller('ShowCtrl', function ($scope, $filter, LevelRestangular) {

  // Fetch all objects from the local JSON (see app/models/level.js)
  LevelRestangular.all('level').getList().then( function(levels) {
    // Then select the one based on the view's id query parameter
    $scope.level = $filter('filter')(levels, {id: steroids.view.params['id']})[0];
  });
  LevelRestangular.all('rebus').getList().then( function(rebuss) {
    // Then select the one based on the view's id query parameter
    $scope.rebus = $filter('filter')(rebuss, {id: steroids.view.params['id']})[0];
  });
  $scope.openrebus = function(id) {
      webView = new steroids.views.WebView("/views/level/rebus.html?id="+id);
      steroids.layers.push(webView);
    };
  

  // Native navigation
  steroids.view.navigationBar.show("Level: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});

// Show: http://localhost/views/level/show.html?id=<id>

levelApp.controller('rebusCtrl', function ($scope, $filter, LevelRestangular) {

  // Fetch all objects from the local JSON (see app/models/level.js)
  LevelRestangular.all('rebus').getList().then( function(rebuss) {
    // Then select the one based on the view's id query parameter
    $scope.rebus = $filter('filter')(rebuss, {id: steroids.view.params['id']})[0];
  });
  // Native navigation
  steroids.view.navigationBar.show("Level: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});

levelApp.controller("ReviewController", function(){

    var ctrl = this;
    this.review = {};

    this.addReview = function(rebus){
      // if (ctrl.otvet == rebus.otvet)
      if (ctrl.otvet == rebus.otvet)
      {
        alert("Pravilno");
      }
      // product.reviews.push(this.review);
      // this.review = {};
    };

});
