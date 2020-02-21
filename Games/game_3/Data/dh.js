//LIBRARY OF GENERAL USEFUL FUNCTIONS
const dh = (function(){ 
	
	/**
		Randomize array element order in-place.
		Using Durstenfeld shuffle algorithm (Fisher-Yates)
	 */
	function shuffle(array,seed){
		if(typeof seed === "undefined")seed = Math.random()*1000;
		random(seed);
		console.log(SEED);
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
	
	/**
		change format of numbers from 10000 to 10 000, no idea how it works 
	*/
	function witchcraft(num){
		num = num.toString();
		return num.replace(/\B(?=(?:\d{3})+(?!\d))/g, " ")
	}

	
	/**
		return array of "number" items which are returned by "fce"
		"attempts" - number of attempts before the function gives up 
		each item is different (if possible)
	*/
	function array_of_different(number,fce, attempts = 50){
		let array = []; //final array 
		for(let i=0;i<number;i++){
			let temp;
			for(let failsafe=0;failsafe<attempts;failsafe++){
				temp = fce();
				let end_cycle=true;
				for(let k=0;k<i;k++){
					if(array[k]==temp){
						end_cycle=false;
						break;
					};
				};
				if(end_cycle)break;
			};
			array[i]=temp;
		};
		return array
	};
	
	
	
	
	
	
	//TODO SEED
	function random_from_array(number, input){
		let output = []; //final array 
		for(let i=0;i<number;i++){
			output[i] = input[  Math.floor( Math.random()*input.length )  ];		
			if(i>0 && output[i] == output[i-1])i--; //not repeat the same item twice
		};
		return output
	};
	
	
	/**
		seed-based random number 
		see: http://indiegamr.com/generate-repeatable-random-numbers-in-js/ 
	*/
	var SEED;
	function random(seed,max=1,min=0){
		if(typeof seed === "undefined"){
			if(typeof SEED === "undefined"){
				alert("Incorrect use of dh.random! (The seed must be defined - dh.random(some_integer)) ")
				return;
			};
		}else{
			SEED = seed;
		};
		SEED = (SEED * 9301 + 49297) % 233280;
		var random = SEED / 233280;
		//console.log("r: "+random);
		return min + random * (max - min);
	};
	
	/**
		takes array (of number) and returns index of one of item 
		with random chance based on its value
	*/
	function weighted_random(array,random){
		
 


		array.forEach(cleanArray);
		function cleanArray(value,index,array) {
		  if(typeof value === "undefined")array[index] = 0;
		  if( isNaN(value) )array[index] = 0; //true treated as 1!
		};
		
		
 
		var range = 0;
		for (let ii=0; ii<array.length; ii++){
			//
			range += array[ii];
		};
	
		if(typeof random == "undefined")random = Math.random();
		result = random * range;
		
		range = 0;
		for (let ii=0; ii<array.length; ii++){
			range+=array[ii];
			if(result<=range)return ii
		};
	};

	/**
		removes all children elements of DOM
	*/
	function remove_children(element){
		//is string with id - finds the element
		if(typeof element === 'string'){
			const element_id = element;
			element = document.getElementById(element_id);
			if(!element)console.log("Element requested by dh.remove_children with id: "+element_id+" not found!")
		}
		
		
//TO DO - TEST ALERT
		while(element.hasChildNodes()) {
			element.removeChild(element.firstChild);
		}
	};
	
	
	function toRoman(num){
		//https://www.selftaughtjs.com/algorithm-sundays-converting-roman-numerals/
		//TO DO - UNTESTED
		let result = '';
		let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
		for (let i = 0;i<=decimal.length;i++) {
		// looping over every element of our arrays
			while (num%decimal[i] < num) {   
			// keep trying the same number until it won't fit anymore      
				result += roman[i];
				// add the matching roman number to our result string
				num -= decimal[i];
				// remove the decimal value of the roman number from our number
			}
		}
		return result;
	}
	

	function between(min,max,random){
		if(typeof random === "undefined")random = Math.random();
		return min+(random*(max-min))
	}
	
	function pick_one(array,random){
		if(typeof array !== "object"){
console.log(array)
			array = [array];
console.log(array)
			for(let i = 1; i < arguments.length; i++ ) array[i]  = arguments[i];
console.log(array)
			random = void 0;
		};

		if(typeof random === "undefined")random = Math.random();
		/*console.log(array)
		console.log(array.length)
		console.log(random)
		console.log(array.length*random)
		*/
		let index = Math.floor( array.length*random )
 
	//	alert(index)
		return array[index];
	}
	
	
	function pick_different(forbidden,array,random){
		//TODO - use random as a seed
		// + Math.abs(failsafe-100)
		let picked;
		for(let failsafe = 100; failsafe>0; failsafe--){
			picked = pick_one(array);
			if(picked != forbidden)break;
		}
		return picked;
	}
	
	
	
	
	
	//returns index, 
	function unweighted_random(array,random){
		if(typeof random === "undefined")random = Math.random();
		/*console.log(array)
		console.log(array.length)
		console.log(random)
		console.log(array.length*random)
		*/
		let index = Math.floor( array.length*random )
	//	alert(index)
		return index;
	}
	
	function clone(src) {
		//console.log(src);
		return JSON.parse(JSON.stringify(src));
	/*	let target = {};
		for (let prop in src) {
			if (src.hasOwnProperty(prop)) {
				target[prop] = src[prop];
			}
		}
		return target
	*/
	}
	
	/*
	function clone_primitives(src) {
		let temp = {};
		
		
		return temp
	}
	*/
	
	
	function round(input,places){
//console.log("---------d h")		
		if( isNaN(input) )input = parseFloat(input);
//console.log(input)		
		input = input * Math.pow(10,places);
//console.log(input)		
		input = Math.round(input); //math round is iffy; TO DO
//console.log(input)				
		input = input / Math.pow(10,places);
//console.log(input)		
		return input
	};

	function capitalise(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	
	function decapitalise(string){
		return string.charAt(0).toLowerCase() + string.slice(1);
	};
	
	/**
	 * Convert an RGB object to HSL object, which are more intuitive to modify.
	 * Adapted from https://github.com/mjackson/
	 * @param {object} rgb RGB object holding r,g,b properties (each [0,255])
	 * @returns {object} HSL object holding h,s,l properties (h [0,360], s,l [0,100])
	 */
	function RGB2HSL(rgb) {
		let r, g, b;
		[r, g, b] = [rgb.r, rgb.g, rgb.b];//[clamp(rgb.r,0,255),clamp(rgb.g,0,255),	clamp(rgb.b,0,255)];

		r /= 255, g /= 255, b /= 255;
		const max = Math.max(r, g, b), min = Math.min(r, g, b);
		let h, s, l = (max + min) / 2;

		if (max === min) {
			h = s = 0;  // achromatic
		} else {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
			default:
				break;
			}
			h /= 6;
		}
		h *= 360;
		s *= 100;
		l *= 100;

		return rgb.hasOwnProperty("a") ? {
			h,
			s,
			l,
			a: rgb.a
		} : {
			h,
			s,
			l
		};
	}

	/**
		 * Clamp a number between a minimum and maximum value
		 * @param {number} num
		 * @param {number} min
		 * @param {number} max
		 * @returns {number} Clamped number
		 * stolen from Drawpoint
	 */
	function clamp(num, min, max) {
		return num < min ? min : num > max ? max : num;
	}
	
	
	
	
	
	
	
	function HSL2HEX(h, s, l) {
		if(typeof h === "object"){
			let input = h;
			h = input.h;
			s = input.s;
			l = input.l;
		};
			
	//stolen from https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
		h /= 360;
		  s /= 100;
		  l /= 100;
		  let r, g, b;
		  if (s === 0) {
			r = g = b = l; // achromatic
		  } else {
			const hue2rgb = (p, q, t) => {
			  if (t < 0) t += 1;
			  if (t > 1) t -= 1;
			  if (t < 1 / 6) return p + (q - p) * 6 * t;
			  if (t < 1 / 2) return q;
			  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			  return p;
			};
			const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			const p = 2 * l - q;
			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		  }
		  const toHex = x => {
			const hex = Math.round(x * 255).toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		  };
		  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	}
	
	
	function HEX2RGB(hex){
	  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	  return {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	  };
	}
	
	function HEX2HSL(hex){
		return RGB2HSL(HEX2RGB(hex));
	}
	
	
	
	
	/**
    from DAD
	* Extract numeric RGB values from a HTML compatible string (whitespace ignored)
     * @memberof module:da
     * @param {string} rgbString RGB string in the format "rgb(100,220,42)"
     * @returns {(object|null)} Either an object holding r,g,b properties, or null if not matched
     */
    function extractRGB(rgbString) {
        var rgb = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(rgbString);
        if (rgb) {
            return {
                r: parseInt(rgb[1]),
                g: parseInt(rgb[2]),
                b: parseInt(rgb[3])
            };
        }
        return null;
    }
    /**
	from DAD
     * Extract numeric HSL values from a HTML compatible string (whitespace ignored)
     * @memberof module:da
     * @param {string} hslString HSL string in the format "hsl(310,12%,25%)"
     * @returns {(object|null)} Either an object holding h,s,l properties, or null if not matched
     */
    function extractHSL(hslString) {
        var hsl = /hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/.exec(hslString);
        if (hsl) {
            return {
                h: parseInt(hsl[1]),
                s: parseInt(hsl[2]),
                l: parseInt(hsl[3])
            };
        }
        return null;
    }
//TO DO - CONNECT 
	function extractHSLA(hslString) {
		//TODO - CANT HANDLE dh.extractHSLA("hsla(40.31018518518518, 83.4872256515775%, 50.25184327846365%, 1)")
		
     //   var hsl = /hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)\)/.exec(hslString);
    /*    
		var hsl = /hsl\(
		\s*(\d+)\s*,
		\s*(\d+)%\s*,
		\s*(\d+)%\s*\
	\s*(\d+)%\s*\
		)/.exec(hslString);
	*/	
		var hsl = /hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\,\s*(\d+)\s*\)/.exec(hslString);	
 
	
		 if (hsl) {
            return {
                h: parseInt(hsl[1]),
                s: parseInt(hsl[2]),
                l: parseInt(hsl[3]),
				a: parseInt(hsl[4])
            };
        }
        return null;
    }
	
	  /**
	  from DAD
     * Adjust an existing color into a new color
     * @memberof module:da
     * @param color A color in RGB, hex, or HSL form
     * @param adjustment Object with H, S, L, and optionally A as properties
     */
    function adjustColor(color, adjustment) { // convert everything to HSL
        var hsl = null;
        if (typeof color === "string") { // get the first non-null result
            hsl = extractHSL(color);
            if (hsl === null) {
                hsl = hsl || extractRGB(color);
                hsl = hsl || extractHex(color); // have an RGB value
                if (hsl) {
                    hsl = RGBToHSL(hsl);
                }
            }
        } else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
            hsl = color;
        } else if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
            hsl = RGBToHSL(color);
        } // can't do it
        if (hsl === null) {
            return null;
        }
        hsl.h += adjustment.h || 0;
        hsl.s += adjustment.s || 0;
        hsl.l += adjustment.l || 0;
        if (adjustment.hasOwnProperty("a")) {
            return "hsla(" + hsl.h.toFixed(1) + "," + hsl.s.toFixed(1) + "%," + hsl.l.toFixed(1) + "%," + adjustment.a.toFixed(2) + ")";
        } else {
            return "hsl(" + hsl.h.toFixed(1) + "," + hsl.s.toFixed(1) + "%," + hsl.l.toFixed(1) + "%)";
        }
    }
	
	
	
	
	//https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
			/**
		 * Converts an HSL color value to RGB. Conversion formula
		 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
		 * Assumes h, s, and l are contained in the set [0, 1] and - NO!!!!!!!!
		 * returns r, g, and b in the set [0, 255].
		 *
		 * @param   {number}  h       The hue
		 * @param   {number}  s       The saturation
		 * @param   {number}  l       The lightness
		 * @return  {Array}           The RGB representation
		 */
		function HSL2RGB(h, s, l){
			if(typeof h === "object"){
				let input = h;
				h = input.h;
				s = input.s;
				l = input.l;
			};
			
			h = h/360; //LIKE WHAT THE FUCK? Original function had H in interval [0,1] ????!!!!!
			s = s/100;
			l = l/100
			
			var r, g, b;

			if(s == 0){
				r = g = b = l; // achromatic
			}else{
				var hue2rgb = function hue2rgb(p, q, t){
					if(t < 0) t += 1;
					if(t > 1) t -= 1;
					if(t < 1/6) return p + (q - p) * 6 * t;
					if(t < 1/2) return q;
					if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
					return p;
				}

				var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
				var p = 2 * l - q;
				r = hue2rgb(p, q, h + 1/3);
				g = hue2rgb(p, q, h);
				b = hue2rgb(p, q, h - 1/3);
			}

			return {
				r: Math.round(r * 255), 
				g: Math.round(g * 255), 
				b: Math.round(b * 255)
			};
		}




	function stringifyHSLA(tempco){
		if(typeof tempco !== "object" && arguments[1]){
			tempco.h = arguments[0];
			tempco.s = arguments[1];
			tempco.l = arguments[2];
			tempco.a = arguments[3];
		}
		if(typeof tempco.a === "undefined")return stringifyHSL(tempco);
		return "hsla("+tempco.h+", "+tempco.s+"%, "+tempco.l+"%, "+tempco.a+")";
	};

	function stringifyHSL(tempco){
		return "hsl("+tempco.h+", "+tempco.s+"%, "+tempco.l+"%, "+tempco.a+")";
	};









	//https://ux.stackexchange.com/questions/82056/how-to-measure-the-contrast-between-any-given-color-and-white
