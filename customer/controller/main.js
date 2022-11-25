// declare a global variable for Product List
var productService = new ProductService();

function getListProducts() {
    var promise = productService.getListProduct();
    promise.then(function(result){
        // Success
        displayProducts(result.data);
    });

    promise.catch(function(error){
        console.log("getListProducts: ", error);
    });
}

// display Products
/**
 * {
  "id": "1",
  "name": "iphoneX",
  "price": "1000",
  "screen": "screen 68",
  "backCamera": "2 camera 12 MP",
  "frontCamera": "7 MP",
  "img": "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
  "desc": "Thiết kế mang tính đột phá",
  "type": "iphone"
 }
 * */ 

function displayProducts(arrayProduct) {
    var content = "";
    arrayProduct.map(function(product){
        content += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${product.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text product__price">${product.price.toLocaleString()}$</p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
        `;
    });

    console.log(content)
    document.querySelector("#list__product").innerHTML = content;
}


getListProducts();