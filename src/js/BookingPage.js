function openModal() {
    let modal = document.getElementById("modal-container");
    modal.style.display = "block";
}

function closeModal() {
    window.location.replace("../html/TransactionPage.html")
}

let modal = document.getElementById("modal-container");
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}