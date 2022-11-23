// document.addEventListener('DOMContentLoaded', function() {
//     //fetch('http://localhost:5555/getAll') 
//     fetch('https://project3-7bzcyqo3va-uc.a.run.app/getAll')   //fetch from server on gcloud
//     .then(response => response.json())
//     .then(data => loadHTMLTable(data['data']));
// }); 

function fetchAllOrders() {
    // fetch('https://project3-7bzcyqo3va-uc.a.run.app/getAllOrders')
    fetch('http://localhost:5555/getAllOrders')  
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
}
var allButton = document.getElementById('allBtn');
allButton.addEventListener('click', fetchAllOrders);


function fetchBowlOrders() {
    // fetch('https://project3-7bzcyqo3va-uc.a.run.app/getAllOrders')
    fetch('http://localhost:5555/getBowlOrders')  
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
}
var bowlButton = document.getElementById('bowlBtn');
bowlButton.addEventListener('click', fetchBowlOrders);


function fetchNoneOrders() {
    // fetch('https://project3-7bzcyqo3va-uc.a.run.app/getAllOrders')
    fetch('http://localhost:5555/getNoneOrders')  
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
}
var noneButton = document.getElementById('noneBtn');
noneButton.addEventListener('click', fetchNoneOrders);


function loadHTMLTable(data) {
    const table = document.querySelector('table tbody'); 
    
    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='9'>No Data</td></tr>";
        return;
    }

    var tableHTML = "";

    for (var key in data.rows) {
        tableHTML += "<tr>";
        for (var keyName in data.rows[key]) {
            var dataEntry = (data.rows[key])[keyName];
            if (keyName == 'date') {
                dataEntry = new Date(dataEntry).toLocaleDateString();
            } 
            tableHTML += `<td>${dataEntry}</td>`;
        }
        tableHTML += "</tr>";
    }

    table.innerHTML = tableHTML;
}

var btns = document.getElementsByClassName('dropdown_btn'); 
var main_btns = document.getElementsByClassName('dropbtn'); 
var button; 
for (var i = 0; i < btns.length; i++){
    btns[i].onclick = change_color; 
}
for (var i = 0; i < main_btns.length; i++){
    main_btns[i].onclick = change_color; 
}


function change_color(){
    if (this.style.backgroundColor == 'rgb(249, 182, 24)'){
        this.style.backgroundColor = '#1995AA'; 
    }
    else{
        this.style.backgroundColor = '#F9B618'; 
    }
}

