function ProductService($http, $q) {

    this.getProducts = function() {

        return $q(function(resolve, reject) {
            $http.get("http://localhost/api/products")
                .then(function(result) {

                    if (result.data.length > 0)
                        resolve(result.data);
                    else
                        reject(null);
                })


        });
    }

    this.updateProduct = function(product) {

        return $q(function(resolve, reject) {
            $http.post("http://localhost/api/products", product).then(function(result) {
                if (result.data.status)
                    resolve(result.data);
            });
        });
    }
}