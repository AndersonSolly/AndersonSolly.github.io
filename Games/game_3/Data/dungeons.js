const DUNGEON = (function(){ 

	var active = false;
	var progress;
	
	var labyrint = [];
	var labyrint_start;
	var labyrint_finale;
	var labyrint_restart;
	
	var seed = "fufufufuf";
	var SEED;
	
	var berserk;
	var seduction;
	var poison = 0;
	var poisoned = 0;
	
	var vaultAlt;
	
	var backContent;
	var backInput;
	var original_inventory;
	var original_money;
	
	const list = {}
	
	
	list.ynis = {
		name: "Ynis Farion",
		
		random: [
			/*[2,"ogre"],
			[3,["goblins",1]],
			[2,["goblins",2]],
			[4,"chest"],
			[2,"caveIn"],
			[2,"gate"],
			[2,"blades"],
			[5,"corridor"],
			[5,"corridor2"],
			*/
		],

		rooms: [
			[0,"ynis_main"],
			[1,"ynis_letter"],
			[2,"traitors"],
			[3,"ynis_finale"],
			[4,"order_traitor"],
			[5,"ynis_resolution"],
			//[20,"cavern_finale"],
		],
		
	//	restart: "cavern_restart",
		
		loot: {
			
			//NOT USED
			money: [3,9],
			armor: ["LeatherVambraces","LeatherVambraces","LeatherVambraces","LeatherVambraces","BronzeGreaves","BronzeVambraces","Gorget"],
			weapon: ["Falchion","Bludgeon","Spear","Wand"],
			clothes: [
				"LeatherBelt",
				"LeatherBelt",
				"LongGloves",
				"LongGloves",
				"MetalBelt",
				"LeatherLeggins","LeatherPants",
				"Tunic","FantasyMediumSkirt","FantasyLongSkirt",
				"FantasyPanties","FantasyThong","FantasyPanties","FantasyThong",
				"FancyBarbaricBra","BarbaricLoincloth",
				"HarlotTop","HarlotCorset","HarlotSkirt","HarlotStockings"
			],
			
			
			elixir: ["xHP","xENG","xHP","xENG","xBus","xBus"],
			legendary: ["Bastard","Warhammer","Glaive","Sceptre","PaladinSkirt","PaladinVambraces","PaladinGreaves","PaladinCuirass"],
		},
		
		stats: [
			{
					name: "for",
					label: "Goodwill",
					value: () => 12,
					max: () => 15,
					color: 200,
	//				on_death: (function(){ death() })
				},{
					name: "tru",
					label: "Truth",
					value: () => 0,
					max: () => 15,
					color: 65,
				}
		],
		
	}
	
	
	list.cavern = {
		name: "Valsyan Cavern",
		
		random: [
			[2,"ogre"],
			[3,["goblins",1]],
			[2,["goblins",2]],
			[4,"chest"],
			[2,"caveIn"],
			[2,"gate"],
			[2,"blades"],
			[5,"corridor"],
			[5,"corridor2"],
		],

		rooms: [
			[0,"cavern_entry"],
			[20,"cavern_finale"],
		],
		
		restart: "cavern_restart",
		
		loot: {
			money: [3,9],
			armor: ["LeatherVambraces","LeatherVambraces","LeatherVambraces","LeatherVambraces","BronzeGreaves","BronzeVambraces","Gorget"],
			weapon: ["Falchion","Bludgeon","Spear","Wand"],
			clothes: [
				"LeatherBelt",
				"LeatherBelt",
				"LongGloves",
				"LongGloves",
				"MetalBelt",
				"LeatherLeggins","LeatherPants",
				"Tunic","FantasyMediumSkirt","FantasyLongSkirt",
				"FantasyPanties","FantasyThong","FantasyPanties","FantasyThong",
				"FancyBarbaricBra","BarbaricLoincloth",
				"HarlotTop","HarlotCorset","HarlotSkirt","HarlotStockings"
			],
			elixir: ["xGoblin","xElf","xHP","xENG","xGoblin","xElf"],
			legendary: ["Wand","Malchus","Earspoon","Mace","FancyLeatherArmor","LeatherArmor"],
		}		
	}


	list.tower = {
		name: "Wizard's Tower",
		
		random: ["elementals","elementals",["elementalsIfrit",1],["elementalsIfrit",2],["ifrit",1],["ifrit",2],["ifrit",1],["ifrit",2],  "chest","chest","chest","chest","chest","chest","chest","chest"],
		labyrint: ["tower_entry"],
		
		finale: "tower_finale",
		
		random: [
			[3,"elementals"],
			[2,["ifrit",1] ],
			[2,["ifrit",2] ],
			[3,"elementalsIfrit"],
			
			[2,"tower_cabinet"],
			
			[5,"tower_corridor"],
			[5,"tower_corridor_2"],
		],

		rooms: [
			[0,"tower_entry"],
			[5,"tower_crystal_1"],
			[10,"tower_crystal_2"],
			[15,"tower_crystal_3"],
			[19,"tower_crystal_4"],
			[20,"tower_finale"],
			
		],
		
		restart: "tower_restart",
		
		loot: {
			money: [10,20],
			armor: ["SteelGreaves","SteelVambraces","BronzeGreaves","BronzeVambraces","Gorget","FancyLeatherArmor","LeatherArmor"],
			weapon: ["SacDagger","Wand"],
			clothes: [
				"LeatherBelt",
				"LeatherBelt",
				"LongGloves",
				"LongGloves",
				"MetalBelt",
				"LeatherLeggins","LeatherPants",
				"Tunic","FantasyMediumSkirt","FantasyLongSkirt",
				"FantasyPanties","FantasyThong","FantasyPanties","FantasyThong",
				"FancyBarbaricBra","BarbaricLoincloth",
				"HarlotTop","HarlotCorset","HarlotSkirt","HarlotStockings"
			],
			elixir: ["xHP","xENG","xBus","xBus","xBus","xMino","xBov","xFel","xAnti","xHP","xENG"],	
			legendary: ["GlassGreaves","GlassVambraces","GlassGreaves","GlassVambraces","GlassCuirass","GlassCuirass","GlassSkirt","MagStaff","MagStaff","MagStaff"],
		}
		
	}
	
	
	
	list.sewers_1 = {
		name: "Sewers under Westgard",
		
		random: [
			[4,"chest"],
			[3,"thugs"],
			[3,"spiders"],
		//	[2,"swarm"],
		//	[3,"sorcerer"],
			//[3,["goblins",1]],
		//	[2,["goblins",2]],
			[2,"corpse"],
			[2,"caveIn"],
			[2,"gate"],
			[2,"blades"],
			//TODO - SEWER CORRIDOR
			[5,"corridor"],
			[5,"corridor2"],
		],
	
		rooms: [
			[0,"sewers_entry"],
			[4,"meeting_smugglers"],
			[8,"meeting_guards"],
			[15,"meeting_resolution"],
			[17,["chest",3]],
			[19,"meeting_cultists"],
			[20,"sewers_finale"],
			
		],
	
		loot: {
			money: [5,12],
			armor: ["SteelGreaves","SteelVambraces","BronzeGreaves","BronzeVambraces","MetalBelt","FancyLeatherArmor","LeatherArmor","BronzeCuirass","BronzeSkirt","SteelCuirass","SteelSkirt"],
			weapon: ["Falchion","Bludgeon","Spear","SacDagger","Rapier","Malchus","Sword","Morningstar","Mace","Scythe","Trident","Earspoon","MagStaff"],
			clothes: [
				"LeatherBelt",
				"LeatherBelt",
				"LongGloves",
				"LongGloves",
				"MetalBelt",
				"LeatherLeggins","LeatherPants",
				"Tunic","FantasyMediumSkirt","FantasyLongSkirt",
				"FantasyPanties","FantasyThong","FantasyPanties","FantasyThong",
				"FancyBarbaricBra","BarbaricLoincloth",
				"HarlotTop","HarlotCorset","HarlotSkirt","HarlotStockings"
			],elixir: ["xMino","xMino","xBus","xGoblin","xElf","xHP","xENG","xAnti","xHP","xENG"],
			legendary: ["SteelCuirass","GlassGreaves","GlassVambraces","GlassCuirass","GlassSkirt","MailShirt","MailShirt","MailBottom","MailBottom","MailTop"],
		}
		
	}
	
	
	
	
	
	list.sewers_2 = {
		name: "Sewers under Westgard",
		
		random: [
			[4,"chest"],
			[3,"thugs"],
			[3,"spiders"],
		//	[3,"sorcerer"],
			[2,"corpse"],
			[2,"caveIn"],
			[2,"gate"],
			[2,"blades"],
			//TODO - SEWER CORRIDOR
			[5,"corridor"],
			[5,"corridor2"],
		],
	
		rooms: [
			[0,"sewers_entry_2"],
//[1,"sorcerer"],
			//
			
			//[17,["chest",3]],
		
		
			[12,"sewers_place"],
		
			[16,"sewers_lair"],
			[17,"sewers_lair_2"],
			[18,"sewers_lair_3"],
			[19,"sewers_lair_4"],
			[20,"sewers_lair_5"],
			//[20,"sewers_lair_6"],
		],
	
		loot: {
			money: [5,12],
			armor: ["SteelGreaves","SteelVambraces","BronzeGreaves","BronzeVambraces","MetalBelt","FancyLeatherArmor","LeatherArmor","BronzeCuirass","BronzeSkirt","SteelCuirass","SteelSkirt"],
			weapon: ["Falchion","Bludgeon","Spear","SacDagger","Rapier","Malchus","Sword","Morningstar","Mace","Scythe","Trident","Earspoon","MagStaff"],
			clothes: [
				"LeatherBelt",
				"LeatherBelt",
				"LongGloves",
				"LongGloves",
				"MetalBelt",
				"LeatherLeggins","LeatherPants",
				"Tunic","FantasyMediumSkirt","FantasyLongSkirt",
				"FantasyPanties","FantasyThong","FantasyPanties","FantasyThong",
				"FancyBarbaricBra","BarbaricLoincloth",
				"HarlotTop","HarlotCorset","HarlotSkirt","HarlotStockings"
			],
			elixir: ["xMino","xBus","xBus","xBus","xBov","xFel","xBov","xFel","xHP","xENG","xAnti","xHP","xENG","xHP","xENG","xAnti"],
		//TODO
		//elixir: ["xMino","xBus","xMino","xBus","xBov","xFel","xGoblin","xElf","xGoblin","xElf","xHP","xENG","xAnti","xHP","xENG","xHP","xENG","xAnti"],
			legendary: ["SteelCuirass","GlassGreaves","GlassVambraces","GlassCuirass","GlassSkirt","MailShirt","MailShirt","MailBottom","MailBottom","MailTop"],
		}
		
	}
	
	
	
	list.testDungeon = {
		
		name: "xxWizard's Tower",
		
	//	random: ["elementals","elementals","elementals",["elementalsIfrit",1],["elementalsIfrit",2],["ifrit",1],["ifrit",2],  "chest","chest","chest","chest"],
	/*	
		random: [ "ogre",["goblins",1],["goblins",2],"ogre",["goblins",1],"swarm"      ],
		random: ["chest"],
	*/	
		labyrint: [["goblins",2],["goblins",2],"tower_entry","elementals"],
		restart: "tower_restart",
		finale: "tower_finale",
		
	 
		loot: {
			money: [3,9],
			armor: ["SteelGreaves","SteelVambraces","BronzeGreaves","BronzeVambraces","Gorget","Gorget","MetalBelt","FancyLeatherArmor","LeatherArmor"],
			weapon: ["Falchion","Bludgeon","Staff"],
			clothes: ["LeatherBelt","LongGloves","LeatherLeggins","FancyBarbaricBra","BarbaricLoincloth","HarlotTop","HarlotCorset","HarlotSkirt","HarlotStockings","FantasyThong"],
			elixir: ["xBus","xHP","xENG","xBus","xBus"],	
		}
		
	}
	
	list.testDungeon2 = {
		name: "Test Dungeon",
		random: ["chest","cavern_finale",["goblins",1],"ogre","chest"],
		labyrint: ["cellar","cavern_finale"],
		restart: "cavern_restart",
		finale: "cavern_finale",
	//	labyrint: ["cellar"],
		loot: {
			money: [3,9],
			armor: ["BronzeGreaves","BronzeVambraces","Gorget","Gorget","MetalBelt"],
			weapon: ["Falchion","Bludgeon","Staff"],
			clothes: ["LeatherBelt","LongGloves","LeatherLeggins","FancyBarbaricBra","BarbaricLoincloth","HarlotTop","HarlotCorset","HarlotSkirt","HarlotStockings"],
			elixir: ["xGoblin","xElf","xHP","xENG","xGoblin","xElf"],	
		}
		
		
	}
	
	
	
	list.cellar = {
		name: "Infested cellar",
	//	start: "cellar",
	//	finale: "rous",
		rooms: [
			[0,"cellar"],
			[1,"rat"],
			[2,"first_potion"],
			[3,"first_swarm"],
			[4,"barrels"],
			[5,"first_rous"],
			[6,"cellar_finale"],
			//[10,"levelUp"]
		],
		/*
		stats: [{
				name: "hp",
				label: "Health",
				value: () => att.hp,
				max: () => att.hp,
				color: 0,
	//			on_death: (function(){ death() })
			},{
				name: "eng",
				label: "Energy",
				value: () => att.eng,
				max: () => att.eng,
				color: 120,
		}],
		*/
	};
	
	
	
	//returns random number based on seed
	function Rnd(){
		//see: http://indiegamr.com/generate-repeatable-random-numbers-in-js/ 
		SEED = (SEED * 9301 + 49297) % 233280;
		let random = SEED / 233280;
 
		return random;
	};
	//SAVE
	/*
		if(this.active)
			dungeon: DUNGEON.active,
			dungeon_seed: DUNGEON.seed,
			dungeon_content: DUNGEON.backContent,
			dungeon_input: DUNGEON.backInput,
			dugeon_stats: STATS.save();
		if(dungeon)
			DUNGEON.recreate(dungeon,dungeon_dontent,dungeon_input,dungeon_seed,dungeon_progress,dungeon_stats)
	*/
	
	const recreate = function(dungeon,content,input,cancel,seed,prog,invent,mony,stats){
		this.active = dungeon;
		
		this.backContent = content;
		this.backInput = input;
		this.backCancel = cancel;
		
		this.original_money = mony;
		this.original_inventory = invent;
		
		create(dungeon,seed);
	
		this.progress = prog;
		
		next(this.progress);
		
	//	main(active_scene);
		STATS.load(stats);
	}
	
	
	
	const start = function(dungeon,cnt,inp,cancel,seed){
		//console.log("---X-----DUNGEON-------X--------");

		//WHEN FINISHED, RETURNS HERE 
		this.backContent = cnt;
		this.backInput = inp;
		this.backCancel = cancel;

		//NAME OF DUNGEON & SIGHT IT IS ACTIVE
		this.active = dungeon;

		//SEED
		SEED = (typeof seed == "undefined") ? Math.floor(Math.random() * 1000000) : seed;
		this.seed = 	SEED; //SEED is changed, seed stays the same;

		//ORIGINAL - in case of restart
		this.original_money = PC.money;
		this.original_inventory = dh.clone(gameInventory);

		//CREATION
		create(dungeon,seed);
		
		this.progress = 0; //SIC - SAVE!
		
		//SAVE
		SAVE.autosave();
		
		next(this.progress);
	};
	
	
	
	
	const create = function(dungeon,seed){
		if(debug)console.log(">>CREATE DUNGEON")
		if(!list[dungeon]){
			alert("Dungeon "+dungeon+" NOT found!" );
			return;
		};

		const source = list[dungeon];
		chapter_name = source.name;
		
	//Checks attributes 
		attributes.check();

	//HP & ENG - ajust the dungeon to be survivable by the character	
		let hp = att.hp;
		let eng = att.eng;
		
		if(difficulty == -1){
			hp -= 10;
			eng -= 10;
		}else if(difficulty == 1){
			
		}else{
			hp -= -5;
			eng -= -5;;
		};
		
	//size of dungeons
		const size = source.rooms[ source.rooms.length-1 ][0];


	//moves set room to the labyrinth
		labyrint = []
		for(let ii = 0;  ii < source.rooms.length; ii++){
			labyrint[ source.rooms[ii][0] ] =  source.rooms[ii][1];
			
			
			//TODO????
			//if room does not exist, alerts, leaves empty 
			if(  !vault[  labyrint[ source.rooms[ii][0] ] ]  
					&&  (
						labyrint[ source.rooms[ii][0] ]
						&& !vault[  labyrint[ source.rooms[ii][0] ][0]   ]      
					)	
				){
				alert(">>>Error - room "+labyrint[ source.rooms[ii][0] ]+" not found. ")
				labyrint[ source.rooms[ii][0] ] = void 0;
			 };
		};
		
	//how many empty random? & price of already set rooms
		let empty = 0;
		
		for(let ii = 0;  ii < size; ii++){
			if( !labyrint[ii] ){
				empty++;
			}else{
				applyPrice( labyrint[ii] );
			}
		};


	if(empty>0){	
			//creates random rooms
			let randomRooms = [];
			let possibleRooms = [];

			//goes through random rooms
			for(let ii = 0;  ii < source.random.length; ii++){
				//every added at least once 
				randomRooms[ii] = source.random[ii][1]; 
				applyPrice( randomRooms[ii] );
				
				//array of possible rooms, added as many times 
				for(let kk = 1;  kk < source.random[ii][0]; kk++){
					possibleRooms[possibleRooms.length] = source.random[ii][1];
				};
			};
		
		if(debug)console.log("After compulsory rooms: hp: "+hp+"; eng: "+eng);
			
 
		let failsafe = 0;
		dh.random(SEED);
		
		//adds to randomRomms random rooms from possibleRooms
		for(let ii = randomRooms.length;  ii < empty; ii++){
			let index = Math.floor(dh.random()*possibleRooms.length);
			randomRooms[ii] = possibleRooms[index];
			
			//check if the room is survivable for the character
			if( checkPrice( randomRooms[ii] ) ){
				applyPrice( randomRooms[ii] );
				possibleRooms.splice(index,1);
			}else{
				ii--;
			};
			failsafe++;
			if(failsafe>400){
				alert("fail");
				break;
			};
		};
	
 //SHUFFLE
		failsafe = 0;
		for(let ii = 0;  ii < size; ii++){
			if( !labyrint[ii] ){
				
				let index = Math.floor(dh.random()*randomRooms.length);
				labyrint[ii] = randomRooms[index];
				
				if( compare(labyrint[ii],labyrint[ii-1]) && failsafe < 200){
					labyrint[ii] = void 0;
					ii--;
				}else{
					randomRooms.splice(index,1);
				}
				
				function compare(a,b){
					a = typeof a == "object" ? a[0] : a;
					b = typeof b == "object" ? b[0] : b;
					return a == b ? true : false;
				};
				
				
				failsafe++;
				/*
				if(failsafe>200){
					if(debug){
						console.log(">>>Warning: the dungeon does not have enough valid unique rooms")
					};
					ii++;
				}
				*/
				
			};
		};	
		
		if(failsafe>=200){
			if(debug){
				console.log(">>>Warning: the dungeon does not have enough valid unique rooms");
				console.log(labyrint);
			};
			ii++;
		}
		
	};		
		
		
		function applyPrice(room){
			if(typeof room === "object"){
				vaultAlt = room[1]; //TODO???
				room = room[0];
			};	
			if(!vault[room].price)return;		
			const value = vault[room].price();		
			if(value.hp)hp += value.hp;
			if(value.eng)eng += value.eng;
		};
		
		
		function checkPrice(room){
			if(typeof room === "object"){
				vaultAlt = room[1]; //TODO???
				room = room[0];
			};
			if(!vault[room].price)return true;
			
			const value = vault[room].price();
			let valid = true;

			if(hp + value.hp < 0)valid = false;
			if(eng + value.eng < 0)valid = false;
			return valid;
		};

	
	//STATS	
		if(source.stats){
			STATS.create(...source.stats);
		}else{
			STATS.create(
				{
					name: "hp",
					label: "Health",
					value: () => att.hp,
					max: () => att.hp,
					color: 0,
	//				on_death: (function(){ death() })
				},{
					name: "eng",
					label: "Energy",
					value: () => att.eng,
					max: () => att.eng,
					color: 120,
				},{
					name: "dun",
					label: "Progress",
					value: 0,
					max: size,
					color: 50,
	//				on_overflow: (function(){ finale() })
				}
			);
		};
 
		if(debug){
				console.log(">>>DUNGEON CREATED"); //sic
				console.log(labyrint);
		};
	}
	
	
 
	
	const restart = function(){
		//console.log("RESTART");
//console.log(PCGAME.worn)
 		
		set.resetGame();
/*		
console.log(PCGAME.worn)
		alert();
*/		
		PC.money = this.original_money;
		gameInventory = dh.clone(this.original_inventory);
		
		//SEED - needs new seed in the case the previous dungeon was fucked up
		SEED =  Math.floor(Math.random() * 1000000);
		this.seed = SEED; //SEED is changed, seed stays the same;
		
		create(this.active,this.seed);
		if(list[this.active].restart)labyrint[0] = list[this.active].restart;
		
		this.progress = 0;
		next(this.progress);
	};
	
	
	
	
	
	
	
	const nextSpecific = function(cont,input,alt){
		console.log("NEXT SPECIFIC")
		const scope = this.active ? this : DUNGEON; //TODO - fuck this
		
		//does not advance dungeon progress or potion!!
		//CLEARS VARIABLES
		scope.berserk = false;
		scope.seduction = false;
		scope.vaultAlt = void 0;
		
		content = cont; //SIC

//console.log(content);
		
		if(input == 101){
			//it is specifically asked to skip the before combat phase, but the initiation has to happen
			if( vault[content].initiate )vault[content].initiate();
		}else{
			//input undefined, runs the normal way
			input = 101;
			if(vault[content].initiate)input = 100;  //something happens before combat
		}
		
		if(typeof alt !== "undefined")scope.vaultAlt = alt;
		
		main(input);		
	}
	
	
	
	const next = function(forceProgress){
		//console.log("NEXT")
		
		const scope = this.active ? this : DUNGEON; //TODO - fuck this
		
		//CLEARS VARIABLES
		scope.berserk = false;
		scope.seduction = false;
		scope.vaultAlt = void 0;
		
		//POISON
		if(STATS.item && STATS.item.hp && DUNGEON.poisoned>0){
			DUNGEON.poisoned--;
			STATS.change("hp",-1);
			//DEATH
			//txt("Something something, poisons.");
			
			if(STATS.item.hp.value<1){
				content = "dead";
				link("Death.",101)
				return;
			};
			
			if(DUNGEON.poisoned==0)STATS.cure();
		};
		
		//IF DUNGEON, ADVANCE IT
		if(STATS.item && STATS.item.dun){
			STATS.change("dun",1);
			/*
			if(STATS.item.dun.value >= STATS.item.dun.max){
				finale();
				return;
			};
			*/
		}
		
		//PROGRESSION
		scope.progress++;
		if(typeof forceProgress != "undefined")scope.progress = forceProgress;
		
/*
console.log(labyrint);
console.log(forceProgress);
console.log(scope.progress);
console.log(labyrint[scope.progress]);
	*/
		
		let input = 101;
		
		if(typeof labyrint[scope.progress] == "object"){
			scope.vaultAlt = labyrint[scope.progress][1];
			content = labyrint[scope.progress][0];
			//console.log(labyrint[scope.progress][0]);	
		}else{
			content = labyrint[scope.progress];
		}
/*
console.log(content);		
console.log(vault[content]);
*/
		if(vault[content].initiate)input = 100;  //something happens before combat
		main(input);
		
	}
	
	function labyrintLenght(){
		return labyrint.length;
	};
	
	/*
	
	const finale = function(){
		//progress++;
		
		content = labyrint_finale;
		main(101)
		
		set.goto(labyrint_finale);
		
	}
*/	



	//BACK TO THE MAIN LOOP, REMOVES THE DUNGEONS
	const end = function(){
		//if(!PC.weapon.slot)PC.weapon = void 0;
		const scope = this.active ? this : DUNGEON; //TODO - fuck this

		scope.active = void 0;
		STATS.remove();
		labyrint = [];
/*	
console.log(scope.backContent)
console.log(scope.backInput)		
*/
		set.goto(scope.backContent,scope.backInput);
	}
	
	
	const cancel = function(){
		//if(!PC.weapon.slot)PC.weapon = void 0;
		const scope = this.active ? this : DUNGEON; //TODO - fuck this

		scope.active = void 0;
		STATS.remove();
		labyrint = [];
			
		set.goto(scope.backContent,scope.backCancel);
	}
	
	
	
	//RANDOM LOOT
	const loot = function(input){

		//loot: [1,[1,3],["elixir"],["elixir",3],["falchion"] ]
		if(typeof input == "undefined")return;
		
		if(typeof input != "object")input = Array.prototype.slice.call(arguments);
		
		
		const description = [];
		
		//HOW MANY ITEMS
		let loops = 1;
		if(typeof input[0] == "number"){
			loops = input[0]
			input.splice(0,1);
		};
		

		for(let i = 0; i < loops; i++){
			let temp;
			let what = dh.pick_one(input); //[  Math.floor(Math.random() * input.length)  ];
				
			//CHEATING
			function cheating(what){

				if(STATS.item && STATS.item.dun &&  STATS.item.dun.value == DUNGEON.labyrintLenght() -1) return what; //THE END
				
				if(what === "legendary") return what; //legendary items are worhty more than a life! 
				
			//	if(difficulty == -1 && PC.weapon.name == "Knife" && att.level == 2) what = "weapon";
			//	if(difficulty == -1 && att.class != 3 && att.level == 3 && PC.weapon.attack == 2 && Math.random() < 0.4) what = "weapon";
				
				if(!STATS.item || !STATS.item.hp || !STATS.item.eng) return; //some fucked up non-standart dungeon
					
				const hp_inventory = gameInventory.filter( (a)=> a== "elixir:4:" ).length; 
				const eng_inventory = gameInventory.filter( (a)=> a== "elixir:5:" ).length; 
				const hp = STATS.item.hp.value;
				const eng = STATS.item.eng.value;
	
				if(difficulty == -1){
					//emergency
					if(hp < 6 && hp_inventory < 3){
						what = "xHP";
						if(hp_inventory < 1){ i-- }else if( Math.random() < 0.6 ){ i-- };
					}else if(eng < 6 && eng_inventory < 3){
						what = "xENG";
						if(eng_inventory < 1){ i-- }else if( Math.random() < 0.6 ){ i-- };
						//if( Math.random() < 0.6 ) i--;
					//future emergency 
					}else if(hp < 12 && hp_inventory < 2){
						what = "xHP";
						if( Math.random() < 0.5 ) i--;
					}else if(eng < 12 && eng_inventory < 2){
						what = "xENG";
						if( Math.random() < 0.4 ) i--;
					//running out
					}else if(hp_inventory < 2 && Math.random() < 0.5){
						what = "xHP";
					}else if(eng_inventory < 2 && Math.random() < 0.5){
						what = "xENG";
					};
	
				}else if(difficulty == 0){
					
					//emergency
					if(hp < 6 && hp_inventory < 1){
						what = "xHP";
						if(Math.random() < 0.6) i--;
					}else if(hp < 6 && hp_inventory < 2){
						what = "xHP";
						 //if( Math.random() < 0.25 ){ i-- };
					}else if(eng < 6 && eng_inventory < 2){
						what = "xENG";		
					//future emergency 
					}else if(hp < 20 && hp_inventory < 2 && Math.random() < 0.5){
						what = "xHP";
					}else if(eng < 20 && eng_inventory < 2 && Math.random() < 0.5){
						what = "xENG";
					}
				};
				
				return what;
			};
			
			if(debug)console.log(">>"+what)
			what = cheating(what);
			if(debug)console.log("cheated into >>")
			
			
			//IS A CATEGORY SET FOR THE DUNGEON?
			const llloot = list[DUNGEON.active].loot;
			
			if(what == "money"){
				what = llloot.money;
			}else if(llloot && llloot[what] ){
				what = dh.pick_one( llloot[what]	);
			};
			
			//MONEY
			if(typeof what == "object"){
				if(typeof what[0] == "number" && typeof what[1] == "number"){
					temp = {};
					temp.coins = Math.round( dh.between(what[0],what[1]) );
					temp.name = temp.coins+" coins";
					
					PC.money += temp.coins; 
				}
			//ITEM
			}else{
				temp = WARDROBE.create(what);
				
				gameInventory[gameInventory.length] = WARDROBE.pack(temp);
			};
			
			
			//TEXT DESCRIPTION
			description.push("<strong>"+temp.name+"</strong>");
			
			/*
			
			if(loops>1){
				if(i == 0){
					//SIC
				}else if(i == loops-1){
					text += " and";
				}else if(i < loops-1){
					text += ",";
				}
			};
			text += " <strong>"+temp.name+"</strong>"
			*/
		};
		
		let text = "I gained "+dh.a_b_and_c(description);
		text += ". ";
		txt(text);
	}
	
	
	
	const aLink = function(input,name,what,price,desc = ""){
		const index = eventy.length;
				
		if(!what){
			text += "<div class=\"link\" id=\"link_"+index+"\">"+name+"</div> ";
		//	alty[index] = alt;
			alty[index] = "<em>"+desc+"</em>"; //TODO
			eventy[index] = (function(){
				main(input);
			});
		}else{
			
			if( STATS.item[what] && STATS.item[what].label) alt = " "+price+" "+STATS.item[what].label+" ";
			alt += "<br><br><em>"+desc+"</em>"; //TOD
			
			if( STATS.item[what] && (STATS.item[what].value + price >= 0)  ){
				text += "<div class=\"link\" id=\"link_"+index+"\">"+name+"</div> ";
				alty[index] = alt;
				eventy[index] = (function(){
					STATS.change(what,price);
					main(input);
				});
			}else{
				text += "<div class=\"link link_dead\" >"+name+"</div> ";
				alty[index] = alt;
			};
		};
		
		
	}
	
	
	
	const bLink = function(name,what,desc){
		const index = eventy.length;

//console.log("B-LINK");	
		
		switch(what){
			case "hp": what = 4; break;
			case "eng": what = 5; break;
			case "anti": what = 7; break;
			
		};

//console.log(what);

		if(!mile.potion[what])return;
		
		for(let ii=0; ; ii++){
			if(gameInventory[ii]=="elixir:"+what+":")break;
			if(ii == gameInventory.length)return;
		};

//console.log("ALLOWD");
	 
			text += "<div class=\"link\" id=\"link_"+index+"\">"+name+"</div> ";

			eventy[index] = (function(){
	//			console.log(gameInventory);
			//	console.log("elixir:"+what+":")
				for(let ii=0; ; ii++){
					
					if(gameInventory[ii]=="elixir:"+what+":" ){
						gameInventory.splice(ii,1);
						POTION.use(what);
						break;
					};
					if(ii == gameInventory.length)return;
				};
				
				for(let ii=0; ; ii++){
					if(gameInventory[ii]=="elixir:"+what+":")break;
					if(ii == gameInventory.length){
						document.getElementById("link_"+index).classList.add("link_dead");  //.style.display = "none";
						return;
					}
				};

				
			//	console.log(gameInventory);
				//console.log(this);
			});
	 
		
		
	}
	
	
	//WARDROBE.attacked 
	const attack = function(){
		
		if(counter.enemy<=0 || !counter.enemy){
		//	console.log( vault[content] )
			txt("The "+(Math.random() < 0.5 ? "foe" : "enemy")+" was "+(Math.random() < 0.5 ? "defeated" : "vanquished")+"! ")
			
			if(STATS.item && STATS.item.hp && STATS.item.hp.value<1){
				STATS.change("hp",1);
				txt("I barely survived. ")
			}
			
//DISIGREGANTED			
			loot( vault[content].loot );
			
			
			
//console.log(content);
//console.log( vault[content] );			

			if( vault[content].appendix ){
				vault[content].appendix();
			}else{
				link("Continue ",0,  () => {
					STATS.removeAllEnemies();
					DUNGEON.next() 
				}); 
			}
			
			
			
			
		}else{
		//	console.log(STATS.item.hp.value)
			if(STATS.item && STATS.item.hp && STATS.item.hp.value<1){
				STATS.removeAllEnemies();
				content = "dead";
				link("Death.",101)
				return;
			}
			
			
			
			
			aLink(1,"Attack",0,0,"Attack with "+dh.capitalise(PC.weapon.name)+" causing "+PC.weapon.attack+" damage to one enemy. ");
			if(counter.enemy[1])aLink(2,"Attack "+counter.enemy[1].name,0,0,"Attack with "+dh.capitalise(PC.weapon.name)+" causing "+PC.weapon.attack+" damage to "+counter.enemy[1].name+". ");
			if(counter.enemy[2])aLink(3,"Attack "+counter.enemy[2].name,0,0,"Attack with "+dh.capitalise(PC.weapon.name)+" causing "+PC.weapon.attack+" damage to "+counter.enemy[2].name+". ");			
			
			
			
			if(att.evac)aLink(11,"Evade and attack","eng",-3,"Evade to all enemies and attack one with "+dh.capitalise(PC.weapon.name)+" causing "+PC.weapon.attack+" damage. ");
			if(att.dodg)aLink(12,"Dodge","eng",-1,"Dodge the first enemy attack. ");
			if(att.teas)aLink(13,"Tease","eng",-3,"Try to enthrall enemies with your sexiness. If you succeed, based on your charisma there is "+checkSexyScale()+"% chance the foe will be distracted and will not attact you in the next round. ");
//TEASE
			//if(att.fero)aLink(22,"Ferocious onslaught",bear,-2, "Attack four enemies with "+dh.capitalise(PC.weapon.name)+" causing them "+Math.ceil(PC.weapon.attack/2)+" damage. ");
			
			const bear = DUNGEON.berserk ? "hp" : "eng";
			
			if(att.brut)aLink(21,"Brutal assault",bear,-2, "Hit one enemy with "+dh.capitalise(PC.weapon.name)+" causing him a double damage "+(PC.weapon.attack*2)+". ");
			if(att.doub)aLink(25,"Double strike",bear,-2, "Attack two enemies with "+dh.capitalise(PC.weapon.name)+" causing them both "+PC.weapon.attack+" damage. ");
			if(att.fero)aLink(22,"Ferocious onslaught",bear,-2, "Attack four enemies with "+dh.capitalise(PC.weapon.name)+" causing them "+Math.ceil(PC.weapon.attack/2)+" damage. ");
			
			if(att.pary)aLink(23,"Parry and attack",bear,-3, "Block the first enemy attack and immediately attack with "+dh.capitalise(PC.weapon.name)+" causing "+PC.weapon.attack+" damage.   ");
			if(att.bers)aLink(24,"Berserk","hp",-1, "Till the end of combat hit points will be burned instead of energy. ");
				
			if(att.miss)aLink(31,"Cast Magic Missile","eng",-1, "Cast Magic Missile causing "+att.power+" damage to one enemy. ");
			if(att.blad)aLink(32,"Cast Blades","eng",-2, "Cast Blades causing "+att.power+" damage to 2 enemies. ");
			if(att.wave)aLink(33,"Cast Wave","eng",-3, "Cast Wave of energy causing "+att.power+" damage to 3 enemies. ");
			
			if(att.igni)aLink(34,"Cast Ignite","eng",-3, "Cast Fire causing "+(att.power*2)+" damage to one enemy. ");
			if(att.infe)aLink(35,"Cast Inferno","eng",-4, "Cast Fire causing "+att.power+" damage to 4 enemies. ");
			
			if(att.fros)aLink(37,"Cast Frostbite","eng",-3, "Cast Frost causing "+(att.power*2)+" damage to one enemy. ");
			if(att.bliz)aLink(38,"Cast Blizzard","eng",-4, "Cast Frost causing "+att.power+" damage to 4 enemies. ");
			
			if(att.shie)aLink(41,"Cast Shield","eng",-2, "Cast Magical shield protecting against all attack in this round. " );
			
			if(att.chain)aLink(43,"Cast Chain lighting","eng",-3, "Cast Chain lighting causing 1 damage to all enemies. ");
			if(att.dis)aLink(42,"Cast Disintegrate","eng",-10, "Destroys the first enemy. ");
			
bLink("Health Potion","hp","Restores Health. ");
bLink("Energy Potion","eng","Restores Energy. ");			
bLink("Antivenom","anti","Cures poisoning. ");	
			
			if(debug){
				link("##More Health",1, ()=> STATS.change("hp",30) )
				link("##More Energy",1, ()=> STATS.change("eng",30) )
				
				aLink(11,"##Evade and attack","eng",-3,"Evade to all enemies and attack one with "+dh.capitalise(PC.weapon.name)+" causing "+PC.weapon.attack+" damage. ");
				aLink(12,"##Dodge","eng",-1,"Dodge the first enemy attack. ");
				aLink(13,"##Tease","eng",-3,"Try to enthrall enemies with your sexiness. ");
			
				aLink(21,"##Brutal strike",bear,-2, "Hit one enemy with "+dh.capitalise(PC.weapon.name)+" causing him a double damage "+(PC.weapon.attack*2)+". ");
				aLink(25,"##Double strike",bear,-2, "Attack two enemies with "+dh.capitalise(PC.weapon.name)+" causing them both "+PC.weapon.attack+" damage. ");
				aLink(22,"##Ferocious onslaught",bear,-2, "Attack three enemies with "+dh.capitalise(PC.weapon.name)+" causing them both "+PC.weapon.attack+" damage. ");
				aLink(23,"##Parry and attack",bear,-3, "Block the first enemy attack and immediately attack with "+dh.capitalise(PC.weapon.name)+" causing "+PC.weapon.attack+" damage.   ");
				aLink(24,"##Berserk","hp",-1, "Till the end of combat hit points will be burned instead of energy. ");
				
				aLink(31,"##Cast Magic Missile","eng",-1, "Cast Magic Missile causing "+att.power+" damage to one enemy. ");
				aLink(32,"##Cast Blades","eng",-2, "Cast Blades causing "+att.power+" damage to 2 enemies. ");
				aLink(33,"##Cast Wave","eng",-3, "Cast Wave of energy causing "+att.power+" damage to 3 enemies. ");
			
				aLink(34,"##Cast Ignite","eng",-3, "Cast Fire causing "+(att.power*2)+" damage to one enemy. ");
				aLink(35,"##Cast Inferno","eng",-4, "Cast Fire causing "+att.power+" damage to 4 enemies. ");
			
				aLink(37,"##Cast Frostbite","eng",-3, "Cast Frost causing "+(att.power*2)+" damage to one enemy. ");
				aLink(38,"##Cast Blizzard","eng",-4, "Cast Frost causing "+att.power+" damage to 4 enemies. ");
			
				aLink(41,"##Cast Shield","eng",-2, "Cast Magical shield protecting against all attack in this round. " );
				aLink(43,"##Cast Chain lighting","eng",-3, "Cast Chain lighting causing 1 damage to all enemies. ");
				aLink(42,"##Cast Disintegrate","eng",-10, "Destroys the first enemy. ");
			
			 
				link("##Skip ",0,  () => {
					STATS.removeAllEnemies();
					DUNGEON.next() 
				}); 
				
			return;
			};
			
			
			/*		
			//TODO temp 
			switch(att.class){
				case 1: 
					att.dodg = true;
					att.teas = true;
					break;
				case 2:
					att.brut = true;
					att.fero = true;
					att.pary = true;
					break;
				case 3:	
					att.blad = true;
					att.flam = true;
					att.shie = true;
					break;
			}
			//aLink(1,"Attack");
	*/		
		}
		
		
	}
	
	return{
		start,
		create,
		recreate,
		next,
		nextSpecific,
		labyrint,
		end,
		cancel,
	//	finale,
		active,
		loot,
		
		restart,
		
		active,
		seed,
		backContent,
		backInput,
		progress,
		original_money,
		original_inventory,
		
		berserk,
		seduction,
		poison,
		poisoned,
		
		vaultAlt,
		attack,
		list,
		aLink,
		
		
		labyrintLenght,
	};
})();


