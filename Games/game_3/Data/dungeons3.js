/*



Goblins

*/


//RAT SWARM
vault.swarm = {
	price: () => {
		if(att.class == 1){
			/*
				3: -6 hp
				6: -15hp
				6: -3hp -12e (evaC)
			*/
			return {hp: -10, eng: -6}	
		}else if(att.class==2){
			/*
				3: 3hp, -2e (fero)
				3: 5hp, -4e (fero/doubt)		
				3: 6hp, -2e (fero)		
			*/
			return {hp: -5, eng: -3}
		}else if(att.class==3){
			/*
				2: -3 hp -3e
				6: -5hp -6e (inferno&wave)
			*/
			return {hp: -5, eng: -5}
		};
		
		
	},
	intro: () => {
		const foes = 2 + Math.ceil( Math.random() * 4);
		txt("I was attacked by a swarm of "+dh.number2word(foes)+" rats. "); 
		counter.enemy = [];
		for(let i = 0; i < foes; i++)counter.enemy[i] = {hp: 1, id: i, name: "Rat #"+(i+1), attack: 1};
		//console.log(counter.enemy);
		for(let i = 0; i < foes; i++)STATS.addEnemy(i);
	},
	reaction: (input) => {
		txt(counter.enemy>1 ? "I was fighting with a swarm of "+dh.number2word(counter.enemy)+" rats. " : "I was fighting with the last remaining rat from the swarm. "); 
		counter.temp = 0;

		switch(input){
			case 24:
				txt("I yelled at rats, the terrified hesitated to attack me. ");
				DUNGEON.berserk = true;
				break
				
			case 11: //evAc
				for(let i = 0; i < counter.enemy; i++){
					txt("I was assaulted by a rat but I evaded the attack. ");
				};
				txt("I managed to "+WARDROBE.attack()+" and kill one rat. ");
				STATS.changeEnemy(counter.enemy.length-1,-PC.weapon.attack);
				break;
			case 41: 
				txt("No rat was able to penetrate through my magical shield. ");
				break;
			default: 
				for(let i = 0; i < counter.enemy.length; i++){
					if(i > 3){
						txt("A rat wanted to bite me but it could not get to me through the rest of the swarm. ");
					}else{
						if(i==0){
							if(input==23){
								txt("I stopped a rat who was about to bite me and terminated it. ");
								STATS.changeEnemy(0,-PC.weapon.attack);
								continue
							};
							if(input==12){
								txt("A rat wanted to bite me but I dodged the attack. ");
								continue
							};
						};
						txt("I was bit by a rat. ");
					}
					counter.temp++;
				};
		};
		
		STATS.change("hp",-counter.temp);
		
	
		
		switch(input){
			case 1: //attack
				txt("I "+WARDROBE.attacked()+" one rat with my "+PC.weapon.name+" and instantly killed it. ");
				STATS.changeEnemy(0,-PC.weapon.attack);
				break;
			case 13: 
				txt("My beauty and sexiness was completely lost on the swarm. ");
				break;
			case 21: //brut
				txt("I attacked one rat with excessive violence and totally destroyed it. ");
				STATS.changeEnemy(0,-PC.weapon.attack-2);
				break;
			case 22: //frero
	//TODO
				txt("I attacked the rats without fear, killing several of them! ");
				for(let i=0;i<4;i++)if(counter.enemy[i])STATS.changeEnemy(i,-PC.weapon.attack);
				break;
			case 25: //double
				txt("I "+WARDROBE.fataled+" two rats! ");
				for(let i=0;i<2;i++)if(counter.enemy[i])STATS.changeEnemy(i,-PC.weapon.attack);
				break;
				
			case 31: //mis
				txt("I cast magical missile and destroyed one rat. ");
				STATS.changeEnemy(0,-att.power);
				break;
			case 32: //blade
				if(counter.enemy == 1){
					txt("I cast two blades. One of them killed the rat. ")
					STATS.changeEnemy(0,-att.power);
				}else{
					for(let i=0;i<2;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
					txt("I cast two blades and send them forward. Two rats were killed. ");
				};
				break;
			case 33: //wave
				if(counter.enemy == 1){
					txt("I cast the magic wave. The most of energy was uselessly scattered but the remaining safely killed the rat. ")
					STATS.changeEnemy(0,-att.power);
				}else{
					for(let i=0;i<3;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
					txt("I cast magic wave. The raw energy wiped out "+(counter.enemy>0 ? "three" : dh.number2word(3+counter.enemy) )+" rats. ");
				};
				break;
			case 34: //ingni
				txt("I cast ignite. One rat was totally annihilated by bright green flames. ");
				STATS.changeEnemy(0,-att.power*2);
				break;
			case 35: //ifer
				if(counter.enemy <= 4){
					txt("I cast the inferno and all the rats were burned to a crisp by bright green magic flames. ")
					STATS.changeEnemy(0,-att.power);
				}else{
					txt("I cast the inferno and three rats were burned by bright green magic flames. ");
					for(let i=0;i<4;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
				};
				break;
				
			case 37: //bite
				txt("I cast frostbite. One rat froze to death. ");
				STATS.changeEnemy(0,-att.power*2);
				break;
			case 38: //bliz
				if(counter.enemy <= 4){
					txt("I cast the blizzard and all the rats were torn apart by the cold storm. ")
					STATS.changeEnemy(0,-att.power);
				}else{
					txt("I cast the blizzard and three rats were torn apart by the cold storm. ");
					for(let i=0;i<4;i++)if(counter.enemy[i])STATS.changeEnemy(i,-att.power);
				};
				break;
				
			case 43: //
				txt("I casted the Chain lighting, frying the whole swarm. ");
				for(let i=0;i<counter.enemy.length;i++)if(counter.enemy[i])STATS.changeEnemy(i,-Math.ceil(att.power/2));
				break;
			
			case 42:
				txt("In a flash of a lightning, "+counter.enemy[0].name+" was disappeared. It might be a bit overkill. ");
				STATS.changeEnemy(i,-counter.enemy[0].hp);
				break;
		};
		
		for(let i = counter.enemy.length-1; i >= 0; i--){
			if(counter.enemy[i].hp<=0)counter.enemy.splice(i,1);
		};
		
	},
	loot: ["elixir"],
};




//GOBLINS
vault.goblins = {
	price: () => {
		/*
			with 2 attack or 2 base magic
		*/
		if(att.class == 1){
			/*
				2: -6 hp
				4: -9 hp; -3 e;  (seduction, char 2);
				7: -18 hp; -3 e (seduction, char 2); 
				7: -36 hp !!!
				20 - 80 % chance to evade encounter
			*/
			if(!DUNGEON.vaultAlt != 2){
				return  {hp: -6, eng: -2}
			}else{
				return {hp: -6, eng: -3}
			};
		}else if(att.class==2){
			/*
				2: -6 hp
				2: -4hp -2e (double)
				4: -10hp -4e (double)
				7: -20hp -6e (double/fero)
						
			*/
			if(!DUNGEON.vaultAlt != 2){
				return  {hp: -8, eng: -3}
			}else{
				return {hp: -15, eng: -5}
			};
			
		}else if(att.class==3){
			/*
				2: -6 hp
				2: -4hp -2e > 5 1
				4: -6hp -4e (inferno)
				4: -8hp -2e (wave)  > 7 3
				7: -12hp -7e (inferno&wave)
				7: -14hp -6e (waves) > 13 7
				
			*/
			if(!DUNGEON.vaultAlt != 2){
				return  {hp: -6, eng: -2}
			}else{
				return {hp: -10, eng: -5}
			};
			
		};
	},
	
	initiate: () => {
		counter.enemy = [];
		let foes = 0;

		switch(DUNGEON.vaultAlt){
			default: 
			case 1:
				foes = 1 + Math.ceil( Math.random() * 3);
				break;
			case 2:
				foes = 3 + Math.ceil( Math.random() * 4);
				break;
		};		
		for(let i = 0; i < foes; i++)counter.enemy[i] = {hp: 2, id: i, name: "Goblin #"+(i+1), attack: 2};
	
		peonWarning();	
	},
	
	warned: (input) => {
		
		txt("I halted. Did I heard something? ... ");
		let group = "";
		const number = counter.enemy.length + (-1 + Math.floor(Math.random()*3) );
		if(counter.enemy<=2){
			group = "a couple of"
		}else if(counter.enemy<=4){
			group = "a small pack of"
		}else if(counter.enemy<=6){
			group = "a group of"
		}else{
			group = "a large pack of"
		};
		txt("Yes! It sounded like "+group+" goblins. I had only a second to decide what to do. ");
		
		link("Hide! ",0, () => DUNGEON.next() ); 
		link("Fight! ",101); 
	},
	
	intro: (input) => {
		
		switch(DUNGEON.vaultAlt){
			default: 
			case 1:
				txt("I ran into a pack of "+dh.number2word(counter.enemy.length)+" goblins, deplorable green creatures armed with stick, clubs and blades. "); 
				break;
			case 2:
				txt("I ran into a big group of "+dh.number2word(counter.enemy.length)+" goblins, deplorable green creatures armed with stick, clubs and blades. "); 
				break;
		}
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);
		
	},
	reaction: (input) => {
		
		const emy = {
			name: "goblin",
			group: "a pack",
		}
		const asa = {
			teas: "I revealed my nude body. The vile horny creatures were amazed and crudely expressed the keen interest in capturing me and turning me into their sex slave. ",
		}
		genericDefence(input,emy,asa);
		genericAttack(input,emy,asa);
		
	},
	loot: [2,"elixir","elixir","clothes","money"],
};


 
 

//OGRE
vault.ogre = {
	price: () => {
		/*
			- vaultAlt==1 - with 2 attack or 2 base magic
			- vaultAlt==2 - with 4 attack or 4 base magic
		*/
		
		if(att.class == 1){
			return {hp: 0, eng: -3}
		}else if(att.class==2){
			if(!DUNGEON.vaultAlt != 2){
				return {hp: 0, eng: -7}
			}else{
				return {hp: 0, eng: -7}
			};
			
		}else if(att.class==3){
			if(!DUNGEON.vaultAlt != 2){
				return {hp: 0, eng: -5}	
			}else{
				return {hp: 0, eng: -5}	
			};
			
		};
	},
	
	initiate: () => {
//console.log("inint gorge")
		bigWarning(2);	
	},
	
	warned: (input) => {
		txt("I stopped and pricked up my ears. I could hear it now, something big was heading my way! ");
		link("Hide! ",0, () => DUNGEON.next() ); 
		link("Fight! ",101); 
	},
	
	
	intro: () => {
		//ATTACK=0;
		counter.enemy = [];
		
		if(!DUNGEON.vaultAlt != 2){
			counter.enemy[0] = {name: "Ogre", id:"ogre", hp: 10, ready: 0, attack: 6};
			txt("I encountered a HUGE cave ogre - nearly three meters tall sturdy, incredibly ugly creature with thick gray skin which was very hard to penetrate. He was carrying a very dangerously looking heavy flail."); 
		}else{
			counter.enemy[0] = {name: "Ogre", id:"ogre", hp: 16, ready: 0, attack: 12};
			txt("This had to be the biggest cave ogre I had ever seen in the game. And not only that. He was wearing a heavy metal armor and wielded massive warhammer. He could crush me withe a single strike! ");
		};
			
		STATS.addEnemy(0);
	},
	
	reaction: (input) => {
	 	let harm="";
		
		if(debug)txt("##OGRE: hp: "+counter.enemy[0].hp+"; attack: "+counter.enemy[0].attack+". ");
		
		if(!DUNGEON.vaultAlt != 2){
			switch(counter.enemy[0].hp){
				case 10: harm="unharmed"; break; 
				case 7:
				case 6: harm="lightly wounded"; break;
				case 5:
				case 4: harm="wounded"; break;
				case 3:
				case 2: harm="seriously wounded"; break;
				case 1: harm="fatally wounded"; break;
			};
		}else{
			if(counter.enemy[0].hp>15){
				harm="unharmed";
			}else if(counter.enemy[0].hp>10){
				harm="lightly wounded";
			}else if(counter.enemy[0].hp>6){
				harm="wounded";
			}else if(counter.enemy[0].hp>2){
				harm="seriously wounded";
			}else{
				harm="fatally wounded";
			};
		};
		
		
		if(input==13){
			txt("I exposed myself to the "+harm+" ogre, trying to distract him. The ogre ogled my petite body and something really huge was awakening under his dirty loincloth. I had really bad feeling about this. ");
			DUNGEON.seduction = true;
		}else if(input==24){
			txt("I screamed at "+counter.enemy[0].name+", ready to attack him with complete disregard to my own safety. ");	
			DUNGEON.berserk = true;
		}else if(counter.enemy[0].ready == 0){
			if( checkSexy() ){
				txt("The "+harm+" ogre was lustfully starring at my body, forgetting he is supposed to try to murder me. ")
			}else{
				counter.enemy[0].ready = 1;
				if(difficulty < 0){
					txt("The "+harm+" ogre howled and <strong>raised his "+(!DUNGEON.vaultAlt != 2?"flail":"massive warhammer")+" in preparation for a brutal deadly strike. </strong>");
				}else{
					txt("The "+harm+" ogre howled and raised his "+(!DUNGEON.vaultAlt != 2?"flail":"massive warhammer")+" in preparation for a brutal deadly strike. ");
				}
			}
			
			if(input==12){
				txt("I very hard tried to dodge but the attack never came. I felt like fool.  ")
			}else if(input==11){
				txt("I quickly "+WARDROBE.attacked()+" the ogre. ");
				STATS.changeEnemy(0,-PC.weapon.attack);
			}else if(input==23){
				txt("I was ready to parry his attack but he did not attacked. ")
			}else if(input==41){
				txt("I cast magical shield to prepare for his possible attack but I was not able to hold it active for very long. ");
			};	
		
		}else{
			counter.enemy[0].ready = 0;
				txt("The "+harm+" ogre swung with his mighty flail. ")
				
				if(input==12){
					txt("I easily dodged his slow attack. ")
				}else if(input==11){
					txt("I was not only able to evade his laughably slow strike but also "+WARDROBE.attack()+" him in a swift counter-attack. ")
					STATS.changeEnemy(0,-PC.weapon.attack);
				}else if(input==23){
					txt("I parried his input with my own weapon. It took all my strength but I was still able to strike back and hit him with my "+PC.weapon.name+". ")
					STATS.changeEnemy(0,-PC.weapon.attack);
				}else if(input==41){
					txt("I cast magical shield and completely blocked his deadly strike. ")
				}else{
					txt("And hit me with his full force. ");
					STATS.change("hp",-counter.enemy[0].attack);
					//KILLED?
				};
		};
		
		
		
		
		const emy = {
			name: "ogre",
			group: null,
		}
		const asa = {
			bite: "The magical frostbites caused the ogre some very nice damage. ",
			chai: "The lightning did only a mediocre damage. "
		}
		
		
		switch(input){
			//FULL
			case 34: //ingni
				input = 0;	
				txt("I casted bright green flames but to my horror the ogre just stand there burning, nearly invulnerable to flames. ");
				STATS.changeEnemy(0,-1);
				break;
			case 35: //ifer
				input = 0;
				txt("Only the edge of the flames I casted hit the ogre but it was enough to see that he is fireproof. ");
				break;
			
			//DESCRIBTION
			case 21:
				if(PC.weapon.attack*2 >= counter.enemy[0].hp){
					asa.brut = "I charged against the huge ogre and "+WARDROBE.fataled()+" him. He felt dead to the ground. ";
				}else{
					asa.brut = "I brutally "+WARDROBE.attacked()+" "+counter.enemy[0].name+". Even the huge monster was shaken by my devastating attack. ";
				};
				break;
			case 22:
				if(counter.enemy[0].hp <= PC.weapon.attack){
					asa.fero = "My light quick attacks were enough to finish the beast. ";
				}else{
					asa.fero = "I attacked the ogre with a series of quick strikes. Most of them just glanced off his thick skin, causing only minor damage. ";
				};
				break;
			case 42:
				asa.disi = "Bright flash and the massive monster was... gone. ";
				break;
		};

		genericAttack(input,emy,asa);

		 
	},
	loot: [2,"elixir","elixir","armor","weapon"],
};








//CULTIST 
//TODO!!!!
vault.cultists = {
	price: () => {
		/*
			with 3 attack or 3 base magic
		*/
		if(att.class == 1){
			return {hp: -5, eng: -5} //TODO - recalculate, danger savvy
		}else if(att.class==2){
			return  {hp: -12, eng: -3}
		}else if(att.class==3){
			return {hp: -7, eng: -5}
		};
	},
	
	initiate: () => {
		counter.enemy = [];
		let foes = 3 + Math.ceil( Math.random() * 2);
		
		for(let i = 0; i < foes; i++){
			counter.enemy[i] = {hp: 3, id: i, name: "Cultist #"+(i+1)+"", attack: 2};
			/*
			switch( Math.ceil( Math.random()*3 ) ){
				case 1:
					counter.enemy[i] = {hp: 3, id: i, name: "Thug #"+(i+1)+" with knife", attack: 1};
					break;
				case 2:
					counter.enemy[i] = {hp: 3, id: i, name: "Thug #"+(i+1)+" with bludgeon", attack: 2};
					break;
				case 3:
					counter.enemy[i] = {hp: 3, id: i, name: "Thug #"+(i+1)+" with mace", attack: 3};
					break;
			}
			*/
		}
		
		peonWarning();	
	},
	
	warned: (input) => {
		
		txt("I stopped. I heard something. Some people were towards me... ");
		
		link("Hide! ",0, () => DUNGEON.next() ); 
		link("Fight! ",101); 
	},
	
	intro: (input) => {
		
		txt("I was facing a gang of "+dh.number2word(counter.enemy.length)+" depraved thugs. "); 
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);
		
	},
	reaction: (input) => {
		
		const emy = {
			name: "cultist",
			group: "a group",
		}
		const asa = {
			teas: "I expose my body for them. They promised they will corrupt me in the most despicable ways. ",
		}
		genericDefence(input,emy,asa);
		genericAttack(input,emy,asa);
		
	},
	loot: [2,"elixir","elixir","money"],
};



//THUGS
vault.thugs = {
	price: () => {
		/*
			with 3 attack or 3 base magic
		*/
		if(att.class == 1){
			return {hp: -5, eng: -5} //TODO - recalculate, danger savvy
		}else if(att.class==2){
			return  {hp: -12, eng: -3}
		}else if(att.class==3){
			return {hp: -7, eng: -5}
		};
	},
	
	initiate: () => {
		counter.enemy = [];
		let foes = 3 + Math.ceil( Math.random() * 2);
		
		for(let i = 0; i < foes; i++){
			counter.enemy[i] = {hp: 3, id: i, name: "Thug #"+(i+1)+"", attack: 2};
			/*
			switch( Math.ceil( Math.random()*3 ) ){
				case 1:
					counter.enemy[i] = {hp: 3, id: i, name: "Thug #"+(i+1)+" with knife", attack: 1};
					break;
				case 2:
					counter.enemy[i] = {hp: 3, id: i, name: "Thug #"+(i+1)+" with bludgeon", attack: 2};
					break;
				case 3:
					counter.enemy[i] = {hp: 3, id: i, name: "Thug #"+(i+1)+" with mace", attack: 3};
					break;
			}
			*/
		}
		
		peonWarning();	
	},
	
	warned: (input) => {
		
		txt("I stopped. I heard something. Some people were towards me... ");
		
		link("Hide! ",0, () => DUNGEON.next() ); 
		link("Fight! ",101); 
	},
	
	intro: (input) => {
		
		txt("I was facing a gang of "+dh.number2word(counter.enemy.length)+" depraved thugs. "); 
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);
		
	},
	reaction: (input) => {
		
		const emy = {
			name: "thug",
			group: "a gang",
		}
		const asa = {
			teas: "I loosened my clothes to give them a better view at my body. Their comments what they will do with it once they defeat and capture me were revolting. ",
		}
		genericDefence(input,emy,asa);
		genericAttack(input,emy,asa);
		
	},
	loot: [2,"elixir","clothes","money","weapon"],
};




