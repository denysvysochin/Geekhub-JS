/**
 * Created by mainadmin on 16.01.16.
 */

angular.module("regApp", [])
    .controller("RegistrationController", function () {
        var reg = this;
        var EMAIL_PATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var PASSWORD_PATTERN = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!#\$%&\?])^\D.{7})/;
        var PHONE_PASSWORD = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

        reg.validateForm = function () {
            var error = "" +reg.checkEmail()
                            +reg.checkLogin()
                            +reg.checkPasswords()
                            +reg.checkPhone();

            if (!error) {
                reg.register();
            } else {
                reg.showError(error);
            }

        };

        reg.checkLogin = function () {
            if (!reg.login) {
                return "Login is empty ";
            }
            if (reg.login.length > 8 || reg.login.length < 3) {
                return "Login is non valid ";
            }
            return "";
        };

        reg.checkPasswords = function () {
            if (!reg.firstPassword) {
                return "Password is empty ";
            }
            if (!reg.firstPassword.match(PASSWORD_PATTERN)) {
                return "Password is not valid ";
            }
            if (reg.firstPassword != reg.secondPassword) {
                return "Passwords is not match ";
            }
            return "";
        };

        reg.checkPhone = function () {
            if (!reg.phone) {
                return "Phone is empty ";
            }
            if (!reg.phone.match(PHONE_PASSWORD)) {
                return "Phone is not valid ";
            }
            return "";
        };

        reg.checkEmail = function () {
            if (!reg.email) {
                return "Email is empty ";
            }
            if (!reg.email.match(EMAIL_PATTERN)) {
                return "Email is not valid ";
            }
            return "";
        };

        reg.register = function () {
            alert("You registered");
        };

        reg.showError = function (error) {
            reg.error = error;
        }
});
