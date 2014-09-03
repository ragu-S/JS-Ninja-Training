/* 
* Chapter 4 Sample Code Snipets
* By: Ragu S.
* Date: July 10, 2014
*/

window.onload = function() {
    console.log("js file linked");
    var palindrome = 0;
    //console.log(checkPalindrome(palindrome));

    assert(ninja.chirp(1) == "chirp-chirp-chirp", "Calling named function normally");
    console.log(ninja.chirp(1));

    var samurai = { chirp: ninja.chirp() };

    ninja = {};

    try {
    	assert(samurai.chirp() == "chirp-chirp-chirp", "Is this going to work?");
    }
    catch(e) {
    	assert(false, "Uh this isn't good! Where'd ninja.chirp go?");
    	console.log(e);
    }

    var greeting = {};
    
    function concat(string, n) {
        return n > 1 ? this.text = concat(string, n-1) + " " + string : string;
    }
    
    concat.apply(greeting, ["salute", 4]);
    assert(greeting.text !== undefined, "greeting text recieved string");
    console.log(greeting.text);

};

/*
    What are the two criteria for recursion
    1. a reference to self
    2. Convergence towards termination
    
    Rappeler enoyer une email à Grégoire

   
    When implementing a recursive method inside a object property, why is it a bad idea?

    Because the property name is not referencing the function, remember the function is anonymous     

 */

//(function() {
    // function assert(condition, response) {
    //     var assertion = document.createElement("li");
    //     assertion.innerHTML = response;
    //     assertion.style.textDecoration = "line-through";
    //     assertion.style.background = "red";
    //     assertion.style.paddingLeft = "10px";
    //     if(condition) {
    //         assertion.style.textDecoration = "none";
    //         assertion.style.background = "green";
    //         //assertion.innerHTML = 
    //     }
    //     console.dir(assertion);
    //     document.body.appendChild(assertion);
    // }

    function checkPalindrome(text) {
        // 1. A string with 1 chars or 0 chars is a palindrome
        // 2. If string > 1 && string[0] == string[length-1], 
        // the characters within this range make up a palindrome
        
        if(text === null || text === undefined || typeof text === "number" || text.length <= 1) {
        	return true;
        }
        if(text.charAt(0) != text.charAt(text.length - 1)) return false;
        return checkPalindrome(text.substr(1,text.length - 2));
    }

    var ninja = {
    	chirp: function(n) {
    		return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
    	}
    };

//});