//GUARDS
vault.guards = {
	price: () => {
		/*
			with 3 attack or 3 base magic
		*/
		if(att.class == 1){
			return {hp: -6, eng: -3} 
		}else if(att.class==2){
			return  {hp: -12, eng: -6}
		}else if(att.class==3){
			return {hp: -8, eng: -2}
		};
	},
	
	initiate: () => {
		counter.enemy = [];
		let foes = 3 + Math.ceil( Math.random() * 2);
		
		for(let i = 0; i < foes; i++)counter.enemy[i] = {hp: 4, id: i, name: "Guard #"+(i+1), attack: 2};
					
		main(101);
	},
/*	
	warned: (input) => {
		
		txt("I stopped. I heard something. Some people were towards me... ");
		
		link("Hide! ",0, () => DUNGEON.next() ); 
		link("Fight! ",101); 
	},
*/	
	intro: (input) => {
		
		txt("I was facing a squad of "+dh.number2word(counter.enemy.length)+" city guards. "); 
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);
		
	},
	reaction: (input) => {
		
		const emy = {
			name: "guard",
			group: "a squad",
		}
		const asa = {
			teas: "I shoved them my sexy nude body. They laughed, eager to have me helpless, locked in their jail. ",
		}
		genericDefence(input,emy,asa);
		genericAttack(input,emy,asa);
		
	},
	loot: [2,"weapon","armor","armor"],
};




