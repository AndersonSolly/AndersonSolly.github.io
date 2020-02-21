const effects = {};
effects.intro = [];

effects.intro[20] = function(){
	initiate();
	//initiate_character(); //initiate();
	//WARDROBE.draw();
	main(101);
};

effects.intro[21] = function(){
	//console.log("21")
	WARDROBE.createOutfit("Default",dh.seededRandom(),"Thong","Bra","LowJeans","BellyPiercingAdvanced","TightShirt","CuteSocks","CrystalEarrings","Sneakers","BellyPiercingInitial");
	main(101);
};

effects.intro[22] = function(){
	//main(101);
	EDIT.edit();
	main(101);
	//
};


effects.intro[30] = function(){
	triggerInventory();
	main(101);
};


effects.intro[42] = function(){
	
	
	may_pick_one("body_1");
	may_body_change("body_1",400,{	
			breastSize:20,
			hornyness: 3,
		}
	);
	
};



effects.intro[102] = function(){
	WARDROBE.addWornToInventory(PC,inventory);
	
	WARDROBE.showLess(0,0); //TODO - CHECK IF THIS IS NECESSARY
	//THE IDEA IS THAT THE DIMENSIONS CHANGED BY CLOTHES (ESPECIALLY HEELS) ARE NOT SAVED


	PCMETA = WARDROBE.cloneCharacter(PC);
	
	PCGAME = WARDROBE.cloneCharacter(PC);
	
	WARDROBE.showAll(); //TODO
	
	PCMETA.Mods.irisLightness += 20;
	PCMETA.Mods.irisSaturation += 10;
	PCGAME.Mods.irisLightness += 20;
	PCGAME.Mods.irisSaturation += 10;
	main(103);
};


effects.intro[103] = function(){
	may_pick_one("hair_1","hair_2","hair_3");
	may_body_change("hair_1",400,
		{
			hairSaturation: 0 -(PC.basedim.hairSaturation+PC.Mods.hairSaturation),
			hairLightness: 80 -(PC.basedim.hairLightness+PC.Mods.hairLightness),
		}
	);
	may_body_change("hair_2",400,
		{	
			hairHue: 52 -(PC.basedim.hairHue+PC.Mods.hairHue),
			hairSaturation: 90 -(PC.basedim.hairSaturation+PC.Mods.hairSaturation),
			hairLightness: 50 -(PC.basedim.hairLightness+PC.Mods.hairLightness),
			
		}
	);
	may_body_change("hair_3",400,
		{	
			hairHue: 0 -(PC.basedim.hairHue+PC.Mods.hairHue),
			hairSaturation: 90 -(PC.basedim.hairSaturation+PC.Mods.hairSaturation),
			hairLightness: 50 -(PC.basedim.hairLightness+PC.Mods.hairLightness),
		}
	);
	
	may_pick_one("body_1","body_2","body_3","body_4");
	may_body_change("body_1",400,{	
			breastSize:8,
			
		}
	);
	may_body_change("body_2",400,{	
			waistWidth:-8,
			
		}
	);
	may_body_change("body_3",400,{	
		
			buttFullness: 8,
			legFem: 3
			
		}
	);
	may_body_change("body_4",400,{	
		
			lipTopSize: 20,
			lipBotSize: 30,
			lipWidth: 30,
			
		
		}
	);
	
	may_effect("body_1",function(){
		mile.boobs1 = true;
		mile.boobs = 1;
	} );
	may_effect("body_2",function(){
		mile.boobs1 = false;
		mile.boobs = 0;
	} );
	may_effect("body_3",function(){
		mile.boobs1 = false;
		mile.boobs = 0;
	} );
	may_effect("body_3",function(){
		mile.boobs1 = false;
		mile.boobs = 0;
	} );
};


effects.intro[22] = function(){
	EDIT.edit();
	main(101);
};


effects.intro[401] = function(){
	let attempts = 8
	if(difficulty>0)attempts = 7;
	if(difficulty<0)attempts = 9;
	let lost = difficulty>0 ? 402 : 403;
	
	BULL.start( 
		(function(){main(410)}),
		(function(input){
			counter.result = input;
			main(402)
		}),
		"div_text",
		4,attempts
	);
};


effects.intro[404] = function(){
	let attempts = 8
	if(difficulty>0)attempts = 7;
	if(difficulty<0)attempts = 9;
	let lost = difficulty>0 ? 402 : 403;
	
	BULL.start( 
		(function(){main(410)}),
		(function(input){
			counter.result = input;
			main(405);
		}),
		"div_text",
		4,attempts
	);
};


