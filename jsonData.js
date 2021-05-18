function getUserDetails(empId,password){

    try {
        var user = JSON.parse(localStorage.getItem(empId));
        if (password == user["password"]) {
            return user["name"];
        } else {
            var element = document.getElementById("Invalid UserID/Password");
            element.style.color = "red";
            element.innerHTML = "Invalid Password";
            return "";
        }
    } catch (e) {
        alert("User does not exist");
        return "";  
    }
}

function addUser() {
    var user = {
        name: inputName,
        empid: empId,
        batchno: batchNo,
        email: emailId,
       inputpassword: password,
        confirmp : confirmPassword,
        gender: male || female

    }
    var jsonUser = JSON.stringify(user);
    localStorage.setItem(`${user["empId"]}`, jsonUser);
}