//SMUGGLERS (ACTUALL THUGS TOO)
vault.smugglers = {
	price: () => {
		/*
			with 3 attack or 3 base magic
		*/
		if(att.class == 1){
			return {hp: -5, eng: -5} //TODO - recalculate, danger savvy
		}else if(att.class==2){
			return  {hp: -12, eng: -3}
		}else if(att.class==3){
			return {hp: -7, eng: -5}
		};
	},
	
	initiate: () => {
		counter.enemy = [];
		let foes = 3 + Math.ceil( Math.random() * 2);
		
	
		
		for(let i = 0; i < foes; i++){
			counter.enemy[i] = {hp: 3, id: i, name: "Smuggler #"+(i+1)+"", attack: 2};
			/*switch( Math.ceil( Math.random()*3 ) ){
				case 1:
					counter.enemy[i] = {hp: 3, id: i, name: "Smuggler #"+(i+1)+" with knife", attack: 1};
					break;
				case 2:
					counter.enemy[i] = {hp: 3, id: i, name: "Smuggler #"+(i+1)+" with falchion", attack: 2};
					break;
				case 3:
					counter.enemy[i] = {hp: 3, id: i, name: "Smuggler #"+(i+1)+" with sword", attack: 3};
					break;
			}
			*/
		}
	
		main(101);
	},
/*	
	warned: (input) => {
		
		txt("I stopped. I heard something. Some people were towards me... ");
		
		link("Hide! ",0, () => DUNGEON.next() ); 
		link("Fight! ",101); 
	},
*/	
	intro: (input) => {
		
		txt("I was facing a gang of "+dh.number2word(counter.enemy.length)+" dangerous smugglers. "); 
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);
		
	},
	reaction: (input) => {
		
		const emy = {
			name: "smuggler",
			group: "a gang",
		}
		const asa = {
			teas: "I loosened my clothes to give them a better view at my body. Their comments what they will do with it once they defeat and capture me were revolting. ",
		}
		genericDefence(input,emy,asa);
		genericAttack(input,emy,asa);
		
	},
	loot: [2,"weapon","armor","armor","elixir"],
};


 
 
 //SPIDERS
