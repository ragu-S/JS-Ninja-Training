/* 
* Chapter 4 Sample Code Snipets
* By: Ragu S.
* Date: July 10, 2014
*/
(function(){
	this.assert = function(value, desc) {
		var ul = document.getElementsByTagName("ul");
		var li = document.createElement("li");

		if(!ul.length)
			ul = document.createElement("ul");
		else
			ul = ul[0];

		li.style.listStyleType = "none";
		li.style.color = "green"; 
		li.appendChild(document.createTextNode(desc));

		if(!value) {
			li.style.color = "red";
			li.style.textDecoration = "line-through";
		}

		ul.appendChild(li);
		document.body.appendChild(ul);
	};
	this.makeTestList = function() {
		var testButton = document.createElement("div");
		testButton.style.padding = "10px 20px 10px 20px";
		testButton.style.border = "solid 2px";
		testButton.style.textAlign = "center";
		testButton.innerHTML = "Test Results";
		testButton.style.align = "top";
		testButton.style.position = "fixed";

		testButton.onmouseover = function() {
			this.style.color = "red";
			testButton.style.padding = "20px 40px 20px 40px";

		};
		testButton.onmouseout = function() {
			this.style.color = "black";
			testButton.style.padding = "10px 20px 10px 20px";
		};
		console.dir(testButton);
		document.body.appendChild(testButton);
	};
})();
