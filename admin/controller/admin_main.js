
var listProduct = [];

// declare a global variable for Product List
var productService = new ProductService();
const validation = new Validation();

function getListProducts() {
    var promise = productService.getListProduct();
    promise.then(function(result){
        // Success
        displayProducts(result.data);
        listProduct = result.data;
        // setLocalStorage();
    });

    promise.catch(function(error){
        console.log("getListProducts: ", error);
    });
}

// display Products
function displayProducts(arrayProduct) {
    var content = "";
    var count = 1;
    arrayProduct.map(function(product){
        content += `
        <tr>
            <td>${count++}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <img src="${product.img}" class="img-fluid" style="max-height: 60px;">
            </td>
            <td>${product.type}</td>
            <td>${product.desc}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteProduct('${product.id}')" >Xóa</button>
                <button class="btn btn-info" onclick="viewProduct('${product.id}')" data-toggle="modal" data-target="#myModal"  >Xem</button>
            </td>
            </tr>
        `;
    });

    // console.log(content)
    document.querySelector("#tblDanhSachSP").innerHTML = content;
}



function validateProductInfo(name, price, screen, backCamera, frontCamera, img) {
    var isValid = true;
    //? Check empty name
    isValid = validation.checkEmpty(name, "Tên sản phẩm không để trống", "tbTenSP");

    //? Check price
    isValid &= validation.checkEmpty(price, "Giá không để trống", "tbGiaSP");
    isValid &= validation.checkPrice(price, "Giá phải là số không âm", "tbGiaSP", 0);

    
    //? Check screen
    isValid = validation.checkEmpty(screen, "Màn hình không để trống", "tbManHinhSP");

    //? Check back Camera
    isValid = validation.checkEmpty(backCamera, "Thông số không để trống", "tbCameraSau");
    //? Check front Camera
    isValid = validation.checkEmpty(frontCamera, "Thông số không để trống", "tbCameraTruoc");

    //? Check img
    isValid = validation.checkEmpty(img, "Link ảnh không để trống", "tbHinhSP");

    return isValid;
}




document.querySelector("#btnThemSP").onclick = function () {
    //thêm button thêm sản phẩm cho form
    //có thể điền thêm code nếu cần
    console.log("trigger add Product");
    document.querySelector("#myModal .modal-footer").innerHTML = `<button class="btn btn-success" onclick="addProduct()"  >Thêm Sản Phẩm</button>`
}

function addProduct() {
    var name = document.querySelector("#TenSP").value;
    var price = document.querySelector("#GiaSP").value;
    var img = document.querySelector("#HinhSP").value;
    var desc = document.querySelector("#Mota").value;

    var screen = document.querySelector("#ManHinh").value;
    var backCamera = document.querySelector("#CameraSau").value;
    var frontCamera = document.querySelector("#CameraTruoc").value;

    var type = document.querySelector("#LoaiSP").value;

    var isValid = validateProductInfo(name, price, screen, backCamera, frontCamera, img);

    if(isValid){
        var newProduct = new Products(name, price, screen, backCamera, frontCamera,     img, desc, type);
        console.log(newProduct);

        productService.addProduct(newProduct)
            .then(function (result) {
                //thành công
                // console.log(result);
                alert("Thêm thành công");
                //reset form
                document.querySelector("#TenSP").value = "";
                document.querySelector("#GiaSP").value ="";
                document.querySelector("#HinhSP").value = "";
                document.querySelector("#Mota").value = "";

                //? onclick: gán sự kiện mới
                //? click(): gọi sự kiện click có sẵn của thẻ
                document.querySelector("#myModal .close").click();

                //Lấy danh sách mới sau khi thêm thành công
                getListProducts();
            })
            .catch(function (error) {
                //thất bại
                alert("Thêm thất bại");
                console.log(error);
            })
    }
    
}


// TODO: implement this function
function deleteProduct(id) {
    productService.delProduct(id)
        .then(function (result) {
            alert("Xóa thành công");
            getListProducts();
        })
        .catch(function(error){
            //thất  bại
            console.log(error);
            alert("Xóa thất bại");
        });
}

// TODO: implement this function
function viewProduct(id) {
    productService.getDetailProduct(id)
        .then(function (result) {
            // render modal
            console.log(result.data);

            document.querySelector("#TenSP").value = result.data.name;
            document.querySelector("#GiaSP").value = result.data.price;
            document.querySelector("#HinhSP").value = result.data.img;
            document.querySelector("#Mota").value = result.data.desc;
        
            document.querySelector("#ManHinh").value = result.data.screen;
            document.querySelector("#CameraSau").value = result.data.backCamera;
            document.querySelector("#CameraTruoc").value = result.data.frontCamera;
        
            document.querySelector("#LoaiSP").value = result.data.type;

            document.querySelector("#myModal .modal-footer").innerHTML = `<button class="btn btn-success" onclick="updateProduct('${result.data.id}')"  >Cập Nhật</button>`

        })
        .catch(function (error) {
            console.log(error);
            alert("Xem chi tiết thất bại");
        });
}


function updateProduct(id) {
    var name = document.querySelector("#TenSP").value;
    var price = document.querySelector("#GiaSP").value;
    var img = document.querySelector("#HinhSP").value;
    var desc = document.querySelector("#Mota").value;

    var screen = document.querySelector("#ManHinh").value;
    var backCamera = document.querySelector("#CameraSau").value;
    var frontCamera = document.querySelector("#CameraTruoc").value;

    var type = document.querySelector("#LoaiSP").value;

    var isValid = validateProductInfo(name, price, screen, backCamera, frontCamera, img);

    if(isValid) {
        var newData= new Products(name, price, screen, backCamera, frontCamera, img, desc, type);
        console.log(newData);
        
        productService.updateProduct(id, newData)
            .then(function (result) {
                console.log(result.data);
                getListProducts();
                document.querySelector("#myModal .close").click();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


// Load page admin
getListProducts();