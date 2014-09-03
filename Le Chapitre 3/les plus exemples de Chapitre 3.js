'use strict';

function laSection3_3() {
	var displayAlert = function(){
		//alert("cette est une fonction");
		console.log("c'est une fonction");
	}

	assert(typeof window.displayAlert === "function");
	console.log(typeof window.displayAlert);
	displayAlert();
				
	// on peut invoquer une fonction par:
		//   (in-vo-quer)
	function ninja(){};
	ninja();

	var samurai = function(){};
	samurai();

	// toutes les deux sont des methodes du objet fenêtre

	function creep() { return this; } // la méthode "this" retours le contexte de la fonction(i.e la fonction soi-même)  

	assert(creep() === window, "Creeping in the window");

	var ninja = { 
		skulk: creep // creep = se glisser (cette fonction est indépendent de skulk et ninja2)
	};

	assert(ninja.skulk() === ninja, "Le première ninja est furtive"); // la fonction skulk retours le contexte de la fonction ninja

	var ninja2 = {
		skulk: creep  // Cette fonction Ninja2 a la propriété skulk avec la creep fonction (cette fonction est indépendent de skulk et ninja2)
	};

	assert(ninja2.skulk() === ninja2, "le deuxième ninja est rapant"); // la fonction skulk aussi retours la fonction ninja2

	var foncUne = {
		num: 0,
		foncDeux: function() { return this; },
		// prop1: console.dir(foncDeux()),
		prop2: function(x) { this.num = x }
	}

	assert(foncUne.foncDeux() === foncUne, "foncDeux retours la contexte de foncUne");
	assert(foncUne.prop2 == 0, "la propriété de foncUne aussi retours la contexte de foncUne");

	foncUne.num = 2;
	console.dir(foncUne.num);
	foncUne.prop2(4);
	console.log(foncUne.num);
}

function laSection3_4() {
	assert(1, "*** Utilizement une constructor pour créer une objet ***");

	var creep = function() { return this; }

	function Ninja() {
		this.skulk = creep;//function() { return this; }
	}

	var ninja1 = new Ninja(); // le mot-clé new est invoque
	var ninja2 = new Ninja(); // Aussi les constructors sont s'appelle avec la première lettre écriré en majuscules
							  // Par exemple: Ninja

	assert(ninja1.skulk() === ninja1, "Le première ninja est furtivement");
	assert(ninja2.skulk() === ninja2, "Le deuxième ninja est furtivement");
}

// Invoquer avec la méthods apply() et call():
function laSection3_5() {
	// la méthode apply()
	function juggle() {
		var result = 0;
		for(var n=0; n < arguments.length; n++) {
			result += arguments[n];
		}
		this.result = result;
	}

	var ninja1 = {};
	var ninja2 = {};

	juggle.apply(ninja1, [1,2,3,4]); // cette function exige deux paramètres, une objet de contexte et une tableau de valeurs
	juggle.call(ninja2, 5,6,7,8); // la fonction call() exige les arguements comme une liste

	assert(ninja1.result === 10, "juggled via apply"); 
	assert(ninja2.result === 26, "juggled via call"); 
}

// window.addEventListener("onload") {
function laSection3_6() {

	function forEach(list, callback) { // par exemple recieve arbArgs as list, et annonymous function as 
		for(var i in list) {
			callback.call(list[i], i);
		}
	}

	// cette fonction vérifie les paramèters 
	function forEachUpgraded(list, callback, stopAt, args) {
		//console.dir(list);
		var isArray = function (arry) {
			var itIs = false;
			if(typeof arry !== "function" && typeof arry === "object")
				itIs = true;
			return itIs; 
		};
		if(isArray(list) && typeof callback === "function") {
			for(var n = 0; n < list.length; n++) {
				callback.call(list[n], n, function() { if(isArray(args)) return args[n]; });
				if (n == stopAt) 
					return 0;
			}
		}
	}

	var weapons = ['shuriken', 'katana', 'nunchucks'];
	var arbArgs = ['une', 'deux', 'trois', 'quatre'];
	//forEachUpgraded(weapons, function(index) { assert(this == weapons[index], "Reçu la valeur de " + weapons[index])}, 5);
	//forEach(arbArgs, function(index) { assert(this == arbArgs[index], "Reçu la valeur de " + arbArgs[index])});
}

function laSection3_7() {
	var  concatText = function(sampleText) {
		this.concatedTxt = sampleText;
	};
	
	var sampleText = {};
	concatText.call(sampleText, "L'histoires de Ragu");

	assert(sampleText.concatedTxt !== undefined, "Title has been added");
	console.log(sampleText.concatedTxt);
}

window.onload = function() {
	//laSection3_3();
	//laSection3_4();
	//laSection3_6();
	//laSection3_7();
	function concat(string) {
		var concat = "";
		console.log("(**********************)");
		console.log(this);
		//this.concat !== undefined ? this.concat += string : this.concat = string;
	} 
	var concatatedString = {
		//concat: ""
	};
	function addText(string) { console.log(arguments);	}
	addText("slaue", "dgf");
	Array.prototype.push.apply(concatatedString, ["salute"]);
		// for(var i = 0; i < this.arguement.length; i++) { 
		// 	this.concatatedString += arguement[i]; 
		// }
	assert(concatatedString !== undefined, "concatatedString exists");
	concat("salut");
	console.dir(concatatedString);
};

//faireQuelqueChose2();
// IMPORTANT: 
console.log(typeof window.faireQuelqueChose1); // faireQuelqueChose1 n'est pas definé ici
											   // Mais si la fonction est definé comme function faireQuelqueChose()
											   // elle est immediament 