effects.intro[529] = () => WARDROBE.draw(); 
	
effects.intro[525] = function(){
	may_pick_one("upper");
	may_effect("upper",function(){
		WARDROBE.showLess(2,void 0);
	} );
	
	may_pick_one("lower");
	may_effect("lower",function(){
		WARDROBE.showLess(void 0,2);
	} );
	
	may_pick_one("lower");
	may_effect("lower",function(){
		WARDROBE.showLess(void 0,2);
		//TO DO - INCLUDES SOCKS
	} );
	
	may_pick_one("underwear");
	may_effect("underwear",function(){
		WARDROBE.showLess(0,0);
		//TO DO - INCLUDES SOCKS
	} );

	may_pick_one("lingerie");
	may_effect("lingerie",function(){
		WARDROBE.wearOutfit("Lingerie1");
		WARDROBE.showAll();
		//TO DO - INCLUDES SOCKS
	} );
};
effects.intro[526] = effects.intro[525];




effects.intro[701] = (function(){
	may_pick_one("r_elf","r_orc","r_human")
	
	may_effect("r_elf",function(){
		att.race=1;
	} );
	may_effect("r_orc",function(){
		att.race=2;
	} );
	may_effect("r_human",function(){
		att.race=0;
	} ); 
	
	
	
	
	
	
	may_body_change("r_elf",600,
		{//hairHue: def_hair_hue,
			//hairSaturation: 0-PC.basedim.hairSaturation,
			//hairLightness: 80-PC.basedim.hairLightness,
			
			
			height:5,
			
			earlobeLength:3,
			
			neckWidth:-4,
			armThickness:-10,
			waistWidth:-10,
			hipWidth:-8,
			legFullness:-8,
			
			
			cheekFullness:-10,
			faceFem:20,
		
			irisSize:4,
			irisSaturation:40, //90-PC.Mods.irisSaturation,
			irisLightness: 80-PC.Mods.irisLightness,
			
			eyeTilt:5,
			eyeWidth:1,
			eyeTopSize:1,
			eyeBotSize:1,
			eyeSize:2,
			
			/*
			eyeTilt:3,
			eyeWidth:3,
			eyeTopSize:1,
			eyeBotSize:1,
			eyeSize:2,
			*/
		}
	);
	may_body_change("r_orc",600,
		{
			height:-1,
			armLength:7,//?
			handSize:30,
			upperMuscle:21-PC.basedim.upperMuscle,
			
			legFullness:24,
			hipWidth:6,
			
			neckWidth:2,
			
			earlobeLength:0.5,
			faceWidth:1,
			
			
			browOutBias:2,
			browThickness:2,
			eyeTilt:-3,
			limbalRingSize:10,

			noseHeight:3,
			noseLength:-12,
			noseWidth:5,
			nostrilSize:5,
			
			//skinHue:80,
			skinSaturation:-10
//hairHue: def_hair_hue,
			//hairSaturation: 0-PC.basedim.hairSaturation,
			//hairLightness: 80-PC.basedim.hairLightness,
			/*earlobeLength:10,
			irisSize:5,
			//cheekFullness:-20,
			height:5,
			
			legFullness:-8,
			hipWidth:-8,
			armThickness:-10,
			waistWidth:-10,
			
			faceFem:40,
			
			irisSaturation:100-PC.Mods.irisSaturation,
			irisLightness:80-PC.Mods.irisLightness,
			eyeTilt:3,
			eyeWidth:3,
			eyeTopSize:1,
			eyeBotSize:1,
			eyeSize:2,
			
			neckWidth:-4,
			*/
		}
	);
});


effects.intro[702] = (function(){
		
		
		//get_dressed_instantly("charcre");
	
	may_pick_one("c_harlot","c_hellion","c_fallen");
		
	may_effect("c_harlot",function(){
		PC.removeAllClothing(); //?
		att.class = 1;
		mile.class = 1;
		att.fantasyLips = "#b63326";
		att.fantasyNails = void 0;
		att.fantasyMascara = "black";
		set.attachSpecialParts();
		WARDROBE.wearOutfit("DefHarlot");
	} );
	
	may_effect("c_hellion",function(){
		PC.removeAllClothing(); //?
		att.class = 2;
		mile.class = 2;
		att.fantasyLips = void 0;
		att.fantasyNails = void 0;
		att.fantasyMascara = void 0;
		set.attachSpecialParts();
		WARDROBE.wearOutfit("DefHellion");	
	} );
	
	may_effect("c_fallen",function(){
		PC.removeAllClothing(); //?
		att.class = 3;
		mile.class = 3;
		att.fantasyLips = "#523b38";
		att.fantasyNails = "black";
		att.fantasyMascara = "black";
		set.attachSpecialParts();
		WARDROBE.wearOutfit("DefFallen");	
	} ); 
	
});



