var inputName;
var empId;
var password;

function validateRegisterForm() {
     inputName = document.register.userName.value;
     empId = document.register.empID.value;
    var batchNo = document.register.batch.value;
    var emailId = document.register.email.value;
    var genderMale = document.register.male.value;
    var genderFemale = document.register.female.value;
     password = document.register.password.value;
    var confirmPassword = document.register.confirmPassword.value;

    if (genderMale != "" || genderFemale != "") {
        alert("Please select the gender");
        var message = validate(empID);
        if (message == "invalidempID") {
            return false;
        } else if (message != ""){
            alert(message);
            return false;
    } else {
            alert(`Registered Successfully with username: ${userName}`);
            return true;

            }
    } else {
        alert("Please provide all credentials")
        return false;
    }

}
function validateLoginForm() {
   var result = "";
    empId = document.login.empId.value;
    password = document.login.password.value;
    result = getUserDetails(empId, password);
    if (result != "") {
        alert(`Welcome ${userName}`);
    } else {
        alert("Please Register");
        return false;
        
    }
    return false;
}