function relative_luminace(r,g,b){
	if(typeof g === "undefined"){ //inputed object, disassemble: 
		let input = r;
		r = input.r;
 		g = input.g;
		b = input.b;
	};
 
	const R = (  r <= 10 ? r/3294 : Math.pow( (r/269+0.0513) , 2.4 )  );
	const G = (  g <= 10 ? g/3294 : Math.pow( (g/269+0.0513) , 2.4 )  );
	const B = (  b <= 10 ? b/3294 : Math.pow( (b/269+0.0513) , 2.4 )  );
 
	return (0.2126 * R + 0.7152 * G + 0.0722 * B);
}

function contrast_ratio_hsl(h1,s1,l1,h2,s2,l2){
	const one = relative_luminace( dh.HSL2RGB(h1,s1,l1) )
	const two = relative_luminace( dh.HSL2RGB(h2,s2,l2) )
	
	const L1 = one >= two ? one : two;
	const L2 = one < two ? one : two;
	
	const result = (L1 + 0.05) / (L2 + 0.05);
	console.log(result);
	return result;

}



function high_contrast(h1,s1,l1,h2,s2,l2, limit = 5, above_allowed = true, bellow_allowed = true){
	let adjust = 0;
	const step = 5;
	
	if( contrast_ratio_hsl(h1,s1,l1,h2,s2,l2) < limit){
	
		for(let failsafe = 0; failsafe<(100/step); failsafe++){
	console.log("----------"+failsafe)	
			adjust += step;
			let above = l2 + adjust;
			let bellow = l2 - adjust;
			
	console.log("above");		
	console.log(above);	
			if(above_allowed && above<=100)if( contrast_ratio_hsl(h1,s1,l1,h2,s2,above) > limit){
				return {
					h: h2, 
					s: s2, 
					l: above
				}
			};
	console.log("bellow");
	console.log(bellow);
			contrast_ratio_hsl(h1,s1,l1,h2,s2,bellow)
	console.log("::");
			if(bellow_allowed && bellow>=0)if( contrast_ratio_hsl(h1,s1,l1,h2,s2,bellow) > limit){
				return {
					h: h2, 
					s: s2, 
					l: bellow
				}
			};
			
			if(bellow<0 && above>100)break;
		}
		
		
	}
	
	//giving up
	return {
		h: h2, 
		s: s2, 
		l: l2
	}
}