effects.intro[703] = (function(){
	//get_dressed_instantly("charcre");
	
	may_pick_one("b_char","b_str","b_int","b_dex","b_no");
		
	may_effect("b_char",function(){
		att.back=1;	
	} );
	may_effect("b_str",function(){
		att.back=2;	
	} );
	may_effect("b_int",function(){
		att.back=3;	
	} );
	may_effect("b_dex",function(){
		att.back=4;	
	} );
	/*
	may_effect("b_no",function(){
		att.back=0;	
	} );
	*/
});
 
 
 
 
 
 
 
effects.first = [];

effects.first[101] = function(){
	WARDROBE.wearOutfit("Default2");
	WARDROBE.addWornToInventory(PC,inventory);
	
	let temp = [];
	
	for(let i=1;i<=4;i++) temp[i] = WARDROBE.create("ShortSkirt"+i);
	for(let i=1;i<=4;i++) may_desc("skirt_"+i,temp[i].name);
	for(let i=1;i<=4;i++) WARDROBE.addToInventory(temp[i],inventory);
	 
	may_pick_one("skirt_1","skirt_2","skirt_3","skirt_4");
	
	for(let i=1;i<=4;i++){
		may_effect("skirt_"+i,function(){
			WARDROBE.wear(temp[i]);
			mile.skirt = i;
		} );
	}
};


effects.first[120] = function(){
	WARDROBE.wearOutfit("Default3");
	WARDROBE.addWornToInventory(PC,inventory);
	
	//show_links(); 
};

effects.first[121] = function(){
	WARDROBE.showLess(-1,1);
	may_desc("cola",WARDROBE.nameColor(PC.panties.fill) );  
	//show_links(); 
};
effects.first[122] = function(){
	WARDROBE.showAll();
	//show_links(); 
};

effects.first[130] = function(){
	WARDROBE.showAll();
	WARDROBE.wearOutfit("none");
};




effects.first[142] = (function(){
	may_pick_one("l_pink","d_pink");
	
	//NEEDS TO BE TESTED
/*	may_effect("d_pink",function(){
		PCIRL.Mods.hairHue = 330-PC.basedim.hairHue;
		PCIRL.Mods.hairSaturation = 98-PC.basedim.hairSaturation;
		PCIRL.Mods.hairLightness = 50-PC.basedim.hairLightness;
	} );
	
	may_effect("l_pink",function(){
		PCIRL.Mods.hairHue = 330-PC.basedim.hairHue;
		PCIRL.Mods.hairSaturation =  60-PC.basedim.hairSaturation;
		PCIRL.Mods.hairLightness = 70-PC.basedim.hairLightness;
	} );
*/	
	may_body_change("d_pink",500,
		{
			hairHue: 330 -(PC.basedim.hairHue+PC.Mods.hairHue),
			hairSaturation: 98 -(PC.basedim.hairSaturation+PC.Mods.hairSaturation),
			hairLightness: 50 -(PC.basedim.hairLightness+PC.Mods.hairLightness),
			
		}
	);
	may_body_change("l_pink",500,
		{	
			hairHue: 330 -(PC.basedim.hairHue+PC.Mods.hairHue),
			hairSaturation: 60 -(PC.basedim.hairSaturation+PC.Mods.hairSaturation),
			hairLightness: 70 -(PC.basedim.hairLightness+PC.Mods.hairLightness),
			/*
			hairHue: 330-PC.basedim.hairHue,
			hairSaturation: 60-PC.basedim.hairSaturation,
			hairLightness: 70-PC.basedim.hairLightness,
			*/
		}
	);
});

 


effects.first[143] = effects.first[142];

effects.first[170] = function(){

	if(mile.advice1 == 3){
		PC.Mods.hairHue = PCMETA.Mods.hairHue;
		PC.Mods.hairSaturation =  PCMETA.basedim.hairSaturation;
		PC.Mods.hairLightness = PCMETA.basedim.hairLightness;
	};

	
	WARDROBE.changeOutfit("none",PC,inventory)
	let temp =  WARDROBE.create("VibPanties");
	WARDROBE.wear(temp);
	PC.panties.locked = true;
};


