// ProductService class

function ProductService(){

    // Get list of product
    this.getListProduct = function() {
        var promise = axios({
            method: 'get',
            url: 'https://636ce241ab4814f2b2711706.mockapi.io/ShopPhone',
        });
        return promise;
    }

    // Add new Product
    this.addProduct = function(newProduct) {
        return axios({
            method: 'post',
            url: 'https://636ce241ab4814f2b2711706.mockapi.io/ShopPhone',
            data: newProduct
        });
    }

    // Delete Product
    this.delProduct = function(id) {
        return axios({
            method: 'delete',
            url: `https://636ce241ab4814f2b2711706.mockapi.io/ShopPhone/${id}`
        });
    }

    // Get detail a product
    this.getDetailProduct = function(id) {
        return axios({
            method: 'get',
            url: `https://636ce241ab4814f2b2711706.mockapi.io/ShopPhone/${id}`
        });
    }

    // Update a product
    this.updateProduct = function(id) {
        return axios({
            method: 'put',
            url: `https://636ce241ab4814f2b2711706.mockapi.io/ShopPhone/${id}`,
            data: newData
        });
    }

    // filterProduct
    this.filterProductByType = function(typeProduct) {
        var resultArray = [];
        // trim space and convert lowercase
        var typeLowerCase = typeProduct.replace(/\s/g, "").toLowerCase();
        // console.log("typeLowerCase: ", typeLowerCase);
        
        var promise = this.getListProduct();
        promise.then(function(result){
            // TODO: filter here
            result.data.map(function(product){
                // console.log("product: ", product);
                 // trim space and convert lowercase
                typeProduct = product.type.replace(/\s/g, "").toLowerCase();
                // console.log("typeProduct: ", typeProduct);
                if (typeProduct === typeLowerCase) {
                    resultArray.push(product);
                }
            });
        });

        promise.catch(function(error){
            console.log("getListProducts: ", error);
        });

        // console.log(resultArray);

        return resultArray;
    }
}