/*
let SEED = 9999;
function seededRandom(seed){
	if(seed)SEED = seed;
	SEED = (SEED * 9301 + 49297) % 233280;
	let random = SEED / 233280;
	return random
}
*/
seededRandom = random;

function number2word(input){
	if(isNaN(input))input = parseInt(input) 
	let number = input;
	let result = "";
	
	
	
	if(number>99){
		let hundreds = Math.floor(number/100);
		result += simpleNumbers(hundreds)+" hundred";
		number -= hundreds * 100;
		if(number>0)result += " and ";	
	};
	 
	
	
	result += basicProcedure(number);
	
	function basicProcedure(input){
		let result = "";
		if(input == 0){
			//DO NOTHING 
		}else if(input<13){
			result += simpleNumbers(input);
		}else{
			let tens = Math.floor(input/10);
			result += doubleNumbers(tens);
					
			let ones = Math.floor( (input/10)%1 * 10 );
			if(ones>0)result += "-"+simpleNumbers(ones);
		};
		return result;
	};
	
	
	
	function doubleNumbers(input){
		switch(input){
			case 2: return "twenty";
			case 3: return "thirty";
			case 4: return "forty";
			case 5: return "fifty";
			case 6: return "sixty";
			case 7: return "seventy";
			case 8: return "eighty";
			case 9: return "ninety";
		};
	};
		
	function simpleNumbers(input){
		switch(input){
			case 0: return "zero";  
			
			case 1: return "one"; 
			case 2: return "two";  
			case 3: return "three";  
			case 4: return "four";  
			case 5: return "five"; 
			case 6: return "six"; 
			case 7: return "seven"; 
			case 8: return "eight";  
			case 9: return "nine"; 
			
			case 10: return "ten";
			case 10: return "eleven";
			case 12: return "twelve";
		};
	};
	
	return result;
};




