 

//asdf = asdfasdf;

function initiate(seed){
	if(typeof seed == "undefined")seed = Math.floor(Math.random()*10000);
	SEED = seed;
	
	initiate_outfits(seed);
	initiate_character(seed);
	initiate_default_values();
	
	POTION.initiate(seed,"div_right");
};


function initiate_character(seed){
	if(typeof seed == "undefined")seed = Math.floor(Math.random()*10000);
	PCIRL = WARDROBE.createCharacter(seed,0.8,0.6);
	PCMETA = WARDROBE.cloneCharacter(PCIRL);
	PCGAME = WARDROBE.cloneCharacter(PCIRL);
	
	PC =  WARDROBE.cloneCharacter(PCIRL);
	PC.name = "Katarína";
	WARDROBE.config.PC = PC;
	
	console.log("> CHARACTER INITIALISED");

};


function initiate_outfits(seed){
	dh.seededRandom(seed);
	
//	WARDROBE.createOutfit("Default",dh.seededRandom(),"MailBottom","MailTop");
 
	//TO DO 
	WARDROBE.createOutfit("Lingerie1",dh.seededRandom(),["GarterStockings","burgundy"],["Bra","burgundy"],["LowThong","burgundy"],"BellyPiercingInitial");
	WARDROBE.createOutfit("Lingerie2",dh.seededRandom(),["GarterStockings","royalBlue"],["Bra","royalBlue"],["LowThong","royalBlue"],"BellyPiercingInitial");
	WARDROBE.createOutfit("Goth",dh.seededRandom(),["LowThong","black"],["Bra","black"],"FishnetShirt",["DefHarlotStockings","black"],["ShortSkirt3","black"],"BellyPiercingInitial");
	
	//WARDROBE.createOutfit("Goth",dh.seededRandom(),["DefHarlotStockings","black"],["DefHarlotCorset","black"]);
	
	//WARDROBE.createOutfit("Night",dh.seededRandom(),["SexyNightie"]);

	WARDROBE.createOutfit("FantasyUnderwear",dh.seededRandom(),["LowThong","cloth"],["BreastWrap","cloth"]);

	
	WARDROBE.createOutfit("DefFallen",dh.seededRandom(),"Knife",["FantasyThong","dark"],"DefFallenLoincloth","DefFallenTop","DefFallenBelt","DefFallenGorget");
	WARDROBE.createOutfit("DefHarlot",dh.seededRandom(),"Knife","DefHarlotSkirt","DefHarlotStockings","DefHarlotTop","DefHarlotCorset");
	WARDROBE.createOutfit("DefHellion",dh.seededRandom(),"Knife","DefBarbaricBra","DefBarbaricLoincloth");
	
	WARDROBE.createOutfit("Default",dh.seededRandom(),"Thong","Bra","LowJeans","TightShirt","CuteSocks","CrystalEarrings","Sneakers","BellyPiercingInitial");
	WARDROBE.createOutfit("Default2",dh.seededRandom(),"Briefs","Bra","TightShirt","Socks","RhombEarrings","Sneakers");
	WARDROBE.createOutfit("Default3",dh.seededRandom(),"Briefs","Bra","TightShirt","ShortSkirt","CuteSocks","BallEarrings","Sneakers");
	
	WARDROBE.createOutfit("Party",dh.seededRandom(),"Bra","Thong","Minidress","ChainEarrings","DoubleNecklace","KittyHeels");
	WARDROBE.createOutfit("Wrestling",dh.seededRandom(),"WrestlingTop","WrestlingBot");
	
	WARDROBE.createOutfit("none",dh.seededRandom());
	
	
	WARDROBE.createOutfit("SexyUnderwear",dh.seededRandom(),"LowThong","HighHeels","StockingsFishnet","MultiNecklace","BellyPiercingInitial");
	/*
	
	WARDROBE.createOutfit("Default",dh.seededRandom(),"MailBottom","MailTop");
	
	WARDROBE.createOutfit("Default",dh.seededRandom(),"BronzeSkirt","BronzeCuirass","BronzeGreaves","BronzeVambraces");
	WARDROBE.createOutfit("Default",dh.seededRandom(),"SteelSkirt","SteelCuirass","SteelGreaves","SteelVambraces");
	
	
	WARDROBE.createOutfit("Default",dh.seededRandom(),"MailBottom","MailShirt","SteelGreaves","SteelVambraces");
	WARDROBE.createOutfit("Default",dh.seededRandom(),"BronzeSkirt","BronzeCuirass","BronzeGreaves","BronzeVambraces");
	WARDROBE.createOutfit("Default",dh.seededRandom(),"GlassSkirt","GlassCuirass","GlassGreaves","GlassVambraces");
	
	
	WARDROBE.createOutfit("Default",dh.seededRandom(),"MailBottom","MailShirt","SteelGreaves","SteelVambraces");
	WARDROBE.createOutfit("Default",dh.seededRandom(),"PaladinCuirass","PaladinSkirt","PaladinGreaves","PaladinVambraces");
*/	
	gameInventory = [];
	
	//TODO
gameInventory = [];
/*	WARDROBE.createMultiplePacked( 
		"Jeans",
		"Jeans",
		"Jeans",
		"ShortSkirt",
		"ShortSkirt",
		"ShortSkirt",
		"TubeTop",
		"TightShirt",
		"Boyshorts",
		"LowThong",
		"Bra",
		"Bra",
		
	);
*/	
	inventory = WARDROBE.createMultiplePacked( 

		[1,"HalterTop"],
		[2,"SexyHalterTop"],
		[2,"TubeTop"],
		"TubeTopSleeve",
		[1,"ShortSkirt"],
		[1,"MiniSkirt"],
		
	//	"Jeans",
	//	"LowJeans",
		[1,"Bra"],
		[1,"Briefs"],
		[1,"Thong"],
		[1,"LowThong"],
		//[3,"GString"],
		[2,"Boyshorts"],
		
		
		[1,"Socks"],
		[1,"HighSocks"],
		[1,"StockingsFishnet"],
	//	[1,"TightShirt"],

		
	
		[1,"KittyHeels"],
		[2,"HighHeels"],
		
		[2,"BrightBelt"],
		[1,"DarkBelt"],
		
		"TriangleEarrings",
		"ChainEarrings",
		
		"SimpleChain",
		"TearNecklace",
		"DoubleNecklace",
		
		[2,"BellyPiercingAdvanced"],
		//[3,["elixir",0]],[3,["elixir",1]],[3,["elixir",2]],[3,["elixir",3]],[3,["elixir",4]],[3,["elixir",5]],"randomElixir","randomElixir","randomElixir","Jeans",[3,"HalterTop"],[3,"Dress"] 
	
	);
	
	
	console.log("> OUTFITS INITIALISED");

//WARDROBE.createOutfit("Default",dh.seededRandom(),"DefHarlotSkirt","DefHarlotStockings","DefHarlotTop","DefHarlotCorset");
	
//WARDROBE.createOutfit("Default",dh.seededRandom(),"Knife",["FantasyThong","dark"],"DefFallenLoincloth","DefFallenTop","DefFallenBelt","DefFallenGorget");
//WARDROBE.createOutfit("Default",dh.seededRandom(),"DefBarbaricBra","DefBarbaricLoincloth","Knife");	
//WARDROBE.createOutfit("Default",dh.seededRandom(),["GarterStockings","burgundy"],["Bra","burgundy"],["LowThong","burgundy"]);
};




function initiate_default_values(){
	
	//cause problems when restart from dungeon
	DUNGEON.active = void 0;
	STATS.remove();
	
	WARDROBE.display.makeup.lips.prominence = 0;
	WARDROBE.display.makeup.mascara.prominence = 0;
	WARDROBE.display.makeup.nails.prominence = 0;
	
	WARDROBE.temporaryStorage = "";
	WARDROBE.outfitTemplates = [];
	WARDROBE.outfitGameTemplates = [];
			
	att = {
		
		level: 0,
		expy: 0,
		
		power: 2, //POWER 2  
		profi: 0,
		
		class: 0, // 1 - harlot; 2 - hellion; 3 - fallen;
		race: 0, //
		
		str: 0,
		char: 0,		
		int: 0,
		dex: 0,
		
		hp: 220,
		eng: 440,
		
		collar : 0,
		
		tail: 1,
		
		wings: 0,
		ears: 1,
		
		hornsStyle: 1,
		hoofs: false,
		pupils: false,
		
		fantasyLips: null,
		irlLips: null,
		
		fantasyNails: null,
		irlNails: null,
		
		fantasyMascara: null,
		irlMascara: null,
	}
	
	
	mile = {}; //TODO
	
	mile.qaa = 0;
	mile.qbb = 0;
	mile.qcc = 0;
	
	mile.boobs1 = false; //has boobs bigger in metaverse
	mile.dick = 0; //Oral to the hacker
	mile.hacking_attempts = 0; //Hacking attempts
	mile.hacking = 0; //1 finished hacking herself; -1 gave up
	
	mile.forkill = 0; //Wants to kill the AI
	mile.cyberlesbo = 0; //Having fun with AI  -2 very no; 2 very yes;
	
	
	mile.deleted=0; //Deleted AI
	mile.class=0;//Game class
	
	mile.skit=0;//1st task skirt
	mile.conscience=0;//Was nice to Juraj
	mile.dungeon1=false;//1st dungeon finished
	mile.top=0; //top
	mile.advice1=0;//1st advice
	
	mile.boobs=0;
	
	
	mile.gf = 0;
	mile.domina = 0;
	mile.tg = 0;
	
	
	
	mile.ruler = false; //was punished with t ruler 
	mile.broken = false; //ruler broken
	
	mile.warning = 0; //she was warned 
	
	mile.burned = false; //told Juraj to fuck off
	
	mile.makeup = false;
	
	mile.potion = [];	
	for(let i = 0; i < POTION.elixir.length; i++){
		mile.potion[i] = false
	};

	thirdWeekSkipper  = 130; //TODO TEMPFIX

	mile.immersion = 0;
	mile.sub = 0;
	mile.slut = 0;
	
	setting = 0; //TODO?
	
	console.log("> DEFALUT VALUES INITIALISED");
}




function initiate_game_character(){ //CALLED DRUING CHARACTER CREATION
	PC.money = 5; //????
	
	//default
	att.char = 0;
	att.str = 0;
	att.int = 0;
	att.dex = 0;
	
	//class-based 
	if(att.class==1){ //harlot
		att.char++;
		att.char++;
		att.dex++;
		
		//att.alert = 2;
		att.power_base = 0;
	}else if(att.class==2){ //hellion
		att.str++;
		att.str++;
		att.dex++;
		
	//	att.alert = 0;
		att.power_base = 0;
	}else if(att.class==3){ //fallen
		att.int++;
		att.int++;
		att.char++;
		
	//	att.alert = 0;
		att.power_base = 2;
	};
	
	//based on background (origin story)
	if(att.back==1){
		att.char++;
	}else if(att.back==2){
		att.str++;
	}else if(att.back==3){
		att.int++;
	}else if(att.back==4){
		att.dex++;
	};	
		
		
//TODO
if(debug)att.power_base = 2;
	
	att.weapon=0;
			
			att.hp_base=20; //TEMP ASAP
			att.eng_base=30;
			
			if(att.class==1){
				att.hp_base = 30;  //30 ?? 20 ??
				att.eng_base = 30;
			}else if(att.class==2){
				att.hp_base = 30; 
				att.eng_base = 20;
			}else if(att.class==3){
				att.hp_base = 20; 
				att.eng_base = 30;
			};
			
			att.hp = att.hp_base;
			att.eng = att.eng_base;
			att.power = att.power_base;
	/*
	att.primary = 1;
	att.secondary = 1;
	
	
	
	mile.taurmorna_seed=Math.floor(Math.random()*1000);
	*/
	/*
	
	//harlot
	clothes.corset.dh_hue=313;
	
	clothes.garter.dh_hue=335;
	clothes.garter.dh_satur=40;
	clothes.garter.dh_light=60;
	clothes.garter.dh_alpha=0.9;

	//hellion default colours
	clothes.barBra.highlight = "hsla(34, 80%, 15%, 1)";
	clothes.barBra.stroke= "hsla(101, 80%, 10%, 1)";
	clothes.barBra.fill= "hsla(33, 54%, 39%, 1)";
			
	clothes.loincloth.fill = "hsla(33, 54%, 39%, 1)";
	clothes.loincloth.stroke = "hsla(33, 44%, 20%, 1)";
	clothes.loincloth.highlight = "hsla(34, 80%, 15%, 1)";	
	
	//fallen default colours
	//dark
		clothes.gloves.fill="hsla(335, 50%, 10%, 1)";
		clothes.anklet.fill="hsla(335, 50%, 10%, 1)";
		clothes.gloves.stroke="hsla(335, 50%, 0%, 1)";
		clothes.anklet.stroke="hsla(335, 50%, 0%, 1)";
		clothes.fallDress.highlight="hsla(335, 50%, 10%, 1)";
	//purple
		clothes.fallDress.fill="hsla(299, 50%, 40%, 1)";
		clothes.fallDress.stroke="hsla(298, 50%, 30%, 1)";
	*/	
	
	//setting=3;// should be already this, just to be sure 
	//save_setting();	
};



