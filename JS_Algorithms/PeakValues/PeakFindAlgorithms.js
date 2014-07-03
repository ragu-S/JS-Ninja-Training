window.onload = function() {
    // function makeHtmlRow(array) {
    var rMax = 5;
    var cMax = 5;
    var matrixRow = [];
    var matrixTable = [];

    for(var r = 0; r < rMax; r++) {
        for(var c = 0; c < cMax; c++) {
            matrixRow.push(giveMeRand());
        }
        if(rMax > 1) {
            matrixTable.push(matrixRow);
            matrixRow = [];
        }
        else {
            matrixTable = matrixRow;
        }
    }
    
    //matrixTable = [41,24,3,1,33,47,14,80,19,37,97,62,31,75,60,51,68,37,46,45,97,58,88,27,68,32,85,35,51,82,79,35,25,72,49,54,9,3,75,26,53,63,39,81,48];
    //console.log(printMeArray(matrixTable));
    //console.log(printMe2D_Array(matrixTable));
    //console.dir(matrixTable);
    makeHtmlRow(matrixTable);
    console.log(BinarySearch_2D_array(matrixTable));

    //var mid = Math.round(matrixTable.length/2);
    var peak = BinarySearch_2D_array(matrixTable);//findPeak(matrixTable);
    var firstPeak = [peak];
    console.dir(firstPeak);
    showPeak(firstPeak);
    //while(mid) {
    //mid = Math.round(matrixTable.length/2);
    //var arry = BinaryPeakSearch(matrixTable, mid);
    //console.log(arry);

    //firstPeak.push(BinaryPeakSearch(matrixTable, mid));
    //console.dir(firstPeak);
    //}
    //firstPeak[0] = matrixTable[findPeakEfficient(matrixTable)];
    //firstPeak[1] = BinaryPeakSearch(matrixTable, mid);
    //makeHtmlRow(firstPeak);
    //console.log(firstPeak);
    //console.log(matrixTable[peakIndex]);
    }

    function makeHtmlRow(array) {
        //console.dir(array);
        if(array != undefined) {
            var table = document.createElement("table");
            table.className = "matrix";
            if((array[0] != undefined) && (array[0][0] != undefined)) {
                for(var r in array) {
                    var row = document.createElement("tr");
                    row.className = "row";
                    //console.dir(array[r]);
                    for(var c in array[r]) {
                        var col = document.createElement("td");
                        col.innerHTML = array[r][c];
                        col.className = "col";
                        row.appendChild(col);
                    }
                    //document.getElementById("matrix").appendChild(row);
                    table.appendChild(row);
                }
            }
            else {
                var row = document.createElement("tr");
                row.className = "row";
                //console.log(array[r]);
                for(var c in array) {
                    //console.dir(array[r]);
                    var col = document.createElement("td");
                    col.innerHTML = array[c];             
                    col.className = "col";
                    row.appendChild(col);
                }
                //document.getElementById("matrix").appendChild(row);
                table.appendChild(row);
            }
            document.body.appendChild(document.createElement("br"));
            document.body.appendChild(table);
        }
    }

    	function giveMeRand() {
    		return Math.round(Math.random() * 100); 
    	}
    	
        function printMeArray(array) {
            return "[" + String(array) + "]";
        }
        function printMe2D_Array(array) {
            var newArrayString = "[";
            for(var i in array) {
                newArrayString = "[" + String(array[i]) + "],";
            }
            newArrayString += "]";
            return newArrayString;
        }
    	function showPeak(array) {
    		var matrix = document.getElementsByClassName("col");
            for(var i in matrix) {
                //matrix[i].style.backgroundColor = "red";
                //console.log(matrix[i].innerHTML);
                if(matrix[i] != undefined) {
                    for(var x in array) {
                        //console.log(array[x] + " | " + matrix[i]);
                        if((array[x] == matrix[i].innerHTML) && (array[x] != undefined))
                            matrix[i].style.backgroundColor = "red";
                    }
                }
            }
           //matrix.childNode();
            //console.dir(matrix);
    	}

    	// straightforward algorithm
    	function findPeak(singleArray) {          
    		// illustrates the rule that a peak can only be [i-1] <= [i] => [i+1] or a >= b >= c, thus c is a peak
    		var peakValues = Array();
    		var length = singleArray.length - 1;
    		var i = 0; // start at 1
    		for(; i <= length; i++) { 
    			if(checkPeak(singleArray, i, length)) {
                	peakValues.push(singleArray[i]);
                    //singleArray.splice(i,1);
                    console.log(singleArray.length);
    			}
    		}
            showPeak(peakValues);
    		return peakValues;
    	}

        function checkPeak(array, i, len) {
            if(i == 0) {
                return (array[i] >= array[i+1]);
            }
            else if(i == len) {
                return (array[i] >= array[i-1]);
            }
            return ((array[i] >= array[i-1]) && (array[i] >= array[i+1]));
        }

