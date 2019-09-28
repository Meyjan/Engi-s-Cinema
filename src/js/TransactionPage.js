window.onload = function () {
    showHistory();
};

function showHistory() {
    let request = new XMLHttpRequest();
    request.open("GET", "../php/TransactionPage.php");
    request.send();

    request.onload = () => {
   
        let temp = JSON.parse(request.response);

        let great_container = document.getElementById("movie-container");

        for (let i = 0; i < (temp.length); i++) {

            let container = document.createElement('div');
            if (i == 0) {
                container.className = "movie-item-top";
            } else {
                container.className = "movie-item";
            }

            let img = document.createElement('img');
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
            buttoncon.className = "details-buttons";
            buttoncon.action = "../php/ReviewPage.php";
            buttoncon.method = "get";

            let delbut = document.createElement('button');
            delbut.className = "button-delete";
            delbut.type = "submit";
            delbut.innerHTML = "Delete Review";
            delbut.value = "-1";
            delbut.name = "button";

            let edbut = document.createElement('button');
            edbut.className = "button-edit";
            edbut.type = "submit";
            edbut.innerHTML = "Edit Review";
            edbut.value = temp[i].id;
            edbut.name = "button";

            let adbut = document.createElement('button');
            adbut.className = "button-add";
            adbut.type = "submit";
            adbut.innerHTML = "Add Review";
            adbut.value = temp[i].id;
            adbut.name = "button";

            if (temp[i].review != null) {
                buttoncon.appendChild(delbut);
                buttoncon.appendChild(edbut);
            } else {
                let sqlDateStr = temp[i].date + " " + temp[i].time;

                sqlDateStr = sqlDateStr.replace(/:| /g,"-");
                var YMDhms = sqlDateStr.split("-");
                var sqlDate = new Date();
                sqlDate.setFullYear(parseInt(YMDhms[0]), parseInt(YMDhms[1])-1,
                                                        parseInt(YMDhms[2]));
                sqlDate.setHours(parseInt(YMDhms[3]), parseInt(YMDhms[4]), 
                                                    parseInt(YMDhms[5]), 0/*msValue*/);

                if (Date.now() > sqlDate.getTime()) {
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

            great_container.appendChild(container);
        }
    }
}