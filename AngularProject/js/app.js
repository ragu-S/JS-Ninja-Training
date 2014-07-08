/* AngularApp.js 
 * Created By: Ragu S
 * Purpose: To learn the fundamentals of AngularJS
 *  
 */

// Using javascript closure to encaspulate our app, Good Practices
//(function() { 
	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '. . .',
		canPurchase: true,
		soldOut: false
	}
	];
	var app = angular.module('app', []); // make sure app name is not used elsewhere as local variable
						// app name	// where dependencies go
	app.controller('storeController', function() {
		this.products = gems;
	});
// })();