var app = angular.module("basicSpaApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      template: "<h2>Home</h2><p>Welcome to the AngularJS SPA home page.</p>"
    })
    .when("/about", {
      template: "<h2>About</h2><p>This page demonstrates routing using ngRoute.</p>"
    })
    .when("/contact", {
      template: "<h2>Contact</h2><p>Email: web-lab@example.com</p>"
    })
    .otherwise({
      redirectTo: "/home"
    });
});