//TEST
document.getElementById("test_clothes").addEventListener("click",function(){
	//console.log("TEX")
	
	WARDROBE.strip();
	WARDROBE.dressUp("bra","thong","minidress");
	//WARDROBE.dressUp("minidress");
	WARDROBE.draw();
}, false);



//TEST
document.getElementById("test_button").addEventListener("click",function(){
	//úPC.money += 100;
	EDIT.makeup();
}, false);


//TEST
/*
document.getElementById("settings_button").addEventListener("click",function(){
	
	SETTINGS.start(true);
}, false);
*/




//INVENTORY
document.getElementById("inventory_button").addEventListener("click",function(){
	function back(){
/*		if(!PC.weapon || !PC.weapon.slot)PC.weapon = {
			name: "fist", attack: 1,
		};
*/
		div_text.style.display="block";
		div_subtext.style.display="none"
	//	console.log(inventory);
	};
	
	if(PC.weapon && !PC.weapon.slot)PC.weapon = void 0; //TODO- DUNNO IF REMOVE OR KEEP , maybe should be checked in wardreobe
	div_text.style.display="none";
	div_subtext.style.display="block"
	WARDROBE.inventoryTest(PC,gameInventory,"div_subtext",back);	
}, false);




function wardrobeAuto(backContent,backInput){
	morgen.nightie_off()
	/*let item;
	if(backContent == "first"){
		if(false){
		}else{
			item = [];
			item[0] = {
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
			}
			item[1] = {
				slot: "upper",
				condition: (input) => {
					if(   input && ( input.dad == "wTubeTop" || input.dad == "wHalterTop" || (input.dad == "wTee" && input.armCoverage<0.4 && input.waistCoverage>0.6)  )   )return true;
					return false;
				}
			}
			item[2] = "panties";
			item[3] = {
				slot: "socks",
				condition: (input) => {
					if(input.blueprint ==  "Socks" || input.blueprint ==  "CuteSocks")return true;
					return false;
				}
			}
			item[4] = "earrings";
//TODO - INVENTORY!!!
		}
	}else if(backContent == "weekend"){
		item = ["upper"];
		item[item.length] = {
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
		}
		if(mile.slut>3){
			item[item.length] = {
				slot: "panties",
				condition: (input) => {
					if(input.blueprint == "Thong" || input.blueprint == "LowThong" || input.blueprint == "GString")return true;
					return false;
				}
			}
		}else{
			item[item.length] = "panties";
			item[item.length] = "bra";
		};
		item[item.length] = "earrings";
		
	}else if(backContent == "second"){
		if(false){
		}else{
			item = [];
			item[item.length] = "earrings";
			item[item.length] = {
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
			}
			item[item.length] = {
				slot: "upper",
				condition: (input) => {
					if(   input && ( input.dad == "wTubeTop" || input.dad == "wHalterTop" || (input.dad == "wTee" && input.armCoverage<0.4 && input.waistCoverage>0.6)  )   )return true;
					return false;
				}
			}
			item[item.length] = "panties";
			switch(mile.stockings){
				case 1: 
					item[item.length] = {
						slot: "socks",
						condition: (input) => {
							if(input.blueprint ==  "HighSocks" || input.blueprint ==  "BrightHighSocks")return true;
							return false;
						}
					}
					break;
				default:
				case 2: 
					item[item.length] = {
						slot: "socks",
						condition: (input) => {
							if(input.blueprint ==  "StockingsFishnet" || input.blueprint ==  "GarterStockingsFishnet")return true;
							return false;
						}
					}
					break;
				case 3: 
					item[item.length] = {
						slot: "socks",
						condition: (input) => {
							if(input.blueprint ==  "GarterStockingsFishnet" || input.blueprint ==  "GarterStockingsPoly" || input.blueprint ==  "GarterStockings")return true;
							return false;
						}
					}
					break;
			}
		}
	}
	
	WARDROBE.randomOutfit(inventory,PC,...item);
	
	*/
	
	WARDROBE.randomOutfitFAI();
	main(backInput);
};




const morgen = (function(){ 
	 

	let nightie = false;
	const upper_1 = WARDROBE.create("Nightie");
	const upper_s = WARDROBE.create("SexyNightie");
	const panties_1 = WARDROBE.create("Briefs");
	const panties_s = WARDROBE.create("LowThong");
	panties_1.bow = true; 

	var outfit = {};
 

	function save_outfit(){
		let outfit = {};
		
		//console.log(outfit);
		
		const allSlots = WARDROBE.allSlots;
		for(let i=0; i<allSlots.length; i++){
			if(PC[allSlots[i]] && !PC[allSlots[i]].locked && !PC[allSlots[i]].piercing){
		//		console.log( allSlots[i] );
		//		console.log(PC[ allSlots[i] ] );
				
				outfit[ allSlots[i] ] = PC[ allSlots[i] ].seed;
			}
		};
		
		return outfit;
		/*
		console.log("xxx");
		console.log(outfit);
		
		alert("xAx");
		*/
	}

	function get_dressed(){
		morgen.nightie_off()
		const unp_inv = WARDROBE.unpackArray(inventory);
	
/*
	console.log(outfit)
console.log(this.outfit)	
console.log(morgen.outfit)	
*/
		outfit = morgen.outfit; //FUFUFUFUFUFUFUFUFUFUFUF
		for(slot in outfit){
			if( !PC[slot] || ( !PC[slot].locked && !PC[slot].piercing)  ){
			for(let i=0; i<unp_inv.length; i++){
				if(unp_inv[i].slot == slot && unp_inv[i].seed == outfit[slot]){
						PC[slot] = unp_inv[i];
						unp_inv.splice(i, 1);	
					};
				};
			};
		};
		WARDROBE.update();
	//	alert("M/OG")
	};

	function nightie_on(){
		
//console.log("NIGHTIE!!!!!");
		nightie = true;
		WARDROBE.softChangeOutfit("none",PC,inventory); //USUALLY IN EFFECT 
		
		if(mile.slut>7){
			WARDROBE.wear(upper_s, PC);
		}else{
			WARDROBE.wear(upper_1, PC);
		};
		
		if(mile.slut > 10){
		
		}else if(mile.slut>4){
			WARDROBE.wear(panties_s, PC);
		}else{
			WARDROBE.wear(panties_1, PC);
		};
		
	//	console.log(panties_1)
	};

	function nightie_off(){
		if(!nightie) return;
		nightie = false;
		//WARDROBE.softChangeoutfit("Night",PC,inventory); //USUALLY IN EFFECT 
		WARDROBE.remove("upper");
		WARDROBE.remove("panties");
	};

	function one(chapterName,newScene){
//console.log("-----------newScene")
	//	console.log(newScene)
	//	console.log("n"+newScene)
		//to ensure fucking compatibility between versions 
		if(typeof mile.makeup == "undefined" ) mile.makeup = true;
		
//console.log("active SCENE"+active_scene)		
//console.log(typeof active_scene)		
//console.log("s888888888888888888888888888sssssssssssssssssssssssssssssssssssssssssssss")
		if(typeof newScene === "undefined") 	newScene = active_scene + 1;
	//		console.log("aaaaaaaaaaaaaaaxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
	//		console.log("a"+active_scene)
	//		console.log(active_scene)
		
	//		console.log(active_scene)
	//	}else{
//			console.log("ASXASDFxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//			console.log(newScene)
//			console.log(active_scene)
	//	};
//console.log("sxxdfasdfawefmwapefmawpemfapwefawefsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")

		set.newday();
		set.chapter(chapterName);
		set.irl();
		
		nightie_on();
//console.log("NEW avSCENE"+newScene)		
//console.log("NEW X SCENE"+newScene)
//link("go ",newScene );
		if(mile.makeup) link("Makeup. ",newScene, () => EDIT.makeup() );
		if(Object.entries(morgen.outfit).length !== 0) link("Get dressed. ",newScene, get_dressed);	
		link("Wardrobe. ",null, () => wardrobeWrapper(content,newScene) );
		link("Random outfit.  ",null, () => wardrobeAuto(content,newScene) );
		
	};

	function two(newScene){
		if(typeof newScene === "undefined")newScene = active_scene+1;
		let cont = true;
		if(nightie){
			cont = false
			imp("I cannot go to school just in my nightie!");
		}else if(!PC.upper){
			cont = false
			imp("I cannot go to school without a shirt or top!");
		};
		if(!PC.lower && !(PC.upper && PC.upper.slot == "upperLower") ){
			cont = false
			imp("I cannot go to school without a skirt or pants! ");
		};
		if(!PC.panties){
			if(mile.slut<2){
				cont = false
				imp("I cannot go to school without panties! ");
			}else if(mile.slut<5){
				txt("I do not feel comfortable to go to school without panties!")
			}
		}else if(mile.slut>10){
			txt("I would feel more comfortable without any panties! ")
		};
		
		if(mile.makeup) link("Makeup. ",active_scene, () => EDIT.makeup() );

//console.log("asdfasdf")
//console.log(morgen.outfit)
	//	if(Object.entries(morgen.outfit).length !== 0) link("Get dressed",null, get_dressed);	
		link("Wardrobe. ",null, () => wardrobeWrapper(content,active_scene) );
		link("Random outfit. ",null, () => wardrobeAuto(content,active_scene) );
		link("Go to school. ",newScene,()=>{ 
		/*	
			console.log(outfit);
			console.log(this.outfit);
			console.log(morgen.outfit);
		*/	
			this.outfit = save_outfit();
	 
		},cont); 
		 
	};
	
	 
	return{
	 
		outfit,
		one,
		two,
		nightie_off,
		nightie_on,
		
	};

})();













	
	
	
function wardrobeWrapper(backContent,backInput){
	morgen.nightie_off()
	
	if(backContent)counter.backContent = backContent;
	if(backInput)counter.backInput = backInput; 
	
	WARDROBE.inventoryTest(PC,inventory,"div_subtext",back);
		
	function back(){
		let cont = true;
		let text = "";
	/*	
		if(!PC.upper){
			cont = false
			text+="<div class=\"speech kate\" >I cannot go to the school without some shirt or top!</div> ";
		}
		if(!PC.lower && PC.upper && PC.upper.slot != "upperLower"){
			cont = false
			text+="<div class=\"speech kate\" >I cannot go to the school without some skirt or pants!</div> ";
		}
	*/	
		if(cont){
			set.skipBack();
		}else{
			text += "<div class=\"link\" onclick=\"wardrobeWrapper()\">Wardrobe</div>"
			div_text.innerHTML = text;
		}
	
	};
}



//INVENTORY
/*
document.getElementById("trade_button").addEventListener("click",function(){
	function back(){
		div_text.style.display="block";
		div_subtext.style.display="none"
		console.log(inventory);
		console.log(merchant);
		
		
	};
	
//	let merchant = WARDROBE.createMultiplePacked([3,"halterTop"],[3,"dress"]);
	
//	let merchant = WARDROBE.createMultiplePacked([2,"LeatherBelt"],[2,"MetalBelt"],[3,"BarbaricBra"],[3,"FancyBarbaricBra"],[4,"BarbaricLoincloth"],[4,"FancyBarbaricLoincloth"]);
		
		
//	let merchant = WARDROBE.createMultiplePacked([3,"Bra"],[2,"FantasyThong"],[2,"Panties"],[4,"HarlotTop"],[4,"HarlotCorset"],[5,"HarlotSkirt"],[5,"HarlotStockings"]);
	
	//let merchant = WARDROBE.createMultiplePacked([2,["elixir",1]],"randomElixir","randomElixir",[3,"Falchion"],[3,"Staff"],[8,"Gorget"],[8,"FallenTop"],[8,"FallenLoincloth"]);
	
	let merchant = WARDROBE.createMultiplePacked([3,"BronzeGreaves"],[3,"SteelGreaves"],[3,"BronzeVambraces"],[3,"SteelVambraces"],[3,"Gorget"],
	[3,"LongGloves"],[3,"LeatherBelt"],[3,"MetalBelt"],
	[3,"LeatherLeggins"],[3,"LeatherArmor"],[3,"FancyLeatherArmor"])

	div_text.style.display="none";
	div_subtext.style.display="block"
	WARDROBE.inventoryTest(PC,inventory,"div_subtext",back,merchant);	
}, false);

*/

//CONTENT
if(!debug) document.getElementById("content_button").style.display = "none";
document.getElementById("content_button").addEventListener("click",function(){
	set.skip("INDEX",101,content,active_scene);
}, false);

