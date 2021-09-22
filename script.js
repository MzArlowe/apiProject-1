const baseURL = "https://ghibliapi.herokuapp.com/people"

//Table of Contents//
function generate_table() {
    let main = document.getElementsByTagName("main")[0];
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    for (let i = 0; i < 1; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode("Character " + i + ", Movie " + j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    main.appendChild(tbl);
    tbl.setAttribute("border", "2");
}