var faireQuelqueChose1 = function() {
	
	quelqueChose();
	function quelqueChose() {
		this.faireQuelqueChose2 = function() {
			//faireQuelqueChose1();
			alert("Hein! ce fait quelque chose!");
		};
		console.dir(this.faireQuelqueChose2);
	}
	quelqueChose();
};


console.log(typeof window.faireQuelqueChose1); // faireQuelqueChose1 est definé ici
console.log("vrai" || "faux"); // la experession retours vrai (pas une boolean true)

//How can we access extra parameters that are not defined in the original function
/*eg.
function addText(string1) { var concat = string1 };

addText("bonjous","je m'appelle",someName);

Ans. By using arguement array with call or apply

function concat(string) {
	this.concat !== undefined ? this.concat += string : this.concat = string;
} 
concat.apply(addText(), function { for(var i = 0; i < this.arguement.length; i++) this.concat += arguement[i]; })
//addText



*/

/*
what is the difference between anonymous and inline functions?

Basically a property with a named function 

var obj = {
	objFunc: function getName() { return this.name; },
	name: "Garen"
}

 */

/*
	var ninja = function myNinja() { alert("calling my ninja"); }

	Can we call myNinja() function like below:
	
	myNinja();

	No, because myNinja() is contained within ninja variable, its name is only visible
	inside the var ninja
 */

/*
	What is the callee argument and how can we access and use it (ie. for doing recursion)?

	callee is a deprecated way of accessing the function context through the argument parameter
	arguments.callee is the function itself

	ie. function greet(n) { return n > 1 ? arguments.callee(n-1) + "bonjour" : "bonjour"; }
 */

/*
When do we use semicolons and why is it a good practice?

Semicolons are used at end of all statements, especially after variable assignments

It is good practice because it allows us better flexibility in compression techniques,
ie. uglify, minify, etc can compress better when it sees parses variables before semicolons
 */

/*
	For event callback management it is important to keep track of which functions are new to a 
	collection and which are already added to collection.
 */

// Make a collection object that stores functions or objects, keeps track of which objects are added,
// and only ensures new functions are added to collection
var store = {
	// give a unique id to each item we wish to collect
	nextId: 1,

	// serves as a place to cache our collection items
	cache: {},

	// the add function will add things to cache, but will not add if item already had been added
	// ie. use an unique to identify whether function had been added
	// return true if item was added
	add: function(fn) {
		if(!fn.id) {
			fn.id = store.nextId++;
			return !!(store.cache[fn.id] = fn);
		}
	}
};

function ninja() {}

// add function to our collection
store.add(ninja);

// attempt to add function again,
store.add(ninja); 

/*****************************************************************/
// What is memoization?
// 
// Process of building a function that can remember its previously computed values
// Similar to static variable

// Create a memoizing function for calculating prime numbers and storing them inside itself, using a collection template

function isPrime(value) {
	// 1. A cache to store numbers that exists the first time the function is called
	if(!isPrime.answers) isPrime.answers = {};

	// 2. Check for cached values, if value is already stored simply return the cached value
	// (ie. can be returned from array or object container) 
	if(isPrime.answers[value] != null) {
		return isPrime.answers[value];
	}

	// 3. Logic part for Prime
		// Check if value is not 1 (1 is never prime)
		var prime = value != 1; 

		for (var i = 0; i < value; i++){
			if(value%i == 0) {
				prime = false;
				break;
			}
		}
	// 4. return the current Prime number
	return isPrime.answers[value] = prime;
}


/* What are the disadvantages of caching?  

1. Caching takes up more memory

2. business logic shld be kept out, ie. a function/method shld do one thing only

3. diffcult to test or measure performance
*/


function getElements(name) {	
	// Create a cache first time we call a function
	if(!getElements.cache) getElements.cache = {};

	// the checks if getElements.cache has an entry matching 'name', else  
	return getElements.cache[name] = getElements.cache[name] || document.getElementsByTagName(name);
}

/* 
	How can we use existing functions and apply them to object types?


	Implement an onject method that takes DOM elements and stores them internally
	Assume collection by Ids for elements

	var elms = {

		add: function() {}, // use an existing native javascript function and apply it to this object

		gather: function(id) {}

	};
*/

var elms = {
	// add function uses an Array object's push method to add an elm to the current object
	// push method increments the length property of the object, and adds a numbered
	// property to the object
	add: function(elm) { 
		// EXTRA: we're checking whether nodeType has object in its array
		// however need to know if push stores by key value pairs or by index
		// thus better to use apply rather than call
		if(!this.nodeType[elm]) {
			// pushed to nodeType property using call
			//Array.prototype.push.call(this, elm); 

			Array.prototype.push.apply(this, [elm]);
		}
	}, 
	
	// gather elements from DOM using its id
	gather: function(id) { this.add(document.getElementById(id)); }

};


/* JavaScript does not provide an easy way of finding min or max of an array
	could we code one ourselves?
*/

function maxVal(arr) {
	if(!arr) arr = [1,2,45,235,562];
	var biggest = 0;
	
	for (var i = arr.length - 1; i >= 0; i--) {
		if(arr[i] > arr[i-1]) biggest = arr[i];
	}
	return biggest;
}

// works efficiently only if sorted 
function binarySearchMaxVal(arr) {
	// Left: 0 to (n-1)/2
	

	// Right: (n-1)/2 to n - 1
	
	// 
}






