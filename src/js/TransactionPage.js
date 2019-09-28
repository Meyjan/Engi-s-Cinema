window.onload = function () {
    alert("js open");
    showHistory();
    alert("used");
};

function showHistory() {
    let request = new XMLHttpRequest();
    request.open("GET", "../php/TransactionPage.php");
    alert("go to php")
    request.send();

    request.onload = () => {
        let temp = request.jsonlist;
        if (typeof temp !== undefined && !null) {
            let response = JSON.parse(temp);
        } else {
            alert("type undef or empty");
        }

        if (response == "No movies at the moment") {
            // Action if there's no movie
            alert("You haven't watch any movies. watch some!");
        } else {

            for (let i = 0; i < (response.length - 1); i++) {

                let container = $("<div>");
                container.className = "movie-item";

                let img = $("<img>")
                img.className = "movie-image";
                img.src = "..data/photos/" + response[i].photo_link;

                let detail = $("<div>");
                detail.className = "movie-details";

                let title = $("<div>");
                title.className = "details-title";
                title.innerHTML = response[i].title ;


                let datetimecon = $("<span>");
                datetimecon.className = "details-details";

                let datetime = $("<span>");
                //datetime.className = "details-details";
                datetime.innerHTML = response[i].date + " " + response[i].time ;

                let schedule = $("<span>");
                schedule.className = "blue-text";
                schedule.innerHTML = "Schedule: ";

                let buttoncon = $("<form>");
                buttoncon.className = "details-button";
                buttoncon.action = "../php/ReviewButtonhandling,php";
                buttoncon.method = "get"

                let delbut = $("<button>");
                delbut.className = "button-delete";
                delbut.innerHTML = "Delete Review";
                delbut.value = -1;
                delbut.name = "button"

                let edbut = $("<button>");
                edbut.className = "button-edit";
                edbut.innerHTML = "Edit Review";
                edbut.value = reponse[i].id;
                edbut.name = "button"

                let adbut = $("<button>");
                adbut.className = "button-add";
                adbut.innerHTML = "Add Review";
                adbut.value = reponse[i].id;
                adbut.value = "buton"

                if (response[i] != null) {
                    buttoncon.appendChild(delbut);
                    buttoncon.appendChild(edbut);
                } else {
                    if (Date.now > response[i].date) {
                        buttoncon.appendChild(adbut);
                    }
                }

                datetimecon.appendChild(schedule);
                datetimecon.appendChild(datetime);

                detail.appendChild(title);
                detail.appendChild(datetimecon);
                dateil.appendChild(buttoncon);

                container.appendChild(img);
                container.appendChild(detail);
            }
        }
    }
}