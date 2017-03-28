var app = angular.module("app", ['ngRoute', 'ngMaterial']);


app.config(function($routeProvider) {

    $routeProvider
        .when("/", {
            template: "Default page"
        })
        .when("/register", {
            template: "<h2>I'm regiter page</h2>"
        })
        .when("/catalog/:id/", {
            templateUrl: "catalogView.html",
            controller: "CatalogController"
        }).when("/help", {
            template: "<h2>I'm help page</h2>"
        }).otherwise({
            redirectTo: "/"
        });


});



// directives
app.directive("myProductList", myProductListDirective);
app.directive("myProductItem", myProductItemDirective);

// services
app.service("ProductService", ProductService);

// controllers
app.controller("ProductController", ProductController);
app.controller("CatalogController", ['$scope', '$routeParams', 'ProductService', '$mdDialog', '$mdToast', CatalogController]);