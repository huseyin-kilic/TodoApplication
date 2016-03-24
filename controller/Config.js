app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('items', {
      url: "/items/:id",
      templateUrl: "views/item.html",
      controller: 'DetailController'
    });
});