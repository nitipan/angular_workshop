function myProductItemDirective() {
    return {
        require: "^^myProductList",
        restrict: "E",
        templateUrl: "myProductItemDirective.tmpl.html",
        scope: {
            item: "="
        },
        link: function(scope, element, attr, myProductListController) {

            scope.price = scope.item.id * 100;

            myProductListController.addProductItem(scope);


            scope.ok = function() {
                alert(JSON.stringify(scope.item));
            }

        }
    }
}