vault.spiders = {
	price: () => {
		/*
			with 3 attack or 3 base magic
			no potion resistance
			
			TODO - HARLOT RECALCULATE!!
		*/
		if(att.class == 1){
			return {hp: -9, eng: -4}
		}else if(att.class==2){
			return  {hp: -7, eng: -3}
		}else if(att.class==3){
			return {hp: -5, eng: -3}
		};
	},
	
	initiate: () => {
		counter.enemy = [];
		let foes = 3 + Math.ceil( Math.random() * 2);
		
		for(let i = 0; i < foes; i++)counter.enemy[i] = {hp: 3, id: i, name: "Spider #"+(i+1), attack: 2, poison: 0.25, antivenom: false, asexual: true};
	
		main(101); //peonWarning();	
	},
	
	intro: (input) => {
		
		txt("Out of nowhere I was attacked by "+dh.number2word(counter.enemy.length)+" big, dog-sized spiders. "); 
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);
		
	},
	reaction: (input) => {
		
		const emy = {
			name: "spider",
			group: "a group",
		}
		const asa = {
			teas: "I tried to seduced them. The spiders were not impressed. ",
		}
		genericDefence(input,emy,asa);
		genericAttack(input,emy,asa);
		
	},
	loot: [2,"elixir","elixir","xAnti"],
};







 //TENTACLES
