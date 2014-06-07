
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
		}
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
window.onload = function() {
	//laSection3_3();
	//laSection3_4();
	//laSection3_6();
	
}

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
		}
		console.dir(this.faireQuelqueChose2);
	}
	quelqueChose();
}

console.log(typeof window.faireQuelqueChose1); // faireQuelqueChose1 est definé ici
console.log("vrai" || "faux"); // la experession retours vrai (pas une boolean true)
