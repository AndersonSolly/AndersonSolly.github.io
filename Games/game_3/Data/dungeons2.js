

/*	
function genericAttack(
	{
		name: "goblin",
		names: "",
		group: "a pack", //null if single enemy 
		desc: "",
		
		atac: ""
		cast: ""
	},{
		evac: "",
		dodg: "",
		teas: "I revealed my nude body. The vile horny creatures were amazed and crudely expressed the keen interest in capturing me and turning me into their sex slave. ",
		
		brut: "",
		fero: "",
		pary: "",
		bers: "",
		doub: "",
		
		miss: "",
		blad: "",
		wave: "",
		
		igni: "",
		infe: "",
		
		fros: "",
		bliz: "",
		
		shie: "",
		disi: "",
		chai: "",
	}
)
*/
 

function checkCombatPoison(){
	if(DUNGEON.poisoned>0){
		DUNGEON.poisoned--;
		STATS.change("hp",-1);
		txt("I could feel the poison traveling through my veins, slowly weakening me. ");
		if(DUNGEON.poisoned==0)STATS.cure();
	};
	for(let i = 0; i < counter.enemy.length; i++){
		//txt("I could feel the poison traveling through my veins, slowly weakening me. ");
		if(counter.enemy[i].poisoned)STATS.changeEnemy(i,-1);
	};
}

function genericDefence(
	input = 0,
	emy = {},
	asa = {},
	resist = {},
){
	
	if(debug)console.log("Attack: "+input);
	
	if(!emy.names)emy.names = emy.name+"s";
	
	const him =  !emy.fem ? "him" : "her";
	const he =  !emy.fem ? "he" : "she";
	
	if(debug)txt("##: number:"+counter.enemy.length+"; averag hp: 2; avrg. attack: 2;");
	
	if(emy.desc){
		txt(emy.desc);
	}else{
		if(emy.group == null){
			txt("I was "+dh.pick_one("fighting against","facing")+" "+emy.name+". ");
		}else if(counter.enemy.length>1){
			txt("I was "+dh.pick_one("fighting against","facing")+" "+emy.group+" of "+dh.number2word(counter.enemy.length)+" "+emy.names+". ");
		}else{
			txt("I was "+dh.pick_one("fighting against","facing")+" the last remaining "+emy.name+". ");
		}
	};

	//ENEMY OFFENSIVE ACTION 
		counter.temp = 0;

		switch(input){
			case 24: //BERS
				if(asa.bers){
					txt(asa.bers);
				}else{
					if(emy.group){
						txt(dh.pick_one("I loudly yelled at "+emy.names+", releasing all my suppressed rage. No "+emy.name+" dared to come closer to me. ","I loudly screamed challenging them to attack me. "+emy.names+" were surprised. "));
					}else{
						txt(dh.pick_one("I screamed at "+counter.enemy[0].name+", ready to attack him with complete disregard to my own safety. "));
					};
					
				};
				DUNGEON.berserk = true;
				break;
				
			case 13: //TEAS
				if(asa.teas){
					txt(asa.teas);
				}else if(counter.enemy[0].asexual){
					txt(dh.pick_one("I exposed my naked body. "+counter.enemy[0].name+" was not impressed. "));
				}else{
					txt(dh.pick_one("I revealed my nude body. The vile horny creatures were amazed and excited. "));
				};
				DUNGEON.seduction = true;
				break;
				
			case 11: //EVAC
				for(let i = 0; i < counter.enemy.length; i++){
					if( !counter.enemy[i].asexual && checkSexy() ){
						txt(counter.enemy[i].name+" tried to grope me when I moved close to "+him+". ");
					}else{
						if( counter.enemy[i].cast ) {
							txt("I evaded the spell of "+counter.enemy[i].name+". ");
						}else{
							txt("I evaded the attack of "+counter.enemy[i].name+". ");
						};
					};
				};
				if(asa.evac){
					txt(asa.evac);
				}else{
					txt(dh.pick_one("I managed to "+WARDROBE.attack()+" "+counter.enemy[counter.enemy.length-1].name+". "));
				};
				STATS.changeEnemy(counter.enemy.length-1,-PC.weapon.attack);
				if(DUNGEON.poison)STATS.poison(counter.enemy.length-1);
				break;
				
			case 41: 
				if(asa.shie){
					txt(asa.shie);
//TODO - ONLY [0] CASTING IS CONSIDERED! REVORK FOR MAGICIAN IN OTHER SPOITIONS
				}else if(counter.enemy[0].cast){
					txt(dh.pick_one(dh.capitalise(emy.name)+" cast a spell but it did not penetrate through my shield. "));
				}else{
					txt(dh.pick_one(dh.capitalise(emy.name)+"s were angrily screeching but none of their attacks got through my shield. "));
				};
				counter.enemy[0].cast = void 0;
				break;
			default: 
				for(let i = 0; i < counter.enemy.length; i++){
	
					if(i > 2){
						if( !counter.enemy[i].asexual && checkSexy() ){
//TO DOOBSCENITIES			
							txt(counter.enemy[i].name+((Math.random()<0.5) ? " screamed obscenities at me. " : " vividly described what he will do with my whorish body. ")   );
						}else{
							txt(counter.enemy[i].name+" wanted to attack me but was blocked by other "+emy.names+". ");
						};
						
					}else{
						if( !counter.enemy[i].asexual && checkSexy() ){ //TODO
							txt(counter.enemy[i].name+" intended to attack me but hesitated. He wanted me alive! ");
						}else{
							if(input==12){
								
								if( counter.enemy[i].cast ) {
									txt("I gracefully dodged the spell thrown at me by "+counter.enemy[i].name+". ");
								}else{
									txt("I gracefully dodged the attack of "+counter.enemy[i].name+". ");
								};
								input = -1;
								counter.enemy[i].cast = void 0;
								continue
							};
							if(input==23){
								
								if( counter.enemy[i].cast ) {
									txt(dh.pick_one(
										counter.enemy[0].name+" was about to cast a spell but I did not hesitated, charged and "+WARDROBE.attacked()+" "+him+". "
										,counter.enemy[i].name+" was about to cast a spell but I quickly hit "+him+" with my "+WARDROBE.attacked()+". "
									));
								}else{
									txt("I easily parried the attack and "+WARDROBE.attacked()+" "+counter.enemy[i].name+". ");
								};
								STATS.changeEnemy(i,-PC.weapon.attack);
								if(DUNGEON.poison)STATS.poison(i);
								input = -1;
								counter.enemy[i].cast = void 0;
								continue
							};
							
							
							if( counter.enemy[i].cast ) {
								if(emy.cast){
									txt(emy.cast);
								}else{
									txt(counter.enemy[i].name+" casted a spell! ");
								}; 
								counter.temp += counter.enemy[i].cast;
								counter.enemy[i].cast = void 0;
							}else{
								if( emy.atac && counter.enemy[i].poison && counter.enemy[i].poison > Math.random() ){
									txt(emy.atac+" His attack poisoned me! ");
									STATS.poison("hp",5);
								}else if(emy.atac){
									txt(emy.atac);
								}else if( counter.enemy[i].poison && counter.enemy[i].poison > Math.random() ){
									txt(counter.enemy[i].name+" attacked and hit me. His attack poisoned me! ");
									STATS.poison("hp",5);
								}else{
									txt(counter.enemy[i].name+" attacked and hit me. ");
								}
								counter.temp += counter.enemy[i].attack;
							};
						};	
					};
					
				};
		};
	
	
	
	//PC STAT CHANGE
		STATS.change("hp",-counter.temp);
};

