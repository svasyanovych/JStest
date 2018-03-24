/* ------ BASIC -------*/

function getId(id){
    return document.getElementById(id);
}

function getTag(tag, number){
    return document.getElementsByTagName(tag)[number];
}

function getCl(ok, a){
    return document.querySelectorAll(ok)[a];
}

/* ------ BASIC -------*/


// Click to close one row
var close = document.getElementsByClassName("trrow");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var rows = this;
    rows.innerHTML = '$ 0';
    rows.style.display = "none";
  }
}


// Create a new row - "Add" button
function newElement() {
 
  var inputNameValue = getId("myInput").value;
  var inputCostValue = getId("myCost").value;
  
  var tbody = document.getElementById('myTable').getElementsByTagName('TBODY')[0];

 /************************************************/

  if (inputNameValue === '' || inputCostValue === '') {
    alert("Please write name and cost!");
  }else {
    var row = document.createElement("TR");
  }

  
  row.className = "trrow";
  

    var td1 = document.createElement("TD");
    var td2 = document.createElement("TD");
    td1.className ="namedata";
    td2.className ="costdata";

    row.appendChild(td1);
    row.appendChild(td2);

    td1.innerHTML = inputNameValue;
    td2.innerHTML = '$ ' + inputCostValue;
    tbody.appendChild(row);

    getId("myInput").value = '';
    getId("myCost").value = '';

  for (i = 1; i < close.length; i++) {
    close[i].onclick = function() {
      var rows = this;
rows.innerHTML = '$ 0';
      rows.style.display = "none";
    }
}

}

/********************SUM****************************/

setInterval(function newSum() {
  var costSum = 0;
  var costd = document.getElementsByClassName("costdata");
var i;
for (i = 0; i < costd.length; i++) {
  costSum += Number(costd[i].innerHTML.substring(2));
  
}
getId("totalsum").innerHTML = '$ ' +costSum.toFixed(2);
}, 1000)

//console.log((Number(document.getElementsByClassName("costdata")[1].innerHTML.substring(2)) + 
//	Number(document.getElementsByClassName("costdata")[0].innerHTML.substring(2))).toFixed(2));
//	
//	
//	
//*************************SORT*************************************//	
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tbody");
  switching = true;
  
  dir = "asc"; 
  
  while (switching) {
    
    switching = false;
    rows = table.getElementsByTagName("TR");
   
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      
      switchcount ++;      
    } else {
      
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


/*****************************ARROW*************************************/

function arrowFunction() {
    var x = document.getElementById("myTable");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        getId("arrows").className = "down";
    } else {
        x.style.visibility = "hidden";
        getId("arrows").className = "up";
    }
}