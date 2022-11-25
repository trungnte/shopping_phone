//  global variable
var listProduct = [];

// declare a global variable for Product List
var productService = new ProductService();

// set local storage
function setLocalStorage() {
    localStorage.setItem("LISTPRODUCT", listProduct);
}
// get local storage
function getLocalStorage() {
    if(localStorage.getItem("LISTPRODUCT") != null) {
        listProduct = JSON.parse(localStorage.getItem("LISTPRODUCT"));
        displayProducts(listProduct);
    }
}

function getListProducts() {
    var promise = productService.getListProduct();
    promise.then(function(result){
        // Success
        displayProducts(result.data);
        listProduct = result.data;
        setLocalStorage();
    });

    promise.catch(function(error){
        console.log("getListProducts: ", error);
    });
}

// display Products
function displayProducts(arrayProduct) {
    var content = "";
    // console.log(typeof arrayProduct);
    // console.log(arrayProduct);
    arrayProduct.map(function(product){
        content += `
        <div class="col-3">
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

    // console.log(content)
    document.querySelector("#list__product").innerHTML = content;
}


// filterProduct
function filterProductByType(typeProduct) {
    var resultArray = [];
    // trim space and convert lowercase
    var typeLowerCase = typeProduct.replace(/\s/g, "").toLowerCase();
    listProduct.map(function(product){
            // trim space and convert lowercase
        typeProduct = product.type.replace(/\s/g, "").toLowerCase();
        if (typeProduct === typeLowerCase) {
            resultArray.push(product);
        }
    });
    return resultArray;
}

function filterProduct() {
    var inputProductType = document.querySelector("#filterProduct").value;
    var arrayFilterPorduct = filterProductByType(inputProductType);
    console.log(arrayFilterPorduct);
    displayProducts(arrayFilterPorduct);
}




//  entry program
getListProducts();