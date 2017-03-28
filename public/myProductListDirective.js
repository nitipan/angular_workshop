function myProductListDirective() {

    return {
        transclude: true,
        template: "<md-list ng-transclude></md-list>",
        scope: {},
        controller: function($scope) {

            $scope.total = 0;

            this.addProductItem = function(item) {
                $scope.total += item.price;
            }

        }

    }

}