vault.tentacles = {
	price: () => {
		/*
			with 3 attack or 3 base magic
			no potion resistance
		*/
		/*if(att.class == 1){
			return {hp: -9, eng: -4}
		}else if(att.class==2){
			return  {hp: -7, eng: -3}
		}else if(att.class==3){
			return {hp: -5, eng: -3}
		};
		*/
		return {};
	},
	
	initiate: () => {
		counter.enemy = [];
		let foes = 4 + Math.ceil( Math.random() * 3);
		
		for(let i = 0; i < foes; i++){
			counter.enemy[i] = {hp: Math.floor(2+Math.random()*6), id: i, name: "Tentacle #"+(i+1), attack: 0, poison: 0, antivenom: false, asexual: false};
		};
	
		main(101); //peonWarning();	
	},
	
	intro: (input) => {
		
		txt("I was fighting against disqusting monster with  "+dh.number2word(counter.enemy.length)+" long, slimy tentacles. "); 
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);
		
	},
	reaction: (input) => {
		
		const emy = {
			name: "tentacle",
			group: "the monster",
		}
		const asa = {
			//evac: "",
			//dodg: "",
			teas: "I did not even have to try very hard. The tentacles were already oozing slime, ready to violate all my holes. ",
			
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
		//teas: "I tried to seduced them. The spiders were not impressed. ",
		}
		
		 
		
		//genericDefence(input,emy,asa);
		
		
		genericAttack(input,emy,asa);
		
	},
	loot: [3,"elixir","clothes","armor","legendary"],
};






//SORCERROR
vault.sorcerer = {
	price: () => {
		/*
			with 3 attack or 3 base magic
		*/
		if(att.class == 1){
			return {eng: -3} 
		}else if(att.class==2){
			return  {hp: -12, eng: -6}
		}else if(att.class==3){
			return {eng: -13}
		};
	},
	
	initiate: () => {
		counter.enemy = [];
		counter.enemy[0] = {hp: 19, id: i, name: "Sorcerer", attack: 3, phase: 0, asexual: true, mana: 3};
		main(101);
		//peonWarning();	
	},
	
	/*
	warned: (input) => {
		txt("I stopped. I heard steps of some person. ");
		link("Hide! ",0, () => DUNGEON.next() ); 
		link("Fight! ",101); 
	},
	*/
	
	intro: (input) => {
		
		txt("I was facing an evil sorcerer. ");  //TODO
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);
		
	},
	reaction: (input) => {
		const emy = {
			name: "sorcerer",
			cast: (Math.random()<0.5 ? "Sorcerer cast <i>Ignite</i>! I was instantly engulfed in flames. " : "Sorcerer cast <i>Frostbite</i>! Coldness was burning my skin. ")
		}
		const asa = {
			
		}
		
		counter.enemy[0].phase++;
		if(counter.enemy[0].phase>3)counter.enemy[0].phase = 1;


		
		if(input == 13){
			txt("I shamelessly exposed myself but sorcerer just smirked. He probably was not interested in women if you know what I mean. ");
			counter.enemy[0].phase--;
			return;
		}else if(input==24){
			txt("I yelled, thirsty for blood. Sorcerer looked slightly intimidated. ");
			counter.enemy[0].phase--;
			return;
		};
			
//alert(counter.enemy[0].phase)					
		if(counter.enemy[0].phase == 3){
//		alert(counter.enemy[0].phase)	
			counter.enemy[0].cast = 6;
			genericDefence(input,emy,asa);
			genericAttack(input,emy,asa);
			//counter.enemy[0].cast = false;
		
		}else if( (counter.enemy[0].hp == 1 || counter.enemy[0].hp == 2 || counter.enemy[0].hp == 3) && counter.enemy[0].mana > 0){
			if(input == 42 || input==11 || input==12 || input==23){
				txt("I was ready to defend myself but the fatally wounded sorcerer healed himself. ");
			}else{
				txt("The fatally wounded sorcerer cast <i>Heal</i>. ");
			};
			STATS.changeEnemy(0,8);
			counter.enemy[0].phase = 0;
			genericAttack(input,emy,asa);
			counter.enemy[0].mana--;
			
		}else if(counter.enemy[0].phase == 1){
			if(input == 41){
				txt("We both cast <i>Magic shield</i>. Jinx. ");
			}else if(input==1){
				txt("Sorcerer cast <i>Magic shield</i>. I just lightly hit it with my "+PC.weapon.name+", saving my breath for a better opportunity. ");
			}else if(input==11 || input==12 || input==23){
				txt("I misread the situation. I was ready to face the enemy attack but the sorcerer did the same and cast Magical shield. ");
			}else{
				txt("Sorcerer cast <i>Magic shield</i>. No matter how hard I try, I was not able to pierce it and hurt him. ");
			};

		}else if(counter.enemy[0].phase == 2){	
//		alert("y"+counter.enemy[0].phase)		
			if(input == 42 || input==11 || input==12 || input==23){
				if(difficulty < 0){
					txt("I misread the situation. I was ready to defend myself but the sorcerer just mumbled invocation formula. <strong>He was about to cast a powerful spell. </strong>");
				}else{
					txt("I misread the situation. I was ready to defend myself but the sorcerer just mumbled invocation formula. He was about to cast a powerful spell. ");
				}
				
				
			}else{
				txt("Sorcerer was mumbling an invocation formula. He was about to cast a powerful spell. "); 
			}
			genericAttack(input,emy,asa);
			
		};	

		
		
		
		
		
	},
	loot: [1,"legendary"],
};





























