// Generated by CoffeeScript 1.6.3
(function() {
  var mainApp;

  mainApp = angular.module("MainApp", ['metaService', 'demoService']);

  mainApp.constant('MainConstants', {
    name: 'Halide',
    owner: 'SaltStack'
  });

  mainApp.config([
    "MetaConstants", "MainConstants", "$locationProvider", "$routeProvider", function(MetaConstants, MainConstants, $locationProvider, $routeProvider) {
      var base;
      $locationProvider.html5Mode(true);
      console.log("MetaConstants");
      console.log(MetaConstants);
      console.log("MainConstants");
      console.log(MainConstants);
      base = MetaConstants.baseUrl;
      $routeProvider.when("" + base + "/app/home", {
        templateUrl: "" + base + "/static/app/view/home.html",
        controller: "HomeCtlr"
      }).when("" + base + "/app/watch/:id", {
        templateUrl: "" + base + "/static/app/view/watch.html",
        controller: "WatchCtlr"
      }).when("" + base + "/app/test", {
        templateUrl: "" + base + "/static/app/view/test.html",
        controller: "TestCtlr"
      }).otherwise({
        redirectTo: "" + base + "/app/home"
      });
      return true;
    }
  ]);

  mainApp.controller('NavbarCtlr', [
    '$scope', '$location', '$route', '$routeParams', 'MetaConstants', function($scope, $location, $route, $routeParams, MetaConstants) {
      console.log("NavbarCtlr");
      $scope.location = $location;
      $scope.route = $route;
      $scope.winLoc = window.location;
      $scope.baseUrl = MetaConstants.baseUrl;
      $scope.errorMsg = '';
      $scope.views = MetaConstants.views;
      $scope.navery = {
        'states': {
          'home': 'inactive',
          'test': 'inactive'
        },
        'paths': {
          "/app$": "home",
          "/app/$": "home",
          "/app/home": "home",
          "/app/watch": "watch",
          "/app/test": "test"
        },
        'activate': function(nav) {
          var x;
          this.states[nav] = 'active';
          for (x in this.states) {
            if (x !== nav) {
              this.states[x] = 'inactive';
            }
          }
          return true;
        },
        'update': function(newPath, oldPath) {
          var nav, path, _ref;
          _ref = this.paths;
          for (path in _ref) {
            nav = _ref[path];
            if (newPath.match(path) != null) {
              this.activate(nav);
              return true;
            }
          }
          return true;
        }
      };
      $scope.$watch('location.path()', function(newPath, oldPath) {
        $scope.navery.update(newPath, oldPath);
        return true;
      });
      return true;
    }
  ]);

  mainApp.controller('RouteCtlr', [
    '$scope', '$location', '$route', '$routeParams', 'MetaConstants', function($scope, $location, $route, $$routeParams, MetaConstants) {
      console.log("RouteCtlr");
      $scope.location = $location;
      $scope.route = $route;
      $scope.winLoc = window.location;
      $scope.baseUrl = MetaConstants.baseUrl;
      $scope.errorMsg = '';
      return true;
    }
  ]);

}).call(this);