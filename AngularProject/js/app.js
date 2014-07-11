/* AngularApp.js 
 * Created By: Ragu S
 * Purpose: To learn the fundamentals of AngularJS
 *  
 */

// Using javascript closure to encaspulate our app, Good Practices
(function() { 
	// var gems = [
	// {
	// 	name: 'Dodecahedron',
	// 	price: 2.95,
	// 	description: '. . .',
	// 	canPurchase: true,
	// 	soldOut: false,
	// 	datePurchased: function() {
	// 		return new Date();
	// 	}
	// },
	// {
	// 	name: 'Pentagonal Gem',
	// 	price: 5.95,
	// 	description: '. . .',
	// 	canPurchase: true,
	// 	soldOut: false,
	// 	datePurchased: function() {
	// 		return new Date();
	// 	}
	// }
	// ];
	var gemTypes = ['ruby',
				'sapphire',
				'spinel',
				'tanzanite',
				'topaz',
				'tourmaline',
				'citrine',
				'aquamarine',
				'amethyst',
				'amber',
				'diamond',
				'emerald',
				'zircon',
				'turquoise']

	Array.prototype.giveNames = function() {
		return this[Math.floor((Math.random() * 12) + 1)].toUpperCase();
	}

	var price = [];
	var gems = [];
	const NUM_GEMS = 10;
	for(var i = 0; i < NUM_GEMS; i++) {
		gems[i] = {
			name: gemTypes.giveNames(),
			price: function() {
				return Math.floor((Math.random() * 500) + 1) - 0.01; // as always we need to ensure propre range of numbers gets represented
			},
			description: '. . .',
			canPurchase: function(){ Math.round(Math.random()*1)},
			soldOut: function(){ Math.round(Math.random()*1)},
			datePurchased: function() {
				return new Date();
			}
		}
	}

	var app = angular.module('app', []); // make sure app name is not used elsewhere as local variable
						// app name	// where dependencies go
	app.controller('storeController', function() {
		this.products = gems;
	});
})();

var gemNames = ['Dodecahedron', 'Pentagonal Gem', 'opal', 'amber', 'peridot']