//WALKTHROUGH
if(!debug) document.getElementById("walk_button").style.display = "none";
document.getElementById("walk_button").addEventListener("click",function(){
	WALK.start();
}, false);




//DISPLAY
document.getElementById("display_button").addEventListener("click",function(){
	if(WARDROBE.display.bust){
		//console.log("b")
		WARDROBE.rebuild();		
	}else{
		//console.log("bb")
		WARDROBE.rebuildBust();
	};
	WARDROBE.draw();
}, false);

//TRANSPARENT
document.getElementById("transparent_button").addEventListener("click",function(){
	//console.log("try")
	WARDROBE.display.transparent = !WARDROBE.display.transparent;
	//console.log(WARDROBE.display.transparent);
	WARDROBE.update();
}, false);


//MENU
document.getElementById("menu_button").addEventListener("click",function(){
	MENU.start();
}, false);

const MENU = (function(){ 
	
	
	
	
	function end(){
		DISPLAY.text();
		
	};
		
		
	function link(name,fce,where){
		let temp = document.createElement("DIV");
		temp.innerHTML = name;
	
		temp.classList.add("menu");
		if(where){
			where.appendChild(temp);
		}else{
			div_subtext.appendChild(temp);
		};
		temp.addEventListener("click",function(){
			fce();
		}, false);
	};
	
	
	function credits(){
		var content = `
			<p>The Game was made by me <strong>Dahakma</strong></p>
			
			<p>It was done for the <strong>Virtual Worlds Contest</strong>. It was a last-minute idea and that is why the plot really does not make sense.
			</p>
			
			<p>The game heavily uses amazing <a href=\"https://tfgamessite.com/index.php?module=viewgame&id=868\" class=\"click\" target=\"_blank\" >Dynamic Avatar Drawer</a>. 
			</p>
			
			<p> I also made the trivia quiz and bimbo-transformation sandbox <a href=\"https://tfgamessite.com/index.php?module=viewgame&id=1217\"  class=\"click\" target=\"_blank\">Who Wanna Be a Bimbo?</a> 
				and a pretty self-descriptive story <a href=\"https://tfgames.site/index.php?module=viewgame&id=2001" class=\"click\" target=\"_blank\">I Was Enslaved by an Evil Witch and Turned into Her Maid!</a></strong>. 
				Check them out!
			</p>
			
			<p>I also have a <a href=\"https://www.patreon.com/Dahakma\"  class=\"click\" target=\"_blank\">Patreon</a>. Pls back me, I am very broke. Patrons have access to a neat version with enabled cheating.
			</p>
			
			<p>
				A harlot character is inspired by the best lewd game I have ever played with great story, gameplay, characters and everything <span  class=\"click\">A Dance with Rogues</span>.
				Other my main inspirations are the awesome game with a great art and story <span  class=\"click\">Good Girl Gone Bad</span>
				and the story of blackmailed bitchy elven schoolgirl <span  class=\"click\">Adventures Of Tara</span>. 
				Finally, my current favourite game set in virtual reality is <a href=\"https://tfgames.site/index.php?module=viewgame&id=2033#" class=\"click\" target=\"_blank\">Healslut</a>. 
				
			</p>	
			
		`; 
		
		
/*			
			Another fun one is <span  class=\"click\">Fight Club</span>.
			The system w
			As a reference for a popular game with systems people seems to like I use
				
				(event though my system is obviously superior).
	*/
		div_subtext.innerHTML = content;
		link("Back",start);
	};
		
//			saving of outfits fixed	 


/*
<span class=\"title\">Build 0.8.41</span>
			<ul>
			<li>x names of NPCs could be changed in Settings
			<li>x exporting saves to file
			<li>x inventory improvements - scrollable, reverse search
			<lik>Get Dressed gets disabled after your start messing with clothes, it was easier than fixing it
			<li>outfits, makeup cleared after starting a new game
			<li>fixed tais, hoofs, wings disappearing after reload
			<li>fixed the first advice (when checking for pink hair, value was assigned not compared)
			</ul>
*/


	function changelog(){
		var content = ` <span class=\"menu\" onclick=\"MENU.start()\">Back</span>`;
		content += `
			
			
			
			<span class=\"title\">Version 0.8.39</span>
			<ul>
			<li>Weekend + Monday + Tuesday
			<li>
			<lik>Get Dressed gets disabled after your start messing with clothes, it was easier than fixing it
			<li>outfits, makeup cleared after starting a new game
			<li>fixed tais, hoofs, wings disappearing after reload
			<li>fixed the first advice (when checking for pink hair, value was assigned not compared)	
			</ul>
			
			
			<span class=\"title\">Build 0.8.39</span>
			<ul>
			<li>horrible chimera combining new content from 0.8.32 (Weekend + Monday + Tuesday), game improvements from 0.8.356 and essential bugfixes from 0.8.41
			</ul>
			
	
			<span class=\"title\">Version 0.8.356/Build 0.8.40</span>
			<ul>
			<li>hint system 
			<li>in the field for searching in the inventory added text <i>🔎 Seach</i> to make its purpose less enigmatic
			<li>puzzle game better implemented, skippable, I was not able to find exactly the bug which was causing it stuck which make me pretty anxious but I reworked all the things which might cause it
			<li><i>Valsyan Cavern</i> is skippable
			<li>when opened from the <i>Main menu</i>, <i>Back</i> in <i>Saves</i> returns to the Menu
			<li>fixed hair colour at the beginning 
			<li><i>Random Outfit</i> (renamed to <i>Random Clothes</i>) will not unequip locked items (ie vibrating panties)
			<li>the correct combination is displayed after failing the hacking minigame, I hope it will help people to feel bad about their failures
			<li>on hover explained how <i>Teasing</i> work
			<li>lowered difficulty (tweaked some numbers, ensured player playing on normal or lower difficulty acquires second level weapon in the first (rat) dungeon, beast (cavern) dexterity check lower, spiders are no longer poison-resistant, check to pretend to join the cult lowered, sorcerers healing abilities limited)
			<li>fixed bug which caused horrible deadly loop because accessing inventory restart the randomisation seed, shield or dodging ifreets/maarids spells did not work because it did not restarted his combat phrase
			</ul>
			
			<span class=\"title\">Version 0.8.353/0.8.363 </span>
			<ul>
			<li>fixed many typos
			<li>fixed some bugs (pink hair not consistently pink, loincloth moved in a layer above greaves, alchemyst in Westgard)
			</ul>
			
			<span class=\"title\">Version 0.8.35 </span>
			<ul>
			<li>first two weeks completely reworked
			<li>the story mostly stayed the same, order of some events was changed or they were slightly expanded 
			<li>completely new clothing system
			<li>completely new dungeon system
			</ul>
			
			
			<span class=\"title\">Build 0.8.34/0.8.36 </span>
			<ul>
			<li>attempt to balance dungeons somehow
			<li>cheating - on the easy difficulty it is checked whether you are running out of hp's and health potions and consequently more are dropped as loot 
			<li>fixed some combat-related issues (poison not working etc. )
			<li>fixed oversight when the fatality of action was calculated when was the action written on screen not when taken (ie. extra hp gained by drinking health potion right before dashing through blades was ignored)
			<li><i>get dressed</i> choice - puts on the same clothes as yesterday
			<li>magic power is displayed in the inventory, hit points details displayed on mouse hover, fixed going into negative amounts of money
			<li>armor is a separate layer, could be combined with clothes
			<li>pant legs and sleeves are tucked into armor
			<li>fixed some minor issues with assets (broken bikini bottom etc.)
			<li>some messing with price and color of clothes in the game
			<li>changed font
			<li>at the beginning of a dungeon, there is an option to leave 
			<li>there is a chance I finally found the bug which caused losing clothes after reload
			</ul>
			
			<span class=\"title\">Build 0.8.32 </span>
			<ul>
			<li>some scenes for Tuesday and Wednesday
			<li>it could be displayed who is talking <small>(Settings > NPCS > Show names)</small>
			<li>avatar got nighties so she would not be nude in the morning
			</ul>
			
			<span class=\"title\">Build 0.8.30 </span>
			<ul>
			<li>Friday + Weekend + Monday
			<li>alternative to boobjob <small>(second advice, Matej)</small>
			<li>new dungeon Westgard Sewers 2 <small>(accessible during the second weekend, dungeons for the third weekend are not finished yet)</small>
			<li>DAD updated, shoes, corsets and gorgets fixed
			<li>potions rebalanced, some efects changed a bit, few new added
			<li>two new, bovinium <small>(actually minotaurium with boobs)</small> and felinum
			<li>fixed many potion and transformation related bugs 
			<li>some more messing with the save system, you can now <i>Save As</i> and change the name of the save,


			</ul>
			
			<span class=\"title\">Build 0.8.20 </span>
			<ul>
		
			<li>dungeons improved 
			<li>saving improved
			<li>added new dungeon Westgard Sewers 
			<li>price for skill checks is paid only when their fail 
			<li><i>Feroucious Attack</i> hits one more enemy but causes the half of the damage, new <i>Double Strike</i> does the full damage to two enemies
			<li>names of potions are revealed if you drink enough of them
			<li>Healt and Energy potions could be drink directly during combat 
			<li>poisoining + antivenom 
			<li>effect of <i>Tease</i> based on charisma, probability of <i>Danger Savvy</i> based on the number of enemies
			<li>improved saving (three autosaves, the latest save is detected, unlimited slots)
			<li>puzzle minigame improved
			<li>fixed css width of the right div
			<li>fixed (Random Apperance) being broken
			<li>fixed potion changing colours when reloaded
			<li>fixed bugged saving of game inventory
			<li>fixed lips transformation being broken
			<li>fixed colision of corset (leather armor) and belt
			<li>fixed buying and equiping itemps with right click not working
			<li>many tipos fixed 

			</ul>	
			<span class=\"title\">Build 0.8.11 </span>
			<ul>
			<li>fixed bugged piercings
			</ul>	
			<span class=\"title\">Build 0.8.10 </span>
			<ul>
			<li>some new content (meeting AI during the weekend, some missing Juraj's scenes, like week of new or rehashed content)
			<li>new armors, weapons rebalanced a bit, some prices changed
			<li>socks and jewellery 
			<li>added sorting in the inventory, items could be equiped while trading by right click
			<li>some good similar games mentioned in the Credits 
			</ul>
			
			<span class=\"title\">Build 0.8.00 </span>
			<ul>
			<li>user interface reworked
			<li>new version DAD and new reworked assets
			<li>new absolutely awesome inventory system
			<li>new scalable dungeon system
			<li>order of event reworked, some expanded a bit
			<li>character appearance could be adjusted
			<li>minigames accessible from the main menu
			<li>one new minigame (Crystals) and prototype of another
			
			</ul>
			<span class=\"title\"> 0.6.10 </span>
			<ul><li>fixed saving, it should work everywhere except dungeons, but that is okay because I will claim it is an anti-savescumming feature (actually my clothing and saving systems did not work together so I had to completely rework them a bit)<li>fixed countless other issues (following attempts to solve the letter after the first one were broken, broken links, Hellion's tattoo disappeared, etc.)
			</ul>
			<span class=\"title\"> 0.6.00 </span> 
			<ul><li>week of new content<li>including the second dungeon and the second minigame<li>the first dungeon reworked<li>fancier health bars<li>to the starting city added shop with basic clothes customisatin<li>rewritten intro<li>a lousy attempt to improve the main character motivation <li>reworked potions, added Minotaur transformation<li>included experimental version of procedural clothing generator<li>made saving system from scratch, it probably will not properly and you shall not trust it
			</ul>
			<span class=\"title\"> 0.5.00 </span>
			<ul><li>like day and half of new content<li>changed some colours for better readability, I hope<li>added succubi transformation effects<li>Kewins are now shuffled<li>hacking minigame made very slightly easier, there are 8 attempts instead of 7 and it could be skipped after the first game, not third 
			</ul>
	
		`; 

		div_subtext.innerHTML = content;
		link("Back",start);
	};
	
	
	
	function minigames(){
		//TO DO - TO div_main_menu, not subtext!		
		div_subtext.innerHTML = "";
		link("Hacking",hacking);
		link("Crystals",crystals);
		link("Puzzle",puzzle);
//		link("Letter",letter);
		//link("Dungeon tester (WIP)",dung);
		//link("The Lost City (WIP)",dung);
		if(debug)link("##Transformation tester",testlab);
		link("Back",start);
	};
	
	function dung(){
		MENU.end();
		WARDROBE.rebuild();
		initiate();
		//WARDROBE.draw();
		set.chapter("Dungeon Tester",100,"dung");
		//set.chapter("The Lost City",100,"lost");
	};
	
	function win(){
		div_subtext.innerHTML = "You won";
		link("Back",minigames);
	};
	
	function loss(){
		div_subtext.innerHTML = "You lost";
		link("Back",minigames);
	};
	
	/*
	function potions(){
		div_subtext.innerHTML = "";
		div_left.style.display="block";
		
		const container = document.createElement("DIV");
		container.style.display = "flex";
		container.style.flexDirection = "column";
		
		div_subtext.appendChild(container);
		
		let txt = "";
		for(let i=0; i<POTION.elixir.length; i++){
			txt += "<div class = \"bold\"> "+POTION.elixir[i].color+" </div>";
			for(let k=0; k<POTION.elixir[i].effect.length; k++){
				txt += "<div class = \"link\" onclick = \"POTION.use("+i+","+k+")\"> "+POTION.elixir[i].effect[k].name+" ("+POTION.elixir[i].effect[k].condit()+")</div>";
			};
		};
		container.innerHTML = txt;
		
		link("Back",
			(function(){ container.remove(); minigames(); })
		);
		
	};
	*/
	
	
	function testlab(){
		div_subtext.innerHTML = "";
		div_left.style.display="block";
		
		const container = document.createElement("DIV");
		container.style.display = "flex";
		container.style.flexDirection = "column";
		
		div_subtext.appendChild(container);
		
		let txt = "";
		for(let i=POTION.elixir.length-1; i>=0; i--){
			txt += "<div class = \"bold\"> "+POTION.elixir[i].name+" </div>";
			for(let k=0; k<POTION.elixir[i].effect.length; k++){
				txt += "<div class = \"link\" onclick = \"POTION.use("+i+","+k+"); MENU.testlab()\"> "+POTION.elixir[i].effect[k].name+" ("+POTION.elixir[i].effect[k].condit()+")</div>";
			};
		};
		container.innerHTML = txt;
		
		link("Back",
			(function(){ container.remove(); minigames(); div_left.style.display="none"; })
		);
		
	};
	
	
	
	function puzzle(){
		
		
		function selector(title,id,values){
			let txt = "<div class = \"slider_desc\">"+title+" ";
			txt +=  "<select id=\""+id+"\" name=\" "+id+" \">";
			for(let i=0; i<values.length; i++){
				txt += "<option value=\""+values[i]+"\">"+values[i]+"</option>"
				
			}
			txt += "</select></div>";
			//console.log(txt);
			return txt;
		};
			
			
		let content = "";
		content += selector("Rows ","rows",[1,2,3,4,5]);
		content += selector("Columns ","columns",[1,2,3,4,5]);
		div_subtext.innerHTML = content;	
		
		
		
		link("Start",(function(){
			let rowa = document.getElementById("rows").value;
			let cola = document.getElementById("columns").value;
			div_subtext.innerHTML = "";	
//	console.log(cola)
//	console.log(rowa)
			ARVAK.start( 
				win,
				loss,
				"div_subtext",
				rowa, cola
			);	
		}));
		link("Back",minigames);
		
		
	};
	
	
	
	function letter(){
		div_subtext.innerHTML = "";
		
		let text = [		
			"JABBERWOCKY",
			"",
			"TWAS BRILLIG AND THE SLITHY TOVES",
			"DID GYRE AND GIMBLE IN THE WABE",
			"ALL MIMSY WERE THE BOROGOVES",
			"AND THE MOME RATHS OUTGRABE",
			"",
			"BEWARE THE JABBERWOCK MY SON",
			"THE JAWS THAT BITE THE CLAWS THAT CATCH",
			"BEWARE THE JUBJUB BIRD AND SHUN",
			"THE FRUMIOUS BANDERSNATCH",
			"",
			"HE TOOK HIS VORPAL SWORD IN HAND",
			"LONG TIME THE MANXOME FOE HE SOUGHT",
			"SO RESTED HE BY THE TUMTUM TREE",
			"AND STOOD AWHILE IN THOUGHT",
		]
		
		text = [
			"CAT", 
			"CATS ARE SMALL CARNIVOROUS", 
			"MAMMALS OF THE FAMILY FELIDAE.",
			"DOMESTIC CATS ARE OFTEN CALLED ",
			"HOUSE CATS WHEN KEPT AS INDOOR PETS.",
			"THEY ARE ONE OF THE MOST", 
			"POPULAR PETS IN THE WORLD.",
			"THEIR ORIGIN IS PROBABLY",
			"THE AFRICAN WILDCAT.",
			"CATS WERE PROBABLY FIRST",
			"KEPT BECAUSE THEY ATE MICE.",
			"LATER THEY WERE KEPT BECAUSE",
			"THEY ARE FRIENDLY AND GOOD COMPANIONS.",
			"THE WORD CAT IS ALSO USED",
			"FOR OTHER FELINES",
			"THE BIG WILD CATS ARE LIONS",
			"TIGERS LEOPARDS JAGUARS PUMAS AND CHEETAHS.",
		]
	
		link("Start",(function(){
			div_subtext.innerHTML = "";	
			ABCDEF.start( 
				win,
				loss,
				text,
				"div_subtext",
			);	
		}));
		link("Back",minigames);
		
		
	};
	
	
	
	function tangram(){
		div_subtext.innerHTML = "";
		link("Start",(function(){
			div_subtext.innerHTML = "";	
			TANGRAM.start( 
				win,
				loss,
				"div_subtext",
			);	
		}));
		link("Back",minigames);
		
		
	};
	
	
	
	function hacking(){
		
		
		function selector(title,id,values){
			let txt = "<div class = \"slider_desc\">"+title+" ";
			txt +=  "<select id=\""+id+"\" name=\" "+id+" \">";
			for(let i=0; i<values.length; i++){
				txt += "<option value=\""+values[i]+"\">"+values[i]+"</option>"
				
			}
			txt += "</select></div>";
		//	console.log(txt);
			return txt;
		};
			
			
		let content = "";
		content += selector("Guessed numbers ","numbers",[4,2,3,5,6]);
		content += selector("Allowed attempts ","attempts",[7,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20]);
		div_subtext.innerHTML = content;	
		
		
		
		link("Start",(function(){
			let num = document.getElementById("numbers").value;
			let ate = document.getElementById("attempts").value;
			div_subtext.innerHTML = "";	
			BULL.start( 
				win,
				loss,
				"div_subtext",
				num,ate
			);	
		}));
		link("Back",minigames);
		
		
	};
	
	function crystals(){
		
		
		function selector(title,id,values){
			let txt = "<div class = \"slider_desc\">"+title+" ";
			txt +=  "<select id=\""+id+"\" name=\" "+id+" \">";
			for(let i=0; i<values.length; i++){
				txt += "<option value=\""+values[i]+"\">"+values[i]+"</option>"
				
			}
			txt += "</select></div>";
		//	console.log(txt);
			return txt;
		};
			
			
		let content = "";
		content += selector("Guessed crystal ","crystals",[5,2,3,4,6,7,8]);
		content += selector("Available colors ","colors",[5,2,3,4,6,7]);
		content += selector("Difficulty increase ","increase",[2,1,3,4]);
		div_subtext.innerHTML = content;	
		
		
		
		link("Start",(function(){
			let cry = document.getElementById("crystals").value;
			let col = document.getElementById("colors").value;
			let inc = document.getElementById("increase").value;
			div_subtext.innerHTML = "";	
			CRYSTAL.start( 
				win,
				loss,
				"div_subtext",
				cry, col, inc
			);	
		}));
		link("Back",minigames);
		
		
	};
	
	
	
	
	
	function start(){
		DISPLAY.subtextOnly();
		
		div_subtext.innerHTML = "";

		const container = document.createElement("DIV");
		container.id = "div_main_menu";
		div_subtext.appendChild(container);
	

	if(PC.name){
		link("CONTINUE",MENU.end,container);
		link("New Game",() => {
			MENU.end();
			WARDROBE.rebuild();
			initiate();
			WARDROBE.draw();
			DISPLAY.notGame();					
			set.chapter("The Party",100,"intro");
		},container);
		link("Load",SAVE.start,container);
	}else{
		link("NEW GAME",() => {
			MENU.end();
			WARDROBE.rebuild();
			initiate();
			WARDROBE.draw();
			set.chapter("The Party",100,"intro");
		},container);
		link("Load",SAVE.start,container);
	}
	
		link("Settings",SETTINGS.start,container);
		link("Minigames",minigames,container);
		link("Credits",credits,container);
		link("Changelog",changelog,container);
		
//TO DO - TO div_main_menu, not subtext!		
//var content = `<div id=\"div_main_menu\">`;	
		
	
		//var content = `<div id=\"div_main_menu\">`;

	/*
TO DO - DONT DELETE YET !!

		 
		if( true ){ //ACTIVE GAME IS IN PROGRESS
			 content += ` <div class=\"menu\" onclick=\"MENU.end()\">BACK</div> `;
			 content += ` <div class=\"menu\" onclick=\"MENU.end()\">New Game</div> `;
		}else if( localStorage.getItem("FAI_MENU_0") ){ //AUTOSAVE CAN BE LOADED 
			 //TO DO - load autoMENU
			 content += ` <div class=\"menu\" onclick=\"MENU.end()\">CONTINUE</div> `;
			 content += ` <div class=\"menu\" onclick=\"MENU.end()\">New Game</div> `;
		}else{
			content += ` <div class=\"menu\" onclick=\"MENU.end()\">NEW GAME</div> `;
		};
		
		
		
		content += ` <div class=\"menu\" onclick=\"SETTINGS.start(0)\">Settings</div> `;
		content += ` <div class=\"menu\" onclick=\"MENU.minigames()\">Minigames</div> `;
		
		content += ` <div class=\"menu\" onclick=\"MENU.credits()\">Credits</div> `;
		content += ` <div class=\"menu\" onclick=\"MENU.changelog()\">Changelog</div> `;
		
		content += `</div>`;
		
		div_subtext.innerHTML = content;
		*/
	};


	
	
	
	return{
		start,
		end,
		credits,
		changelog,
		testlab,
	};

})();