function abc(index = 1){
	return String.fromCharCode(96 + index);
}

function ABC(index = 1){
	return String.fromCharCode(64 + index);
}

function a_b_and_c(){
 
	let array = [];
	if( Array.isArray(arguments[0]) ){
		for(let i = 0; i < arguments[0].length; i++) array.push( arguments[0][i] )
	}else{
		for(let i = 0; i < arguments.length; i++) array.push( arguments[i] )
	};
				
 
 ; 

	if(array.length == 0){
		return "";
	}else if(array.length == 1){
		return array[0];
	}else if(array.length == 2){
		console.log("!!!");
		console.log(array[0]+" and "+array[1]);
		return array[0]+" and "+array[1];
	}else{
		let output = array[0];
		for(let i = 1; i < array.length-1; i++){
			output += ", "+array[i];
		};
		output += " and "+array[array.length-1];
		return output;
	};
};

	return{
		clamp:clamp,
		
		capitalise:capitalise,
		decapitalise,
		weighted_random:weighted_random,
		unweighted_random:unweighted_random,
		array_of_different:array_of_different,
		shuffle:shuffle,
		witchcraft:witchcraft,
		random:random,
		remove_children:remove_children,
		toRoman:toRoman,
		between:between,
		clone:clone,
		round:round,
		pick_one:pick_one,
		pick_different:pick_different,
		
		HSL2HEX: HSL2HEX,
		HEX2RGB: HEX2RGB,
		RGB2HSL:RGB2HSL,
		HEX2HSL:HEX2HSL,
		
		HSL2RGB,
		extractRGB,
		extractHSL,
		
		extractHSLA,
		
		parseRGB:extractRGB,
		parseHSL:extractHSL,
		
		stringifyHSLA,
		
		
		contrast_ratio_hsl,
		high_contrast,
		
		seededRandom,
		
		random_from_array,
		number2word,
		
		a_b_and_c,
		abc,
	ABC,
	};
})();