function genericAttack(
	input = 0,
	emy = {},
	asa = {},
	resist = {},
){		
		if(!emy.names)emy.names = emy.name+"s";
		
		const him =  !emy.fem ? "him" : "her";
		const he =  !emy.fem ? "he" : "she";
	
		switch(input){
			case 1: 
			case 2:
			case 3:
				if( !counter.enemy[input-1] ){
					txt("I missed! ");
					break;
				};
				
			//attack
				if(asa.atac){
					txt(asa.atac);
				}else{
					if(PC.weapon.attack >= counter.enemy[input-1].hp){
						txt("I "+WARDROBE.attacked()+" "+counter.enemy[input-1].name+" with my "+PC.weapon.name+" and killed "+him+". ");
					}else{
						txt("I "+WARDROBE.attacked()+" "+counter.enemy[input-1].name+" with my "+PC.weapon.name+". ");
					}
				};
				STATS.changeEnemy(input-1,-PC.weapon.attack);
				if(DUNGEON.poison)STATS.poison(input-1);
				break;
			
			case 21: //BRUT
				if(asa.brut){
					txt(asa.brut);
				}else{
					if(PC.weapon.attack*2 >= counter.enemy[0].hp){
						txt("I "+WARDROBE.fataled()+" "+counter.enemy[0].name+" with no mercy. ");
					}else{
						txt("I brutally "+WARDROBE.attacked()+" "+counter.enemy[0].name+" causing serious damage. ");
					}
				};
				STATS.changeEnemy(0,-PC.weapon.attack*2);
				
				break;
			case 22: //FERO
				if(asa.fero){
					txt(asa.fero);
				}else{
					if(counter.enemy.length > 1){
						txt(dh.pick_one(
							"I attacked "+emy.names+" in close combat, hitting several of them. "
							,"I furiously charged against "+emy.names+" swiftly hitting them right and left. "
						));
					}else{
						txt(dh.pick_one(
							"I furiously charged against "+emy.name+", wildly swinging with my "+PC.weapon.name+". Most of my "+WARDROBE.attacks()+" missed. "
						));
					}
				};
				for(let i=0;i<4;i++)if(counter.enemy[i])STATS.changeEnemy(i,-Math.ceil(PC.weapon.attack/2)); //counter.enemy[i].hp -= PC.weapon.attack;
				for(let i=0;i<4;i++)if(counter.enemy[i] && DUNGEON.poison)STATS.poison(i);
				break;
		
			case 25: //double
				if(asa.doub){
					txt(asa.doub);
				}else{
					if(counter.enemy.length > 1){
						txt("I quickly attacked the first "+emy.name+" and then instantly "+WARDROBE.attacked()+" "+counter.enemy[1].name+" too. ");
					}else{
						txt(dh.pick_one("I assaulted "+counter.enemy[0].name+" with two nimble "+WARDROBE.attacks+". The first nicely landed but the second missed. ","I hit the "+emy.name+" but my second strike missed. "));
					};
				};
				for(let i=0;i<2;i++)if(counter.enemy[i])STATS.changeEnemy(i,-PC.weapon.attack); //counter.enemy[i].hp -= PC.weapon.attack;
				break;
				
			case 31: //MISS
				if(asa.miss){
					txt(asa.miss);
				}else{
					txt("My magic missile hit "+counter.enemy[0].name+". ");
				};
				
				STATS.changeEnemy(0,-att.power);
				//counter.enemy[0].hp -= att.power;
				break;
			case 32: //blade
				if(asa.blad){
					txt(asa.blad);
				}else{
					if(counter.enemy.length == 1){
						txt("I cast two razor-sharp blades and send them forward. One missed but other hit "+counter.enemy[0].name+". ")
					}else{
						txt("I cast two razor-sharp blades and send them forward against "+emy.names+". ")
					};
				};
				for(let i=0;i<2;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
				break;
				
			case 33: //WAVE
				if(asa.wave){
					txt(asa.wave);
				}else{
					if(counter.enemy.length == 1){
						txt("I cast the magic wave. The most of energy was uselessly scattered but the remaining hit the "+emy.name+". ")
					}else{
						txt("I cast magic wave and send it against screaming "+emy.names+". ");
					};
				};
				for(let i=0;i<3;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
				break;
				
			case 34: //INGNI
				if(asa.igni){
					txt(asa.igni);
				}else{
					txt("I cast ignite and "+counter.enemy[0].name+" was devoured by vicious bright green flames. ");
				};
				STATS.changeEnemy(0,-att.power*2);
				break;
			case 35: //IFER
				if(asa.infe){
					txt(asa.infe);
				}else{
					if(counter.enemy.length <= 4){
						txt("All the "+emy.names+" were quickly encircled and burned by the bright green flames I casted. ")
					}else{
						txt("I send the bright green flames against the panicking "+emy.names+". ");
					};
				};
				for(let i=0;i<4;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
				break;
				
			case 37: //BITE
				if(asa.bite){
					txt(asa.bite);
				}else{
					txt("I cast frostbite and "+counter.enemy[0].name+" was turned into a big icicle. ");
				};
				STATS.changeEnemy(0,-att.power*2);
				break;
				
			case 38: //BLIZ
				if(asa.bliz){
					txt(asa.bliz);
				}else{
					if(counter.enemy.length <= 4){
						txt("All the "+emy.names+" quickly disappeared in the blizzard I conjured. . ")
					}else{
						txt("The blizzard did not reach all the "+emy.names+" but screaming of those inside was satisfying enough. ");
					};
				};
				for(let i=0;i<4;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
				break;
				
			case 43: //CHAI
				if(asa.chai){
					txt(asa.chai);
				}else{
					if( counter.enemy[0].hp>4 ){
						txt(dh.pick_one("The lightning did only a mediocre damage. ",counter.enemy[i].name+" survived the lightning without any serious damage. "));
					}else if( counter.enemy.length>4 ){
						txt("I casted the Chain lightning, wreaking havoc among the enemies. ");
					}else{
//TO DO
						txt("I casted the Chain lightning. ");
					};
				};
				for(let i=0;i<counter.enemy.length;i++)if(counter.enemy[i])STATS.changeEnemy(i,-1);
				break;
			
			case 42: //DISI
				if(asa.disi){
					txt(asa.disi);
				}else{
					
					txt(dh.pick_one("In a flash of a lightning, "+counter.enemy[0].name+" was disassembled. "));
					//"Bright flash and the massive monster was... gone. "
					/*
					 if( counter.enemy.length>1 ){
						
					}else{
						
					};
					*/
					
					
					
				};
				
				STATS.changeEnemy(0,-counter.enemy[0].hp);
				break;
		};
		
		
	//CLEARS DEAD ENEMIES	
		for(let i = counter.enemy.length-1; i >= 0; i--){
			if(counter.enemy[i].hp<=0){
				counter.enemy.splice(i,1);
			}
		}
	
	
	
}




//SEWERS 2

vault.sewers_entry_2 = {
	story: (input) => { 
		txt("This time I was more confident when I explored the sewers. I knew about all the enemies and threats, or at least I thought I do.");  
		link("Press forward. ",0, () => DUNGEON.next() ); 
		link("Leave the sewers. ",0, () => DUNGEON.cancel() ); 
	}	
};

vault.sewers_place = {
	story: (input) => { 
		txt("I finally reached the place where I met the group of cultist who nearly murdered that poor young girl. I suspected their lair was not far away. ");  
		link("Press forward. ",0, () => DUNGEON.next() ); 
		//link("Leave the sewers. ",0, () => DUNGEON.cancel() ); 
	}	
};


vault.sewers_lair = {
	price: () => {
		/*
			with 3 attack or 3 base magic
			half of regular thugs! - could be solved diplomatically 
		*/
		if(att.class == 1){
			return {hp: -4, eng: -4} //TODO - recalculate, danger savvy
		}else if(att.class==2){
			return  {hp: -6, eng: -2}
		}else if(att.class==3){
			return {hp: -4, eng: -3}
		};
	},
	
	story: (input) => {switch(input){
			case 101:
				mile.dungeon_sew_cult = 0;
				txt("If I did not know that I was looking for something unusual I might miss the narrow dark side tunnel. After several meters it widened into a spacious cavern. ");
				txt("It was also full of the cultists. They were surprised at first but they did not hesitate for long. ");				
				npc(2,"Who you are and what are you doing here?! ");
				
				link("(Fight) Do not bother with a response. ",0, () => DUNGEON.nextSpecific("cultists") ); 
				link("(Fight) I'm your doom! I'm here to destroy you all and save the great city of Westgard from you and your vile schemes! ",0, () => DUNGEON.nextSpecific("cultists") ); 
				statlink("I'd like to join your cult. ","char",1,104,105);
				statlink("If anybody of you has some second thoughts about dying for your cause, this might be a good time to run. ","str",2,102,103);
				break;
			
			case 102:
				txt("Either they conviction was not very strong or I looked especially dangerous. Nobody was eager to die first. The group of cultist eventually dispersed. ")
				link("Continue further. ",0, () => DUNGEON.next() ); 
				break;
			
			case 103:
				npc(3,"We aren't afraid of you! ");	
				link("Fight. ",0, () => DUNGEON.nextSpecific("cultists") ); 
				break;
				
			case 104:
				if(
					PC.getDim("hornyness")>0.5 
					&& (PC.Mods.skinHue>280 || PC.Mods.irisHue>300) 
					&& ( PC.getDim("tail")>0.5 || PC.getDim("wings")>0.5 || mile.potion[2] )
				){
					mile.dungeon_sew_cult = 1;
					txt("They took a long hard look at me and then they agreed. ");
					npc(3,"Okay. I'm sure our leader will allow a half-demoness like you to join our cause. ");
					link("Personal interview. ",0, () => DUNGEON.next() ); 
					
				}else{
					npc(3,"Really? ");	
					txt("They were very suspicious. ");
					npc(3,"Do you have any skills we might need? ");	
		
					statlink("I know more about dark powers than all you combined! ","int",2,106,105);
					statlink("I'm very strong and a big fan of senseless violence. ","str",2,106,105);
					statlink("Dozens. I'm practically good at everything. ","char",2,106,105);
					
					
				};

				
				break;
			
			case 105:
				npc(3,"We are full! ");	
				npc(2,"Unsuccessful applicants are killed! ");	
				link("Fight. ",0, () => DUNGEON.nextSpecific("cultists") ); 
				break;
				
			case 106:
				mile.dungeon_sew_cult = 1;
				npc(3,"She seems like a good potential candidate. ");	
				npc(2,"Take her to the leader! ");	
				link("Personal interview. ",0, () => DUNGEON.next() ); 
				break;
		
		
		
		}
	},	
	
};


vault.sewers_lair_2 = {
	story: (input) => { 
		txt("Their hideout was very well hidden and it seemed they gathered rather large stockpile of supplies and weapons. ");  
		if(!mile.dungeon_sew_cult){
			txt("Needless to say, I looted everything useful. ");
			DUNGEON.loot(1,"weapon");
			DUNGEON.loot(3,"xHP","xHP","xENG")
		};
		link("Continue. ",0, () => DUNGEON.next() ); 
	}	
};

vault.sewers_lair_3 = {
	price: () => {
		/*
			with 3 attack or 3 base magic
			3/4 of regular thugs! - could be solved diplomatically TODO
		*/
		if(att.class == 1){
			return {hp: -6, eng: -6} //TODO - recalculate, danger savvy
		}else if(att.class==2){
			return  {hp: -10, eng: -3}
		}else if(att.class==3){
			return {hp: -6, eng: -5}
		};
	},
	
	story: (input) => { 
		if(mile.dungeon_sew_cult){
			txt("They led me straight to their leader. ");
			link("Continue. ",0, () => DUNGEON.next() ); 
		}else{
			txt("In the next chamber I found another group of cultist. They seemed a bit more determined than the first group. ");
			link("Fight. ",0, () => DUNGEON.nextSpecific("cultists") ); 
		}
		
	}	
};



vault.sewers_lair_4 = {
	story: (input) => {switch(input){
		case 101:
			npc_set([1,"Cult Leader"]);
			
			if(mile.dungeon_sew_cult){
				
				txt("They leader was an old ominous man.  ");
				npc(1,"So why do you want to join our despicable cause? ");	
				
				link("I'm a secret worshiper of dark gods. I want to serve them! ",110); 
				link("I crave power and will do <i>anything</i> to gain it! ",110); 
				link("Orgies. ",110); 
				
				 
			}else{
				 
				txt("Their leader did not seem phased even though I barged into his office covered by the blood of his minion. ");
				npc(1,"I was expecting you, chosen one! ");	
				kat("Yeah?");
				txt("He was probably making it up on the spot. ");
				npc(1,"You really think you can defeat us? You may destroy our Westgard cell but we are more powerful than you ever imagined! ");	
				
				if(mile.immersion>0){
					kat("It doesn't matter how powerful you are! I don't allow your vile corruption to taint the realm of Beletriad! ");
				}else{
					kat("This is a game and I'm the hero so I'm absolutely sure I can defeat you! ");
				};
				
				link("Fight!  ",0, () => DUNGEON.nextSpecific("sorcerer") ); 
				//link("Fight. ",103); 
			}
			
			break;
			
			
		case 110:
			npc(1,"That is a good answer, very good. And you look exactly like the kind of woman we need. ");	
			kat("So I'm accepted?");
			npc(1,"Unfortunately I know who you are, chosen one! Did you thought you'll trick me so easily?!  ");	
			link("Fight!  ",0, () => DUNGEON.nextSpecific("sorcerer") ); 
			
			/*
			txt("The floor suddenly opened under me and I dropped down into a deep dark pit. ");
			txt("I heard evil laugh from above: ");
			npc(1,"I give you advice: if you don't want do die, don't fight it! ");	
			
			//link("DON'T FIGHT WHAT!?! ",200, () => DUNGEON.nextSpecific("tentacles") ); 
			*/
			break;
			
		case 103:
			txt("I charged against him but the floor suddenly opened under me and I dropped down into a deep dark pit. ");
			txt("It hurt.")
			txt("I heard evil laugh from above: ");
			npc(1,"I give you advice: if you don't want do die, don't fight it! ");	
			
			link("DON'T FIGHT WHAT!?! ",200); 
			break;
			
		case 200:
		
			STATS.create(
				{
					name: "cor",
					label: "Corruption",
					value: 0,
					max: 10,
					color: 330,
			//		on_death: (function(){ death() })
				}
			)
			
			
			if(att.pupils || PC.Mods.irisHue>300){
				txt("Thanks to numerous transformations I suffered, I at least did not need any torch to see in a totall darnkess. ")	
			}else{
				txt("I helplessly fumbled in darkness for a while until my eyes accustomed to it. ");
				
			};
			txt("I was on the bottom of a filthy damp pit. The walls were too steeped nor did I see any other way out. ");
			txt("Slow movement on the other side of the pit revealed I am not alone. ")
			txt("A long tentacle winded around my leg. ");
			
			link("Maybe we could be friends? ",206); 
			link("Cut it off! ",205); 
			break;
		
		case 205:
			txt("Needless to say, the monster did not like it. ");
			link("Fight! ",300); 
			break;
			
		case 206:
			kat("Hello? How are you?");
			txt("However, the intrusive tentacle did not stop, it continued higher, twisting around my leg and thigh. ");
			
			link("Cut it off! ",105); 
			//link("Please stop!",106); 
			break;
	}}
};


vault.sewers_lair_5 = {
	story: (input) => {switch(input){
		case 101:
			mile.strongbox = 1;
			txt("Unfortunately, dead cultists could not provide me the information I badly needed. I searched the whole room and eventually discovered door cunningly hidden behind a tapestry. They were of course locked by some kind of "+(mile.immension<0?"stupid":"")+(mile.immension>0?"exciting":"")+" puzzle. ");
			hint("Assemble together the pieces. They could be dragged and rotated by right click or double click. ")
			link("Solve the puzzle. ",void 0, () =>{
				div_text.innerHTML = "";
				ARVAK.start( 
					()=> main(110),
					()=> main(101),
					"div_text",
					difficulty > 0 ? 4 : 3, 
					difficulty < 0 ? 2 : 3,
				)				
			}); 
			link("Find an alternative solution. ",102);
			break;
			
		case 102:
			txt("I was not able to find any alternative solution. Unless...");
			txt("In the stockpile I have seen some explosive potions. At first it seemed like too dangerous and destructive solution but it always worked in movies...");
			link("Blow up the door. ",105);
			link("Think about it. ",101);
			break;
			
		case 105:
			txt("The explosion was very loud and violent and most of items in the vault did not survive. However, I found several partly burnt documents that revealed the intentions of the evil forces.");
			DUNGEON.loot(1,"legendary");
			DUNGEON.loot(1,"money");
			link("Leave the sewers. ",0, () => DUNGEON.end() );			
			break;
			
		case 110:
			txt("In the vault I found several important documents that revealed the intentions of the evil forces. And more importantly, some valuable loot: ");
			DUNGEON.loot(2,"legendary");
			DUNGEON.loot(1,"money");
			DUNGEON.loot(3,"elixir");
			mile.strongbox = 2;
			link("Leave the sewers. ",0, () => DUNGEON.end() );
			break;	
			
			
	}}
};

/*
vault.sewers_lair_6 = {
	story: (input) => {switch(input){
		case 101:
			txt("In the strongbox, I found several important documents that revealed the intentions of the evil forces. ");
			DUNGEON.loot(1,"legendary");
			DUNGEON.loot(1,"money");
			DUNGEON.loot(3,"elixir");
			mile.strongbox = true;
			link("Continue. ",0, () => DUNGEON.end() );
	}}
};
*/




//SEWERS
vault.sewers_entry = {
	story: (input) => { 
		txt("The sewers were very spacious and even the smell was not as bad as I was afraid. The main path forked and I randomly picked one tunnel. "); 
		link("Press forward. ",0, () => DUNGEON.next() ); 
		link("Leave the sewers. ",0, () => DUNGEON.cancel() ); 
	}	
};

vault.meeting_smugglers = {
	price: () => {
		/*
			with 3 attack or 3 base magic
			half of regular thugs!
		*/
		if(att.class == 1){
			return {hp: -4, eng: -4} //TODO - recalculate, danger savvy
		}else if(att.class==2){
			return  {hp: -6, eng: -2}
		}else if(att.class==3){
			return {hp: -4, eng: -3}
		};
	},
	
	story: (input) => {switch(input){
			case 101:
				
				mile.dungeon_sew_smugglers = 1;
				
				txt("Behind the next corner I ran into a group of five very shady individuals. They looked like the infamous group of smugglers.  ");
				
				txt("They jumped up and grabbed their weapons, clubs, knives, rusty sabres. ");
				npc(3,"Hey! What are doin' here? ");
				kat("I'm just passing! ");
				npc(2,"She can lead pigs straight to us! ");
				
				if(att.class == 1){
					statlink("I'm a whore running from the law! ","char",0,103,110);
				}else if(att.class == 2){
					statlink("I'm a savage barbarian running from the law! ","str",2,104,110);
				}else if(att.class == 3){
					npc(3,"She looks like one of those evil cultists.");
					npc(2,"Are you an evil cultist? ");
					statlink("Yes, I'm definitely an evil cultist. I just got lost. Don't you know where is the meeting place of our evil cult? ","char",2,109,110);
				};
				statlink("I'm an adventurer on an important mission! I swear I won't tell anybody about your whereabouts! ","char",1,102,110);
				link("(FIGHT) Die, scum!",110);
				break;
				
			case 102:
				npc(3,"Okay, in that case everything is all right. You can go. ");
				npc(2,"But if you tell anybody you saw us here... ");
				link("I swear I won't! ",0, () => DUNGEON.next() ); 
				break;
				
			case 103:
				kat("I don't want to meet the guard more than you! I kinda accidentally robbed my last client but he was somebody important and now I have to hide! ");
				npc(3,"Understandable. ");
				npc(2,"If you're lookin' for a nice place to lay low for a while, you can stay with us. ");
				npc(3,"If you know what we mean. ");
				kat("Thanks, but no. ");
				npc(3,"'key. Stay safe from the spiders. ");
				link("Spiders?!?!?! ",0, () => DUNGEON.next() ); 
				break;
				
			case 104:
				kat("Some drunk guy was groping me so I disemboweled him and then guards came and told me it is not allowed and I'll go to the jail. So I disemboweled them too. Were you saying anything? ");
				npc(3,"No. You can go. ");
				npc(2,"Please go. ");
				link("Forward.  ",0, () => DUNGEON.next() ); 
				break;
				
			case 109:
				npc(2,"You got lost? ");
				npc(3,"Evil cultist these days... ");
				npc(2,"Sorry sweetie, we don't know where you are doin' your or baby sacrifices or orgies or demon conjuring or whatever you are doing. ");
				npc(3,"Tho, I've seen some shady people go this way. ");
				txt("Evil cultist?! In these sewers?! I should investigate that. ")
				link("Thank you!  ",0, () => DUNGEON.next() ); 
				break;
				
				
			case 110:
				mile.dungeon_sew_smugglers = 2;
				npc(3,"She's a snitch!  ");
				npc(2,"Kill her!  ");
				link("Fight!  ",0, () => DUNGEON.nextSpecific("smugglers") ); 
				break;
			 
		};
	}	
	
};



vault.meeting_guards = {
	price: () => {
		/*
			with 3 attack or 3 base magic
		*/
		if(att.class == 1){
			return {hp: -3, eng: -2} 
		}else if(att.class==2){
			return  {hp: -6, eng: -3}
		}else if(att.class==3){
			return {hp: -4, eng: -1}
		};
	},
	
	story: (input) => {switch(input){
			case 101:
				//mile.dungeon_sew_smugglers = 1;
				txt("Something grabbed me from behind. I screamed and was ready to fight some horrible terrible tentacle monster but it was just a soldier in the uniform of the city guard. ");
				txt("There was a whole squad and they were looking at me with a suspicion. ");
				npc(2,"Who are you and what are you doing here? ");		
				if(mile.dungeon_sew_smugglers == 2){
					link("I murdered a whole band of smugglers nearby. Was there any reward on their heads or something? ",102);
				}else{
					link("I met a group of smugglers nearby.  ",103);
				};
				link("I'm just an adventurer on a quest. Haven't you see a little girl? ",104);
				break;
				
			case 102:	
				npc_set([2,"Officer"]);
				mile.dungeon_sew_smugglers = 6;
				npc(2,"Yes, there is a huge reward on their heads. Do you have any proofs? ");	
				kat("No... but I can took you back at the place I killed them. ");
				npc(2,"Still, how you prove it was you who killed them and not just some giant spider or other monster? ");	
				kat("Giant spiders?!?!?! ");
				npc(2,"Well, I guess without any proof the reward will forfeit to me and the boys. But thanks for you good job anyway, citizen! ");	
				link("What a dick. ",0, () => DUNGEON.next() ); 
				break;
			
			case 103:	
				mile.dungeon_sew_smugglers = 4;
				txt("Despite my promises I decided to throw them overboard. After all, they were just a smuggler scum. ");
				npc(2,"Really? We're just looking for them. Thank for your help, citizen. ");		
				link("You're welcome, officer! ",0, () => DUNGEON.next() ); 
				break;
				
			case 104:
				npc(2,"No? Why do you need little girls? ");
				kat("Her mother asked me to find her. ")
				npc(2,"Oh, okay. We haven't seen any little girl. Have you seen a gang of smugglers? ");
				if(mile.dungeon_sew_smugglers == 2)link("Yeah, I killed them. Is there any reward?  ",102);
				link("Yes, they were there. ",105, () => {mile.dungeon_sew_smugglers = 4} ); 
				link("Yes, they were over there (show a wrong way). ",105, () => {mile.dungeon_sew_smugglers = 5} ); 
				link("No, I haven't seen anybody. ",105, () => {mile.dungeon_sew_smugglers = 5} ); 
				break;
				
			case 105:
				npc(2,"Thank you, citizen! ");
				link("You're welcome, officer! ",0, () => DUNGEON.next() ); 
				break;
			
		};
	}
	
};

vault.meeting_resolution = {
	story: (input) => {
		if(mile.dungeon_sew_smugglers == 4){
			npc(2,"Hey! You! ");		
			txt("Oh no! It were the smugglers! ");
			kat("Oh no! ")
			npc(2,"You sold us out! ");		
			npc(3,"You'll die! ");	
			link("Fight!  ",0, () => DUNGEON.nextSpecific("smugglers") ); 
		//	link("I didn't say them anything!  ", () => DUNGEON.nextSpecific("smugglers",101) ); 
		}else if(mile.dungeon_sew_smugglers == 5){
			npc(2,"Hey! You! ");		
			txt("Oh no! It was the squad of guardsmen. ");
			npc(2,"We dealt with your accomplices.  ");		
			kat("My accomplices? ");
			npc(2,"And now we'll deal with you. ");		
			link("You'll never get me alive!  ",0, () => DUNGEON.nextSpecific("guards") ); 
		}else{
			txt("I was walking through sewers. ")	
			link("Continue. ",0, () => DUNGEON.next() ); 			
		};	
	},	
	
};



vault.meeting_cultists = {
	price: () => {
		/*
			with 3 attack or 3 base magic
			half of regular thugs! - could be solved diplomatically 
		*/
		if(att.class == 1){
			return {hp: -4, eng: -4} //TODO - recalculate, danger savvy
		}else if(att.class==2){
			return  {hp: -6, eng: -2}
		}else if(att.class==3){
			return {hp: -4, eng: -3}
		};
	},
	
	story: (input) => {switch(input){
			case 101:
				txt("Behind the corner I heard voices. I quietly and carefully sneaked closer. ");
				
				npc(2,"Do we really need to kill her? ");
				npc(3,"Hey! I don't like it either! But she has seen too much! ");
				npc(2,"I just didn't thought serving the Dark gods will be so harsh! ");
				npc(3,"We're in the final phase. We can't afford any weakness, any hesitation! ");
				txt("I decided to intervene. A group cultist in dark long robes were just about to kill a young girl, presumably the one I was looking for. ");

				link("(Fight) Save the girl! ",0, () => DUNGEON.nextSpecific("cultists") ); 
				statlink("You can't just kill a little girl! ","char",3,102,103);
				break;
			
			case 102:
				npc(2,"I guess you are right. ");	
				npc(3,"Your arguments completely convinced us. Take her and go! ");	
				link("Quickly before they change their mind. ",0, () => DUNGEON.next() ); 
				break;
			
			case 103:
				npc(3,"Oh yes. We can and we will. ");	
				link("Fight. ",0, () => DUNGEON.nextSpecific("cultists") ); 
				break;
		}
	},	
	
};





vault.sewers_finale =  function(){
	txt("So that was it. The girl was saved. And not only that. Not a far from the place I found her I discovered an unlocked chest. ");
	DUNGEON.loot(1,"legendary");
	DUNGEON.loot(2,"elixir","armor","money");
	txt("The cultist activity will require a more in-depth investigation but now it was time to go back. ")
	
	if(att.level < 6){
		link("Continue. ",0, () => DUNGEON.nextSpecific("levelUp") ); //to 6
	}else{
		link("Continue. ",0, () => DUNGEON.end() ); 
	};	
 
};


		
	
			
//CAVERN
vault.cavern_entry = {
	price: () => {
		return {hp: 6}
	},
	story: (input) => {switch(input){
			case 101:
				mile.dungeon1_attempts=0;
				txt("I descend down, not sure what to expect. First few rooms and corridors were completely empty. ");
				txt("Only in the fourth one I spotted goblin sentinel. ");
					
				statlink("Attack him and slay him in one mighty blow!","str",1,104,105);
				statlink("Sneak around before he notices!","dex",1,106,107);
				break;
			case 104:
				if(att.str<2){
					txt("I was not very sure when I raised my weapon, but I was able to score a lucky hit and kill the goblin in a single strike. ");
				}else /*if(att.str==3)*/{
					txt("I "+WARDROBE.fataled()+" the unsuspecting goblin with one swift hit. ");
					txt("I was awesome. ");
				//	txt(att.name+" was a brutal killer and );
				};
				txt("I looted his corpse and found some coins and a potion. ");
				PC.money+=2;
				//TODO - MONEY GAIN NOT DISPLAYED 
				DUNGEON.loot(1,"xHP","xENG")
				txt("Drinking unknown liquids carried by goblins did not seem like the brightest idea but on the other hand it was probably just some kind of health potion. ");
				link("Continue. ",0, () => DUNGEON.next() ); 
				break;
			case 105:
				if(att.str<=1){
					txt("I was struggling with my heavy weapon - I was able to strike the unsuspecting goblin, but he just shrugged my hit.  ");
					txt("Direct attack with my current weak and fragile character build was probably a huge mistake. ");
				}else{
					txt("My attack was brutal and ferocious - but I missed. ");
					txt("It was just a bad luck. ");
				};
				txt("And now I was forced to face the angry goblin in a direct one-on-one fight. ");
				link("Try to survive. ",108);
				break;
			case 106:
				if(att.dex>1){
					txt("With ease I sneaked behind the goblin. ");
				}else{
					txt("I carefully sneaked behind the goblin. There were some tense moments but he did not notice me. ");
				};
				link("Continue. ",0, () => DUNGEON.next() ); 
				break;
			case 107:
				if(att.dex<1){
					txt("I tried to sneak behind the goblin, but my clumsy character stumbled and he immediately spotted me. ");
				}else /*if(att.str==3)*/{
					txt("I tried to sneak behind the goblin and I nearly managed to do it, but in the last moment he spotted me. ");
					txt("Just a bad luck.");
					//	txt(att.name+" was a brutal killer and );
				};
				txt("And now I was forced to face the alerted goblin in direct one-on-one fight. ");
				link("Try to survive. ",108);
				break;
			case 108:
				STATS.change("hp",-2);
				txt("I was eventually able defeat the goblin but not before I sustained some injuries. ");
				//PC.money+=2;
				DUNGEON.loot("xHP");
				//DUNGEON.loot("xENG");
				txt("Drinking unknown liquids carried by goblins did not seem like the brightest idea but on the other hand it was probably just some kind of health potion. The game would not reward me with something bad, right? ");
				link("Continue. ",0, () => DUNGEON.next() ); 
				break;
		}
	}	
	
};

vault.cavern_restart = {
	price: () => {
		return {hp: 6}
	},
	story: (input) => {switch(input){
			case 101:
				mile.dungeon1_attempts++;
				txt("Reload, Valsyan Cavern, the entrance, the first room, the corridors and finally the room with the goblin sentinel. ");
				if(difficulty > -1) hint("You can lower the difficulty in Menu > Settings");
				statlink("Attack him and slay him in one mighty blow!","str",1,104,105);
				statlink("Sneak around before he notices!","dex",1,106,107);
				link("Ragequit. ",0, () => DUNGEON.cancel() ); 
				break;
			case 104:
				if(att.str<2){
					txt("I was not very sure when I raised my weapon, but I was able to score a lucky hit and kill the goblin in a single strike. ");
				}else /*if(att.str==3)*/{
					txt("I decapitated the unsuspecting goblin with one swift swing. ");
					txt("I was awesome. ");
				//	txt(att.name+" was a brutal killer and );
				};
				txt("I looted his corpse and found some coins and a potion. ");
				PC.money+=2;
				DUNGEON.loot("elixir");
				txt("Drinking unknown liquids carried by goblins did not seem like the brightest idea but on the other hand it was probably just some kind of health potion. ");
				link("Continue. ",0, () => DUNGEON.next() ); 
				break;
			case 105:
				if(att.str<=1){
					txt("I was struggling with my heavy weapon - I was able to strike the unsuspecting goblin, but he just shrugged my hit.  ");
					txt("Direct attack with my current weak and fragile character build was probably a huge mistake. ");
				}else{
					txt("My attack was brutal and ferocious - but I missed. ");
					txt("It was just a bad luck. ");
				};
				txt("And now I was forced to face the angry goblin in a direct one-on-one fight. ");
				link("Try to survive. ",108);
				break;
			case 106:
				if(att.dex>1){
					txt("With ease I sneaked behind the goblin. ");
				}else{
					txt("I carefully sneaked behind the goblin. There were some tense moments but he did not notice me. ");
				};
				link("Continue. ",0, () => DUNGEON.next() ); 
				break;
			case 107:
				if(att.dex<1){
					txt("I tried to sneak behind the goblin, but my clumsy character stumbled and he immediately spotted me. ");
				}else /*if(att.str==3)*/{
					txt("I tried to sneak behind the goblin and I nearly managed to do it, but in the last moment he spotted me. ");
					txt("Just a bad luck.");
					//	txt(att.name+" was a brutal killer and );
				};
				txt("And now I was forced to face the alerted goblin in direct one-on-one fight. ");
				link("Try to survive. ",108);
				break;
			case 108:
				STATS.change("hp",-2);
				txt("I was eventually able defeat the goblin but not before I sustained some injuries. ");
				PC.money+=2;
				DUNGEON.loot("xHP");
				txt("Drinking unknown liquids carried by goblins did not seem like the brightest idea but on the other hand it was probably just some kind of health potion. The game would not reward me with something bad, right? ");
				link("Continue. ",0, () => DUNGEON.next() ); 
				break;
		}
	}	
	
};


vault.cavern_finale = {
	
	
	appendix: (input) => {
		link("Done. ",0, () => DUNGEON.nextSpecific("levelUp") ); //to 6?
	},
	
	story: (input) => { switch(input){
			case 101:
				counter.enemy = [];
				counter.enemy[0] = {
					hp: 20, name: "Forgotten Beast", attack: 3,
				};
				
				
				txt("I discovered an unlocked chest. I was very lucky.  ");
				DUNGEON.loot(4,"xHP","xENG","elixir","xHP","xENG")
				link("Descend.",102)
				break;
				
			case 102:
				txt("I continued through a very long dark corridor. ");
				txt("Somewhere in ahead of me I could heard distant grumbling that was getting stronger as I was getting closer. ");
				if(mile.dungeon1_attempts==0){
					txt("It was a good thing that I had no idea what was the source of the roaring - otherwise I would had no courage continue. ");
				}else{
					txt("I knew well how horrible monster is awaiting me and I admit I was a bit scared. ")
				};
				link("Sanctum.",103);
				break;
				
			case 103:
				txt("The corridor bent for the last time and I suddenly arrived in a huge lit karst cavern. ");
				txt("I very anxiously entered. Something cracked under my foot - I was a human bone. One of many human bones lying around scattered across the rough floor. ");
				link("Oh no.",104);			
				break;
				
			case 104:
				STATS.addEnemy(0);
				counter.freeze = true;
				
				 
				txt("The horrifying discovery distracted my attention and I nearly jumped in the air when something let out a roar right next to me. ");
				txt("It was an indescribably hideous monster. Over very tall, bloated but fast, with deadly talons ready to tear me apart. ");
				link("Fight!",1);
				link("Flight!",105);		
				
				
				
				break;
				
				
			case 105:
				if(debug)txt("##FORGOTEN BEAST: hp: "+counter.enemy[0].hp+"; attack: "+counter.enemy[0].attack);
				
				txt("I ran because I really did not want to get any close to those deadly talons. ");
				{
					let harm="";
					if(counter.enemy[0].hp>=20){harm="unharmed"}
					else if(counter.enemy[0].hp>=16){harm=""}
					else if(counter.enemy[0].hp>=13){harm="lightly wounded"}
					else if(counter.enemy[0].hp>=9){harm="wounded"}
					else if(counter.enemy[0].hp>=4){harm="seriously wounded"}
					else{harm="fatally wounded"};
					txt("The "+harm+" beast was following me. ")
				};
					
				{
					let difar = -1
					if(counter.enemy[0].hp>=19){difar = -1}
					else if(counter.enemy[0].hp>=14){difar = 0}
					else if(counter.enemy[0].hp>=8){difar = 1}
					else if(counter.enemy[0].hp<=6){difar = 2}
					else{difar = 2};
					
					if(difar<2){
						statlink("Run and evade. ","dex",difar,106,107,"hp",-counter.enemy[0].attack);
					}else{
						link("Run and evade. ",108);
					}
				
					if(difar<4)statlink("Come up with a cunning plan. ","int",2,109,110,"hp",-counter.enemy[0].attack);
				}		
						
				link("Fight",1 );
				break;
				
			case 106:
				txt("I zigzagged through the cavern, dodging stalagmites and stalactites right and left, I never remembered which ones are which but there were plenty of both. ");
				txt("The forgotten beast was chasing me, however it's larger momentum impeded it. The monster was not able to evade obstacles, crashed into them and was only hurt itself. ");   
				
				if(counter.enemy[0].hp < 7){
					STATS.changeEnemy(0, 1-counter.enemy[0].hp );
				}else{
					STATS.changeEnemy(0,-6);
				};
				
				link("Do not slow down! ",105);
				break;
				
			case 107:
				txt("I was not fast enough! I was not able to dodge quickly enough and its long deadly talons painfully cut me! ")
				if(counter.enemy[0].hp < 15) txt("The beast was learning quickly and was getting more careful! ")
				//txt("I zigzagged through the cavern, dodging stalagmites and stalactites right and left, the beast right behind me. ");
				//txt("It was too fast and agile! It was running into obstacles, hurting itself, but every once in while it stretched its talons and painfully cut me.  ");   
				//STATS.changeEnemy(0,-7);
				//if(counter.enemy[0].hp<1)counter.enemy[0].hp=1;
				STATS.change("hp",-counter.enemy[0].attack);
				link("Do not slow down! ",105);
				break;
			
			case 108:
				txt("The badly wounded beast refused to chase me. ");
				link("What now? ",105);
				break;
			
			case 109:
				txt("I noticed one of stalactites (or was it stalagmite?) is not very stable - it was probably badly damaged during some epic fight in the past. ");
				
				txt("I manipulated the beast under it and then threw a stone at the stalactite. To my surprise I accurately hit. My character was a better thrower than I was irl. ");
				/*
				if(att.class==2){
					txt("I manipulated the beast under it and then cast a telekinetic spell. ");
				}else if(att.weapon==1){
					txt("I manipulated the beast under it and then I threw on of my daggers (I was really glad I have two).  ");
				}else{
					
				};
				*/
				txt("The monster madly howled and suddenly did not look so touch with a huge chunk of calcite stabbed deep inside its body. ");
				STATS.changeEnemy(0, 1-counter.enemy[0].hp );
				//if(counter.enemy[0].hp<1)counter.enemy[0].hp=1;
				link("Yeah!",105);
				break;
				
			case 110:
				txt("I was intensively thinking but the only result was I accidentally forgot to dodge and was badly hurt by beast's talons. ");
				STATS.change("hp",-counter.enemy[0].attack);
				link("Think! ",105);
				break;
						
		}
	},
	
	reaction: (input) => {
		
		 
		if(debug)txt("##FORGOTEN BEAST: hp: "+counter.enemy[0].hp+"; attack: "+counter.enemy[0].attack);
		{
			let harm="";
			if(counter.enemy[0].hp>=20){harm="unharmed"}
			else if(counter.enemy[0].hp>=16){harm=""}
			else if(counter.enemy[0].hp>=13){harm="lightly wounded"}
			else if(counter.enemy[0].hp>=9){harm="wounded"}
			else if(counter.enemy[0].hp>=4){harm="seriously wounded"}
			else{harm="fatally wounded"};
			txt("I was facing a terrifying "+harm+" beast. ")
		};
		
			
		if(counter.freeze) return counter.freeze = false;
				
		if(input==12){
			txt("With some difficulties I dodged monster's treacherous lunge. ")
		}else if(input==11){
			txt("I charged straight against the beast but in the last moment I evade its talon and slid on smooth calcite floor right between its legs and hit its vulnerable belly. I was behind the monster before it was able to react. ");
			STATS.changeEnemy(0,-PC.weapon.attack); //counter.enemy[0].hp -= PC.weapon.attack;
		}else if(input==23){
			txt("I deflected monster's mighty attack and quickly repaid with my own and "+WARDROBE.attacked()+" the monster with my "+PC.weapon.name+". ");
			STATS.changeEnemy(0,-PC.weapon.attack); //counter.enemy[0].hp -= PC.weapon.attack;
		}else if(input==41){
			txt("I cast a magical shield. The shield sparkled when the monster tried to tear through it to maul me but endured. ");	
		}else{
			txt("The monster swiftly attacked and mauled me with its sharp claws. ");
			STATS.change("hp",-counter.enemy[0].attack);
		};
		
		//STATS.freeze = false;
		
		switch(input){
			case 1: //attack
				if(PC.weapon.attack >= counter.enemy[0].hp){
					txt("The beast staggered and bled. With one last "+WARDROBE.attack()+" of my "+PC.weapon.name+" I ended its suffering. ");
				}else{
					txt("I "+WARDROBE.attack()+" the beast with my "+PC.weapon.name+" but the attack did far less damage than I hoped. ");
				}
				STATS.changeEnemy(0,-PC.weapon.attack);
				break;
			
			case 13: //seduct
				txt("The "+counter.enemy[0].name+" ignored my seduction attempts. ");
				break;
				
			case 21: //brut
				if(PC.weapon.attack*2 >= counter.enemy[0].hp){
					txt("I focused all my remaining strength and will into one last powerful "+WARDROBE.attack()+". I feared it might not be enough, but it was. ");
				}else{
					txt("I dared to charge straight against the "+counter.enemy[0].name+". We struggled and I caused some really grievous injuries. ");
				}
				STATS.changeEnemy(0,-PC.weapon.attack*2);
				break;
			case 22: //frero
				if(counter.enemy[0].hp <= PC.weapon.attack){
					txt("My light quick attacks were enough to finish the beast. ");
				}else{
					txt("I attacked the monsters with a series of quick strikes. Most of them just glanced off his thick skin, causing only minor damage. ");
				};
				for(let i=0;i<2;i++)if(counter.enemy[i])STATS.changeEnemy(i,-PC.weapon.attack);
				break;
			
			case 24: //beserk
				txt("I loudly cried, trying to intimidate the monster and boost my own courage. ");
				DUNGEON.berserk = true;
				break;
				
			case 31: //mis
				txt("My Magic missile hit "+counter.enemy[0].name+". ");
				STATS.changeEnemy(0,-att.power);
				break;
			case 32: //blade
				txt("I cast two razor-sharp blades and send them forward. One missed but other hit the "+counter.enemy[0].name+". ")
				for(let i=0;i<2;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
				break;
				
			case 33: //wave
				if(counter.enemy.length == 1){
					txt("I cast the magic wave. The most of energy was uselessly scattered but the remaining hit the "+counter.enemy[0].name+". ")
					STATS.changeEnemy(0,-att.power);
				}else{
			//		txt("I cast magic wave and send it against screaming goblins. ");
					for(let i=0;i<3;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
				};
				break;
			case 34: //ingni
				if(counter.enemy[0].hp <= att.power*2){
					txt("The bright green flames engulfed the "+counter.enemy[0].name+". I burned it to death. ");
				}else{
					txt("The "+counter.enemy[0].name+" was instantly engulfed by bright green fire. The monster furiously roared, suffering grievous damage. ");
				};
				STATS.changeEnemy(0,-att.power*2);
				break;
			case 35: //ifer
				txt("Only the edge of the flames I casted hit the "+counter.enemy[0].name+" but it was enough to cause some minor damage. ")
				for(let i=0;i<4;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
				STATS.changeEnemy(0,-att.power);
				/*
				if(counter.enemy <= 4){
					txt("All the goblins were quickly encircled and burned by the bright green flames I casted. ")
				}else{
					txt("I send the bright green flames against the panicking goblins. ");
				};
				for(let i=0;i<4;i++)if(counter.enemy[i])counter.enemy[i].hp -= att.power;
				*/
				break;
				
			case 37: //bite
				if(counter.enemy[0].hp <= att.power*2){
					txt("The "+counter.enemy[0].name+" was frozen to death. ");
				}else{
					txt("The magical frostbites caused the "+counter.enemy[0].name+" very serious injuries. ");
				};
				STATS.changeEnemy(0,-att.power*2);
				break;
			case 38: //bliz
				txt("It was hard to control the blizzard and only part of it hit the "+counter.enemy[0].name+", but it caused some minor damage nevertheless. ");
				for(let i=0;i<4;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
				break;
		};
		
		
		if(counter.enemy[0].hp <= 0){
			txt("The forgotten beast was finally slain, lying dead in a spill of dark ichor.  ");
			counter.enemy = [];
		}else{
			link("Escape!",105);
		};
	},
	loot: [3,"legendary","elixir","armor","weapon"],




	
	
};




//CAVE-IN SIMPLE
vault.caveIn = {
	price: () => {
		// level 0 
		if(att.class == 1){
			return {hp: -2}	
		}else if(att.class==2){
			return {eng: -1}
		}else if(att.class==3){
			return {eng: -3}
		};
	},
	story: (input) => {switch(input){
			case 101:
				txt("The tunnel was blocked by a cave-in. The tunnel was barricaded by several huge boulders and their removal seemed like an exacting task. However, there were no other way. ");
				statlink("Roll the rocks aside. ","str",1,102,103,"eng",-2);
				statlink("Try to crawl through a very narrow gap. ","dex",1,104,105,"hp",-4);
				break;
				
			case 102:
				txt("It was actually easier than I thought, my character was able to handle far more cumbersome boulders than I would in the real life. ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;
			case 103:
				txt("It was literally Sisyphean labor. Once I move one huge boulder, another fell down on its place. It was so tiresome. ");
				statlink("Roll the rocks aside. ","str",1,102,103,"eng",-2);
				statlink("Try to crawl through a very narrow gap. ","dex",1,104,105,"hp",-4);
				break;	
				
			case 104:
				txt("It was really not good for my claustrophobia to crawl through a passage not much wider than my body. But I managed to do it. ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;
			
			case 105:
				txt("I got stuck. For a brief horrible moment I really believed I will be stuck here forever and very slowly die. "+(PC.getDim("breastSize")>28?"I cursed my stupid huge tits. ":"")+" Eventually I managed to free myself, sustaining minor scratches and bruises when I moved backwards. " );
				statlink("Roll the rocks aside. ","str",1,102,103,"eng",-2);
				statlink("Try to crawl through a very narrow gap. ","dex",1,104,105,"hp",-4);
				break;
		}
	}	
};
 
//GATE SIMPLE
vault.gate = {
	price: () => {
		// level 0 
		if(att.class == 1){
			return {eng: -2}	
		}else if(att.class==2){
			return {eng: -1, hp: -1}
		}else if(att.class==3){
			return {eng: -1}
		};
	},
	story: (input) => {switch(input){
			case 101:
				txt("The way forward was blocked by a fancy locked gate. On the wall was a system of levers and I was sure the right combination would be able to open the gate. ");
				statlink("Solve the puzzle. ","int",1,102,103,"eng",-2);
				statlink("Lockpick the mechanism. ","dex",1,104,105,"eng",-4);
				statlink("Break through. ","str",2,106,107,"hp",-3);
				//statlink("Try to use violence and break through. ","str",2,102,101,"hp",-3);
				//DUNGEON.aLink(104,"Try to return and find a different way. ","dun", -3 );
				break;
				
			case 102:
				txt("Thanks to my superior intellect I was able to open the gate without any hassle. ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;
			
			case 103:
				txt("It was more complicated then I thought. I drew several complicated diagrams into the dirt on the floor and I thought I finally had it, but nothing. Gate stayed locked. ");
				statlink("Solve the puzzle. ","int",1,102,103,"eng",-2);
				statlink("Lockpick the mechanism. ","dex",1,104,105,"eng",-4);
				statlink("Break through. ","str",2,106,107,"hp",-3);
				break;
				
			case 104:
				txt("Few dexterous moves, the right slight pressure, sequential removal of pins and the gate was open without any dumb puzzle solving.  ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;
			
			case 105:
				txt("I tried to lockpick the mechanism the same way I would lockpick a chest but it stubbornly resisted and the only result was a wasted time. ");
				statlink("Solve the puzzle. ","int",1,102,103,"eng",-2);
				statlink("Lockpick the mechanism. ","dex",1,104,105,"eng",-4);
				statlink("Break through. ","str",2,106,107,"hp",-3);
				break;
			
			case 106:
				txt("I solved the puzzle with my brute force. Luckily the gate withstand less then my body. ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;
				
			case 107:
				txt("The gate withstood several my violent attacks. It was way sturdier then I expected. ");
				statlink("Solve the puzzle. ","int",1,102,103,"eng",-2);
				statlink("Lockpick the mechanism. ","dex",1,104,105,"eng",-4);
				statlink("Break through. ","str",2,106,107,"hp",-3);
				break;
				/*	
			
			case 104:
				txt("I was forced to trace back my steps and try to find a different way.  ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;	
			*/
		}
	}	
}; 


//BLADES
vault.blades = {
	price: () => {
		// level 0 
		if(att.class == 1){
			return {hp: -2}	
		}else if(att.class==2){
			return {hp: -2}
		}else if(att.class==3){
			return {eng: -1}
		};
	},
	story: (input) => {switch(input){
			case 101:
				txt("I did not suspect anything bad and was nearly killed by a razor-sharp blade which darted from the floor. The next section of the corridor was booby-trapped! ");
				statlink("Very carefully move forward. ","dex",1,102,103,"hp",-4);
				statlink("Find a way to disable the mechanism. ","int",2,104,105,"eng",-2);
				statlink("Dash through. ","dex",3,106,107,"hp",-3);
				
//TODO DASH THROUGH
				/*
				if(att.class==3)link("Be very fast and fearless. ",0, () => DUNGEON.next() );	
				statlink("Be very fast and fearless. ","dex",2,102,103,"hp",-3);
				*/
				break;
				
			case 102:
				txt("I slowly moved forward, cautiously threading, evading all the suspicious places. I still triggered several blades but none of them managed to cut me.  ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;
			
			case 103:
				txt("It gingerly walked forward. But then I triggered the first blade. Shocked and surprised I lost my concentration and triggered another and another. I was happy when I managed to jump back to the start without being completely sliced into pieces. ");
				statlink("Very carefully move forward. ","dex",1,102,103,"hp",-4);
				statlink("Find a way to disable the mechanism. ","int",2,104,105,"eng",-2);
				break;
				
			case 104:
				txt("I mean, nobody would build such an elaborate trap without any way to turn it off? I closely examined the first blade and eventually managed to disable them all and carelessly march forward. ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;
			
			case 105:
				txt("I tried to find out how the trap works. Without any success.  ");
				statlink("Very carefully move forward. ","dex",1,102,103,"hp",-4);
				statlink("Find a way to disable the mechanism. ","int",2,104,105,"eng",-2);
				break;
				
				
			case 106:
//SPELL 
				txt("I decided to bet everything on my speed and dashed forward without any fear or thinking. I reached the other side without being slashed a single time. Fortune favors bold. ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;
				
			case 107:
				txt("I decided to bet everything on my speed and dashed forward without any fear or thinking. Second blade slashed me, then another. But I did not stop or even slow down and bleeding reached the other side. ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;
				
			/*	
			case 103:
				txt("I solved the puzzle with my brute force. Luckily the gate withstand less then my body. ");
				txt("I quickly advanced through the dungeon." );
				break;
			case 104:
				txt("I was forced to trace back my steps and try to find a different way.  ");
				link("Continue. ",0, () => DUNGEON.next() );	
				break;	
			*/
		}
	}	
}; 
	
	
	
	
 


//CHEST
vault.chest = {
	story: (input) => {switch(input){
			case 101:
				txt("In one of the alcoves I discovered a sturdy locked check. It could contain nothing or some wealth beyond measure. Or another stupid potion. Also it could be booby-trapped. ");
			
				counter.level=0;
				switch(Math.ceil(Math.random()*10)){
					case 1:counter.level=4;break;
					case 2:
					case 3:counter.level=3;break;
					case 4:
					case 5:
					case 6:counter.level=2;break;
					case 7:
					case 8:counter.level=1;break;
					default:counter.level=0;//9;10
				};
				if(typeof DUNGEON.vaultAlt != "undefined")counter.level = DUNGEON.vaultAlt;
				
				if(att.lock && Math.random() < 0.5) counter.level++; //SKILL LOCKPICKING  
				
				if(debug) txt("##Chest level: "+counter.level);
			
				statlink("Lockpick it. ","dex",counter.level-1,104,102,"eng",-2);
				if(att.unlo)DUNGEON.aLink(104,"Use magic to unlock it. ","eng", -(1+counter.level) );
				if(debug)link("##CHEAT: Unlock. ",104);	
				link("Leave the chest alone. ",0, () => DUNGEON.next() );	
				break;
				
			case 102:
				txt("I was not able to open the chest.");
				statlink("Lockpick it. ","dex",counter.level-1,104,102,"eng",-1);
				if(att.unlo)DUNGEON.aLink(104,"Use magic to unlock it. ","eng", -(1+counter.level) );
				if(debug)link("##CHEAT: Unlock. ",104);	
				//statlink("Lockpick it. ","dex",counter.level,1931,1932,"eng",-(1+counter.level) );
				link("Leave the chest alone. ",0, () => DUNGEON.next() );	
				break;
				
			case 103:
				txt("I used magic to forcefully open the lock. ");
			case 104:
				txt("I carefully opened the chest. ");
				if(counter.level>2){
					switch(Math.ceil(Math.random()*5)){ //3,4
						case 1: txt("I was very lucky! ");	
							DUNGEON.loot(3,"elixir","armor","weapon","clothes");
							break;
						case 2: txt("In the chest were stashed some potions and other alchemical supplies. ");	
							DUNGEON.loot(3,"elixir");
							break;
						case 3: txt("In the chest were stored military equipment.");	
							DUNGEON.loot(2,"armor","weapon");
							break;
						case 4: txt("The chest was full of garments.");	
							DUNGEON.loot(3,"clothes","armor","clothes");
							break;
						case 5: txt("Wow! I never knew but I always wanted this!");	
							DUNGEON.loot(1,"legendary");
							break;
					};
				}else if(counter.level>1){ //1,2
					switch(Math.ceil(Math.random()*5)){
						case 1:
						case 2: txt("In the chest I found two potion.");	
							DUNGEON.loot(2,"elixir");
							break;
							
						case 3: txt("In the chest was stored armor.");	
							DUNGEON.loot("armor");
							break;
							
						case 4: txt("The chest was full of garments.");	
							DUNGEON.loot(2,"clothes");
							break;
							
						case 5: txt("Inside the chest was a bunch of sundry items, some of them quite valuable.");	
							DUNGEON.loot(2,"money","clothes","elixir","armor","weapon","clothes","elixir");
							break;
					};
				}else{ //0,1
					switch(Math.ceil(Math.random()*4)){
						case 1: txt("The chest was empty. Like what the hell? ");	
								break;
						case 2: txt("Inside I found some money.");	 
								DUNGEON.loot("money");
								break;
						case 3: txt("Inside was some junk and one potion.");	
								DUNGEON.loot("elixir");
								break;
						case 4: txt("The chest was mostly full of useless junk. Still, there were few nice things. "); 
								DUNGEON.loot("clothes","elixir");
								break;
					};
				};
				link("Continue. ",0, () => DUNGEON.next() ); 
				break;
				
		}
	}	
};


vault.corpse = {
	price: () => {
		return {hp: 3, eng: 3}
	},
	
	story: (input) => {
		txt("I found a corpse. Probably some unfortunate adventurer. His - or her - upper body was gone.  ");
		txt("I looted the corpse. ");
		DUNGEON.loot(3,"xHP","xENG","armor","money");
		link("Continue. ",0, () => DUNGEON.next() ); 
	},
};


vault.corridor = function(){
	txt("I was walking through a dark, empty corridor.  ");
	link("Continue. ",0, () => DUNGEON.next() ); 
};


vault.corridor2 = function(){
	txt("I was "+(att.class==2 ? "daringly" : "cautiously")+" pushing forward, expecting danger lurking around every corner.  ");
	link("Continue. ",0, () => DUNGEON.next() ); 
};






 







//TOWER
vault.tower_entry = {
	story: (input) => {switch(input){
			case 101:
				txt("However in the entry hall was the rampage of elementals more obvious, overturned furniture, broken glass, stuff scattered all around. I really did not envied the person who will be cleaning this mess - somehow I doubted it will be the Wizard. Being a maid of a snooty magician had to be an awful job.  ");
				if(att.class == 3){
					hint("Some magical weapons may raise your magical power and make your spells more powerful. ");
				}
				
				link("Upstairs. ",0, () => DUNGEON.next() ); 
				link("Leave the tower. ",0, () => DUNGEON.cancel() ); 
				break;
		};
	},
};

vault.tower_restart = {
	story: (input) => {switch(input){
			case 101:
				txt("Those darned elementals were more fierce than I expected. ");
				txt("I loaded the game again and materialized all way down in the entry hall. ");
				link("Upstairs. ",0, () => DUNGEON.next() ); 
				link("Leave the tower. ",0, () => DUNGEON.cancel() ); 
				break;
		};
	},
};

vault.tower_cabinet = {
	price: () => {
		return {hp: 2, eng: 2}
	},
	story: (input) => {switch(input){
			case 101:
				txt("I discovered a very tempting cabinet full of potions. However, the Wizard in particular asked me to not steal anything. ");
				link("Do not steal anything. ",0, () => DUNGEON.next() ); 
				link("Steal everything! ",102); 
				break;
			case 102:
				txt("I grabbed several potions and then smashed the empty cabinet. What a shame, another piece of furniture which did not survive the rampage of angry elementals. ");
				DUNGEON.loot(3+Math.floor(Math.random()*2),"elixir");
				link("Continue. ",0, () => DUNGEON.next() ); 
				break;
		};
	},
};	


vault.tower_crystal_1 = {
	story: (input) => {switch(input){
			case 101:
				txt("I arrived to the first set of crystals. I needed to tune them - repeat the exactly same sequence. ");
				hint("Watch the sequence and then click on the colors on the right in the correct order. The sequence could be replayed by clicking on the crystal again. Clicking on the wrong color means you have to start from the beginning. ");
				link("Crystals. ",void 0, () =>{
					div_text.innerHTML = "";
					CRYSTAL.start( 
						DUNGEON.next,
						null,
						"div_text",
						4+difficulty, 4, 1
					)				
				}); 
				
				
				if(debug)link("##Skip ",0,  () => DUNGEON.next() ); 
				break;
		};
	},
};

vault.tower_crystal_2 = function(){
	txt("I arrived to the second set of crystals. I hopped the second sequence will not be more complicated than the first one . ");
	link("Crystals. ",void 0, () =>{
		div_text.innerHTML = "";
		CRYSTAL.start( 
			DUNGEON.next,
			null,
			"div_text",
			4+difficulty, 4, 2
		)				
	}); 
	if(debug)link("##Skip ",0,  () => DUNGEON.next() ); 
};

vault.tower_crystal_3 = function(){
	txt("In the corner I spotted the third set of  crystal. ");
	link("Crystals. ",void 0, () =>{
		div_text.innerHTML = "";
		CRYSTAL.start( 
			DUNGEON.next,
			null,
			"div_text",
			3, 6+difficulty, 3
		)				
	}); 
	if(debug)link("##Skip ",0,  () => DUNGEON.next() ); 
};

vault.tower_crystal_4 = function(){
	txt("Finally I arrived to the last set of crystals. ");
	link("Crystals. ",void 0, () =>{
		div_text.innerHTML = "";
		CRYSTAL.start( 
			DUNGEON.next,
			null,
			"div_text",
			5+difficulty, 5, 2
		)				
	}); 
	if(debug)link("##Skip ",0,  () => DUNGEON.next() ); 
};


vault.tower_finale = function(){
	txt("As soon as I was done the crystals started to pulse like a some kind of crazy stroboscope. ");
	txt("I could smell ozone and the ubiquitous sound of a carnage from upper floors stopped. ");
	
	if(att.level < 6){
		link("For the reward! ",0, () => DUNGEON.nextSpecific("levelUp") ); //to 6
	}else{
		link("For the reward! ",0, () => DUNGEON.end() ); 
	};	

};


vault.tower_corridor = function(){
	txt("I was advancing further, carefully looking for the crystals. ");
	link("Continue. ",0, () => DUNGEON.next() ); 
};

vault.tower_corridor_2 = function(){
	txt("I cleared another room. No crystals, no elementals. ");
	link("Continue. ",0, () => DUNGEON.next() ); 
};



//CELLAR
vault.cellar = {
	story: (input) => {switch(input){
			case 101:
				if(att.class==3)att.miss = true;
				txt("I descend into a dark damp cellar. If I did not know I am completely safe back at home and nothing here can actually hurt me, I would be a bit scared. ")
				txt("Soon I ran into the first rat. I expected some cute squeaking mouse, not this huge hideous creature with very sharp teeth. ");
				link("Fight! ",0, () => DUNGEON.next() ); 
				break;
		}
	}	
};

vault.barrels = {
	story: (input) => {switch(input){
			case 101:
				txt("The way deeper to the catacombs under the tavern was blocked by heavy wine barrels. ");
				statlink("Squeeze between them","dex",0,102,101,"eng",-2);
				statlink("Push them aside","str",0,103,101,"eng",-2);
				break;
				
			case 102:
				txt("My nimble character was able to pass through. ");
				link("Continue. ",0, () => DUNGEON.next() ); 
				break;
				
			case 103:
				txt("My mighty character pushed the barrels away with ease. ");
				link("Continue. ",0, () => DUNGEON.next() ); 
				break;			
		}
	}	
};


vault.rat = {
	intro: () => {
		//ATTACK=0;
		counter.enemy = 2;
		txt("I was fighting a hideous rat. "); 
	},
	reaction: (input) => {
/*
console.log("input");	
console.log(input);
*/
	 	STATS.change("hp",-1);
		txt("I was bit by the rat. ");
		if(input==31){
			txt("I cast magical missile and killed the rat. ");
		}else{
			txt("I "+WARDROBE.attacked()+" the rat with my "+PC.weapon.name+" and instantly killed it. ");
		}
		counter.enemy = 0;
		/*
		if(input==1 && counter.enemy <= 1){
			if(PC.weapon && PC.weapon.attack >= 2){
				txt("I "+WARDROBE.attacked()+" the rat with my "+PC.weapon.name+" and instantly killed it. ")
			}else{
				txt("I finally finished the rat. ");
			}
			counter.enemy--;
		}else{
			txt("I "+WARDROBE.attacked()+" the rat with my "+PC.weapon.name+" and caused some very serious damage. ");
			counter.enemy--;
		};
		*/
	},
	loot: [[1,3]],
};

vault.first_potion = {
	story: (input) => {
		txt("On top of a crate was placed a small glass phial with bright liquid, just inviting to be drunk. ");
		txt("In the real life it certainly would not be the smartest decision to drink random unknown liquids, however, the game would not give me anything bad, would it? ");
		txt("I assumed it is some kind of health potion and added it to my inventory. ");
		
		hint("All found items are automatically added to the inventory (the button is on the left below the avatar). Open the inventory to drink the potion. ");
		DUNGEON.loot("xHP");
		link("Continue. ",0, () => DUNGEON.next() ); 
	}	
};

vault.first_swarm = {
	intro: () => {
		switch(att.class){
			case 1:
				att.evac = true;
				break;
			case 2: 
				att.fero = true;
				break;
			case 3: 
				att.wave = true;
				break;
		}
		counter.enemy = 3;
		txt("I was ganged up on by a swarm of rats. "); 
	},
	reaction: (input) => {
		txt(counter.enemy>1 ? "I was fighting with a swarm of "+dh.number2word(counter.enemy)+" rats. " : "I was fighting with the last remaining rat from the swarm. "); 
		counter.temp = 0;
/*
console.log("input");	
console.log(input);
*/
		switch(input){
			case 11: //evAc
				for(let i = 0; i < counter.enemy; i++){
					txt("I was assaulted by a rat but I evaded the attack. ");
				};	
				break;
			default: 
				for(let i = 0; i < counter.enemy; i++){
					txt("I was bit by a rat. ");
					counter.temp++;
				};
		};
		STATS.change("hp",-counter.temp);
		
		switch(input){
			case 1: //attack
				txt("I "+WARDROBE.attacked()+" one rat with my "+PC.weapon.name+" and instantly killed it. ");
				counter.enemy--;
				break;
			
			case 22: //frero
				txt("I attacked the rats without fear, destroying one and then another! ");
				counter.enemy--;
				counter.enemy--;
				counter.enemy--;
				break;
			case 31: //mis
				txt("I cast magical missile and destroyed one rat. ");
				counter.enemy--;
				break;
			case 33: //wave
				txt("I cast magical wave. The raw energy wiped out all the rats. ");
				counter.enemy = 0;;
				break;
			case 11: //evAc
				txt("I managed to "+WARDROBE.attack()+" and kill one rat. ");
				counter.enemy--;
				break;
		};
		
	},
	loot: [[1,3]],
};


 
vault.first_rous = {
	intro: () => {
		switch(att.class){
			case 1:
				att.dodg = true;
				break;
			case 2: 
				att.brut = true;
				break;
			case 3: 
				att.fros = true;
			//	att.infe = true;
			//	att.wave = true;
				break;
		}
		txt("I was surprised by oversized, extremely rabid and dangerous rat! "); 
		counter.enemy = 4;
	},
	reaction: (input) => {
		switch(counter.enemy){
			case 1:
				txt("I was fighting fatally wounded oversized rat. ");
				break;
			case 2:
				txt("I was fighting seriously wounded oversized rat. ");
				break;
			case 3:
				txt("I was fighting lightly wounded oversized rat. ");
				break;
			case 4:
				txt("I was fighting unharmed oversized rat. ");
				break;
		};
		
		switch(input){
			case 11: //evAc
				txt("I was assaulted by a rat of unusual size but I evaded the attack. ");
				break;
			default: 
				txt("I was bit by a rat of unusual size. ");
				STATS.change("hp",-2);
				
		};
		
		
		switch(input){
			case 1: //attack
				txt("I "+WARDROBE.attacked()+" the rat of unusual size with my "+PC.weapon.name+" and caused some decent damage. ");
				counter.enemy -= PC.weapon.attack;
				break;
			case 21: //brut
				txt("I attacked the rat of unusual size with a brutal mighty "+WARDROBE.attack()+"  and caused very substantial damage. ");
				counter.enemy -= PC.weapon.attack*2;
				break;
			
			case 22: //frero
				txt("I ferociously attacked the rat of unusual size but my confused furious attack caused only light damage. ");
				counter.enemy -= PC.weapon.attack;
				break;
			case 31: //mis
				txt("I hit the rat of unusual size with a magic missile and causes some minor damage. ");
				counter.enemy -= att.power;
				break;
			case 33: //wave
				txt("I cast magical wave. It caused some damage to the rat of unusual size but the most of the energy was just scattered. ");
				counter.enemy -= att.power;
				break;
			case 11: //evAc
				txt("I managed to insidiously "+WARDROBE.attack()+" the rat of unusual size. ");
				counter.enemy -= PC.weapon.attack;
				break;
			case 37: //bite
				txt("The rat of unusual size was frozen to death. ");
				counter.enemy -= att.power*2;
		};
		
	},
	loot: [1,[1,5],"LeatherVambraces","FancyLeatherVambraces","BronzeVambraces","BronzeGreaves","LongGloves","LeatherBelt","BarbaricLoincloth","HarlotStockings","FallenTop"],
};


vault.cellar_finale = {
	story: (input) => {
		txt("Finally, all rats in the cellar were dead! "); 
		
		if(difficulty<1){
			/*
			if(att.class == 3){
				DUNGEON.loot("Wand");
				hint("Some weapons can increase your magical power, . ")
			}else{
				DUNGEON.loot(["Falchion","Bludgeon","Spear"]);
			};
			*/
			DUNGEON.loot(["Falchion","Bludgeon","Spear"]);
			hint("You can equip your new weapon in the inventory. ")
		};
		
		//if(difficulty<1 && att.class == 3) DUNGEON.loot(["Falchion","Bludgeon","Spear"Wand"]);
		//if(difficulty<1) DUNGEON.loot(["Falchion","Bludgeon","Spear","Wand"]);
		
		
		
		
		
		link("Next. ",0, () => DUNGEON.nextSpecific("levelUp",101) ); //to 2
	}
};

vault.levelUp_1 = {
	story: (input) => {switch(input){
			case 101:
				snd_levelUp.play();
				imp("LEVEL UP!");
				txt("You advanced to the 2nd level!");
				att.level = 2;
				att.expy = 0;
				
				txt("");
				txt("You gained 2 + "+att.str+" HP ");
				att.hp_base += 2; 
				att.hp_base += att.str; 
				
				txt("");
				txt("You gained 2 + "+Math.ceil((att.str+att.int)/2)+" Energy ");
				att.eng_base += 2; 
				att.eng_base +=  Math.ceil((att.str+att.int)/2);
				
				txt("");
				txt("You gained new skills: ");
				
				switch(att.class){
					case 1:
						txt("<strong>Tease</strong> - attempt to enthrall and distract enemies with your sexiness ");
						att.teas = true;
						txt("<strong>Danger Savvy</strong> - chance to detect enemy and hide (passive) ");
						break;
					case 2:
						txt("<strong>Parry and attack</strong> - block the first enemy attack and immediately attack with weapon ");
						att.pary = true;
						txt("<strong>Berserk</strong> - hit points could be burned instead of energy ");
						att.bers = true;
						break;
					case 3:
						txt("<strong>Magic Missile</strong> - causing base magic damage to one enemy");
						att.miss = true;
						txt("<strong>Blades</strong> - causing base magic damage to two enemies");
						att.miss = true;
						txt("<strong>Blizzard</strong> - causing base magic damage to four enemies");
						att.infe = true;
						txt("<strong>Blades</strong> - causing base magic damage to four enemies");
						att.bliz = true;
						txt("<strong>Magic Shield</strong> - allows to block enemy attacks");
						att.shie = true;
						txt("<strong>Unlock</strong> - open chests");
						att.unlo = true;
						break;
						
				}
				
			//	if(debug)txt("##(WIP - in the next version you will get to pick.)");
				
				link("Done. ",0, () => DUNGEON.end() ); 
				
				break;
		}
	}	
};





vault.levelUp_2 = {
	story: (input) => {switch(input){
			case 101:
				snd_levelUp.play();
				imp("LEVEL UP!");
				txt("You advanced to the 6th level!");
				att.level = 6;
				att.expy = 0;
				txt("");
				txt("You gained 2 + "+att.str+" HP ");
				att.hp_base += 2; 
				att.hp_base += att.str; 
				
				txt("");
				txt("You gained 2 + "+Math.ceil((att.str+att.int)/2)+" Energy ");
				att.hp_base += 2; 
				att.hp_base +=  Math.ceil((att.str+att.int)/2);
			/*	
				txt("");
				txt("You gained new skills: ");
				
			*/
				
				link("Done. ",0, () => DUNGEON.end() ); 
				
				break;
		}
	}	
};







vault.levelUp = {
	story: (input) => {switch(input){
			case 101:
				snd_levelUp.play();
				imp("LEVEL UP!");
				
				switch(att.level){
					default:
						att.level = 2;
						txt("You advanced to the 2nd level!");
						break;
					case 2:
						att.level = 6;
						txt("You advanced to the 6th level!");
						break;
					case 6:
						att.level = 11;
						txt("You advanced to the 11th level!");
						break;
				}
				att.expy = 0;
				
			//	txt("");
				txt("You gained 4 Health points. Based on your strength you gained additional "+Math.floor(att.str*2)+" ones. ");
				att.hp_base += 4; 
				att.hp_base += att.str*2; 
				
				txt("You gained 4 Energy points. Based on your intelligence you gained additional "+Math.floor(att.int*2)+" ones. ");
				att.eng_base += 4; 
				att.eng_base += att.int*2; 
				
				//	txt("");
				/*txt("You gained 2 + "+Math.ceil((att.str+att.int)/2)+" Energy ");
				att.eng_base += 2; 
				att.eng_base +=  Math.ceil((att.str+att.int)/2);
*/
	


				switch(att.level){
					case 2:
						switch(att.class){
							case 1:
								txt("You gained new skills: ");
								txt("<strong>Tease</strong> - attempt to enthrall and distract enemies with your sexiness ");
								att.teas = true;
								/*
								txt("<strong>Dodge</strong> - dodge the first enemy attack ");
								att.dodg = true;
								*/
								txt("<strong>Danger Savvy</strong> - chance to detect enemy and hide (passive) ");
								att.savy = true;
								
								
								link("Done. ",0, () => DUNGEON.end() ); 
								break;
							case 2:
								txt("You gained new skills: ");
								
								txt("<strong>Parry and attack</strong> - block the first enemy attack and immediately attack with weapon ");
								att.pary = true;
								txt("<strong>Double strike</strong> - hit fist enemy and then second, causing them both the full damage ");
								att.doub = true;
								
						/*		
								txt("<strong>Berserk</strong> - hit points could be burned instead of energy ");
								att.bers = true;
						*/		
								link("Done. ",0, () => DUNGEON.end() ); 
								break;
							case 3:
								counter.temp = 3;
								link("Learn new spells. ",102);
								break;
						}
						break;
					case 6:
						switch(att.class){
							case 1:
								txt("You gained new skills: ");
								txt("<strong>Poisoned blade</strong> - your weapon will poison enemies, causing them -1 HP damage per round (passive) ");
								att.pois = true;
								/*
								
								hagle
								potion
								poisonedblade
								*/
								link("Done. ",0, () => DUNGEON.end() ); 
								break;
							case 2:
								txt("You can chose weapon proficiency to gain + 1 bonus to attack: ");
								
								link("Blades. ",0, () =>{ 
										att.profi = 1;
										DUNGEON.end();
								}); 
								link("Hammers. ",0, () =>{ 
										att.profi = 2;
										DUNGEON.end();
								}); 
								link("Polearms. ",0, () =>{ 
										att.profi = 3;
										DUNGEON.end();
								}); 
								break;
								
							case 3:
								counter.temp = 3;
								link("Learn new spells. ",102);
								break;
						}
						break;
					case 11:
						txt("Additional training allows you to boost one of your attributes: ");
						link("Strength. ",103, () =>{ 
							att.str++;
						}); 
						link("Dexterity. ",103, () =>{ 
							att.dex++;	
						}); 
						link("Intelligence. ",103, () =>{ 
							att.int++;	
						}); 
						link("Charisma. ",103, () =>{ 
							att.char++;	
						}); 
											
						//link("Done. ",0, () => DUNGEON.end() ); 
						break;
				}
				
				
				break;
				
			
			
			case 102:
					if(counter.temp == 0){
						DUNGEON.end();
						return;
					};
					
					txt("You can learn "+counter.temp+" more spells; ")
					if(att.level == 2)hint("Pick <i>Blizzard</i> or <i>Inferno</i> for crowd control and <i>Magic Shield</i> to survive against enemies who have one extra powerful attack every few rounds. ")
					counter.temp--;
					
					if(!att.shie){
						txt("<strong>Magic Shield</strong> - block all enemy attacks in the round, - 2 energy");
						link("Learn", 102, ()=> att.shie = true);
					};
					if(!att.blad){
						txt("<strong>Blades</strong> - cause base magic damage to two enemies, - 2 energy");
						link("Learn", 102, ()=> att.blad = true);
					};
					if(!att.igni){
						txt("<strong>Ignite</strong> - cause 2 * base magic damage, - 3 energy");
						link("Learn",102, ()=> att.igni = true);
					};
					if(!att.infe){
						txt("<strong>Inferno</strong> - cause base magic damage to four enemies, - 4 energy");
						link("Learn", 102, ()=> att.infe = true);
					};
					
					if(!att.bliz){
						txt("<strong>Blizzard</strong> - cause base magic damage to four enemies, - 4 energy");
						link("Learn", 102, ()=> att.bliz = true);
					};
					
					if(!att.unlo){
						txt("<strong>Unlock</strong> - open chests, - (chest level + 1) energy ");
						link("Learn", 102, ()=> att.unlo = true);
					};


					
					if(att.level==6){
						if(!att.chai){
							txt("<strong>Chain lightning </strong> - causes damage -1 to all enemies - 6 energy");
							link("Learn", 102, ()=> att.chai = true);
						};
						
						
						/*
						if(!att.heli){
							txt("<strong>Healing spell </strong> - causes damage -1 to all enemies - 4 energy");
							link("Learn", 102, ()=> att.chai = true);
						};
						
						if(!att.saci){
							txt("<strong>Chain lightning </strong> - causes damage -1 to all enemies - 6 energy");
							link("Learn", 102, ()=> att.chai = true);
						};
						*/
						
					};
					

					if(att.level==11){
						if(!att.dis){
							txt("<strong>Disintegrate </strong> - completely disintegrate one enemy - 13 energy");
							link("Learn", 102, ()=> att.dis = true);
						};
						
					};

					
				break;
		}
	}	
};



















//YNIS FARION
vault.ynis_main = {
	story: (input) => {
		switch(input){ 
			/*case 100: 
				txt("The sewers were very spacious and even the smell was not as bad as I was afraid. The main path forked and I randomly picked one tunnel. "); 
				link("Press forward. ",101); 
				link("Leave the sewers. ",102); 
				break;
				*/
				
			case 101:
				counter.days = 0;
				counter.npca = [];
				counter.ellinor = 0;
				counter.commander = 0;
				counter.librarian = 0;
				counter.priestess = 0;
				
				npc_set([1,"Paladin"],[2,"Eldest Librarian"],[3,"Grand Commander"],[4,"Sorceress"],[5,"Ellinor"],[6,"Highest Priestess"]);
				txt("It was dark and rained heavily. I cannot help myself but I pulled my cloak closer to face the cold and dampness. The storm was coming, literally and figuratively - after the fall of Attre we lost Sintra and even Westgard, the beautiful town where I spend so much time, was burned to the ground. ");
				txt("I needed answers and I needed them fast. During my investigation of the Order I had found out petrifying amount of incompetence, corruption or even direct collaboration with the Evil Overlord. The clues led to the sacred Forbidden Island itself.");
				txt("Ynis Farion was a small island in the middle of the Desgeleran lake and from time immemorial the seat of the Order. I needed to call some favours but the High Priestess eventually reluctantly agreed to let me conduct my investigation. ");
				txt("I did not expect to be seized by two arbitrators the moment I disembarked the trireme.");
				link("The Highest Priestess.",102);
				break;
			
			case 102:
				txt("I was brought to the Highest Priestess who did not event tried to hide her disdain. ")
				switch(att.class){
					case 3:
						npc(6,"An apostate like you should be locked in the deepest dungeon and tortured with blades and hot irons, not allowed to freely walk around and interrogate the faithful.  ");
						break;
					case 2:
						npc(6,"We are living in glorious times when are filthy heathens allowed walk around in our most holy place. Your stubborn kind should have been converted or exterminated centuries ago. ");
						break;
					case 0:
					case 1:
						npc(6,"A shameless sinful whore. What a wonderful sight. ");//ASAP
						break;
				};
			//	txt("  ");
				npc(6,"However you have powerful friends who vouched for you. But my goodwill has its limits. If you won't behave, well, lets say there are countless corridors, stairways, dungeons, hidden rooms and passageway. Sometimes visitors unfortunately gets lost, forever. ");
				link("Be humble. ",103);
				link("Be sarcastic. ",104);
				link("Be brash. ",105);	
				break;
				
			case 103:
				STATS.change("for",3);
				counter.priestess++;
				if(mile.immersion>=0){
					switch(att.class){
						case 3:
							kat("I made a grave mistake and betrayed everything I believed in. I regret it every day and I wish I could take it back. But I'm trying to repent my actions prove I deeply care about the fate of Beleriand and that I will do anything to defeat the Evil Overlord. In dark times like these, we need to put away our petty differences if we want to survive and thrive. ");
							break;
						case 2:
							kat("I may be a mere pagan but I always respected and admired your ancient religion. But my faith is not important - I'm a warrior and my actions prove I deeply care about the fate of Beleriand and that I will do anything to defeat the Evil Overlord. In dark times like these, we need to put away our petty differences if we want to survive and thrive. ");
							break;
						case 0:
						case 1:
							kat("I may be a whore - I don't deny that. I made some wrong decisions in my past and I regret them. However I'm trying my best and my actions prove I deeply care about the fate of Beleriand and that I will do anything to defeat the Evil Overlord. In dark times like these, we need to put away our petty differences if we want to survive and thrive.  "); 
							break;
					};
				}else{
					kat("But that's only my stupid backstory! I already finished countless fetch quests which should prove my loyalty to the Order and the Realm. The Evil Overlord is raising his armies to destroy you and you are refusing my willing help? "); //WILLINGHELP
				};
				txt("Her face stayed cold. I was probably not able to win her over but at least I tried. ");
				npc(6,"You can go now. ")
				txt("I bowed and left to start my investigation.");		
				//hint("Conduct investigation. U");		
				link("Investigation. ",109);
				break; 
				
			case 104:
				if(mile.immersion>=0){
					kat("I'm glad to meet you too. Thank you for your nice warm welcome. ");
				}else{
					kat("Whatever. I just need to get this guest finished. ");
				};
				txt("I smiled. She scowled. I did not care. ");
				kat("Now If you excuse me, I will start my investigation immediately. ");
				txt("She beckoned the guards to let me go. ");
				link("Investigation. ",109);
				break;
				
			case 105:
				STATS.change("for",-3);
				counter.priestess--;
				if(mile.immersion>=0){
					kat("You don't need to worry. I completely understand your situation. If it was my stunning incompetence and stupidity what allow the corruption to grow and nearly destroy the ancient order, proving I'm by far the worst leader in the three thousand years history, I would be ashamed too and try everything to obstruct the investigation and cover up my total failure just like you do.  ");
				}else{
					kat("Well, fuck you too. By the amount of corruption I've seen you wouldn't be qualified to run a bordello let alone the Order. ");
				};
				txt("Her face went white, then red, then she smiled. ");
				npc(6,"I did not expect good manners from you and I was not disappointed. ");
				txt("Oh boy. I suspected she will definitely try to kill me and that I should always lock my room, never eat or drink anything suspicious and avoid dark places. Being sassy was probably a huge mistake but after all the stuff I suffered in my real life I really did not want to let a stupid NPC to treat me this way. ");
				link("Investigation. ",109);
				break;
			
			case 109:
				if(counter.days==0){
					counter.days++;
				}else{
					counter.days++;
					STATS.change("for",-1);
				}
				for(let i=0;i<10;i++)counter.npca[i] = true;
				//break; SIC
				
			case 110: 
				txt("Day "+counter.days);
				npc_set([1,"Paladin"],[2,"Eldest Librarian"],[3,"Grand Commander"],[4,"Alchemyst"],[5,"Ellinor"],[6,"Highest Priestess"]);
				
				
				if(STATS.item.tru.max <= STATS.item.tru.value){
				
					txt("I finally gained the last piece of the enigma and the whole case became clear. ");
					txt("It was far worse than I imagined. Such widespread corruption would not be possible without some support from the highest places. It was obvious one of the leaders of the Order was a part of the conspiracy. ");
					txt("I was only not sure which one. ");
					txt("Ellinor was even more shocked than me - I decided to trust her even though I half expected some dumb random last-minute plot twist like that she stabs me in my back just because she is a part of the conspiracy too"+(counter.ellinor >= 3 ? ", even despite her obvious feelings for me. " : ". "));
					npc(5,"This is horrible! ");
					kat("I know! And we can't stop it without finding out who's the main traitor. Any ideas? ");
					npc(5,"Hmm. There might be one way... ");
					kat("?")
					npc(5,"But I need to do it alone. I'll tell you everything tomorrow. ");
					txt("I really did not want to leave her that night. I was pretty sure this was the last time I am seeing her alive. ");
					link("Morning  ",0, () => DUNGEON.next() /* DUNGEON.nextSpecific("ynis_letter")*/ ); 
					
					//link("Morning. ",1000); 
				}else if(STATS.item.for.value <= 0){
					txt("I pissed too many people and was kicked out of the island. ");
					txt("Which meant I totally failed and doomed the fate of the whole realm. ");
					link("Try again. ", 0,()=> DUNGEON.restart() );
				}else{
				
					link("The Highest Priestess. ",120,()=> counter.npca[0] = false,counter.npca[0]);
					link("The Grand Commander. ",130, ()=> counter.npca[8]=false,counter.npca[8]);
					link("The Eldest Librarian. ",140, ()=> counter.npca[7]=false,counter.npca[7]);
					
					link("Paladin. ",150, ()=>  counter.npca[2]=false,counter.npca[2]);
					link("Sorceress. ",160, ()=>  counter.npca[3]=false,counter.npca[3]);
					link("Neophyte. ",170, ()=> counter.npca[4]=false,counter.npca[4]);
					
					if(counter.ellinor == 0){ //intro
						link("Arbitrator. ",300, ()=> counter.npca[5]=false,counter.npca[5]);
					}else if(counter.ellinor == 1){ //distracted by tail/horns/ears
						link("Ellinor. ",301, ()=> counter.npca[5]=false,counter.npca[5]);
					}else if(counter.ellinor == 2){ //sex
						link("Ellinor. ",307, ()=> counter.npca[5]=false,counter.npca[5]);
					}else if(counter.ellinor == -1){ //friendly talk
						link("Ellinor. ",306, ()=> counter.npca[5]=false,counter.npca[5]);
					}else if(counter.ellinor == 3){ //the talk
						link("Ellinor. ",309, ()=> counter.npca[5]=false,counter.npca[5]);
					}else{
						link("Ellinor. ",310, ()=> counter.npca[5]=false,counter.npca[5]);
					};
					
					link("Alchemist. ",190,()=>counter.npca[6]=false,counter.npca[6]);
			
			
					link("Next day.",109);
				};
				
				break;
				
			case 120:
				txt("I was told The Highest Priestess has no desire to talk with me. ");
				txt("What a bitch. ");
				link("Investigation. ",110); 	
				break;
				
			case 130:	
				txt("The Grand Commander was the man in the charge of the military might of the Order. ");
				if(counter.commander==0 && counter.days>1){
					switch(att.class){
						case 3:
							npc(3,"Wait, one more thing. You betrayed the Order and became heretic and criminal? ");
							kat("Well...");
							npc(3,"I may need help from somebody with no honour. I need you to steel something for me. A book. I can't ask my subordinates because stealing is bad but since you're damned anyway... ");
							kat("What book?");
							npc(3,"The uncensored biography <i>The Real Morgiah</i>. ");
							link("Okay. ",202); 
							link("No! ",201); 
							break;
						case 1:
							npc(3,"Wait, one more thing. If you are a harlot, you are also a thief, aren't you?");
							kat("No?");
							npc(3,"Don't worry I won't arrest you or anything. I need you to steel something for me. A book. I can't ask my subordinates because stealing is bad but since you're damned anyway... ");
							kat("What book?");
							npc(3,"<i>The Real Morgiah</i>. Wait, you probably can't even read, I will draw the title for you. ");
							txt("Uhg!");
							link("Okay. ",202); 
							link("No! ",201); 
							break;
						default:
						case 2:
							npc(3,"Wait, one more thing. You barbarians are bunch of thieves, aren't you?");
							kat("That's just a harmful stereotype.");
							npc(3,"Hah, you're funny. I need you to steel something for me. A book. I can't ask my subordinates because stealing is bad but since you're damned anyway... ");
							kat("What book?");
							npc(3,"Book is a rectangular thing made of leather and papyrus used for recording of written ideas. You see...");  
							kat("I know what book is! What is the title?");
							npc(3,"It an uncensored biography <i>The Real Morgiah</i>. Wait, you probably can't even read, I will draw the title for you. ");
							txt("Uhg!");
							link("Okay. ",202); 
							link("No! ",201); 
							break;
					};
				
				}else if(counter.commander<0){
					STATS.change("for",-1);
					txt("He was still angry at me because of that book-stealing shenanigans and threw me out. ");
					link("Investigation. ",110); 
				}else if(counter.commander>0){
					//STATS.change("tru",1);
					npc(3,"Oh, how are you? Nice to see you, thanks for the book again. ");
					link("Investigation. ",110); 
				}else{
					txt("He reluctantly allowed me to question paladins of the Order - but only if I do not hinder their work of training. ");
					link("Investigation. ",110); 
				};
				break;
			
			
			case 140:
				txt("The Eldest Librarian was in the charge of record keeping and magical research. ");
				if(counter.librarian<0){
					STATS.change("for",-1);
					txt("He was still angry about the book heist and told me to leave. ");
				}else if(counter.librarian>0){
					//STATS.change("tru",1);
					npc(2,"Thank you for helping me against the Grand Commander. My plan is brilliant, isn't it?");
				}else{
					txt("He seemed like a nice guy and allowed me to use the library for both for my investigation and my personal entertainment. ");
				};
				
				link("Investigation. ",110); 
				break;

			case 201:
				counter.commander = -1;
				STATS.change("for",-1);
				kat("I won't steal anything for you!");
				switch(att.class){
					case 2: npc(3,"You dumb savage!");
				};
				txt("He was quite furious but he was well aware he cannot punish me for not doing something illegal. ");
				link("Investigation. ",110); 
				break;
			
			case 202:
				
				counter.npca[7] = false; //deactivate librarian for round
			
				txt("I agreed but the more I was thinking about it the more it seemed like a bad idea. The Eldest Librarian may notice the book is missing and I would be an obvious suspect. On the other hand I did not wanted to disappoint the Grand Commander. ")
				link("Steal the book anyway. ",204);
				link("Tell the truth to the Eldest Librarian. ",206);
				link("Give up. ",203);
				break;
				
			case 203:
				counter.commander=-1;
				txt("Needless to say, the Grand Commander was not very happy that I failed his quest. He screamed a lot. But at least I was not fined or tortured to death or whatever was the punishment for book stealing. ");
				STATS.change("for",-1);
				link("Investigation. ",110); 
				break;
			
			case 204:
				txt("Steel the book. But how?");
				statlink("Sneaking and secret break-in. ","dex",2,210,205);
				statlink("Trickery and lies. ","char",2,210,205);
				break;
				
			case 205:
				STATS.change("for",-2);
				txt("I failed and was caught. ");
				txt("The Eldest Librarian was interrogating me: ");
				//break; 
			case 206:
				npc(2,"The uncensored biography of the Princess Morgiah? Interesting. Maybe... Yes you can have it. ");
				kat("What?");
				npc(2,"So I would know he has the book but he would not know that I know that he has the book.  ");
				kat("That is so devious! ");
				link("Go back with the book. ",208); 
				link("Refuse to betray the Grand Commander. ",207); 
				break;
				
			case 207:
				counter.commander = 1;
				counter.librarian = -1;
				STATS.change("for",-1);
				kat("I won't do it! ");
				npc(2,"You loyalty is remarkable but you are loyal to a wrong person and you will regret that. You can go. ");
				txt("I was afraid I made a powerful enemy but at least the Grand Commander knew I refused to betray him. ");
				link("Investigation. ",110); 
				break;
				
			case 208:
				counter.librarian = 1;
				counter.commander = -1;
				STATS.change("for",3);
				txt("I brought the book to the Grand commander. He was quite happy but I was nervous. What if he finds out that I betrayed him? "); 
				link("Tell him the truth that the Eldest Librarian knows! ",209); 
				link("Continue with the investigation. ",110); 
				break;
				
			case 209:
				counter.librarian = -1;
				counter.commander = -1;
				STATS.change("for",-6);
				txt("He was furious. And so was the Eldest Librarian ");
				txt("My constant random arbitrary changing of sides caused that nobody trusted me any more. ")
				link("Investigation. ",110); 
				break;
				
				
			case 210:
				counter.commander = 1;
				counter.librarian = -1;
				STATS.change("for",3);
				txt("I brought the book to the Grand commander. He was quite happy and promised me he owes me a favour. ");
				txt("The Eldest Librarian has his suspicion but he had no proof. ");
				link("Investigation. ",110); 
				break;
			
			
			
			
			//PALADIN	
			case 150:
				txt("One of the people I wanted to talk with was a Paladin who was involved with several people who later deflected and I suspected he knew more than he reported. ");		
				statlink("Interrogate. ","int",0,151,152,"for",-1);
				statlink("Flatter. ","char",1,153,154,"for",-1);
				
				if(att.class==2){
					statlink("Warrior banter. ","str",2,155,156,"for",-2);
				};
				if(att.class==1){
					statlink("Flirt with him","char",2,157,158,"for",-2);
				};
				link("Back. ",110); 
				break;
				
			//inter
			case 151:
				STATS.change("tru",1);
				txt("He was not very cooperative but still, I was able to reveal some new facts. ");
				link("Next. ",110); 
				break;
			case 152:
				txt("He was not very cooperative and basically refused to confirm anything. ");
				link("Next. ",110); 
				break;
			
			case 153:
				STATS.change("tru",1);
				txt("I mentioned I always admired the courageous defenders of justice like him. Then I complimented his impressive physique and strength and finally I made him narrate about his heroic deeds. He was keen and told me far more than he originally intended. ");
				link("Next. ",110); 
				break;
			case 154:
				txt("I tried to flatter him and unfortunately I was more successful than I hoped. Following hour was filled with narcissist bragging and self-praise with no relation to my case. ");
				link("Next. ",110); 
				break;	
			
			case 155:
				STATS.change("tru",3);
				txt("I told him there are no worse fighters than the paladins of the Order and that my younger sister would beat him with no hassle. He told me I'm a gutless filthy savage. Then we exchanged some ridiculously exaggerated stories about our martial prowess and he eventually decided I could be trusted and told me everything I needed to know. ");
				link("Next. ",110); 
				break;
			case 156:
				txt("He was not able to handle the batz and got offended.  ");
				link("Next. ",110); 
				break;		
			
			case 157:
				STATS.change("tru",3);
				txt("I openly admitted how nervous tall muscular handsome men makes me. Then I build rapport by laughing at all his stupid jokes and finally added few very naughty suggestive innuendos. He really enjoyed our conversation and told me everything I needed. ");
				link("Next. ",110); 
				break;
			case 158:
				txt("I tried to be more <i>friendly</i> but he told me he met enough camp whores to know exactly what I am doing. ");
				link("Next. ",110); 
				break;
			
			
			//SORCERESS
			case 160:	
				txt("I decided to have a talk with one of the high ranked sorceresses of the Order. She might have important information about the corruption among her peers - or she might be corrupted herself. ");
				statlink("Interrogate. ","int",0,161,162,"for",-1);
				statlink("Steal some of her papers. ","dex",1,163,164,"for",-1);
				if(att.class==2){
					statlink("Play stupid. ","int",1,165,166,"for",-2);
				};
				if(att.class==3){
					statlink("Impress her with the knowledge of the secret lore. ","int",2,167,168,"for",-2);
				};
				link("Back. ",110); 
				break;
				
			case 161:
				STATS.change("tru",1);
				txt("She was very smug and sneaky. I did not understand everything she was saying but the bits I got were very interesting. ");
				link("Next. ",110); 
				break;
			case 162:
				txt("She pretended to fully cooperate but the way she twisted her words made me even more confused than before. ");
				link("Next. ",110); 
				break;	
			
			case 163:
				STATS.change("tru",1);
				txt("In a brief moment when she was not watching I grabbed some papers from her desk and hid them under my skimpy clothes. They provided some very interesting clues. ");
				link("Next. ",110); 
				break;
			case 164:
				txt("I tried to convince her she should turn around because something interesting is happening behind her but she was too cunning and did not fall for it. ");
				link("Next. ",110); 
				break;	
				
			case 165:
				STATS.change("tru",3);
				txt("I played the role of stupid barbarian perfectly. The smug sorceress thought I was too thick to realise she is laughing at me and accidentally revealed many useful things. ");
				link("Next. ",110); 
				break;
			case 166:
				txt("I tried to play the role of stupid barbarian to reveal her hidden intentions but her twisted words made me even more confused than before. When I was leaving I realised I had not actually played anything. ");
				link("Next. ",110); 
				break;	
				
			case 167:
				STATS.change("tru",3);
				txt("I convinced her I am well versed in the secret teaching of the Order and the magic arts. She started to trust me and confide to me some very disturbing facts. ");
				link("Next. ",110); 
				break;
			case 168:
				txt("I tried to convince her that I know as much about the magical lore as her but she did not seem to be convinced at all. ");
				link("Next. ",110); 
				break;	
				
				
			//NEOPHYTE		
			case 170:
				//npc_set([3,"Neophyte"]); //not used, lol
				txt("I would not bother with a young nervous nerdy lad who was only recently admitted to the Order but he accidentally witnessed some very suspicious activities. ");

				statlink("Interrogate. ","int",0,171,172,"for",-1);
				if(att.class==2){
					statlink("Intimidate. ","str",1,173,174,"for",-1);
				}
				if(att.class==3){
					statlink("Relate with him. ","char",2,175,176,"for",-2);
				};
				if(att.class==1){
					statlink("Seduce him. ","char",2,177,178,"for",-2);
				}; 
				link("Back. ",110); 
				break;
			case 171:
				STATS.change("tru",1);
				txt("He was too scared and did not want to talk with me but some of his accidental slips provided very interesting information nevertheless. ");
				link("Next. ",110); 
				break;
			case 172:
				txt("He was too scared to tell me anything. ");
				link("Next. ",110); 
				break;	
			//intimidate	
			case 173:
				STATS.change("tru",1);
				txt("I explained to him how fucked he is and that he should better start talking before I move to enhanced interrogation techniques. He had a breakdown and told me everything he remembered. ");
				link("Next. ",110); 
				break;
			case 174:
				txt("I screamed at him. He started crying and that was the end of our conversation. ");
				link("Next. ",110); 
				break;		
			//relate
			case 175:
				STATS.change("tru",3);
				txt("I explained I know how he feels and that I was once too a scared neophyte. Then I added a few made up personal anecdotes and he opened to me. ");
				link("Next. ",110); 
				break;
			case 176:
				txt("I tried to explain that I was once a scared neophyte too and that he should get bolder as I did. He retorted that I got bolder and then got expulsed from the Order. This was the end of my interrogation.  ");
				link("Next. ",110); 
				break;		
			//seduction
			case 177:
				STATS.change("tru",3);
				txt("I adjusted my dress to show more of my goods and smiled at him. I needed only a bit of flirting to make him spill out everything he knew.");
				link("Next. ",110); 
				break;
			case 178:
				txt("I told him I may or may not fuck him if he tells me everything he knows. He lost the ability to speak which was the end of your conversation. ");
				link("Next. ",110); 
				break;	

	//ELLLIONOR	
			//intro
			case 300:
				counter.ellinor = 1;
				txt("I was afraid to ask arbitrators for help directly because I was afraid they might be corrupted. However, during the investigation I met one young arbitrator named Ellinor (With two L's - I decided to remember her name, just in case)  who seemed like a zealous honourable girl. ");
				//txt("She was very cautious when I approached her but eventually I was able to gain her trust. ");
			
				if(att.class == 2){
					npc(5,"This is the fist time I met an actual pagan barbarian. ");
					kat("And?")
					if(PC.Mods.skinHue>280){
						npc(5,"Do all barbarians have red skin? ");
						kat("No, that was just an accident with potions. ");
					}else if( PC.Mods.skinHue >= 80 && PC.Mods.skinHue <= 120 ){
						npc(5,"Do all barbarians have green skin? ");
						kat("No, that was just an accident with potions. ");
					};
					txt("She shrugged. ");
					npc(5,"I kinda like your tattoos. ");
				}else if(att.class==3&&(PC.Mods.skinHue>280||PC.getDim("hornyness") > 0||PC.Mods.tail > 1||att.wings)){
					npc(5,"So you left the Order because you made a deal with Dark Powers and sold your soul for gaining mighty demonic powers?. ");
					kat("What?!? I did not sold my soul and I'm not a demon! ");
					npc(5,"But you look like one. A bit. ");
					kat("But I'm not!");
				}else{
					if(PC.Mods.skinHue>280){
						npc(5,"Excuse me, but why do you have red skin? ");
						kat("I drunk some random potion. ");
						npc(5,"That doesn't sound very smart. ");
						kat("I guess. You don't like it?");
						npc(5,"No, I think you look nice. ");
					}else if( (PC.Mods.skinHue>=80&&PC.Mods.skinHue<=120) ){
						npc(5,"Excuse me, but why do you have green skin? ");
						kat("I drunk some random potion. ");
						npc(5,"That doesn't sound very smart. ");
						kat("I guess. You don't like it?");
						npc(5,"No, I think you look nice. ");
					}else if( PC.getDim("hornyness")>0.5 ){
						npc(5,"Excuse me, but why do you have horns? ");
						kat("I drunk some random potion. ");
						npc(5,"That doesn't sound very smart. ");
						kat("I guess. You don't like them?");
						npc(5,"No, I think you look nice. ");
					};
					//??elf??
				};
				link("Next. ",110); 
				break;
				
			//distracted		
			case 301:
				counter.ellinor = 2;
				txt("I met Ellinor to discuss my newest clues and compare them with her notes. "); 
				if(PC.Mods.tail > 1){
					txt("However, the whole time Ellinor seemed to be distracted. ");
					kat("Is something wrong? ");
					npc(5,"I.. It is just your tail. It's so weird to have a tail. ...Can I touch it?");
					link("Yes. ",303); 
					link("No. ",302); 
				}else if(PC.getDim("hornyness") > 0){			
					txt("However, the whole time Ellinor seemed to be distracted. ");
					kat("Is something wrong? ");
					npc(5,"I.. It is just your horns. It's so weird to have horns. ...Can I touch them?");
					link("Yes. ",304); 
					link("No. ",302); 
				}else if(PC.Mods.earlobeLength>2){
					txt("However, the whole time Ellinor seemed to be distracted. ");
					kat("Is something wrong? ");
					npc(5,"I.. It is just your ears. They are so long and pointy. ...Can I touch them?");
					link("Yes. ",305); 
					link("No. ",302); 
				}else{
					counter.ellinor = 1;
					txt("We discussed the case and made some progress. ");
					STATS.change("tru",1);
					link("Next. ",110); 
				};
				break;

			case 302:	
				counter.ellinor = -1;
				npc(5,"I'm really sorry! I didn't want to sound weird or anything! ");
				kat("That's okay. ");
				npc(5,"Please don't be mad!");
				kat("I'm not mad! Can we continue with our work? ");
				npc(5,"Of course.");
				txt("We spend the rest of night focused on our hard work. ");
				STATS.change("tru",2);
				link("Next. ",110); 
				break;
			
			case 303:	
				txt("It was very unusual request but I see no reason to reject it. ");
				txt("She grabbed the tip of my tail and examined its structure with her slender fingers. ");
				npc(5,"Can you feel it?");	
				kat("Yeah. It's very sensitive. ");
				
				if(att.tail == 1){
					npc(5,"It's so weird... not like tails of animals... it feels like a smooth human skin.. ");	
					kat("Yeah. I'm a human. ");
				}else if(att.tail == 2){
					npc(5,"It's so... fluffy! ");
				}
					
				txt("I laid on my side to let her probe the whole length to the point where it was connected to my spine. She even tried to gently pull. ");
				kat("Hey!");
				npc(5,"Sorry! I just really like your tail. ");	
				kat("Thanks?");
				npc(5,"And your butt. ");	
				kat("Maybe we should continue with our work.");
				npc(5,"? Oh! Yes, the work! You are right!. ");
				link("Next. ",110); 
				
				break;
				
			case 304:	
				txt("It was very unusual request but I see no reason to reject it. ");
				txt("She moved closer and carefully touched my horns. ");
				if(att.hornsStyle == 2){
					npc(5,"Wow, they seem like cattle horns. ");
					kat("Do you mean I look like a cow? ");
					txt("I teased her. ");
					npc(5,"NO! I would never... I think you look pretty. ");
				}else{
					npc(5,"Wow, they are so pointy! Like goat horns. ");
					kat("You look like goat is an excellent compliment. ");
					txt("I teased her. ");
					npc(5,"I like goats, I think they are cute. ");
				};
				txt("Our eyes locked and she unconsciously started playing with my hair. ");
				kat("...");
				npc(5,"...");	
				kat("Maybe we should continue with our work.");
				npc(5,"? Oh! Yes, the work! You are right!. ");
				link("Next. ",110); 
				break;
				
			case 305:	
				txt("She moved away my hair.. Her long slender fingers started slowly probing my ear causing me an unusual sensation. ");
				npc(5,"Wow.");
				kat("Yes, those are my real ears. ");
				npc(5,"Is it truth what they are saying about elves?");	
				txt("She asked bashfully. ");
				if(att.race!=0){
					kat("I'm not an elf. ");
					npc(5,"Oh, right... still... ");	
				};
				txt("Our eyes locked and she unconsciously started playing with my hair. ");
				kat("...");
				npc(5,"...");	
				kat("Maybe we should continue with our work.");
				npc(5,"? Oh! Yes, the work! You are right!. ");
				link("Next. ",110); 
				break;
				
			//friendly talk
			case 306:
				counter.ellinor = -2;
				STATS.change("tru",1);
				txt("I went to Ellinor to ask her some additional questions about the Investigation and the Order in general. ");
				txt("I stayed till the night. We eventually started talking about things that were not even related to the case, about my journeys, her life on the island and dreams of becoming the best arbitrator. ");
				if(mile.immersion>=0){
					txt("We became quite close. ")
				}else{
					txt("She was pretty likable npc. ")
				}
				link("Next. ",110); 
				break;
			
			//sex
			case 307:
				counter.ellinor = 3;
				if( PC.Mods.skinHue>280 || (PC.Mods.skinHue>=80&&PC.Mods.skinHue<=120) ){
					
					txt("We continued working on our case but after the last evening I could feel the things between us are bit different. ");	
					txt("Ellinor seemed to be thinking about something but was too shy to actually articulate it. Finally she asked: ");
					if(PC.Mods.skinHue<-28){
						npc(5,"How does it even work? I mean your skin. Are your red... like everywhere? ");
					}else if(PC.Mods.skinHue>98){
						npc(5,"How does it even work? I mean your skin. Are your green... like everywhere? ");
					};
					kat("Yeah. ");
					npc(5,"Wow. ");
					kat("Do you wanna... see that? ");
					npc(5,"Y.. Yes! ");
					txt("I started to undressing and Ellinor decided to undress too because it would be weird if I were the only naked and then things kinda got out of hand. ");
//TODO SEX				
				}else{
//TODO SEX
					//ASAP PLACEHOLDER
		txt("sex");
					txt("I went to Ellinor to ask her some additional questions about the Investigation and the Order in general. ");
					txt("I stayed till the night. We eventually started talking about things that were not even related to the case, about my journeys, her life on the island and dreams of becoming the best arbitrator. ");
					if(mile.immersion>=0){txt("We became quite close. ")}
				};
				link("Next. ",110); 
				break;
			
			//the talk
			case 309:
				counter.ellinor = 4;
				txt("I was looking forward to see Ellinor again but when I arrived to her private chamber, her face was frowned. ");
				npc(5,"We need to talk. ");
				kat("Okay?");
				npc(5,"I l.. like you a lot but our work here is really important. We can't let anything to distract us. So I think we should... stay professional until we solve the case.   ");
				kat("Okay.");
				npc(5,"Are you mad? Please don't be mad!");
				kat("Of course I'm not mad, dummy! You are right. Fate of the Realm, etc. But when we find... ");
				npc(5,"... and brutally punish! " );
				kat("... the traitors...");
				npc(5,"... I'll be all yours! Maybe, if you won't mind, I could join you? ");
				kat("That would be awesome, to have you watch my back! ");
				npc(5,"Yeah! I enjoy watching your back very much! ");
				link("Next. ",110); 
				break;
				
			//repeatable
			case 310:
				STATS.change("tru",1);
				txt("We compared our notes and worked on cracking the code. ");
				link("Next. ",110); 
				break;
				
				
				
			case 190:	
				//counter.pot=0;
	//			counter.npca[6]=false;
			//	npc_set([1,"Alchemyst"]);
				txt("The Order employed a very skilled alchemist. ");
				npc(4,"Can I help you?");
				kat("Can I buy some potions? ");
				npc(4,"No, I'm not selling any elixirs. They are issued to the members of the Order if they need them. ");
				kat("I badly need them for my investigation! ");
				txt("I eventually convinced her to provide me with potions in exchange for some of my remaining goodwill. ");
				
				for(let i = ["xHP","xENG","xGoblin","xElf","xMino"]; i.length > 0; ){
					const elix = i.shift();
					link(potion_shortcut(elix) ,190, ()=> {
						add_to_inventory(elix);
						STATS.change("for",-1);
					}, STATS.item.tru.value > 0);	
				}
				link("Back. ",110); 
				break;
	
		}
	}
}

vault.ynis_letter = {
	story: (input) => {
		switch(input){ 

		
			case 101:
				STATS.remove();
				set.chapter("Ynis Farion - The Finale");
				mile.letter = -1;
				mile.order_trusted = 0;
				mile.perpetrator = Math.ceil(Math.random()*3);
			
				npc_set([1,"Sentinel"],[2,"Eldest Librarian"],[3,"Grand Commander"],[4,"Alchemyst"],[5,"Ellinor"],[6,"Highest Priestess"]);
				
				
				switch(mile.perpetrator){
					case 1:
						console.log("RESULT: the traitor is the Highest Priestess");
						break;
					case 2:
						console.log("RESULT: the traitor is the Grand Commander");
						break;
					case 3:
						console.log("RESULT: the traitor is the Eldest Librarian");
						break;
				};
				
				txt("I was sadly right. Poor Ellinor slipped on stairs, fell down and during the fall accidentally several times stabbed herself. ");
				txt("Arbitrators were reluctant to officially admit one of them got murdered but I knew better. ");
				txt("But what the hell was she trying to accomplish last night?");
				txt("I broke in into her chamber and on her desk I found a mysterious letter. ");
				link("What the... ",1001); 
				break;
				
			case 1001:
				console.log("xYxx")
				{
					let letter = [
						"I KNOW YOU WOULD NOT AGREE",
						"BUT I DECIDED TO MEET WITH", 
					];
					
					let her = "HIM"; 
					let she = "HE";
					switch(mile.perpetrator){
						case 1:
							letter.push("THE HIGHEST PRIESTESS");
							her = "HER"; she = "SHE";
							break;
						case 2:	
							letter.push("THE GRAND COMMANDER");
							break;
						case 3:
							letter.push("THE ELDEST LIBRARIAN");
							break;
					};
console.log(letter)
					letter = [ ...letter,
						"TELL "+her+" WHAT WE FOUND",
						"AND ASK "+her+" FOR HELP",
						"I AM SURE "+she+" IS INNOCENT",
						"BUT IF YOU ARE READING THIS ",
						"I WAS VERY WRONG",
						"AND I AM PROBABLY DEAD",
						"PLEASE SAVE THE ORDER",
						"GOOD LUCK",
						"           ELLINOR",
					];
				
					if(counter.ellinor>=3){
						letter.push("");
						letter.push("PS I NEVER HAD A BETTER LOVER");
					}
console.log(letter)


					setTimeout( ()=>
						ABCDEF.start( 
							()=> main(1003),
							()=> main(1002), //LOST
							letter,
							"div_text",
						)
						, 100
					)	
				}
				
				 
				break;
				
			case 1002:
				txt("Well, that mess was not helpful at all! What the hell were you thinking Ellinor! ");
				txt("One of the three leaders of the Order was secretly working for the Evil Overlord. To arrest him (or her?) I would need the support of an another leader. But to which one I should trust? ");
				txt("Without solving the letter I had 33% chance to running into the wrong person and end up dead just like poor Ellinor. ");
				link("Look at the letter again. ",1001); 
				link("Trust the Highest Priestess. ",1011); 
				link("Trust the Grand Commander ",1012); 
				link("Trust the Eldest Librarian. ",1013); 
				break;
			
			case 1003:
				mile.letter = 1;
				mile.order_trusted = 0;
				
				switch(mile.perpetrator){
					case 1:
						txt("Oh no! She was murdered by the Highest Priestess! I knew she was suspicious ever since I met her for the first time! ");
						break;
					case 2:
						txt("Oh no! She was murdered by the Grand Commander! ");
						break;
					case 3:
						txt("Oh no! She was murdered by the Eldest Librarian! I should knew it, he was the only one who did not hate me instantly, which was very suspicious. ");
						break;
				};
				txt("But what now? ");
				if(mile.perpetrator != 1)link("Go to the Highest Priestess. ",1011); 
				if(mile.perpetrator != 2)link("Go to the Grand Commander ",1012); 
				if(mile.perpetrator != 3)link("Go to the Eldest Librarian. ",1013); 
				break;	
			
			case 1011:
				if(mile.perpetrator == 1){
					txt("The Highest Priestess seemed surprised by my revelation. ");
					npc(6,"You are a lot smarter than I thought. But I glad You came to me. ");
					kat("Thank you, I guess. ");
					if(counter.priestess < 0){
						npc(6,"My plans sometimes require to do things I don't want to do and I'll forever regret. Murdering you isn't one of them. I'll enjoy it. ");
					}else{
						npc(6,"You are a bold clever girl. I almost feel bad about murdering you. ");
					};
					kat("W-what?!... ");
					txt("I did not notice assassin behind my back until his sword penetrated my back. I felt pain and then... darkness. ");
					content = "dead";
					link("Death.",101)
				}else if(mile.letter == 0 && counter.priestess<0){
					kat("I need to talk with the Highest Priestess! It's very important! ");
					npc(1,"She doesn't want to talk with you. ");
					kat("It's about the corruption in the Order!");
					npc(1,"Do you have any proofs? ");
					kat("Well, no but... ");
					npc(1,"Get lost, then. ");
					txt("What a bitch. ");
					if(mile.letter==0||mile.perpetrator!=2)link("Go to the Grand Commander ",1012); 
					if(mile.letter==0||mile.perpetrator!=3)link("Go to the Eldest Librarian. ",1013); 
					if(mile.letter==0)link("Look at the letter again. ",1001); 
				}else{
					mile.order_trusted = 1;
					txt("The Highest Priestess was very reluctant to give me an audience. ");
					if(mile.letter == 1){
						txt("However everything changed when I dramatically threw on her desk the deciphered letter. ");
					}else{
						txt("It took me a lot of convincing but she eventually decided to trust me. ");
					}
					txt("The murder of poor Ellinor and so widespread corruption really made her furious and she started to act immediately. ");
					link("Gear up. ",1020); 
				};
				break;
			
			
			case 1012:
				if(mile.perpetrator==2){
					txt("The Grand Commander was shocked by my discovery. ");
					npc(3,"What? But I was so careful! ");
					kat("By that you mean...");
					npc(3,"Whatever, I kill you just like that other wench. ");
					txt("He was a high level paladin and I had no chance in direct close combat against him. ");
					content = "dead";
					link("Death.",101)
				}else if(mile.letter=0&&counter.librarian<0){
					txt("The Grand Commander refused to even speak with me, claiming I am thief who cannot be trusted. ")
					if(mile.letter==0||mile.perpetrator!=1)link("Go to the Highest Priestess. ",1011); 
					if(mile.letter==0||mile.perpetrator!=2)link("Go to the Grand Commander ",1012); 
					if(mile.letter==0)link("Look at the letter again. ",1001); 
				}else{
					mile.order_trusted=2;
					txt("The Grand Commander was very sceptical when I share my suspicion. ");
					if(counter.commander>0){
						txt("But he owed me a favour and decided to trust me. ");
					}else if(mile.letter==1){
						txt("However everything changed when I dramatically threw on his desk the deciphered letter. ");
					}else{
						txt("It took a very long convincing. But eventually he succumbed to my arguments. ");
					};
					txt("He decided to act and alerted all the paladins under his command. ");
					link("Gear up. ",1020); 
				};
				break;	
				
			case 1013:
				if(mile.perpetrator==3){
					txt("The Eldest Librarian almost seemed saddened by my discovery. ");
					npc(2,"It is so awful! Poor Ellinor just did her job, she did not deserve to die this way. ");
					kat("Yes!");
					npc(2,"And neither do you. Please, forgive me. It is not anything personal, I am doing this for the greater good. ");
					kat("What the...");
					txt("Caught off guard, I had no chance against the most powerful mage of the Order. ");
					content = "dead";
					link("Death.",101)
				}else if(mile.letter=0&&counter.librarian<0){
					kat("I have something important! ");
					npc(2,"Are you here to steal another of my books?");
					kat("What? No! ");
					npc(2,"For some reason I find very hard to believe you. Get lost! ");
					kat("But... ");
					npc(2,"Or I will get you arrested. ");
					
					if(mile.letter==0||mile.perpetrator!=1)link("Go to the Highest Priestess. ",1011); 
					if(mile.letter==0||mile.perpetrator!=2)link("Go to the Grand Commander ",1012); 
					if(mile.letter==0)link("Look at the letter again. ",1001); 
				}else{
					mile.order_trusted=3;
					txt("The Eldest Librarian almost seemed saddened by my discovery. ");
					txt("But he trusted me. The things I said actually confirmed his suspicion. ");
					npc(2,"We need to act. And we need to act quickly. ");
					link("Gear up. ",1020); 
				};
				break;	
				
				
			case 1020: 
				STATS.create(
					{
						name: "hp",
						label: "Health",
						value: () => att.hp,
						max: () => att.hp,
						color: 0,
					},{
						name: "eng",
						label: "Energy",
						value: () => att.eng,
						max: () => att.eng,
						color: 120,
					}
				);

				switch(mile.order_trusted){
					case 1: 
						txt("We went through an armory. The Highest Priestess told me to grab what I want. Which I did. ");
						break;
					case 2: 
						txt("We went through an armory. The Grand Commander told me to grab what I want. Which I did. ");
						break;
					case 3: 
						txt("We went through an armory. The Eldest Librarian told me to grab what I want. Which I did. ");
						break;
				};
				
				DUNGEON.loot("PaladinCuirass");
				DUNGEON.loot(1,"PaladinGreaves","PaladinVambraces");
				DUNGEON.loot("Malchus","Morningstar")
				DUNGEON.loot(3,"xHP","xENG")
				link("Face the traitor. ",1021); 
				break;
				
				
				
				
			case 1021:
				switch(mile.order_trusted){
					case 1: 
						txt("Me, the Highest Priestess and her most trusted Arbitrators arrived to arrest the leader of the conspirators. ");
						break;
					case 2: 
						txt("Me, the Grand Commander and his elite squad of Paladins arrived to arrest the leader of the conspirators. ");
						break;
					case 3: 
						txt("Me, the Eldest Librarian and his most truest casters arrived to arrest the leader of the conspirators. ");
						break;
				};
				
				switch(mile.perpetrator){
					case 1: 
						txt("However, the Highest Priestess and several other corrupter traitors loyal only to her were already expecting us. ");
						break;
					case 2: 
						txt("However, the Grand Commander and several other corrupter traitors loyal only to him were already expecting us. ");
						break;
					case 3: 
						txt("However, the Eldest Librarian and several other corrupter traitors loyal only to him were already expecting us. ");
						break;
				};
				
				link("Fight!  ",0, () => DUNGEON.next() ); 
				statlink("Get the confession. ","char",1,1022,1100);
				break;
					
			case 1022:
				kat("Admit you betrayed the Order! Lies won't save you!");
				txt("The villain answered proudly: ")
				switch(mile.perpetrator){
					case 1: 
						npc(6,"Yeah, I betrayed the Order!");
						break;
					case 2: 
						npc(3,"Yeah, I betrayed the Order!");
						break;
					case 3: 
						npc(2,"Yeah, I betrayed the Order!");
						break;
				};
				
				link("Fight!  ",0, () => DUNGEON.next() ); 
				statlink("But why? ","char",2,1023,1100);
				break;	
				
			case 1023:
				kat("But why would you do that!? The faithful servants of the Order had trusted you! ");
				switch(mile.perpetrator){
					case 1: 
						npc(6,"You fools! I did it all for the Order! The Evil Overlord can't be defeated! The only way for the Order to survive is to join him! ");
						break;
					case 2: 
						npc(3,"It is foolish to refuse the power the Evil Overlord offers. One day we might even use it against him! This will leave the new mighty Order as uncontested rulers of the world! ");
						break;
					case 3: 
						npc(2,"The Evil Overlord is too powerful. If we ever want to be as strong as him, we need to ally him and study him. Discover his secrets. There is nothing wrong with dark magic, only too dumb and too weak are irrationally scared of it. ");
						break;
				};
				
				link("Fight!  ",0, () => DUNGEON.next() ); 
				statlink("It is not too late! ","char",3,1024,1100);
				break;	
				
				
			case 1100: 
				txt("While I was distracted by talking, the conspirators suddenly attacked! ");
				if(difficulty > 0){
					STATS.change("hp",-7);
				}else if(difficulty < 0){
					STATS.change("hp",-3);
				}else{
					STATS.change("hp",-5);
				};
				link("Fight!  ",0, () => DUNGEON.next() ); 
				break;
			
			
			case 1024:
//TODO
				kat("Those are lies! You know the Evil Overlord is just using you! You are just his tool, he will throw you away once you outlive your usefulness! He knows he can't risk leaving any servant of the Order alive and risk they will undermine him! But it is not too late for you!...");
				switch(mile.perpetrator){
					case 1: 
						npc(6,"No! I.. Remember, I did everything for the Order!");
						txt("Before anybody was able to do anything, she grabbed a small vial and drank it. Then she immediately fall on the floor. She was dead. "); 
						txt("The rest of traitors surrendered. ");
						break;
					case 2: 
						npc(3,"I.. There is the only way!");
						txt("Before anybody was able to do anything, he turned his longsword, lean it against a gap in his heavy paladin armour and fell upon it. ")
						txt("The rest of traitors surrendered. ");
						break;
					case 3: 
						npc(2,"My desire for more knowledge had betrayed me. I was a fool! ");
						txt("He willingly surrendered together with the rest of traitors. ");
						break;
				};
				
				link("Fight!  ",0, () => DUNGEON.nextSpecific("ynis_resolution") ); 
				break;	
				
				
				
				
				
			/*
				content = "dead";
				link("Death.",101)
			*/
		
		};
	}	
};




vault.traitors = {
	
	
	initiate: () => {
		counter.enemy = [];
		let foes = 4;
		
		for(let i = 0; i < foes; i++){
			counter.enemy[i] = {hp: 5, id: i, name: "Traitor #"+(i+1)+"", attack: 3};
		}
		
		main(101);
		//peonWarning();	
	},
	/*
	warned: (input) => {
		
		txt("I stopped. I heard something. Some people were towards me... ");
		
		link("Hide! ",0, () => DUNGEON.next() ); 
		link("Fight! ",101); 
	},
	*/
	intro: (input) => {
		//alert("xo");
		txt("I was facing a group of "+dh.number2word(counter.enemy.length)+" traitors. "); 
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);
		
	},
	reaction: (input) => {
	//	alert("yyyxo");
	//	txt("xx");
		const emy = {
			name: "traitor",
			group: "a group",
		}
		
		const asa = {
		//	teas: "I expose my body for them. They promised they will corrupt me in the most despicable ways. ",
		}
		
		genericDefence(input,emy,asa);
		genericAttack(input,emy,asa);
		
	},
	loot: [2,"elixir","xHP"],
};

vault.ynis_finale = {
	story: (input) => {
		txt("The battle was brutal and tenacious. The loyalist did not have any mercy with traitors who were desperate and rabid. ");
		switch(mile.order_trusted){
			case 1: 
				txt("It was not obvious who was winning. Even the Highest Priestess was badly hurt and knocked out. ");
				break;
			case 2: 
				txt("It was not obvious who was winning. Even the Grand Commander was badly hurt and knocked out. ");
				break;
			case 3: 
				txt("It was not obvious who was winning. Even the Eldest Librarian was badly hurt and knocked out. ");
				break;
		};
		txt("I tried to stay away from the worst fighting but then I was attacked by the vengentful leader of the traitors! ")
		link("Fight!  ",0, () => DUNGEON.next() ); 		
	}
}



vault.order_traitor = {
	
	
	initiate: () => {
		counter.enemy = [];
		let foes = 4;
		
		
		
		switch(mile.perpetrator){
			case 1: 
				counter.enemy[0] = {hp: 80, id: 0, name: "Priestess", attack: 5, phase: 0};
				break;
			case 2: 
				counter.enemy[0] = {hp: 100, id: 0, name: "Commander", attack: 5};
				break;
			case 3: 
				counter.enemy[0] = {hp: 60, id: 0, name: "Librarian", attack: 5, phase: 0};
				break;
		};
		
			main(101);
		//peonWarning();	
	},
	/*
	warned: (input) => {
		
		txt("I stopped. I heard something. Some people were towards me... ");
		
		link("Hide! ",0, () => DUNGEON.next() ); 
		link("Fight! ",101); 
	},
	*/
	intro: (input) => {
		STATS.addEnemy(0);
		switch(mile.perpetrator){
			case 1: 
				txt("The Highest Priestess in her skimpy ceremonial armor was beautiful and terrifiying. Luckily she was exhausted and bleeding.  ");
				break;
			case 2: 
				txt("The Grand Commander in his heavy armor looked very imposing and dangerous. Luckily he was exhausted and bleeding.  ");
				break;
			case 3: 
				txt("The Eldest Librarian was no longer the timid old man. He was furious and his spells were deadly. Luckily he was exhausted and bleeding.  ");
				break;
		};
		
		STATS.changeEnemy(0, 18 - counter.enemy[0].hp);
		
	},
	reaction: (input) => {
		
		const emy = {
			name: "traitor",
			fem: true,
		}
		
		
		const asa = {
		//	teas: "I expose my body for them. They promised they will corrupt me in the most despicable ways. ",
		}
		
		
		if(counter.enemy[0].phase && counter.enemy[0].phase == 0){
			txt("The traitor was getting ready to cast "+(emy.fem ? "her" : "his")+" last powerful spell. ");			
			counter.enemy[0].phase++;
		}else if(counter.enemy[0].phase && counter.enemy[0].phase == 1){
			emy.cast =  counter.enemy[0].name+" cast the most poweful ignite I have ever seen! "
			counter.enemy[0].phase++;
			counter.enemy[0].cast = 10;
		};
		
		genericDefence(input,emy,asa);
		genericAttack(input,emy,asa);
		
	},
	loot: [1,"legendary"],
}


vault.ynis_resolution = {
	story: (input) => {
		
//TODO
		txt("So this was the end of my investigation and my stay on the Ynis Farion. ");
		txt("I as a reward I received - apart for precious xp and plot progression - eight hundred golden coins, several magical scrolls and a new paladin armour I stole when nobody was paying attention.   "); 
		if(att.level < 6){
			link("For the reward! ",0, () => DUNGEON.nextSpecific("levelUp") ); //to 6
		}else{
			link("For the reward! ",0, () => DUNGEON.end() ); 
		};	
	
	}
}				
				