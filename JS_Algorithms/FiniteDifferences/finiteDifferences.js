/*
 * Name: Finite Differences.
 * By: Ragu S.
 * Description: The purpose of this javascript program is to find finite differences in
 * in number series affected by simple polynomial functions. 
 * Its really just review of Grade 12 maths, going back to basics, but adding a bit of programming
 * to enhance understanding.
 */

//(function(){
// First we need to supply a set of data in the form x and f(x), which we can store in the "functionVals" object
var functionVals = {
  vals: []
};

// Next we will fill it with a set of values for x range
// We also need to supply what f(x) will do:
// for now f(x) = x*x

functionVals.setVals = function(xVal,yFunc) {
  if(yFunc === undefined) {
    yFunc = function(x) { return x*x }
  }
  this.vals.push([xVal, yFunc(xVal)])
}
//})();
functionVals.getVals = function() {
  return this.vals;
}


// Gives a random number with specified range
function giveRandomVals(startRange, endRange) {
  return Math.ceil((Math.random() * (endRange) + startRange) - 1);
}

function findDifference(arry, nTimes, p) {
  if(p === undefined) {
    p = 0;
  }
  else if(p < 15) {
    p++;
  }
  else {
    return arry;
  }
  console.log(arry.length);
  var differences = [];
  var len = arry.length;
  var exitCond = 0; // Will use this exit var to determine if the finite differences equal zero for current set
  if(nTimes === undefined) {
    addToHtmlTable(arry);
    for(var i = 0; i < len-1; i++) {
      differences.push(arry[i + 1][1] - arry[i][1]);
    }
    nTimes = 1;
    //updateHtmlTable(differences);
  }
  else {
    for(var i = 0; (i < len-1); i++) {
      (arry[i + 1] - arry[i] == 0) && (nTimes++); 
      differences.push(arry[i + 1] - arry[i]);
    }
    //if()
    //nTimes++;
  }
  console.log(nTimes);
  if(nTimes<2) {
    console.log(nTimes);
    updateHtmlTable(differences);
    findDifference(differences, nTimes, p);
  }

  return differences;
}

// When page finishes loading, call our scripts
window.onload = function() {
  obj1 = functionVals;
  var textInput = prompt("Please enter array of numbers: ");
  functionVals.vals = [[1,1],[2,-3],[3,5],[4,37],[5,105],[6,221]];
  //obj1.setVals(4);
  //while(textInput.substring("("))
  console.log(textInput.substring("("));
  textInput = textInput.replace("(", "[");
  console.log(textInput);
  // for(var i = 0; i < 100; i++) {
  //   obj1.setVals(giveRandomVals(1,10));
  // }

  for(var i in functionVals.vals) {
    console.log("f(" + functionVals.vals[i][0] + ") = ", functionVals.vals[i][1]);
  }
  var diffArray = findDifference(functionVals.vals);
  // for(var i in diffArray)
  //   console.log(diffArray[i]);

  // updateHtmlTable(diffArray);jhgfdxsz-09
  //console.k,m./
  log("f("+functionVals.vals[i+1mn  
    gdsa    ][0]+"-"+ functionVals.vals[i][0] +") = " + diffArray[i]);
}

function addToHtmlTable(arry, tableId) {
  var table = document.getElementById("functionValues");
  for(var i in arry) {
    var tr = document.createElement("tr");
    tr.className = "differences";
    var xCell = document.createElement("td");
    var yCell = document.createElement("td");
    xCell.innerHTML = arry[i][0];
    yCell.innerHTML = arry[i][1];
    tr.appendChild(xCell) && tr.appendChild(yCell);
    table.appendChild(tr);
  }
}

function updateHtmlTable(arry) {
  var table = document.getElementById("functionValues");
  
  // add new header row/column
  var rows = document.getElementsByClassName("differences");
  var th = document.createElement("th");
  th.innerHTML = "f((x+1)-x)";
  rows[0].appendChild(th);

  console.dir(rows);

  for(var i = 1; i < rows.length; i++) {
    var fX = document.createElement("td");
    if((i-1) < arry.length) {
      if(arry[i-1] !== undefined) {
        fX.innerHTML = arry[i-1];
      }
      else {
        fX.innerHTML = "";
      }
    }
    rows[i].appendChild(fX);
    //(tr.class = "differences") && tr.appendChild(fX);
    //table.appendChild(tr);
  }
}