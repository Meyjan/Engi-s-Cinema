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
   
        let temp = JSON.parse(request.response);

        for (let i = 0; i < (temp.length); i++) {

            let container = document.createElement('div');
            container.className = "movie-item";

            let img = document.createElement('img')
            img.className = "movie-image";
            img.src = temp[i].photo_link;

            let detail = document.createElement('div');
            detail.className = "movie-details";

            let title = document.createElement('div');
            title.className = "details-title";
            title.innerHTML = temp[i].title ;


            let datetimecon = document.createElement('span');
            datetimecon.className = "details-details";
                 
            let datetime = document.createElement('span');
            //datetime.className = "details-details";
            datetime.innerHTML = temp[i].date + " " + temp[i].time ;

            let schedule = document.createElement('span');
            schedule.className = "blue-text";
            schedule.innerHTML = "Schedule: ";
                 
            let buttoncon = document.createElement('form');
            buttoncon.className = "details-button";
            buttoncon.action = "../php/ReviewPage.php";
            buttoncon.method = "get";

            let delbut = document.createElement('button');
            delbut.className = "button-delete";
            delbut.type = "submit";
            delbut.innerHTML = "Delete Review";
            delbut.value = -1;
            delbut.name = "button";

            let edbut = document.createElement('button');
            edbut.className = "button-edit";
            edbut.type = "submit";
            edbut.innerHTML = "Edit Review";
            edbut.value = temp[i].title;
            edbut.name = "button";

            let adbut = document.createElement('button');
            adbut.className = "button-add";
            adbut.type = "submit";
            adbut.innerHTML = "Add Review";
            adbut.value = temp[i].title;
            adbut.name = "button";

            if (temp[i] != null) {
                buttoncon.appendChild(delbut);
                buttoncon.appendChild(edbut);
            } else {
                if (Date.now > temp[i].date) {
                    buttoncon.appendChild(adbut);
                }
            }

            datetimecon.appendChild(schedule);
            datetimecon.appendChild(datetime);

            detail.appendChild(title);
            detail.appendChild(datetimecon);
            detail.appendChild(buttoncon);

            container.appendChild(img);
            container.appendChild(detail);
        }
        
    }
}