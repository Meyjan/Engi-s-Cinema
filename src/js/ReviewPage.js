function selectValue(e) {
    // Make stars yellow
    let starValue = Number(e.getAttribute("pepega"));
    
    elements = document.getElementsByClassName("rating-stars");

    for (i = 0; i < elements.length; i++) {
        element = elements[i];
        if (element.getAttribute("pepega") <= starValue) {
            element.src = "../data/icons/star.png"
        }
        if (element.getAttribute("pepega") > starValue) {
            element.src = "../data/icons/gray_star.png"
        }
    }

    element = document.getElementById("record");
    element.value = starValue;
}

