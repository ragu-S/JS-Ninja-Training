/* functionalExamples of JavaScript */

function splat(fun) {
	console.log("fun " + typeof fun);
	return function(array) {
		console.log("array " + typeof array);
		return fun.apply(null, array);
	};
}

var addArrayElements = splat(function(x,y,z) { return x + y + z });

console.log(addArrayElements([2,5,7]));

// function unsplat(fun) {
// 	return function() {
// 		return fun.call(null, _.toArray(arguments));
// 	};
// }

// var joinElements = unsplat(function(array) { return array.join(' ') });

// console.log(joinElements(1,2));

// console.log(joinElements('-', '$', '!', ':'));

var lastname = "Smith";

console.log(lastname);