const vault = {};



vault.dead = function(){
		txt("Everything around me went completely dark. I was suddenly in the middle of the endless void. ");
		//ASAP - DEAD SCREEN
		redded("YOU ARE DEAD!");
		txt("Explained the blood-red inscription. ");
		link("Try again. ", 0,()=> DUNGEON.restart() ); //TODO - LOAD AUTOSAVE;
}


















function bigWarning(probability){
	const random = Math.random()*10;
	//if( att.savy )console.log(random+" < "+(counter.enemy.length + 1) )
	if( att.savy && random < probability ){
		if(vault[content].warned){
			vault[content].warned();
		}else{
			main(101);
		};
	}else{
		main(101);
	};		
};


function peonWarning(){
	const random = Math.random()*10;
	if( att.savy )console.log(random+" < "+(counter.enemy.length + 1) )
	if( att.savy && random < (counter.enemy.length + 1) ){
		if(vault[content].warned){
			vault[content].warned();
		}else{
			main(101);
		};
		//vault[content].warned();
	}else{
		main(101);
	};		
};





vault.instakill = {
	intro: () => {
		counter.enemy = 18;
		txt("Iinstakil  "); 
	},
	reaction: (input) => {
		txt("Iinstakil  sdfsdf "); 
		STATS.change("hp",-50);
	}
	
}





 
function checkSexyScale(){
	switch(att.char){
		case 0: return 20;
		case 1: return 30;
		case 2: return 40;
		case 3: return 50;
		case 4: return 60;
		case 5: return 70;
		case 6: return 80;
		default: return 90;
		
	};
}

