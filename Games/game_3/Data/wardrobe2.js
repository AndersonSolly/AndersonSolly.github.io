//GARMENTS
WARDROBE.garment = {	
	GoldBelt : {
		name: "belt",
		dad: "wSimpleBelt",
		slot: "belt",
		dim: (function(){ return{
			beltWidth: WARDROBE.between(4,9),
			waistCoverage: 0.33,
		}}),
		price: 12,
		fill: ["silver","gold"],
	},
	
	MetalBelt : {
		name: "belt",
		dad: "wSimpleBelt",
		slot: "belt",
		dim: (function(){ return{
			beltWidth: WARDROBE.between(4,9),
			waistCoverage: 0.33,
		}}),
		price: 6,
		fill: ["bronze","steel"],
	},
	
	LeatherBelt : {
		name: "belt",
		dad: "wSimpleBelt",
		slot: "belt",
		dim: (function(){ return{
			beltWidth: WARDROBE.between(4,9),
			waistCoverage: 0.33,
		}}),
		price: 3,
		fill: ["leather","darkLeather","wywen","hexa"],
	},
	
	BrightBelt : {
		name: "belt",
		dad: "wSimpleBelt",
		slot: "belt",
		dim: (function(){ return{
			beltWidth: WARDROBE.between(4,9),
			waistCoverage: 0.33,
		}}),
		price: 3,
		fill: "bright",
	},
	
	DarkBelt : {
		name: "belt",
		dad: "wSimpleBelt",
		slot: "belt",
		dim: (function(){ return{
			beltWidth: WARDROBE.between(4,9),
			waistCoverage: 0.33,
		}}),
		price: 3,
		fill: ["darkLeather","yoga","dark"],
	},
	
	//HELLION
	DefBarbaricBra : {
		price: 4,
		name: "bra",
		dad: "wBarbaricBra",
		slot:"upper",
		dim: (function(){ return{
			//fill: "hsla(33, 45%, 35%, 1)",
			//highlight: "hsla(33, 80%, 10%, 1)",
		}}),
		fill:"leather"
	}, 
	
	
	BarbaricBra : {
		price: 4,
		name: "bra",
		dad: "wBarbaricBra",
		slot: "upper",
		dim: (function(){ return{
			furWidth: WARDROBE.between(3,6), 
		}}),
		fill:["leather","darkLeather","leather"]
	}, 
	
	FancyBarbaricBra : {
		price: 9,
		name: "bra",
		dad: "wBarbaricBra",
		slot: "upper",
		dim: (function(){ return{
			furWidth: WARDROBE.between(3,6), 
		}}),
		fill:["wywen","hexa","wywen","hexa"]
	}, 
	
	BarbaricLoincloth : {
		name: "loincloth",
		dad: "wLoincloth",
		slot: "lower",
		dim: (function(){ 
			let top = WARDROBE.between(0.2,0.9);
			let bot = WARDROBE.between(0.1,0.2)
			let xCurve = (-16)*(top-bot)-5
			return{
			beltWith: WARDROBE.between(1,5),
			waistCoverage: WARDROBE.between(-0.08,0.55),
			legCoverage: WARDROBE.between(0.35,0.7),
			topCoverage: top,
			bottomCoverage: bot, 
			curveX: xCurve,
		}}),
		price: 5,
		fill: ["leather","darkLeather","leather"],
	}, 
	
	FancyBarbaricLoincloth : {
		name: "loincloth",
		dad: "wLoincloth",
		slot: "lower",
		dim: (function(){ 
			let top = WARDROBE.between(0.2,0.9);
			let bot = WARDROBE.between(0.1,0.2)
			let xCurve = (-16)*(top-bot)-5
			return{
			beltWith: WARDROBE.between(1,6),
			waistCoverage: WARDROBE.between(-0.08,0.55),
			legCoverage: WARDROBE.between(0.35,0.7),
			topCoverage: top,
			bottomCoverage: bot, 
			curveX: xCurve,
		}}),
		price: 10,
		fill:["wywen","hexa","wywen","hexa"]
	}, 
	
	DefBarbaricLoincloth : {
		name: "loincloth",
		dad: "wLoincloth",
		slot: "lower",
		dim: (function(){ return{
			beltWith: 3,
			waistCoverage: 0.3,
			//fill: "hsla(33, 45%, 35%, 1)",
			//highlight: "hsla(33, 80%, 10%, 1)",
		}}),
		price: 5,
		fill:"leather"
	}, 
	
	
	  
	DefFallenLoincloth : {
		name: "skirt",
		dad: "wLoincloth",
		slot: "lower",
		dim: (function(){ return{
			beltWidth: 1,
			bottomCoverage: 0.2,
			curveX: -18,
			legCoverage: 0.74,
			topCoverage: 0.5,
			waistCoverage: 0.3,
		}}),
		price: 8,
		fill: "purple",
	},
	
	DefFallenTop : {
		name: "top",
		dad: "wFallen",
		slot: "upper",
		dim: (function(){ return{
			botOutCoverage: 0.8,
			botInCoverage: 0.05,
			/*bellyX: -16,
			 bellyY: -8.5,
			botInCoverage: 0,
			botOutCoverage: 0.9,
			cleavageCoverage: 0.15,
			neckBotCoverage: 0.6,
			neckCoverage: 0.4,
			neckTopCoverage: -0.18,
			topInCoverage: -0.2,
			topOutCoverage: 0.55,
			waistCoverage: 0.3,
			fill: "hsla(33, 45%, 35%, 1)",
			highlight: "hsla(33, 80%, 10%, 1)",
			*/
		}}),
		price: 7,
		fill: "purple",
	},
	
	FallenTop : {
		name: "top",
		dad: "wFallen",
		slot: "upper",
		dim: (function(){ return{
			botOutCoverage: WARDROBE.between(0.6,0.8),
			botInCoverage: WARDROBE.between(0,0.2),
			topOutCoverage: WARDROBE.between(0.05,0.5),
			middle: WARDROBE.between(0,4),
			bellyX: WARDROBE.between(-9,-18),
		}}),
		price: 7,
		fill: ["purple","carmine","indigo","pure","purple","carmine","indigo","pure"]
	},
	

	//TODO
	FallenLoincloth : {
		name: "skirt",
		dad: "wLoincloth",
		slot: "lower",
		dim: (function(){ return{
			beltWidth: 1,
			bottomCoverage: 0.2,
			curveX: -18,
			legCoverage: WARDROBE.between(0.45,0.8),
			topCoverage: 0.5,
			waistCoverage: 0.3,
		}}),
		price: 8,
		fill: ["purple","carmine","indigo","pure","purple","carmine","indigo","pure"]
	},
	
	
	DefFallenGorget : {
		name: "gorget",
		dad: "wGorget",
		slot: "neck",
		hp: 1,
		dim: (function(){ return{
		
		}}),
		price: 8,
		fill: "dark",
	},
	
	Gorget : {
		name: "gorget",
		dad: "wGorget",
		slot: "neck",
		hp: 1,
		dim: (function(){ 
			let fullNeck = WARDROBE.Rnd()<0.35 ? true : false;
		return{
			neckTopCoverage: fullNeck ? WARDROBE.between(0,-0.8) : WARDROBE.between(0,0.18),
			neckBotCoverage: WARDROBE.between(0.4,0.95),
			cleavageCoverage: WARDROBE.between(0.12,0.22),
			groove: !fullNeck && WARDROBE.Rnd()<6 ? true : false,
			
		}}),
		price: 8,
		fill: ["dark","wywen","hexa"],
	},
	
	GoldGorget : {
		name: "gorget",
		dad: "wGorget",
		slot: "neck",
		hp: 2,
		dim: (function(){ 
			let fullNeck = WARDROBE.Rnd()<0.35 ? true : false;
		return{
			neckTopCoverage: fullNeck ? WARDROBE.between(0,-0.8) : WARDROBE.between(0,0.18),
			neckBotCoverage: WARDROBE.between(0.4,0.95),
			cleavageCoverage: WARDROBE.between(0.12,0.22),
			groove: !fullNeck && WARDROBE.Rnd()<6 ? true : false,
			
		}}),
		price: 13,
		fill: ["gold","silver"],
	},
	
	 
	
	DefFallenBelt : {
		name: "belt",
		dad: "wSimpleBelt",
		slot: "belt",
		dim: (function(){ return{
			beltWidth: 8,
			waistCoverage: 0.33,
		}}),
		fill: "dark",
	},
	
	
	
	BreastWrap : {
		name: "breast wrap",
		dad: "wSuperBra", //TODO - FIX BREAST WRAP
		slot:"bra",
		dim: (function(){ return{
			showStrap: false,
		//	fill: "hsla(43, 10%, 80%, 1)"
		}}),
		fill: "cloth",
	}, 
	/*
	FantasyThong : {
		name: "panties",
		dad: "SuperPanties",
		slot:"panties",
		dim: (function(){ return{
			 waistCoverage: 0,
			waistCoverageLower: -0.1,
			fill: "hsla(43, 10%, 80%, 1)"
		}}),
	}, 
	*/
	BlandFantasyThong : {
		name: "panties",
		dad: "wSuperPanties",
		slot:"panties",
		dim: (function(){ 
			let top = WARDROBE.between(-0.05,0.2);
			let bot = top - WARDROBE.between(0.1,0.2); 
			return {
				waistCoverage: top,
				waistCoverageLower: bot,
				genCoverage: WARDROBE.between(0.5,0.8),
				curveBotX: WARDROBE.between(0,-2),
			//	fill: "hsla(43, 10%, 80%, 1)"
		}})
	},
	
	
	DefHarlotSkirt : {
		name: "short skirt",
		dad: "wSuperSkirt", 
		slot:"lower",
		dim: (function(){ return{
			innerLoose: 1.2,
			legCoverage: 0.23,
			outerLoose: 1.2,
			waistCoverage: 0.33,
			//fill: "hsla(43, 10%, 80%, 1)"
		}}),
		price: 5,
		fill: "bright",
	}, 
	
	HarlotSkirt : {
		name: "short skirt",
		dad: "wSuperSkirt", 
		slot:"lower",
		dim: (function(){ return{
			innerLoose: 1.2,
			legCoverage: WARDROBE.between(0.16,0.32),
			outerLoose: WARDROBE.between(0.14,0.8),
			waistCoverage: WARDROBE.between(-0.1,0.5),
		}}),
		price: 5,
		fill: ["bright","yoga","yoga"],
	}, 
	
	FantasyMediumSkirt : {
		name: "skirt",
		dad: "wSuperSkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			bustle: (WARDROBE.Rnd()<0.4) ?  true : false,
			outerLoose: WARDROBE.between(1,1.5),
			waistCoverage: WARDROBE.between(0.15,0.5),
			legCoverage: WARDROBE.between(0.3,0.5),
		}}),
		price: 6,
		fill: ["bright","yoga","yoga","gray"],
	}, 
	
	FantasyLongSkirt : {
		name: "long skirt",
		dad: "wSuperSkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			bustle: (WARDROBE.Rnd()<0.4) ?  true : false,
			outerLoose: WARDROBE.between(1,1.5),
			waistCoverage: WARDROBE.between(0.15,0.5),
			legCoverage: WARDROBE.between(0.5,0.8),
		}}),
		price: 7,
		fill: ["bright","yoga","yoga"],
	}, 
	
	DefHarlotStockings : {
		name: "stockings",
		dad: "StockingsGarter",
		slot:"socks",
		dim: (function(){ return{
			bandWidth: 5,
			beltWidth: 8,
			legCoverage: 0.25,
			thickness: 0.2,
			waistCoverage: 0.27,	
		}}),
		price: 3,
		fill: "gray"
	}, 

	 
	
	
	
	
	
	HarlotStockings : {
		name: "stockings",
		dad: "StockingsGarter",
		slot:"socks",
		dim: (function(){ return{
			bandWidth: 5,
			beltWidth: 8,
			legCoverage: 0.25,
			thickness: 0.2,
			waistCoverage: 0.27,	
		}}),
		price: 3,
		fill: ["gray","yoga"]
	}, 
	
	DefHarlotTop : {
		name: "blouse",
		dad: "wTubeTop", 
		slot:"upper",
		dim: (function(){ return{
			armCoverage: 0.54,
			armLoose: 0.4,
			chestCoverage: 0.66,
			shoulderCoverage: 0,
			sideLoose: 1,
			fill: "hsla(43, 10%, 80%, 1)",
		}}),
		fill: "dirtyWhite",
		price: 5,
	}, 

	HarlotTop : {
		name: "blouse",
		dad: "wTubeTop", 
		slot:"upper",
		dim: (function(){ return{
			armCoverage: WARDROBE.between(0.36,0.77),
			armLoose: WARDROBE.Rnd()<0.3 ? 0 : WARDROBE.between(0.1,0.6),
			chestCoverage: WARDROBE.between(0.12,0.55),
			waistCoverage: WARDROBE.between(-0.33,0.66),
			shoulderCoverage: 0,
			sideLoose: WARDROBE.between(0,1),
		}}),
		price: 5,
		fill: ["light","dirtyWhite","light","dirtyWhite","hemp","cloth","hemp","cloth"]
	}, 
	
	
	DefHarlotCorset : {
		name: "corset",
		dad: "HalfCorset", 
		slot:"vest",
		dim: (function(){ return{
			waistCoverage: 0,
			knots: 7,
			topCoverage: 0.65,
		}}),
		price: 7,
		fill: "yoga",
	}, 

	HarlotCorset : {
		name: "corset",
		dad: "HalfCorset", 
		slot:"vest",
		dim: (function(){ return{
			waistCoverage: WARDROBE.between(-0.1,0.75),
			knots: WARDROBE.between(3,9),
			topCoverage: 0.65,
		}}),
		price: 7,
		fill: ["yoga","dark","yoga"],
	}, 



	Tunic : {
		name: "tunic",
		dad: "wTee", 
		slot:"upper",
		dim: (function(){ return{
			armCoverage: WARDROBE.between(0.4,0.95),
			armLoose: WARDROBE.between(0,0.4),
			lacing: true,
			cleavageOpeness: WARDROBE.between(0.0,0.25),
			chestCoverage: WARDROBE.between(0.13,0.27),
			waistCoverage: WARDROBE.between(-0.5,0.4),
			sideLoose: WARDROBE.between(0,0.3),
		}}),
		price: 5,
		fill: ["light","dirtyWhite","bright","yoga","hemp","cloth"]
	}, 
	
	
	//BRA
	DefBra : {
		name: "bra",
		dad: "wSuperBra",
		slot:"bra",
		dim: (function(){ return{
			showStrap: true,
			hue: 345,
			satur: 54,
			light:66,
		}}),
	}, 
	
	Bra : {
		name: "bra",
		slot:"bra",
		dad: "wSuperBra",
		dim: (function(){ 
			if(WARDROBE.Rnd()<0.6){
				return {
					thickness: 0.3,
					showStrap:true,
					neckCoverage: WARDROBE.between(0.5,0.95),
					strapWidth: WARDROBE.between(0.8,2.2),
				}
			}else{
				return {
					showStrap:false,
				}
			};
		})
	},
	
	FantasyBra : {
		price: 3,
		name: "bra",
		slot:"bra",
		dad: "wSuperBra",
		dim: (function(){ 
			if(WARDROBE.Rnd()<0.6){
				return {
					thickness: 0.3,
					showStrap:true,
					neckCoverage: WARDROBE.between(0.5,0.95),
					strapWidth: WARDROBE.between(0.8,2.2),
				}
			}else{
				return {
					showStrap:false,
				}
			};
		}),
		fill: ["hemp","linen","grey","yoga","yoga"],
	},
	
	
	//SOCKS
	GameGarterStockings : {
		name: "stockings",
		dad: "wStockingsGarter",
		slot:"socks",
		dim: (function(){ return{
			bandWidth: 5,
			beltWidth: 8,
			legCoverage: 0.25,
			thickness: 0.2,
			waistCoverage: 0.27,	
			alfa: WARDROBE.between(0.6,0.9),
		}}),
		price: 2,
		fill: ["dark","white"]
	},
	GarterStockings : {
		name: "stockings",
		dad: "wStockingsGarter",
		slot:"socks",
		dim: (function(){ return{
			bandWidth: WARDROBE.between(4,10),
			beltWidth: WARDROBE.between(4,8),
			legCoverage: WARDROBE.between(0.22,0.26),
			thickness: 0.2,
			waistCoverage: WARDROBE.between(0,0.35),	
			alfa: WARDROBE.between(0.6,0.9),
		}}),
		price: 2,
		fill: ["dark","white"]
	}, 
	GarterStockingsPoly : {
		name: "stockings",
		dad: "wStockingsGarter",
		slot:"socks",
		dim: (function(){ return{
			bandWidth: WARDROBE.between(4,10),
			beltWidth: WARDROBE.between(4,8),
			legCoverage: WARDROBE.between(0.22,0.26),
			thickness: 0.2,
			waistCoverage: WARDROBE.between(0,0.35),	
			alfa: WARDROBE.between(0.6,0.9),
		}}),
		price: 2,
		fill: ["bright"]
	}, 
	GarterStockingsFishnet : {
		name: "stockings",
		adjective: "fishnet",
		dad: "wStockingsGarter",
		slot:"socks",
		dim: (function(){ return{
			bandWidth: WARDROBE.between(4,10),
			beltWidth: WARDROBE.between(4,8),
			legCoverage: WARDROBE.between(0.22,0.26),
			thickness: 0.2,
			waistCoverage: WARDROBE.between(0,0.35),	
			pat_show: true,
		}}),
		price: 2,
		fill: "black"
	}, 
	
	Socks : {
		name: "socks",
		dad: "wSuperSocks",
		slot:"socks",
		dim: (function(){ return{
			legCoverage: WARDROBE.between(0.8,1),
			thickness: WARDROBE.between(0.5,1),
		}}),
		price: 2,
		fill: ["mono","bright","yoga","gray"]
	}, 
	CuteSocks : {
		name: "socks",
		dad: "wSuperSocks",
		slot:"socks",
		dim: (function(){ return{
			legCoverage: WARDROBE.between(0.8,1),
			thickness: WARDROBE.between(0.5,1),
		}}),
		price: 2,
		fill: ["cute","cute","cute","barbie"]
	},
	
	HighSocks : {
		name: "high socks",
		dad: "wSuperSocks",
		slot:"socks",
		dim: (function(){ return{
			legCoverage: WARDROBE.between(0.6,0.28),
			thickness: WARDROBE.between(0.8,1),
		}}),
		price: 2,
		fill: ["mono","black"]
	}, 
	BrightHighSocks : {
		name: "high socks",
		dad: "wSuperSocks",
		slot:"socks",
		dim: (function(){ return{
			legCoverage: WARDROBE.between(0.6,0.28),
			thickness: WARDROBE.between(0.8,1),
		}}),
		price: 2,
		fill: ["bright","bright","barbie"]
	},
	
	StockingsFishnet : {
		name: "stockings",
		adjective: "fishnet",
		dad: "wStockings",
		slot:"socks",
		dim: (function(){ return{
			bandWidth: WARDROBE.between(5,10),
			legCoverage: WARDROBE.between(0.24,0.4),
			thickness: 0.2,
			pat_show: true,
			pat_size: WARDROBE.between(80,160),
			arrr: "fuego",
		}}),
		fill: "black"
	}, 
	
	
	
	//PANTIES
	DefPanties : {
		name: "panties",
		dad: "wSuperPanties",
		slot:"panties",
		dim: (function(){ return{
			hue: 345,
			satur: 54,
			light:66,
		}}),
	}, 
	
	Boxers : {
		name: "boxers",
		slot:"panties",
		dad: "wSuperPanties",
		dim: (function(){ return {
			thickness: 0.3,
			waistCoverage:WARDROBE.between(0.1,0.3),
			waistCoverageLower:WARDROBE.between(-0.5,-0.7),
			genCoverage:1,
			curveBotX: -5, //WARDROBE.between(-3,-4),
			
			topY: 2,
			curveTopY: 3,
		}})
	},
	
	Boyshorts : {
		name: "boyshorts",
		slot:"panties",
		dad: "wSuperPanties",
		dim: (function(){ return {
			thickness: 0.3,
			waistCoverage:WARDROBE.between(0.1,0.4),
			waistCoverageLower:WARDROBE.between(-0.35,-0.65),
			genCoverage:1,
			curveBotX: WARDROBE.between(0,-4),
			
			topY: 2,
			curveTopY: 3,
		}})
	},
	
	Briefs : {
		name: "briefs",
		slot:"panties",
		dad: "wSuperPanties",
		dim: (function(){ return {
			thickness: 0.3,
			waistCoverage:WARDROBE.between(0.1,0.48),
			waistCoverageLower:WARDROBE.between(-0.1,-0.25),
			genCoverage:1,
			bow: WARDROBE.Rnd() < 0.4 ? true : false,
			//curveBotX:WARDROBE.Rnd()*8,
		}})
	},
	
	
	VibPanties : {
		name: "vibrating panties",
		slot:"panties",
		dad: "wSuperPanties",
		dim: (function(){ return {
			waistCoverage: 0.15,
			waistCoverageLower: -0.2,
			light: 10,
			satur:50,
			hue:0,
			thickness: 0.3,
		}})
	},
	
	
	WrestlingBot : {
		name: "bottom",
		slot:"panties",
		dad: "wSuperPanties",
		dim: (function(){ return {
			waistCoverage: 0.15,
			waistCoverageLower: -0.2,
			
		}}),
		fill: "royalBlue",
	},
	
	WrestlingTop : {
		name: "top",
		dad: "wHalterTop",
		slot:"upper",
		dim: (function(){
			return {
				cleavageCoverage: 0.2753660416131518,
				innerNeckCoverage: -0.0008219881839199861,
				waistCoverage: 1.399845877215515,	
				
			};
		}),
		fill: "royalBlue",
	},
	
	
	//TODO - same as panties
	Panties: {
		name: "panties",
		slot:"panties",
		dad: "wSuperPanties",
		dim: (function(){ return {
			thickness: 0.3,
			waistCoverage:WARDROBE.between(0.1,0.48),
			waistCoverageLower:WARDROBE.between(-0.1,-0.25),
			genCoverage:1,
			//curveBotX:WARDROBE.Rnd()*8,
		}})
	},
	
	FantasyPanties: {
		name: "panties",
		slot:"panties",
		dad: "wSuperPanties",
		dim: (function(){ return {
			thickness: 0.3,
			waistCoverage:WARDROBE.between(0.1,0.48),
			waistCoverageLower:WARDROBE.between(-0.1,-0.25),
			genCoverage:1,
			//curveBotX:WARDROBE.Rnd()*8,
		}}),
		fill: ["hemp","linen","grey","yoga","yoga"],
	},
	
	
	Thong : {
		name: "thong",
		dad: "wSuperPanties",
		slot:"panties",
		dim: (function(){ 
			let top = WARDROBE.between(0.05,0.4);
			let bot = top - WARDROBE.between(0.06,0.18); 
			return {
				waistCoverage: top,
				waistCoverageLower: bot,
				genCoverage: WARDROBE.between(0.4,0.7),
				curveBotX: WARDROBE.between(0,-2),
		}}),
		
	},
	
	FantasyThong : {
		price: 2,
		name: "panties",
		dad: "wSuperPanties",
		slot: "panties",
		dim: (function(){ 
			let top = WARDROBE.between(-0.05,0.2);
		//TODO
		top = 0.3;
			let bot = top - WARDROBE.between(0.1,0.2); 
			return {
				waistCoverage: top,
				waistCoverageLower: bot,
				genCoverage: WARDROBE.between(0.5,0.8),
				curveBotX: WARDROBE.between(0,-2),
		}}),
		fill: ["hemp","linen","grey","yoga","yoga"],
	},
	
	
	LowThong : {
		name: "thong",
		dad: "SuperPanties",
		slot:"panties",
		dim: (function(){ 
			let top = WARDROBE.between(-0.05,0.2);
			let bot = top - WARDROBE.between(0.06,0.18); 
			return {
				waistCoverage: top,
				waistCoverageLower: bot,
				genCoverage: WARDROBE.between(0.4,0.7),
				curveBotX: WARDROBE.between(0,-2),
		}})
	},
	
	GString : {
		name: "G-String",
		slot:"panties",
		dad: "wSuperPanties",
		dim: (function(){ 
			let top = WARDROBE.between(0.1,0.4);
			let bot = top - WARDROBE.between(0.05,0.10); 
			return {
				waistCoverage: top,
				waistCoverageLower: bot,
				genCoverage:WARDROBE.between(0.3,0.6),
				curveBotX: WARDROBE.between(0,-2),
				curveBotY: WARDROBE.between(0,2),
		}})
	},
	
	
	//DRESS
	Minidress :{
		name: "minidress",
		dad: "wSuperDress",
		slot:"upperLower",
		dim: (function(){
			let arm=0;
			let lose=0;
			if(WARDROBE.Rnd()<0.4)arm=WARDROBE.between(0,0.2);
			if(WARDROBE.Rnd()<0.4)lose=WARDROBE.between(0,0.2);
			
			return {
				armCoverage: arm,
				cleavageOpeness: WARDROBE.between(0.1,0.6),
				cleavageCoverage:  WARDROBE.between(0.1,0.36),
				curveCleavageX: WARDROBE.between(2,9),
				legCoverage: WARDROBE.between(0.29,0.46),
				legLoose: lose,
				
		}}),
		fill:"bright"
	},
	
	
	
	//NIGHTIE
	Nightie :{
		name: "nightie",
		dad: "wSuperDress",
		slot:"upperLower",
		dim: (function(){
			let arm = WARDROBE.Rnd() < 0.4 ? WARDROBE.between(0,0.3) : 0;
						
			return {
				armCoverage: arm,
				cleavageOpeness: WARDROBE.between(0.1,0.3),
				
				curveCleavageX: WARDROBE.between(2,9),
				
				cleavageCoverage:  WARDROBE.between(0.1,0.2),
				legCoverage: WARDROBE.between(0.26,0.32),
				legLoose: WARDROBE.between(0.3,0.4),
				
				alpha: WARDROBE.between(0.87,0.9),
				
		}}),
		fill:"bright"
	},
	
	SexyNightie :{
		name: "sexy nightie",
		dad: "wSuperDress",
		slot:"upperLower",
		dim: (function(){
			let arm = WARDROBE.Rnd() < 0.4 ? WARDROBE.between(0,0.3) : 0;
						
			return {
				armCoverage: arm,
				cleavageOpeness: WARDROBE.between(0.1,0.3),
				
				curveCleavageX: WARDROBE.between(2,9),
				
				cleavageCoverage:  WARDROBE.between(0.1,0.2),
				legCoverage: WARDROBE.between(0.15,0.21),
				legLoose: WARDROBE.between(0.3,0.4),
				
				alpha: WARDROBE.between(0.78,0.82),
				
		}}),
		fill:"barbie"
	},
	
	
	//DRESS AI PARTY
	ShortDressElegant :{
		name: "dress",
		dad: "wSuperDress",
		slot:"upperLower",
		dim: (function(){
			let arm = 0;
			let lose = 0;
			if(WARDROBE.Rnd()<0.7) arm = WARDROBE.between(0,0.4);
			if(WARDROBE.Rnd()<0.7) lose = WARDROBE.between(0,0.4);
			
			return {
				armCoverage: arm,
				cleavageOpeness: WARDROBE.between(0.1,0.4),
				cleavageCoverage:  WARDROBE.between(0.2,0.32),
				curveCleavageX: WARDROBE.between(2,9),
				legCoverage: WARDROBE.between(0.3,0.42),
				legLoose: lose,
				
		}}),
		fill:"bright"
	},
	
	ShortDressSexy :{
		name: "dress",
		dad: "wSuperDress",
		slot:"upperLower",
		dim: (function(){
			let lose = 0;
			if(WARDROBE.Rnd()<0.6) lose = WARDROBE.between(0,0.3);
			return {
				armCoverage: WARDROBE.between(0,0.3),
				cleavageOpeness: WARDROBE.between(0.28,0.43),
				cleavageCoverage:  WARDROBE.between(0.3,0.6),
				curveCleavageX: WARDROBE.between(2,9),
				legCoverage: WARDROBE.between(0.2,0.28),
				legLoose: 0,
				
		}}),
		fill:"bright"
	},
	
	ShortDressSexyTransparent :{
		name: "dress",
		dad: "wSuperDress",
		slot:"upperLower",
		dim: (function(){
			let lose = 0;
			if(WARDROBE.Rnd()<0.4)lose = WARDROBE.between(0,0.3);
			
			return {
				armCoverage: WARDROBE.between(0,0.3),
				cleavageOpeness: WARDROBE.between(0.25,0.4),
				cleavageCoverage:  WARDROBE.between(0.25,0.4),
				curveCleavageX: WARDROBE.between(2,9),
				legCoverage: WARDROBE.between(0.22,0.3),
				fishness: WARDROBE.between(0.11,0.16),
				legLoose: lose,
				
		}}),
		fill:"bright"
	},
	
	
	ShortDressSlutty :{
		name: "dress",
		dad: "wSuperDress",
		slot:"upperLower",
		dim: (function(){
			let arm = 0;
			if(WARDROBE.Rnd()<0.4) arm = WARDROBE.between(0,0.3);
			return {
				armCoverage: arm,
				cleavageOpeness: WARDROBE.between(0.3,0.45),
				cleavageCoverage:  WARDROBE.between(0.5,0.82),
				curveCleavageX: WARDROBE.between(2,9),
				legCoverage: WARDROBE.between(0.14,0.16),
				legLoose: 0,
				
		}}),
		fill:"bright"
	},
	
	ShortDressSluttyTransparent :{
		name: "dress",
		dad: "wSuperDress",
		slot:"upperLower",
		dim: (function(){
			return {
				armCoverage: WARDROBE.between(0,0.3),
				cleavageOpeness: WARDROBE.between(0.3,0.45),
				cleavageCoverage:  WARDROBE.between(0.33,0.5),
				curveCleavageX: WARDROBE.between(2,9),
				legCoverage: WARDROBE.between(0.16,0.22),
				fishness: WARDROBE.between(0.22,0.32),
				legLoose: 0,
				
		}}),
		fill:"bright"
	},
	
	
	//PANTS
	Jeans : {
		name: "jeans",
		dad: "wSuperLeggins",
		slot:"lower",
		dim: (function(){
			let innerLoo = 0;
			let outerLoo = 0;
			
			if(WARDROBE.Rnd()<0.75){
				innerLoo = WARDROBE.between(0,0.5);
				outerLoo = WARDROBE.between(0.1,1.0);
			};
			
			return {
				waistCoverage: WARDROBE.between(0.3,0.75), //0.4 - 0.7
				legCoverage: WARDROBE.between(0.8,1.0),
				
				innerLoose: innerLoo,
				outerLoose: outerLoo,
		}}),
		fill: "jeans",
	}, 
	
	
	LowJeans : {
		name: "jeans",
		dad: "wSuperLeggins",
		slot:"lower",
		dim: (function(){
			let innerLoo = 0;
			let outerLoo = 0;
			
			if(WARDROBE.Rnd()<0.75){
				innerLoo = WARDROBE.between(0,0.5);
				outerLoo = WARDROBE.between(0.1,1.0);
			};
			
			return {
				waistCoverage: WARDROBE.between(0.02,0.25),  
				legCoverage: WARDROBE.between(0.8,1.0),
				
				innerLoose: innerLoo,
				outerLoose: outerLoo,
		}}),
		fill: "jeans",
	}, 
	
	
	TubeTop : {
		name: "tube top",
		dad: "wTubeTop",
		slot:"upper",
		dim: (function(){ return {
				chestCoverage: WARDROBE.between(0.2,0.6),	
				waistCoverage: WARDROBE.between(-0.3,0.9),	
			};
		}),
		fill: ["bright","light","bright","random","barbie"]
	},
	
	TubeTopSleeve : {
		name: "tube top",
		dad: "wTubeTop",
		slot:"upper",
		dim: (function(){ return {
				armCoverage: WARDROBE.between(0.35,0.7),	
				armLoose: (WARDROBE.Rnd() < 0.4) ? 0 : WARDROBE.between(0.1,0.4),
				chestCoverage: WARDROBE.between(0.2,0.6),	
				waistCoverage: WARDROBE.between(-0.3,0.9),	
			};
		}),
		fill: ["bright","light","bright","random","barbie"]
	},
	
	
	
	
	
	
	HalterTop : {
		name: "halter top",
		dad: "wHalterTop",
		slot:"upper",
		dim: (function(){
			let inner = WARDROBE.between(0,0.15);
			let outer =  WARDROBE.between(inner,0.6);
			return {
				cleavageCoverage: WARDROBE.between(0.07,0.34),
				curveCleavageY: 0,
				curveCleavageX: WARDROBE.between(6,11),
				innerNeckCoverage: inner,
				outerNeckCoverage: outer,
				waistCoverage: WARDROBE.between(-0.3,0.9),	
			};
		}),
		fill: "bright",
	},
	
	SexyHalterTop : {
		name: "halter top",
		dad: "wHalterTop",
		slot:"upper",
		dim: (function(){
			let inner = WARDROBE.between(0,0.15);
			let outer =  WARDROBE.between(inner,0.3);
			return {
				cleavageCoverage: WARDROBE.between(0.21,0.34),
				curveCleavageY: WARDROBE.between(0,-6),
				curveCleavageX: WARDROBE.between(6,11),
				innerNeckCoverage: inner,
				outerNeckCoverage: outer,
				waistCoverage: WARDROBE.between(0.2,0.9),	
			};
		}),
		fill: "bright",
	},
	
	slutyTubeTop : {
		name: "tube top",
		dad: "wTubeTop",
		slot:"upper",
		dim: (function(){
			return {
				chestCoverage: WARDROBE.between(0.16,0.22),	
				waistCoverage: WARDROBE.between(0.95,1.45),	
			};
		}),
		fill: "bright",
	},
	
	
	
	slutyHalterTop : {
		name: "halter top",
		dad: "wHalterTop",
		slot:"upper",
		dim: (function(){
			let outer =  WARDROBE.between(0.15,0.6);
			let inner = outer - 0.15;
			
			return {
				cleavageCoverage: WARDROBE.between(0.3,0.4),
				curveCleavageY: 0,
				curveCleavageX: WARDROBE.between(6,11),
				
				innerNeckCoverage: inner,
				outerNeckCoverage: outer,
				
				waistCoverage: WARDROBE.between(0.95,1.45),
			};
		}),
		fill: "bright",
	},
	
	slutyTee : {
		name: "T-shirt",
		dad: "wTee",
		slot:"upper",
		dim: (function(){
			let arm = ( (WARDROBE.Rnd() < 0.66) ? WARDROBE.between(0.12,0.26) : 0);
			let waist;
			let cleavage;
 		
			if( WARDROBE.Rnd() < 0.5 ){
 
				waist = WARDROBE.between(0.8,1);
				cleavage = WARDROBE.between(0.3,0.45);
			}else{
 
				waist = WARDROBE.between(-0.2,-0.4);
				cleavage = WARDROBE.between(0.59,0.79);
			};
			
			return {
				sideLoose: 0,
				armLoose: 0,
				armCoverage: arm,
				
				curveCleavageY: 0,
				curveCleavageX: WARDROBE.between(6,13),
				
				waistCoverage: waist,
							
				cleavageOpeness: WARDROBE.between(0.3,0.5),
				cleavageCoverage: cleavage,

			};
		}),
		fill: "bright",
	},
	
	
	
	Dress : {
		name: "dress",
		dad: "wSuperDress",
		slot:"upperLower",
		dim: (function(){
			let sideLoo = 0;
			let legCov = 0.5
			let legLoo = 0;
			let lace = false;
			let armLoo = 0;
			
			if(WARDROBE.Rnd()<0.33){
				armLoo = WARDROBE.between(0.05,0.3);
			};
			
			if(WARDROBE.Rnd()<0.33){
				sideLoo = WARDROBE.between(0.1,0.5);
			};
			
			if(WARDROBE.Rnd()<0.25){
				legCov = WARDROBE.between(0.36,0.55);
			}else{
				legCov = WARDROBE.between(0.36,0.9);
				legLoo = WARDROBE.between(0.05,1);
			};

			if(WARDROBE.Rnd()<0.45){
				lace = true;
			};
			
			return {
				armCoverage: WARDROBE.between(0.05,0.9),
				armLoose: armLoo,
				
				sideLoose: sideLoo,
				
				legCoverage: legCov,
				legLoose: legLoo,
				
				lacing: lace,
				
				cleavageCoverage: WARDROBE.between(0.1,0.25),
				cleavageOpeness: WARDROBE.between(0.05,0.38),
				curveCleavageX: WARDROBE.between(2,6)
		}})
	}, 
	
	
	
	TightShirt : {
		name: "tee",
		dad: "wTee",
		slot:"upper",
		dim: (function(){ return {
			cleavageOpeness: WARDROBE.between(0.1,0.4),
			curveCleavageX: WARDROBE.between(4,14),
			cleavageCoverage: WARDROBE.between(0.1,0.2),
			waistCoverage: WARDROBE.between(0.75,0.18),
			armCoverage: WARDROBE.between(0.12,0.48),
		}}),
		fill: ["light","bright","random","gray"],
	}, 
	
	FishnetShirt : {
		name: "fishnet shirt",
		dad: "wTee",
		slot:"upper",
		dim: (function(){ return {
			fishness: 0.7,
			cleavageOpeness: WARDROBE.between(0.08,0.14),
			curveCleavageX: WARDROBE.between(4,14),
			cleavageCoverage: WARDROBE.between(0.08,0.14),
			waistCoverage: WARDROBE.between(-0.2,0.6),
			armCoverage: WARDROBE.between(0.4,0.85),
		}}),
		fill: "black",
	}, 

	
	ShortSkirt : {
		name: "skirt",
		dad: "wSuperSkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			outerLoose: (WARDROBE.Rnd()<0.4) ?  WARDROBE.between(0,0.8) : WARDROBE.between(0.7,1.5),
			waistCoverage: WARDROBE.between(0.05,0.45),
			legCoverage: WARDROBE.between(0.24,0.45),
		}}),
		fill: ["bright","yoga"],
	}, 
	
	PencilSkirt : {
		name: "pencil skirt",
		dad: "wSuperSkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			outerLoose: 0,
			waistCoverage: WARDROBE.between(0.2,0.6),
			legCoverage: WARDROBE.between(0.25,0.55),
		}}),
		fill: ["bright","yoga"],
	},
	
	MiniSkirt : {
		name: "miniskirt",
		dad: "wSuperSkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			outerLoose: (WARDROBE.Rnd()<0.4) ?  WARDROBE.between(0,0.8) : WARDROBE.between(0.7,1.5),
			waistCoverage: WARDROBE.between(0.0,0.20),
			legCoverage: WARDROBE.between(0.15,0.25),
		}}),
		fill: ["bright","yoga"],
	},
	
	
	MicroSkirt : {
		name: "microskirt",
		dad: "wSuperSkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			outerLoose: (WARDROBE.Rnd()<0.4) ?  WARDROBE.between(0,0.8) : WARDROBE.between(0.7,1.5),
			waistCoverage: WARDROBE.between(-0.1,0.05),
			legCoverage: WARDROBE.between(0.13,0.18),
		}}),
		fill: ["bright","yoga"],
	},
	
	//QUEST ITEMS
	
	
	ShortSkirt1 : {
		name: "skirt",
		dad: "wSuperSkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			legCoverage: 0.42,
			outerLoose: 1.4,
			waistCoverage: 0.45,
		}}),
		fill: ["bright","yoga"],
	}, 
	
	ShortSkirt2 : {
		name: "skirt",
		dad: "wSuperSkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			legCoverage: 0.36,
			outerLoose: -0.1,
			waistCoverage: 0.32,
		}}),
		fill: ["yoga","bright","bright"],
	}, 
	
	ShortSkirt3 : {
		name: "miniskirt",
		dad: "wSuperSkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			legCoverage: 0.21,
			outerLoose: -0.1,
			waistCoverage: 0.2,
		}}),
		fill: ["bright","bright","yoga"],
	}, 
	
	ShortSkirt4 : {
		name: "microskirt",
		dad: "wSuperSkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			legCoverage: 0.15,//45,
			outerLoose: -0.07,
			waistCoverage: 0.15,
		}}),
		fill: ["yoga","bright","barbie"],
	}, 
	
	
	AsymetricalSkirt : {
		name: "skirt",
		dad: "wSuperAsySkirt",
		slot:"lower",
		dim: (function(){ return {
			innerLoose: 1.1,
			legCoverage: WARDROBE.between(0.25,0.65),
			waistCoverage: WARDROBE.between(-0.1,0.25),
			bias: WARDROBE.Rnd() > 0.5 ? WARDROBE.between(0.05,0.15) : WARDROBE.between(-0.05,-0.15),
			outerLoose: WARDROBE.between(0.5,1.5),
		}}),
		fill: ["yoga","bright","barbie"],
	}, 
	
	
	EgyptSun: {
		slot:"tatBelly",
		dim:  (function(){ return {
			loc: "torso",
			src: "egyptSun.png",
			layer: 2, 
			side: "right",
			width: 70,
			rotation: 0,
			ignoreClip: true,
			relativeLocation: {
				drawpoint: "bellybutton.top",
				dx: 0,
				dy: -1,
			 },
		}}),
		
	},

	BlueBand2: {
		slot:"tatLeg",
		dim:  (function(){ return {
			loc: "leg",
			src: "blueBand2.png",
			layer: 2, 
			side: "right",
			width: 150,
			rotation: 0,
			ignoreClip: false,
			relativeLocation: {
				drawpoint: "thigh.out",
				dx: -13.80046781246822,
				dy: 0.1262076680565443,
			},
		}}),
		
	},
	
	BlueBand: {
		slot:"tatLeg",
		dim:  (function(){ return {
			loc: "leg",
			src: "blueBand.png",
			layer: 2, 
			side: "right",
			width: 150,
			rotation: 0,
			ignoreClip: false,
			relativeLocation: {
				drawpoint: "thigh.out",
				dx: -13.80046781246822,
				dy: -3.1262076680565443,
			},
		}}),
		
	},
	
	BlueTriangle : {
		slot:"tatHead",
		dim:  (function(){ return {
			loc: "head",
			src: "triangle.png",
			layer: 11, 
			side: "right",
			width: 80,
			rotation: 0,
			ignoreClip: false,
			relativeLocation: {
				drawpoint: "eyes.center",
				dx: -1,
				dy: 6,
			},
		}}), 
	},
	
 
	
	BlueDragon : {
		slot:"tatArm",
		dim: (function(){ return {
			loc: "arm",
			src: "dragonBlue.png",
			layer: 7, 
			side: "left",
			width: 130,
			rotation: 11,
			ignoreClip: false,
			relativeLocation: {
				drawpoint: "shoulder",
				dx: 0,
				dy: 0,
			},
		}}), 
	},
 
	
	//NECKLACES
	BiChain : {
		name: "necklace",
		slot:"necklace",
		dad: "BiChain",
		dim: (function(){ 
			return {
			beadSize: WARDROBE.between(2,4),
			spaceSize: WARDROBE.between(8,10),
			neckCoverage: WARDROBE.between(0.04,0.14),
			cleavageCoverage: WARDROBE.between(0.10,0.18),
			}; 
		}),
		
		highlight: ["NXgold","NXsilver","NXbronze","NXsteel","bright","bright","bright","bright"],
		stroke: ["mono"]
		//hightlight and stroke should have high contrast
	},
	
	
	TearNecklace : {
		name: "necklace",
		slot:"necklace",
		dad: "TearNecklace",
		dim: (function(){ 
			return {
				size: WARDROBE.between(0.8,1.2),
				width: WARDROBE.between(2.5,5), //TO DO 
				length: WARDROBE.between(0,5), //TO DO - THIS LENGHT DOESNT EVEN MAKE SENSE HWAT IT EVEN MEANS?
				neckCoverage: WARDROBE.between(0.05,0.1),
				cleavageCoverage: WARDROBE.between(0.10,0.18),
			}; 
		}),
		/*
		fill: ["NXgold","NXsilver","NXsteel","bright","bright","bright"],
		stroke: ["metal"] //copy metal but not brigh????
		*/
		fill:["NXgold","NXsilver","NXbronze","NXsteel","bright","bright","bright","bright"],
		stroke:["NXgold","NXsilver","NXbronze","NXsteel"],
	},
	
	DoubleNecklace : {
		name: "necklace",
		slot:"necklace",
		dad: "DoubleNecklace",
		dim: (function(){ 
			return {
				cleavageCoverage: WARDROBE.between(0.10,0.18),
				cleavageCoverageTop: WARDROBE.between(0.06,0.09),

				//TO DO - FROM TEAR NECKLACE
				size: WARDROBE.between(0.8,1),
				width: WARDROBE.between(2.5,4), //TO DO 
				length: WARDROBE.between(0.5,4), //TO DO - THIS LENGHT DOESNT EVEN MAKE SENSE HWAT IT EVEN MEANS?

			}; 
		}),
		fill:["NXgold","NXsilver","NXbronze","NXsteel"],
	},
	
	PearlNecklace : {
		name: "pearl necklace",
		slot:"necklace",
		dad: "PearlNecklace",
		dim: (function(){ 
			return {
				neckCoverage: WARDROBE.between(0.05, 0.2),
				cleavageCoverage: WARDROBE.between(0.10, 0.21),
				beadThickness: WARDROBE.between(1.8,2.4),
				spaceSize: WARDROBE.between(8,10),
			}; 
		}),
		fill: ["bright","mono"],
		fill:["NXgold","NXsilver","NXbronze","NXsteel"],
	},
	
	SimpleChain : {
		name: "chain",
		slot:"necklace",
		dad: "SimpleChain",
		dim: (function(){ 
			return {
				cleavageCoverage: WARDROBE.between(0.08,0.15),
				neckCoverage: WARDROBE.between(0.08,0.12),
				thickness: WARDROBE.between(0.4,0.7),
				chain: WARDROBE.Rnd()<0.5 ? true : false,
			};
		}),
		fill:["NXgold","NXsilver","NXbronze","NXsteel"],
	},
	
	MultiNecklace : {
		name: "chain",
		slot:"necklace",
		dad: "MultiNecklace",
		dim: (function(){
			let distance;
			let cleavageCoverage;
			let multiple = Math.ceil( WARDROBE.Rnd()*3 );
			switch(multiple){
				default:
				case 1:
					cleavageCoverage = WARDROBE.between(0.08,0.15);
					distance = WARDROBE.between(5,10);
					break;
				case 2:
					cleavageCoverage = WARDROBE.between(0.08,0.14);
					distance = WARDROBE.between(5,8);
					break;
				case 3:
					cleavageCoverage = WARDROBE.between(0.08,0.12);
					distance = WARDROBE.between(4,6);
					break
					
			}
			return {
				cleavageCoverage: cleavageCoverage,
				distance: distance,
				multiple: multiple,
				neckCoverage: WARDROBE.between(0.08,0.12),
				chain: WARDROBE.Rnd()<0.5 ? true : false,
			}; 
		}),
		fill:["NXgold","NXsilver","NXbronze","NXsteel"],
	},
	
	Pentagram : {
		name: "pentagram",
		slot:"necklace",
		dad: "StarNecklace",
		dim: (function(){ 
			return {
				neckCoverage: WARDROBE.between(0.04,0.16),
				cleavageCoverage: WARDROBE.between(0.10,0.16),
			
				radius: WARDROBE.between(3,3.9),
				starThickness: WARDROBE.between(0.5,0.7),
				upwards: WARDROBE.Rnd()<0.5 ? true : false,
				chain: WARDROBE.Rnd()<0.5 ? true : false,
			}; 
		}),
		fill:["NXgold","NXsilver","NXbronze","NXsteel"],
	},
	
	StarNecklace : {
		name: "star necklace",
		slot:"necklace",
		dad: "StarNecklace",
		dim: (function(){ 
			return {
				neckCoverage: WARDROBE.between(0.04,0.16),
				cleavageCoverage: WARDROBE.between(0.10,0.16),
				
				styleOuter: WARDROBE.between(-1,1),
				radius: WARDROBE.between(3,3.9),
				spiker: Math.floor( WARDROBE.between(5,10) ),
				upwards: WARDROBE.Rnd()<0.5 ? true : false,
				chain: WARDROBE.Rnd()<0.5 ? true : false,
			}; 
		}),
		fill:["NXgold","NXsilver","NXbronze","NXsteel"],
	},
	
	
	
	
		//BODYCHAIN
	Bodychain1 : {
		name: "bodychain",
		slot:"bodychain",
		dad: "Bodychain1",
		dim: (function(){ 
			return {
				cleavageCoverage: WARDROBE.between(0.14,0.24),
				cleavageCoverageBot: WARDROBE.between(0.45,0.54),
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},
	
	Bodychain2 : {
		name: "bodychain",
		slot:"bodychain",
		dad: "Bodychain2",
		dim: (function(){ 
			return {
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},
	
	Bodychain3 : {
		name: "bodychain",
		slot:"bodychain",
		dad: "Bodychain3",
		dim: (function(){ 
			return {
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},
	
	//BELLYPIERCE
	BellyPiercingSimple : {
		name: "bellybutton piercing",
		slot:"bellybutton",
		dad: "BellyPiercingSimple",
		piercing: true,
		dim: (function(){ 
			
			return {
				radius: WARDROBE.between(1.2,1.5),
				
			}; 
		}),
		stroke: ["NXgold","NXsilver","NXsteel"],
		fill:["NXgold","NXsilver","NXsteel","bright","bright","bright"],
	},
	
	BellyPiercingAdvanced : {
		name: "bellybutton piercing",
		slot:"bellybutton",
		dad: "BellyPiercingAdvanced",
		piercing: true,
		dim: (function(){ 
			let above = false;
			let above2 = false;
			let bellow = false;
			let bellow2 = false;
			let chain = false;
			let link = false;
			let distance = 1;
			let secondaryRadius = 1;
			switch( Math.ceil( WARDROBE.Rnd()*5 ) ){
				case 1:
					above = true;
					above2 = true;
					break;
				case 2:
					above = true;
					distance = 1.1;
					if( WARDROBE.Rnd() < 0.5 )chain = true;
					break;
				case 3:
					bellow = true;
					if( WARDROBE.Rnd() < 0.65 ) bellow2 = true;
					break;
				case 4:
					secondaryRadius = WARDROBE.between(1.5,2);
					bellow2 = true;
					link = true;
					break;	
				default:
				case 5:
					chain = true;
					if( WARDROBE.Rnd() < 0.5 ){
						above = true;
						if( WARDROBE.Rnd() < 0.5 ) above2 = true;
					}
					break;		
			};
		
			return {
				above: above,
				above2: above2,
				bellow: bellow,
				bellow2: bellow2,
				chain: chain,
				link: link,
				secondaryRadius: secondaryRadius,
				radius: 1.4,
				
			}; 
		}),
		stroke: ["NXgold","NXsilver","NXsteel"],
		fill:["NXgold","NXsilver","NXsteel","bright","bright","bright"],
	},

 
 
 
	BellyPiercingInitial : {
		name: "bellybutton piercing",
		slot:"bellybutton",
		dad: "BellyPiercingAdvanced",
		piercing: true,
		dim: (function(){ 
			let above = true;
			let chain = true;
			let distance = 1.2;
			let secondaryRadius = 1;
			 
		
			return {
				fill: "#6e7fcf", //"#9c09d9",
				stroke: "#6e7fcf", //"#9c09d9",
				above: true,
				above2: false,
				bellow: false,
				bellow2: false,
				chain: true,
				link: false,
				secondaryRadius: 1,
				distance: 1.2,
				radius: 1.4,
				
			}; 
		}),
		//stroke: ["bright"],
		//fill:["bright"],
	},

	NipplePiercings : {
		name: "nipple piercings",
		slot:"nipples",
		dad: "NipplePiercings",
		piercing: true,
		dim: (function(){
			let circe = (WARDROBE.Rnd() < 0.34) ? true : false;
			let barbar = (WARDROBE.Rnd() < 0.66 || !circe) ? true : false;
			
			return {
				bar: barbar,
				ring: circe,
				radius: WARDROBE.between(0.55,0.7),
				ringRadius: WARDROBE.between(1.4,2.1),
				side: "right",
				/*
				relativeLocation: {
					drawpoint: "nose.out",
					dx: 0,
					dy: 0,
				}
				*/
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},

	PubicPiercing : {
		name: "pubic piercing",
		slot:"pubic",
		dad: "StudPiercing3",
		piercing: true,
		dim: (function(){ 
			return {
				radius: WARDROBE.between(0.8,1),
				side: "right",
				relativeLocation: {
					drawpoint: "vagina.top",
					dx: 0,
					dy: WARDROBE.between(3,4),
				}
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},
	
	TonguePiercing : {
		name: "tongue piercing",
		slot:"tongue",
		dad: "TonguePiercing",
		piercing: true,
		dim: (function(){ 
			return {
				radius: 0.03,
				side: "right",
				relativeLocation: {
					drawpoint: "lips.center",
					dx: 0,
					dy: 0,
				}
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},
	
	
	
	NosePiercing : {
		name: "nose piercing",
		slot:"nose",
		dad: "StudPiercing2",
		piercing: true,
		dim: (function(){ 
			return {
				radius: 0.5,
				side: "right",
				relativeLocation: {
					drawpoint: "nose.out",
					dx: -3.6,
					dy: 1.15,
				}
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},
	
	NoseBridge : {
		name: "nose bridge",
		slot:"nose",
		dad: "Bridge",
		piercing: true,
		dim: (function(){ 
			return {
				radius: 0.4,
				side: "right",
				relativeLocation: {
					drawpoint: "nose.top",
					dx: -0.3,
					dy: -1.66
				}
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},
	
	EyebrowPiercing : {
		name: "eyebrow piercing",
		slot:"eyebrow",
		dad: "Bridge2",
		piercing: true,
		dim: (function(){ 
			let side = WARDROBE.Rnd() < 0.5 ? "left" : "right";
			if( WARDROBE.Rnd()<0.55 ){
				return {
					radius: 0.5,
					rotation: 90,
					distance: 0.9,
					side: side,
					relativeLocation: {
						drawpoint: "brow.outbot",
						dx: -1.5,
						dy: 0.4
					}
				};
			}else{
				return {
					radius: 0.5,
					distance: 0.66,
					rotation: -8,
					side: side,
					relativeLocation: {
						drawpoint: "brow.outbot",
						dx: -3,
						dy: 1.15
					}
				};
			};
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},
	
	
	Labret : {
		name: "labret piercing",
		slot:"lips",
		dad: "StudPiercing4",
		piercing: true,
		dim: (function(){ 
			return {
				radius: 0.6,
				side: "right",
				relativeLocation: {
					drawpoint: "lips.bot",
					dx: 0,
					dy: -1
				}
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},
	
	Medusa : {
		name: "medusa piercing",
		slot:"lips",
		dad: "StudPiercing5",
		piercing: true,
		dim: (function(){ 
			return {
				radius: 0.6,
				side: "right",
				relativeLocation: {
					drawpoint: "lips.top",
					dx: 0.25,
					dy: WARDROBE.between(1.4,2.1)
				}
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},
	
	Monroe : {
		name: "monroe piercing",
		slot:"lips",
		dad: "StudPiercing6",
		piercing: true,
		dim: (function(){ 
			return {
				radius: 0.6,
				side: WARDROBE.Rnd() < 0.5 ? "left" : "right",
				relativeLocation: {
					drawpoint: "lips.out",
					dx: -0.2,
					dy: 2.2
				}
			}; 
		}),
		fill: ["NXgold","NXsilver","NXsteel"],
	},

//nose,lips,eyebrow

	//EARRINGS
	BallEarrings : {
		name: "ball earrings",
		slot:"earrings",
		dad: "BallEarrings",
		dim: (function(){ 
			return {
				size: WARDROBE.between(0.8,1.2),
				length: WARDROBE.between(8,16),
				alt: WARDROBE.between(-0.4,0.4),
			}; 
		}),
		stroke: ["NXgold","NXsilver","NXbronze","NXsteel"],
		fill:["NXgold","NXsilver","NXbronze","NXsteel","bright","bright","bright"],
	},
	
	CrystalEarrings : {
		name: "crystal earrings",
		slot:"earrings",
		dad: "CrystalEarrings",
		dim: (function(){ 
			return {
				hanger: WARDROBE.between(3,5), 
				alt: WARDROBE.between(-2,2),
				length: WARDROBE.between(5,10),
				width: WARDROBE.between(2.2,3.2),
			}; 
		}),
		stroke: ["NXgold","NXsilver","NXbronze","NXsteel"],
		fill:["bright"],
	},
	
	TriangleEarrings : {
		name: "triangle earrings",
		slot:"earrings",
		dad: "TriangleEarrings",
		dim: (function(){ 
			return {
				length: WARDROBE.between(4,10),
				width: WARDROBE.between(1,2.8),
			}; 
		}),
		stroke: ["NXgold","NXsilver","NXbronze","NXsteel"],
		fill:["bright"],
	},
	
	
	RhombEarrings : {
		name: "rhomb earrings",
		slot:"earrings",
		dad: "RhombEarrings",
		dim: (function(){ 
			return {
				thickness: WARDROBE.between(0.75,1),
				alt: WARDROBE.between(0.5,0.75),
				length: WARDROBE.between(7,14),
				width: WARDROBE.between(2,4),
			}; 
		}),
		stroke:["NXgold","NXsilver","NXbronze","NXsteel","bright","bright","bright"],
		//fill:["bright"],
	},
	
	
	ChainEarrings : {
		name: "chain earrings",
		slot:"earrings",
		dad: "ChainEarrings",
		dim: (function(){ 
			return {
				length: WARDROBE.between(8,16),
			}; 
		}),
		fill:["NXgold","NXsilver","NXbronze","NXsteel"],
	},
	
	LoopEarrings : {
		name: "loop earrings",
		slot:"earrings",
		dad: "LoopEarrings",
		dim: (function(){ 
			return {
				width: WARDROBE.between(2,3),
				length: WARDROBE.between(8,13),
			}; 
		}),
		fill: ["NXgold","NXsilver","NXbronze","NXsteel","bright","bright","bright"],
	},
	
	
	

	//FANTASY
	LongGloves : {
		name: "long gloves",
		dad: "FingerlessGloves",
		slot: "gloves",
		
		dim: (function(){ 	return{
			armCoverage: WARDROBE.between(0.2,0.35)		
		}}),
		price: 5,
		fill: ["dark","yoga"],
	},
	
	LeatherLeggins : {
		name: "leggings",
		dad: "wLacedLeggins",
		slot:"lower",
		dim: (function(){return {
			waistCoverage: WARDROBE.between(-0.05,0.3),  
			legCoverage: WARDROBE.between(0.8,1.0),
			
			zipDeep: WARDROBE.between(0.16,0.24),
			
			innerLoose: 0,
			outerLoose: 0,
		}}),
		price: 6,
		fill: ["leather","darkLeather"],
	}, 
	
	
	LeatherPants : {
		name: "pants",
		dad: "wLacedLeggins",
		slot:"lower",
		dim: (function(){return {
			waistCoverage: WARDROBE.between(-0.05,0.3),  
			legCoverage: WARDROBE.between(0.8,1.0),
			
			zipDeep: WARDROBE.between(0.16,0.24),
			
			innerLoose: WARDROBE.between(0.3,0.6),
			outerLoose: WARDROBE.between(0.3,0.6),
		}}),
		price: 8,
		fill: ["leather","darkLeather"],
	}, 
	
	
	/*
		glove,vambrace,greave,
	
	*/
	
	//ARMOUR
	LeatherArmor: {
		name: "armor",
		dad: "wCorset",
		slot: "upperArmor",
		hp: 4,
		dim: (function(){return{
		}}),
		price: 14,
		fill: ["darkLeather","leather","darkLeather","leather"],
	},
	
	FancyLeatherArmor: {
		name: "armor",
		dad: "wCorset",
		slot: "upperArmor",
		hp: 4,
		dim: (function(){return{
		}}),
		price: 18,
		fill:["wywen","hexa","wywen","hexa"],
	},
	
	LeatherVambraces: {
		name: "vambraces",
		dad: "wVambraces",
		slot: "vambraces",
		hp: 1,
		dim: (function(){return{
		armCoverage: 0.55,
		}}),
		price: 6,
		fill: ["darkLeather","leather","darkLeather","leather"],
	},
	
	FancyLeatherVambraces: {
		name: "vambraces",
		dad: "wVambraces",
		slot: "vambraces",
		hp: 1,
		dim: (function(){return{
		armCoverage: 0.55,
		}}),
		price: 9,
		fill:["wywen","hexa","wywen","hexa"],
	},
	
	LeatherSkirt: {
		name: "skirt",
		dad: "wCingulum",
		slot: "lowerArmor",
		hp: 2,
		dim: (function(){return{
			waistCoverage: 0.33,
			number: 5,
			crest: WARDROBE.between(0.8,2),
			space: 0,//WARDROBE.between(0,1),
			pointy: WARDROBE.between(4,8),
			margin: WARDROBE.between(0,2),
			length: WARDROBE.between(25,40),
		}}),
		price: 12,
		fill: ["darkLeather","leather","darkLeather","leather"],
	},
	
	FancyLeatherSkirt: {
		name: "skirt",
		dad: "wCingulum",
		slot: "lowerArmor",
		hp: 2,
		dim: (function(){return{
			waistCoverage: 0.33,
			number: 5,
			crest: WARDROBE.between(0.8,2),
			space: 0,//WARDROBE.between(0,1),
			pointy: WARDROBE.between(4,8),
			margin: WARDROBE.between(0,2),
			length: WARDROBE.between(25,40),
		}}),
		price: 16,
		fill:["wywen","hexa","wywen","hexa"],
	},
	
	
	
	BronzeGreaves: {
		name: "greaves",
		adjective: "bronze",
		dad: "wGreaves",
		slot: "greaves",
		hp: 2,
		dim: (function(){return{
			//fill: da.getPattern("copper", 120),
			//stroke: "hsla(13, 50%, 13%, 1)",
		}}),
		price: 10,
		fill: "bronze",
	},
	
	BronzeVambraces: {
		name: "vambraces",
		adjective: "bronze",
		dad: "wVambraces",
		slot: "vambraces",
		hp: 2,
		dim: (function(){return{
			//fill: da.getPattern("copper", 120),
			//stroke: "hsla(13, 50%, 13%, 1)",
			armCoverage: 0.55,
		}}),
		price: 8,
		fill: "bronze",
	},
	
	BronzeCuirass: {
		name: "cuirass",
		adjective: "bronze",
		dad: "wCuirass",
		slot: "upperArmor",
		hp: 5,
		dim: (function(){return{
		//	fill: da.getPattern("copper", 120),
		//	stroke: "hsla(13, 50%, 13%, 1)",
		}}),
		price: 21,
		fill: "bronze",
	},
	
	BronzeSkirt: {
		name: "skirt",
		adjective: "bronze",
		dad: "wCingulum",
		slot: "lowerArmor",
		hp: 3,
		dim: (function(){return{
		//	fill: da.getPattern("copper", 120),
		//	stroke: "hsla(13, 50%, 13%, 1)",
			waistCoverage: 0.33,
			number: 5,
			crest: WARDROBE.between(0.8,2),
			space: 0,//WARDROBE.between(0,1),
			pointy: WARDROBE.between(4,8),
			margin: WARDROBE.between(0,2),
			length: WARDROBE.between(25,40),
		}}),
		price: 16,
		fill: "bronze",
	},
	
	

	
	
	
	SteelCuirass: {
		name: "cuirass",
		adjective: "iron",
		dad: "wCuirass",
		slot: "upperArmor",
		hp: 6,
		dim: (function(){return{
		//	fill: da.getPattern("iron", 120),
		//	stroke: "hsla(200, 20%, 15%, 1)",
		}}),
		price: 32,
		fill: "steel",
	},
	
	SteelGreaves: {
		name: "greaves",
		adjective: "iron",
		dad: "wGreaves",
		slot: "greaves",
		hp: 3,
		dim: (function(){return{
		//	fill: da.getPattern("iron", 120),
		//	stroke: "hsla(200, 20%, 15%, 1)",
		}}),
		price: 15,
		fill: "steel",
	},
	
	SteelVambraces: {
		name: "vambraces",
		adjective: "iron",
		dad: "wVambraces",
		slot: "vambraces",
		hp: 3,
		dim: (function(){return{
			armCoverage: 0.55,
		}}),
		price: 12,
		fill: "steel",
	},
	
	SteelSkirt: {
		name: "skirt",
		adjective: "iron",
		dad: "wCingulum",
		slot: "lowerArmor",
		hp: 4,
		dim: (function(){return{
		//	fill: da.getPattern("iron", 120),
		//	stroke: "hsla(200, 20%, 15%, 1)",
			waistCoverage: 0.33,
			number: 5,
			crest: WARDROBE.between(0.8,2),
			space: 0,//WARDROBE.between(0,1),
			pointy: WARDROBE.between(4,8),
			margin: WARDROBE.between(0,2),
			length: WARDROBE.between(25,40),
		}}),
		price: 24,
		fill: "steel",
	},
	
	
	
	
	GlassGreaves: {
		name: "greaves",
		adjective: "glass",
		dad: "Greaves",
		slot: "greaves",
		hp: 3,
		dim: (function(){return{
		}}),
		price: 19,
		fill: "glass",
	},
	
	GlassVambraces: {
		name: "vambraces",
		adjective: "glass",
		dad: "wVambraces",
		slot: "vambraces",
		hp: 3,
		dim: (function(){return{
			armCoverage: 0.55,
		}}),
		price: 16,
		fill: "glass",
	},
	
	GlassCuirass: {
		name: "cuirass",
		adjective: "glass",
		dad: "wCuirass",
		slot: "upperArmor",
		hp: 6,
		dim: (function(){return{
		}}),
		price: 36,
		fill: "glass",
	},
	
	GlassSkirt: {
		name: "skirt",
		adjective: "glass",
		dad: "wCingulum", //why not wCingulum???? is there reason?
		slot: "lowerArmor",
		hp: 4,
		dim: (function(){return{
			waistCoverage: 0.33,
			number: 5,
			crest: WARDROBE.between(0.8,2),
			space: 0,//WARDROBE.between(0,1),
			pointy: WARDROBE.between(4,8),
			margin: WARDROBE.between(0,2),
			length: WARDROBE.between(25,40),
		}}),
		price: 28,
		fill: "glass",
	},
	
	
	
	
	MailShirt: {
		name: "shirt",
		adjective: "mail",
		dad: "wTee",
		slot: "upperArmor",
		hp: 6,
		dim: (function(){return{
			waistCoverage: WARDROBE.between(0.9,1.4),
			armCoverage: WARDROBE.between(0.85,1),
			cleavageOpeness: -1,
			cleavageCoverage: -0.25,
			//fill: da.getPattern("chainmail2", 40),
			//stroke: "hsla(200, 20%, 15%, 1)",
		}}),
		price: 33,
		fill: "mail",
	},
	
	MailBottom: {
		name: "bottom",
		adjective: "mail",
		dad: "wBikiniBottom",
		slot: "lowerArmor",
		hp: 5,
		dim: (function(){return{
			waistCoverage: 0.3,
			waistCoverageLower: 0,
		//	fill: da.getPattern("chainmail2", 40),
		//	stroke: "hsla(200, 20%, 15%, 1)",
		}}),
		price: 30,
		fill: "mail",
	},
	
	MailTop: {
		name: "top",
		adjective: "mail",
		dad: "wBikiniTop",
		slot: "upperArmor",
		hp: 6,
		dim: (function(){return{
		//	fill: da.getPattern("chainmail2", 40),
		//	stroke: "hsla(200, 20%, 15%, 1)",
		}}),
		price: 30,
		fill: "mail",
	},
	
	
	
	PaladinCuirass: {
		name: "cuirass",
		adjective: "paladin",
		dad: "wCuirass",
		slot: "upperArmor",
		hp: 7,
		dim: (function(){return{
		//	fill: da.getPattern("copper", 120),
		//	stroke: "hsla(13, 50%, 13%, 1)",
		}}),
		price: 42,
		fill: "damask",
	},
	
	
	PaladinGreaves: {
		name: "greaves",
		adjective: "paladin",
		dad: "wGreaves",
		slot: "greaves",
		hp: 4,
		dim: (function(){return{
		//	fill: da.getPattern("iron", 120),
		//	stroke: "hsla(200, 20%, 15%, 1)",
		}}),
		price: 22,
		fill: "damask",
	},
	
	PaladinVambraces: {
		name: "vambraces",
		adjective: "paladin",
		dad: "wVambraces",
		slot: "vambraces",
		hp: 4,
		dim: (function(){return{
			armCoverage: 0.55,
		}}),
		price: 22,
		fill: "damask",
	},
	
	PaladinSkirt: {
		name: "skirt",
		adjective: "paladin",
		dad: "wCingulum",
		slot: "lowerArmor",
		hp: 5,
		dim: (function(){return{
		//	fill: da.getPattern("iron", 120),
		//	stroke: "hsla(200, 20%, 15%, 1)",
			waistCoverage: 0.33,
			number: 5,
			crest: WARDROBE.between(0.8,2),
			space: 0,//WARDROBE.between(0,1),
			pointy: WARDROBE.between(4,8),
			margin: WARDROBE.between(0,2),
			length: WARDROBE.between(25,40),
		}}),
		price: 36,
		fill: "damask",
	},
	
	
	
	
	
	
	/*
	
var pmyClothing = da.Clothes.create(da.SuperPanties2, {
  waistCoverage: 0.290293293629877,
  waistCoverageLower: 0.016000000000000004,
  fill: da.getPattern("chainmail2", 30),
  stroke: "black",
});
*/
	//WEAPONS
	
/*
	TYPE
	1: slashy
	2: staby
	3: striky
	4: hity

	CLASS
	1: blades
	2: hammers;
	3: polearms
*/


	//LEVEL 1
	Knife : {
		name: "knife",
		slot:"weapon",
		price: 5,
		attack: 1,
		
		type: 1,
		class: 1,
	}, 
	
	//LEVEL 2
	Wand : {
		name: "magic wand",
		slot:"weapon",
		price: 13,
		attack: 1,
		type: 4,
		mag: 1,
		
		class: 3,
	},
	
	Falchion : {
		name: "falchion",
		slot:"weapon",
		price: 12,
		attack: 2,
		type: 1,
		
		class: 1,
	}, 
	
	Bludgeon : {
		name: "bludgeon",
		slot:"weapon",
		price: 10,
		attack: 2,
		type: 3,
		
		class: 2,
	}, 
	
	
	/*
	Staff : { //REMOVED
		name: "spear",
		slot:"weapon",
		price: 9,
		attack: 2,
		type: 3,
		
		class: 3,
	}, 
	*/
	Spear : {
		name: "spear",
		slot:"weapon",
		price: 9,
		attack: 2,
		type: 2,
		
		class: 3,
	}, 
	
	
	//LEVEL 3
	SacDagger : {
		name: "sacrificial dagger",
		slot:"weapon",
		price: 27,
		attack: 2,
		type: 2,
		mag: 1,
		
		class: 1,
	}, 
	
	Rapier : {
		name: "rapier",
		slot:"weapon",
		price: 32,
		attack: 3,
		type: 2,
		
		class: 1,
	}, 
	
	Malchus : {
		name: "malchus",
		slot:"weapon",
		price: 28,
		attack: 3,
		type: 1,
		
		class: 1,
	}, 
	
	Sword : {
		name: "sword",
		slot:"weapon",
		price: 30,
		attack: 3,
		type: 1,
		
		class: 1,
	}, 
	
	Morningstar : {
		name: "morningstar",
		slot:"weapon",
		price: 31,
		attack: 3,
		type: 3,
		
		class: 2,
	}, 
	
	Mace : {
		name: "mace",
		slot:"weapon",
		price: 27,
		attack: 3,
		type: 3,
		
		class: 2,
	}, 
	
	Scythe : {
		name: "war scythe",
		slot:"weapon",
		price: 24,
		attack: 3,
		type: 1,
		
		class: 3,
	}, 
	
	Trident : {
		name: "trident",
		slot:"weapon",
		price: 26,
		attack: 3,
		type: 2,
		
		class: 3,
	}, 
	
	Earspoon : {
		name: "earspoon",
		slot:"weapon",
		price: 28,
		attack: 3,
		type: 2,
		
		class: 3,
	}, 
	
	 
	
	//LEVEL 3
	MagStaff : {
		name: "magic staff",
		slot: "weapon",
		price: 36,
		attack: 3,
		type: 4,
		mag: 1,
		
		class: 2,
	}, 
	
	Bastard : {
		name: "bastard",
		slot:"weapon",
		price: 56,
		attack: 4,
		type: 2,
		
		class: 1,
	}, 
	
	Warhammer : {
		name: "warhammer",
		slot:"weapon",
		price: 53,
		attack: 4,
		type: 3,
		
		class: 2,
	}, 
	 
	Glaive : {
		name: "glaive",
		slot:"weapon",
		price: 48,
		attack: 4,
		type: 1,
		
		class: 3,
	}, 
 
	Sceptre : {
		name: "sceptre",
		slot:"weapon",
		price: 69,
		attack: 4,
		type: 4,
		mag: 1,
		
		class: 2,
	},
	
	
	
	/*
	xElf : {
		name: "Elfium",
		slot:"potion",
		price: 6,
	}, 
	*/
	
	
	
	
	
	//SHOES
	Sneakers :{
		name: "sneakers",
		dad: "wSimpleSneakers",
		slot: "shoes",
		dim: (function(){return {
		//	fill: "black", //TODO DOESNT WORK
		//	stroke: "black", //TODO DOESNT WORK
			highlight: "white",
			tongue: WARDROBE.between(4,7),
			tip: WARDROBE.between(-4,1),
		}}),
		//size: 3,
		fill: ["yoga","yoga","dark","barbie"]
	},
	
	//TODO - I ENDED HERE
	KittyHeels :{
		name: "heels",
		dad: "wClosedToeStrappedPumps",
		slot: "shoes",
		dim: (function(){return {
			shoeHeight: WARDROBE.between(0.2,1.2),
			toeCoverage: WARDROBE.between(0,1),
			shoeTightness: WARDROBE.between(8,12),
		}}),
		//size: 3,
		fill: ["yoga","yoga","dark","barbie"]
	},
	
	HighHeels :{
		name: "high heels",
		dad: "wClosedToeStrappedPumps",
		slot: "shoes",
		dim: (function(){return {
			shoeHeight: WARDROBE.between(1,4),
			toeCoverage: WARDROBE.between(0,1),
			shoeTightness: WARDROBE.between(8,12),
		}}),
		//size: 3,
		fill: ["yoga","yoga","dark","barbie"]
	},
	
	
	RidiculousHeels : {
		name: "high heels",
		slot: "shoes",
		dad: "ClosedToeStrappedPumps",
		dim: (function(){ return {
			basePointiness: 7.0000000000000036,
			heelPointiness: 3.8971429878757338,
			heelTipWidth: 5.679626594804873,
			platformHeight: -0.6334225585191575,
			shoeHeight: 6.20571402424854,
			shoeTightness: 4,
			strapWidth: 2.7861457328646893,
			toeCoverage: -1,
		}}),	
		fill: ["purple","carmine"]
	},
	
}	