//SAVING
document.getElementById("save_button").addEventListener("click",function(){
	SAVE.start(true);
}, false); 



/**
	to swap into other games change:
	- GAMEKEY
	//where will be the gui displayed:
	- start()
	- end()
	//what variables should be actually saved/loaded:
	- save_actual()
	- load_actual()
	
	usage:
	SAVE.start() - displays the save menu
	SAVE.autosave() - automatic save without opening the menu
	SAVE.autoload(alternative) - loads the latest saved (or triggers the alternative function if there is none)
	
*/
const SAVE = (function(){ 
	const GAMEKEY = "FAI8"; //local storage game saving key
	const default_savingSlots = 15;
	let SAVENAME; //the name of the save, changed in start();
	let calledFromGame = false;
	
	//number of actually used slots is saved in locals storage
	let slots = default_savingSlots;
	if( !localStorage.getItem(GAMEKEY+"_savingSlots") ){
		localStorage.setItem(GAMEKEY+"_savingSlots",slots);
	}else{
		slots = localStorage.getItem(GAMEKEY+"_savingSlots");
	};
	
	//autosaves; there are three autosaves 
	function autosave(){
		//first moves older autosaves
		const older_save = localStorage.getItem(GAMEKEY+"_SAVE_"+1);
		if(older_save){
			localStorage.setItem(GAMEKEY+"_SAVE_"+2,older_save);
		}
		const old_save = localStorage.getItem(GAMEKEY+"_SAVE_"+0);
		if(old_save){
			localStorage.setItem(GAMEKEY+"_SAVE_"+1,old_save);
		}
		save(0);
		end(true);
	}	
	
	//deletes save
	function remove(index){
		localStorage.removeItem(GAMEKEY+"_SAVE_"+index);
		start();
	};
	
	//closes the save menu and returns to the game
	function end(trig){
		if(calledFromGame || trig){
			DISPLAY.text(); //returns to game
		}else{
			MENU.start(); //returns to menu
		};
	};
	
	//displays the save menu
	function start(trig){
		calledFromGame = trig;
		DISPLAY.subtext();
		SAVENAME = chapter_name;
		div_subtext.innerHTML = menu();
	};
	
	//loads the latest autosave or starts the game if there is none
	//alternative - alternative function which will be triggered in case there is no save () 
	function autoload(alternative){
		const index = latest();
		if(index==-1 && alternative){
			alternative();
		}else{
			try {
				load(index);
			}catch(err) {
				alternative();
			};
		};
	};
	
	//return the index of the latest save 
	function latest(){
		let index = -1;
		let index_date = 0;
		for(let i=0; i <= slots; i++){
			let save = localStorage.getItem(GAMEKEY+"_SAVE_"+i)
			if(!save)continue;
			save = save.split("|"); 
			let date = parseInt( save[1] );
			
			if(date>index_date){
				index = i;
				index_date = date;
			};
		};
		return index;
	};
	
	
	function menu(){
		//recalculate the number of slots
		if(  localStorage.getItem(GAMEKEY+"_SAVE_"+slots)  ){
			slots++;
		}else{
			while(   slots > 15 && !localStorage.getItem(GAMEKEY+"_SAVE_"+slots) && !localStorage.getItem(GAMEKEY+"_SAVE_"+(slots-1) )   ){
				slots--;	
			}
		};
		localStorage.setItem(GAMEKEY+"_savingSlots",slots);

		//head
		var content = `
			<table id=\"tab_saves\">
			<span class=\"savebutton\" onclick=\"SAVE.end()\">Back</span>
		`;
				 
		
	
		function load_slot(index,before = "", after = "", allowDelete = true){
			let save = localStorage.getItem(GAMEKEY+"_SAVE_"+index)
			save = save.split("|"); 
			date = new Date(  parseInt( save[1] )  );
			name = save[0];

			content += `
				<tr>
				<td> ${before} ${name} ${after} <br><small> ${ date.toLocaleTimeString() } /  ${ date.toLocaleDateString() } <small></td>
				<td><span class=\"savebutton\" onclick=\"SAVE.load( ${index} )\">Load</span></td>
			`;
			
			if(allowDelete){
				content += `
					<td><span class=\"savebutton\" onclick=\"SAVE.remove( ${index} )\">Delete</span></td>
					</tr>
				`;
			}else{
				content += `<td></td></tr>`;
			}
		}
		
		function save_slot(index){
			content += `
				<tr>
				<td> ${index-2} - Empty -</td>
				<td><span class=\"savebutton\" onclick=\"SAVE.save( ${index} )\">Save</span></td>
				<td><span class=\"savebutton\" onclick=\"SAVE.save_as( ${index} )\">Save As</span></td>
				</tr>
			`;		
		}
		
		//latest savegame
		const last = latest();
		if(last!=-1){
			if(last<3){
				load_slot(last,"LATEST: ","(Autosave "+(last+1)+")",false);
			}else{
				load_slot(last,"LATEST: "+(last-2),"",false);
			
			};
		};
		
		//autosaves
		for(let i=0;i<3;i++){
			if(localStorage.getItem(GAMEKEY+"_SAVE_"+i)) load_slot(i,"","(Autosave "+(i+1)+")",false);
		};
		
		//regular slots 
		for(let i=3; i <= slots; i++){
			if(!localStorage.getItem(GAMEKEY+"_SAVE_"+i)){
				save_slot(i);
			}else{
				load_slot(i,(i-2)+". ");
			};
		};
		
		//heel
		content += `
			</table>
			<span class=\"savebutton\" onclick=\"SAVE.scroll(); SAVE.end()\">Back</span>
			
			
		`;
		
		 return content;
	};

//<span class=\"savebutton\" onclick=\"SAVE.export_to_file()\">Export to file (experimental)</span>
//<span class=\"savebutton\" onclick=\"SAVE.import_from_file()\">Import from file (experimental)</span>
			
	 
	function scroll(){
		//scrolls to the top
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome a Firefox
	};
	
	function save_as(index){
		var name = prompt("",SAVENAME);
		if (name != null) {
			save(index,name)
		}else{
			save(index);
		}
	};
	
	
	function save(index,name){
		start(calledFromGame); //TODO - TRIGGERED ONLY BECAUSE I NEED  "SAVENAME" FOR AUTOSAVES 
		if(!name)name = SAVENAME;
		
		const date = new Date().valueOf();
		const result = name+"|"+date+"|"+ JSON.stringify( saveActual() );
				
		localStorage.setItem(GAMEKEY+"_SAVE_"+index,result);
		
		console.log("> SAVED:"); //SIC
		console.log(result);//SIC
 	
		start(calledFromGame);
	};
	
	
	
	function load(index){
		var save = localStorage.getItem(GAMEKEY+"_SAVE_"+index)
		save = save.split("|"); 
		save = JSON.parse( save[2] );
		
		console.log("> LOADED:"); //SIC
		console.log(save); //SIC
		
		loadActual(save)
		
		
		
		end(true);
	};


	function saveActual(){
	//	alert("save");
	//	alert(PC.Mods.feetWidth);
		WARDROBE.showLess(0,0); //TODO - CHECK IF THIS IS NECESSARY
		//THE IDEA IS THAT THE DIMENSIONS CHANGED BY CLOTHES (ESPECIALLY HEELS) ARE NOT SAVED
	//	alert(PC.Mods.feetWidth);
	
		function round(number){
			return Math.round(number * 100) / 100
		};
		
		function pc2string(active,dummy){
			const temp= {};
			for (let key in active){
				if( round(active[key]) != round(dummy[key]) ) temp[key] = round(active[key]);
			};
			return temp;
		};
		
		const dummy = WARDROBE.createCharacter(PC.seed,PC.bias,PC.randomness); 
		
		
	//	alert(dummy.Mods.feetWidth);
		
		let result = {
			
			name: PC.name,
			version: version,
			
			
			chapter: chapter_name,
			content: content,
			day: day,
			scene: active_scene,
			setting: setting,
			
			gameSeed: SEED,
			characterSeed: PC.seed,
			
			basedim: pc2string(PC.basedim,dummy.basedim),
			pc: pc2string(PC.Mods,dummy.Mods),
			irl: pc2string(PCIRL.Mods,dummy.Mods),
			meta: pc2string(PCMETA.Mods,dummy.Mods),
			game: pc2string(PCGAME.Mods,dummy.Mods),
			
			pcWorn: WARDROBE.packWorn(PC),
			irlWorn: PCIRL.worn,
			metaWorn: PCMETA.worn,
			gameWorn: PCGAME.worn,
			
			money: PC.money,
			inventory: inventory,
			gameInventory: gameInventory,
			
			warStorage: WARDROBE.temporaryStorage,
			warTemplates: WARDROBE.outfitTemplates,
			warGameTemplates: WARDROBE.outfitGameTemplates,
			
			morgen_outfit: morgen.outfit ,
			
			mile: mile,
			att: att,
			counter: counter,
			
		};
		
	//console.log("irlWorn");	
	//	console.log(result.irlWorn);	
	
		if(DUNGEON.active){
			result.dungeon = DUNGEON.active;
			result.dungeon_seed = DUNGEON.seed;
			result.dungeon_content = DUNGEON.backContent;
			result.dungeon_input = DUNGEON.backInput;
			result.dungeon_cancel = DUNGEON.backCancel;
			result.dungeon_progress = DUNGEON.progress;
			result.dungeon_money = DUNGEON.original_money;
			result.dungeon_inventory = DUNGEON.original_inventory;
			result.dungeon_stats = STATS.save();
		}
		
		WARDROBE.showAll(); //TODO
		
		return result;
	}
	
	function loadActual(save){
		//alert("load");
		
		
		SEED = save.gameSeed;
		
		initiate(SEED); // !!!
		
		PC.name = save.name;
			
		WARDROBE.updateMods(PC,{Mods:save.pc});
		WARDROBE.updateMods(PCIRL,{Mods:save.irl});
		WARDROBE.updateMods(PCMETA,{Mods:save.meta});
		WARDROBE.updateMods(PCGAME,{Mods:save.game});
	
		//alert(PC.Mods.feetWidth);
		
		active_scene = save.scene;
		chapter_name = save.chapter;
		content = save.content;
		day = save.day;
		active_scene = save.scene;

//console.log("save.irlWorn");
//console.log(save.irlWorn);

		PCGAME.worn = save.gameWorn;
		PCIRL.worn = save.irlWorn; 
		PCMETA.worn = save.metaWorn;
/*
console.log("xxx0----------")
console.log(save.gameWorn)
console.log(PCGAME.worn)	
*/				
		PC.money = save.money;
		
		inventory = save.inventory;
		gameInventory = save.gameInventory;
			
		WARDROBE.temporaryStorage = save.warStorage;
		WARDROBE.outfitTemplates = save.warTemplates;
		WARDROBE.outfitGameTemplates = save.warGameTemplates; 

//console.log(save.morgen_outfit)
//alert();
		if(save.morgen_outfit) morgen.outfit = save.morgen_outfit;
		
		mile = save.mile;
		att = save.att;
		counter = save.counter;

console.log("xxx1----------")
console.log(PCGAME.worn)	

		//FIX
		if(!gameInventory)gameInventory=[];
/*

if(att.level==6){		
	if(att.class==2)att.double = true;l
}else if(att.level==11){		
	if(att.class==2)att.pois = true;
}

*/		
	
		setting = save.setting;
		


		
		if(save.dungeon){
			set.resetGame();
		}else{
			switch(save.setting){
				case 0: set.irl(); break;
				case 1: set.meta(); break;
				case 2: set.game(); break;
			}
		};
		//alert("Setting");
		//alert(PC.Mods.feetWidth);
	
console.log("xxx2----------")
console.log(PCGAME.worn)	

		
		WARDROBE.updateMods(PC,{Mods:save.pc});
		
		//alert("Updated Mods");
		//alert(PC.Mods.feetWidth);
	
	
		WARDROBE.unpackWear(save.pcWorn,PC);
	
		//alert("Wear");
		//alert(PC.Mods.feetWidth);
		
		
		if(save.dungeon){
//console.log("sa du")
			DUNGEON.recreate(save.dungeon,save.dungeon_content,save.dungeon_input,save.dungeon_cancel,save.dungeon_seed,save.dungeon_progress,save.dungeon_inventory,save.dungeon_money,save.dungeon_stats);
		}else{
//console.log("main")
			main(active_scene); 
		};
		
		//alert(PC.Mods.feetWidth);
	}
	
	
	
	//Basically appropriate code from https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
	//I dont even understand how blops and urls work
	const separator = "||";
	
	function export_to_file(){
		
		const head = "FAI" + version + separator + " save file of Fake AI " + version + " by Dahakma " + separator;
		const time = "temp" + separator
		let all_games = "";
		for(let i = 0; i < slots; i++){
			all_games += localStorage.getItem(GAMEKEY+"_SAVE_"+i);
			all_games += separator;
		};
		
	//localStorage.getItem("FAI8_SAVE_80");	
		
		const file_content = head + time + all_games;
		
		console.log(file_content);
	//	const file_name = prompt("Please enter the name","Save_0");
		const date = new Date().valueOf();
		const file_name = "Fake AI Saves "+date;
		
		const textToSaveAsBlob = new Blob([file_content], {type:"text/plain"}); //creates blob or something
		const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob); //creates url or something

		const download_link = document.createElement("a"); //creates invisible download link and clicks on it
		Object.assign(download_link,{
			download: file_name,
			innerHTML: "Download File",
			href: textToSaveAsURL,
			onclick: destroyClickedElement,
		});	
		download_link.style.display = "none";
		document.body.appendChild(download_link);
		download_link.click();
		
		
		start();
	};


	function import_from_file(){
		const pick_file = document.createElement("input");
		pick_file.type = "file";
		pick_file.id = "id_load";
		pick_file.style.display = "none";
		document.body.appendChild(pick_file);	
	
		pick_file.oninput = (e)=> {
			const fileToLoad = document.getElementById("id_load").files[0];
	 		const fileReader = new FileReader();
			fileReader.onload = function(fileLoadedEvent) {
				const textFromFileLoaded = fileLoadedEvent.target.result;
				
				//console.log(textFromFileLoaded);
				
				
				const save = textFromFileLoaded.split(separator);
				
					console.log(save);
					
				if(save[0].slice(0,3) != "FAI") return alert("Incompatible file! ");
				
				
			
				//	0 - FAIVESION
				//	1 - Fake AI by Dahakma
				//	2 - Time
				
				for(let i = 3; i < save.length; i++){
					console.log(i);
					console.log(save[i]);
					if(save[i] !== "null"){
						localStorage.setItem(GAMEKEY+"_SAVE_"+i,save[i]);
						console.log("Done");
					};
				};
				
				slots = save.length;
				
				start();
				
				//document.getElementById("inputTextToSave").value = textFromFileLoaded;
			};
			fileReader.readAsText(fileToLoad, "UTF-8");
		};
		
		pick_file.click();
		
		//TODO REMOVE
		
		
		
	};



	function destroyClickedElement(event){
		document.body.removeChild(event.target);
	}

	return{
		remove,
		end,
		start,
		save,
		load,
		autosave,
		autoload,
		save_as,
		scroll,
		
		export_to_file,
		import_from_file,
	};

})();