effects.first[188] = function(){
	WARDROBE.showLess(-1,-2);
};

effects.first[190] = function(){
	WARDROBE.showAll();
	PC.panties.locked = false;
};

effects.first[210] = function(){
	PC.panties.locked = false;
	//WARDROBE.changeOutfit("none",PC,inventory);
	
};
/*
effects.first[102] = function(){
	//-it is actually worn!
	//WARDROBE.addToInventory(PC.lower,inventory)
};
*/



effects.weekend = [];

effects.weekend[111] = function(){
	let merchant = [];
	
	merchant = WARDROBE.createMultiplePacked(
		
		[2,"HalterTop"],
		[2,"SexyHalterTop"],
		[3,"TubeTop"],
		[2,"TubeTopSleeve"],
		[4,"TightShirt"],
		
		[5,"Bra"],
		[2,"Thong"],
		[2,"LowThong"],
		[3,"GString"],
		[4,"Briefs"],
		[3,"Boyshorts"],
		
		[2,"Jeans"],
		[2,"LowJeans"],
		[4,"ShortSkirt"],
		[4,"MiniSkirt"],
		[2,"PencilSkirt"],
		[2,"MicroSkirt"],
		
		[4,"BrightBelt"],
		[4,"DarkBelt"],
		
		
		[3,"HighSocks"],
		[3,"BrightHighSocks"],
		
		[2,"GarterStockings"],
		[1,"GarterStockingsFishnet"],
		[2,"GarterStockingsPoly"],
	
		[2,"StockingsFishnet"],
		[4,"Socks"],
		[3,"CuteSocks"],
	
		[3,"BallEarrings"],
		[3,"CrystalEarrings"],
		[3,"RhombEarrings"],
		[3,"TriangleEarrings"],
		[3,"ChainEarrings"],
		
		"StarNecklace",
		"Pentagram",
		"BiChain",
		"TearNecklace",
		"DoubleNecklace",
		"PearlNecklace",
		"SimpleChain",
		"MultiNecklace",
		
		[4,"Sneakers"],
		[2,"KittyHeels"],
		[3,"HighHeels"],
		
	
	
		 
	);
 

	WARDROBE.inventoryTest(PC,inventory,"div_subtext", ()=> main(101),merchant);
};


effects.weekend[1831] = function(){
	may_pick_one("big","small","bigger");
	
	
	may_effect("big",function(){
		mile.boobs = 3;
	} );

	may_effect("small",function(){
		mile.boobs = 2;
	} );
	
	may_effect("bigger",function(){
		mile.boobs = 4;
	} );
	
	may_body_change("small",400,{	
			breastSize:16,
			breastPerkiness: 4,
		}
	);
	
	may_body_change("big",500,{	
			breastSize:26,
			breastPerkiness: 9,
		}
	);
	
	may_body_change("bigger",600,{	
			breastSize: 35,
			breastPerkiness: 12,
		}
	);
}	
	
effects.second = [];
effects.second[109] = function(){
	let merchant = [];
	
	merchant = WARDROBE.createMultiplePacked(
		
		
//EXTRA SOCKS
		[4,"HighSocks"],
		[4,"BrightHighSocks"],
		
		[4,"StockingsFishnet"],
		
		
		[3,"GarterStockings"],
		[2,"GarterStockingsFishnet"],
		[4,"GarterStockingsPoly"],
	
		[4,"Socks"],
		[3,"CuteSocks"],
		
		
		[2,"HalterTop"],
		[2,"SexyHalterTop"],
		[3,"TubeTop"],
		[2,"TubeTopSleeve"],
		[4,"TightShirt"],
		
		[5,"Bra"],
		[2,"Thong"],
		[2,"LowThong"],
		[3,"GString"],
		[4,"Briefs"],
		[3,"Boyshorts"],
		
		[2,"Jeans"],
		[2,"LowJeans"],
		[4,"ShortSkirt"],
		[4,"MiniSkirt"],
		[2,"PencilSkirt"],
		[2,"MicroSkirt"],
		
		[4,"BrightBelt"],
		[4,"DarkBelt"],
		
		
		
		
		[4,"Sneakers"],
		[2,"KittyHeels"],
		[3,"HighHeels"],
		
		
		
		
		
	);
 

	WARDROBE.inventoryTest(PC,inventory,"div_subtext", ()=> main(102),merchant);
};

