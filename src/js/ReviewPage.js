function selectValue(e) {
    // Make stars yellow
    let starValue = Number(e.getAttribute("pepega"));
    
    elements = document.getElementsByClassName("rating-stars");

    for (i = 0; i < elements.length; i++) {
        element = elements[i];
        if (element.getAttribute("pepega") <= starValue) {
            element.src = "star.png"
        }
    }

    element = document.getElementById("record");
    element.value = starValue;
}

