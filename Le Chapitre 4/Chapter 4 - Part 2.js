/* 
* Chapter 4 Finding Primes Through Memoizing
* By: Ragu S.
* Date: July 20, 2014
*/

(function(){
	this.isPrime = function(value) {
		if(!isPrime.answers) isPrime.answers = {};
		if(!isPrime.answers[value] != null) {
			return isPrime.answers[value];
		}

		var prime = value != 1; // 1 is never prime
		for(var i=2; i<value; i++) {
			if(value%i == 0) {
				prime = false;
				break;
			}
		}

		return isPrime.answers[value] = prime;
	}
})();