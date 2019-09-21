function formCheck(e) {
    let form = new FormData(document.forms.form_login);

    let request = new XMLHttpRequest();
    request.open("POST", "LoginPage.php");
    request.send(form);

    document.getElementById('login-error').innerHTML = "";

    request.onload = () => {
        let response = request.response;

        if (response.length == 0) {
            window.location.replace('../homepage/Homepage.html');
        }
        else {
            response = parseInt(response)
            alert(response);
            if (response == 200) {
                alert ("Login success");
            }
            else {
                alert ("Login failed");
            }
        }
    };

    e.preventDefault();
}

document.getElementById("form_login").addEventListener("submit", formCheck);