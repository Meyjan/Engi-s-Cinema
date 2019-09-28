window.onload = function() {
    cookieLogin();
};

function cookieLogin() {
    let request = new XMLHttpRequest();
    request.open("GET", "LoginPageCookie.php");
    request.send();

    request.onload = () => {
        let response = parseInt(request.response);
        if (response == 200) {
            alert("Cookie login accepted");
            window.location.replace('../homepage/Homepage.html');
        }
    }
} 

function formCheck(e) {
    let form = new FormData(document.forms.form_login);

    let request = new XMLHttpRequest();
    request.open("POST", "LoginPage.php");
    request.send(form);

    document.getElementById('login-error').innerHTML = "";

    request.onload = () => {
        let response = request.response;
        response = parseInt(response)
        alert(response);
        if (response == 200) {
            window.location.replace('../homepage/Homepage.html');
        }
        else {
            document.getElementById('login-error').innerHTML = "Login failed. Username and password doesn't match with the data in database";
        }
    };

    e.preventDefault();
}

document.getElementById("form_login").addEventListener("submit", formCheck);