//TODO - REALLY HORRIBLE CODE AHEAD
const WALK = (function(){ 
	function end(){
		DISPLAY.text();
	};
	
	
	function start(){
		container = div_subtext;
		container.innerHTML = "";
		DISPLAY.subtext();
		link("STATS",stats);
		
		link("Potion",potion);
		link("Weapons",weapons);
		link("Armor",armor);
		
		//link("Submissiveness",sub);
		//link("Sluttiness",slut);
		
		link("Back",end);
	}
	
/*
I am the coolest and the third most popular girt at the school. 
I am cool and popular despite some gossips about my recent fashion choices. 

Nobody knows the true meaning of the collar I am forced to wear but my friends it looks ***
My friends thinks my pink hair are dumb. 

Everybody in the school seen my topless pictures! 


*/	


	function stats(){
		let text = ``;
		text += "<div class=\"title\"; WALK.stats()\">SLUTTINESS: "+mile.slut+"</div>";
		text += "<div class=\"link\" onclick=\"mile.slut++; WALK.stats()\"> + </div>";
		text += "<div class=\"link\" onclick=\"mile.slut--; WALK.stats()\"> - </div>";
		text += "<div class=\"link\" onclick=\"mile.slut = 16; WALK.stats()\"> max </div>";
		text += "<div class=\"link\" onclick=\"mile.slut = -3; WALK.stats()\"> min </div>";
		
		text += "<div class=\"title\"; WALK.stats()\">SUBMISSIVENESS: "+mile.sub+"</div>";
		text += "<div class=\"link\" onclick=\"mile.sub++; WALK.stats()\"> + </div>";
		text += "<div class=\"link\" onclick=\"mile.sub--; WALK.stats()\"> - </div>";
		text += "<div class=\"link\" onclick=\"mile.sub = 13; WALK.stats()\"> max </div>";
		text += "<div class=\"link\" onclick=\"mile.sub = -13; WALK.stats()\"> min </div>";
		
		container.innerHTML = text;
		link("Back",start);
	};
	
	
//mile.slut	
	function slut(){
		const text = `
			SLUTTINESS
			<ul>
			<li>INTRO (0 / 3; actual 0 / 2)
			<li> + Sucks hackers dick
			<li> + Making out with AI without protesting 
			<li> + Shamelessly undress in front of CCC /???

			
			<li>FIRST WEEK (-1 / 5; total:  -1 / 8; actual: 0 / 2; tot actual: 0 / 4) 
			<li> >= 1 Allows extremely short skirt
			<li> + Extremely short skirt
			<li> + Monday choice masturbate
			<li> + Loves / - Hates vibrating panties
			<li> >2 Option to seduce teacher
			<li> + Seduces teacher
			<li> + Sex with teacher
		<li> >5 Licks teachers cum
		<li> <3 prefers less sluty makeup
		

			<li>WEEKEND (0/ 2; total: -1 / 10; actual: 0 / 1; tot actual: 0 / 5 ) 
			<li> >1 can use boobs to gain frindship of CC
			<li> + use boobs to gain friendship
			<li> >3 even bigger boobs allowed 
			<li> >3 enthusiastically agrees to sex with AI
			<li> + sex with AI
		<li> >6 / >3 lol im not prude; > 4 licks eagerly
		<li> >3  striping nude in Westgard
		<li> TODO - maybe more?	
			
			
			
			<li>SECOND WEEK (-2/ 6; total: -3 / 16; actual: -2 / 3; tot actual: -2 / 7) 
			<li> >4 horny about the teacher
		<li> >6 qaa points out she is shameless slut (> 7 and she doesn't mind) / < 4 disgusted by idea of being a whore
		
		<li> >5 okay with handjob / >2 don't mind it / hates
		<li> +boobjob
		<li> >3 enjoy giving boobjob
		<li> >5 okay with sucking cock / >2 don't mind it / hates
			<li> >2 sucking cock instead watching movie allowed
			<li> + sucks cocks rather than watch movie
		<li> >3 calling herself slut for wearing no panties
		
		<li> >4 give him own panties

			<li> shared nudes: >6 fine / >2 shocked / deperate
			<li> >4 dont feel bad about Tom seeing nudes
			
			<li> <3 auto refuse bj for money 
			<li> +bj for money / - firm no or autorefuse


			<li> +nipple pirecing
			<li> +pubic piercing
			<li> >5 okay with showing boobs to nerds
			
			
			<li> +/- dress for party
		<li> >9 likes whorish dress
			<li> >6 love being cumdump
		<li> <2 ashamed to discuss sex with nerds with girls
			
			
			<li>THIRD WEEKEND (/; total: /; actual: /; tot actual: /) 
			
			
			
			<li>THIRD WEEK
			<li> >5 anal expert; <2 newb //TODO
			<LI> >1 || <2 sub //TODO
			
			<li>GENERAL - todo, raise?
			<li> <2 can't go to the school without panties
			<li> <5 doesn't like going to the school without panties
			</ul>
	
	
	
	

			
	
		`;
		
/*

mile.slut+mile.sub>8) ?  "a natural-born cunt-licker!
mile.slut>4 && mile.sub<2 prostitution haggling


*/
		container.innerHTML = text;
		link("Back",start);
	}
	
	
	
	function sub(){
		const text = `
			SUBMISSIVENESS
			<ul>
			<li>INTRO (-2 / 2)
			<li> - I'll destroy them / + This is nightmare
			<li> - Cyberslesbo begone! 
			<li> + Kneel in front of Zdeno
			<li> < 1 Reluctant to thank Zdeno for spanking
			
			<li>FIRST WEEK (-4 / 4; total: -6 / 6; tot actual: -1 / 3) 
			<li> - Long skirt / + short skirt / + very short skirt
			<li> + Apologize for long skirt
			<li> + Being nice at AAA / - Being angry when he apologise
			<li> > 1 Embarrassed / Annoyed to wear the top   
<li> > 1 I'm not dumb!
			<li> + Cry while being punished after failing the Top / - Encourage them
			<li> < 1 Fuck you / Please, let me go while wearing vibrating Panties
			<li> + Passively accepts being molested by teacher / - Threaten teacher / 0 Seduce teacher
<li>> 2 sorry for deleting AI

			<li>WEEKEND (-1 / 0; total: -7 / 6; tot actual: -1 / 3 ) 
			<li>< 1 - angry at CCC about boosted boobs
			<li>> 2 Maybe later / > 3 I don't think I would - being pushed into sex by AI
			<li>+ being pushed into sex by AI
<li>TODO - add some points during weekend + -
			
			<li>SECOND WEEK (-4 / 5; total: -11 / 11; actual: -2/2; tot actual -3 / 5) 
			<li>todo - add more?
<li>>= 0 Fuck me / Fuck you while evaluating stockings
<li>> 1 feels bad after threatenig teacher
			<li>+ fails socks and is meek / - bratty
<li>> 2 shoulder grabbed after lying about heels			
			
			<li><= 4 Slap Zdeno
			<li>+ begging Zdeno to suck his cock / - slapping Zdeno
			<li><= 2 showing Zdeno who is in charge
			<li>- showing Zdeno who is in charge
			
			<li>< 4 confront Juraj and making him continue
			<li>- caught Juraj touching her
	<li>< 1 allow / tell
	
	<li> > 3 submissive while sucking Juraj cock / < 2 defiant
<li> TODO
	<li> < 0 confrontional / <= 3 angry /  > 3 desperate 
	
	<li> <4 make Matej wear panties
	<li> - make Matej wear panties
	
	<li> <-1 kiss Saša / <1 kiss Saša midly drunk / <3 kiss Saša ver drunk
	<li> <3 not want to be involved in Žanet x Tom argument
	<li> <3 defend herself when called slut
	

	
	<li>TODO
		<li>	<4 haggle for money for bj or tell him fuck of
		<li>	+ play hard but then agrees with 150 like a bitch
		<li>	<2 yeah, I'm worth it


	<li> <1 sharp retort / feeble
	<li> <2 badmouthing nerds
	<li> >3 I'm very obedient
	
		<li> +/-  slap/not gropping
		<li> - refuse show boobs
		<li> + begs for dress 
		
		<li> <1 acts bossy
		
		
	<li>THIRD WEEKEND (-2 / 2; total: -13 / 13; actual: -1/1; tot actual -4 / 6) 
			<li> + love you too
			<li> <1 open about being ashamed for him
			<li> - open about being ashamed for him
			
	<li> <1 angry / >2 nervous
	<li> <3 angry / desperate
	<li> <0 angry / >3 despeae
			<li> <1 attack him //TODO
			<li> +2! submissive whore
			<li> - bluff
			<li> -2! attack him
			
			
			<li> >1 boobs cares about opininon
			
			
		</ul>
	

	
		`;
		
/*

mile.slut>4 && mile.sub<2 prostitution haggling


*/
		container.innerHTML = text;
		link("Back",start);
	}
//mile.sub
	
	
	
	
	function weapons(){
		container.innerHTML = "<div id=\"div_target\"></div>";
		let weapon = {}; //WARDROBE.garment
		for (let key in WARDROBE.garment) {
			//if( input.Mods.hasOwnProperty(key) ) {
			if(WARDROBE.garment[key].attack>0){
				weapon[key] = WARDROBE.garment[key];
				weapon[key].effect = weapon[key].price/weapon[key].attack
			} 
		} 
	//	console.log(weapon);
		comparison_table(weapon,"div_target",["name","slot","class","price","attack","effect","mag"]);
		link("Back",start);
	}
	
	
	function armor(){
		container.innerHTML = "<div id=\"div_target\"></div>";
		let armor = {}; //WARDROBE.garment
		for (let key in WARDROBE.garment) {
			//if( input.Mods.hasOwnProperty(key) ) {
			if(WARDROBE.garment[key].hp>0){
				armor[key] = WARDROBE.garment[key];
				armor[key].effect = armor[key].price/armor[key].hp
			} 
		} 
	//	console.log(armor);
		comparison_table(armor,"div_target",["name","slot","price","hp","effect"]);
		link("Back",start);
	}
	
	
	function potion(){
		container.innerHTML = "<div id=\"div_target\"></div>";
		/*
		mile.potion !!
		let armor = {}; //WARDROBE.garment
		for (let key in WARDROBE.garment) {
			//if( input.Mods.hasOwnProperty(key) ) {
			if(WARDROBE.garment[key].hp>0){
				armor[key] = WARDROBE.garment[key];
				armor[key].effect = armor[key].price/armor[key].hp
			} 
		} 
		*/
	//	console.log(armor);
		comparison_table(POTION.elixir,"div_target",["name","color","bonus","desc"]);
		link("Back",start);
	}
	
	/*
		container: div ID
		data: array/object of objects
	*/
	function comparison_table(raw_data,container,raw_columns,sort_by,sort_reverse=false){
		if(typeof container !== "object")container = document.getElementById(container);
		container.innerHTML = "";
		
		const length = raw_data.length;
		const data = [];
		var columns = dh.clone(raw_columns);
		
		
	//	console.log(raw_data)
		if(!Array.isArray(raw_data)){
			columns.unshift(["index","Index"]) ;
			
			//console.log(Object.keys(raw_data))
			
			//const original_data = dh.clone()
			const keys = Object.keys(raw_data);
			
	//	console.log(keys)
		
			for(let i = 0; i < keys.length; i++){
				data[i] = [];
				data[i][0] = keys[i];
				
				for(let k = 1; k <= columns.length; k++){
					col = typeof columns[k] == "object" ? columns[k][0] : columns[k];
					
					if(raw_data[ keys[i] ][col] && typeof raw_data[ keys[i] ][col] != "object" && typeof raw_data[ keys[i] ][col] != "function"){
						data[i][k] = raw_data[ keys[i] ][col];
					}else{
						data[i][k] = "";
					};
					
				};
				
	/*			
				for(let k = 0; k < expand.length; k++){
					console.log(expand)
					console.log(k)
					console.log(expand[k])
					console.log(expand[k][1])
					//data[i][data[i].length] = expand[k][1].call( raw_data[i] );
					
					
					data[i][data[i].length] = expand[k][1].apply( raw_data[i] );
					
				};
	*/			
				
			}
			//console.log(Object.entries(raw_data))
		
		}else{
			columns.unshift(["index","Index"]) ;
			for(let i = 0; i < raw_data.length; i++){
				data[i] = [];
				data[i][0] = i;
				
				for(let k = 1; k <= columns.length; k++){
					col = typeof columns[k] == "object" ? columns[k][0] : columns[k];
					
					if(raw_data[i][col] && typeof raw_data[i][col] != "object" && typeof raw_data[i][col] != "function"){
						data[i][k] = raw_data[i][col];
					}else{
						data[i][k] = "";
					};
					
				};
			};
		};
		
		/*
		console.log(data)
		
		console.log(sort_by);
		console.log(sort_reverse);
		console.log(data[0][sort_by]);
		*/
		
		if(sort_by){
			data.sort(function (a, b) {
				/*isNaN(a[sort_by]) && isNaN(b[sort_by])

				- b[sort_by]
				
				return a[sort_by] - b[sort_by]
				*/
			//	return a[sort_by] - b[sort_by]
				
			//  return 
				if(sort_reverse){
					if( a[sort_by] < b[sort_by] )return 1;
					if( a[sort_by] > b[sort_by] )return -1;
				}else{
					if( a[sort_by] > b[sort_by] )return 1;
					if( a[sort_by] < b[sort_by] )return -1;
				}
			
			
			});
		}
	/*	
		for(let k = 0; k < expand.length; k++){
			columns.push(expand[k][0]);
		};
	*/	
		var txt = "<table>";
		txt +=  "<thead>"
			txt += "<tr>";
			for(let k = 0; k < columns.length; k++){
			//	txt += "<th><span onclick=\"comparison_table("+data+","+container+","+columns+")\">";
				txt += "<th><span id=\"cata_"+k+"\">";
				txt += typeof columns[k] == "object" ? columns[k][1] : columns[k]; 
				txt += "</span></th>";
			};
			txt += "</tr>";
		txt +=  "</thead>"
		txt +=  "<tbody>"
		for(let i = 0; i < data.length; i++){
			txt += "<tr>";
			for(let k = 0; k < columns.length; k++){
				txt += "<td>";
				txt += data[i][k]
				txt += "</td>";
			};
			txt += "</tr>";
		};
		txt += "</tbody>"
		txt += "</table>";
		
		
		
		container.innerHTML = txt;
		
		for(let k = 0; k < columns.length; k++){
			document.getElementById("cata_"+k).addEventListener("click",function(){
		//	console.log("----");
			
		//	console.log(raw_data);
				if(sort_by==k)sort_reverse = !sort_reverse;
				sort_by = k;
				//columns.shift();
				comparison_table(raw_data,container,raw_columns,sort_by,sort_reverse)
			}, false);
		};
			
			
	};


	//TODO-GLOBAL,REUSED
	function link(name,fce){
		let temp = document.createElement("DIV");
		temp.innerHTML = name;
		//temp.classList.add("slider_desc");
		temp.classList.add("link");
		container.appendChild(temp);
		temp.addEventListener("click",function(){
			fce();
		}, false);
	};
	
	return{
		start:start,
		end:end,
		stats:stats,
	};
	
	
})();