effects.second[158] = function(){
	may_pick_one("small");
	
	may_effect("small",function(){
		mile.boobs = 2;
	} );
	
	may_body_change("small",400,{	
			breastSize:16,
			breastPerkiness: 4,
		}
	);
};

effects.second[135] = function(){
	WARDROBE.changeOutfit("none",PC,inventory)
	let temp =  WARDROBE.create("RidiculousHeels");
	WARDROBE.wear(temp);
	PC.shoes.locked = true;
};

effects.second[138] = function(){
	PC.shoes.locked = false;
};

effects.second[255] = function(){
	let merchant = [];
	
	merchant = WARDROBE.createMultiplePacked(
		
		[2,"Monroe"],
		[2,"Medusa"],
		[2,"Labret"],
		[2,"EyebrowPiercing"],
		[2,"NoseBridge"],
		[2,"NosePiercing"],
		[1,"TonguePiercing"],
		[1,"BellyPiercingSimple"],
		[4,"BellyPiercingAdvanced"],
		[2,"NipplePiercings"],
		[2,"PubicPiercing"],
	
	);
	
	WARDROBE.inventoryTest(PC,inventory,"div_subtext", ()=> main(254),merchant);
};


effects.second[300] = function(){
	WARDROBE.wearOutfit("SexyUnderwear");	
	//WARDROBE.addWornToInventory(PC,inventory);
	
	const temp = [];
	
	 
	temp[1] = WARDROBE.create("ShortDressElegant");
	temp[2] = WARDROBE.create("ShortDressElegant");
	temp[3] = WARDROBE.create("ShortDressSexy");
	temp[4] = WARDROBE.create("ShortDressSexyTransparent");
	temp[5] = WARDROBE.create("ShortDressSlutty");
	temp[6] = WARDROBE.create("ShortDressSluttyTransparent");
	
	for(let i=1;i<=6;i++) may_desc("dress_"+i,dh.decapitalise(temp[i].name));
	//for(let i=1;i<=4;i++) WARDROBE.addToInventory(temp[i],inventory);
	 
	may_pick_one("dress_1","dress_2","dress_3","dress_4","dress_5","dress_6");
	
	for(let i=1;i<=6;i++){
		may_effect("dress_"+i,function(){
			WARDROBE.wear(temp[i]);
			mile.partyAIdress = i;
		} );
	}
};





effects.weekend2 = [];

effects.weekend2[111] = effects.weekend[111];


effects.third = [];
effects.third[510] = function(){
	may_pick_one("small","medium","large");
	
	
	may_effect("medium",function(){
		mile.boobsIrl = 2;
	} );

	may_effect("small",function(){
		mile.boobsIrl = 1;
	} );
	
	may_effect("large",function(){
		mile.boobsIrl = 3;
	} );
	
	may_body_change("small",400,{	
			breastSize: 13,
			breastPerkiness: 2,
		}
	);
	
	may_body_change("medium",500,{	
			breastSize: 19,
			breastPerkiness: 7,
		}
	);
	
	may_body_change("large",600,{	
			breastSize: 28,
			breastPerkiness: 11,
		}
	);
	
	/*
	may_pick_one("p_1","p_2","p_3","p_4");
	
	may_body_change("p_1",500,{	
			breastPerkiness: 2,
		}
	);
	may_body_change("p_2",500,{	
			breastPerkiness: 4,
		}
	);
	may_body_change("p_3",500,{	
			breastPerkiness: 6,
		}
	);
	may_body_change("p_4",500,{	
			breastPerkiness: 8,
		}
	);
	*/
	
	
}	


effects.third[511] = function(){
	may_pick_one("yes","no");	
	
	may_effect("large",function(){
		mile.lipsIrl = true;
	} );
	
	may_body_change("yes",400,{	
			lipBotSize: 48,//24,
			lipTopSize: 24,//12,
		}
	);
	

}		
	