// function binarySearch(array, start, end, iter) {
//     if(checkPeak(array, start, end)) {

//     }
//     // else if(checkPeak(array, end/2, end)) {

//     // }
//     // else {
//     //     checkPeak(array, end, end)
//     // }
// }
    	//clever more Big-O efficient algorithm
    	function findPeakEfficient(singleArray) {
    		var peakValues = Array();
            var peakFound = false;
    		var end = (singleArray.length - 1); // n
            var mid = Math.round(end/2); // n/2
    		var i = 0;
            var start = 0; // 0
            // for(; i <= len; i++) {
            //     console.log(i);
            //     //if(checkPeak(singleArray, i))
                        
            // }
            // return peakValues;
            for(; i < singleArray.length && !peakFound; i++) {
                mid = end/2;
                if(checkPeak(singleArray, start, end)) {
                    peakFound = start;
                }
                else if(checkPeak(singleArray, mid, end)) {
                    peakFound = mid;
                }
                else if(checkPeak(singleArray, mid, end)) {
                    peakFound = mid;
                }
                else {
                    //mid = end/2;
                    if(singleArray[start] < singleArray[mid]) {
                        start = start+1;
                        end = mid-1;
                    }
                    else if(singleArray[mid] > singleArray[end]) {
                        start = mid+1;
                        end = end-1;
                    }
                    else {
                        start = mid+1;
                        end = end-1;
                    }
                }
            }
            return peakFound; 
    	}


        function BinaryPeakSearch(array, mid) {
            makeHtmlRow(array);
            console.log(mid);
            
            // always rounds odd numbers up since we are dividing by 2
            if(array[mid] < array[mid-1]) {
                mid = Math.round((mid-1)/2); // move to the middle left
                BinaryPeakSearch(array, mid);
            }
            else if(array[mid] < array[mid+1]) {
                mid += Math.round((mid+1)/2); // move to the middle right
                BinaryPeakSearch(array, mid);
            }
            else {
                console.log("mid is " + array[mid]);
                return array[mid];//array.splice(mid,1);
            }
        }

function BinarySearch_2D_array(array) {
    var maxRow = array.length - 1;
    var maxCol = array[0].length - 1;
    var row = Math.round(maxRow/2);
    var col = Math.round(maxCol/2);
    var iterator = 0;
    while(iterator < (maxRow*maxCol)) {
        // look top
        if(row > 0 && isTop(array, row,col)) {
            row--; 
        }
        // look bottom
        else if(row < maxRow && isBottom(array, row, col) ) {
            row++;
        }
        // look left
        else if(col > 0 && isLeft(array, row, col)) {
            col--;
        }
        // look right
        else if(col < maxCol && isRight(array, row, col)) {
            col++;
        }
        else {
            return array[row][col];
        }
        iterator++;
    }    
}

function isTop(array, r, c) {
    return (array[r][c] < array[r-1][c]);
}

function isBottom(array, r, c) {
    return (array[r][c] < array[r+1][c]);
}

function isLeft(array, r, c) {
    return (array[r][c] < array[r][c-1]);
}

function isRight(array, r, c) {
    return (array[r][c] < array[r][c+1]);
}