function checkSexy(adjust = 0){
	if(!DUNGEON.seduction)return;
	
	let prob = checkSexyScale();
	
	prob += adjust;
	
	const random = (Math.random()*100);
	
	if(debug)console.log("Teasing "+prob+" > "+random);
	if( prob > random )return true;
	
//	if( ((base/5) * sexiness) > (Math.random()*100) )return true;
	
	return false;
};









vault.warGoblins_X = {
	intro: (input) => {
				
		counter.enemy = [];
		setSexy();
		
		let foes = 1 + Math.ceil( Math.random() * 3);
		for(let i = 0; i < foes; i++)counter.enemy[i] = {hp: 3, name: "Goblin #"+(i+1), attack: 2};
		counter.enemy[counter.enemy.length] = {hp: 5, name: "Goblin Chief", attack: 2};
		txt("I was ambushed by a warband of "+dh.number2word(counter.enemy.length)+" goblins. They were unusually well-equipped and organized, carrying red and black symbols and banners of Rhan-Buruzumu. "); 
			
	},
	reaction: (input) => {
		
		if(debug)txt("##WARGOBLINS: number:"+counter.enemy.length+"; averag hp: 3; avrg. attack: 2;");
		
		txt(counter.enemy.length>1 ? "I was fighting against a warband of "+dh.number2word(counter.enemy.length)+" goblins carrying colors of Rhan-Buruzumu. " : "I was fighting against the last remaining goblin. "); 
		counter.temp = 0;

		switch(input){
			case 13: 
				txt("I revealed my naked body. The vile horny creatures were amazed and crudely expressed the interest in capturing and enslaving me. ");
				setSexy(3);
				break;
				
			case 11: //evAc
				for(let i = 0; i < counter.enemy.length; i++){
					if( checkSexy(50) ){
						txt(counter.enemy[i].name+" tried to grope me when I moved close to him. ");
					}else{
						txt("I evaded the attack of "+counter.enemy[i].name+". ");
					};
				};
				txt("I managed to "+WARDROBE.attack()+" "+counter.enemy[counter.enemy.length-1].name+". ");
				counter.enemy[counter.enemy.length-1].hp -= PC.weapon.attack;
				break;
			case 41: 
				txt("Goblins were angrily screeching but none of their attacks got through my shield. ");
				break;
			default: 
				for(let i = 0; i < counter.enemy.length; i++){
		txt(i);
					
					if(i > 2){
						if( checkSexy() ){
							txt(counter.enemy[i].name+((Math.random()<0.5) ? " screamed obscenities at me. " : " vividly described what he will do with my whorish body. ")   );
						}else{
							txt(counter.enemy[i].name+" wanted to attack me but was blocked by other goblins. ");
						};
						
					}else{
						if( checkSexy(60) ){
							txt(counter.enemy[i].name+" intended to attack me but hesitated. He wanted me alive! ");
						}else{
							if(input==12){
								txt("I gracefully dodged the attack of "+counter.enemy[i].name+". ");
								input = 0;
								continue
							};
							if(input==23){
								txt("I easily parried the attack and "+WARDROBE.attacked()+" "+counter.enemy[i].name+". ");
								counter.enemy[i].hp -= PC.weapon.attack;
								input = 0;
								continue
							};
							
							txt(counter.enemy[i].name+" attacked and hit me. ");
							counter.temp += counter.enemy[i].attack;
						};	
					};
					
				};
		};
		
		STATS.change("hp",-counter.temp);
		
		switch(input){
			case 1: //attack
				if(PC.weapon.attack >= counter.enemy[0].hp){
					txt("I "+WARDROBE.attacked()+" "+counter.enemy[0].name+" with my "+PC.weapon.name+" and killed him. ");
				}else{
					txt("I "+WARDROBE.attacked()+" "+counter.enemy[0].name+" with my "+PC.weapon.name+". ");
				}
				counter.enemy[0].hp -= PC.weapon.attack;
				break;
			
			case 21: //brut
				if(PC.weapon.attack*2 >= counter.enemy[0].hp){
					txt("I "+WARDROBE.fataled()+" "+counter.enemy[0].name+" with no mercy. ");
				}else{
					txt("I brutally "+WARDROBE.attacked()+" "+counter.enemy[0].name+" causing some serious damage. ");
				}
				counter.enemy[0].hp -= PC.weapon.attack*2;
				break;
			case 22: //frero
				txt("I furiously charged against goblins, hitting them right and left. ");
				for(let i=0;i<3;i++)if(counter.enemy[i])counter.enemy[i].hp -= PC.weapon.attack;
				break;
			case 31: //mis
				txt("My magic missile hit "+counter.enemy[0].name+". ");
				counter.enemy[0].hp -= att.power;
				break;
			case 32: //blade
				txt("I cast two razor-sharp blades and send them forward. ")
				for(let i=0;i<2;i++)if(counter.enemy[i])counter.enemy[i].hp -= att.power;
				break;
				
			case 33: //wave
				if(counter.enemy.length == 1){
					txt("I cast the magic wave. The most of energy was uselessly scattered but the remaining hit the goblin. ")
					counter.enemy[0].hp -= att.power;
				}else{
					txt("I cast magic wave and send it against screaming goblins. ");
					for(let i=0;i<3;i++)if(counter.enemy[i])counter.enemy[i].hp -= att.power;
				};
				break;
			case 34: //ingni
				txt("I cast ignite and "+counter.enemy[0].name+" was devoured by vicious bright green flames. ");
				counter.enemy[0].hp -= att.power*2;
				break;
			case 35: //ifer
				if(counter.enemy.length <= 4){
					txt("All the goblins were quickly encircled and burned by the bright green flames I conjured. ")
				}else{
					txt("I send the bright green flames against the panicking goblins. ");
				};
				for(let i=0;i<4;i++)if(counter.enemy[i])counter.enemy[i].hp -= att.power;
				break;
				
			case 37: //bite
				txt("I cast frostbite and "+counter.enemy[0].name+" was turned into a big icicle. ");
				counter.enemy[0].hp -= att.power*2;
				break;
			case 38: //bliz
				if(counter.enemy.length <= 4){
					txt("All the goblins quickly disappeared in the blizzard I conjured. . ")
				}else{
					txt("The blizzard did not reach all the goblins but screaming of those inside was satisfying enough. ");
				};
				for(let i=0;i<4;i++)if(counter.enemy[i])counter.enemy[i].hp -= att.power;
				break;
		};
		
		
		
		for(let i = counter.enemy.length-1; i >= 0; i--){
			if(counter.enemy[i].hp<=0)counter.enemy.splice(i,1);
		}
//console.log(counter.enemy);
		
		if(counter.enemy.length>0)txt(counter.enemy.length>1 ? "There were "+dh.number2word(counter.enemy.length)+" live goblins remaining. " : "Only single goblin was still alive. "); 
		
	},
	loot: [2,"randomElixir","randomElixir"],
};






