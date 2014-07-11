/* 
* Chapter 4 Sample Code Snipets
* By: Ragu S.
* Date: July 10, 2014
*/

window.onload = function() {
    console.log("js file linked");
    var palindrome = 0;
    //console.log(checkPalindrome(palindrome));

    console.log(chirp(4));
}

//(function() {
    function assert(condition, response) {
        var assertion = document.createElement("li");
        assertion.innerHTML = "";
        assertion.style.fontDecoration = "strikeThrough";
        assertion.style.background = "red";
        if(condition) {
            assertion.style.fontDecoration = "none";
            assertion.style.background = "green";
        }
    }

    function checkPalindrome(text) {
        // 1. A string with 1 chars or 0 chars is a palindrome
        // 2. If string > 1 && string[0] == string[length-1], 
        // the characters within this range make up a palindrome
        
        if(text === null || text === undefined || typeof text === "number") return true;
        if(text.length <= 1) return true;
        if(text.charAt(0) != text.charAt(text.length - 1)) return false;
        return checkPalindrome(text.substr(1,text.length - 2));
    }

    function chirp(n) {
        return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
    }


//});

