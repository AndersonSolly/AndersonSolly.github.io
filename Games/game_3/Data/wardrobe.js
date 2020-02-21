const WARDROBE = (function(){ 	
//CONFIG
	var garment = [];
	let config = {
		PC: window.PC,
		div: "div_player",
		experimental: true,
		british: true,
	};
	
	
	let display = {
		bust: false,
		top: -1,
		bot: -1,
		transparent: false,
		
		
		/*MAKEUP SHOULD NOT BE DISPLAY! SHOULD BE SUBJECT.MAKUP OR SOMETHING*/
		makeup: {
			lips: {
				fill: "#a60000",
				prominence: 0,
			},
			mascara: {
				fill: "",
				topFill: "",
				botFill: "",
				prominence: 0,
			},
			nails: {
				fill: "",
				prominence: 0,
			},
		}
	};


	function scaled(){
		let result = 1;
		if(canvasHolder && canvasHolder.style)result = parseFloat(canvasHolder.style.width)/500;
 		return result;
	};

	
//HANDLING OF AVATAR
//does not have to be here


	//RANDOM CHARACTER - straight from DAD
	function randomCharacter(bias, stdevWeight = 1, seed) {
		if (typeof bias === "string") {
			bias = parseFloat(bias);
		}
		// bias is a number from 0 to 1 with 1 being the most feminine bias and 0 most
		// masculine bias
		var pc = new da.Player();

		//all random numbers are based on one seed 
		if(!seed)seed = new Date().getTime();
		da.initiateRandNormal(seed);
		pc.seed = seed;
		
		function random(max = 1,min = 0){ //probably shouldn't be here
		//see: http://indiegamr.com/generate-repeatable-random-numbers-in-js/ 
			seed = (seed * 9301 + 49297) % 233280;
			var rnd = seed / 233280;
			return min + rnd * (max - min);
		};
		
		// generated with default (average) stats, perturb with bias
		var dimensions = da.baseDimDesc[pc.skeleton];
		for (var dim in dimensions) {
			if (dimensions.hasOwnProperty(dim)) {
				var dimDesc = dimensions[dim];
				if (dimDesc.hasOwnProperty("stdev") === false) {
					throw new Error("dimension " + dim + " has no stdev defined");
				}
				pc.basedim[dim] +=
					da.randNormal(bias * da.getBiasMod(dimDesc, dim),
						dimDesc.stdev * stdevWeight);
			}
		}

		// generate numerical statistics
		for (var s in da.statLimits) {
			if (da.statLimits.hasOwnProperty(s)) {
				var stat = da.statLimits[s];
				if (stat.hasOwnProperty("stdev") === false) {
					throw new Error("stat " + s + " has no stdev defined");
				}
				pc[s] += da.randNormal(bias * da.getBiasMod(stat, s),
					stat.stdev * stdevWeight);
			}
		}
		
		// generate discrete statistics
		for (s in da.statDiscretePool) {
			if (da.statDiscretePool.hasOwnProperty(s)) {
				// uniform randomly pick a value from any of the available ones
				var valuePool = da.statDiscretePool[s];
				pc[s] = valuePool[Math.floor(random() * valuePool.length)];
			}
		}

		pc.clampStats();

		// names is a discrete statistic, but it's special in that different genders tend to
		// have different pools of values
		
		//TO DO - could be done more elegant way
		const femaleNamesShortlist  = "Emily Madison Emma Olivia Hannah Abigail Isabella Samantha Elizabeth Ashley Alexis Sarah Sophia Alyssa Grace Taylor Lauren Chloe Natalie Kayla Jessica Anna Victoria Mia Sydney Jasmine Julia Morgan Destiny Rachel Ella Kaitlyn Megan Katherine Jennifer Alexandra Allison Haley Kaylee Lily".split(" ");
		const maleNamesShortlist  = "Jacob Michael Matthew Daniel Andrew Ethan William David Alexander Ryan Tyler James John Brandon Christian Dylan Samuel Nathan Zachary Logan Justin Jose Austin Kevin Caleb Robert Thomas Jordan Cameron Jack Hunter Jackson Evan Luke Mason Jason Jayden Connor Kyle Charles Brian Eric Sean Alex Carlos Ian Bryan".split(" ");

		if (bias > 0) {
			pc.name =  femaleNamesShortlist[Math.floor(random() * femaleNamesShortlist.length)];
			pc.gender = 1;

		} else {
			pc.name =  maleNamesShortlist[Math.floor(random() * maleNamesShortlist.length)];
			pc.gender = 0;
		}

		for (var m in da.modLimits) {
			if (da.modLimits.hasOwnProperty(m)) {
				var mod = da.modLimits[m];
				if (mod.hasOwnProperty("stdev") === false) {
					throw new Error("mod " + m + " has no stdev defined");
				}
				pc.Mods[m] +=
					da.randNormal(bias * da.getBiasMod(mod, m),
						mod.stdev * stdevWeight);
			}
		}

		return pc;
	}
	
	//CREATE CHARACTER -  creates characters based on seed, may includes some adjustments
	function createCharacter(seed,bias = 1,randomness = 1){
		const temp = randomCharacter(bias, randomness, seed);
		temp.seed = seed;
		temp.bias = bias;
		temp.randomness = randomness;
		
		temp.money = 13;
		
		if(bias>=0){
			temp.Mods.irisLightness += 20;
			temp.basedim.hairStyle = Math.ceil( dh.seededRandom(seed)*6 )
			temp.basedim.hairLength = 60 + Math.ceil( dh.seededRandom()*30 )
		};
		
		temp.weapon = {};
		
		
		//eunichastion 
		if(bias>=0){
			temp.removePart("penis");
			temp.removePart("testicles");
			var myPart = da.Part.create(da.VaginaHuman, {
			  side: "right",
			});
			temp.attachPart(myPart);
		}else{
			temp.basedim.breastSize = -2;
		};
		
		//TAIL @ WINGS
		temp.basedim.tail = 0;
		temp.Mods.tail = 0;
		
		temp.basedim.wings = 0;
		temp.Mods.wings = 0;
		
		//HORNS
		
			
		{
			temp.basedim.hornyness = 0;
			temp.Mods.hornyness = 0;
/*
			let myPart = da.Part.create(da.StraightHorns, {
				//side: "right",
			});
			temp.attachPart(myPart, temp.decorativeParts);
*/			
		}	

 
		
		
		//EARS
		{
			
			temp.basedim.earlobeLength = 1;
			let myPartRight = da.Part.create(da.EarsElf2, {
				side: "right",
			});
			let myPartLeft = da.Part.create(da.EarsElf2, {
				side: "left",
			});
			temp.attachPart(myPartRight, temp.faceParts);
			temp.attachPart(myPartLeft, temp.faceParts);
		}

/*		
		temp.basedim.earlobeLength = 1;
		let ears = da.Part.create(da.EarsElf2, {
		  side: "right",
		});
		temp.attachPart(ears, temp.decorativeParts);

		temp.basedim.hornyness = 0;
		let horns = da.Part.create(da.StraightHorns, {
		  side: "right",
		});
		temp.attachPart(horns, temp.faceParts);
*/
		/*
		TO DO - DOESNT WORK!
		temp.basedim.tail = 0;
		let tail = da.Part.create(da.DemonicTail, {
		  side: "right",
		});

		PC.attachPart(tail, PC.decorativeParts);
		*/
 
	
		return temp;
	};
	
	//CLONE CHARACTER
	function updateMods(output,input = PC){
		/*console.log("UPDATE MODS");
		console.log(input);
		console.log(input.Mods);
		*/
		for (let key in input.Mods) {
			if( input.Mods.hasOwnProperty(key) ) {
			//	console.log(key);
				output.Mods[key] = input.Mods[key];
			} 
		} 
		
	};
	
	function cloneCharacter(template = PC){

		const temp = createCharacter(template.seed, template.bias, template.randomness);

		//TO DO - go through all mods
		updateMods(temp,template);
	
		return temp;
	};
	



	function cloneFigurine(template = PC){
	//	console.log(">>Clone figurine");
		const temp = createCharacter(template.seed, template.bias, template.randomness);
		updateMods(temp,template);


 
		temp.basedim.hairStyle = 0;
		temp.name = "Dummy";
		temp.Mods.skinHue = 40-template.Mods.skinHue;
		temp.Mods.skinSaturation = 30-template.Mods.skinSaturation;
		temp.Mods.skinLightness = 50-template.Mods.skinLightness;
		
//		temp.removePart("lips");


		let lng = temp.faceParts.length;
		for (let i=lng-1; i>0; i--){
			//if(!(temp.faceParts[i].loc == "left eyes" || temp.faceParts[i].loc == "right eyes"))continue;
			
			if(temp.faceParts[i].loc == "right ears")continue;
			if(temp.faceParts[i].loc == "left ears")continue;
			
			/*
			if(temp.faceParts[i].loc == "lips")continue;
			if(temp.faceParts[i].loc == "nose")continue;
			*/
			temp.removePart(temp.faceParts[i].loc,temp.faceParts);
		};
		
		//temp.removePart("left arm");
 
		let myPart = da.Part.create(da.NipplesHuman, {
			side: null,//"left",
			stroke: "hsla(0.0,0.0%,100.0%,1.00)",
		});
		temp.attachPart(myPart);
 
	
		temp.removeAllClothing();
		//skin: (15-PC.basedim.skin)-PC.Mods.skin	
		//console.log(temp);
		
		return temp;
	};
	
	
	
	
	
	//DRAW - draws avatar on canvas
	function draw(subject = PC){
		
		 
		
		if(display.bust){
			da.draw(canvasGroup, subject, canvasConfig).then(function (exports) {
				da.drawFocusedWindow(portraitCanvas,
					exports,{
						center: exports[da.Part.RIGHT].neck.nape,
						width: 50,
						height: 100
					});
			});
		}else{
			da.draw(canvasGroup, subject, canvasConfig);
		}
		
		//console.log(subject)
		//console.log(canvasGroup)
		
	};
	
	
	let canvasGroup;
	let canvasHolder;
	let canvasConfig;
	
	//size of the avatar canvas will be raised by adjustToMax_percent and the avatar will be offsetted by adjustToMax_value
	const adjustToMax_percent = 0.5; //percent
	const adjustToMax_value = -30; //px
	
	let container;
	let poitraitCanvas;
	let portraitCanvasSettings;
	let canvasHeight;
	let canvasWidth;
	
	function rebuild(){
		//scrolls to the top
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome a Firefox
		
		
		container = document.getElementById(config.div);
		dh.remove_children(container);
		
		canvasWidth = container.offsetWidth + (container.offsetWidth * adjustToMax_percent);
		//the avatar is bigger, there would be a lot of useless empty space
		canvasHeight = 2*(canvasWidth)
		
	//	adjustToMax = ( canvasWidth/2 - container.offsetWidth/2 )/2;
	//	adjustToMax_value = ( canvasWidth/2 - container.offsetWidth/2 )/2;
		
		dh.remove_children(container);
		
		//console.log(adjustToMax);
		
		canvasHolder = document.createElement("div");
		canvasHolder.id = "div_canvas";
		container.appendChild(canvasHolder);
	/*	
		would work perfectly if absolute: 
		canvasHolder.style.position = "absolute"
		canvasHolder.style.left = canvasHolder.style.left - adjustToMax_value/2;
	*/
		
	
		
		canvasGroup = da.getCanvasGroup(canvasHolder, {
			border: "0px",
			border: "0px",
			width:	canvasWidth,
			height:	canvasHeight,
		});
		
		canvasConfig = {
			nameColor     : "red",
			genderColor   : "red",
			heightColor   :  "#aaaaaa",
			heightBarColor: "#aaaaaa",
			//useImperial : mode.imperial
			
			// whether the name and gender icon should be rendered
			printAdditionalInfo: false,
			// whether the height and height bar should be rendered
			printHeight        : false,
			// whether the side shoe view (if available) should be rendered
			renderShoeSideView : false,
			
			//offsetX: (-adjustToMax_value*0.6)-30, //pretty random numbers but seems to more or less work for values 100-400px
			
			offsetX: adjustToMax_value, //the bigger avatar would be too right of the centre
			//pretty random numbers but seems to more or less work for values 100-400px		
					
		}; 
		
		
		display.bust = false;
		
	};
	
	
	
	function rebuildBust(){
		//scrolls to the top
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome a Firefox
	
	
	
		dh.remove_children(container);
		
		canvasHolder = document.createElement("div");
		canvasHolder.id = "div_canvas";
		container.appendChild(canvasHolder);
		
		
		canvasGroup = da.getCanvasGroup(canvasHolder, {
			border: "0px",
			border: "0px",
			width:	canvasWidth*2,
			height: canvasHeight*2,
		});
		
		
		canvasConfig = {
			printAdditionalInfo: false,
			printHeight        : false,
			renderShoeSideView : false,
			offsetX: 0, 		
		}; 
		
		
		portraitCanvas = da.getCanvas("portrait",{
			// size of the focused window/canvas
			width : container.offsetWidth-40,
			height: (container.offsetWidth*2)-40,
			
			// can add any CSS style here like border
			border: "none",
			// you can also position it absolutely
			position: "relative",
			//top     : "20px",
			left    : "20px",
			// or relative to a parent
			 parent: container,
		});
				
	 
					
		//draw();
		da.hideCanvasGroup(canvasGroup); 
		
		display.bust = true;
		draw();
		
	/*	
		da.draw(canvasGroup, PC).then(function (exports) {
			// draw just the head in a separate canvas
			// first retrieve/create the canvas if it's the first time we're getting it
			var portraitCanvas = da.getCanvas("portrait",
				{
					// size of the focused window/canvas
					width : container.offsetWidth,
					height: container.offsetWidth*2,
					
					// can add any CSS style here like border
					border: "none",
					// you can also position it absolutely
					position: "relative",
					// top     : "10px",
					// left    : "10px",
					// or relative to a parent
					 parent: container,
				});

			// you can call this multiple times to draw different parts (with different canvases)
			da.drawFocusedWindow(portraitCanvas,
				exports,
				{
					center: exports[da.Part.RIGHT].neck.nape,
					width: 50,
					height: 100
				});
		});
		
		
		*/
	};
	
	
	
	
	function focused(){
		container = document.getElementById(config.div);
		
		da.draw(canvasGroup, PC).then(function (exports) {
			// draw just the head in a separate canvas
			// first retrieve/create the canvas if it's the first time we're getting it
			var portraitCanvas = da.getCanvas("portrait",
				{
					// size of the focused window/canvas
					width : container.offsetWidth,
					height: container.offsetWidth*2,
					
					// can add any CSS style here like border
					border: "none",
					// you can also position it absolutely
					position: "relative",
					// top     : "10px",
					// left    : "10px",
					// or relative to a parent
					 parent: container,
				});

			// you can call this multiple times to draw different parts (with different canvases)
			da.drawFocusedWindow(portraitCanvas,
				exports,
				{
					center: exports[da.Part.RIGHT].neck.nape,
					width: 50,
					height: 100
				});
		});
		
		da.hideCanvasGroup(canvasGroup); 
	};
	
	
	//LOAD
	function load(){
 		da.load();
		rebuild();		 
	};
	

 
	
	
	
	



	
	
	
	
	
	
	
	
	
	
	
	
	
//COLORS 
	const listColors = {
		//ALL - mostly for testing
		all: [[0,360],[0,100],[0,100]],
		//POLY - all random but distinctive colors
		poly: [[0,360],[50,100],[25,75]],
		random: [[0,360],[50,100],[25,75]],
		//MONO - black and white
		mono: [[0,0],[0,0],[5,95]],
		//GRAY
		gray: [[0,0],[0,0],[15,85]],
		grey: [[0,0],[0,0],[15,85]],
		//BLACK - but not total black
		black: [[0,360],[5,10],[5,15]],
		
		dirtyWhite: [[0,360],[8,18],[80,90]],
		
		white: [[0,360],[8,18],[80,90]], //TEMP TODO
		
		//HAIR COLORS 
		blonde: [[44,48],[60,100],[50,80]],
		platinum: [[44,48],[0,70],[80,90]],
		pinkhead: [[330,340],[60,90],[40,70]],
		greenhead: [[101,105],[60,90],[40,60]],
		bluehead: [[220,225],[60,100],[40,60]],
		purplehead: [[290,310],[80,100],[23,36]],
		redhead: [[3,7],[70,95],[30,53]],
		auburn: [[0,10],[70,100],[18,24]],
		raven: [[0,0],[0,0],[8,15]],
		brunette: [[15,25],[40,60],[20,40]],		
			
		//BRIGHT - all distinctive bright colors with high saturation
		bright: [[0,360],[85,100],[40,60]],	
		
		//MANLYBRIGHT - bright but without pink shades
		manlyBright: [[0,250],[85,100],[40,60]],	
		
		//JEANS - light to dark blue shades suitable for jeans
		jeans: [[200,250],[40,100],[15,50]],
		
		//YOGA - darkers shades with lower saturation suitable for sweatpants 
		yoga: [[0,360],[20,60],[15,40]],

		//pinkish color
		barbie: [[295,335],[75,100],[40,60]],
		cute: [[325,345],[50,100],[70,90]],
		//METAL
		
		
		
		/*
		gold: [[48,52],[80,100],[48,52]],
		silver: [[45,55],[0,10],[70,80]],
		bronze: [[38,48],[75,100],[48,52]],
		steel: [[200,210],[20,40],[45,65]],
		*/
		NXgold: [[48,52],[80,100],[48,52]],
		NXsilver: [[45,55],[0,10],[70,80]],
		NXbronze: [[19,21], [48,52],[56,62]], //[[38,48],[75,100],[48,52]],
		NXsteel: [[200,210],[20,40],[45,65]],
		
		//now just outline for patterns
		gold: [[48,52],[80,100],[40,50]],
		silver: [[45,55],[0,10],[50,60]],
		bronze: [[19,21], [48,52],[56,62]], //[[38,48],[75,100],[40,50]],
		steel: [[200,210],[20,40],[40,50]],
		mail: [[200,210],[20,40],[40,50]], 
		damask: [[45,55],[0,10],[60,70]],
		
		
		light: [[0,360],[25,45],[70,15]],	
		
		leather: [[34,40],[54,90],[25,40]],	
		darkLeather: [[34,40],[10,40],[10,14]],	
		
		wywen: [[120,140],[60,80],[22,28]],	
		hexa: [[358,360],[60,80],[22,28]],	
		
		pure: [[0,360],[0,1],[95,98]],
		carmine: [[350,355],[99,100],[29,30]],
		indigo: [[254,256],[99,100],[26,27]],
		purple: [[299,301],[99,100],[24,26]],
		
		
		royalBlue: [[220,230],[68,78],[54,60]], //225,73,57
		burgundy: [[345,349],[68,78],[25,32]],  //hsla(347, 100%, 28%, 1)
		
		cloth: [[42,44],[9,11],[78,80]], //TODO 
		
		dark: [[0,360],[0,8],[11,16]],
		
		
		
		silk: [[26,34],[8,20],[84,92]], //TODO 
		hemp: [[40,45],[50,60],[70,80]], //TODO 
		linen: [[36,39],[50,60],[80,85]], //TODO 
		wool: [[39,42],[50,60],[80,85]], //TODO 
		cloth: [[42,44],[9,11],[78,80]], //TODO 
		
		
		
		//glass: [[90,110],[90,100],[30,50],[0.7,0.7]], //glass
		glass: [[90,110],[40,60],[20,30],[0.6,0.6]], //glass
		
		
				//43, 10%, 80%, 1
	}
	
	
	function randomColor(what){
		if(typeof listColors[what] === "undefined") what = "random";
		
		const value = listColors[what];
		return {
			h: Math.floor( between(value[0][0],value[0][1]) ),
			s: Math.floor( between(value[1][0],value[1][1]) ),
			l: Math.floor( between(value[2][0],value[2][1]) ),
			a: value[3] ? Math.floor( between(value[3][0],value[3][1])*1000 )/1000 : 1, //TO DO
		}
	}
	
	function fillPattern(what){
		//this.pat_show = false;
		switch(what){
			case "damask": this.pat = "damask";  
						this.pat_size = 200;
						break;
			case "gold": this.pat = "gold";  
						this.pat_size = 300;
						break;
			case "silver": this.pat = "silver";  
						this.pat_size = 120;
						break;
			
			case "bronze": this.pat = "copper";  
						this.pat_size = 120;
						break;
			case "steel": this.pat = "iron";  
						this.pat_size = 120;
						break;
			case "mail": this.pat = "chainmail2";  
						this.pat_size = 40;
						break;
			default: return;
		};
		this.pat_show = true;
	}
		
		
		
	function nameColor(cola,fillName){
		if(typeof cola === "string"){
			try {
				cola = dh.extractHSLA(cola);
			}
			catch(err) {
				if(debug)console.log(err); //SIC
			}
		};
		
		if(typeof cola !== "object" && typeof fillName === "undefined")return "";
			
			
		
			
			
		switch(fillName){
			case "NXgold": return "gold";
			case "NXsilver": return "silver";
			case "NXbronze": return "bronze";
			case "NXsteel": return "steel";
			
			case "gold": return "gold";
			case "silver": return "silver";
			case "bronze": return "bronze";
			case "steel": return "steel";
			
			case "leather": return "leather";
			case "darkLeather": return "leather";
			
			case "hexa": return "hexapuma leather";
			case "wywen": return "wywen leather";
			
			case "carmine": return "carmine";
			case "purple": return "purple";
			case "indigo": return "indigo";
			case "pure": return "pure";
			case "royalBlue": return "royal blue"; 
			case "burgundy": return "burgundy"; 
			
			case "dark": return "dark";
		}
	
 
	
		let desc="";
		
		if(cola.s<10){
			if(cola.l<24){
				desc+="black"			
			}else if(cola.l<40){
				desc+= config.british ? "dark grey" : "dark gray";
			}else if(cola.l<60){
				desc+= config.british ? "grey" : "gray";
			}else if(cola.l<76){
				desc+= config.british ? "light grey" : "light gray";
			}else{
				desc+="white"
			};
		}else{
			if(cola.l<40){
				desc+="dark "			
			}else if(cola.l>60){
				desc+="light "
			};
			
			if(cola.h<20){
				desc+="red"			
			}else if(cola.h<40){
				desc+="orange"
			}else if(cola.h<60){
				desc+="yellow"
			}else if(cola.h<160){
				desc+="green"
			}else if(cola.h<180){
				desc+="cyan"
			}else if(cola.h<255){
				desc+="blue"
			}else if(cola.h<295){
				desc+="purple"
			}else if(cola.h<330){
				desc+="pink"
			}else{
				desc+="red"
			};
		}
		return desc
	};
	
	

	
//CREATION
	//seed used for the random creation 
	let SEED;
	
	//returns random number based on seed
	function Rnd(){
		//see: http://indiegamr.com/generate-repeatable-random-numbers-in-js/ 
		SEED = (SEED * 9301 + 49297) % 233280;
		let random = SEED / 233280;
 
		return random;
	};
	
	function between(min,max){
		return min+(Rnd()*(max-min))
	};
	
//creates object clothes, including DA stuff, colour, and additional stuff like name
	function create(blueprint,seed,color){
		
		//CHANGES BETWEEN VERSIONS
		if(blueprint=="Staff"){
			blueprint = "Spear";
			alert("Staff renamed to Spear");
		/*
		}else if(blueprint==Staff){
			blueprint = "Spear";
			alert("Staff renamed to Spear");
		*/
		};
		
		let temp;
		let dimensions;
		const garment = WARDROBE.garment;
		//SEED
		if(typeof seed == "undefined")seed = Math.random() ; 
//console.log(seed);
		if(seed<10)seed = seed * 1000000; //seed should be date, but it also could be inputed Math.random, this is the best way to handle this
		seed = Math.floor(seed);
		SEED = seed; //"SEED" is changed during the creation, "seed" stays original

//TODO TEMPFIX		
if(debug)console.log(">>> "+blueprint+"; "+seed+"; "+color);
		if(typeof blueprint == "undefined")return;

		//EXCEPTIONS!!! - WEAPONS
		if( blueprint[0] == "x" || blueprint == "elixir" || blueprint == "randomElixir" || blueprint == "HP" ||  blueprint == "ENG"){
			if(blueprint == "randomElixir")seed = POTION.random();
			if(blueprint == "elixir") seed /= 1000000;
		
					
			switch(blueprint){
				case "xGoblin": seed = 0; break;
				case "xElf": seed = 1; break;
				
				case "xBus": seed = 2; break;
				case "xMino": seed = 3; break;
				
				case "HP":
				case "xHP": seed = 4; break;
				case "ENG":
				case "xENG": seed = 5; break;
				
				case "xNajad": seed = 6; break;
				case "xAnti": seed = 7; break;
				
				case "xBov": seed = 8; break;
				case "xFel": seed = 9; break;
				
			}
			if(debug)console.log(">>> "+blueprint+"; "+seed+"; "+color);
			
			let value = 7;
			switch(seed){
				case 2: value = 12; break;
				case 3: value = 11; break;
				
				case 7: value = 5; break;
				
				case 8: value = 14; break;
				case 9: value = 15; break;
			}
	/*		
	console.log(blueprint);
	console.log(seed);
	console.log(color);
	*/
//console.log(  (   mile.potion[seed] ? dh.capitalise( POTION.elixir[seed].name ) :  dh.capitalise( POTION.elixir[seed].color+" Elixir" )   ) )	
			//TODO!! MILE!!!!!!
			return temp = {
				name:  (   mile.potion[seed] ? dh.capitalise( POTION.elixir[seed].name ) :  dh.capitalise( POTION.elixir[seed].color+" Elixir" )   ),
				trueName:  dh.capitalise( POTION.elixir[seed].name ),
				price: value,
				slot: "potion",
				category: "POTIONS",
				blueprint: "elixir",
				seed: seed,
			};
		}
		
	/*	
console.log(garment)		
console.log(WARDROBE.garment)		
console.log(this.garment)	
*/	
		//CHECK
		try {
			let check = garment[blueprint].slot
		}
		catch(err) {
			console.log(err); //SIC
			alert("Error! Blueprint of demanded type of clothes (\""+blueprint+"\") not found!")
			return
		}
		
		//EXCEPTIONS!!! - TATTOO
		if(garment[blueprint].slot[0]=="t" && garment[blueprint].slot[1]=="a" && garment[blueprint].slot[2]=="t"){ //TODO
			return create_tattoo(blueprint,seed);
		}
		
		//EXCEPTIONS!!! - WEAPONS
		if( garment[blueprint].slot == "weapon" ){
			return temp = {
				name:  dh.capitalise(garment[blueprint].name),
				attack: garment[blueprint].attack,
				original_attack: garment[blueprint].attack,
				price: garment[blueprint].price ? garment[blueprint].price : 2,
				type: garment[blueprint].type,
				slot: garment[blueprint].slot,
				class: garment[blueprint].class,
				category: "WEAPONS",
				blueprint: blueprint,
				seed: seed,
				
				mag: garment[blueprint].mag,
				hp: garment[blueprint].hp,
			};
		}
		
		//DAD CREATION
		dimensions = garment[blueprint].dim();
		
		try {
			temp = da.Clothes.create(da[garment[blueprint].dad],dimensions);
		}
		catch(err) {
			console.log(err); //SIC
			alert("Error! DAD was not able to create demanded type of clothes (\""+blueprint+"\")!")
			return
		}
		
		
		temp.blueprint = blueprint;
		temp.dad = garment[blueprint].dad;
		temp.seed = seed;
		temp.color = color;
		
		temp.slot = garment[blueprint].slot;
		//temp.otherSlots = garment[blueprint].otherSlots;
		
		//CATEGORY
		switch(temp.slot){
			case "vest": //TEMP - TO DO 
			case "upper":
			case "upperArmor":
			case "upperLower": temp.category = "UPPER"; break;
			case "lower":
			case "lowerArmor":
				temp.category = "LOWER";break;
			case "bra":
			case "panties": temp.category = "UNDERWEAR";break;
			case "pauldrons":
			case "gloves":
			case "neck":
			case "vambraces":  temp.category = "ARMS";break;
			case "greaves": 
			case "socks": 
			temp.category = "LEGS";break;
			
			case "shoes":
			temp.category = "SHOES";break;
			
			case "belt":  temp.category = "ACCESSORY";break;
			case "necklace":
			case "nose":
			case "lips":
			case "eyebrow":
			case "nipples":
			case "pubic":
			case "tongue":
			case "bellybutton":
			case "earrings":  temp.category = "JEWELRY";break;
		};
		

		//COLORS
			/*
				priority:
				1. color - parameter of this function - input for the random color generator
				2. dimensions.fill (== garment[blueprint].dim().fill) - exact color 
				3. garment[blueprint].fill - input for the random color generator
			*/
		
		//FILL
		let fill;
				
		//directly from parameter of this function or from blueprint.fill
		if(typeof color !== "undefined" && color != ""){
			fill = color; //TO DO
		}else{	
			fill = garment[blueprint].fill;
		};
	/*

console.log(fill)	
 */
//console.log("f "+garment[blueprint].fill)		
 
		//could be array of several color inputs 
		if(typeof fill === "object"){
			fill = fill[  Math.floor( Rnd()*fill.length )  ]
		}
		let fillName = fill;
//console.log(fill)			
		
		//gets random color
		fill = randomColor(fill);

//console.log(fill)				
		//is applied or overridden by color in blueprint.dimension
		if(config.experimental){
			if(typeof dimensions.hue  !== "undefined" && typeof dimensions.light  !== "undefined" && typeof dimensions.satur  !== "undefined")fillName = "";
			if(typeof dimensions.hue  === "undefined") temp.hue = fill.h;
			if(typeof dimensions.light  === "undefined") temp.light = fill.l;
			if(typeof dimensions.satur  === "undefined") temp.satur = fill.s;
			if(typeof dimensions.alpha === "undefined") temp.alpha =fill.a;
		};
		if(typeof dimensions.fill === "undefined") temp.fill = dh.stringifyHSLA(fill);
		if(typeof dimensions.fill !== "undefined")fillName = "";
//console.log("fn"+fillName);				
		//STROKE
		let stroke;
		
		//if there is stroke defined in blueprint.stroke, uses blueprint; if not it just adjusts the color of fill
		if(typeof dimensions.stroke !== "undefined"){
			stroke = dimensions.stroke;
		}else if(typeof garment[blueprint].stroke !== "undefined"){
			stroke = garment[blueprint].stroke;
			if(typeof stroke === "object")stroke = stroke[  Math.floor( Rnd()*stroke.length )  ]
			stroke = dh.stringifyHSLA( randomColor(stroke)	);
		}else if(typeof dimensions.fill !== "undefined"){
			//TODO - only handles HSLA - !!! - ADD HEX & HTML
//console.log(temp.fill);
			stroke = da.adjustColor(dh.extractHSLA(temp.fill),{s: 6, l: -12});
		}else{
			stroke = "hsla("+fill.h+","+(fill.s+6)+"%,"+(fill.l-12)+"%,"+fill.a+")";
		};
		
		//applies, or is overridden by blueprint.dim().stroke
		if(typeof dimensions.stroke === "undefined")temp.stroke = stroke;


		//HIGHLIGHT
		let highlight;
		
		//if there is highlight defined in blueprint, used blueprint; if not just adjust the color of fill
		if(typeof garment[blueprint].highlight !== "undefined"){
			highlight = garment[blueprint].highlight;
			if(typeof highlight === "object")highlight = highlight[  Math.floor( Rnd()*highlight.length )  ]
			highlight = dh.stringifyHSLA( 	randomColor(highlight)	);
		}else{
			highlight = "hsla("+fill.h+","+(fill.s+6)+"%,"+(fill.l-12)+"%,"+fill.a+")";
		};
		
		//applies, or is overridden by blueprint.dim().highlight
		if(typeof dimensions.highlight === "undefined")temp.highlight = highlight;
	
		//COLOURS ARE OVERRIDEN BY PATTERNS
		 fillPattern.call(temp,fillName);
	
	
		//transparent 
		if(garment[blueprint].piercing)temp.piercing = true;
		
		temp.forcedTransparency = false;

		temp.mag = garment[blueprint].mag;
		temp.hp = garment[blueprint].hp;
		//TEMP
		temp.price = garment[blueprint].price ? garment[blueprint].price : 2; //tempfix
//console.log("fn"+fillName);		
		//NAME
		if( !garment[blueprint].adjective ){
			temp.name = nameColor( {h:temp.hue,s:temp.satur,l:temp.light} ,fillName)+" "+garment[blueprint].name;
		}else{
			temp.name = garment[blueprint].adjective+" "+garment[blueprint].name;
		}
		temp.name = dh.capitalise(temp.name);
		
		temp.locked = false;
		
		return temp; 
	
	};
	
	
	
	
	
	function create_tattoo(blueprint,seed){
		const garment = WARDROBE.garment;
		
		let temp;
		const original_blueprint = blueprint;
		let dimensions;
		
		let left = blueprint.search("Left");
		let right = blueprint.search("Right"); 
		blueprint = blueprint.replace("Left", "");
		blueprint = blueprint.replace("Right", "");
		
		try {
		  dimensions = garment[blueprint].dim();
		}
		catch(err) {
			console.log(err); //SIC
			alert("Error! Blueprint of demanded tattoo (\""+blueprint+"\") not found!")
			return;
		}
		
		
		//if(debug && !dimensions.slot)alert("Error - tattoo "+blueprint+" has no defined slot. ");
		
		if(dimensions.side){
			//defined because can't be random - eq bellybutton is only on one side
		}else if(left != -1){
			dimensions.side = "left";
			garment[blueprint].slot += "Left";
		}else if(right != -1){
			dimensions.side = "right";
			garment[blueprint].slot += "Right";
		}else{
			let random = Rnd() < 0.5 ? true : false;
			dimensions.side = random ? "left" : "right";
			garment[blueprint].slot += random ? "Left" : "Right";
		};
		
		if(dimensions.side == "left" && dimensions.rotation)dimensions.rotation = dimensions.rotation*-1;
		dimensions.name = blueprint+seed;
		dimensions.src = "Images/"+dimensions.src;
	
		dimensions.width = dimensions.width * scaled();
	 
		try {
			temp = da.Tattoos.create(da.Tattoo,dimensions);
		}
		catch(err) {
			console.log(err); //SIC
			alert("Error! DAD was not able to create demanded tattoo (\""+blueprint+"\")!")
			return;
		}
	
		//TO DO - THIS IS AWFUL:
		temp.belowParts = ["clothingParts leg","clothingParts torso","clothingParts chest"];
		
		temp.slot = garment[blueprint].slot;
		temp.blueprint = original_blueprint;
		temp.seed = seed;
		return temp;
	};
	
	
	
	
	function createMultiple(){
//		console.log(arguments);
		const array = [];
		
		for(let i = 0; i < arguments.length; i++){
			if(typeof arguments[i] === "object"){
				for(let k = 0; k < arguments[i][0]; k++){
					array[array.length] = cre(arguments[i][1]);
				};	
			}else{
				array[array.length] = cre(arguments[i]);
			}
		};
		
		function cre(input){
			if(typeof input === "object"){
				return create(input[0], input[1], input[2]);
			}else{
				return create(input);
			}
		}
		
		return array
	};
	
	
	
	function createMultipleDetailed(){ //DELETE
//		console.log(arguments);
		const array = [];
		
		for(let i = 0; i < arguments.length; i++){
			if(typeof arguments[i] === "object"){
				array[array.length] = create(arguments[i][0], arguments[i][1], arguments[i][2]);
					
			}else{
				array[array.length] = create(arguments[i]);
			}
		};
		
//		console.log(array);
		return array
	};
	
	function createMultiplePacked(){
		let array = createMultiple(...arguments);
		array = packArray(array);
//console.log(array);
		return array
	};
	
	
	
	function pack(item){
		if(!item || !item.blueprint)return "";
		if(!item.color)item.color="";
		return item.blueprint+":"+item.seed+":"+item.color
	};
	
	function unpack(code){
		if(!code||code=="")return void 0;
		code = code.split(":");
		return create(code[0],parseInt(code[1]),code[2])
	};
	
	
	
	
		
		
		
	function packWorn(subject){
		let code = "";
		for(let i=0; i<allSlots.length; i++){
				if( subject[allSlots[i]] ) code += pack( subject[allSlots[i]] )+";";
		};
		
		if( subject.weapon && subject.weapon.attack ) code += pack( subject.weapon )+";";
/*		
		code += "&"; //++

		for(let k = 0; k<= 2; k++){
			for(let i=0; i< subject.jewelery[k].length; i++){
				if( subject.jewelery[k][i] ) code += pack( subject.jewelery[k][i] )+";";
			};
			code += "+";			
		};
		
		code += "&"; //++
		
		for(let k = 0; k<= 2; k++){
			for(let i=0; i< subject.symbol[k].length; i++){
				if( subject.symbol[k][i] ) code += pack( subject.symbol[k][i] )+";";
			};
			code += "+";						
		};
*/
/*
console.log("packWorn");
console.log(code);
*/
		return code;
	};
	
	
	
	let temporaryStorage;
	function save(subject = PC){
		temporaryStorage = packWorn(subject);
	};
	
	function restore(subject = PC){
		unpackWear(temporaryStorage, subject);
	};
	
	
	
	
	
	/*
	function packArray(array){
		let code = "";
		for(let i=0; i<array.length; i++){
			code += pack( array[i] )+";";
		};
		return code;
	};
	
	
	function unpackArray(code){
		if(typeof code === "undefined")return;
		const array = [];
		code = code.split(";");
console.log(code);
		for(let i = 0; i < code.length-1; i++){
			array[i] = unpack(code[i]);
		}
		return array;
	};
	
	*/
	
	function packArray(array){
		let arrayOfCodes = [];
		for(let i=0; i<array.length; i++){
			arrayOfCodes[arrayOfCodes.length] = pack( array[i] );
		};
		return arrayOfCodes;
	};

	function unpackArray(arrayOfCodes){
		if(typeof arrayOfCodes === "undefined")return;
		const array = [];
		for(let i = 0; i < arrayOfCodes.length; i++){
			array[i] = unpack(arrayOfCodes[i]);
		}
		return array;
	};
	
	
	
	
	function unpackWear(code, subject = PC){
		removeAll();	
		if(!code)return;
		code = code.split(";");
		for(let i = 0; i < code.length-1; i++){		
			quickWear(unpack(code[i]), subject);
		};
		update(subject);
	};
	
	
	
	function wearActual(garment, subject = PC){
	//	if(garment.slot == "weapon")return;
	
		if(!garment || !garment.slot)return;
		//multislot clothes remove the other 
		let slot = garment.slot; 
		
			//dress removes skirt
			if(garment.slot=="upperLower"){ 
				slot="upper";
				if(subject.lower)subject.lower = void 0;
			}
			
			//skirt removes dress
			if(garment.slot=="lower"&&subject.upper&&subject.upper.slot=="upperLower"){ 
				subject.upper = void 0;
			};
		
		subject[slot] = garment;
	}
	
	function quickWear(garment, subject = PC){
		wearActual(garment, subject);
	}
	
	function wear(garment, subject = PC){
		wearActual(garment, subject);
		update(subject);
	}
	
	
	
	
	
	function removeActual(garment, subject = PC){
		let slot;
		//it could be inputed garment or slot
		if(garment.slot){
			slot = garment.slot; 
		}else{
			slot = garment;
		};
		
		//dress always needs something extra
		if(slot == "upperLower"){
			slot = "upper";
		}
		
		subject[slot]=void 0;
	}
	
	function remove(garment, subject = PC){
		removeActual(garment,subject);
		update(subject);	
	}
	
//TODO KEEP ONE
	function strip(subject = PC){
		for(let i=0; i<allSlots.length; i++){
			removeActual(allSlots[i],subject);
		};
		update(subject);
	}
	function removeAll(subject = PC){
		for(let i=0; i<allSlots.length; i++){
			removeActual(allSlots[i],subject);
		};
		update(subject);
	}

	
	
	const outfits = {};
	let activeOutfit;
	function wearOutfit(name = activeOutfit, subject = PC){


		/*
console.log("WEAR OUTFIT");
console.log(subject);
console.log(outfits[name])
	*/	
		removeAll();
		activeOutfit = name;
		for(let i=0; i<outfits[name].length; i++){
	/*
	console.log(outfits[name][i]);
console.log("-X--X-SLOTS-BEFORE")			
			console.log(subject.bra);
			console.log(subject.lower);
			console.log(subject.weapon);
*/
//	console.log("-+--+-+- "+i);
//	console.log(outfits[name][i]);
			wearActual(outfits[name][i], subject);
	/*		
console.log("-X--X-SLOTS-AFTER")			
			console.log(subject.bra);
			console.log(subject.lower);
			console.log(subject.weapon);
console.log("  ")			
	*/
	};
		update(subject);
		
	/*	
console.log("-X--X--FFF-")
console.log(subject)
*/

	}
	
	
	function createOutfit(){
		const name = arguments[0];
		outfits[name] = [];
		let seed = arguments[1];
		
		
		
		for(let i = 2; i < arguments.length; i++){
			if(typeof arguments[i] === "object"){
				outfits[name][outfits[name].length] = create(arguments[i][0], seed, arguments[i][1]);
			}else{
				outfits[name][outfits[name].length] = create(arguments[i],seed);
			};
			
			seed = dh.seededRandom(); //TODO! - WILL BE PROBLEM UNLESS TRIGERED FROM initiate_outfits() IN stuff.js
			//(seed/2)*4; //TO DO 
		};
	
	}
	
	
	
	
	
	
	
	
	function attachMakeup(subject){
		subject.lipstick = da.Clothes.create(da.wLipstick, {
			invisible: 1-display.makeup.lips.prominence,
			fill: display.makeup.lips.fill,
		});
		subject.wearClothing(subject.lipstick);
/*		
console.log("macar!!!!!!!!")		
console.log(display.makeup.mascara.botFill)
*/		
		subject.mascara = da.Clothes.create(da.wMascara, {
			invisible: display.makeup.mascara.prominence > 1 ? 0 : 1-display.makeup.mascara.prominence,
			extraLength: display.makeup.mascara.prominence,
			fill: display.makeup.mascara.fill,
			botFill: display.makeup.mascara.botFill,
			topFill: display.makeup.mascara.topFill,
		});
		subject.wearClothing(subject.mascara);
/*		
console.log("NAILS")
console.log(display.makeup.nails.prominence)
console.log(display.makeup.nails.fill)
	*/	
		subject.nails = da.Clothes.create(da.Nails, {
			invisible: 1-display.makeup.nails.prominence,
			fill: display.makeup.nails.fill,
		});
		subject.wearClothing(subject.nails);
	};


	function update(subject = PC){
	
//console.log("SETTING")
//console.log(setting)
 


		subject.removeAllClothing();
 		attachMakeup(subject);
		
		
		/*TODO UGLY HACK!!!*/
		if(att.collar == 1 && setting != 2){
			let collar = da.Clothes.create(da.Choker, {
				center: true,
				thickness: 0.53,
				fill: "hsla(0.0,0.0%,0.8%,1.00)",
			});
			subject.wearClothing(collar);
		}
		
		
		/*
		for(let i=0; i<all_clothes.length; i++){
			if( subject[all_clothes[i]] ){
		
				subject.wearClothing( subject[all_clothes[i]] )
			}
		}
		*/
	

		function ont(dis,what){
			if(!subject[what])return;
			if(display.top<0 || display.top >= dis){
				checkTransparency(subject,what);
				subject.wearClothing( subject[what] );
			};
		};
		
		function onb(dis,what){
			if(!subject[what])return;
			if(display.bot<0 || display.bot >= dis){
				checkTransparency(subject,what);
				subject.wearClothing( subject[what] );
			};
		};
		
		function on(what){
			if(!subject[what])return;
			subject.wearClothing( subject[what] );
		};
		
		function onsocks(){
			//TO DO 
			onb(2,"socks")
		};


		/*
			Outside
		*/
		//console.log(subject.earrings)
			
		on("earrings");
//on("bellybutton");

//console.log(setting)
//alert(setting);

		if(setting!=2){//SETTING!
			on("bellybutton");
			on("nipples");
			on("lips");
			on("nose");
			on("bodychain");
			on("eyebrow");
			on("tongue");
			on("pubic");
		};		
		/*
			Top:
			0 - nude
			1 - bra
			2 - undershirt
			3 - upper
			4 - vest 
			5 - coat / armor
		*/
		
		ont(1,"bra");
		ont(3,"upper");
			onb(3,"gloves");
		ont(4,"vest");
		ont(4,"necklace");
			onb(5,"upperArmor");
			onb(5,"neck");
			onb(5,"vambraces");
			onb(5,"pauldrons");
		/*
			Bot:
			0 - nude
			1 - panties & socks
			2 - pantyhose
			3 - lower
		*/
		
		if(display.bot == -2){
			on("socks");
			on("shoes");
		}else{
			onb(1,"panties");
			onsocks("socks");
			onb(3,"lower");
			onb(4,"belt");
			onb(4,"lowerArmor");
			onb(4,"shoes");
			onb(5,"greaves");	
		};
		
		//nipples visible
		if(subject.upper){
			subject.upper.showNipples = false;
			if(
				subject.getDim("breastSize") > 3
				&& (!subject.bra||subject.bra.invisible>0.9)
			)subject.upper.showNipples=true;
		};
 	
		//belt aligned to pants
		if(subject.belt && subject.lower){
			if(subject.belt.waistCoverage && subject.lower.waistCoverage) subject.belt.waistCoverage = subject.lower.waistCoverage
			
			if(subject.belt.beltCurve && subject.lower.beltCurve) subject.belt.beltCurve = subject.lower.beltCurve;
			
			if(subject.lower.beltWidth)subject.lower.beltWidth = subject.belt.beltWidth-0.05; //?????
		};
	
	
		//pants tucked into greaves
		if(subject.greaves && subject.lower && subject.lower && subject.lower.innerLoose<1){
			subject.lower.innerLoose = 0;
			subject.lower.outerLoose = 0;
		}
		
		//sleeves tucked into vambraces
		if(subject.vambraces && subject.upper){
			subject.upper.armLoose = 0;
		}
		
		//vest (respective corset) makes top tight
		if( (subject.upperArmor || subject.vest) && subject.upper){
			if(subject.upper.sideLoose)subject.upper.sideLoose = 0;
		}; //TODO - belt?
		
		
	
		//bodysuit - not relevant but will keep
		/*
			if(subject.done.bodysuit){
				if(subject.upper)subject.upper.bodysuit = true;
				if(subject.lower)subject.lower.bodysuit = true;
				//if(subject.upper)subject.uppper.bodysuit = true;
			}else{
				if(subject.upper)subject.upper.bodysuit = false;
				if(subject.lower)subject.lower.bodysuit = false;
			};
		*/ 
		
		
		
			
			
		draw(subject);  
	};
	
	
	
	function dressUpSubject(subject){
		for(let i = 1; i < arguments.length; i++){
			temp = create(arguments[i]);
			quickWear(temp,subject);
		}		
		update(subject);
	};
	
	
	function dressUp(){
		for(let i = 0; i < arguments.length; i++){
			temp = create(arguments[i]);
			quickWear(temp);
		}
		update();
	};
	
	function showLess(top,bot){
		if(typeof top !== "undefined")display.top = top;
		if(typeof bot !== "undefined")display.bot = bot;
		update();
	};
	
	function showAll(){
		display.top = -1;
		display.bot = -1;
		/*
		if(display.transparent){
			display.transparent = false;
			switchTransparency();
		};
		*/
		update();
	};

/*	
	function showTransparent(){
		display.transparent = true;
		switchTransparency();
		update();
	};
*/	
	function checkTransparency(subject,what){
		if( subject[what].forcedTransparency != display.transparent ) switchTransparency(subject,what);
	};
	
	function switchTransparency(subject = PC,what){
		
		
		
		let alpha = 1;
		
		switch(subject[what].slot){
			case "upperArmor":
			case "lowerArmor":
				alpha = 0.7;
			case "upperLower":
			case "upper":
			case "lower":
			case "vest":
			case "belt":
			case "shoes":
					alpha = 0.6;
					break;
			case "socks":
					alpha = 0.4;
					break;
			case "bra":
			case "panties":
					alpha = 0.2;
					break;
			default: return;
		}
		
		if(display.transparent)alpha *= -1;



		subject[what].alpha += alpha;

	/*	
		if)alpha(
		let temp = dh.extractHSLA(subject[what].fill);

*/
	//	temp.a = subject[what].alpha;
		//subject[what].fill = dh.stringifyHSLA(temp);
		
		subject[what].fill = "hsla("+subject[what].hue+","+(subject[what].satur)+"%,"+(subject[what].light)+"%,"+subject[what].alpha+")";



		subject[what].forcedTransparency = !subject[what].forcedTransparency; 
		//TODO HIGHLIGHT
		
		/*
		const top = 0.8;
		const mid = 0.7;
		const bot = 0; //0.6;
		
		const direction = display.transparent ? -1 : 1;
		
		aleph("upper",top);
		aleph("lower",top);
		aleph("socks",mid);
		aleph("bra",bot);
		aleph("panties",bot);
		
		function aleph(what,value){
			if(subject[what]){
				subject[what].alpha += direction * value;
				if( subject[what].alpha>1 )subject[what].alpha = 1;
console.log( subject[what].alpha );  
				//if(subject[what].highlight)subject[what].highlight = value;
			}
		}
		*/
		
	};
	
	


/*
	1: slashy
	2: staby
	3: striky
	4: hity
*/
function fataled(subject = PC){
	if(!subject.weapon || !subject.weapon.type)return "killed";
	switch(subject.weapon.type){
		case 1: return "decapitated";
		case 2: return "pierced through";
		case 3: return "crushed";
		default: return "slew";
	}	
}

function attack(subject = PC){
	if(!subject.weapon || !subject.weapon.type)return "punch";
	switch(subject.weapon.type){
		case 1: return "slash";
		case 2: return "stab";
		case 3: return "strike";
		default: return "hit";
	}	
}
function attacks(subject = PC){
	if(!subject.weapon || !subject.weapon.type)return "punches";
	switch(subject.weapon.type){
		case 1: return "slashes";
		case 2: return "stabs";
		case 3: return "strikes";
		default: return "hits";
	}	
}
function attacked(subject = PC){
	if(!subject.weapon || !subject.weapon.type)return "punched";
	switch(subject.weapon.type){
		case 1: return "slashed";
		case 2: return "stabbed";
		case 3: return "struck";
		default: return "hit";
	}	
}


function checkBonus(what){
	let result = 0;
	for(let i=0; i<allSlots.length; i++){
		if( PC[allSlots[i]] && PC[allSlots[i]][what]) result += PC[allSlots[i]][what]; // PC!!!
	};
	
	//console.log(PC.weapon)
	//console.log(PC.weapon[what])
	if( PC.weapon && PC.weapon[what]) result += PC.weapon[what]; // PC!!!
	
	console.log("BONUS "+what+" "+result)
	
	return result;
}



const allCategories = ["UPPER","LOWER","UNDERWEAR","ARMS","LEGS","SHOES","ACCESSORY","JEWELRY","WEAPONS","POTIONS"];
const allSlots = ["necklace","belt","vest","upper","upperArmor","lower","lowerArmor","bra","panties","socks","shoes","gloves","gauntlets","neck","vambraces","greaves","pauldrons","earrings","nose","lips","eyebrow","nipples","pubic","tongue","bellybutton"];

let outfitTemplates = [];
let outfitGameTemplates = [];	
	
	
	function changeOutfit(name,subject = PC, inventory){
//TODO - there might be some loose shit
		addWornToInventory(subject,inventory);
		wearOutfit(name);
	}
	
	
	
	function softChangeOutfit(name,subject = PC, inventory){
	//doesn remove piercings and locked stuff (original have to remove them because of switching settings)
		//addWornToInventory(subject,inventory);
		//wearOutfit(name);
		for(let i=0; i<allSlots.length; i++) if(subject[allSlots[i]]){
			if( subject[allSlots[i]].locked ) continue;
			if( subject[allSlots[i]].piercing ) continue;
			inventory[inventory.length] = pack( subject[allSlots[i]] );
			removeActual(allSlots[i],subject);
		}
		
		activeOutfit = name;
		for(let i=0; i<outfits[name].length; i++){
			
			if(!subject[ outfits[name][i].slot ])wearActual(outfits[name][i], subject);
		};
		update(subject);
		
		
	}
	
	
//INVENTORY
	function addToInventory(item, inventory){
		inventory[inventory.length] = pack(item);
	};
	
	function addWornToInventory(subject = PC, inventory){
		for(let i=0; i<allSlots.length; i++) if(subject[allSlots[i]]){
		//	console.log(allSlots[i])
		//	console.log(subject[allSlots[i]])
			//if( subject[allSlots[i]].locked || subject[allSlots[i]].piercing ) continue;
			inventory[inventory.length] = pack( subject[allSlots[i]] );
		}
	};
	
	
	
	
	function equipedGarment(slot,subject = PC){
		for(let i=0; i<allSlots.length; i++){
			if( slot == allSlots[i] && subject[allSlots[i]] )return true;
		};
		return false
	};
	
	
	function ownGarment(slot,original_inventory,subject = PC){
		if( equipedGarment(slot,subject = PC) ) return true;

//console.log(">>>"+slot)			
		const inventory = unpackArray(original_inventory);
//console.log(inventory)
		for(let i=0; i<inventory.length; i++){
			if(slot == inventory[i].slot)return true;
		};
		return false
	};
	
	
	
	function randomOutfit(original_inventory,subject = PC){
		
		

		//addWornToInventory(subject,original_inventory);
		//for(let i=0; i<allSlots.length; i++) if(subject[allSlots[i]]) inventory[inventory.length] = pack( subject[allSlots[i]] );
		
		//combines addWornToInventory and removeAll but checks for locked garments
		for(let i=0; i<allSlots.length; i++){
			if(subject[allSlots[i]] && !subject[allSlots[i]].locked && !subject[allSlots[i]].piercing){
				original_inventory[original_inventory.length] = pack( subject[allSlots[i]] ); //pack this item and adds it to the inventory 
				removeActual(allSlots[i],subject);
			}
		};
		
		const inventory = unpackArray(original_inventory); //unpacked object used as inventory in this function
		
		/*
console.log("aff");
console.log(inventory);
for(let i=0; i<inventory.length; i++)console.log(inventory[i]);
		*/	
		function randomGarment(what){
			if(subject[what])return;
			const arrayAll = []
			for(let i=0; i<inventory.length; i++){
				if(inventory[i].slot == what)arrayAll[arrayAll.length] = i;
			};
			const chosen = dh.pick_one(arrayAll);
			
			subject[what] = inventory[chosen];
			inventory.splice(chosen, 1);	
		}
		
		
		
		 
		
		
		
		
		
		
			
		function randomSpecific(what,condition){
			if(subject[what])return;
			const arrayAll = []
			
	//		console.log(condition);
	 
			for(let i=0; i<inventory.length; i++){
	//			console.log(i);
	//			console.log(inventory[i]);
				if(inventory[i].slot == what && condition(inventory[i]) ) arrayAll[arrayAll.length] = i;
			};
			
	//		console.log("specAry");
	//		console.log(arrayAll);
			
			if(arrayAll.length==0){
				randomGarment(what);
				return;
			}
			
			const chosen = dh.pick_one(arrayAll);
			
			subject[what] = inventory[chosen];
			inventory.splice(chosen, 1);	
		}
		
		/*
		
		*/
		
	//	console.log(arguments[2]);
	//	console.log(arguments[2].condition);
//		console.log(arguments[2].condition() );
		
		if(!arguments[2]){
			randomGarment("upper");
			randomGarment("lower");
			randomGarment("bra");
			randomGarment("panties");
			randomGarment("socks");
//TODO SHOES
			randomGarment("earrings");
		}else{
			for(let i=2; i<arguments.length; i++){
				if(typeof arguments[i] !== "object"){
					const tautology = () => true;
					randomSpecific(arguments[i],tautology);
				}else{
					randomSpecific(arguments[i].slot,arguments[i].condition);
				}
			};
		}
		//TODO - FIND HOW JS WORKS! 
/*
console.log(inventory);
console.log("inv");
*/
	//	for(let i=0; i<inventory.length; i++)console.log(inventory[i]);
		let temp = packArray(inventory);
/*
console.log(temp);
console.log("temp");
for(let i=0; i<temp.length; i++)console.log(temp[i]);
*/
		for(let i=0; i<temp.length; i++){
			original_inventory[i] = temp[i]; 
		};
		original_inventory.splice(temp.length);
		update();
	}
	
	
	
	function randomOutfitFAI(){	
		let item = [];
		if(content == "first"){
			if(false){
			}else{
				item = [];
				item.push({
					slot: "lower",
					condition: (input) => {
						if(input.innerLoose<1)return false;
						if(mile.slut<=1){
							if(input.legCoverage<0.24)return false;
						}else{
							if(input.legCoverage<0.18)return false;
						};
						return true;
					}
				})
				item.push({
					slot: "upper",
					condition: (input) => {
						if(   input && ( input.dad == "wTubeTop" || input.dad == "wHalterTop" || input.dad == "wTee" /* (input.dad == "wTee" && input.armCoverage<0.4 && input.waistCoverage>0.6) */ )   )return true;
						return false;
					}
				})
				item.push("panties");
				item.push({
					slot: "socks",
					condition: (input) => {
						if(input.blueprint ==  "Socks" || input.blueprint ==  "CuteSocks")return true;
						return false;
					}
				});
				item.push("earrings");
				item.push("necklace");
				item.push("bellybutton");
				item.push({
					slot: "shoes",
					condition: (input) => {
						if(input.blueprint ==  "Sneakers")return true;
						return false;
					}
				});
	//TODO - INVENTORY!!!
			}
		}else if(content == "weekend" || content == "weekend2"){
			item.push("upper");
			item.push({
				slot: "lower",
				condition: (input) => {
					if(input.innerLoose<1)return false;
					if(mile.slut<=1){
						if(input.legCoverage<0.24)return false;
					}else{
						if(input.legCoverage<0.18)return false;
					};
					return true;
				}
			})
//TODO MILE SLUT
			if(mile.slut>3){
				item.push({
					slot: "panties",
					condition: (input) => {
						if(input.blueprint == "Thong" || input.blueprint == "LowThong" || input.blueprint == "GString")return true;
						return false;
					}
				})
			}else{
				item.push("panties");
			};
//TODO
			item.push("bra");
			
			item.push("earrings");
			item.push("necklace");
			item.push("bellybutton");
			item.push({
				slot: "shoes",
				condition: (input) => {
					if(input.blueprint ==  "Sneakers")return true;
					return false;
				}
			});
		/*		
			item.push({
				slot: "shoes",
				condition: (input) => {
					if(input.blueprint ==  "Sneakers")return true;
					return false;
				}
			});
		*/
//TODO THRID IS GROPED HERE
		}else if(content == "second" || content == "third"){
			if(false){
			}else{
				item = [];
				item.push("earrings");
				item.push("necklace");
				item.push("bellybutton");
				item.push({
					slot: "lower",
					condition: (input) => {
						if(input.innerLoose<1)return false;
						if(mile.slut<=1){
							if(input.legCoverage<0.24)return false;
						}else{
							if(input.legCoverage<0.18)return false;
						};
						return true;
					}
				})
				item.push({
					slot: "upper",
					condition: (input) => {
						if(   input && ( input.dad == "wTubeTop" || input.dad == "wHalterTop" || input.dad == "wTee" /* (input.dad == "wTee" && input.armCoverage<0.4 && input.waistCoverage>0.6)*/  )   )return true;
						return false;
					}
				})
				item.push("panties");
				switch(mile.stockings){
					case 1: 
						item.push({
							slot: "socks",
							condition: (input) => {
								if(input.blueprint ==  "HighSocks" || input.blueprint ==  "BrightHighSocks")return true;
								return false;
							}
						})
						break;
					default:
					case 2: 
						item.push({
							slot: "socks",
							condition: (input) => {
								if(input.blueprint ==  "StockingsFishnet" || input.blueprint ==  "GarterStockingsFishnet")return true;
								return false;
							}
						})
						break;
					case 3: 
						item.push({
							slot: "socks",
							condition: (input) => {
								if(input.blueprint ==  "GarterStockingsFishnet" || input.blueprint ==  "GarterStockingsPoly" || input.blueprint ==  "GarterStockings")return true;
								return false;
							}
						})
						break;
				}
				
				item.push({
					slot: "shoes",
					condition: (input) => {
						if(input.blueprint ==  "KittyHeels" || input.blueprint ==  "HighHeels")return true;
						return false;
					}
				});
			}
		}
		
		randomOutfit(window.inventory,PC,...item);
	
	
	}
	
	
	
	
	
	
	
	
	
	function appearance(subject = config.PC){
		let value = 0;
		let desc = "<ul>";
		function add(string,number){
			value += number;
			desc += "<li>"+string+" (+ "+number+")";
		};
		description = "</ul>";
		
		let panties_bottom = false;
		
		
		/*
		
		2 
glimpse
5

8

if(PC.upper && PC.upper.waistCoverage && PC.lower && PC.lower.waistCoverage){
	if(PC.upper.waistCoverage < PC.lower.waistCoverage){
		//
	}else{
		let difference = Math.abs(PC.lower.waistCoverage - PC.upper.waistCoverage);
		
		let bellow_zero = PC.lower.waistCoverage < 0 ? 
	
	
	
	
	}

};



*/

		
		const transparent_1 = 0.9;
		const transparent_2 = 0.55;

		//CLEAVAGE (MAX 4)
		if(PC.upper){
			if(PC.upper.cleavageCoverage){
				
				if(PC.upper.cleavageCoverage>0.69){
					add("absolute cleavage",4);
				}else if(PC.upper.cleavageCoverage>0.42){
					add("deep cleavage",3);
				}else if(PC.upper.cleavageCoverage>0.3){
					add("revealing cleavage",2);
				}else if(PC.upper.cleavageCoverage>0.18){
					add("nice cleavage",1);
				};
				
			}else if( WARDROBE.garment[PC.upper.blueprint].dad == "wTubeTop" ||  WARDROBE.garment[PC.upper.blueprint].dad == "TubeTop"){
				if(PC.upper.chestCoverage<0.2){
					add("revealing tube top",3);
				}else{
					add("tube top",2);
				};
			};
			
		}else if(PC.vest){
			add("corset",3); //TODO 2?	
		};
		
		//NIPPLES/BRA (MAX 1)
		if(PC.vest && !PC.vest.topCoverage){
			//corset with cups
		}else if(PC.upper && !PC.bra){
			/*
			if(PC.lower.alpha <  transparent_2){
				add("completely transparent shirt with nothing under",6);
			}else 
			*/
			if(PC.upper.alpha <  transparent_1){
			 	add("translucent shirt with nothing under",4);
			}else if(PC.upper.showNipples){
				add("obviously no bra",2);
			}else{
				add("no bra",1);
			};
			//add("nipples visible",1);
		}else if(PC.upper){
			if(PC.upper.alpha <  transparent_1)	add("translucent shirt",2);
			//has upper & bra
		}else if(PC.vest && PC.vest.topCoverage){ //corset without cups
			if(PC.bra){
				add("bra",2);
			}else{
				add("breasts exposed",5); // + corset (3) == 8 //TODO
			}
		}else if(PC.bra){
			add("only in bra",5);
		}else if(PC.panties || PC.lower){
			add("topless",7);
		}else{
			//nude
		};
		
		
		//SLEEVES (MAX 2)
		if(PC.upper){
			if(typeof PC.upper.armCoverage != "undefined"){
				if(typeof PC.upper.shoulderCoverage != "undefined"){
					add("bare shoulders ",1);
					if(PC.upper.armCoverage < 0.45){
						add("short sleeves",1);
					};
				}else{
					if(PC.upper.armCoverage < 0.12){
						add("shoulder straps",2);
					}else if(PC.upper.armCoverage < 0.45){
						add("short sleeves",1);
					};					
				};
			}else{
				add("bare arms ",1);
				add("bare shoulders ",1);
			};
		}else if(PC.vest){
		//	add("bare arms and shoulders ",2); //TODO
		}
			
		
		
		
		
		
		
		//MIDRIFF
		if( ( (PC.vest && PC.vest.waistCoverage) || (PC.upper && PC.upper.waistCoverage) ) && PC.lower && PC.lower.waistCoverage){
			if(PC.upper && PC.upper.waistCoverage < PC.lower.waistCoverage){
				//there is no space between shirt and pants
			}else if(PC.vest && PC.vest.waistCoverage < PC.lower.waistCoverage){
				//there is no space between corset and pants
			}else{
				let difference;
				let topWaistCoverage;
				
				if(PC.upper && PC.vest){
					topWaistCoverage = PC.vest.waistCoverage < PC.upper.waistCoverage ? PC.vest.waistCoverage : PC.upper.waistCoverage;
				}else{
					topWaistCoverage = PC.upper ? PC.upper.waistCoverage : PC.vest.waistCoverage;
				};
				
				//values under zero are more prominent (hip - tight covers double area of waist - hip)
				//so the value bellow zero is halved 
				const modifier = 2;
				
				if(topWaistCoverage > 0){ 
					if(PC.lower.waistCoverage >= 0){
						difference = topWaistCoverage - PC.lower.waistCoverage;
					}else{
						difference = topWaistCoverage + Math.abs(PC.lower.waistCoverage * modifier)
					}
				
				}else{
					difference = Math.abs(PC.lower.waistCoverage - topWaistCoverage) * modifier;
				}
				
				if(difference>0.8){
					add("bare midriff",3);
				}else if(difference>0.5){
					add("visible midriff",2);
				}else if(difference>0.2){
					add("glimpse of midriff",1);
				} 
			};
		};

		
		let skirt = "";
		if(subject.lower) skirt = "skirt";
		if(subject.lower && subject.lower.innerLoose < 1)skirt = "trousers";
		if(subject.lower && WARDROBE.garment[subject.lower.blueprint].dad == "wSuperLeggins" ) skirt = "leggins"; //TODO
		if(subject.upper && subject.upper.slot == "upperLower")skirt = "dress";
		
		//PANTS (MAX 5)
		if(skirt == "trousers" || skirt == "leggins"){
			
			const cov = subject.lower.legCoverage;
			if(cov < 0.24){
				add("hotpants",3);
			}else if(cov < 0.45){
				add("shorts",2);
			}else if(cov < 0.75){
				add("capri",1);
			}else{
				//add("long "+skirt,0);
			};
		
			if(subject.lower.innerLoose < 0.01 && subject.lower.outerLoose < 0.01){
				add("very tight "+skirt,2);
			}else if(subject.lower.innerLoose < 0.5 && subject.lower.outerLoose < 0.36){
				add("fitting "+skirt,1);
			};
			
		//SKIRT OR DRESS (MAX 6)
		}else if(skirt == "skirt" || skirt == "dress"){
			const cov = subject.lower ? subject.lower.legCoverage : subject.upper.legCoverage;
			const lose = subject.lower ? subject.lower.outerLoose : subject.upper.legLoose;
			if(cov < 0.16){
				add(skirt+" not hiding anything",5);
				panties_bottom = true;
			}else if(cov < 0.30){
				add("micro"+skirt,4);
			}else if(cov < 0.45){
				add("mini"+skirt,3);
			}else if(cov < 0.60){
				add("short "+skirt,2);
			}else if(cov < 0.75){
				add("midi "+skirt,1);
			}else{
				//add("long skirt",0);
			};
			
			
			if(cov < 0.16){
				//nothing
			}else if(cov < 0.30 && lose > 1.3){
				add("one windblow from pantyshot",1);
			}else if(lose < 0.01){
				add("tight "+skirt,1);
			}
		//LONG TOP	
		}else if(subject.upper && subject.upper.waistCoverage && subject.upper.waistCoverage < 0.69){
			//add("only long shirt",4);
		//NOTHING
		}else{
			//panties_bottom = true;
			//add("no trousers",5);
		};
		
		
	
		
		
		//SOCKS
		if(PC.lower && PC.lower.legCoverage>0.75){
			//covered by trousers
		}else if(skirt == "dress" && PC.upper.legCoverage>0.75){
			//covered by dress
		}else if(PC.socks){
			
			
			if(PC.socks.legCoverage<0.42){
				add("stockings",1);
			}else if(PC.socks.legCoverage<0.69){
				add("high socks",1);
			};
			
			if( PC.socks.legCoverage<0.5   
				&& (  subject.lower || (subject.upper && subject.upper.slot == "upperLower")  ) 
			){
				const cov = subject.lower ? subject.lower.legCoverage : subject.upper.legCoverage;
				if(PC.socks.legCoverage>cov+0.03 && PC.socks.legCoverage<cov+0.10){
					add("zettai ryouiki",1);
				}
			};
		
		}else if(!PC.shoes){
			add("barefoot",1);
			
		};
		
		
		
		
		//PANTIES
		if( !(subject.lower || (subject.upper && subject.upper.slot == "upperLower") )  ){
			if(skirt == "dress" && PC.upper.legCoverage>0.16){
				//crotch covered by shirt
				
				if(PC.upper.alpha <  transparent_1){
					if(PC.panties){
						add("translucent dress",3);
					}else{
						add("translucent dress with nothing under",6); //TODO
					}
				};
				
			}else if(skirt == "dress" && PC.upper.legCoverage>0.13){
				if(PC.upper.alpha <  transparent_1){
					if(PC.panties){
						add("translucent dress",3);
					}else{
						add("translucent dress with nothing under",6); //TODO
					}
					//the glimpse overriden by the transparency 
					//TODO - IS THIS RIGHT?????
				}else{
					if(PC.panties){
						add("glimpse of panties",1);
					}else{
						add("glimpse of genitals",3); 
					}
				}	
					
			}else if(PC.upper && PC.upper.waistCoverage<-0.62){
				//crotch covered by shirt
				if(PC.upper.alpha <  transparent_1){
					if(PC.panties){
						add("only translucent long shirt",6);
					}else{
						add("only translucent long shirt with nothing under",8); //TODO
					}
				}else{
					add("only long shirt",4);
				};
					
			
			}else if(PC.vest && PC.vest.waistCoverage < -0.55){
				//crotch covered by shirt
				if(PC.vest.alpha <  transparent_1){
					if(PC.panties){
						add("only translucent corset",6);
					}else{
						add("only translucent corset with nothing under",8); //TODO
					}
				}else{
					add("only long corset",4);
				};
				
				
			}else if(PC.upper && PC.upper.waistCoverage<-0.47){
				if(PC.upper.alpha <  transparent_1){
					if(PC.panties){
						add("only translucent long shirt",6);
					}else{
						add("only translucent long shirt with nothing under",8); //TODO
					}
					//the glimpse overriden by the transparency 
				}else{
					add("only long shirt",4);
					if(PC.panties){
						add("glimpse of panties",1);
					}else{
						add("glimpse of genitals",3); 
					}
				}
				
			
			}else if(PC.vest && PC.vest.waistCoverage < -0.35){
				if(PC.vest.alpha <  transparent_1){
					if(PC.panties){
						add("only translucent corset",6);
					}else{
						add("only translucent corset",8); //TODO
					}
					//the glimpse overriden by the transparency 
				}else{
					add("only long corset",4);
					if(PC.panties){
						add("glimpse of panties",1);
					}else{
						add("glimpse of genitals",3); 
					}
				}
				
			}else{
				//THONG!
				if(PC.panties){
					add("panties fully exposed",8);
				}else if(PC.upper || PC.bra || PC.vest){
					add("bottomless",13); 
				}else{
					add("nude",20); //in total 19
				}
			};
		}else{
			if( 
				   ( subject.lower && subject.lower.alpha < transparent_1 )
				|| (subject.upper && subject.upper.slot == "upperLower" && subject.upper.alpha <  transparent_1) 
			){
				if(PC.panties){
					add("translucent "+skirt,3);
				}else{
					add("translucent "+skirt+" with nothing under",6); //TODO
				}
				//overriden by transparency
			//BOTTOM OF PANTIES UNDER SHORT SHIRT
			}else if(panties_bottom){
				if(PC.upper && PC.upper.waistCoverage<-0.62){
					//crotch covered by shirt
				}else{
					if(PC.panties){
						add("glimpse of panties",1);
					}else{
						add("glimpse of genitals",3); 
					}
				};
			};
		};
		//TOP OF PANTIES ABOVE PANTS WAISTLINE
		if(PC.panties && PC.lower && PC.lower.waistCoverage){
			const difference_mod = 0.22; //panties waist is higher than the one of pants, TODO
			if(PC.upper && PC.upper.waistCoverage < PC.lower.waistCoverage){
				//covered by shirt
			}else if( (PC.lower.waistCoverage+difference_mod) < PC.panties.waistCoverage){
				add("top of panties visible",1);
			};
		};
		
	
	
	
		
		return {
			value,
			desc
		};
		
		
	};
	
		
	function inventoryTest(subject = PC,original_inventory,containerID,back,original_merchant){
		
		//SHOULD NOT BE IN WARDROBE!!
		DISPLAY.subtext();
		
		const inventory = unpackArray(original_inventory); //unpacked object used as inventory in this function
		const original_clothes = packWorn(subject); //original clothes, packed in case they would need to be restored
		const categories = dh.clone(allCategories); //list of categories - TODO - REMOVE USELESS CATEGORIES?!?!
		var active_cat = ""; //active (currently opened) category
	
		var moneyChange = 0;
		

		const trade = original_merchant ? true : false;//TODO!
		const merchant = trade ? unpackArray(original_merchant) : null;
		//const figurine = trade ? cloneFigurine(subject) : null;
		const figurine = cloneFigurine(subject);
		var div_buy = trade ? [] : null;
		
	WARDROBE.draw(subject);
	
		//list of div_worn items 
		var div_worn = [];
		var div_available = [];

		
		//CREATE CONTAINMENT 
			//assigns container and clears it 
			const container = document.getElementById(containerID);
			dh.remove_children(container);
		
			//div which holds the whole thing
			const div_holder = document.createElement("div");
			div_holder.id = "war_div_holder";
			div_holder.style.height = document.getElementById("div_canvas").offsetHeight * 0.9;
			container.appendChild(div_holder);

			//div_left one
			const div_left = document.createElement("div");
			div_left.id = "war_div_left";
			div_holder.appendChild(div_left);
			div_left.addEventListener("mouseleave",ultraOff);//TODO

			//div_right one
			const div_right = document.createElement("div");
			div_right.id = "war_div_right";
			div_holder.appendChild(div_right);


			//div_trade
			const div_trade = document.createElement("div");
			div_trade.id = "war_div_trade";
			div_holder.appendChild(div_trade);
			if(!trade)div_trade.style.display = "none";
			
			//top of the div_left one with div_worn items
			const div_top = document.createElement("div");
			div_top.id = "war_div_top";
			div_left.appendChild(div_top);

			//mid of the div_left with additional stuff
			const div_mid = document.createElement("div");
			div_mid.id = "war_div_mid";
			div_left.appendChild(div_mid);
			
			
			//bot of the div_left one with links
			const div_bot = document.createElement("div");
			div_bot.id = "war_div_bot";
			div_left.appendChild(div_bot);
			
		
		
			//TODO
			var worldFilterInput = "🔎 Seach"; 
			const for_input = document.createElement("input");
			for_input.type = "text";
			//for_input.value = "🔎 Seach";
			for_input.id = "war_for_inp";
			div_mid.appendChild(for_input);
			
			for_input.value = worldFilterInput;
			
			for_input.onclick = function(){
				if(this.value[0] = "🔎") this.value = "";
			};
			
			for_input.oninput = function(){
				worldFilterInput = this.value;
				reload("wordFilter");
			};
			
			//TODO !!!
			const for_sort = document.createElement("select");
			for_sort.id = "war_for_sort";
			for_sort_add("↓ Abc",0);
			for_sort_add("↑ Abc",1);
			
			
			
			
			if(setting==2){ //SETTING!!!
				for_sort_add("↓ Price",2);
				for_sort_add("↑ Price",3);
				for_sort_add("↓ Defense",4);
				for_sort_add("↑ Defense",5);
				for_sort_add("↓ Attack",6);
				for_sort_add("↑ Attack",7);
			};
		/*	
			for_sort_add("Cba ↓",8);
			for_sort_add("Cba ↑",9);
		*/
			
			div_mid.appendChild(for_sort);
			function for_sort_add(input,index){
				const option = document.createElement("option");
				option.text = input;
				for_sort.add(option,index);
			};
			for_sort.onchange = function(){
				const cba = (a,b) => {
					const x = a.name.toLowerCase().split("").reverse().join("");
					const y = b.name.toLowerCase().split("").reverse().join("");
					if (x < y) {return -1;}
					if (x > y) {return 1;}
					return 0;
				}
				switch(this.value){
					case "Cba ↓":
						inventory.sort(cba);
						if(merchant)merchant.sort(cba);
						break;
					case "Cba ↑":
						inventory.sort(cba);
						if(merchant)merchant.sort(cba);
						inventory.reverse();
						if(merchant)merchant.reverse();
						break;
						
					case "↓ Abc":
						inventory.sort( (a, b) => {
							const x = a.name.toLowerCase();
							const y = b.name.toLowerCase();
							if (x < y) {return -1;}
							if (x > y) {return 1;}
							return 0;
						});
						if(merchant)merchant.sort( (a, b) => {
							const x = a.name.toLowerCase();
							const y = b.name.toLowerCase();
							if (x < y) {return -1;}
							if (x > y) {return 1;}
							return 0;
						});
						break;
					case "↑ Abc":
						inventory.sort( (a, b) => {
							const x = a.name.toLowerCase();
							const y = b.name.toLowerCase();
							if (x < y) {return -1;}
							if (x > y) {return 1;}
							return 0;
						});
						if(merchant)merchant.sort( (a, b) => {
							const x = a.name.toLowerCase();
							const y = b.name.toLowerCase();
							if (x < y) {return -1;}
							if (x > y) {return 1;}
							return 0;
						});
						inventory.reverse();
						if(merchant)merchant.reverse();
						break;
					
				case "↓ Price":
						inventory.sort( (a, b) => {
							if (a.price < b.price) {return -1;}
							if (a.price > b.price) {return 1;}
							return 0;
						});
						if(merchant)merchant.sort( (a, b) => {
							if (a.price < b.price) {return -1;}
							if (a.price > b.price) {return 1;}
							return 0;
						});
						inventory.reverse();
						if(merchant)merchant.reverse();
						break;
				case "↑ Price":
						inventory.sort( (a, b) => {
							if (a.price < b.price) {return -1;}
							if (a.price > b.price) {return 1;}
							return 0;
						});
						if(merchant)merchant.sort( (a, b) => {
							if (a.price < b.price) {return -1;}
							if (a.price > b.price) {return 1;}
							return 0;
						});
						break;
				case "↓ Defense":
						inventory.sort( (a, b) => {
							if(!a.hp) a.hp = 0;
							if(!b.hp) b.hp = 0;
							if (a.hp < b.hp) {return -1;}
							if (a.hp > b.hp) {return 1;}
							return 0;
						});
						if(merchant)merchant.sort( (a, b) => {
							if(!a.hp) a.hp = 0;
							if(!b.hp) b.hp = 0;
							if (a.hp < b.hp) {return -1;}
							if (a.hp > b.hp) {return 1;}
							return 0;
						});
						inventory.reverse();
						if(merchant)merchant.reverse();
						break;
				case "↑ Defense":
						inventory.sort( (a, b) => {
							if(!a.hp) a.hp = 0;
							if(!b.hp) b.hp = 0;
							if (a.hp < b.hp) {return -1;}
							if (a.hp > b.hp) {return 1;}
							return 0;
						});
						if(merchant)merchant.sort( (a, b) => {
							if(!a.hp) a.hp = 0;
							if(!b.hp) b.hp = 0;
							if (a.hp < b.hp) {return -1;}
							if (a.hp > b.hp) {return 1;}
							return 0;
						});
						
						break;		
				case "↓ Attack":
						inventory.sort( (a, b) => {
							if(!a.original_attack) a.original_attack = 0;
							if(!b.original_attack) b.original_attack = 0;
							if (a.original_attack < b.original_attack) {return -1;}
							if (a.original_attack > b.original_attack) {return 1;}
							return 0;
						});
						if(merchant)merchant.sort( (a, b) => {
							if(!a.original_attack) a.original_attack = 0;
							if(!b.original_attack) b.original_attack = 0;
							if (a.original_attack < b.original_attack) {return -1;}
							if (a.original_attack > b.original_attack) {return 1;}
							return 0;
						});
						inventory.reverse();
						if(merchant)merchant.reverse();
						break;
						
				case "↑ Attack":
						inventory.sort( (a, b) => {
							if(!a.original_attack) a.original_attack = 0;
							if(!b.original_attack) b.original_attack = 0;
							if (a.original_attack < b.original_attack) {return -1;}
							if (a.original_attack > b.original_attack) {return 1;}
							return 0;
						});
						if(merchant)merchant.sort( (a, b) => {
							if(!a.original_attack) a.original_attack = 0;
							if(!b.original_attack) b.original_attack = 0;
							if (a.original_attack < b.original_attack) {return -1;}
							if (a.original_attack > b.original_attack) {return 1;}
							return 0;
						});
						
						break;	
						
					
				}
				reload();
			};
			
		/*
//TODO - TURN DIV_ INTO OBJECT! DIV. !!!!!
			function add_mid_div(){
				
			};
			
			const div_money = add_mid_div()
		*/	
			
			const div_money = document.createElement("div");
			div_money.id = "war_div_money";
			div_money.classList.add("war_item"); //TODO
			div_mid.appendChild(div_money);
			
				
			const div_hp = document.createElement("div");
			div_hp.id = "war_div_hp";
			div_hp.classList.add("war_item"); //TODO
			div_mid.appendChild(div_hp);
			 
			 
			const div_power = document.createElement("div");
			div_power.id = "war_div_power";
			div_power.classList.add("war_item"); //TODO
			div_mid.appendChild(div_power);
			
		//TODO
		 
			const div_slut = document.createElement("div");
			div_slut.id = "war_div_slut";
			div_slut.classList.add("war_item"); //TODO
			div_mid.appendChild(div_slut);
		 
			
		
		addLink("Strip Everything",(function(){
			unequipAll();
		}));
		
		//FAI
		if(setting !== 2){
			addLink("Random Allowed",(function(){
				randomOutfitFAI();
				reload();
			}));
		};
		
		if(setting !== 2){
			addLink("Random Clothes",(function(){
				randomOutfit(window.inventory,PC);
				reload();
			}));
		};
		
		if(!trade)addLink("Save Outfit",(function(){
			saveUserOutfit();
		}));
		
		
		/*
	console.log(inventory)	
		addLink("Sort",(function(){
			//sort();
	console.log(inventory)
	console.log(this)
			inventory.sort(function(a, b){
			  var x = a.name.toLowerCase();
			  var y = b.name.toLowerCase();
			  if (x < y) {return -1;}
			  if (x > y) {return 1;}
			  return 0;
			});
	console.log(inventory)
			reload();
		}));
		
	
		addLink("Sort",() => {
			//sort();
	console.log(merchant)
	console.log(this)
			merchant.sort( (a, b) => {
			  var x = a.name.toLowerCase();
			  var y = b.name.toLowerCase();
			  if (x < y) {return -1;}
			  if (x > y) {return 1;}
			  return 0;
			});
	console.log(merchant)
			reload();
		});
		*/
		
		if(trade&&debug)addLink("#Cheat: More Money",(function(){
			moneyChange+=100;
			reloadMid();
		}));
		
		addLink("<b>Cancel</b>",(function(){
			ultraOff();
			
			unpackWear(original_clothes,subject); //original clothes restored
			//inventory was not changed
			
			
				//SHOULD NOT BE IN WARDROBE!!!
				//console.log("setting "+setting);
				if(setting==2)attributes.check();
				DISPLAY.text();
	//WHY ARE DIVS NOT REMOVED? TODO
			back();
		}));
		
		addLink("<b>Confirm</b>",(function(){
			ultraOff();
		
			
			if(setting == 2 && PC.money+moneyChange<0){ //SETTING!!!
				alert("Not enough money!");
				return;
			};
			PC.money += moneyChange;
			
			//packs the inventory as original_inventory
			//TODO - FIND HOW JS WORKS! 
			let temp = packArray(inventory);
			for(let i=0; i<temp.length; i++){
				original_inventory[i] = temp[i]; 
			};
			original_inventory.splice(temp.length);
			
		//TODO - ARRAYS NEEDS TO BE CLEANED
			
			if(trade){
			//	console.log(merchant)
				let temp = packArray(merchant);
			//	console.log(temp)
				for(let i=0; i<temp.length; i++){
					original_merchant[i] = temp[i]; 
				};
				original_merchant.splice(temp.length);
		//		console.log(original_merchant)
			};
			
			//remove all used divs 
			dh.remove_children(container);
			
				//SHOULD NOT BE IN WARDROBE!!!
				if(setting==2)attributes.check();
				DISPLAY.text();
			back();
		}))
		
		reload();
		
		//ADD LINKS TO THE SPACE FOR LINKS (CONFIRM & BACK)
		function addLink(title,fce){
			temp = document.createElement("div");
		//	temp.id = "war_div_link_"+what;
			temp.classList.add("war_item");
			temp.innerHTML = title;
			div_bot.appendChild(temp);
			temp.addEventListener("click",(function(){
				fce();
			})); 	
		}
		
		//CREATE EQUIPED ITEM
		function addWornItem(what){
			if(!subject[what])return;
			
			div_worn[what] = document.createElement("div");
			div_worn[what].id = "war_div_worn_"+what;
			div_worn[what].classList.add("war_item");
			
			div_worn[what].innerHTML = subject[what].name;
			
			div_top.appendChild( div_worn[what] );
			
			div_worn[what].addEventListener("click",(function(){
				ultraOff();
				unequip(what);
			}));
			
			div_worn[what].addEventListener("mouseenter",function(event){ ultra(event, desc(subject[what])  ) } );
			div_worn[what].addEventListener("mousemove",ultraUpdate);
			div_worn[what].addEventListener("mouseleave",ultraOff);
		}
		
		
		//RELOADS TOP LEFT DIV WITH EQUIPED STUFF
		function reloadTop(){
			dh.remove_children(div_top);
			let div_worn = [];
			
			for(let i=0; i<allSlots.length; i++){
				addWornItem(allSlots[i]);
			};
			if(setting == 2 && subject.weapon && subject.weapon.attack ) addWornItem("weapon"); //SETTING!!;
		}
		
		
		
		
			
			
		
		 
		function reloadMid(){
			let txt = "";
			if(trade){
				txt += "<b>Money: </b>"+PC.money+" "+(moneyChange>=0?"+":"-")+" "+Math.abs(moneyChange)+" = <b>"+(PC.money+moneyChange)+"</b>"
			}else{
				txt += "<b>Money: "+PC.money+" </b>";
			};
			if(setting==2)div_money.innerHTML = txt; //SETTING!!!!
			
	 
	
			function plus(value){
				const space = value > 9 ? "" : " ";
				return value >= 0 ? " + "+space+value : " - "+space+value;
			};
			
			if(setting == 2){
				let def = 0;
				let desc = "<ul>";
				desc += "<li>Base: "+att.hp_base;;
				for(let i=0; i<allSlots.length; i++){
					if(subject[allSlots[i]] && subject[allSlots[i]].hp){
						def += subject[allSlots[i]].hp;
						desc += "<li>"+plus(subject[allSlots[i]].hp)+" "+subject[allSlots[i]].name+" ";
					};
				};
				desc += "</ul>";
				div_hp.innerHTML = "Hit Points: "+(att.hp_base + def);
				ultraInitiate(div_hp,desc)
			}
			
			if(att.power > 0 && setting == 2){
				let mag = 0;
				let desc = "<ul>";
				desc += "<li>Base: "+att.power_base;
				for(let i=0; i<allSlots.length; i++){
					if(subject[allSlots[i]] && subject[allSlots[i]].mag){
						mag += subject[allSlots[i]].mag;
						desc += "<li>"+plus(subject[allSlots[i]].mag)+" "+subject[allSlots[i]].name+" ";
					};
				};
				if(subject.weapon.mag){
					mag += subject.weapon.mag;
					desc += "<li>"+plus(subject.weapon.mag)+" "+subject.weapon.name+" ";
				}
				desc += "</ul>";
				div_power.innerHTML = "Magic power: "+(att.power_base + mag)+" ";
				ultraInitiate(div_power,desc)
			}
	//TODO
			if(setting !== 2){
				const slut = appearance(subject);
				div_slut.innerHTML = "Slutiness: "+slut.value;
				ultraInitiate(div_slut,slut.desc)
				/*
				div_slut.addEventListener("mouseenter",function(event){ ultra(event, slut.desc  ) } );
				div_slut.addEventListener("mousemove",ultraUpdate);
				div_slut.addEventListener("mouseleave",ultraOff);
				*/
			};
		}
		
		/*
		TO DO - CHECK IF WEARING OR IN INVENTORY AT LEAST ONE ITEM FROM THE CATEGORY
		function createCategories(){
			cats = dh.clone(allCategories);
			catActive = [];
			for(let i=0; i<cats.length) catActive[i] = 0;
			
			for(let key in allSlots) {
				if (dimensions.hasOwnProperty(dim)) {
				
				};
			};
		};
		*/
		
		//RELOADS RIGHT DIV WITH INVENTORY
		function reload(cat){
			reloadTop();
			div_available = reloadItems(cat,inventory,div_right,true);
			if(trade)div_buy = reloadItems(cat,merchant,div_trade,false);
			reloadMid();
		}
			
		function reloadItems(cat,invMer,div,owned){
			dh.remove_children(div);
			list = [];
			
			if(typeof cat !== "undefined")active_cat = cat; 
			//if(!active_cat && invMer.length<=8)active_cat = "ALL"; //don't bother with categories if there are only 8 items
			
			//no category active - root, writes categories
			if(!active_cat){
				addItemCat("ALL");
				for(let i=0; i<categories.length; i++){
					for(let k=0; k<invMer.length; k++){
						if(invMer[k].category == categories[i]){
							addItemCat( categories[i] );
							break;
						}
					};	
					
					
				}
				
				for(let k=0; k<invMer.length; k++){
					if(invMer[k].hp && invMer[k].hp>0){
						addItemCat("ARMOR");
						break;
					}
				};	
					
				if(!trade)addItemCat("OUTFITS");
			//category all - writes all
			}else if(active_cat=="ALL"){
				addItemReturn();
				for(let i=0; i<invMer.length; i++){
					addItem(i);
				};	
			//category ARMOR - writes clothes with defensive bonuses
			}else if(active_cat=="ARMOR"){
				addItemReturn();
				for(let i=0; i<invMer.length; i++){
					if(invMer[i].hp && invMer[i].hp>0){
						addItem(i);
					}
				};
			//category outfits - writes outfits
			}else if(active_cat=="OUTFITS"){
				addItemReturn();
				if(setting==2){	//SETTING SHOULD NOT BE IN WARDROBE!
					for(let i=0; i<WARDROBE.outfitGameTemplates.length; i++){
						addItemOutfit(i);
					};
				}else{
					for(let i=0; i< ( (setting == 2) ? WARDROBE.outfitGameTemplates.length : WARDROBE.outfitTemplates.length); i++){
						addItemOutfit(i);
					};
				};	
			//wordFilter
			}else if(active_cat=="wordFilter"){
				addItemReturn();
				for(let i=0; i<invMer.length; i++){
					if(invMer[i].name.toLowerCase().search(worldFilterInput.toLowerCase()) != -1) addItem(i);
				}
			//category picked - writes link to return to root and all items in the category 	
			}else{
				addItemReturn();
				for(let i=0; i<invMer.length; i++){
					if(invMer[i].category==active_cat)addItem(i);
				}
			};
		
		
		
		
			//CREATE DIV OF ITEM
			function addAvailableItem(){
				let index = list.length;
				list[index] = document.createElement("div");
				//list[index].id = "war_div_available_"+index;
				list[index].classList.add("war_item");
				
				div.appendChild( list[index] );
				
				return list[index];
			};
			
			//ADD ITEM CATEGORY
			function addItemCat(input){
				let temp = addAvailableItem();
				temp.innerHTML = input;
				temp.addEventListener("click",(function(){
					reload(input);
				})); 	
			};
			
			//ADD ITEM TO RETURN BACK TO THE ROOT
			function addItemReturn(){
				let temp = addAvailableItem();
				temp.innerHTML = "...";
				temp.addEventListener("click",(function(){
					worldFilterInput = "";
					reload("");
				})); 	
			};
			
			//ADD ITEM WITH STUFF FORM THE invMer 
			function addItem(input){
				let temp = addAvailableItem();
						
				temp.innerHTML = invMer[input].name;
		
		
				
				temp.addEventListener("mouseenter",function(event){ ultra(event, desc(invMer[input])  ) } );
				temp.addEventListener("mousemove",ultraUpdate);
				temp.addEventListener("mouseleave",ultraOff);
				//temp.addEventListener("mousemove",ultra(event,desc)  )
				
				
				//FIGURINE
				//if(trade && !owned){
				if( invMer[input].slot != "weapon" && invMer[input].slot != "potion" ) {
					temp.addEventListener("mouseenter",function(event){
						figurine.removeAllClothing();					
						figurine.wearClothing( invMer[input] );
						draw(figurine);
					} );
					temp.addEventListener("mouseleave",function(event){
						draw(subject);
					} );
				}
				
				
				
				if(trade){
					temp.addEventListener('contextmenu', function(event) {
					event.preventDefault();
						if(owned){
							if(inventory[input].slot=="potion"){
								/*
								POTION.drink(inventory[input].seed);
								//gameInventory.splice(input, 1);
								//TODO - DIRECTLY ACCES GAMEARRAY!!!!

								inventory.splice(input, 1);
								reload();
								*/
							}else{
								equip(input);
							}
						}else{
							buy(input);
//TODO
//console.log(inventory[input]);
							//if(inventory[input].slot=="potion"){
							if(inventory[inventory.length-1].slot=="potion"){	
								/*
								POTION.drink(inventory[input].seed);
								//gameInventory.splice(input, 1);
								//TODO - DIRECTLY ACCES GAMEARRAY!!!!
								inventory.splice(input, 1);
								reload();
								*/
							}else{
								console.log(inventory)
								equip(inventory.length-1);
							}
							
						}
					}, false);
				}else{
					temp.addEventListener('contextmenu', function(event) {
						event.preventDefault();
						equip(input);
					}, false);
				}
				

				temp.addEventListener("click",(function(event){
					/*
					console.log(event)
					alert(event);
					*/
					
					draw(subject);
					ultraOff();
	//console.log(index);
					if(trade){
						if(owned){
							sell(input);
						}else{
							buy(input);
						}
						
					}else{
						if(inventory[input].slot=="potion"){
							POTION.drink(inventory[input].seed);
							//gameInventory.splice(input, 1);
							//TODO - DIRECTLY ACCES GAMEARRAY!!!!

							inventory.splice(input, 1);
							reload();
						}else{
							equip(input);
						}
					}
					//reloadRight( inventory[input].category );
				})); 
			
			
				/*
				temp.addEventListener("dblclick",(function(){
					//draw(subject); - technicaly should not be necessary
					ultraOff();
					if(trade){
						if(owned){
							equip(input);
						}else{
							buy(input);
							equip(inventory.length-1);
						}
					};
				}));
				*/
				
			};
		
		
		
		
			//ADD ITEM OUTFIT
			function addItemOutfit(input){
				let temp = addAvailableItem();
				
				temp.innerHTML = ( (setting == 2) ? WARDROBE.outfitGameTemplates[input].name : WARDROBE.outfitTemplates[input].name);
				
				temp.addEventListener("click",(function(){
					loadUserOutfit(input);
				}));  	
			};
			
		

		};
	
		
		function desc(item){
			let txt = 	`
				<b> ${item.name} </b>
				<br>
			`;
			//Price: ${item.price}
			if(setting==2)txt += "<br>Price: "+item.price+" coins"; //SETTING!!!!!!
			if(item.slot=="weapon"){
				txt += "<br>Attack: "+item.original_attack+(att.profi == item.class ? " + 1" : "");
				switch(item.class){
					case 1:	txt += "<br>Class: <i>blades</i> ";
						break;
					case 2:	txt += "<br>Class: <i>hammers</i>  ";
						break;
					case 3:	txt += "<br>Class: <i>polearms</i>  ";
						break;
				}
			}
			if(item.mag&&item.mag>0)txt += "<br>Magic power: +"+item.mag+" ";
			if(item.hp&&item.hp>0)txt += "<br>Defense: +"+item.hp+" HP";
			if(item.slot=="potion" && debug)txt += "<br>##Actually: "+item.trueName;
			return txt;
		};
	
	
		function unequipAll(){
			 
			for(let i=0; i<allSlots.length; i++)if( subject[ allSlots[i] ]){
				
				if(subject[ allSlots[i] ].locked)continue; //LOCK TODO
				if(subject[ allSlots[i] ].piercing)continue; //TODO
				
				//add the item to inventory
				inventory[inventory.length] = subject[ allSlots[i] ];
				//remove worn item
				removeActual( allSlots[i] );
			};
			 
			
			//rewrites everything with actual data
			reload();
			
			update(subject);
		}
	
		//REMOVE EQUIPED ITEM (and move it to inventory)
		function unequip(what){
			if(subject[what].locked)return; //LOCK TODO
			
			//change active category to the category of removed item, just for convenience 
			cat = subject[what].category;
			
			//add the item to inventory
			inventory[inventory.length] = subject[what];
			
			//remove worn item
			removeActual(what);
			
			//rewrites everything with actual data
			reload(cat);
			update(subject);
		};
		
		
		function buy(index){

			//let cat = merchant[index].category;
			moneyChange -= merchant[index].price;
			/*
console.log(index);				
console.log(merchant);
console.log(inventory);
*/
			inventory[inventory.length] = merchant[index];
			merchant.splice(index, 1);
			/*
console.log(merchant);
console.log(inventory);
*/
			reload();
		};
		
		function sell(index){
//console.log("SELL")
			//let cat = inventory[index].category;
			moneyChange += inventory[index].price;
			merchant[merchant.length] = inventory[index]
			inventory.splice(index, 1);
			reload();
		};
		
/*

	buy(index);
	equip(inventory.length-1);

*/
		
		
		//EQUIP ITEM FRON INVENTORY (replace equipped items)
		function equip(index){
			//if(index==-1)index = inventory.length-1;//buy & equipping; the index is not known but newly bought things has the last position in the array
				
			//finds correct slot, removes equipped items and moves them to the inventory
			//fucking complicated because dresses cover two slots 
			let slot = inventory[index].slot;
			if(
				(slot == "upperLower")
				|| (slot == "lower" && subject.upper && subject.upper.slot == "upperLower")
			
			){ //fucking dresses
			
				if( (subject.upper && subject.upper.locked) || (subject.lower && subject.lower.locked) )return; //LOCK TODO
						
				if(subject.upper){
					inventory[inventory.length] = subject.upper;
					subject.upper = void 0;
				};
				if(subject.lower){
					inventory[inventory.length] = subject.lower;
					subject.lower = void 0;
				};
				slot = "upper"
				
			}else if(subject[slot]){
				if(subject[slot].locked)return; //LOCK TODO
				
				inventory[inventory.length] = subject[slot];
				subject[slot] = void 0;
	
			}
			
			//equips the item and removes it from the inventory 
			subject[slot] = inventory[index];
			inventory.splice(index, 1);
			
			//rewrites everything
			reload();
			update(subject);
		};
		
		
		
		/*
		
	function reloadRight(cat){
			dh.remove_children(div_right);
			div_available = [];	

let index = div_available.length;
			addAvailableItem(index);

*/

		
		
		function saveUserOutfit(){
			const name = prompt("Enter the name", "Outfit "+ ( (setting == 2) ? WARDROBE.outfitGameTemplates.length : WARDROBE.outfitTemplates.length) );
				
			if (!name)return;
			
			if(setting==2){	//SHOULD NOT BE IN WARDROBE!!!
				WARDROBE.outfitGameTemplates[WARDROBE.outfitGameTemplates.length] = {
					name: name,
					code: packWorn(subject)
				}
			}else{
				WARDROBE.outfitTemplates[WARDROBE.outfitTemplates.length] = {
					name: name,
					code: packWorn(subject)
				}				
			};
			
			reload("OUTFITS");
//console.log(outfitTemplates);						
		};
			
		function loadUserOutfit(index){
			unequipAll();
//console.log(index);		
			//SETTING SHOULD NOT BE IN WARDROBE
			let code = (setting == 2) ? WARDROBE.outfitGameTemplates[index].code.split(";") : WARDROBE.outfitTemplates[index].code.split(";");
/*console.log(code);

console.log(inventory);
*/
			for(let i = 0; i < code.length; i++){	

//console.log(code[i]);
				//FUCK FUCK FUCK
				let temp = code[i].split(":");
				let sed = temp[1]; 
				let blue = temp[0];
				

				for(let k = 0; k < inventory.length; k++){

					if(inventory[k].seed == sed && inventory[k].blueprint == blue){

		/*
						quickWear(unpack(code[i]), subject);
						inventory.splice(k, 1);
					*/	
						//fucking dress!!!!! At least conflict are solved, since outfitTemplates were valid worn clothes
						let slot = inventory[k].slot == "upperLower" ? "upper" : inventory[k].slot;
						subject[slot] = inventory[k];
						inventory.splice(k, 1);
						break;
					}
				}
				
				
				
			};
			reload();
			update(subject);
		};

	
	
	};


	
	
return{
	allSlots,
	
	
	
	config,
	//HANDLING OF AVATAR
	createCharacter,
	updateMods,
	cloneCharacter,
	load,
	draw,
	rebuild,
	rebuildBust,
	focused,
	display,
	
	//CREATION
	create,
	
	createMultiple,
	createMultiplePacked,
	createMultipleDetailed,
	
	pack,
	unpack,
	packWorn,
	unpackWear,
	packArray,
	unpackArray,
	
	nameColor,
	
	createOutfit,
	wearOutfit,
	outfits,
	activeOutfit,
	outfitTemplates,
	outfitGameTemplates, //TODO
	
	save,
	restore,
	temporaryStorage,
	
	quickWear,
	wear,
	remove,
	strip,
	
	update,
	
	dressUp, 
	dressUpSubject,
	
	showAll,
	showLess,
	 
	attack,
	attacks,
	attacked,
	fataled,
	
	changeOutfit,
	softChangeOutfit,
	addWornToInventory,
	addToInventory,
	inventoryTest,
	checkBonus,
	randomOutfit,
	
	randomOutfitFAI,
	appearance,
	
	garment,
	Rnd,
	between,
	
	equipedGarment,
	ownGarment,
	
	
}

})();
