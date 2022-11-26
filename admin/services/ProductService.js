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
    this.updateProduct = function(id, newData) {
        return axios({
            method: 'put',
            url: `https://636ce241ab4814f2b2711706.mockapi.io/ShopPhone/${id}`,
            data: newData
        });
    }
}