const EDIT = (function(){ 
	
	var container;
	var dummy;
	var zoomedToBust;
	
	function end(){
		if(zoomedToBust){
			WARDROBE.rebuildBust(PC);
		}else{
			WARDROBE.rebuild(PC);
		};
		DISPLAY.text();
	};
	
		
	function confirm(){
		end();
		WARDROBE.updateMods(PC,dummy);
		WARDROBE.update(PC);
		//WARDROBE.draw(PC);
		
	};
	
	function cancel(){
		end();
		//WARDROBE.updateMods(dummy,PC);
		WARDROBE.update(PC);
		WARDROBE.draw(PC);
		
	};
 
	function start(){
		DISPLAY.subtext();
		
		container = div_subtext;
		
		dummy = WARDROBE.cloneCharacter(PC);
		
		zoomedToBust = WARDROBE.display.bust;
	};
	
	function edit(){
		start();
		
	//	console.log("edint bacis")
		WARDROBE.dressUpSubject(dummy,"DefBra","DefPanties");
		

			
			
			
		edit_basic();
	};
	
		/*
		console.log(config.dummy)
		console.log(subject)
		console.log(WARDROBE.config.dummy)
		*/
	//	console.log(subject);
		
		/*slider("height","Height",150,185);
		slider("height","Height",20);
		slider("height","Height",200);
		*/
		
		 
		
	function edit_basic( ){
	//	console.log(dummy);
		WARDROBE.rebuild(dummy);
		WARDROBE.update(dummy);
	
		setTimeout(function(){  //straight WARDROBE.draw(dummy); doesn't work, not sure why, YOLO
			WARDROBE.draw(dummy);
		}, 30)
		
		
		dh.remove_children(container); 
		//console.log(dummy);
		slider("height","Height",18);
		slider("skin","Complexion",0,26);
		slider("upperMuscle","Physique",0,24);
		slider("breastSize","Sexiness",13);
		slider("waistWidth","Slimness",16);
		slider("buttFullness","Bottom",18);
		slider("hairLength","Hair",60);
		slider("hairStyle","Hair Style",1,6);
		color("Hair Color","hairHue","hairSaturation","hairLightness");
		
		//
		if(debug)color("#Skin Color","skinHue","skinSaturation","skinLightness");
		
		link("Head",edit_head);
		link("Advanced",edit_advanced);
		link("Cancel",cancel);
		link("Confirm",confirm);
		

	};
	
	
	function edit_head( ){
		WARDROBE.rebuildBust(dummy);
		WARDROBE.draw(dummy);
		dh.remove_children(container);
		
		slider("eyeSize","Eye Size",3,35);
		//slider("eyelashLength","Eyelash",0,12);
		slider("eyeTilt","Eye Tilt",-4,18);
		slider("eyeBias","Eye Bias",-8,7);
		
		//add to bimbo
		slider("eyeCloseness","Eye Closeness",-40,40);
		slider("eyeHeight","Eye Height",-10,4);
		//
		
		slider("noseLength","Nose Length",20,60);;
		slider("noseWidth","Nose Width",13,25);
		slider("noseHeight","Nose Height",-7,7);
			
		//slider("lipSize","Lip Size",5,30);
		//add to bimbo
		slider("lipWidth","Lip Width",-200,30);
		slider("lipTopSize","Top Lip",-20,40);
		slider("lipBotSize","Bottom Lip",-40,80);
		//
		
		slider("chinWidth","Chin Width",40,120);
		slider("faceFem","Facial Femininity",0,40);
	
		slider("hairStyle","Hair Style",1,6);
		slider("hairLength","Hair Length",80);
		color("Hair Color","hairHue","hairSaturation","hairLightness");
	
	
		//
		if(debug)color("#Eye Color","irisHue","irisSaturation","irisLightness");
		
		link("Back",edit_basic);
	};
	
	
	function edit_advanced( ){
		dh.remove_children(container);
		
		slider("height","Height",18);
		slider("skin","Complexion",0,26);
		
		slider("neckLength","Neck length",20);
		slider("neckWidht","Neck width",20);

		slider("shoulderWidth","Shoulder width",20);
		slider("armThickness","Arm thickness",20);
		
		slider("upperMuscle","Upper muscle",0,28);
		slider("breastSize","Breast size",13);
		slider("breastPerkiness","Breast perkiness",10);
		
		slider("waistWidth","Waist width",16);
		slider("hipWidth","Hip width",20);

		
		slider("buttFullness","But fullness",0,36);
		
//		slider("lowerMuscle","Lower muscle",25);
		slider("legLength","Leg length",90,110);
		slider("legFem","Leg feminity",20);
		slider("legFullness","Leg fullness",40);
		
		
		//slider("legFullness","Leg fullness",40);
		
		/*
		
		
		
		slider("","",);
		slider("","",);
		slider("","",);
		slider("","",);
		*/
		link("Back",edit_basic);
	};
	
	
	function link(name,fce){
		let temp = document.createElement("DIV");
		temp.innerHTML = name;
		//temp.classList.add("slider_desc");
		temp.classList.add("link");
		container.appendChild(temp);
		temp.addEventListener("click",function(){
			fce();
		}, false);
	};
	
	
	function color(name,hue,saturation,light){
		
		var divy = document.createElement("DIV");
		divy.innerHTML = name+": ";
		divy.classList.add("slider_desc");
		container.appendChild(divy);
		
		var temp = document.createElement("INPUT");
		temp.setAttribute("type", "color"); 
	
		 
		let h = (!dummy.basedim[hue] ? dummy.Mods[hue] : dummy.Mods[hue] + dummy.basedim[hue]);
		let s = (!dummy.basedim[saturation] ? dummy.Mods[saturation] : dummy.Mods[saturation] + dummy.basedim[saturation]);
		let l = (!dummy.basedim[light] ? dummy.Mods[light] : dummy.Mods[light] + dummy.basedim[light]);
		
		
		temp.value = dh.HSL2HEX(h,s,l)   ;
	//	console.log(temp.value)
		temp.addEventListener("input",function(){
		 

		let result = dh.HEX2HSL(temp.value);
		dummy.Mods[hue] = dummy.basedim[hue] ? result.h - dummy.basedim[hue] : result.h;
		dummy.Mods[saturation] = dummy.basedim[saturation] ? result.s - dummy.basedim[saturation] : result.s ;
		dummy.Mods[light] = dummy.basedim[light] ? result.l - dummy.basedim[light] : result.l ;
		
		WARDROBE.draw(dummy);

		}, false);
		
		divy.appendChild(temp);
	};
	
	
	function slider(variable,name,min,max){
		if(typeof max === "undefined"){
			max = dummy.Mods[variable] + min;
			min = dummy.Mods[variable] - min;
		}else{
			const basedim = typeof dummy.basedim[variable] !== "undefined" ? dummy.basedim[variable] : 0;
			max = max - ( basedim /*+ dummy.Mods[variable]*/ );
			min = min - ( basedim /* + dummy.Mods[variable]*/ );
		}
		
	//	console.log(min)
	//	console.log(max)
		
		var divy = document.createElement("DIV");
		divy.innerHTML = name+": ";
		divy.classList.add("slider_desc");
		container.appendChild(divy);
		
		var temp = document.createElement("INPUT");
		temp.setAttribute("type", "range"); 
	//	temp.class = "slidy";
		temp.classList.add("slidy");
		temp.style.width = "200px";
		temp.max = max;
		temp.min = min;
		temp.step = 1;
		temp.value = dummy.Mods[variable];
		temp.addEventListener("input",function(){
			
		//	console.log(temp.value);
			dummy.Mods[variable] = parseInt(temp.value);
		//	dummy.Mods[variable] = parseFloat(temp.value);
			WARDROBE.draw(dummy);
			//console.log(subject)
			//console.log(subject.Mods[variable])
		//	console.log(temp.value)
		//	console.log(draw)
			//alert("yeah"+temp.value);
		}, false);
		
		divy.appendChild(temp);
	};  
	 
	
	
	function makeup(){
		
//console.log("MAKEUP1")
		start();
		if(!zoomedToBust) WARDROBE.rebuildBust(PC);
		
		dh.remove_children(container); 		
		if(!att.irlLips)att.irlLips = "#CE0000";
		if(!att.irlNails)att.irlNails = "#1A0000";
		if(!att.irlMascaraTop)att.irlMascaraTop = "#1A0000";
		if(!att.irlMascaraBot)att.irlMascaraBot = "#1A0000";
		set.attachSpecialParts(dummy);
		WARDROBE.update(dummy);
		
		
		color("Lipstick","irlLips");
		color("Nails","irlNails");
		color("Mascara Upper","irlMascaraTop");
		color("Mascara Lower","irlMascaraBot");
		
		slider("eyelashLength","Heaviness",1,16); //BEWARE - CHANGES PC.MODS.EYELASHLENGTH NOT PC.MASCARA.EXTRALENGT
										//eg. is linked to body not the mascara clothing piece; the effect is (the way things works CURRENTLY) practically the same
		slider("hairStyle","Hair Style",1,6);
		//link("Cancel",cancel);
		link("Confirm",confirm);
		
		function color(name,atrib){
			var divy = document.createElement("DIV");
			divy.innerHTML = name+": ";
			divy.classList.add("slider_desc");
			container.appendChild(divy);
			
			var temp = document.createElement("INPUT");
			temp.setAttribute("type", "color"); 
			
			temp.value = att[atrib];
			
			temp.addEventListener("input",function(){
				att[atrib] = this.value;
				set.attachSpecialParts(dummy);
				WARDROBE.update(dummy);
				
			}, false);
			
			divy.appendChild(temp);
		};	
//console.log("MAKEUP2")

	};
	
	return{
		
		start:start,
		edit:edit,
		makeup:makeup,
		dummy:dummy
	};

})();	






