function Validation() {
    // thuoc tinh => luu du lieu, khong can tao o validation

    this.showLog = function(msgErr) {
        console.log(msgErr);
    }

    this.showNotification = function(spanID) {
        // document.getElementById(spanID).setAttribute("class", "sp-thongbao-display");
        document.getElementById(spanID).style.display = "block";
    }

    // phuong thuc -> xu ly data
    this.checkEmpty = function (valInput, msgErr, spanID) {
        // console.log(valInput.replace(/\s/g, ""));
        if (valInput.trim() == "") {
            document.getElementById(spanID).innerHTML = msgErr;
            this.showLog(msgErr);
            this.showNotification(spanID);
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }

    // tai khoan toi da 4-6 ky so
    this.checkAccount = function(valInput, msgErr, spanID) {
        // var pattern = /^(?=.*[^a-z])(?=.*[^A-Z])(?=.*[^0-9])(?!.*\s).{4,6}$/;
        var pattern = /^[a-zA-Z0-9]*(?!.*\s).{4,6}$/;
        if(valInput.match(pattern)) {
            // hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        this.showLog(msgErr);
        this.showNotification(spanID);
        return false;
    }


    this.checkName = function (valInput, msgErr, spanID) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        if(valInput.match(pattern)) {
            // hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        else {
            document.getElementById(spanID).innerHTML = msgErr;
            this.showLog(msgErr);
            this.showNotification(spanID);
            return false;
        }
    }

    this.checkEmail = function (valInput, msgErr, spanID){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(valInput.match(pattern)) {
            // hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        else {
            document.getElementById(spanID).innerHTML = msgErr;
            this.showLog(msgErr);
            this.showNotification(spanID);
            return false;
        }
    }

    this.checkPassword = function (valInput, msgErr, spanID){
        // it nhat 1 ki tu in hoa
        // it nhat 1 ki tu thuong
        // it nhat 1 so tu 0-9
        // 6-10 ky tu
        var pattern = /^(?=.*[^!@#\$%\^\&*\)\(+=._-])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(valInput.match(pattern)) {
            // hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        else {
            document.getElementById(spanID).innerHTML = msgErr;
            this.showLog(msgErr);
            this.showNotification(spanID);
            return false;
        }
    }


    this.checkPrice = function (valInput, msgErr, spanID, min) {
        valNumber = Number(valInput);
        if(valNumber >= min) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        this.showLog(msgErr);
        this.showNotification(spanID);
        return false;
    }

    this.checkRangeNumber = function (valInput, msgErr, spanID, min, max) {
        valNumber = Number(valInput);
        if(valNumber >= min && valNumber <= max) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        this.showLog(msgErr);
        this.showNotification(spanID);
        return false;
    }


    this.checkDropdown = function (selectID, msgErr, spanID) {
        var index = document.getElementById(selectID).selectedIndex;
        if(index == 0) {
            // KHONG hop le
            document.getElementById(spanID).innerHTML = msgErr;
            this.showLog(msgErr);
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }

    // mm/dd/yyyy
    this.checkDate = function (valInput, msgErr, spanID) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if(valInput.match(pattern)) {
            // hop le
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        else {
            document.getElementById(spanID).innerHTML = msgErr;
            this.showLog(msgErr);
            this.showNotification(spanID);
            return false;
        }
    }
    
}