var EMAIL_PATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var PASSWORD_PATTERN = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!#\$%&\?])^\D.{7})/;
var PHONE_PASSWORD = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

var checkRegistration = function () {

    var err = checkLogin();
    if (err) {
        document.getElementById("error").textContent = err;
    } else {
        err = checkEmail();
        if (err) {
            document.getElementById("error").textContent = err;
        } else {
            err = checkPasswords();
            if (err) {
                document.getElementById("error").textContent = err;
            } else {
                err = checkPhone();
                if (err) {
                    document.getElementById("error").textContent = err;
                } else {
                    document.getElementById("error").textContent = "";
                    document.getElementById("answer").textContent = "You are registered";
                }
            }
        }
    }
};

var checkLogin = function () {
    var login = document.getElementById("login").value;
    if (!login) {
        return "Login is empty";
    }
    if (login.length > 8 || login.length < 3) {
        return "Login is invalid";
    }
};

var checkPasswords = function () {
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    if (!password) {
        return "Password is empty";
    }
    if (!password.match(PASSWORD_PATTERN)) {
        return "Password is invalid";
    }
    if (password != repeatPassword) {
        return "Password do not match";
    }
};

var checkEmail = function () {
    var email = document.getElementById("email").value;
    if (!email) {
        return "Email is empty";
    }
    if (!email.match(EMAIL_PATTERN)) {
        return "Email is invalid";
    }
};

var checkPhone = function () {
    var phone = document.getElementById("phone").value;
    if (!phone) {
        return "Phone is empty";
    }
    if (!phone.match(PHONE_PASSWORD)) {
        return "Phone is invalid";
    }
};


document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    checkRegistration();
});