vault.cavern_monster = {
	story: (input) => {switch(input){
			case 101:
				txt("enter celar ")
				link("cellar1 ",102); 
				break;
			case 102:
				txt(" celar 2")
				link("cellar1 ",0, (function(){ DUNGEON.finale() })  ); 
				break;
		}
	}	
	
};

 

			 


const STATS = (function(){ 
	var item = [];
	const MAX = 400; //max width of bar 
	const div_stats = document.getElementById("div_stats");
	
	let freeze = false; 
	
	
	const save = function(){
		let temp = {};
		for (key in this.item) {
			if(this.item[key]&&this.item[key].value&&!this.item[key].enemy)  temp[key] = this.item[key].value; //TODO
		}
		return temp
	}
	
	const load = function(temp){
/*		
console.log("ST LOAD");
console.log(temp);
*/
		for (key in temp) {
//console.log(key)
			if( !this.item[key] )continue;
			let difference = temp[key] - this.item[key].value;
/*console.log(temp[key])

console.log(difference)
*/
			change(key,difference)
		}
	}
	
	
	const recalculate = function(what,newMax){
/*console.log("RECAL");
console.log(this.item[what]);
console.log(this.item[what].bar);
*/
		if(!this.item[what] || !this.item[what].bar)return;

//console.log(this.item.what)
		this.item[what].max = newMax;

//console.log(this.item[what].max)

		if(this.item[what].value>this.item[what].max) this.item[what].value = this.item[what].max;
		this.item[what].bar.style.width = ( MAX * (this.item[what].value/this.item[what].max) );

//console.log(this.item[what])

	}
	

	
	const create = function(){	//"HP",30,"red","Will",30,"Magika",
		remove();
		div_stats.style.display = "block";
/*
console.log("arguments")
console.log(arguments)
		*/
		for (let i = 0; i < arguments.length; i++) {
			this.item[arguments[i].name]={
					label: arguments[i].label,
					value: (typeof arguments[i].value === "function") ? arguments[i].value() : arguments[i].value,
					max: (typeof arguments[i].max === "function") ? arguments[i].max() : arguments[i].max,
					color: arguments[i].color,
					on_death: arguments[i].on_death,
					on_overflow: arguments[i].on_overflow,
			};
		};
		
		
/*
console.log(this.item);
console.log(typeof this.item.hp.value);
		 */
		for(i in this.item){
			if ( !this.item.hasOwnProperty(i)  )continue;
			
			let container = document.createElement("DIV");
			container.id = "container_"+i;
			container.className="stats_container"; 
			div_stats.appendChild(container);
		
			let label = document.createElement("DIV");
			label.id = "label_"+i;
			container.appendChild(label);
			label.innerHTML = this.item[i].label;
			label.className="stats_label"; 
//console.log(label);			

			let bar = document.createElement("DIV");
			bar.id = "bar_"+i;
			container.appendChild(bar);
			bar.className="stats_bar"; 
			//bar.classList.add("stats_bar");
			
		//	console.log("LXL")
		//	console.log(this.MAX*(this.item[i].value/this.item[i].max))
		//	console.log(this.MAX+"; "+this.item[i].value+"; "+this.item[i].max)
			bar.style.width=( MAX * (this.item[i].value/this.item[i].max) );
			bar.style.background = this.item[i].color;
			
			bar.style.backgroundImage= "linear-gradient(hsla("+this.item[i].color+", 100%, 75%, 1), hsla("+this.item[i].color+", 100%, 50%, 1), hsla("+this.item[i].color+", 100%, 25%, 1) )";

//console.log(bar);			

			this.item[i].bar = bar;
			//label.innerHTML = this.this.item[i].label;
	
		(function(i){ 
			bar.addEventListener("mouseenter",function(event){
			/*	console.log("asdas")
				console.log(i)
				console.log(STATS.item[i].label)
			*/	ultra(event,
					STATS.item[i].label+" "+STATS.item[i].value+"/"+STATS.item[i].max
				)
			}, false);
			bar.addEventListener("mousemove",function(event){
				ultraUpdate(event)
			}, false); 
			bar.addEventListener("mouseleave",function(){
				ultraOff()       
			}, false); 
		})(i);		
		
//console.log(this.item[i])			
			
		};
		
	};

	const cure = function(){
		STATS.item["hp"].bar.style.backgroundImage= "linear-gradient(hsla("+STATS.item["hp"].color+", 100%, 75%, 1), hsla("+STATS.item["hp"].color+", 100%, 50%, 1), hsla("+STATS.item["hp"].color+", 100%, 25%, 1) )";
		DUNGEON.poisoned = 0;
	};
	
	const poison = function(index,severity = 5){
		if(index=="hp"){
			const name = "hp";
			STATS.item[name].bar.style.backgroundImage= "linear-gradient(hsla("+STATS.item[name].color+", 100%, 50%, 1), hsla("+STATS.item[name].color+", 100%, 25%, 1), hsla("+STATS.item[name].color+", 100%, 5%, 1) )";
			DUNGEON.poisoned = severity;
			return;
		};
		
		
		if(counter.enemy[index].antivenom)return;
		
		
		const name = counter.enemy[index].id;
		counter.enemy[index].poisoned = true; 
		
		if(!STATS.item[name]||typeof STATS.item[name].value == "undefined")return;
		
		
	//	console.log( STATS.item[name] );
		
		STATS.item[name].bar.style.backgroundImage= "linear-gradient(hsla("+STATS.item[name].color+", 100%, 50%, 1), hsla("+STATS.item[name].color+", 100%, 25%, 1), hsla("+STATS.item[name].color+", 100%, 5%, 1) )";
		/*for(i in this.item){
			if ( !this.item.hasOwnProperty(i)  )continue;
			
			if(this.item[i] && this.item[i].enemy && this.item[i].enemy){
				if
				
			}
		
		}
		*/
	}

	const removeAllEnemies = function(){
	/*	console.log(this)
		console.log("ENEMIES REMOVESD")
	*/	
		for(i in this.item){
			if ( !this.item.hasOwnProperty(i)  )continue;
			
			if(this.item[i]&&this.item[i].enemy){
				
				const childToMurder = document.getElementById("container_"+i);
				div_stats.removeChild(childToMurder);
				delete this.item[i]; //TODO - REMOVE VARIABLE!!!!	- check
			}
		
		}
	}
	
	
	const removeEnemy = function(index){
		const nameID = counter.enemy[index].id;
//		console.log(this);
		
		const childToMurder = document.getElementById("container_"+nameID);
		div_stats.removeChild(childToMurder);
		
		delete this.item[nameID]; //TODO - REMOVE VARIABLE!!!! - check if works
		
		
	}
	
	const addEnemy = function(index){	//"HP",30,"red","Will",30,"Magika",
	/*	console.log("addbar");
		console.log(this);
		//div_stats.style.display = "block";
		console.log(index);	
		console.log(counter.enemy)
	*/	const nameID = counter.enemy[index].id;
		this.item[nameID]={
				label: counter.enemy[index].name,
				value: counter.enemy[index].hp,
				max: counter.enemy[index].hp,
				color: counter.enemy[index].color ? (index % 2 == 0 ? counter.enemy[index].color-5 : counter.enemy[index].color+5) : (index % 2 == 0 ? 20 : 30),
				enemy: true,
		};
	
	//console.log(this.item[nameID].color);
 
			let container = document.createElement("DIV");
			container.id = "container_"+nameID;
			container.className="stats_container"; 
			div_stats.appendChild(container);
		
			let label = document.createElement("DIV");
			label.id = "label_"+nameID;
			container.appendChild(label);
			label.innerHTML = this.item[nameID].label;
			label.className="stats_label"; 

			let bar = document.createElement("DIV");
			bar.id = "bar_"+nameID;
			container.appendChild(bar);
			bar.className="stats_bar"; 
			//bar.classList.add("stats_bar");
			
		//	console.log("LXL")
		//	console.log(this.MAX*(this.item[i].value/this.item[i].max))
		//	console.log(this.MAX+"; "+this.item[i].value+"; "+this.item[i].max)
			bar.style.width= ( MAX * (this.item[nameID].value/ (this.item[nameID].max*2) ) ); //HERE IS DIFFERENCE
			bar.style.background = 0; //this.item[nameID].color;
			
/*		console.log("xx")
		console.log(this.item[nameID].color)
		*/
//		bar.style.backgroundImage= "linear-gradient(hsla("+30+", 100%, 75%, 1), hsla("+30+", 100%, 50%, 1), hsla("+30+", 100%, 25%, 1) )";
		bar.style.backgroundImage= "linear-gradient(hsla("+this.item[nameID].color+", 100%, 75%, 1), hsla("+this.item[nameID].color+", 100%, 50%, 1), hsla("+this.item[nameID].color+", 100%, 25%, 1) )";
//console.log( bar.style.backgroundImage) 
 
			this.item[nameID].bar = bar;
			//label.innerHTML = this.this.item[i].label;
	
		
			bar.addEventListener("mouseenter",function(event){
			/*	console.log("asdas")
				console.log(i)
				console.log(STATS.item[nameID].label)
			*/	ultra(event,
					STATS.item[nameID].label+" "+STATS.item[nameID].value+"/"+STATS.item[nameID].max
				)
			}, false);
			bar.addEventListener("mousemove",function(event){
				ultraUpdate(event)
			}, false); 
			bar.addEventListener("mouseleave",function(){
				ultraOff()       
			}, false); 
			
		
 		
			
		 
		
	};
	
	
	
	const check = function(name){
		if(!this.item[name])("ERROR - stat with name '"+name+"' NOT found. (Stats check, Event "+active_chapter+")")
		return this.item[name].value
	};


	const changeEnemy = function(index,value){
		if(counter.enemy[index]&&typeof counter.enemy[index].hp != "undefined")counter.enemy[index].hp += value;
		const name = counter.enemy[index].id;
		if(!value)return;
		if(!STATS.item[name]||typeof STATS.item[name].value == "undefined")return;
		
		//if(counter.enemy[index].hp>STATS.item[name].max*2)counter.enemy[index].hp = STATS.item[name].max*2;
		
		STATS.item[name].value += value;
		
		counter.enemy[index].hp = STATS.item[name].value; //FML
	
		if(STATS.item[name].value<=0){
			STATS.item[name].value=0;	
		}else if(STATS.item[name].value>STATS.item[name].max*2){
			STATS.item[name].value = STATS.item[name].max*2;	
		};
		
		let unit = MAX/ (STATS.item[name].max*2);
		let final_width = Math.round(STATS.item[name].value*unit);
		
		let width = Math.round(STATS.item[name].bar.offsetWidth);
		barInterval = setTimeout(function(){barAnimation(name,width,final_width)}, 100);
	}	
	
	
	
	const change = function(name,value){
		/*console.log(freeze);
		console.log(this.freeze);
		console.log(STATS.freeze);
alert();
*/
		if(STATS.freeze)return;
	/*	console.log(this)
		console.log(name);
		console.log(STATS.item);
	*/	if(!value)return;
	//	if(!STATS.item[name])alert("ERROR - stat with name '"+name+"' NOT found. (Statchange, Event "+active_chapter+")")
	
//console.log(STATS.item);

		STATS.item[name].value += value;
	
		if(STATS.item[name].value<=0){
			STATS.item[name].value=0;	
			if(STATS.item[name].on_death!=0){
			//	main(STATS.STATS.item[index].on_death);
	//NEEDS TO STOP ALL THE FUNCTION, IF NOT POSSIBLE, TRY OVERRIRDE
				//ugly hack:
				URDEAD = STATS.item[name].on_death;
				//return
			};
		}else if(STATS.item[name].value>STATS.item[name].max){
			STATS.item[name].value = STATS.item[name].max;	
			if(STATS.item[name].on_overflow!=0){
				URDEAD = STATS.item[name].on_overflow;
				//return
			};
		};
		
		let unit = MAX/STATS.item[name].max;
	/*	console.log(STATS.item[name].value)
		console.log(unit)
	*/	let final_width = Math.round(STATS.item[name].value*unit);
		
		//if(STATS.STATS.item[index].value==0){final_width=1};
		//ANIMATION ASAP
		
		let width = Math.round(STATS.item[name].bar.offsetWidth);
//console.log(width)
		barInterval = setTimeout(function(){barAnimation(name,width,final_width)}, 100);
		//????
	
	 
	};
	
	var barInterval;
	//PLACEHOLDER, REPLACE WITH CSSS ANIMATION OR SOMETHING, this is awful
	const barAnimation = function(name,width,final_width){
		if(!STATS.item[name] || !STATS.item[name].bar)return;
/*
console.log("barAnimation")
console.log(this)
console.log(final_width)
*/
		if(width>final_width+2){
			width -= 2;
			STATS.item[name].bar.style.width = width;
			setTimeout(function(){barAnimation(name,width,final_width)}, 10);
		}else if(width<final_width-2){
			width += 2;
			STATS.item[name].bar.style.width = width;
			setTimeout(function(){barAnimation(name,width,final_width)}, 10);
		};
	};


	

 
 
	

	const remove = function(){
		URDEAD = false;//??? shoudl be here? Im keep forgetting to add this otherwise
		
		dh.remove_children(div_stats);
		div_stats.style.display = "none";
		this.item = [];
	};	
	
	const value = function(what){
		console.log(this.item[what]);
	};	


	return{
		create,
		check,
		change,
		remove,
		save,
		load,
		
		freeze,
		
		recalculate,
		value,
		
		item,
		
		addEnemy,
		removeEnemy,
		changeEnemy,
		removeAllEnemies,
		
		poison,
		cure,
	};
})();