/*
effects.weekend2[111] = function(){
	let merchant = [];
	
	//alert("x");
	merchant = WARDROBE.createMultiplePacked(
		
		[2,"HalterTop"],
		[2,"SexyHalterTop"],
		[3,"TubeTop"],
		[2,"TubeTopSleeve"],
		[4,"TightShirt"],
		
		[5,"Bra"],
		[2,"Thong"],
		[2,"LowThong"],
		[3,"GString"],
		[4,"Briefs"],
		[3,"Boyshorts"],
		
		[2,"Jeans"],
		[2,"LowJeans"],
		[4,"ShortSkirt"],
		[4,"MiniSkirt"],
		[2,"PencilSkirt"],
		[2,"MicroSkirt"],
		
		[4,"BrightBelt"],
		[4,"DarkBelt"],
		
		
		[3,"HighSocks"],
		[3,"BrightHighSocks"],
		
		[2,"GarterStockings"],
		[1,"GarterStockingsFishnet"],
		[2,"GarterStockingsPoly"],
	
		[2,"StockingsFishnet"],
		[4,"Socks"],
		[3,"CuteSocks"],
	
		[3,"BallEarrings"],
		[3,"CrystalEarrings"],
		[3,"RhombEarrings"],
		[3,"TriangleEarrings"],
		[3,"ChainEarrings"],
		
		"StarNecklace",
		"Pentagram",
		"BiChain",
		"TearNecklace",
		"DoubleNecklace",
		"PearlNecklace",
		"SimpleChain",
		"MultiNecklace",
		
		[4,"Sneakers"],
		[2,"KittyHeels"],
		[3,"HighHeels"],
		
	
	
		 
	);
 
console.log("x"+content);
	WARDROBE.inventoryTest(PC,inventory,"div_subtext", ()=>{
console.log("a"+content);
		main(101)
console.log("b"+content);
	},merchant);
console.log("x"+content);
};
*/





effects.westgard = [];

effects.westgard[100] = function(){
	//BAZAAR
	 
	//console.log("BAZAAAR")
	counter.bazaar = WARDROBE.createMultiplePacked(
		[3,"FantasyBra"],
		[2,"FantasyThong"],
		[2,"FantasyPanties"],
		
		[3,"HarlotTop"],
		[3,"Tunic"],
		[3,"HarlotCorset"],
		[3,"HarlotSkirt"],
		[3,"FantasyLongSkirt"],
		[3,"FantasyMediumSkirt"],
		
		[4,"HarlotStockings"],
		
		[2,"LeatherBelt"],
		[2,"MetalBelt"],
		[2,"BarbaricBra"],
		[2,"FancyBarbaricBra"],
		[2,"BarbaricLoincloth"],
		[2,"FancyBarbaricLoincloth"],
		
		[2,"FallenTop"],
		
		[2,"FallenLoincloth"],
		[2,"LongGloves"],
		
		[2,"LeatherPants"],
		[2,"LeatherLeggins"],
	);
	
	//WEAPONS AND ARMOR
//TODO!!!!!!!
	const items = []
	items[0] = dh.random_from_array(3,["Rapier","Sword","Morningstar","Mace","Scythe","Scythe"]);
	items[1] = dh.random_from_array(3,["LeatherVambraces","FancyLeatherVambraces"])
	items[2] = dh.random_from_array(2,["BronzeGreaves","SteelGreaves","BronzeVambraces","SteelVambraces"]);
	items[3] = dh.random_from_array(1,["BronzeCuirass","BronzeCuirass","SteelCuirass","BronzeSkirt","SteelSkirt"]);
	items[4] = dh.random_from_array(1,["GoldGorget"],["GoldBelt"]);

	counter.wamo = WARDROBE.createMultiplePacked(
		...items[0],
		[1,"Falchion"],[1,"Bludgeon"],[1,"Spear"],[1,"Knife"],
		...items[1],
		...items[2],
		"LeatherArmor",
		"LeatherSkirt",
		"FancyLeatherArmor",
		"FancyLeatherArmor",
		"FancyLeatherSkirt",
		
		...items[3],
		...items[4],
		
		[2,"Gorget"],
		[3,"LeatherBelt"],
		[3,"MetalBelt"],
	);
	
	//MYSTERY SHACK
//TODO
	counter.shack = WARDROBE.createMultiplePacked(
		[3,"Wand"],[2,"SacDagger"],[1,"MagStaff"],
	);
	
	
	//ALCHEMY
	items[0] = dh.random_from_array(3,["xENG","xHP","xGoblin","xElf","xBus","xMino"]);
	
	counter.alchemy = WARDROBE.createMultiplePacked(
		/*
			todo boost
		
		
		*/
//TODO BOOST
[1,"xBov"],
[1,"xFel"],
		/**/
		
		[3,"xHP"],
		[3,"xENG"],
		[2,"xAnti"],
		[1,"xGoblin"],
		[1,"xElf"],
		...items[0],
		[1,"randomElixir"], 
	);
	
	console.log("counter.alchemy");
	console.log(counter.alchemy);
	//"xGoblin","xElf"
};

