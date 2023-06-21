//javascript code for form on ticket page
//took help from https: https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_js

function validateForm() {
    var a = document.forms["myForm"]["fname"].value;
    var b = document.forms["myForm"]["e_name"].value;
    var c = document.forms["myForm"]["address"].value;
    var d = document.forms["myForm"]["city"].value;
    var e = document.forms["myForm"]["c_company"].value;
    var f = document.forms["myForm"]["p_number"].value;
    var g = document.forms["myForm"]["c_number"].value;
    var h = document.forms["myForm"]["z_no"].value;
    var i = document.forms["myForm"]["c_code"].value;
    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "" || g == "" || h == "" || i == "") {
        alert("Fill all the entries");
        return false;
    }
    else{
        alert("Thank You");
        return false;
    }
}