//ELEMENTALS
vault.elementals = {
	price: () => {
		/*
			with 3 attack or 3 base magic
		*/
		if(att.class == 1){
			return {hp: -5, eng: -5}
		}else if(att.class==2){
			return {hp: -7, eng: -4}
		}else if(att.class==3){
			return {hp: -6, eng: -4}
		};
	},
	
	initiate: () => {
		counter.enemy = [];
		
		let foes = 4 + Math.floor( Math.random() * 2 )
		counter.firyOnes = 1+Math.floor( Math.random() * (foes-1) );
		
		let fireIndex = 0;
		let iceIndex = 0;
		let array = [];
		
		for(let i = 0; i < foes; i++) if(i<counter.firyOnes){
			array[array.length] = true;
		}else{
			array[array.length] = false;
		};
		array = dh.shuffle(array);

		for(let i = 0; i < foes; i++)if(array[i]){
			fireIndex++;
			counter.enemy[i] = {id: i, hp: 4, name: "Fire Elemental #"+(fireIndex), attack: 1, fire:true, color:25, asexual: true};
		}else{
			iceIndex++;
			counter.enemy[i] = {id: i, hp: 4, name: "Ice Elemental #"+(iceIndex), attack: 1, fire:false, color: 190, asexual: true};
		};		
		
		main(101); //WARNING
	},
	
	intro: (input) => {
		
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);
		txt("I was attacked by a mixed group of elementals, short, simple incarnations. "+counter.firyOnes+" were fire elementals, "+(counter.enemy.length-counter.firyOnes)+" ice ones. "); 

	},
	
	reaction: (input) => {
		
		const emy = {
			name: "elemental",
			group: "a group",
		}
		const asa = {
			teas: "I tried to act slutty but the human sexuality was beyond elementals understanding. ",
			shie: "Elementals were mechanically attacking my shield, seemingly oblivious that none of their attacks got through. ",
		}
		genericDefence(input,emy,asa);
		
		switch(input){
			case 34: //ingni
				input = 0;
				if(counter.enemy[0].fire){
					txt("The ignite had completely different effect than I intended! The power of the fire elemental was only greatly boosted! ")
					STATS.changeEnemy(0,att.power*2);
				}else{
					txt("The ignite was especially effective, the ice elemental melted right before my eyes. ");
					STATS.changeEnemy(0,-(att.power*2)*2);
				}
				break;
				
			case 35: //ifer
				input = 0;
				for(let i=0;i<4;i++)if(counter.enemy[i] && !counter.enemy[i].fire){
					txt("All ice elementals were greatly affected by the inferno! ");
					break;
				};
				for(let i=0;i<4;i++)if(counter.enemy[i] && !counter.enemy[i].fire)STATS.changeEnemy(i,-att.power*2);
				
				for(let i=0;i<4;i++)if(counter.enemy[i] && counter.enemy[i].fire){
					txt("The power of fire elementals was only boosted! ");
					break;
				};
				for(let i=0;i<4;i++)if(counter.enemy[i] && counter.enemy[i].fire)STATS.changeEnemy(i,att.power);
				break;
				
			case 37: //bite
				input = 0;
				if(!counter.enemy[0].fire){
					txt("The frostbite did not worked at all! On the contrary, the power of the ice elemental was only greatly boosted! ")
					STATS.changeEnemy(0,att.power*2);
				}else{
					txt("The frostbite was especially effective, the fire elemental faltered and faded out. ");
					STATS.changeEnemy(0,-(att.power*2)*2);
				}
				break;
				
				break;
				
			case 38: //bliz
				input = 0;
				for(let i=0;i<4;i++)if(counter.enemy[i] && counter.enemy[i].fire){
					txt("All fire elementals were greatly affected by the blizzard! ");
					break;
				};
				for(let i=0;i<4;i++)if(counter.enemy[i] && counter.enemy[i].fire)STATS.changeEnemy(i,-att.power*2);
				
				for(let i=0;i<4;i++)if(counter.enemy[i] && !counter.enemy[i].fire){
					txt("The power of ice elementals was only boosted! ");
					break;
				};
				for(let i=0;i<4;i++)if(counter.enemy[i] && !counter.enemy[i].fire)STATS.changeEnemy(i,att.power);
				break;
		};
		
		genericAttack(input,emy,asa);
		
	},
	loot: [2,"elixir"],
};