effects.westgard[99] = effects.westgard[100]; //BEWARE! When going to 99 and skipping 100 because no break; effect 100 is actually not triggered 

effects.westgard[110] = function(){
	WARDROBE.inventoryTest(PC,gameInventory,"div_subtext",(function(){ main(101) }),counter.bazaar);
};

effects.westgard[120] = function(){
	WARDROBE.inventoryTest(PC,gameInventory,"div_subtext",(function(){ main(101) }),counter.wamo);
};

effects.westgard[130] = function(){
	WARDROBE.inventoryTest(PC,gameInventory,"div_subtext",(function(){ main(101) }),counter.shack);
};


effects.westgard[140] = function(){
	
	WARDROBE.inventoryTest(PC,gameInventory,"div_subtext",(function(){ main(101) }),counter.alchemy);
};



effects.feyd = [];


effects.feyd[120] = function(){
	let merchant = [];
	const shared = [[2,"LeatherBelt"],/*[2,"FantasyMediumSkirt"],[1,"FantasyLongSkirt"],[2,"Tunic"],[1,"LeatherPants"],[1,"HarlotSkirt"],[1,"HarlotTop"]*/];
	switch(att.class){
		default:
		case 1: merchant = WARDROBE.createMultiplePacked(...shared,[3,"FantasyBra"],[2,"FantasyThong"],[2,"FantasyPanties"],[3,"HarlotTop"],[3,"HarlotCorset"],[2,"HarlotSkirt"],[4,"HarlotStockings"],[2,"FantasyMediumSkirt"],[1,"FantasyLongSkirt"]);
			break;
		case 2: merchant = WARDROBE.createMultiplePacked(...shared,[2,"LeatherBelt"],[2,"MetalBelt"],[3,"BarbaricBra"],[3,"FancyBarbaricBra"],[4,"BarbaricLoincloth"],[4,"FancyBarbaricLoincloth"]);
			break;
		case 3: merchant = WARDROBE.createMultiplePacked(...shared,[1,"MetalBelt"],[3,"FantasyBra"],/*[5,"Gorget"],*/[2,"FantasyThong"],[2,"FantasyPanties"],[6,"FallenTop"],[6,"FallenLoincloth"],[2,"FantasyMediumSkirt"],[1,"FantasyLongSkirt"]);
			break;
	};
	WARDROBE.inventoryTest(PC,gameInventory,"div_subtext",(function(){ main(101) }),merchant);
};

effects.feyd[121] = function(){
	let merchant = [];
	merchant = WARDROBE.createMultiplePacked([3,"Falchion"],[3,"Bludgeon"],[3,"Spear"],[3,"Knife"]);
	WARDROBE.inventoryTest(PC,gameInventory,"div_subtext",(function(){ main(101) }),merchant);
};

effects.feyd[122] = function(){
	let merchant = [];
	merchant = WARDROBE.createMultiplePacked("Knife",
		"Falchion",
		"Bludgeon",
		"Spear",

		"Rapier",
		"Malchus",
		"Sword",
		"Morningstar",
		"Mace",
		"Scythe",
		"Trident",

		"Wand",
		"SacDagger",
		"Sceptre",

		"MailShirt",
		"MailBottom",
		"MailTop",

		"GlassSkirt",
		"GlassCuirass",
		"GlassVambraces",
		"GlassGreaves",

		"SteelSkirt",
		"SteelCuirass",
		"SteelVambraces",
		"SteelGreaves",

		"BronzeSkirt",
		"BronzeCuirass",
		"BronzeVambraces",
		"BronzeGreaves",

		"LeatherSkirt",
		"FancyLeatherSkirt",
		"LeatherArmor",
		"FancyLeatherArmor",
		"LeatherVambraces",
		"FancyLeatherVambraces",

		"PaladinCuirass",
		"PaladinSkirt",
		"PaladinVambraces",
		"PaladinGreaves",
		
		"GoldGorget",
		"Gorget",
	);
	WARDROBE.inventoryTest(PC,gameInventory,"div_subtext",(function(){ main(101) }),merchant);
};



