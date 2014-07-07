/* functionalExamples of JavaScript */

window.onload = function() {

	underscoreMapExample();

}

var applyFunctionExample = function () {
	function splat(fun) {
		console.log("fun " + typeof fun);
		return function(array) {
			console.log("array " + typeof array);
			return fun.apply(null, array);
		};
	}

	var addArrayElements = splat(function(x,y,z) { return x + y + z });

	console.log(addArrayElements([2,5,7]));
}

// function unsplat(fun) {
// 	return function() {
// 		return fun.call(null, _.toArray(arguments));
// 	};
// }

// var joinElements = unsplat(function(array) { return array.join(' ') });

// console.log(joinElements(1,2));

// console.log(joinElements('-', '$', '!', ':'));

var curryingExample1 = function() {

	console.log("*******************************************************************");

	var add = function(x) {
		return function(y) {
			return x + y;
		}
	}

	var add3 = add(3);

	console.log(add3);

	console.log(add3(4));

	console.log(add3(8));

	console.dir(add3);
}

var underscoreMapExample = function() {

	var firstTwoLetters = function(words) {
		return _.map(words, function(word) { // 
			return _.first(word, 2); // for each word, it returns an array containing the first 2 elements
		});
	}

	console.log(firstTwoLetters([['m','t','l'], ['k','a','t','e']])); // ['ji', 'ka']

}