const SETTINGS = (function(){ 
	var calledFromGame = false;
	var container;
	var colors; 
	const left_div = document.getElementById("div_player");
	
	
	function color(name,input){
		let cola = colors[input];
		
		var divy = document.createElement("DIV");
		divy.innerHTML = name+": ";
		divy.classList.add("slider_desc");
		container.appendChild(divy);
		
		var temp = document.createElement("INPUT");
		temp.setAttribute("type", "color"); 
	//	temp.class = "slidy";
		 
		 
		if(typeof cola === "string" && cola[0] == "h"){
//console.log(cola)
			cola = dh.extractHSL(cola);
//console.log(cola)
			cola = dh.HSL2HEX(cola)  
//console.log(cola)
		}
		 
		temp.value = cola;
//console.log(temp.value)
		
		temp.addEventListener("input",function(){
			colors[input] = temp.value;


			STORAGE.css_colors(colors);
		}, false);
		
		divy.appendChild(temp);

	};
	
	
	
	function slider(name,value,min,max,fce){
		var divy = document.createElement("DIV");
		divy.innerHTML = name+": ";
		divy.classList.add("slider_desc");
		container.appendChild(divy);
		
		var temp = document.createElement("INPUT");
		temp.setAttribute("type", "range"); 
		temp.classList.add("slidy");
		temp.style.width = "200px";
		temp.max = max;
		temp.min = min;
		temp.step = 1;
		temp.value = value;
		
		temp.addEventListener("input",function(){
			/*console.log("-");
			console.log(this.value);
			console.log(temp.value);
			console.log(this);
			*/
			fce(this.value);
		}, false);
		
		divy.appendChild(temp);
	};  
	
	
	
	
	function checkbox(name,value,fce){
		var something = "something";
		
		var divy = document.createElement("DIV");
		divy.innerHTML = name+": ";
		divy.classList.add("slider_desc");
		container.appendChild(divy);
		
		var temp = document.createElement("INPUT");
		temp.setAttribute("type", "checkbox"); 
		temp.classList.add("checkbox");
		/*temp.style.width = "200px";
		temp.max = max;
		temp.min = min;
		temp.step = 1;
		*/
		temp.checked = value;
		
		temp.addEventListener("input",function(){
			/*
			console.log("-");
			console.log(this.value);
			console.log(temp.value);
			console.log(this);
			*/
			fce(this.checked);
		}, false);
		
		divy.appendChild(temp);
	};  
	
	
	
	function link(name,fce){
		let temp = document.createElement("DIV");
		temp.innerHTML = name;
		//temp.classList.add("slider_desc");
		temp.classList.add("link");
		container.appendChild(temp);
		temp.addEventListener("click",function(){
			fce();
		}, false);
	};
	
	
	function title(name){
		let temp = document.createElement("DIV");
		temp.innerHTML = name;
		//temp.classList.add("slider_desc");
		temp.classList.add("title");
		container.appendChild(temp);
	};
	
	
	function cancel(){
		difficulty = parseInt(localStorage.getItem("fai_difficulty"));
		
		colors = JSON.parse(localStorage.getItem("fai_colors"));
		STORAGE.css_colors(colors);
		
		let width = JSON.parse(localStorage.getItem("fai_avatar"));
		STORAGE.css_avatar(width);
		WARDROBE.rebuild();
		WARDROBE.draw();
		
		//npcs
		//NPC = JSON.parse(localStorage.getItem("fai_npcs"));
		STORAGE.apply_npcs();
		
		HINT = JSON.parse(localStorage.getItem("fai_hint"));
		end();
	};

	function confirm(){
		localStorage.setItem("fai_difficulty",difficulty);
		localStorage.setItem("fai_colors",JSON.stringify(colors));
		localStorage.setItem("fai_avatar",JSON.stringify(left_div.offsetWidth));
		
		//npcs
		//localStorage.setItem("fai_npcs",JSON.stringify(NPC));
		STORAGE.apply_npcs(NPC);
		
		localStorage.setItem("fai_hint",JSON.stringify(HINT));
		//STORAGE.css_colors(colors);
		end();
	};
	
	function end(){
		if(calledFromGame){
			DISPLAY.text();
		}else{
			MENU.start();
		};
		/*WARDROBE.draw();
		
		div_text.style.display="block";
		//div_left.style.display="block";
		div_subtext.style.display="none"
		*/
	};
		

	function start(trig){
		calledFromGame = trig;
		DISPLAY.subtextLeft();
		container = div_subtext;
		container.innerHTML = "";
		
		
		
		basic();
		
	};
	
	function clickThrough(name,fce){
		let temp = document.createElement("DIV");
		temp.innerHTML = name;
		//temp.classList.add("slider_desc");
		temp.classList.add("link");
		container.appendChild(temp);
		temp.addEventListener("click",function(){
			fce();
		}, false);
	};
	
	
	
	function cast(key){
		const size = 20;
		const half_size = 8;
		//let cola = colors[input];
		
		const divy = document.createElement("DIV");
		//divy.innerHTML = name+": ";
		//divy.classList.add("slider_desc");
		container.appendChild(divy);
		
		const color = document.createElement("INPUT");
		color.id = "div_set_color_"+key;
		color.setAttribute("type", "color"); 
		color.value = NPC.cast[key].color;
		color.addEventListener("input", () => NPC.cast[key].color = color.value, false);
		divy.appendChild(color);
	
		if(NPC.cast[key].full_name){
			const text2 = document.createElement("INPUT");
			text2.id = "div_set_text2_"+key;
			text2.setAttribute("type", "text");
			text2.size = half_size;
			text2.value = NPC.cast[key].full_name;
			text2.addEventListener("input", () => NPC.cast[key].full_name = text2.value, false);
			divy.appendChild(text2);
		}
		
		
		if(NPC.cast[key].name){
			const text = document.createElement("INPUT");
			text.id = "div_set_text_"+key;
			text.setAttribute("type", "text");
			text.size = NPC.cast[key].full_name ? half_size : size;
			text.value = NPC.cast[key].name;
			text.addEventListener("input", () => NPC.cast[key].name = text.value, false);
			divy.appendChild(text);
		}
		
		const desc = document.createElement("DIV");
		desc.style.display = "inline";
		desc.innerHTML = " - "+NPC.cast[key].desc;
		//desc.classList.add("slider_desc");
		divy.appendChild(desc);
		
	};
	
	
	
	function basic(){
			title("DIFFICULTY");
		
			slider("Easier - Harder",difficulty,-1,1,(function(value){
				difficulty = parseInt(value);
			}));
			
			title("");
			title("DIMENSIONS");
			
			const left_div = document.getElementById("div_player");


			slider("Avatar",left_div.offsetWidth,150,500,(function(value){
				STORAGE.css_avatar(value);
				WARDROBE.rebuild();
				WARDROBE.draw();
			}));
			link("Default Size",(function(){
				default_avatar();
			}));
			
			title("");
			title("COLORS");
			colors = JSON.parse(localStorage.getItem("fai_colors"));
			color("Highlight","highlight");
			color("Background","bgr");
			color("Background 2","bgr2");
			color("Text","text");
			link("Default Colors",(function(){
				default_colors();
			}));
			
			title("");
			title("Hints");
			checkbox("Show hints",HINT,(value)=> HINT = value);
			
			title("");
			title("NPCS");
			checkbox("Show names",NPC.showNames,(value)=> NPC.showNames = value);
		
		/*	
			for(key in NPC.cast){
				cast(key);
			};
		*/	
			
			link("Default NPC's",(function(){
				default_npcs();
			}));
			
			title("");
			title("");
			title("");
			link("All Default Values",(function(){
				difficulty = STORAGE.def.difficulty;
				localStorage.setItem("fai_difficulty",STORAGE.def.difficulty);
				
				HINT = true;
				localStorage.setItem("fai_hint",STORAGE.def.hint);
				
				default_colors();
				default_avatar();
				default_npcs();
			}));
			
			link("Cancel",cancel);
			link("Confirm",confirm);
	};
	
	
	function default_colors(){
		colors = {};
		const object = STORAGE.def.colors;
		for (let key in object) {
			if (object.hasOwnProperty(key)) {
				colors[key] = object[key]
			}
		};
		STORAGE.css_colors(colors);
		localStorage.setItem("fai_colors",JSON.stringify(colors));
		start(calledFromGame);	
	};
	
	function default_avatar(){
		const width = STORAGE.def.avatar;
		STORAGE.css_avatar(width);
		WARDROBE.rebuild();
		WARDROBE.draw();
		localStorage.setItem("fai_avatar",JSON.stringify(width));
		start(calledFromGame);	
	};
	
	
	function default_npcs(){
		//localStorage.setItem("fai_npcs",JSON.stringify(def.npcs));
		//NPC = STORAGE.def.npcs;
		STORAGE.apply_npcs(STORAGE.def.npcs);
		
		start(calledFromGame);	//TODO???
	};
	
	
	return{
		start:start,

	};

})();	