effects.feyd[123] = function(){
	let merchant = [];
	merchant = WARDROBE.createMultiplePacked(
		"FantasyThong",
		"FantasyBra",
		"FantasyPanties",

		"BarbaricBra",
		"FancyBarbaricBra",
		"BarbaricLoincloth",
		"FancyBarbaricLoincloth",

		"GoldBelt",
		"MetalBelt",
		"LeatherBelt",

		"FallenTop",
		"FallenLoincloth",

		"HarlotStockings",
		"HarlotSkirt",
		"HarlotCorset",
		"HarlotTop",

		"Tunic",
		"FantasyLongSkirt",
		"FantasyMediumSkirt",
		"LeatherLeggins",
		"LeatherPants",

		"LongGloves",
	);
	WARDROBE.inventoryTest(PC,gameInventory,"div_subtext",(function(){ main(101) }),merchant);
};



effects.feyd[100] = function(){
	let actual_name = stupid_name_generator(1);
	mile.keryk = actual_name;
	let temp_names = array_of_stupid_names(actual_name);
console.log(temp_names);
	dh.shuffle(temp_names);
	counter.npca=[];
	for(var i=0;i<temp_names.length;i++){
		counter.npca[i]={
			name:temp_names[i],
			visible:false,
			result: temp_names[i] == actual_name ? true : false,
		}
	};
	
console.log(actual_name);

show_links();

	//may_desc("name_1",actual_name);
	//may_desc("name_2",actual_name);  
	
/*	
	console.log(document.getElementById("div_right") )
	let a = document.getElementById("actual_name")
	console.log(a)
	
	
	a.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
	
/*	
	canvasHolder = document.createElement("div");
	canvasHolder.id = "XXdiv_canvas";
	a.appendChild(canvasHolder);
		
*/
	//console.log(document.getElementById("actual_name"))
	
	//TODO CHANGING INNTER HTML FOR SOME FUCKING REASON DOESNT WORK!!!!
	//THIS IS STUPID SOLUTION BUT IT WORKS, TODO
	setTimeout(function(){  //dropping down the final piece is considered to be a click, need delay
		let a = document.getElementById("actual_name")
		if(a)a.innerHTML = actual_name;
	}, 100);
	
		
	
	function array_of_stupid_names(actual_name){
		var array=[];
		array[0] = actual_name;
		for(var i=1;i<7;i++){
	//		console.log(i+";"+i)
			var repeat=true;
			var failsafe=0;
			do{
				array[i]=stupid_name_generator(1);
	//			console.log(i+": "+array[i])
				repeat=false;
				for(var k=1;k<i;k++){
					if(array[k]==array[i]){
						repeat=true;
						break
					};
				};
				failsafe++;
				if(failsafe>2){
					alert("ERROR - stupid name generator is not able to generate unique stupid name")
					break;
				};
			}while(repeat==true);
	//		console.log(i);
			if(failsafe>2)break;
		};
		
	//	console.log(array)
		return array
	};


	function  stupid_name_generator(input){
		var array=[];
		switch(input){
			case 1:
				//Carwin Mearvirrak
				var random=Math.random();
				if(random<0.5){
					array[array.length]="C"
				}else{
					array[array.length]="K"
				};
				
				random=Math.random();
				if(random<0.5){
					array[array.length]="a"
				}else{
					array[array.length]="e"
				};
				
				random=Math.random();
				if(random<0.5){
					array[array.length]="v"
				}else{
					array[array.length]="w"
				};
				
				random=Math.random();
				if(random<0.5){
					array[array.length]="y"
				}else{
					array[array.length]="i"
				};
				
				random=Math.random();
				if(random<0.5){
					array[array.length]="r"
				}else{
					array[array.length]="n"
				};
				
				array[array.length]=" "
				array[array.length]="M"
				
				random=Math.random();
				if(random<0.33){
					array[array.length]="a"
					array[array.length]="e"
				}else if(random<0.66){
					array[array.length]="e"
					array[array.length]="a"
				}else{
					array[array.length]="e"
					array[array.length]="e"
				};
				
				random=Math.random();
				if(random<0.5){
					array[array.length]="r"
				}else{
					array[array.length]="rr"
				};
			
				random=Math.random();
				if(random<0.5){
					array[array.length]="v"
				}else{
					array[array.length]="w"
				};
				
				random=Math.random();
				if(random<0.5){
					array[array.length]="y"
				}else{
					array[array.length]="i"
				};
				
				
				random=Math.random();
				if(random<0.5){
					array[array.length]="r"
				}else{
					array[array.length]="rr"
				};
				
				random=Math.random();
				if(random<0.5){
					array[array.length]="c"
				}else{
					array[array.length]="k"
				};
				
				var string="";
				for(var  i=0;i<array.length;i++){
					string+=array[i];
				};
				//string.toString();
			 
				return string
				
				break;
		}
		
		
	};

};



	