//IFRIT
vault.elementalsIfrit = {
	price: () => {
		/*
			with 3 attack or 3 base magic
		*/
		if(att.class == 1){
			return {hp: -6, eng: -6} //inc 25% warning
		}else if(att.class==2){
			return {hp: -10, eng: -6}
		}else if(att.class==3){
			return {hp: -8, eng: -10}
		};
	},
	
	initiate: (input) => {
		counter.enemy = [];
		
		let foes = 4;
		counter.firyOnes = 1+Math.floor( Math.random() * (foes-1) );
		
		let fireIndex = 0;
		let iceIndex = 0;
		let array = [];
		
		for(let i = 0; i < foes; i++) if(i<counter.firyOnes){
			array[array.length] = true;
		}else{
			array[array.length] = false;
		};
		array = dh.shuffle(array);

		for(let i = 0; i < foes; i++)if(array[i]){
			fireIndex++;
			counter.enemy[i] = {id: i, hp: 4, name: "Fire Elemental #"+(fireIndex), attack: 1, fire:true, color:25, asexual: true};
		}else{
			iceIndex++;
			counter.enemy[i] = {id: i, hp: 4, name: "Ice Elemental #"+(iceIndex), attack: 1, fire:false, color: 190, asexual: true};
		};	
		
		 switch(DUNGEON.vaultAlt){
			default: 
			case 1:
				counter.enemy.unshift(
					{id: "ifr", hp: 9, name: "Afreet", attack: 2, fire:true, phase:0, cast:0, asexual: true, manifest:true, color:25}
				);
				break;
			case 2:
				counter.enemy.unshift(
					{id: "mar", hp: 9, name: "Maarid", attack: 2, fire: false, phase:0, cast:0, asexual: true, manifest:true, color:190}
				);
				break;
		}
	 
 	 
		 
		bigWarning(2.5)
	},
	
	warned: (input) => {
		txt("I did not know why I stopped. I felt something coming. ");
		link("Hide! ",0, () => DUNGEON.next() ); 
		link("Fight! ",101); 
	},

	intro: (input) => {
 

		switch(DUNGEON.vaultAlt){
			default: 
			case 1:
				txt("I was attacked by a mixed group of elementals ("+counter.firyOnes+" fire elementals and "+(counter.enemy.length-(1+counter.firyOnes))+" ice ones), led by a very imposing afreet, a powerful fire manifestation. "); 
				break;
			case 2:
				txt("I was attacked by a mixed group of elementals ("+counter.firyOnes+" fire elementals and "+(counter.enemy.length-(1+counter.firyOnes))+" ice ones), led by a very imposing maarid, a powerful ice manifestation. "); 
				break;
		}
 
		for(let i = 0; i < counter.enemy.length; i++)STATS.addEnemy(i);	
	},
	
	
	reaction: (input) => {
		
		const emy = {
			name: "elemental",
			group: "a group",
			cast: counter.enemy[0].fire ? counter.enemy[0].name+" cast ignite! I was instantly engulfed in flames! " : counter.enemy[0].name+" cast frostbite! It seriously hurt me. ",
		}
		const asa = {
			teas: "I tried to act slutty but the human sexuality was beyond elementals understanding. ",
			shie: "The elemental tried to pierce my shield but without any success. ",
		}
		
		
		if(counter.enemy[0].manifest && !counter.enemy[1]){
			emy.desc = "I was fighting against "+counter.enemy[0].name+" a powerful elemental manifestation. ";
		}else if(!counter.enemy[0].manifest){
			emy.desc = counter.enemy.length>1 ? "I was fighting against a group of "+dh.number2word(counter.enemy.length)+" elementals. " : "I was fighting against the last remaining elemental. "; 
		}else{
			emy.desc = "I was fighting a group of elementals, including dangerous "+counter.enemy[0].name+". ";
		}
		
		
		if(counter.enemy[0].manifest)counter.enemy[0].phase++;
		if(counter.enemy[0].manifest && counter.enemy[0].phase == 3){
			counter.enemy[0].phase = 0;
			counter.enemy[0].cast = 6;
		};
		
		genericDefence(input,emy,asa);
		
		switch(input){
			case 34: //ingni
				input = 0;
				if(!counter.enemy[0].manifest){
					if(counter.enemy[0].fire){
						txt("The ignite had completely different effect than I intended! The power of the fire elemental was only greatly boosted! ")
						STATS.changeEnemy(0,att.power*2);
					}else{
						txt("The ignite was especially effective, the ice elemental melted right before my eyes. ");
						STATS.changeEnemy(0,-(att.power*2)*2);
					}
				}else{
					if(counter.enemy[0].fire){
						txt("The Afreet was boosted by my spell! He was burning brighter than before! ")
						STATS.changeEnemy(0,att.power*2);
					}else{
						txt("The ignite was especially effective, the Maarid seriously suffered. ");
						STATS.changeEnemy(0,-(att.power*2)*2);
					}
				};
				break;
				
			case 35: //ifer
				input = 0;
				for(let i=0;i<4;i++)if(counter.enemy[i] && !counter.enemy[i].fire){
					txt("All ice elementals were greatly affected by the inferno! ");
					break;
				};
				for(let i=0;i<4;i++)if(counter.enemy[i] && !counter.enemy[i].fire)STATS.changeEnemy(i,-att.power*2);
				
				for(let i=0;i<4;i++)if(counter.enemy[i] && counter.enemy[i].fire){
					txt("The power of fire elementals was only boosted! ");
					break;
				};
				for(let i=0;i<4;i++)if(counter.enemy[i] && counter.enemy[i].fire)STATS.changeEnemy(i,att.power);
				break;
				
			case 37: //bite
				input = 0;
				if(!counter.enemy[0].manifest){
					if(!counter.enemy[0].fire){
						txt("The frostbite did not worked at all! On the contrary, the power of the ice elemental was only greatly boosted! ")
						STATS.changeEnemy(0,att.power*2);
					}else{
						txt("The frostbite was especially effective, the fire elemental faltered and faded out. ");
						STATS.changeEnemy(0,-(att.power*2)*2);
					}
				}else{
					if(!counter.enemy[0].fire){
						txt("The Maarid was boosted by my spell! I could feel the deadly could he was emanating! ")
						STATS.changeEnemy(0,att.power*2);
					}else{
						txt("The frostbite was especially devastating against the Afreet. ");
						STATS.changeEnemy(0,-(att.power*2)*2);
					}
				};
				break;
				
				break;
			case 38: //bliz
				input = 0;
				for(let i=0;i<4;i++)if(counter.enemy[i] && counter.enemy[i].fire){
					txt("All fire elementals were greatly affected by the blizzard! ");
					break;
				};
				for(let i=0;i<4;i++)if(counter.enemy[i] && counter.enemy[i].fire)STATS.changeEnemy(i,-att.power*2);
				
				for(let i=0;i<4;i++)if(counter.enemy[i] && !counter.enemy[i].fire){
					txt("The power of ice elementals was only boosted! ");
					break;
				};
				for(let i=0;i<4;i++)if(counter.enemy[i] && !counter.enemy[i].fire)STATS.changeEnemy(i,att.power);
				break;
		};
		
		
		
		genericAttack(input,emy,asa);
	 	
	},
	loot: [2,"elixir","elixir","armor"],
	
	
	
	
	
},


	

