// javascript functions continued

// var rgbaCouleur = {
// 	red: 0,
// 	green: 0,
// 	blue: 0,
// 	originalCouleur: 0,
// 	opacity: 0.8,
// 	couleur: function() {
// 		return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.opacity + ")"
// 	},
// 	setCouleur: function(couleur, mod) {

// 		//(this.green = this.this.originalCouleur) && (this.red = this.this.originalCouleur);
// 		//(this.originalCouleur == 0) && (this.originalCouleur = 128);
// 		if(mod != undefined) {
// 			//this.opacity += Math.ceil(mod/100);
// 			if(couleur == "green") {
// 				if(this.originalCouleur != 0)
// 					(this.green = this.originalCouleur) && (this.red = 0);
// 				(((this.green != 0) && (this.green+mod >= 0)) && (this.green += mod)) || (this.green = 128);
// 				this.originalCouleur = this.green;
// 			}
// 			else if(couleur == "red") {
// 				if(this.originalCouleur != 0)
// 					(this.red = this.originalCouleur) && (this.green = 0);
// 				(((this.red != 0) && (this.red+mod >= 0)) && (this.green += mod)) || (this.green = 128);
// 				this.originalCouleur = this.red;
// 				//((this.red-mod) > 0) && (this.red += mod);
// 			}
// 		}
// 		return this.couleur();
// 	},
// 	resetCouleur: function() {
// 		(this.red = 0) && (this.green = 0);
// 	}
// }

function assert(condition, output, couleur) {
	var assertList = document.createElement("ul");
	var listItem = document.createElement("li");
	(listItem.style.border = "solid rgba(0,138,0,1) 3px") && (listItem.style.background = "rgba(0,158,0,0.8)");
	(listItem.style.width = "20%") && (listItem.style.padding = "0px 5px");	

	output.length || (output = "la condition est vrai");

	if(!condition) {
		listItem.style.textDecoration = "line-through";
		listItem.style.border = "solid rgba(138,0,0,1) 3px";
		listItem.style.background = "rgba(158,0,0,0.9)";
	}

	listItem.innerHTML = output;

	if(couleur) 
		(listItem.style.border = "solid rgba(0,0,0,1) 3px") && (listItem.style.background = "rgba(0,50,0,0.3)");
	document.body.appendChild(assertList.appendChild(listItem));

}

window.onload = function() {

	assert(typeof outer==='function', "la fonction outer() est extérieur");
	assert(typeof inner==='function', "inner () is in scope");
	assert(typeof a==='number', "a is in scope");
	assert(typeof b==='number', "b is in scope");
	assert(typeof c==='number', 'c is in scope');

	assert(true, "|---- BEFORE OUTER ----|", 1);

	function outer() {
		assert(true, "|---- INSIDE OUTER, BEFORE a ----|")
		assert(typeof outer==='function', "la fonction outer() est extérieur");
		assert(typeof inner==='function', "inner () is in scope");
		assert(typeof a==='number', "a is in scope");
		assert(typeof b==='number', "b is in scope");
		assert(typeof c==='number', 'c is in scope');
		assert(1, "test end", 1);
		var a = 1;
		assert(true, "|---- INSIDE OUTER, AFTER a ----|")
		assert(typeof outer==='function', "la fonction outer() est extérieur");
		assert(typeof inner==='function', "inner () is in scope");
		assert(typeof a==='number', "a is in scope");
		assert(typeof b==='number', "b is in scope");
		assert(typeof c==='number', 'c is in scope');
		assert(1, "test end", 1);
		function inner() {}

		var b = 2;

		assert(true, "|---- INSIDE OUTER, AFTER inner() AND b ----|")
		assert(typeof outer==='function', "la fonction outer() est extérieur");
		assert(typeof inner==='function', "inner () is in scope");
		assert(typeof a==='number', "a is in scope");
		assert(typeof b==='number', "b is in scope");
		assert(typeof c==='number', 'c is in scope');
		assert(1, "test end", 1);

		if(a == 1) {
			var c = 3;
			assert(true, "|---- INSIDE OUTER, INSIDE if ----|")
			assert(typeof outer==='function', "la fonction outer() est extérieur");
			assert(typeof inner==='function', "inner () is in scope");
			assert(typeof a==='number', "a is in scope");
			assert(typeof b==='number', "b is in scope");
			assert(typeof c==='number', 'c is in scope');
			assert(1, "test end", 1);
		}
	}

	outer();
	assert(true, "|---- AFTER OUTER() ----|")
	assert(typeof outer==='function', "la fonction outer() est extérieur");
	assert(typeof inner==='function', "inner () is in scope");
	assert(typeof a==='number', "a is in scope");
	assert(typeof b==='number', "b is in scope");
	assert(typeof c==='number', 'c is in scope');
	assert(1, "test end", 1);
}