/*
const triggerInventory = function(){
	
	function back(){
	 
		div_text.style.display="block";
		div_subtext.style.display="none"
	};
	
	
	div_text.style.display="none";
	div_subtext.style.display="block"
	WARDROBE.inventoryTest(PC,inventory,"div_subtext",back);	
	
	
}
*/



const DISPLAY = (function(){ 
	function game(){
		attributes.display();
		document.getElementById("hr_inventory").style.display = "block";
		document.getElementById("inventory_button").style.display = "block";
	};

	function notGame(){
		
		div_attributes.style.display = "none";
		document.getElementById("hr_inventory").style.display = "none";
		document.getElementById("inventory_button").style.display = "none";
	};
	
	function subtextOnly(){
		div_stats.style.display = "none";
		
		div_text.style.display="none";
		div_subtext.style.display="block"
		div_left.style.display="none";
		
	};
	
	function subtextLeft(){
		div_stats.style.display = "none";
		
		div_text.style.display="none";
		div_subtext.style.display="block"
		div_left.style.display="block";
		
	};
	
	function subtext(){
		div_stats.style.display = "none";
		
		div_text.style.display="none";
		div_subtext.style.display="block"
	};
	
	function text(){
		if(STATS.item)div_stats.style.display = "block";
		
		div_text.style.display="block";
		div_subtext.style.display="none";
		div_left.style.display="block";
	};
	
	return{
		game,
		notGame,
		subtextOnly,
		subtextLeft,
		subtext,
		text,
	};

})();



const attributes = (function(){ 
	function display(){
		document.getElementById("div_attributes").style.display="block";
		update();
	};

	function update(){
		var tab = "<table id=\"tab_attributes\">"
		+"<tr><td>Strength: </td><td> "+att.str+"</td></tr>"
		+"<tr><td>Dexterity: </td><td> "+att.dex+"</td></tr>"
		+"<tr><td>Intelligence: </td><td> "+att.int+"</td></tr>"
		+"<tr><td>Charisma: </td><td> "+att.char+"</td></tr>"
		+"</table>";
		
		document.getElementById("div_attributes").innerHTML=tab;
		//console.log("UPDATED");
	};

	function hide(){
		document.getElementById("div_attributes").style.display="none";
	};

	function change(name,value){
		//console.log(att);
		//console.log(value);
		att[name]+=value;
		/*
		switch(att){
			case "str": att.str+=value; break;
			case "dex": att.dex+=value; break;
			case "char": att.char+=value; break;
			case "int": att.int+=value; break;
		};
		*/
		update()
	};





	function check(){
	//	console.log("CHECK ATT")
		
		if(!PC.weapon || !PC.weapon.slot)PC.weapon = {
			name: "fist", attack: 1,
		};
		
		PC.weapon.attack = PC.weapon.original_attack;
		if(att.profi == PC.weapon.class)PC.weapon.attack++;	
		
		att.hp = att.hp_base; 
		att.eng = att.eng_base;
		att.power = att.power_base;
		//att.alert = 0;
		/*
		if(att.class==1){
			att.hp=20; 
			att.eng=20;
			att.power = 0;
		}else if(att.class==2){
			att.hp=40; 
			att.eng=20;
			att.power = 0;
		}else if(att.class==3){
			att.hp=20; 
			att.eng=40;
			att.power = 2;
		}else{
			att.hp=30; 
			att.eng=30;
			att.power = 2
		}	
		*/
		
	//	console.log(att.hp)
		att.hp += WARDROBE.checkBonus("hp");
	//	console.log(att.hp)
		att.eng += WARDROBE.checkBonus("eng");
		
	//	console.log(att.power);
		att.power += WARDROBE.checkBonus("mag"); //TODO POWER / MAG !!!!!!
	//	console.log(att.power);
		
		DUNGEON.poison = att.pois ? 1 : 0;
		
		if(!DUNGEON.active)return;
		if(STATS.item && STATS.item.length<1)return;
		if(STATS.item["hp"])STATS.recalculate("hp",att.hp);
		if(STATS.item["eng"])STATS.recalculate("eng",att.eng);
		
	}


	return{
		display:display,
		update:update,
		hide:hide,
		change:change,
		check,
	};

})();


const add_to_inventory = (what)=> {
	gameInventory.push(
		WARDROBE.pack( 
			WARDROBE.create(what) 
		)
	);
	
}


const potion_shortcut = (what)=> {
	let seed = 0;
	switch(what){
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
	};
	return POTION.elixir[seed].name;
}


function nerd_based(aaa, bbb, ccc){
	if(mile.qaa>=mile.qbb && mile.qaa>=mile.qcc)return qaa(aaa);
	if(mile.qbb>=mile.qaa && mile.qbb>=mile.qcc)return qbb(bbb);
	if(mile.qcc>=mile.qaa && mile.qcc>=mile.qbb)return qcc(ccc);
	if(debug)return alert("Error, no nerd?");
};


function class_based(harlot,hellion,fallen){
	switch(att.class){
		case 1: return harlot
		case 2: return hellion
		case 3: return fallen
	}
};
 