//IFRIT
vault.ifrit = {
	price: () => {
		/*
			with 3 attack or 3 base magic
		*/
		if(att.class == 1){
			return {hp: -2, eng: -1}
		}else if(att.class==2){
			return {hp: -2, eng: -2}
		}else if(att.class==3){
			return {hp: -2, eng: -3}
		};
	},
	
	initiate: (input) => {
		counter.enemy = [];
		switch(DUNGEON.vaultAlt){
			default: 
			case 1:
				counter.enemy[0] = 	{id: "ifr", hp: 9, name: "Afreet", attack: 2, fire:true, phase:0, cast:0, asexual: true, manifest:true, color: 25}
				break;
			case 2:
				counter.enemy[0] = {id: "mar", hp: 9, name: "Maarid", attack: 2, fire: false, phase:0, cast:0, asexual: true, manifest:true, color: 190}
				break;
		}
		
		//txt("I did not know why I stopped. I felt something coming. ");
		bigWarning(2.5)
	},
		
	intro: (input) => {
	
		switch(DUNGEON.vaultAlt){
			default: 
			case 1:
				txt("I encountered Afreet, gaunt humanoid creature made of fire.  "); 
				break;
			case 2:
				txt("I encountered Maarid, sturdy humanoid creature made of ice. "); 
				break;
		}
		STATS.addEnemy(0);
			
	},
	reaction: (input) => {
		
		const emy = {
			name: counter.enemy[i].fire ?  "fire manifestation" : "ice manifestation",
			desc: "I was fighting against "+counter.enemy[0].name+", a powerful elemental manifestation. ",
			cast: counter.enemy[0].fire ? counter.enemy[0].name+" cast ignite! I was instantly engulfed in flames! " : counter.enemy[0].name+" cast frostbite! It seriously hurt me. ",
		}
		const asa = {
			teas: "I tried to act slutty but the human sexuality was beyond elementals understanding. ",
			shie: "The elemental tried to pierce my shield but without any success. ",
		}
		
		if(counter.enemy[0].manifest)counter.enemy[0].phase++;
		if(counter.enemy[0].phase == 3){
			counter.enemy[0].phase = 0;
			counter.enemy[0].cast = 6;
			asa.shie = "The dangerous spell cast by "+counter.enemy[0].name+" was powerless against my shield. ";
		};
		
		genericDefence(input,emy,asa);
		
		switch(input){
			case 34: //ingni
				input = 0;
				if(counter.enemy[0].fire){
					txt("The Afreet was boosted by my spell! He was burning brighter than before! ")
					STATS.changeEnemy(0,att.power*2);
				}else{
					txt("The ignite was especially effective, the Maarid seriously suffered. ");
					STATS.changeEnemy(0,-(att.power*2)*2);
				}
				break;
				
			case 35: //ifer
				input = 0;
				if(counter.enemy[0].fire){
					txt("The Afreet was slightly boosted by my spell! He was burning little brighter than before! ")
					STATS.changeEnemy(0,att.power);
				}else{
					txt("Only a small part of the flames hit the Maarid directly but they were still quite effective. ");
					STATS.changeEnemy(0,-att.power*2);
				}
				break;
				
			case 37: //bite
				input = 0;
				if(!counter.enemy[0].fire){
					txt("The Maarid was boosted by my spell! I could feel the deadly could he was emanating! ")
					STATS.changeEnemy(0,att.power*2);
				}else{
					txt("The frostbite was especially devastating against the Afreet. ");
					STATS.changeEnemy(0,-(att.power*2)*2);
				}
				break;
				
				break;
			case 38: //bliz
				input = 0;
				if(!counter.enemy[0].fire){
					txt("The Maarid was slightly boosted by my spell! ")
					STATS.changeEnemy(0,att.power);
				}else{
					txt("The Afreet was hit very hard by the edge of the blizzard. ");
					STATS.changeEnemy(0,-att.power);
				}
				break;
		};
		
		genericAttack(input,emy,asa);
	 	
	},
	loot: [1,"elixir","armor"],
};



