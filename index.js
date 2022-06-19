// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit", report);
function report() {
  event.preventDefault();
  var stuName = document.querySelector("#name").value;
  var batch = document.querySelector("#batch").value;
  var dsa = document.querySelector("#dsa").value;
  var skill = document.querySelector("#cs").value;
  var coding = document.querySelector("#coding").value;
  console.log(stuName, batch, dsa, skill, coding);

  var tr = document.createElement("tr");
  var td2 = document.createElement("td");
  td2.innerText = stuName;
  var td3 = document.createElement("td");
  td3.innerText = batch;
  var td4 = document.createElement("td");
  td4.innerText = dsa;
  var td5 = document.createElement("td");
  td5.innerText = skill;
  var td6 = document.createElement("td");
  td6.innerText = coding;
  var td7 = document.createElement("td");
  td7.innerText = Math.floor(((+coding + +dsa + +skill) / 30) * 100);
  var td8 = document.createElement("td");
  if (((+coding + +dsa + +skill) / 30) * 100 < 50) {
    td8.innerText = "Async";
    td8.style.backgroundColor = "red";
  } else {
    td8.innerText = "Regular";
    td8.style.backgroundColor = "green";
  }
var td9 = document.createElement("td");
td9.innerText = "delete";
td9.addEventListener("click",deleteRow);

tr.append(td2, td3, td4, td5, td6, td7, td8,td9);
document.querySelector("tbody").append(tr);
}
function deleteRow() {
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}
