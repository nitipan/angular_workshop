function CatalogController($scope, $routeParams, productService, $mdDialog, $mdToast) {

    $scope.currentId = $routeParams.id;

    productService.getProducts()
        .then(function(result) {
            $scope.products = result;
        }, function(err) {
            console.log("error");
        })

    $scope.editProduct = function(product) {

        var dialogPromise = $mdDialog.show({
            locals: {
                product: angular.copy(product)
            },
            templateUrl: "product.edit.tmpl.html",
            clickOutsideToClose: true,
            controller: function($scope, product) {
                $scope.product = product;

                $scope.cancel = function() {
                    $mdDialog.cancel();
                }
                $scope.save = function() {
                    $mdDialog.hide($scope.product);
                }
            }
        });



        dialogPromise.then(function(editedProduct) {

            productService.updateProduct(editedProduct).then(

                function(edited) {


                    angular.forEach($scope.products, function(data, index) {
                        if (data.id == edited.item.id) {
                            $scope.products[index] = edited.item;

                            $mdToast
                                .show($mdToast
                                    .simple()
                                    .textContent('Product ' + edited.item.name + " updated"));
                        }
                    });

                }

            )

        }, function() {});
    }
}