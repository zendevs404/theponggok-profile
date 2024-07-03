function togglePassword() {
    var passwordField = document.getElementById("password");
    var togglePasswordIcon = document.querySelector(".toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePasswordIcon.classList.remove("bi-eye-slash");
        togglePasswordIcon.classList.add("bi-eye");
    } else {
        passwordField.type = "password";
        togglePasswordIcon.classList.remove("bi-eye");
        togglePasswordIcon.classList.add("bi-eye-slash");
    }
}