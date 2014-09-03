// Chapter 4 Part 3

(function(){
	window.onload = function() {
		assert(1===1, "assertion passed");
		var merged = merge({name: "Batou"},{city:"Niihama"}, {name: "Katou"},{city:"Kantou"});

		//assert(merged.name == "Katou", "Original name kept");
		//assert(merged.city == "Niihama", "Original city is kept");

		//assert(productOfBig(3,4,5,30) === 90, "Multiplies first arg with biggest arg");
		//assert(sliceAt([4,3,2], 1) == [3], "function working");
		//console.log(sliceAt([4,3,2], 1));
		makeAndTest();

	};

	function merge(root) {
		for(var i = 1, max = arguments.length; i < max; i++) {
			for(var key in arguments[i]) {
				root[key] = arguments[i][key];
			}
		}
		return root;
	}

	function productOfBig(vals) {
		return vals * Math.max.apply(Math, Array.prototype.slice.call(arguments, 1));
	}
	
	function sliceAt(arr, n) {
		return Array.prototype.slice.call(arr, n);
	}


	function addMethod(object, name, fn) {
		var old = object[name]; // 
		var i = 0;
		console.log(name);
		object[name] = function() {
			//console.log(merged);
			if(fn.length == arguments.length)
				return fn.apply(this, arguments);
			else if(typeof old == 'function')
				return old.apply(this, arguments);
		};
	}

	function makeAndTest() {
		var ninjas = {
			values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
		};

		addMethod(ninjas, "find", function(){			
			return this.values;
		});

		addMethod(ninjas, "find", function(name) {
			var ret = [];
			
			for(var i = 0; i < this.values.length; i++) 
				if(this.values[i].indexOf(name) === 0)
					ret.push(this.values[i]);
			return ret;
		});

		addMethod(ninjas, "find", function(first, last){
			var ret = [];
			
			for(var i = 0; i < this.values.length; i++) 
				if(this.values[i] == (first + " " + last))
					ret.push(this.values[i]);
			return ret;
		});

		assert(ninjas.find().length === 3, "Found ninjas");
		assert(ninjas.find("Sam").length === 1, "Found Sam");
		assert(ninjas.find("Alex", "Russell").length === 1, "Found Alex");
		assert(ninjas.find().length === 3, "Found ninjas again");
	}

	function makeAndTest2() {
		var starks = {
			values: ["Edard Stark", "Arya Stark", "Jon Snow"]
		};
		addMethod(starks,'findStark',function(){ 
			//	base case
			return this.values;
		});
		addMethod(starks,'findStark',function(name){ 
			console.dir(this.values);
			var matches = [];
			
			// find a Stark by first name in values
			for(var i = 0 ; i < this.values.length; i++) {
				//console.log(this.values[i]);
				console.log(this.values[i].indexOf(name));
				if(this.values[i].indexOf(name) > -1) {
					matches.push(this.values[i]);				
				}
			}
			return matches;
		});
		console.dir(starks.findStark("Stark"));
		assert(starks.findStark("Stark").length > 0, "Found some Starks");
	}
})();

// Use the slice method of an array, and get it to act upon the arguments array of a function,
// since arguments array is not a true javascript array
// slice method does a shallow copy return of an array starting at the index specified
// ["a", "b", "c", "d"].slice(1,3) => return ["b", "c"] (ie. it does not return the third indexed element)


// Provide a method-overloading function that can invoke a particular function
// based on the number of arguments passed to it
/*	
function addMethod(object, name, fn) {
	// 1. Store the previous function as default case

	// 2. Create an anonymous function and assign it as a method to the passed object
	// assign the method the name argument
	object[name] = function() { 
		// 3. check if arguments length is equal to the parameters the function can handle
		// Use apply on the function, using this and arguments as params

		// 4. If passed function cannot handle the arguments, use default function we stored
		// earlier
		
	};   
}
*/
//var starks = {
//	values: ["Edard Stark", "Arya Stark", "Jon Snow"]
//};
//addMethod(starks,'findStark',function(){ 
//	//	base case
//	return this.values
//});
//addMethod(starks,'findStark',function(name){ 
//	// find a Stark by first name in values
//	return this.values.search(argument[0]);
//})
//addMethod(starks,'findStark',function(a,b){ /* yet something else */ });


