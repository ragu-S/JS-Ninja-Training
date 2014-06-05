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

assert(1, uneMasse());

function creep() { return this; } // la méthode "this" retours le contexte de la fonction(i.e la fonction soi-même)  

assert(creep() === window, "Assert 1: Creeping in the window");

var ninja = { 
	skulk: creep // creep = se glisser
};

assert(ninja.skulk() === ninja, 
	   "Assert 2: Le première ninja est furtive"); // skulking

console.dir(ninja);
console.log(uneMasse());
console.dir(ninja.skulk()); 
// var ninja2 = {
// 	skulk: creep
// };