function statlink(input,attribute,level,win,fail,statistic,price){
	const index = eventy.length;
	
	//ASSIGNS ATTRIBUTE
	let att_short = "ERROR";
	let att_text = "Strength";
	let att_value = att.str;
				
	let att_bonus = 0;
	if(typeof attribute == "object"){
		att_bonus = attribute[1];
		attribute = attribute[0];
	};
	
	switch(attribute){
		case "str": 
				att_short = "STR";
				att_text = "Strength";
				att_value = att.str;
			break;
		case "int": 
				att_short = "INT";
				att_text = "Intelligence";
				att_value = att.int;
			break;
		case "char": 
				att_short = "CHAR";
				att_text = "Charisma";
				att_value = att.char;
			break;
		case "dex": 
				att_short = "DEX";
				att_text = "Dexterity";
				att_value = att.dex;
			break;
	};
	
	//FINDS DIFFICULTY
	let difficulty = "error"
	switch(level){
		default:
		case -1: difficulty="Trivial"; break;
		case 0: difficulty="Very Easy"; break;
		case 1: difficulty="Easy"; break;
		case 2: difficulty="Medium"; break;
		case 3: difficulty="Hard"; break;
		case 4: difficulty="Very Hard"; break;
		case 5: difficulty="Impossible"; break;
	};

	let chance = 50;
	let actualChance = 50;
	const chanmod = (att_value + att_bonus) - level;
 
	 if(chanmod<-2){ //0
		chance = 0;
		actualChance = 0;
	}else if(chanmod==-2){ //10
		chance = 15;
		actualChance = 20;
	}else if(chanmod==-1){ //30
		chance = 33;
		actualChance = 40;
	}else if(chanmod==0){ //51
		chance = 51;
		actualChance = 60;
	}else if(chanmod==1){ //66
		chance = 66;
		actualChance = 70;
	}else if(chanmod==2){ //85
		chance = 85;
		actualChance = 90;
	}else if(chanmod==3){ //95
		chance = 95;
		actualChance = 96;
	}else if(chanmod>3){ //100
		chance = 100;
		actualChance = 100;
	};
	
	
	//STAT
	let stat_text = "";
	let disabled = false;
//	let fatal = false;
 
	if(statistic && STATS.item[statistic]){
		/*for(var i=0;i<stats.item.length;i++){
			if(stats.item[i].name==statistic){
				stat_text = stats.item[i].label;
				break;
			};	
		};
		if(stat_text=="")alert("ERROR - stat with name '"+name+"' NOT found. (SLink, Event "+active_chapter+")")
		*/
		stat_text = STATS.item[statistic].label;
		if( (STATS.check(statistic)+price) < 0 ){
			if(statistic === "hp"){
				//fatal = true;
			}else{
				disabled = true;
			};
			
		};
	}else{
		statistic="";
		price="";
	};
	
	
	
	
	att_bonus = att_bonus == 0 ? "" : "+ "+att_bonus; //TODO - negative values
	
	alty[index] =  `
		<strong>Chance: ${chance}%</strong>
		<br>Difficulty: ${level}
		<br>${att_text}: ${att_value} ${att_bonus}
	`;
	
	if(price)alty[index] += `
		<br>Failure: ${price} ${stat_text}
	`;
	//<br>Difficulty: ${difficulty} 
	
	
	/*
	Success probability "+chance+"%
	att_text+": "+att_value+"; ; "+price+" "+stat_text+" "
*/
	let caption = "("+att_short+" "+difficulty+") "+input; 
	
	if(disabled){
		text += "<div class=\"link link_dead\" id=\"link_"+index+"\">"+caption+"</div> ";
	}else{
		text += "<div class=\"link\" id=\"link_"+index+"\">"+caption+"</div> ";
	};
	
	
	
	
	
	if(disabled){
		eventy[index] = (function(){ });
	}else{
		eventy[index] = (function(){
		//	console.log(statistic+";"+price);
			/*
console.log(DUNGEON.progress)
			let seed = DUNGEON.progress
			*/
			const rnd = Math.floor( Math.random() * 100 )//Math.floor(dh.seededRandom() * 100);
//console.log("!!!! seeded random "+rnd)
			const resolution = rnd < actualChance ? true : false;
if(debug)console.log("RND - "+rnd+" < "+actualChance+" =  "+resolution+""); //LEE
			if(resolution){
				main(win);
			}else{
				if(statistic === "hp" && (STATS.check(statistic)+price) < 0){
					set.goto("dead");
				}else{
					if(statistic)STATS.change(statistic,price);
					main(fail);
				}
			};
		});
	};
 
};



