
// Maintenant, nous délcerons une variable tableau
// function sortExample() {
//     var arry1;
//     /*
//     Arrays.sort(values, new Comperator<Integer>(){
//         public int compare(Integer value1, Integer value2) {
//            return value2-value1;  
//         }
//     });*/
    
//     values.sort(function(value1, value2){ return value2 - value1; });
    
//     if (result > 0) {
//         // place in array based on order of croissant ou descendant
//     }
//     else{
//         // place in array based on order of croissant ou descendant
//     }
// }

// function assert(laCondition, result) {
//    if (laCondition){
//      return result;
//    }
//     else {
//       return "La condition est faux";
//    }
// }
function assert(value, desc) {
    var results = null;
    desc === undefined ? desc = "assertion true" : 0;
    if(!(results = document.getElementById("results"))){
        results = document.createElement("ul");
        results.id = "results";
    }
    //alert(value);
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    if (!value) {
        li.className = "fail";
        li.innerHTML = "assertion is false";
    }
    results.appendChild(li); 
    document.body.appendChild(results);
}

function uneMasse() {
    var leAsterisque = "\*";
    for(var i=0; i < 80; i++) {
        leAsterisque += "\*";
    }
    return leAsterisque;
}
window.onload = function() {    
    function isNimble(){ return true; } // 1. Accéder une fonction nomé. Le nom est available throughout le scope ceurent et il est plus comme un properté de la fênetre

    assert(typeof window.isNimble === "function", "isNimble() defined"); // 2. Cette le prémiere essai affirme que la propriété fênetre est établi, et d'autre que le propriété nom de la fontion est enregistré.  
    assert(isNimble.name === "isNimble", "isNimble() has a name"); 

    var canFly = function(){ return true; }; // 3. Crée une fonction anonyme qui est affectée à la variable.

    assert(typeof window.canFly === "function", // 4. Les essaies que la variable références(nf) la fontion anonyme et que la propriété nom  
                                                // est donné une chaîne vide (pas nul) 
    "canFly() defined");
    assert(canFly.name === "", "canFly() has no name");

    window.isDeadly = function(){ return true; }; // 5. Ceci crée une fontion anonyme que soit référené par la propriété de fenêtre.

    assert(typeof window.isDeadly === "function", "isDeadly() defined"); // 6. Ceci teste que la propriété références la fonction.

    function outer(){
        assert(typeof inner === "function", "inner() in scope before declaration"); // 7. Il définit une fonction intérieure dans la fonction extérieur
        function inner(){}                                                          // Teste que la fonction intérieur est capable d'etre référencé avant et après sa déclaration et que pas nom de mondial est créé pour la fonction inner() 
        assert(typeof inner === "function", "inner() in scope after declaration");
        assert(window.inner === undefined, "inner() not in global scope");
    }

    outer(); // 8. teste que la fonction outer() peut être référencé dans la portée mondial (scope), mais que la fonction inner() ne peut pas
    assert(window.inner === undefined, "inner() still not in global scope");

    //assert(window.outer() === "function", "inner() is inside outer() still");

    window.wieldsSword = function swingsSword() { return true; };

    assert(window.wieldsSword.name === 'swingsSword', "wieldSword's real name is swingsSword");
};