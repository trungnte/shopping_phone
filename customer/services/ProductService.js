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
        
        var promise = this.getListProduct();
        promise.then(function(result){
            // TODO: filter here
            result.data.map(function(product){
                 // trim space and convert lowercase
                typeProduct = product.type.replace(/\s/g, "").toLowerCase();
                if (typeProduct === typeLowerCase) {
                    resultArray.push(product);
                }
            });
        });

        promise.catch(function(error){
            console.log("getListProducts: ", error);
        });

        /* FIXME:
        []
            0: {id: '2', name: 'Samsung Galaxy S22 Ultra', price: '1100', screen: 'screen 6.8', backCamera: '108 MP & 12 MP, 10 MP, 10 MP', …}
            1: {id: '3', name: 'Samsung Galaxy Z Fold3', price: '1300', screen: 'screen 6.8', backCamera: '12 MP, 12 MP, 12 MP', …}length: 2[[Prototype]]: Array(0)
        */ 
        console.log("Before return:", resultArray);

        return resultArray;
    }
}