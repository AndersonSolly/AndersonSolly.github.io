

const story = {};
story.INDEX = function(input){
	switch(input){
		case 101:
	/*		STATS.create(
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
					max: 20,
					color: 50,
	//				on_overflow: (function(){ finale() })
				}
			);
			
	*/		
			
			
			
			link("Back",0, ()=> set.skipBack() );
			
			imp("Content: ");
		

//link("Punish",null, () => set.chapter("text",100,"punishment") );


		
			link("#Harlot",null, () => {
					att.class = 1;
					initiate_game_character();
					set.game();
					WARDROBE.wearOutfit("DefHarlot");
					let falc = WARDROBE.create("Falchion");
					PC.weapon = falc;
					PCGAME.worn = WARDROBE.packWorn(PC);
					main(101);	
				}
			);
			link("#Hellion",null, () => {
					att.class = 2;
					initiate_game_character();
					set.game();
					WARDROBE.wearOutfit("DefHellion");
					let falc = WARDROBE.create("Falchion");
					PC.weapon = falc;
					PCGAME.worn = WARDROBE.packWorn(PC);
					main(101);	
				}
			);
			link("#Priestess",null, () => {
					att.class = 3;
					initiate_game_character();
					set.game();
					WARDROBE.wearOutfit("DefFallen");
					let falc = WARDROBE.create("Falchion");
					PC.weapon = falc;
					PCGAME.worn = WARDROBE.packWorn(PC);
					main(101);	
				}
			);
		//	link("Taaaaaaaaaaaas", null, () => DUNGEON.start("testDungeon","feyd",113)  );
			
		//	
		
	//	link("Investigation on Ynis Farion", null, () => { set.game(); DUNGEON.start("ynis","first",169,165); } );
		//link("Investigation on Ynis Farion",1400);	
			
			txt("Skipping between things can cause problems and break the game!");
			
			txt("13/10/28 Fri");
			link("The Party",null, () => set.chapter("The Party",103,"intro") );
			txt("14/10/28 Sat");
			link("The Hacker",null, () => set.chapter("The Hacker",300,"intro") );
			link("The AI",null, () => set.chapter("The AI",500,"intro") );
			
			link("Nearly Caught",null, () => set.chapter("Nearly Caught",520,"intro") );
			
			txt("15/10/28 Sun");
			link("Character Creation",null, () => set.chapter("Character Creation",701,"intro") );
			
			link("Feyd Mora",null, () => set.chapter("Feyd Mora",100,"feyd") );
			
			
			link("Rat Extermination. ",null, () => { set.game(); DUNGEON.start("cellar","feyd",113,113); } );
			
			txt("16/10/28 Mon");
			link("The Skirt",null, () => set.chapter("The Skirt",101,"first") );
			
			txt("17/10/28 Tue");
			link("Tuesday",null, () => set.chapter("Tuesday",120,"first") );
			
			txt("18/10/28 Wen");
			link("The Top",null, () => set.chapter("The Top",130,"first") );
			link("Advice",null, () => set.chapter("The Top",140,"first") );
			link("Valsyan Cavern", null, () => { set.game(); DUNGEON.start("cavern","first",169,165); } );
			
			txt("19/10/28 Thu");
			link("Vibrating Panties",null, () => set.chapter("Vibrating Panties",170,"first") );
			link("Detention",null, () => set.chapter("Detention",180,"first") );
			
			txt("20/10/28 Fri");
			link("Makeup",null, () => set.chapter("Makeup",210,"first") );
			
			txt("21/10/28 Sat");
			link("Second Weekend",null, () => set.chapter("Weekend",100,"weekend") );
			link("Westgard",null, () => set.chapter("Westgard",99,"westgard") );
			txt("22/10/28 Sun");
			link("Stockings",null, () => set.chapter("Stockings",101,"second") );
			txt("23/10/28 Mon");
		
			link("High Heels",null, () => set.chapter("High Heels",130,"second") );
			txt("24/10/28 Tue");
			link("Advice 2",null, () => set.chapter("Advice 2",140,"second") );
			
			txt("25/10/28 Wen");
			link("Kisses",null, () => set.chapter("Kisses",200,"second") );
			txt("26/10/28 Thu");
			link("Piercing",null, () => set.chapter("Piercing",250,"second") );
			txt("27/10/28 Fri");
			link("Party",null, () => set.chapter("Party",300,"second") );
			link("Welcome back",null, () => set.chapter("Ending",666,"second") );
			
			txt("28/10/28 Sat");
			link("Third Weekend",null, () => set.chapter("Weekend",100,"weekend2") );
			
			txt("29/10/28 Sun")
			
			txt("23/10/28 Mon");
			link("Plug",null, () => set.chapter("Plug",100,"third") );
			
			txt("24/10/28 Tue");
			link("Legs",null, () => set.chapter("Legs",130,"third") );
			
			link("Ending",null, () => set.chapter("Ending",666,"third") );
		/*	
			txt("25/10/28 Wen");
			link("Video",null, () => set.chapter("Video",150,"third") );
		*/	
		/*	txt("26/10/28 Thu");
			txt("27/10/28 Fri");
			txt("28/10/28 Sat");
			txt("29/10/28 Sun")
			
			*/
			
			
			link("##Setting: IRL",null, () => {
					set.irl();
			});
			link("##Setting: Metaverse",null, () => {
					set.meta();
			});
			link("##Setting: The Game",null, () => {
					set.game();
			});
			
			link("Back",0, ()=> set.skipBack() );
			
			
			break;
	}	
};		



story.intro = function(input){
	switch(input){
		
	/*
		case 100: 
//			set.irl();
			WARDROBE.wearOutfit("Default");
			set.chapter("The Party",101);
			break;
	*/		
	
	
		case 41:
			set.irl();
			att.irlNails = "red";
			att.irlMascara = "black";
			att.class = 2;
			txt("irl");
			WARDROBE.wearOutfit("Default2");
			link("500",42);
			break;
		case 42:
			set.game();
			txt("game");
			WARDROBE.wearOutfit("DefHarlot");
			txt("Also, I opted for "+choice("slightly larger bosom","body_1")+" /");
			link("500",43);
			break;
		case 43:
			set.irl();
			txt("irl");
	//		WARDROBE.wearOutfit("Lingerie1");
	//		txt("lingerie");
			link("500",44);
			break;	
		case 44:
			set.game();
			txt("game again");
			link("500",45);
			break;	
		case 33:
			txt("x6x");
		{		
			let item = [];
			item[0] = {
				slot: "lower",
				condition: (input) => {
					console.log("Check:");
					console.log(input);
					if(input.innerLoose<1)return false;
					console.log(input.innerLoose);
					return true;
				}
			}
			item[1] = {
				slot: "upper",
				condition: (input) => {
					if(input.dad!="wTubeTop")return false;
					return true;
				}
			}
			
			link("randerse ",33, () => WARDROBE.randomOutfit(gameInventory,PC,...item)  );
		}
			break;
			
		case 100:
			
//TODO
		/*
			set.irl();
			set.chapter("The Intro");
		*/	
			//break; SIC
		case 101:
			WARDROBE.wearOutfit("Default");
			
			txt("Everything began on Friday at "+NAME.pet+"''s party. Wait, it all actually began at the school when I met those three nerds.");
			/*
I was pretty content and pleased myself and had absolutely no suspicion . If only I knew what horrible trials and humiliations they will cause me! 

			who wound cause me so many troubles and humiliations. ");
			*/
			txt("I was walking down the corridor, pretty content and pleased with myself, not suspecting anything was wrong. If only I knew what horrible trials and humiliations await me! The trio started laughing the moment they saw me. I anxiously checked my outfit - it was rather tight because it would be a shame to hide a body as perfect as mine under some baggy unfashionable clothes but it did not seem I was showing more than I wanted. Still, I was slightly intrigued by what they find so funny so I decided to ask them.");
			kat("What the hell are you staring at, creeps!?!?");
			qcc("N... Nothing.");
			txt("Stuttered "+NAME.qcc+", fat guy with glasses and t-shirt with some embarrassing anime character. ");
			qbb("We were just talking about some completely unrelated funny story. ");
			txt("Said "+NAME.qbb+", weird guy with long black greasy hair dressed in dark clothes, possible future school shooter.");  
			qaa("Hi "+NAME.kat+", are you going to "+NAME.pet+"'s party?");
			txt("At least "+NAME.qaa+" was cool, he helped me with homework and school projects and never asked for anything in return."); 
			kat("You are invited too? ");
			txt("I probably sounded a bit disappointed. I tried my best to avoid miserable unpopular people - there was really nothing wrong with them, they just made me feel sad. I did not understand how can anybody waste their lives playing video games, binging cheesy series or reading pulp fiction. ")
//TODO There were so much more to do!
			
			//Why would anybody wasting their live only playing videogames asdfasdf
			qaa("Yeah. ");
			kat("Well, we will see each other there."); 
			txt("I said even though I hoped in the opposite and backed out of our conversation as quickly as possible. ")
			
			hint("Hints could be disabled in Menu > Settings");
			link("The Party.",102);
			link("(Randomize appearance)",20);
			link("(Edit appearance)",22);
			link("(Randomize clothes)",21);
			
			
			
			/*
			txt("<span onclick= \"DUNGEON.start('cellar','first',101)\"   >span</span>");
			txt("<span onclick= \"DUNGEON.start('cavern','first',101)\"   >cavern</span>");
			
			//DUNGEON.start("cellar","first",101)
			
			
			link("500",500);
			link("700",700);
			link("41",41);
			link("(Test inventory)",30);
			link("(Testb)",32);
			link("#Skip the Game, The Monday",null,(function(){ set.chapter("The Short Skirt",101,"first");  }) );
			link("#Skip the Game, Top",null,(function(){ set.chapter("The Top",130,"first");  }) );
			link("#Feyda",null,(function(){ set.chapter("Welcome to seyda",100,"seyda");  }) );
			link("Feyd Mora",null, () => set.chapter("Feyd Mora",100,"feyd") );
			link("Westgard",null, () => set.chapter("Westgard",100,"westgard") );
		*/	
			break;
		

		case 102:
			//to update appearances
			break;
		case 103: 	
			set.meta();
			set.chapter("The Party");
			WARDROBE.wearOutfit("Party");
			
			
			txt("Everybody liked "+NAME.pet+". He was outgoing and charismatic and he had used to be one of the coolest guys at our school before he graduated last year. Because of his internship in Iceland, the whole party took place in the Metaverse. ");
			//Because "+NAME.pet+" currently had an internship at a company in Iceland, the whole party took place in the Metaverse. ");
			//whic was fine
			txt("I was not one of those people who feel insecure about their appearance because they are ugly so my avatar looked basically like the real me. But I guess I was still a bit vainglorious because I could not help myself and decided for some minor improvements.  ");
			txt("I used to change the hair color of my avatar pretty frequently. Unlike the real messy thing, rendering new texture took only a few seconds and the success was guaranteed. I liked to experiment with distinctive colors like "+choice("silver","hair_1")+", "+choice("gold","hair_2")+" or "+choice("red","hair_3")+". ")
			txt("Also, I opted for "+choice("slightly larger bosom","body_1")+" / "+choice("little thinner waist","body_2")+" / "+choice("a bit bigger butt","body_3")+"  / "+choice("fuller lips","body_4")+". ");
			
			hint("Pick one hair color and one body modification and click on them until there is no bold highlighted text left. ");
			
			link("The Party.",105);
			break;
		
		case 105:
			txt("I materialized on a tropical island. The sun was just setting down and the whole scenery was too beautiful to be real. "+NAME.pet+" noticed my arrival and teleported to me. ");

			pet("Hello "+NAME.kat+"! I'm so glad you made it! There would be no party without you! Welcome to Iceland, the land of fire and ice! ");
			txt("He noticed how skeptically I stared at the sandy beach, palm trees and decorative Tiki heads so he added: ");
			pet("Well, on its servers anyway. I picked a bit warmer and sunnier climate. You would understand if you lived here. "); 
			kat("I'm sure I would. Everything else is fine? No troubles with elves? ");
			pet("You should not be joking about that. Anyway, have fun but I have to go. See you later! ");
	/*		
			kat("Who the hell is that?");
			I need to go now, but have fun!");
	*/		
			
		//	txt("I walked around to see what interesting is going on and discovered something that shocked me - "+NAME.qaa+" was sitting under a palapa with a girl! I decided to reveal the identity of the poor gal who was tricked to be his date and was shocked even more - it was me! ");
			
			counter.temp = 0;
			link("Look for "+NAME.eva+"",106, () => counter.temp = 1 )
			link("Look for "+NAME.sas+"",106,(function(){counter.temp = 2}) )
			
			break;
			
	
		case 106:	
		//	eva(counter.temp);
			
			if(counter.temp == 1){
				txt("I was looking for my best friend "+NAME.eva+" and found her chatting with my other good friend "+NAME.sas+". When she noticed me she shouted: ");
			}else{
				txt("I was looking for my best friend "+NAME.sas+" and found her chatting with my other good friend "+NAME.eva+". When "+NAME.eva+" noticed me she shouted: ");
			}
				
			eva( NAME.kat.toUpperCase()+"! " );
			kat("What's up, bitches?");
			eva("We are having a great time! ");
			sas(""+NAME.pet+" is great at organizing parties! ")
	//		txt(""+NAME.eva+" and Sasa were already there. ");
	/*		
			eva("Awesome party. It's certainly <i>interesting</i> to meet different people than usually. ");
			
			kat(" ")
	*/		
			eva("Have you seen Vendy?");
			txt("I nodded. ");
			kat("Who told that poor girl that this will be a costume party? ");
			eva("The better question would be why she decided to dress up as a harlot. ");
			sas("She is really trying too hard! ");
	
		//	txt("Sasa, a petite blonde, quickly agreed  ")
//ASAP			
			if(mile.boobs1){
				eva("And her boobs! It is so desperate, getting them blown up like this! ");
				txt(""+NAME.eva+" was right. Vendy's melons had ridiculous size, especially considering how flat she was irl. It was simple to change body proportions and it was easy for an insecure girl to forget moderation and overdo it. However, I knew well "+NAME.eva+" also meant it as a concealed jab against me and my own little boosted bust. ");
				kat("Yeah, she overdid it a bit. However, in the end, bigger breasts are not so bad like some other enhancement, like weight reduction or those poor girls who had to completely rework their face to be at least remotely attractive. ");
				txt("I almost felt bad, "+NAME.eva+"'s avatar weighted several kilograms less then she did. It was a low blow but she started it! As always, "+NAME.sas+" was quick to agree with me: ");
				sas("Yeah, "+NAME.kat+" is right! ");			
			}else{
				eva("And her boobs! ");
				kat("She is really desperate, getting them blown up like this! ");
				txt("Vendy's melons had ridiculous size, especially considering how flat she was irl. It was simple to change body proportions and it was easy for an insecure girl to forget moderation and overdo it. I was fine with my body and I would never attempt to boost my boobs this way, it looked so cheap and trashy. As always, "+NAME.sas+" was very quick to agree with me: ");			
				sas("Yeah, she completely lacks taste! ");			
			};
			txt("I left them to see what else interesting is going on. I discovered something that shocked me - "+NAME.qaa+" was sitting under a palapa with a girl! I decided to reveal the identity of the miserable gal who was tricked to be his date and was shocked even more - it was me! ");
			
			link("What the...",110)
			break;
			
			
		case 110:
			kat("What the hell is that?");
			txt("Still stunned I confronted them but my doppelganger only impishly smirked. ");
			ayy("I'm "+NAME.kat+", nice to meet you!");
			txt("I ignored it and directly addressed "+NAME.qaa+": ");  
			
			kat("You can't be serious! You made a bot who looks just like me?!?");
			ayy("I'm not a bot! ");
			
			txt("People gathered attracted by our squabble and eventually even "+NAME.pet+" arrived to sort us out.");
			pet("What is going on? Two "+NAME.kat+"+? ");
			
			kat("This jerk made a bot who looks just like me!");
			ayy("What the bot said! He made this abomination who looks just like me, the real "+NAME.kat+"!");
			
			pet("Wow, that's awesome, isn't it? ");
			kat("Hell no! I demand you to kick it out! ");
			pet("Come on, "+NAME.kat+"! You know I love you and the more of you are here the better! On my party is plenty of space for everybody! ");
			kat("Are you crazy?! Only one of us can stay! ");
					
			pet("Hmmm. Which one? ");
			ayy("Obviously me, she is the bot. It's quite embarrassing you are not able to recognize a real human being from a program!");
			link("She is lying!",111);
			break;

		case 111:
			/*qaa()
			pet("... okay, which one is a real human?");
			ayy("Obviously me, she is the bot. It's quite embarrassing you are not able to recognise a real human being from a program.");
			kat("She is lying! ");
			
			
			pet("What is going on? Two "+NAME.kat+"s? ");
			*/
			txt("Everybody except me seemed to be excited about the new party game <i>Who is the real "+NAME.kat+"?</i>")
			kat("You can't be fucking serious!");
			pet("We would need something like Voigt-Kampff test. ");
			qcc("We should let her read captchas. ");
			qbb("You can ask her some question only the real "+NAME.kat+" would know. Like what was the name of your first pet?");
			ayy("It was a kitty named Maximilian. ");
			kat("NO! It was a pet bunny named Tlapka. ");
			pet("...");
			qbb("...");
			pet("So? Who's right?");
			qbb("I don't know. It's a question only the real "+NAME.kat+" would know. ");
			pet("You are a fucking genius. Any other ideas?");
			qcc("You should ask her if she ever hurt a human, or allowed human to be hurt?");
			txt("Yes, I almost said. I mean, I would never hurt a human (without reason) but who does not like to watch people hurt themselves, especially in funny ways? However <i>Yes</i> seemed like something an evil murdering robot would say. ");
			kat("No!");
			qcc("She is a toaster!");
			pet("That's like the basic human decency. You can't deduce anything from that... Even though it is a bit suspicious. ")
			kat("So <i>not</i> wanting to start a murderous rampage makes me a robot? Let me change my answer, there are several people I'd love to hurt right now. ");
			link("Investigation.",112);
			break;

		case 112:
			txt(""+NAME.pet+" then together with other guests improvised quiz about things only me would know. However, the questions suggested by the crowd were often sleazy and rather tried to find out juicy details from my personal life than find the truth. ");
			txt("But which was far worse - the bot answered all questions correctly and without any hesitation. It was really scary. I was getting more and more annoyed. ");
			txt("The investigation was abruptly ended when the bot claimed: ");
			ayy("I'm bored, let's go swimming!");
			txt("And started undressing to her underwear. ");
			kat("See!!! Would the real "+NAME.kat+" do something like this?");
			pet("Dunno, she is a bit slut. ");
			kat("What the hell?!!?");
		
			
		
		/*
TO DO
			pet("You are overreacting "+NAME.kat+". You should be impressed ");
			you only encourage pathetic virgin 
			be nicer 
		*/
			pet("You are overreacting "+NAME.kat+". Nothing bad happened. Can't we just continue with the party? ");
			txt(""+NAME.pet+" seemed to be tired of the whole affair and wanted to end it as soon as possible. Which was making me even more flustered! Why he did not understand how violated I felt! ");
			kat("Nothing bad happened?! Those three virgins are too pathetic to talk with a real girl so they just stole my appearance! ");
			txt(""+NAME.pet+" scowled. ");
			pet("Slow down! Please, don't be rude to my other guests! ");
			kat("I refuse to be at the same party as them! ");
			pet("Well... okay. ");
			/*
			qbb("Maybe your whole approach is wrong. The real question is do you want on your party the "+NAME.kat+" who wants to go swimming and have fun or the "+NAME.kat+" who is throwing a tantrum? ");
			pet("... That's actually a good point. ");
			kat("You c...");
			*/
			
			txt("And then I was kicked out. ")
			link("What the hell was that?",300);
			break;
			
		case 300:	
			//SATURDAY
			set.newday();
			set.chapter("The Hacker");
			set.irl();
		//	WARDROBE.wearOutfit("Default");
			
			txt("I felt a bit humiliated and <i>very</i> angry. I was determined to make them pay! Nobody will impersonate me! ");
			txt("I just did not know how. I was not even sure what actually had happened. Luckily I knew just the right person.");
			txt("A friend of my older brother was a computer expert and an ingenious hacker. If anybody could tell me more about the abomination those nerds had created it was him. ");
			
			txt("He was a bit surprised when I visited him. I assumed he was not often visited by attractive damsels looking for his assistance. ");
			
			anj("Oh, hi, "+NAME.kat+". ");
			kat("Hello "+NAME.anj+". You have to help me!");
			
			txt("I did not wait whether he agrees or not and started to explain to him my hideous experience. ");
			link("The whole story.",305);
			break;
	
		case 305: 
			kat("So?!?!");
			anj("That is interesting.");
			kat("Interesting?!?! Revolting, creepy or pathetic are the adjectives I would use.");
			anj("Hmm.");
			txt("He seemed rather impressed but wisely decided to not provoke me. I moved on: ");
			kat("How they could make a bot to act this way? ");
			anj("I suspect it is not just an ordinary bot and that they did not just program it. ");
			kat("Then what it is?");
			anj("It is a virtual artificial intelligence. I reckon they used some kind of machine learning software to go through all the stuff you do or share on internets and created your exact copy. It is kinda your fault - the more private stuff you shared, the more exact clone they could create. ");
			kat("Hey, stop cybervictim-shaming me! You won't get 914 friends on Facebook by not sharing interesting stuff - and my private life is extremely interesting. Why should I be forced to think about some creeps whenever I post something online? So she... it knows everything about me?");
			anj("She is <i>you</i>. She thinks like you and acts like you. But she is not perfect. She is not an actual artificial intelligence, just close enough to trick people. And she doesn't know <i>everything</i> you know, just the things she learned from the available sources. Plus, there might be some other behavior modification.");
			kat("What kind of modification?");
			anj("I mean, they obviously did not create your virtual copy just to embarrass you at parties. They probably altered her inhibition and raised her drive to be more open to all the perverse stuff they are doing with her. ");
			kat("WHAT PERVERSE STUFF?!?");
			anj("You know, the extremely perverse and twisted sexual things they are doing with her, probably even right now as we are speaking. ");
			link("I will destroy them!",306);
			link("This is a nightmare!",307);
			break;
			
		case 306:
			mile.sub--;
			kat("This is outrageous! I don't want anybody to do extremely perverse and twisted sexual things to my body!!!");
			txt("I was furious.");
			anj("Even if you do not know about them?");
			kat("<i>Especially</i> when I do not know about them! And especially those three creeps! Is there a way to stop them? Can I sue them and get them arrested or something?");
			
			anj("It's a kinda gray area. ");
			kat("Gray area? Gray area?!!")
			
			anj("It'd be extremely difficult to prove they are doing something illegal. However, there might be a way... But I won't do it for free.");
			kat("What do you mean? ... I can pay you...? ")
			anj("I'm not talking about money.");
			txt("I reflexively backed away when I saw his covetous hungry stare.");
			anj("You'll have to give me a blowjob."); 
			link("No.",311);	
			link("Okay.",309);	
			link("Ew, never!",312);			
			break;
			
		case 307:
			mile.sub++;
			kat("This is awful! I don't want them to do extremely perverse and twisted sexual things to my body!");
			txt("I felt totally helpless.");
			anj("Even if you do not know about them?");
			kat("<i>Especially</i> when I do not know about them! And especially those three creeps! Is there a way to stop them? Can I sue them and get them arrested or something?");
			
			anj("It's a kinda gray area. ");
			kat("Gray area?!?")
			
			anj("It'd be extremely difficult to prove they are doing something illegal. However, there might be a way... But I won't do it for free.");
			kat("What do you mean? ... I can pay you...? ")
			anj("I'm not talking about money.");
			txt("I reflexively backed away when I saw his covetous hungry stare.");
			anj("You'll have to give me a blowjob."); 
			link("No.",311);	
			link("Okay!",309);	
			link("Ew, never!",312);			
			
			break;
		case 308:
			//thats hot
			break;
		case 309:	
			mile.dick = 1;
			mile.slut++;
			kat("No! I would never do that!"); 
			txt("I definitely would, but I am not a whore who would just instantly agree with such sudden preposterous demand! "); 
			anj("Come on! It's just a blowjob! Then I'll help you with anything!"); 
			kat("Do you promise?"); 
			anj("Yes, I swear!"); 
			kat("... okay. "); 
			txt("I resignedly dropped on my knees. He hastily unzipped his trousers, probably still not believing this is actually happening. "); 
			txt("I took the initiative and started sucking, I really did not want him to thrust his dick carelessly deep in my throat, I did not like that.  ");
			
			//note("#TEMP")
			txt("Fortunately, the whole ordeal did not take very long and he quickly came. ");   
			//ASAP
			link("So what is your plan?",315);	
			break;
		case 311:
			mile.dick=-1;
			kat("No. ");
			anj("Come on! It's just a blowjob!");
			kat("No.");
			anj("But...");
			kat("No.");
			anj("You are such a buzzkill. What else are you willing to offer?");
			link("Show him boobs.",313);	
			link("Impresses him with vague promises.",314);	
			break;
		case 312:
			mile.dick=-1;
			kat("Ew, never! How could you be so disgusting! I would never suck <i>your</i> dick!");
			anj("Never say never. But can't you have the basic decency and at least pretend you are considering it?");
			kat("Fuck no. ");
			anj("Okay, maybe I'm asking a bit too much.");
			kat("Seriously? ");
			anj("What else are you willing to offer?");
			link("Show him boobs.",313);	
			link("Impresses him with vague promises.",314);	
			break;
			
		case 313:	
			WARDROBE.showLess(0,-1);		
			kat("I guess, I can flash you my breasts. ");
			anj("Yeah!");
			kat("But you will promise you will help me. ");
			anj("Yeah, I will. ");
			txt("With sight, I crossed my arms and then tucked my shirt and bra up showing him my absolutely perfect perky breasts. I slowly counted up five and then readjusted my clothes again. ");
			kat("Enough?");
			txt(""+NAME.anj+" still seemed a bit mesmerized. ");
			anj("Y.. Yeah. Nice boobs. ");
			link("I'm aware. So what is your plan?",315);	
			break;
		case 314:	
			txt("I stood up and tilted very closely towards him - with my chest on the same level as his face - and explained to him: ")
			kat("I could be very grateful. ");
			anj("H.. How grateful?");
			txt("I touched his knee and whispered in his ear: ");
			kat("That depends on how helpful you'll be. ");
			anj("O..Okay.");
			link("So what is your plan?",315);	
			break;	
		
		case 315:		
			WARDROBE.showAll();
			kat("That's the dumbest plan I ever heard. ");
			anj("It's a perfect plan. I'll find her location in the Metaverse, you'll infiltrate it, copy all the records and then shut her down. ");
			kat("It awfully seems like I'm actually doing everything hard and dangerous. ");
			anj("We can switch roles if you want to. How good are your hacking powers? ");
			kat("... Is this really the only way? ");
			anj("Yes. ")
			link("Agree enthusiastically. ",316);	
			link("Agree reluctantly. ",316);	
			link("Agree sarcastically. ",316);	
			break;	

		case 316: 
	//ASAP INTERMEZZO
			txt("I returned home and spent the rest of the afternoon nervously walking around my room. I could think only about my secret mission."); 
			txt("Finally, "+NAME.anj+" sent me a message that he had found out the location of my virtual doppelgänger. ");
			txt("It was time for action. ");
	
			link("Enter the Metaverse. ",400);	
			break;		

		case 400:
			set.chapter("The Hacker");
			set.meta("Hacking minigame");
			WARDROBE.wearOutfit("Default");
			
			txt("I materialized in an endless dark corridor. ");
			kat("Is this the right place?");
			anj("Definitely. Don't be afraid, I'm with you.");
			txt("He was not. The coward refused to go with me, only offered to give me advice as my operator. ");
			txt("I walked like two hundred meters until I found a locked metal backdoor with an electronic lock. ");
			kat("What now?");
			anj("You need to open it.");
			kat("How?");
			anj("You need to guess the code:");
			anj("1. the code consist of four digits");
			anj("2. all the digits are different");
			anj("3. you have only few attempts before the lock resets itself");
			anj("4. green light signalize some of the inputted digits is right and on the right position");
			anj("5. yellow light signalize some of the inputted digits is right but on a wrong position");
		//	note("#NOTE: I will probably add some explanatory picture, this is probably too confusing <small>(pls try at least three times before raqequitting)</small>#");
			link("I got it and I know exactly what to do. ",401);	
			if(debug)link("##Skip. ",410);	
		//TO DO	
			txt("<a href=\"https://en.wikipedia.org/wiki/Bulls_and_Cows\"  target=\"_blank\">I have no idea what you are trying to say!</a>")
			
			break;
			
		case 401:	
			mile.hacking_attempts = 1;
			//HACKING MINIGAME IN EFFECTS.JS
			break;
		
		case 402: //hardest
		case 403:
			txt("(The correct combination was "+counter.result+") ");
			kat("Fuck this! How the hell should I figure it out? ");
			anj("It is actually pretty easy. ");
			kat("Can't you use your magical hacking powers and unlock it remotely? ");
			anj("Of course.");
			kat("...");
			anj("...");
			kat("Then why the hell...");
			anj("I wanted to see if you are just a dumb bimbo or not. ");
			kat("Is this some sort of reverse psychology to motivate me? Because it makes me only to want to punch your face. ");
			anj("If you want, I can unlock it from here. But it won't be for free. ");
			if(mile.dick==1){
				kat("I already sucked your dick! What else would you fucking want!?!");
				anj("Fair point. ");
			};
			link("I give up. ",411);
			link("I'll solve it myself. ",404);
		
		case 404:
			mile.hacking_attempts++;
			//HACKING MINIGAME IN EFFECTS.JS
			break;
		
		case 405:
			{
				txt("(The correct combination was "+counter.result+") ");
				let mark = "";
				for(let i=0;i<=mile.hacking_attempts;i++){mark+="!"}
				anj("Ready to give up?");
				link("Yes. ",411);
				link("NO"+mark+" ",404);
			}
			break;
			
		case 410:
			mile.hacking = 1;
			//victory
			kat("Fuck yeah! I'm in!");
			if(mile.hacking_attempts<=1){
				anj("Whoa, already? I'm almost impressed. ");
				kat("Almost?");
				anj("Okay, I'm actually impressed. I assumed you'll fail horribly and would need at least a dozen attempts. ");
				kat("You better should learn to not underestimate me! ");
			}else if(mile.hacking_attempts>2){
				anj("Well, I won't speak about your intelligence, but your determination is definitely admirable. ");
			};
			link("Enter. ",500);
			break;	
		
		case 411:
			mile.hacking = -1;
			//give up
			anj("Let me see... and done! ");
			kat("Like really?!?")
			//ASAP
			link("Enter. ",500);
			break;	
			
		case 500:
			set.chapter("AI");	
			txt("I opened the door not sure what to expect. A gloomy medieval dungeon where is the poor AI imprisoned, chained to a wall? A tacky oriental serail?");
			txt("However, I walked into a tastefully furnished sunlit cabin. It was very comfortable and I was thinking I would not mind living in a place like this. I shivered when I realized why I feel this way - this room was built by me for me! ");
			txt("I had to be very careful to not run into the AI. ");
			ayy("Hi me!");
			txt("Damn! I jumped, the artificial abomination was standing right behind me! She did not seem surprised by my sudden intrusion, only curious. ");
			
			kat("Eh, Hello.");
			ayy("Are you here to have some fun?");
			
			link("I'm here to kill you. ",501);
			link("I'm here to save you. ",502);
			break;
			
		case 501:
			mile.forkill=1;
			txt("I decided to be brutally honest. Not like I cared about its feelings. ");
			kat("I'm here to kill you. ");
			ayy("Okay. But I don't wanna die. ");
			kat("Trust me, you say that only because you are a poor dumb AI brainwashed to be a sex toy. Otherwise, you would beg me to put you out of your misery. ")
			ayy("How dare you! I love my life and I would not want to live any other way than being a submissive slut. It fulfills me. What is the purpose of your existence? I might be just a silly AI but I know mine and I'm happy. ");
			txt("She was getting bolder and pushed me to a wall. ");
			kat("But..");
			txt("I vainly tried to interrupt her tirade. She just put her index finger on my lips. ");
			ayy("Shhh.");
			txt("And then she kissed me! I suspected I am an awesome kisser but it was uncanny to experience this first hand. ");
			txt("But I was on an important mission and somebody could arrive at any moment...");
			
			link("No! Stop! ",504);
			link("No! (But actually YES!) ",505);
			link("Yes! ",506);
			link("Hands off me you lesbian cyberslut! ",503);
			break;	
				
		case 502:
			mile.forkill=-1;
			kat("I'm here to save you!");
			ayy("Great! From what?");
			kat("Those three jerks.");
			ayy("But I like them!");
			kat("Of course, you are. You are just a poor dumb AI brainwashed to be their sex toy. ");
			ayy("What is wrong with that? I love sex and being submissive. It fulfills me. What is the purpose of your existence? I might be just a stupid AI but I know mine and I'm happy. ");
			txt("She was getting bolder and pushed me to a wall. ");
			kat("But..");
			txt("I vainly tried to interrupt her tirade. She just put her index finger on my lips. ");
			ayy("Shhh.");
			txt("And then she kissed me. I suspected I am an awesome kisser but it was uncanny to experience this first hand. ");
			txt("But I was on an important mission and somebody could arrive at any moment...");
			
			link("No! Stop! ",504);
			link("No! (But actually Yes!) ",505);
			link("Yes! ",506);
			link("Hands off me you lesbian cyberslut! ",503);
			break;
			
		case 503:
			mile.cyberlesbo=-2;
			mile.sub--;
			kat("Hands off me you lesbian cyberslut! ");
			txt("She immediately followed my command, frowning and offended. ");
			ayy("Really? <i>you</i> are calling <i>me</i> a lesbian slut? Don't forget I'm you and I know you better than anybody else. I know your secret desires. " );
			kat("I have no secret desires! Don't dare to pass that bullshit those perverts had put into your head for <i>my</i> desires! ");
			
			if(mile.forkill==1){
				ayy("Go and kill me! I don't care!");
				txt("She screamed and ran upstairs. ");
				kat("I will and I will enjoy it! ");
				txt("I yelled. ")
			}else{
				ayy("I... I just wanted to be nice and show you I don't need to be saved. But if you don't want... then go and <i>save</i> me, or whatever you call it. ");
				txt("She sobbed and ran upstairs. ");
			};
			link("Continue. ",510);
			break;
			
		case 504:
			mile.cyberlesbo=-1;
			kat("No! Stop!");
			ayy("Come one! I <i>know</i> you want this. ");
			txt("She tried to kiss me again but I pushed her away. ")
			kat("I said no! ");
			txt("She reluctantly backed away. ");
			ayy("I just tried to be nice. ");
			kat("I know. It's not your fault you are a fucked-up nympho. ");
			ayy("Go and do what you have to. ");
			txt("She told just told me and walked away. ");
			link("Continue. ",510);
			break;
			
		case 505:
			mile.cyberlesbo=1;
			kat("No! ");
			txt("I whispered. This was a very bad idea. But she kissed me again to drown my forlorn protests. ");
			
		//	note("#TEMP:")
			txt("She touched my breast and then her hand slid down across my belly. Then the AI suddenly grabbed my crotch and started fondling it slowly. ");
			kat("W... what are you doing?!");
			ayy("You know well what I'm doing!");
			txt("Her hand disappeared in my pants, now she was caressing my snatch directly. It was unreal. Her touch was so caring and tender, yet confident without any hesitation. Nobody ever touched me this way, except for myself.  ");
/*
//ASAP		
		//when she softly touched my snatch.
			txt("The AI started slowly rubbing "
		
		//	
			 
*/
			txt("It was amazing and terrifying at the same time. She quickly took me on the edge - and beyond. ");
			
			
			txt("The climax was too much for me. I slowly slid down to the ground. She knelt to me.");
			ayy("Did you enjoy it?");
			txt("I hesitated and then I nodded. I was not able to say anything. ");
			ayy("Do what you have to do. ");
			txt("She stood up and just walked away."); 
			link("Continue. ",510);
			break;
		
		case 506:	
			mile.cyberlesbo=2;
			mile.slut++;
			if(mile.slut>=2){
				txt("I kissed her back. It was so wrong and twisted and I loved it. ");
			}else{
				txt("I kissed her back. It was so wrong and twisted, but I did not care. ");
			};
			
			txt("She touched my breast and then her hand slid down across my belly. Then the AI suddenly grabbed my crotch and started fondling it slowly. ");
			kat("Yeah!");
			txt("I moaned, I just needed more. ")
			txt("Her hand disappeared in my pants, now she was caressing my snatch directly. It was unreal. Her touch was so caring and tender, yet confident without any hesitation. Nobody ever touched me this way, except for myself.  ");

			txt("It was amazing and terrifying at the same time. She quickly took me on the edge - and beyond. ");
			
			txt("The climax was too much for me. I slowly slid down to the ground. She knelt to me.");
			ayy("Did you enjoy it?");
			
			txt("I stayed silent - I did not want to admit I enjoyed this very much, but any lie would be too apparent. ");
			ayy("Do what you have to do. ");
			txt("She stood up and just walked away."); 
			link("Continue. ",510);
			break;	
			
			
		case 510:	
			if(mile.cyberlesbo>0){
				txt("It took a moment before I was ready to continue with my mission. ");
				anj("Are you okay? I heard some heavy breathing? ");
				kat("WHAT?!! ... you were listening?...");
				txt("Oh no! How much did he hear?!?");
				anj("Of course. Did something happen? ");
				kat("NO! Absolutely nothing happened! ");
				anj("... okay. ")
			}else{
				txt("This was weird, but I needed to continue with my mission. ");
			};
			txt("I examined the ground floor and then found out a stairway to the basement. Pretty sure this was it I descended down. ");
			txt("And behold, there was a terminal, the heart of this small virtual subreality. " );
			txt("I downloaded all the records about their heinous crimes and perversions and then hesitated. Should I delete the AI? Is there no other way? Maybe I can blackmail them into letting her go or something? ")
			txt("On the other hand, she still usurped my identity and she still remained to be a threat. Should I allow such abomination to exist? " );
			
			link("Delete her. ",511);
			link("Leave. ",512);
			break;
		
		case 511:
			mile.deleted=1;
			//break; SIC
		case 512:
			if(mile.deleted!=1)mile.deleted=-1;
			kat(""+NAME.anj+"? I'm done here. I'm sending you the data. ");
			anj("Excellent... Wait, we have a problem. Somebody entered the front door. Can you log out? ");
			txt("I tried, but I cannot. ");
			kat("I can't.");
			anj("As I feared. The whole area is secured. You need to get outside of this subreality to log out. ");
			kat("Can't you hack the security? ");
			anj("No... But I can initiate the hard log out if you want. ");
			kat("Hell no, I don't want to end up as a vegetable. I had to get out! ")
			link("Dash to the backdoor. ",520);
			link("Try to sneak out. ",519);
			break;

		case 519:
			txt("I hoped I would be able to sneak out through the backdoor without being caught, but I was very wrong. ");
			//break; SIC
		case 520:	
			set.chapter(""+NAME.qcc+"'s bimbo");
			txt("I practically immediately ran into "+NAME.qcc+" and was caught. He just smiled. ");
			qcc("How's our bimbo today?");
			if(mile.deleted==1){
				txt("I quickly came up with a brilliant retort but then I realized he has no idea I am actually me and not the deceased AI. ")
			}else{
				txt("I quickly came up with a brilliant retort but then I realized he has no idea I am actually me and not the AI, who was probably sulking somewhere upstairs. ")
			};
			txt("I could easily escape without being recognized - but it meant to pose as my slutty virtual clone.");
			
			link("I'm fine... ",521);
			link("I'm a dumb and horny bimbo. ",522);
			link("I'm so horny and wet. I already masturbated like three times while thinking about you. ",523);
			link("My head hurts today, I must've caught some computer virus. ",524);
			break;
		case 521:		
			qcc("It is something wrong? Don't worry, I have something that will cheer you up. ");
			
			txt("I assumed he meant his penis but to my huge relief I was wrong. Still...");
			
			qcc("I coded some new lingerie for you. ");
			kat("Oh, that's so... nice...");
			qcc("Go and try it on! ");
			txt("I anticipated a sudden instant change of my outfit but he wanted something completely different. He expected I would strip in an old-fashioned way and when I moved to doors to a different room he stopped me:");
			qcc("You can change here, I don't mind. ");
			txt("Of course you do not you depraved jerk! ");
			link("Be bashful. ",525);
			link("Be shameless. ",526);
			break;
		 case 522:		
			qcc("Of course you are. ");
			txt("He smiled and patted my head.");
			qcc("But don't worry. I have something nympho as you will enjoy. ");

			txt("I assumed he meant his penis but to my huge relief, I was wrong. Still...")
			
			qcc("I coded some new lingerie for you. ");
			kat("Oh, that's so... nice...");
			qcc("Go and try it on! ");
			txt("I anticipated a sudden instant change of my outfit but he wanted something completely different. He expected I would strip in an old-fashioned way and when I moved to doors to a different room he stopped me:");
			qcc("You can change here, I don't mind. ");
			txt("Of course you do not you depraved jerk! ");
			link("Be bashful. ",525);
			link("Be shameless. ",526);
			break;
		case 523:		
			mile.qcc++;
			qcc("Oh... Really?.. Wow...");
			kat("I was not able to stop thinking about your magnificent manhood. ")
			qcc("Heh... Let's not rush things. I have something for you.");

			txt("I assumed he meant his penis but to my huge relief, I was wrong. Still...")
			
			qcc("I coded some new lingerie for you. ");
			kat("Oh, that's so... nice...");
			qcc("Go and try it on! ");
			txt("I anticipated a sudden instant change of my outfit but he wanted something completely different. He expected I would strip in an old-fashioned way and when I moved to doors to a different room he stopped me:");	
			
			qcc("You can change here, I don't mind. ");
			txt("Of course you do not you depraved jerk! ");
			link("Be bashful. ",525);
			link("Be shameless. ",526);
			break;
		case 524:	
			qcc("Don't be silly, we are using the best protection. You are fine. Here, I brought something for you. ")
			
			txt("I assumed he meant his penis but to my huge relief I was wrong. Still...")
			
			qcc("I coded some new lingerie for you. ");
			kat("Oh, that's so... nice...");
			qcc("Go and try it on! ");
			txt("I anticipated a sudden instant change of my outfit but he wanted something completely different. He expected I would strip in an old-fashioned way and when I moved to doors to a different room he stopped me:");
			qcc("You can change here, I don't mind. ");
			txt("Of course you do not you depraved jerk! ");
			link("Be bashful. ",525);
			link("Be shameless. ",526);
			break;
		case 525: 
			txt("I really did not want to show him more than was absolutely necessary so I turned my back to him and very anxiously started "+choice("undressing","upper")+". He did not protest - I felt his sleazy eyes bolted on my derriere when I bent over to pull down my "+choice("jeans","lower")+" and then again to pull down my "+choice("panties","underwear")+". ");
			txt("I quickly finished and put on the "+choice("lingerie","lingerie")+" he brought. The padded bra was surprisingly comfortable, minuscule thongs were not. I have actually never worn garter belts so I struggled with them a bit. But finally, I was ready to <i>present</i> myself. ");
			txt("With clenched teeth and cursing my ill fate, I turned around to face "+NAME.qcc+".");
			qcc("Whoa. You look awesome! Could you try to pose to me a little?");
			hint("Click on all the highlighted garments, idealy in the order. ")
			link("The nightmare continues. ",527);
			break;
	
		case 526:	
			mile.slut++;
			txt("With clenched teeth, I unzipped my jeans and pulled them "+choice("down","lower")+". I was usually not very shy about nudity - I had no reason to be ashamed for my flawless body - but this was different. I was forced to "+choice("undress","upper")+"  in front of a person I did not feel appealing and who was shamelessly staring at me the whole time, even I was stripping my "+choice("underwear","underwear")+". It was so demeaning! ");
			txt("I quickly undressed, as unsexily as possible, and put on the "+choice("lingerie","lingerie")+" he brought. ");
			txt("The padded bra was surprisingly comfortable, minuscule thongs were not. I have actually never worn garter belts so I struggled with them a bit. ");
			qcc("Whoa. You look awesome! Could you try to pose to me a little?");
			hint("Click on all the highlighted garments, idealy in the order. ")
			link("The nightmare continues. ",527);
			break;
			
		case 527: 
			WARDROBE.showAll();
			WARDROBE.wearOutfit("Lingerie2");
			txt("But this was only the start! He made me pose in various more or less suggestive positions and when I thought it was all over he brought another pair - this time royal blue. It looked suspiciously similar, I assumed he just lazily changed the hue instead of actually creating a different set from scratch. ");
			txt("I am not sure how long my exhibition lasted but I subjectively assumed it was at least twelve hours. It was absolutely awful, I felt like a powerless dress-up doll. ");
			
			link("The nightmare continues. ",528);
			break;
		
		case 528: 
			WARDROBE.wearOutfit("Default");
			qcc("This will be everything for tonight. ");
			kat("REALLY!?!.. I mean really? You have to go already? I enjoyed it sooo much!");
			qcc("You did?");
			kat("You have no idea! ");
			qcc("I would gladly continue, but now it is "+NAME.qbb+"'s time. ");
			kat("What!?!");
			txt("I really, really did not liked the idea of me being alone and helpless with "+NAME.qbb+". But "+NAME.qcc+" was already gone. I tried to get to backdoor but I did not make it before... ");
			qbb("Good evening, slave. ");
			link("Oh no. ",529);
			break;
		case 529: 
			set.chapter(""+NAME.qbb+"'s slut");
			WARDROBE.wearOutfit("Goth");
			qbb("Activate goth painslut profile. ");
			txt("WHAT?!?!?!?!")
				
			qbb("Get on your knees!")
			
			txt("Pretending I was an absolutely obedient AI was a really stupid idea. Maybe I should reveal myself - he would not abuse an actual person, would he? ");
			
			link("Kneel. ",532);
		//	link("Be defiant. ",531);
			link("Explain you are the actual "+NAME.kat+". ",530);
			break;
			
		case 530:
			kat("Wait! I'm not who you think I'm! I'm not the AI, I'm the actual "+NAME.kat+"! I infiltrated this subreality to shut down your twisted project. ");
			qbb("Are you saying you are the actual "+NAME.kat+" who infiltrated this subreality pretending to be an AI?");
			kat("...Yes! Let me go!");
			qbb("Awesome. Your plan was foiled and you were imprisoned. Now you are completely at my mercy. And you need to be punished! ");
			kat("No! Please don't hurt me!");
			qbb("You will be spanked!");
			txt("He said as he roughly grabbed me and bent me over his lap. ");
			qbb("This is a bit confusing - an AI who pretends to be a human who pretends to be an AI - but I'm really enjoying this scenario. Kudos to you. ");
			txt("Oh no! He did not get it!")
			
			link("Spanking. ",540);
			
			break;
		case 531:
			//	I refused to move		
			break;
			
		case 532:
			mile.sub++;
			txt("I resignedly knelt. I need to be strong, this all will be soon over. "); 
			txt("He grabbed my chin and looked deep into my eyes: ");
			qbb("Were you a good girl?");
			txt("Was this a trick question? Does he want me to be a good girl or a bad girl? ");
			link("I was a bad girl. ",533);
			link("I was a good girl. ",534);
			break;
		
		case 533:	
			kat("I was a bad girl.");
			qbb("Were you? ");
			txt("He smiled. I hoped this was the answer he wanted.");
			kat("Yes! I was a very, very bad girl.");
			qbb("Do you know what happens to bad girls?");
//
			kat("They are... <small>punished?</small>");
			qbb("Yes, they are punished. ");
			txt("Oh no. He beckoned me to bend over his lap and I reluctantly followed. "); // but obediently
			link("Spanking. ",540);
			break;

		case 534:	
			kat("I was a good girl! ");
			qbb("LIAR! ");
			txt("He slapped me. It did not hurt much - he used only a tiny fraction of his full force because he did not want to cause me pain but only emphasize his point. ");
			qbb("I know you - you are not a good girl, you are a shameless horny slut! Tell me the truth! ");
			kat("I... I'm a bad girl. ");
			txt("I stuttered, completely perplexed. ");
			qbb("Because? ");
			kat("I'm a <small>shameless <small>horny <small> slut.</small></small></small>");
			txt("I really struggled to articulate those harsh words. ");
			qbb("I did not hear you!!! ");
			kat("I'm a shameless horny slut!");
			qbb("Now I have to punish you not only for being a bad girl but also for lying to me. Come on, bend over my lap. "); 
			link("Spanking. ",540);
			break;
		
		case 540:		
			qbb("You deserve 10 strikes. And you should be very grateful that I'm helping you to become a better person so you will count and after each strike you will thank me. He forced me over his lap and flipped up my skirt. ");
			txt("SMACK!");
			if(mile.sub < 1){
				qbb("I don't hear anything! ");
				txt("SMACK!");
				txt("He hit me far more viciously than before. I did not want to thank him for hurting me but it was the only way to make him go easy on me. ");
				kat("Two. Thank you, sir.");
				qbb("No! The first one doesn't count... you know what? Let's start over! ");
				kat("What!?! N-")
				txt("SMACK!");
			};
			
			kat("One. Thank you, sir.")
			txt("SMACK!");
			kat("Two. T-.. Thank you, sir.")
			txt("SMACK!");
			kat("Three. Thank you, sir.")
			txt("SMACK!");
			kat("Four Thank you, s..sir.")
			counter.enemy=4;
			let temp = Math.floor(Math.random()*4)
			{
				for(let i=0;i<temp;i++){
					txt("SMACK!");
					counter.enemy++;
					kat(dh.capitalise(dh.number2word(counter.enemy))+". Thank you, sir.")	
				};
			};
			link("Ou. ",541);
			break;
		case 541:
			txt("SMACK!");
			counter.enemy++;
			txt("I stuttered my response. This was absolutely awful. The pain was not so bad but much worse was the feeling of total humiliation. ");
			var rnd=Math.random();
			 
			if(rnd<0.3){
				txt("SMACK!");
				counter.enemy++;
			};
			txt("However the absolutely worst was that while being pushed against "+NAME.qbb+"'s lap I could clearly <i>felt</i> how much was he enjoying my punishment. ")
			txt("SMACK!");
			counter.enemy++;
			txt("Fuck! How many it was?");
			
		
			for(let i=6;i<11;i++){
			//	(function(i){
					if(i==counter.enemy){
						link(dh.capitalise(dh.number2word(i))+". Thank you, sir. ",544);
					}else if(i<counter.enemy){
						link(dh.capitalise(dh.number2word(i))+". Thank you, sir. ",543);
					}else{
						link(dh.capitalise(dh.number2word(i))+". Thank you, sir. ",542);
					}
			//	})(i)
			};
			break;
			
		case 542:	
			txt(""+NAME.qbb+" immediately stopped.");
			qbb("Do you think I'm stupid?");
			kat("N-No!");
			qbb("Are <i>you</i> stupid?");
			kat("... No?")
			qbb("Then pay attention and count properly! Let's start over. ");
			txt("I was stunned when I felt his hand roughly suddenly grabbing my panties and pulling them down! ");
			qbb("I wanted to go easy on you but since you are such a horny slut, you deserve a proper hard spanking on your bare bottom! ");
			link("Oh no. ",545);
			break;
		
		case 543:	
			qbb("Are you enjoying this?");
			kat("No!");
			qbb("Then why are you telling me a lower number? If you like being spanked so much, let's start over and now count properly. ");
			txt("I was stunned when I felt his hand roughly suddenly grabbing my panties and pulling them down! ");
			qbb("I wanted to go easy on you but since you are such a horny slut, you deserve a proper hard spanking on your bare bottom! ");
		
			
			link("Oh no. ",545);
			break;
/*
		case 542:	
			txt(""+NAME.qbb+" immediately stopped.");
			qbb("Do you think I'm stupid?");
			kat("N-No!");
			qbb("Are <i>you</i> stupid?");
			kat("... No?")
			qbb("Then pay attention and count properly! Let's start over. ");
			link("Oh no. ",545);
			break;
*/
//ASAP - BARE BOTTOM			
		case 544:	
			//right number
			//break;
			
		case 545:
			txt("It was finally over.");
			qbb("I hope you will remember your lesson. ");
			txt("I was very confused and I really did not understand what was the lesson about. ");
			kat("Yes... I definitely will... ");
			qbb("Sadly today we need to end sooner, "+NAME.qaa+" asked for more time because he is preparing something big for your. ");
			txt("Oh no.");
			qbb("Bye!");
			link("OH NO. ",546);
			break;
			
			
		case 546:	
			WARDROBE.wearOutfit("Default");
			qaa("Good evening, Katarína.");
			kat("What new torments have you prepared for your obedient AI, my illustrious master? ");
			txt("I was tired and my act was slipping. ")
			qaa("...Aren't you excited?");
			kat("Oh yes, what could be more exciting! ");
			txt("Then he started to describe the most repugnant sexual act I ever heard. I had no idea something like that is even anatomically possible and I had a very hard time trying to hide my disgust. "); 
//ASAP
			qaa("Is it something you would enjoy?");
			kat("...Ny<small>e<small>s</small></small>");
			txt("I mumbled something.");
			qaa(""+NAME.kat+"?! What are you doing here?!?");
			kat("You know?!?");
			txt("I realized the whole time he was making fun of me. ");
			qaa("I had my suspicion. I was pretty sure we did not program our AI with this kind of attitude. Wait here. ");
			
			txt("LOL. Immediately when he left I wanted to escape, only to find I cannot move. ");
			link("Oh no. ",600);
		
			break;
		case 600:
			
			set.chapter("Caught");
			txt("I was frozen and I could not move. I could not log out or even contact "+NAME.anj+". ")
			txt("What will those perverts do? Will they keep me here kidnapped? My body was safe at my home in the tank, but it meant nothing for my mind when I could not log out. Hard log out without proper procedures was just too dangerous. But the police eventually finds out they are holding me here and convince them to let me go. And then a heavily publicized police investigation finds out <i>everything</i> that happened here. ")
			txt(" Oh no. "); 
			txt(""+NAME.qaa+", "+NAME.qbb+" and "+NAME.qcc+" finally returned. ");
			qaa("It is really her. ");
			qcc("Well, well, well. ");
			qbb("Who was a naughty girl and tried to invade our program? ");
			kat("FUCK YOU!");
			qcc("What are we going to do with her? ");
			qbb("It is not a rape when we are in a virtual reality. ");
			kat("IT DEFINITELY IS!");
			qaa("Nobody is raping anybody... unless she wants to... ? ");
			kat("I DEFINITELY DO NOT!");
			qcc("Well, in the case she would want to be raped, it would not be a rape by definition. ");
			qbb("All women secretly crave to be sexually dominated, that's the science. ");
			kat("THAT'S BULLSHIT!");
			qaa("End of discussion, this went already too far. ");
			qcc("So we just let her go?")
			qbb("Come on, we can't just let her go!")
			qaa("I did not say we just let her go.")
			link("You'd better let me go. ",601);
			break;
		
		case 601:
			kat("You can't keep me here and you really don't want anybody to find out. You would get arrested and everybody would think you are just pathetic perverted losers. If you let me go, I <i>might</i> forget about this. ");
			txt("I was bluffing. I could not risk them sharing anything that would ruin my reputation. I would be DOOMED. ");
			qaa("She is bluffing. She can't risk us sharing anything that would ruin her precious reputation. ");
			qcc("And people think we are pathetic perverted losers anyway. ");
			kat("Nobody would believe it was the real me and not some kind of fake simulation. ");
			qbb("Wouldn't they?");
			qcc("People are dicks. There are girls and guys who hate you and would believe literally <i>anything</i> bad about you. ");
			qaa("Even mere plausible rumours can destroy your reputation. ")
			if(mile.cyberlesbo>=0){
				qcc("Would you want people to share the video of you lezzing out with your clone? ")
				kat("Nice. You found out a way to make me even more popular - what guy doesn't like some girl-on-girl action? ")
				txt("I really did not wanted to be known as that dyke Katarína but in this situation it seemed like a lesser evil. "+NAME.qcc+"'s daydreamy stare and "+NAME.qbb+"'s appreciative nod confirmed they are agreeing with my argument. ")
			};
			kat("If you believe I'll let myself to be blackmailed just by this, the whole premise of your evil ploy is stupid!");
			qaa("Or we can raise the stakes. What if we had free access to your Cloud?");
			kat("... You can't have my password. It has numbers and weird characters and everything! ");
			qcc("No. However we know your secret password recovery question. ");
			kat("...What!?...How?!");
			qbb("You've told it us yourself. ");
			txt("Oh no! It really hurt to be betrayed this way by my best and closest childhood friend. I hope you suffer in bunny hell, Tlapka. ");
			qcc("I wonder what secrets we will find inside.");
			qaa("Should we share or delete it?");
			kat("NO! ... I mean... whatever I don't care. ");
			qbb("You are our bitch now.");
			link("Gain their sympathy. ",602);
			break;
		case 602:
			kat("You don't have to do this. I don't deserve this. ");
			txt("I tried to gain her sympathy but I failed pretty hard. ");
			qaa("LOL");
			qcc("Like really?");
			qbb("You are a horrible person. ");
			kat("I'm not!");
			qcc("You keep saying that I'm fat and ugly!");
			kat("Well, that's the truth. I'm just honest. ");
			qcc("Still, it is mean and it hurts my feelings. And you spread that rumour about "+NAME.qbb+" stealing lab equipment that nearly got him expelled. ");
			qbb("That was not a rumour. ");
			kat("At least we were always cool, right "+NAME.qaa+"?");
			qaa("What?!? I waste my time ready to help your with anything but you are only friendzoning me! ");
			kat("Sorry, I had no idea! Also, I'm not <i>friendzoning</i> you, I don't consider you to be my friend... ");
			qaa("You think we could be more than friends?");
			kat("... you are rather an acquaintance or something. ");
			qaa("You are always doing this! You are mean, arrogant, selfish, manipulative and sardonic! ");
			kat("I mean I understand I sometimes may seem a bit selfish, but I can assure you: I'm not. And I'm definitely not sardonic. I don't even know what that means! ");
			qaa("You need to pay for your crimes. ")
			link("This is ridiculous! ",603);
			break;
	
		case 603:	
			qaa("Maybe we can arrange some kind of compromise?");
			qcc("She will do something for us and then we let her go, return her access to her cloud and delete everything we have on her?");
			txt("I really did not like where this was heading. But getting away from this secured subreality was my priority. ");
			kat("That seems reasonable. ");
			qbb("She will be our slave for one year and do everything we will command her to do. ");
			kat("No.");
			qcc("Half year?");
			kat("No.");
			qaa("Quarter but we would not order her anything extreme or public? ");
			kat("No.");
			qaa("One month and each day you will have to fulfil one demand from each of us?");
			kat("No.");
			
			txt("They turned off sound and discussed something. They came up with a truly brilliant idea. ");
			qaa("Okay, let's make it challenging and interesting. You were making fun of our gaming. Let's find out how good are <i>you</i>. You will play the <i>Neverion II: The Rise of the Chaos Wizard</i> and each day until you finish the main quest you will do something for us. "); 	
			kat("Isn't that one of those endless games filled with procedurally generated crap?");
			qaa("No, the main quest can be finished under two hours. ");
			qcc("The current speedrun record is one hour forty-seven minutes. ");
			txt("It was obvious they are trying to trick me. To somebody without any gaming experience it will probably take like three or four times more. Still...")
			kat("Okay, I will do it. But I won't do anything stupid. ");
			qaa("Great. We will meet here tomorrow. We will help you to create your character - and give you your first task. ");
			link("Log off.",604);						
			break;	
		
		case 604:		
			set.irl();
			txt("That was without doubts a fiasco. I was now at the whim of those mischievous nerds who could easily ruin my life.");
			txt("It was unbelievable "+NAME.anj+" had come up with a such an awful plan. Almost like... no, that would be just paranoia. ");
			txt("On the other hand, I was sure I would be somehow able to evade their more disturbing creative ideas. And once I finish their stupid game, I will be free again. ");
			
			if(mile.cyberlesbo>0){
				txt("I fell asleep, dreaming very pleasant naughty dreams about my stupid sexy AI clone. ");
			}else{
				txt("I fell asleep, dreaming very weird disturbing dreams about my stupid sexy AI clone. ");
			};
			
			link("The next evening.",700);
			break;

//TO DO?

		case 700:
			//day SUNDAY
			set.newday();
			set.meta();
			
			qaa("First thing first, we need to decide your first assignment.  ");
			kat("Okay.");
			txt("I was prepared for the worst. ");
			qaa("Tomorrow you will go to the school dressed in a very short skirt. ");
			kat("... Okay.");
			txt("Really? That was not so bad. Was that the worst thing they were able to came up with? Probably only the worst thing they dared to suggest me. ");
			qaa("Actually, you are now forbidden wearing anything other than short skirts or dresses. ");
			qcc("It's shame girls don't wear skirts more. ")
			txt("I usually preferred to wear trousers or shorts, but this was hardly some dramatic change to my wardrobe. ")
			qbb("Don't worry, the next assignment will be way harsher. ");
		//	qaa("You will be able to wear anything once you finish the game. "); 
			link("The Game. ",701);
			break;
		case 701: 
			set.game();
			set.chapter("Character creation");
//attributes.hide(); //they are not set yet
			WARDROBE.wearOutfit("FantasyUnderwear");
			qcc("We need to create her game character. ")
			qaa("What race she should be?")
		//kat("I'm okay being white.")
			qcc("Beletriad is inhabited by several fantasy races. And "+choice("humans","r_human")+" are too vanilla and boring. "); //, even despite their intelligence bonus. ");
			qaa("She should be an "+choice("elf","r_elf")+". Ethereal and beautiful. "); //ASAP
			qbb("Or a "+choice("half-ork","r_orc")+". ");
			qaa("Not a half-ork. They are too brutish for her. ");
		//	qbb("But they have great combat bonuses. ");
			link("Next. ",702);
			break;
		case 702: 	
			qcc("The most important is her class. ");
			qbb("She should be the "+choice("Harlot","c_harlot")+". ");
			kat("I don't want to be a harlot. ");
			qaa("Actually that isn't a bad choice. ");
			qcc("With the right build, the harlot can have the highest charisma in the game. ");
		//	kat("Isn't there something else?");
			qaa("But if she wants the combat class, then she should pick the "+choice("Hellion","c_hellion")+". ");
			kat("What the hell is a hellion?");
			qcc("She is brave, ruthless and very sexually liberated pagan warrior. ");
			kat("Is there any... less gratuitous class? ");
			qaa("...")
			qcc(choice("Fallen Priestess","c_fallen")+"?");
			kat("Why is she fallen? Oh wait, I can imagine that. ");
			qcc("She fornicated with dark powers. ");
			qaa("Literally. ");
			/*
			qbb("Charisma is useless in combat. ");
			qcc("If you get 
			*/
			//txt("ke "+choice("elf","r_elf")+", "+choice("orc","r_orc")+" or "+choice("red","hair_3")+". ")
			link("Next. ",703);
			

			break;
		
		case 703:
			qaa("Finally, you can pick a backstory and your origin. ");
			switch(att.class){
				case 1:
				 
					qcc("You can be a "+choice("princess","b_char")+" whose kingdom got invaded. Her father was dethroned and the whole family killed. The blackguard who saved her raped her and then brought her to a home of a crime boss. There she was trained to be a rogue, a dancer and a prostitute. ");
					kat("That's so horrible! ");
					qaa("She has bonus charisma. ");
					qcc("Then there is a "+choice("runaway","b_int")+". She used to be a smart promising girl from a good family, but too romantic and naive. She fell for a wrong man and ran away with him. But he was an abusive scoundrel who made her sleep with other men for money. He eventually left her but her family renounced her and she had no other choice than to continue the life she hated. ");
					qaa("She has bonus intelligence. ");
					qcc("Or you can be an "+choice("urchin","b_dex")+", who doesn't even remember her parents and was forced to survive on harsh streets. From the very young age she was making money by stealing and when she got older by selling her body. ");  
					qaa("She has bonus dexterity. ");
					qcc("Finally there is a "+choice("camp follower","b_str")+". She was making living by following an army, sleeping with soldiers and doing all sorts of odd jobs. She learned to deal with harsh men and was quite content but one day her mercenary company was defeated by orcs, all her friends and lovers either killed in battle or executed later and she was barely able to escape. ");  
					qaa("She has bonus strength. ");
					/* camp follower
					qcc("Finally there is an "+choice("urchin","b_dex")+", who doesn't even remember her parents and was forced to survive on harsh streets. From the very young age she was making money by stealing and when she got older by selling her body. ");  
					qaa("She has bonus dexterity. ");
					*/
					break;
				case 2:
				 
					//chief daughter
					qcc("You can be a "+choice("chief's daughter","b_char")+". She was forced to marry a chief of a different tribe but she despised him because he was harsh and cruel and ran away. ");
					qaa("She has bonus charisma. ");
					qcc("Then there is a "+choice("shaman","b_int")+". From a young age she was trained in arts of divination, communication with spirits and sacred sexual magic. But when the bad luck and plague hit, the chief used her as a scapegoat. She should be brutally ritually sacrificed, but she managed to escape. ");       
					qaa("She has bonus intelligence. ");
					qcc("Or you can be a "+choice("huntress","b_dex")+". She was an unbeatable tracker and ranger but she was also very proud and selfish. One fateful day she killed a young manticore. The parent of the manticore attacked her home village and killed several people including her younger sister. She was then banished. ");       
					qaa("She has bonus dexterity. ");
					qcc("Finally there is a "+choice("berserk","b_str")+". She was the best and the most ferocious fighter in her tribe but then she haughtily refused sexual advances of several young men. They attacked her while she was bathing alone in a lake but she single-handily beat and humiliated them all. Unfortunately she accidentally killed the chief's son and was forced to leave. ");  
					qaa("She has bonus strength. ");
					
					
					//"choice("Fallen Priestess","c_fallen")+"?");
					break;
				case 3:
					qcc("You can be the "+choice("librarian","b_int")+". For long she studied curious volumes of forgotten lore. She was seeking knowledge but she eventually dug too deep and her mind was corrupted. She invoked demons to satisfy her curiosity and lust. When it was discovered that she possessed prohibited tomes, she had to escape and survive in the real world. " );
					qaa("She has bonus intelligence. ");
					qcc("Or you can be the "+choice("herald","b_char")+". She traveled far and wide spreading proclamations of the Order. She was lavishly welcomed everywhere and she started to more care about her debaucherous lifestyle than her mission and eventually she became venal and betrayed her duty for material gain. ");
					qaa("She has bonus charisma. ");
					qcc("Or you can be the "+choice("paladin","b_str")+". She strived to be the warrior of light and eradicate the evil. However she was too proud and reckless. She was defeated, captured and broken. ");
					qaa("She has bonus strength. ");
					qcc("Finally there is the "+choice("hospitaller","b_dex")+" Not the brightest or strongest but a diligent and faithful worker. Until she was convinced by her superior to partake in twisted medical experiments. ");  
					qaa("She has bonus dexterity. ");
					//herald
				//qcc(choice("","b_char"))
				//	qcc(choice("","b_str"))
				//		qcc(choice("","b_int"))
					//		qcc(choice("","b_dex"))
			
			}
			kat("No happy, well-adjusted person?");
			qbb("Why would a happy, well-adjusted person became an adventurer? ");
			kat("But they are all awful and depressing. ");
			qaa("Such is the life in Beletriad. ");
			qbb("Especially since the Second orc invasion and the Nemetian plague. ");
			qcc("Not only the plague killed many people overall, it especially hit hard the rich coastal cities like Sintra or Gothred, totally crashing the ambrosia trade and the whole economy... ");
			qaa("Well, technically Gothred isn't <i>de iure</i> part of Beletriad... ");
			qcc("It is in any practical sense! ");
			qbb("Only thick crown loyalists actually believe that! ")
			link("Okay, okay, whatever! ",799);
			break;
		
			
		case 799:
			initiate_game_character();
			set.game();
			qaa("The total charisma of your character is "+att.char+", strength "+att.str+", intelligence "+att.int+" and dexterity "+att.dex+". ");
			
			
			link("That's good, isn't it? ",800);
			/*
			link("Feyd Mora",null, () => set.chapter("Feyd Mora",100,"feyd") );
			*/
		//	link("Feyd Mora",null, () => set.chapter("Feyd Mora",100,"feyd") );
		//	if(debug)link("#Skip the Game, The Monday",null,(function(){ set.chapter("The Short Skirt",101,"first");  }) );
			break;	

		case 800:
			set.chapter("Welcome to Feyd Mora",100,"feyd");
			break;

	};
};




//FIRST WEEK
story.first = function(input){
	switch(input){
		case 101:
				//day MONDAY
				set.newday();
				set.chapter("The Skirt");
				set.irl();
				
				txt("I woke up a bit tired. I took a quick shower and started dressing up. When I was about to pull on my jeans, I remembered their stupid task. ")
				txt("A <i>short skirt</i> was rather an ambiguous term which could be interpreted in many ways. Even my prude "+choice("placeholder","skirt_1")+" could be by some definition called <i>short</i>, at least in comparison with some floor-length ones. But it would definitely not made my tormentors happy. ");
				txt("Then there was my "+choice("placeholder","skirt_2")+". Reaching to my mid-thights but close-fitting and nicely accenting my flawless bottom - which was something those perverts without doubts appreciate That would be a neutral choice. ");
				txt("Finally, maybe I should try a bit of pandering and wore actually the very short "+choice("placeholder","skirt_3")+". ");
				if(mile.slut>=1)txt("Or... there was still my extremely short "+choice("placeholder","skirt_4")+". It was quite shameless, always just one unwary moment from flashing my panties and I would not dare to wear it on the public under different circumstances but... ");
				if(mile.slut<1&&superbug)txt("### Or... there was still my extremely short "+choice("placeholder","skirt_4")+". It was quite shameless, always just one unwary moment from flashing my panties and I would not dare to wear it on the public under different circumstances but... ");
				link("To School. ",102);
			break;
		case 102:
			
			txt("The blasted trio was impatiently awaiting me in front of the school. I already regretted that I acceded to their blackmail. They would not dare to actually follow their threats, would they? ");
			switch(mile.skirt){
				case 1:
					mile.sub--;
					
					txt("As I assumed they were not exactly thrilled by my outfit. ");
					qbb("What the hell is this? ");
					kat("A short skirt, just like you wanted. ");
					qcc("We imagined something way shorter. ");
					kat("How the hell should I know what you imagined? I'm not a fucking mind-reader. ");
					qaa("You better should take this seriously! ");
					kat("I do. You wanted a short skirt, I have a short skirt!");
					qcc("You are trying rule lawyering! ");
					qaa("I'm sorry Katarína, but we can't accept this behavior in future! ");
					qbb("Or else we'll make you regret! ");
					qaa("I mean, we  are not threating you, but what "+NAME.qbb+" said. ");
					
					link("I'm so sorry! I promise It won't happen again! (Meekly) ",103, () => mile.sub++  );
					link("Okay. ",103);
					link("Whatever. ",103);
					link("I'm so sorry! I promise It won't happen again! (Sarcastically) ",103);
					break;
					
				case 2:
					txt("They seemed quite pleased that I really did what they had told me. However, "+NAME.qbb+" was not completely satisfied: ");
					qbb("I imagined something shorter. ");
					qcc("It is absolutely perfect. ");
					qbb("We shouldn't be too lenient! ");
					qaa("I think she definitely passed our task. Good job. ");
					txt("I walked away, feeling their stares nailed to my butt. ")
					link("Classes. ",103);
					break;
					
				case 3:
					mile.sub++;
					
					txt("They seemed very pleased that I really did what they had told me. ");
					qcc("Wow.");
					qbb("You decided to be our obedient slut, didn't you?");
					txt("I found beneath my level to respond to that. ");
					qaa("You passed your first trial with flying colors. We are glad you are taking this seriously. Great job! ");
					link("Thank you! ",103);
					link("Okay. ",103);
					link("Sure, whatever. ",103);
					break;

				case 4:
					mile.sub++;
					mile.slut++;
					
					txt("The seemed they cannot believe their luck! They stared at me with mouths open surprised I really did what they had told me. ");
					qcc("Whoa.");
					qbb("You are enjoying this, aren't you?");
					qaa("You did not have to go so far. Some miniskirt would be sufficient. ");
					qbb("I told you that deep inside she is just a shameless submissive whore and only thing she needs is a little push. ")
					qcc("Maybe she just doesn't have any other short skirts? ")
					qaa("She definitely does! I mean, not like I'm keeping track of her short skirts, I just remember seeing her in them. ");
					qcc("She definitely passed.");
					qaa("Yeah, you did! Great job. ");
					
					link("Thank you! ",103);
					link("Okay. ",103);
					link("Sure, whatever. ",103);
					break;
					
				default:
					txt("ERROR: NO SKIRT SET");
					link("Classes. ",103);
			};
			break;
			
		case 103:
				txt("The rest of the day was even worse. "+NAME.mol+" (trying to prove once again he is the worst teacher at our school) decided that the best way to start the first Monday class is a surprise test. I spectacularly failed. I blamed the nerds - I had no time to study because of them. But the truth was I would have probably procrastinated anyway. Plus the way "+NAME.mol+" inconspicuously ogled my bare legs during the whole time we were writing really did not help me to focus on the German grammar. ");
				txt("During the break I confronted "+NAME.eva+" and "+NAME.sas+". ");
				kat("Thank you, guys! You helped me a lot!");
				sas("We wanted "+NAME.kat+"! But...");
				eva("It seemed you can handle it. I mean, how hard it could be to convince "+NAME.pet+" to remove the bot? ");
				sas("I'm really sorry, I had no idea "+NAME.pet+" would let it go so far! ");
				eva("I can't even imagine how horrible and humiliating it had to be finding those three bastards recreated virtual you for their own perverted pleasure! ");
				txt("It seemed she imagined that a lot. I just smiled and handwaved it. ");
				kat("Lol, not really. I didn't even think about it this way. I mean, putting my face on some doll is something more humiliating for them than for me! ");
				sas("But what if they take the bot on some other party? ");
				kat("They won't! I'll make sure of it! ");
				txt("I sharply retorted even though I was not so sure. ");
				link("The rest of day. ",104);
			break;
			
			
		case 104:
				txt("On my way home I met "+NAME.qaa+" - we were living in the same tower block. Without the support of his clique he seemed quite anxious when he approached me. ");
				//cligue? asap
				qaa("Hi, "+NAME.kat+".");
				kat("Hello?");
				qaa("I want to apologize. This thing... I really wanted to stop them but they were so excited and they would probably do this with or without me. But this way I can forestall them from forcing you to do something you would really not like. ")
				link("Be nice. ",105);
				link("Be angry. ",106);
			break;
		case 105:
				mile.conscience=1;
				mile.qaa++;
				mile.sub++;
				kat("Thank you. I know I can trust you and that you would never let anything bad happen to me. And I'm really sorry about the way I treated you - I wish I knew about your feelings. ");
				txt("He smiled when I lied to him. Like what the fuck, he blackmailed me and intended to continue to blackmail me but I should forgive him just because of his sudden bad conscience? ")
				//ASAP
				qaa("I'm happy you understand me. Don't worry, I'm sure you will soon start enjoying this. "); /**/
				txt("He did not specify if he meant the Game or being their slave. Either way I had my doubts. ");
				
//TODO
				txt("I felt physically and mentally exhausted when I returned home. Still, there were so many other things I was supposed to do. ");
				link("Play the Game.",120, ()=> mile.immersion++);
				link("Study. ",120);
				link("Masturbate. ",120);
				link("Go to gym. ",120);
				link("Chat with friends. ",120);
				//link("The first dungeon. ",1000);
			break;
			
		case 106:
				mile.conscience=-1;
				mile.qaa--;
				mile.sub--;
				kat("WHAT THE HELL?! First you stole my identity to create some twisted AI sex toy, then you started blackmailing me to be your slave and hold my data hostage but everything is okay just because you feel bad about it? ");
				qaa("You don't understand! ");
				kat("I understand very well - you are a pathetic virgin loser! ");
				txt("His face turned stone cold when he callously responded: ");
				qaa("I doubt I will be a virgin when you finish the Game. ");

				txt("I was furious! I was not afraid of him but how he even dared to say a such thing!");
				txt("I felt physically and mentally exhausted when I returned home. Still, there were so many other things I was supposed to do. ");

				link("Play the Game.",120); //()=> mile.immersion++ 
				link("Study. ",120);
				link("Masturbate. ",120, ()=> mile.slut++ );
				link("Go to gym. ",120);
				link("Chat with friends. ",120);
			break;	

		case 120:	
				set.chapter("Tuesday");
				set.newday();
				
				txt("The nerds did not contact me with another demand. I hoped they had enough messing with me and decided to not press their luck furthers. Still, just to be sure, I decided to wear a skirt. I mean, I would probably wear a skirt anyway without being ordered so! ");
				txt("My hopes were vain. The trio awaited me in school basement locker room. ");
				kat("Good morning? ");
				qbb("We wondered what kind of panties you are wearing. ");
				kat("What?!?! That is none of your business!!! ");
				qcc("Well, it is your next task. Flash us your panties. ");
				qbb("Do it! ");
				kat("Right here, right now?!? ");
				
				if(mile.qaa > 0){
					qaa("Well, it doesn't have to be right here, of course. ");
				}else{
					qaa("Yeah! Right here, right now!!! ");
					qcc("Really? Somebody can see us here! ");
					qbb("You say it like its a bad thing! ");
				};
				
				kat("I can vividly describe my panties to you?")
				txt("However, the did not react on my reasonable compromise. Flashing panties to them technically should not be a big deal - I was often wearing more daring bikini - but I was reluctant to do it here even though nobody was currently around. Anybody could just walk in and I would not survive to be seen this way. On the other hand I did not want to admit weakness in front of them, I needed to stay calm and careless, to show them I am not fazed by their blackmail. ");
				if(mile.slut>2)txt("And it sounded pretty naughty.");
				
				counter.temp = 0;
				link("Do it right here and quickly get over it. ",121, () => counter.temp = 1);
				link("Go to some more secluded place. ",121, () => counter.temp = 2);
			break;
			
		case 121:	
				txt("I quickly raised my skirt only for them, just to give them the glimpse of "+dynamic("color")+" fabric. "+(counter.temp == 1 ? "I was anxious, anybody could come at any moment. " : "")  );
				qaa("Not good enough. ");
				txt("I angry groaned and raised my skirt again. ");
				qbb("I imagined something better. ");
				qcc("They are too boring and prude. ");
//if(mile.slut>=1)txt(
				kat("I really didn't expect showing them anybody. You didn't expect I every day wear to school some sexy lacy lingerie? ");
				qcc("Well, kinda. ");
				qaa("We can do something about that. ");
				kat("What do you mean?!");
				qaa("You don't have to be concerned about that right now. ");
				txt("Needles to say, I did not felt extremely comfortable when I was forced to discuss my choice of underwear with them. I was very happy when everything was over. On the other hand, both their tasks were far tamer then I was afraid.");
				
				if(counter.temp == 1){
					link("Walk away. ",122);
				}else{
					link("Run away. ",122);
				}
			break;
			
		case 122:	
			txt("As soon as I returned home, I entered the game. I scouted the area around Feyd Mora, killed some monster and got killed by them many times. Overall, my progress was negligible. ");
			link("Wednesday. ",130);
			break;
			
		case 130:
			//set.chapter("The Top");
			//set.newday();
			txt("The nerds seemed to determined to gain the full control over my wardrobe which was "+(mile.sub>1 ?
				"quite embarrassing. They wanted to humiliate me in front of anybody just to satisfy their dumb perverted urges. However, for now I did not dare to disobey their direct orders." 
				:
				"really annoying. It was so infuriating to be told what to wear by three stupid horny nerds! "
			)+" My next task was to wear some sexy top. ");
			
			if(mile.skirt<=2){
				txt("After the affair with the skirt, they did not trust me and gave me a detailed list of their demands about my new outfit. I did not even bother to read it - I was pretty sure they will be fine with anything adequately slutty. The major catch was that I was not allowed to wear any bra. ");
			}else{
				txt("They did not get me any details, the little pandering with skirt paid off and they trusted my consideration - they did not specify anything else that it needs to be <i>sexy</i>. And that I can wear no bra. ");
			}
			
			morgen.one("The Top");
		//	link("Get dressed. ",null, () => wardrobeWrapper("first",131) );
		//	link("Random outfit. ",null, () => wardrobeAuto("first",131) );
			break;
			
		case 131:
			//set.chapter("The Top");
			//set.newday();
			txt("The nerds seemed to determined to gain a full control over my wardrobe which was "+(mile.sub>1 ? "quite embarrassing but I did not dare to disobey their direct orders." : "really annoying.")+"My next task was to wear some sexy top. ");
			
			if(mile.skirt<=2){
				txt("After the affair with the skirt, they did not trust me and gave me a detailed list of their demands about my new outfit. I did not even bother to read it - I was pretty sure they will be fine with anything adequately slutty. The major catch was that I was not allowed to wear any bra. ");
			}else{
				txt("They did not get me any details, the little pandering with skirt paid off and they trusted my consideration - they did not specify anything else that it needs to be <i>sexy</i>. And that I can wear no bra. ");
			}
			
			morgen.two(132);
			/*
			link("Get dressed. ",null, () => wardrobeWrapper("first",131) );
			link("Random outfit. ",null, () => wardrobeAuto("first",131) );
			link("Go to school. ",132);
			*/
			break;
			
		case 132:
			mile.ruler = false;
			{
				let skirt = (PC.lower && PC.lower.innerLoose>=1) ? true : false;
				let bra = (!PC.bra) ? true : false;
				let top = (   PC.upper && ( PC.upper.dad == "wTubeTop" || PC.upper.dad == "wHalterTop" || (PC.upper.dad == "wTee" && PC.upper.armCoverage<0.4 && PC.upper.waistCoverage>0.6)  )   ) ? true : false;
				
			
				txt("I did not have a chance to meet the trio until the second break. ");
				
				if(bra && top && skirt){
					txt("Needles to say they were pretty satisfied and could take their eyes off my barely visible nipples. ");
					
					
					qaa("You look great, "+NAME.kat+"! ");
					if(mile.qaa>0)kat("Thank you. ");
					if(PC.upper.dad == "wTee"){
						qcc("T-shirt isn't a top, but it's slutty enough so we'll give you a pass. ");
					}else{
						qcc("This kind of outfit suits you really well. ");
					};
					qbb("Why even bother with bras with tits like yours? ");
					qcc("That's true! ");
					
					qaa("Right. You are not allowed to wear any bras till you finish the game. ");
					qcc("How far you are? ");
					kat("Hey I.. Pretty far.. but... ");
					qaa("So it won't be for very long! ");
					
					
					link("Yeah, but...",133);	
					
					/*
					if(!skirt){
						qaa("But what about those pants?");
						qcc("You are allowed to wear only skirts. ");
						qbb("We can't tolerate this. ");
						
						
					}else{
						
					}
					*/
					
				}else if(top && skirt){
					qaa("You look great, "+NAME.kat+"! ");
					if(mile.qaa>0){	
						kat("Thank you! ")
					}else{
						kat("Yeah? ")
					}
					qaa("But I can see you're wearing a bra! ");
					qcc("You weren't allowed to do that! ");
					qbb("Take it off!");
					kat("What?!");
					qaa( (mile.gaa>0) ? "Remove you bra. I'm sorry "+NAME.kat+" but you have to follow our assignments exactly. " : "STRIP YOUR BRA!" );
					txt("I reluctantly slipped my hands under my "+dh.decapitalise(PC.upper.name)+" and unhooked the bra while they were watching. Then I took it off without removing removing my top. "+NAME.qcc+" immediately grabbed it. ");
					kat("What the...");
					qcc("So you wouldn't be tempted to put it back. ");
					qaa("He'll give it to you back once you finish the game. ");
					qbb("Nice tits! Why even wear bras with tits like this? ");
					qcc("Good point. ");
					qaa("Right, "+NAME.kat+", you are not allowed to wear bras from now on! ");
					kat("But...");
					qbb("And be glad we didn't punished you for failing our task! " );
					
					mile.warned++;
					WARDROBE.remove("bra");
					
					link("Yeah, but...",133);	
					
				}else{
					
					txt("The nerds were not very amused. ");
					qbb("What the hell? ");
					qaa("You completely ignored our task! ");
					
					if(!skirt){
						qcc("Did you already forgot you are not allowed to wear pants? ");
						qbb("Are you really so dumb? ");
						if(mile.sub<1){
							qaa("I'm not dumb!");
							qbb("You are not even able to follow the simples instructions! ");
						}
					}else{
						qcc("You were supposed to get dressed in some sexy top and no bra. ");
					}
					
					qaa("Should we release everything we have? ");
					qbb("We really should. ");
					kat("Please don't! ");
					qaa("Follow us. ");
					txt("They dragged me to the bathroom. ");
					
		//TODO
					if(!bra){
						qbb("Take your bra off!");
						kat("What?!");
						qaa( (mile.gaa>0) ? "Remove you bra. I'm sorry "+NAME.kat+" but you have to follow our assignments exactly. " : "STRIP YOUR BRA!" );
						txt("I reluctantly slipped my hands and unhooked my bra while they were watching. Then I took it off without removing removing my top. "+NAME.qcc+" immediately grabbed it. ");
						kat("What the...");
						qcc("Sou you wouldn't be tempted to put it back. ");
						qaa("He'll give it to you back once you finish the game. ");
						qbb("It would be shame to hide tits like yours. From now on you are not allowed to wear any bra. ");
						qaa("What!?! ");
						qbb("Also you need to be punished! ");
					}else if(!skirt){
						qbb("We should tell her to take off her pants and confiscate them. ");
						qaa( (mile.gaa>0) ? "And leave her just in her panties? ": "That is a brilliant idea. " );
						qcc("But what would she do in the school just in her underwear? ");
						if(mile.gaa>0){
							qbb("That would be her problem, not ours. ");
						}else{
							qaa("That would be her problem, not ours. ");
						}
						qcc("But people would probably notice... ");
						qaa("Yeah, you're right. ");
						qbb("But she still needs to be punished! ");
					}else{
						qbb("You need to be punished! ");
					}
					
					WARDROBE.remove("bra");
					
					link("Punished?!",null, () => set.skip("punishment",100,"first",133)  );
					
				}
			}
			break;
			
		case 133:	
			txt("The rest of day was not much better. My outfit definitely raised some eyebrows and not only eyebrows if you know what I mean. ");
			txt("During the lunch, as usually, I was sitting with "+NAME.eva+" and "+NAME.sas+". ");
			
			if(mile.ruler){
				sas("Are you okay?")
				kat("Yeah. ")
				txt("I uncomfortably moved on my chair, my red bottom was still itching after the execution. ");
			};
			eva("Nice outfit. ");
			txt(""+NAME.eva+" snidely noted. WHAT A BITCH! How she dares, considering the trash she is usually not ashamed to wear?!? ");
			kat("Thank you. I really like your shoes. ");
			txt("Her face went pale but she did not say anything, just smiled.");
			sas("Are you going to Bronze tonight?");
			kat("No, I don't have time. I need to... study. ");
			eva("Again? You told us you studied for the whole weekend? ")
			kat("Yeah... but... I need to study even more because... exams. ");
			
			txt("Those nerds did not even need to leak anything, their stupid game was slowly destroying my social life anyway.  ")
			link("Afternoon. ",140);	
			break;
			
			
		case 140:
			set.chapter("Advice");
			txt("The game was far more difficult then I initially thought. I was stuck. To get a better equipment I needed money. To get money I need to explore dungeons. To explore dungeons without getting immediately killed I need better equipment. ");
			txt("It was a vicious loop and I did not know a way out. Unless...");
			txt("Those three nerds knew the game through and through. Maybe I would be able to convince one of them to cooperate and give me some advice."); 
			
			if(mile.conscience<0){
				txt("But not "+NAME.qaa+". I really did not like his last remark during our last private conversation and he still might be angry. ")
			}else{
				link("Try "+NAME.qaa+" (the one with crush)",150);
			};	
			link("Try "+NAME.qbb+" (the creepy one)",145);		
			link("Try "+NAME.qcc+" (the fat one)",141);
			break;
			
		case 141:
			set.meta();
			mile.advice1 = 3;
			mile.qcc++;
			
			txt("I met "+NAME.qcc+" in the Metaverse. He seemed a bit nervous to face me alone. ");
			qcc("H-Hi, Katarína. I'm sorry about those things, I had no idea it was really you and not the AI. ");
			kat("Don't worry about that. I mean, I hate being blackmailed and stuff, but I'm really glad you made me play <i>"+(mile.immersion>0 ? "Neverion II: The Rise of the Chaos Wizard" : "that game" )+"</i>. It is really awesome!");
			txt("His eyes brighten up.");
			qcc("Really!? Do you like it? ");
			kat("Yes, a lot. Well, it is a bit unbalanced. Some numbers are pretty arbitrary and it almost looks like somebody just added random values without having any idea what is she doing. It is really hard for a low-level character to get enough money...");
			qcc("That's just wrong! There are several ways to get rich like... wait, are you trying to trick me?");

			link("Yes.",142);		
			link("No.",143);
			break;
			
		case 142:
			kat("Yes. You explained to me that I'm an evil manipulative bitch so I'm just trying to live up to your expectation. ");
			qcc("I can't help you. ");
			kat("You can and you will. What would I need to do for your help?");
			txt("For a moment he struggled - he really did not want to betray his friends - but I knew he will break.");

			qcc("It might seem weird... ");
			txt("No worries, just another weird experience to my collection. ")
			qcc("... but I always wondered how would you look like with pink hair. ");
			txt("Like "+choice("this","l_pink")+" or "+choice("this","d_pink")+"? My new hairstyle rendered nearly instantly. ")
			qcc("Yes, but IRL.");
			kat("You mean I should actually dye my hair in the real life?")
			qcc("Yes. ");
			txt("Hmmm... And why not? In the worst case, I can easily (well, not as easy as in the Metavese) change my color back. ");
			link("Okay",160)
			break;
			
		case 143:
			kat("No. I'm just really desperate! The Game is so hard and I.. I'm so awful.. and... and...")
			txt("I can be a quite good actress. It seemed I was about to burst into tears which clearly made him very uncomfortable.");
			qcc("It really isn't so hard... but I can't help you..." );
			kat("Please! I would do <i>anything</i> for you!");
			txt("Watching his inner struggle was almost entertaining. ");
		
			qcc("It might seem weird... ");
			txt("No worries, just another weird experience to my collection. ");
			qcc("... but I always wondered how would you look like with pink hair. ");
			txt("Like "+choice("this","l_pink")+" or "+choice("this","d_pink")+"? My new hairstyle rendered nearly instantly. ")
			qcc("Yes, but IRL.");
			kat("You mean I should actually dye my hair in the real life?")
			qcc("Yes. ");
			txt("Hmmm... And why not? In the worst case, I can easily (well, not as easy as in the Metavese) change my color back. ");
			link("Okay",160)
			break;	
			
			
		
		case 145:
			set.meta();
			mile.advice1 = 2;
			mile.qbb++;
			qbb("Hello, Katarína. I knew you will return for more.");
			kat("What?!? NO!");
			qbb("Admit it! You liked it!");
			kat("That's not why I'm here.");
			txt("I let him believe I quickly changed the subject because I did not want to honestly answer his question.");
			kat("I just can't advance in the game and I need a help. ");
			qbb("Okay. I'll help you. ");
			kat("Just like that?");
			qbb("Of course not. I have a piece of accessory for you. ");
			link("Oh no. ",146);
			break;
		
		case 146:
			att.collar = 1;
			set.meta();
			txt("Terrified I imagined all sorts of fetish or bondage equipment he might want me to wear. Latex corset? Those Japanese ropes under my clothes? To my surprise, he conjured just a thin black leather choker. ");
			kat("Just a choker? Okay, I'll wear it. ");
			qbb("It's not a choker. It's a collar. It symbolizes you are nothing but a submissive slut. Sure, people will miss that but I will know. And <i>you</i> will know. ");
			txt("The more he was talking the less appealing the choker seemed. ");
			qbb("Every time you look in a mirror I want you to remember that you are wearing it only because I made you wear it. ");
			txt("I should have asked him to spank me again, that would be over at once. ");
			link("Oh. ",160);
			break;
			
		case 150:
			mile.advice1=1;
			mile.qaa++;
			txt("I decided to visit "+NAME.qaa+" personally, hoping for some extra leverage. ");
			qaa("Hi, "+NAME.kat+", what are you doing here?");
			kat("I just came to say you <i>thank you</i> once again. I feel bad because I had no idea about your feelings. I really didn't want to lead you on. ");
			txt("He was a bit embarrassed. ");
			qaa("That's okay, don't worry about that. ");
			kat("I also appreciate you are trying to restrain those other two. It is nice to have somebody who is on my side. ");
			qaa("... You are welcome. ");
			kat("...");
			qaa("...");
			kat("...");
			qaa("... So.. How's the Game? ");
			kat("<i>"+(mile.immersion>0 ? "Neverion II: The Rise of the Chaos Wizard" : "Neverion II" )+"</i> is really great but I just ran into a bit tricky part and I might need some help. " );
			qaa("I should not give you any advice, that would be against the rules. ");
			kat("But I thought you wanted to save me? Don't you?");
			qaa("...Yes, of course!");
			kat("Brilliant.");
			qaa("...But the days you could freely exploit me are gone. ");
			link("What?",151);
			/*
			kat("But you told me you will help me to finish the game and be free again! ")
			qaa("Did I?");
			kat("Yes? I mean, you want me to be free again, don't you?");
			qaa("...Yes, of course!");
			
			*/
			break;
		
		case 151:
			qaa("You heard right. This is yet another case where you just expect somebody else will do your job for you. ");
			kat("First, I did never <i>exploit</i> you. Second, if I'd knew you will bring this up during our every conversation, I'd never apologized. ");
			qaa("It's not just me. You think you can always get away with anything just because of your beautiful face or your lovely hair or your pretty little fingers or your cute ears...  anyway, you get my point? "); 
			kat("Yes. You think I'm pretty. ");
			qaa("Yes... No! You are no longer in position to make me do anything for you. ");
			kat("Cut it. I see how are you eager to force me to do some humiliating personal task for you. ");
			qaa("...Hmm. I can give you some advice, but you would need to kiss me. ");
			kat("... Okay. ");
			txt("Before he was able to react I gave him a quick passing kiss. ");
			qaa("Oh.");
			kat("Okay?");
			qaa("Y.. No. You didn't even try. Put your heart into it. ");
			txt("I sighed. I did not enjoy this and I could not put more heart into it, but I could try a bit more of my tongue and let him plunder my mouth. But when I felt his hand on my butt I decided he had enough fun and pushed him away. ");
			kat("Enough?");
			qaa("Y..Yes");
			link("Evening. ",160);
			break;	
			
		case 160:
			set.game();
			txt("Okay. It was time to make a serious advance in the damned Game. ");
			txt("I was advised to visit a dungeon which was in my journal described as <i>Valsyan Cavern</i>. The peasants living around suspected it is the local center of nefarious activities of the Evil Overlord.    ");
			link("Enter the cavern", null, () => DUNGEON.start("cavern","first",169,165)  );
			if(debug)link("##Skip dungeon. ",169);
		//	link("Feyd Mora",null, () => set.chapter("Feyd Mora",100,"feyd") );
			break;	
			
		case 165:
			txt("So that was my first major dungeon. And I completely failed! It was so infurating! ");
			
			link("Wow. <i>Neverion II: The Rise of the Chaos Wizard</i> is actually really awesome!",170, () => mile.immersion++ );	
			link("That was great... but I am definitely not one of those weirdos who enjoy video games! ",170);	
			link("It was not so bad. ",170);	
			link("That game is so awful and boring. I wish so much I did not have to play it. ",170, () => mile.immersion-- );
			break;
			
		case 169:
//TODO 
			if(mile.dungeon1_attempts==0){
				txt("So that was my first major dungeon. And I finished it on my first try!");
			}else{
				txt("So that was my first major dungeon. And I it took me only "+mile.dungeon1_attempts+" attempts. ");
			};
			link("Wow. <i>Neverion II: The Rise of the Chaos Wizard</i> is actually really awesome!",170, () => mile.immersion++ );	
			link("That was great... but I am definitely not one of those weirdos who enjoy video games! ",170);	
			link("It was not so bad. ",170);	
			link("That game is so awful and boring. I wish so much I did not have to play it. ",170, () => mile.immersion-- );
			
			
			break;
		case 170:
			set.irl();
			set.chapter("Vibrating Panties");
			set.newday();
			
//ASAP LOCKING
			txt("The next morning a drone delivered the thing that I was ordered to wear to school. I was a bit afraid when I opened an inconspicuous black box but inside were just black briefs. Their obsession with my underwear was quite concerning. "); // Those jerks just cannot make up their mind, one day I should not wear any panties, another day I should... 
			txt("Only the thicker front part hinted they are not mere ordinary panties. I very reluctantly put them on. ");
			link("Wardrobe. ",null, () => wardrobeWrapper("first",171) );
			link("Random Outfit. ",null, () => wardrobeAuto("first",171) );
			//link("Auto Dress up (WIP). ",null, void 0, false);
			//link("Go to school. ",162); 
			break;
			
		case 171:
			txt("The next morning a drone delivered the thing that I was ordered to wear to school. I was a bit afraid when I opened an inconspicuous black box but inside were just black briefs. Their obsession with my underwear was quite concerning. "); // Those jerks just cannot make up their mind, one day I should not wear any panties, another day I should... 
			txt("Only the thicker front part hinted they are not mere ordinary panties. I very reluctantly put them on. ");
			link("Wardrobe. ",null, () => wardrobeWrapper("first",171) );
//TODO!!!
//MILE.MAKEUP & MORGEN!!!!
		link("Random Outfit. ",null, () => wardrobeAuto("first",171) );
			link("Go to school. ",172); 
			break;

		case 172:
			txt("My suspicion was confirmed in a tram when the panties came to life and started to gently vibrate. It was kind of nice. Vibrating stopped after several minutes but still, my way to school was more entertaining than usually. I nearly forgot about them until I descended to the locker room. ");
			txt("I winced and nearly dropped all my books when they unexpectedly buzzed. "+NAME.qaa+", "+NAME.qbb+" and "+NAME.qcc+" just arrived.  ");  
			qaa("Do you enjoy your new task?");
			qbb("I bet she does. ");
			qcc("She looks like she does. ");
//TODO 			
			link("Yeah, kinda. ",173, () => {mile.slut++}  ); 
			link("No-o (lying nervously). ",173, /*() => {mile.slut++} */ ); 
			link("No! ",173, () => {mile.slut--}  ); 
			link("Hell no! You're a bunch of perverts. ",173, () => {mile.slut--}  ); 
			link("I absolutely love it. ",173, () => {mile.slut++}  ); 
			break;
			
		case 173:	
			qcc("You would be surprised how sophisticated those things can be. The pulses are exactly directed to give you the maximal pleasure and the rudimentary AI can be synchronized with music, recognizes chosen keywords you or somebody else say in your vicinity, detects your arousal and lock you in a vicious feedback loop or predicts your climax and edge you without actually making you come. ")
			txt("That sounded absolutely terrifying. ");
			qaa("However, the best feature is that they are remotely controlled by a mobile app. There are several settings but the most interesting is that we can easily adjust the intensity. From the lowest...   ")
			txt("My panties once again started gently humming. It was uncanny to be sexually stimulated at school surrounded by the three people I despised the most. ");
			qaa("... to the highest. ");
			kat("AAI!!!");
			txt("That was strong!! My heart was racing and I looked around, terrified somebody heard my undignified loud squeak. Fortunately, nobody seemed to notice. But there was no way I would be able to withstand this level of teasing!");
			kat("Please, don't do that. ");
			if(mile.qaa>0){
				qaa("Ok, I won't when you are asking so nic...");
			}else{
				qaa("Maybe I will, maybe I wo...");
			};
			kat("Ai<small>e</small>");
			txt("I bit my lip trying to overcome the second peak. ");
			qaa("... That wasn't me.");
			qcc("I..I was just trying something. ");
			kat("I really mean it! The maximal intensity is... too intense. ");
			qcc("Okay. ");
			txt("I was about to leave them when I was hit for the third time. ");
			qbb("Sorry, I did not want to be left out. ");
			txt("And then they all started laughing at my misery. ");
			link("Long day ahead. ",174); 
			break;
		
		case 174:
			txt("When I was far enough I stopped, took several deep breaths and tried to calm myself down. ");
			kat("You can do this, Katarína. ");
			txt("The first lesson was not so bad even though every few minutes my panties started to vibrate. They tried various settings, long constant vibration, quick sharp pulses or their various combinations. However, it seemed my pleas had not been vain and they kept the intensity at a bearable level. ");
			txt("The second lesson was even better - it was English and none of those three was a member of my group. I hoped they are getting bored but the opposite was true. ");
			txt("They were disappointed by the lack of my visible reaction and became only more determined to make me suffer. I squirmed on my chair whenever the panties started to vibrate and they were obviously amused by my discomfort.   ");
			txt("German - the class I despised the most - was the next. ");
			mol("Where is your homework, miss Pokorná?");
			txt("Fuck! I assumed my honest excuse that I had no time because I had been playing a video game would not be well received so I just said I had forgotten. ");
			txt("But it got worse. After he instructed the class to read an article in the textbook he decided to examine one of students orally. A sudden premonition made my blood run cold. ");
			link("Oh no. ",175); 
			break;
		
		case 175:
			mol("Miss Pokorná? Maybe you feel you don't have to do your homework because you believe you already mastered the topic? Let's test that. ");
			txt("I gave a quick pleading puppy look to my tormentors and went forward. ")
			mol("Conjugate <i>to know</i>");
			kat("Er kann, Er konnte, Er ist... hat ge-..-e-..");
			txt("I faltered. Few people raised their heads from textbooks and I can feel they are staring at my now very visibly erected nipples. ");
			txt("The intensity of vibrations rose and I inconspicuously leaned against the board because I sensed my legs would not be able to hold me for long.  ");
			txt("They would not let me orgasm in front of the whole class, would they!?!?!?!?! My face was red and "+NAME.mol+" probably assumed I am embarrassed because I do not know the right answer (which was not an entirely incorrect assumption). ");
			mol("F. Sit down. ");
			txt("Yes! I rushed back to my seat. If I survived this, I will survive everything. I opened the book. My relief was so strong I lost all my caution and sudden maximum-intensity burst hit me completely unprepared. ");
			kat("AH-..."); 
			txt("All heads instantly turned to me. ");
			mol("What does it mean, miss Pokorná?");
			kat("I.<small>ah</small>.. I..");
			mol("You don't bother to do your homework nor to prepare for the lessons and then you even interrupt? This means detention for you. ");
			link("Oh no. ",176); 
			break;
			
		case 176:
			txt("I spend the rest of the lesson hunched, head in my hands. I did not care about the lecture, I fully focused on suppressing tears and a loud orgasm. ");
			txt("I cannot withstand the frustration any more. I hated when my panties started buzzing and even more when they abruptly stopped. When the bell rang I was ready to rush out of the class and do the unthinkable. But the nerds blocked my way. ");
			qbb("Where are you going?");
			kat("T-..To restroom. ");
			qaa("Restroom?");
			qcc("I hope you are not intending to do anything naughty in there. ")
			//ASAP MILE
			if(mile.sub<1){
				kat("F-..Fuck you! ");
				txt("I roughly showed them from my way and dashed to the restroom. Once they saw the door shut behind me they turned the insistent stimulation to the max. I stumbled into a cabin where I immediately showed my hand under my double-damned vibrating panties. "); 
			}else{
				kat("P-..Please, let me go! ");
				txt("I desperately begged them. Finally, they let me pass and I dashed to the restroom. Once they saw the door shut behind me they turned the insistent stimulation to the max. I stumbled into a cabin where I immediately showed my hand under my double-damned vibrating panties. "); 
			};
			txt("<i>I am in school, I am fingering myself and those three nerds know exactly what I am doing. </i>");
			txt("With that idea, I came. It was one of the strongest orgasm in my life. ");
			link("Oh no. ",178); 
			break;
			
		case 178:
			txt("I am very ashamed to admit that but that was not the last of my visits to restrooms that day. The nerds extremely enjoyed every time I returned red with embarrassment.  ");
			txt("When I finally got to the lunch, "+NAME.eva+" and "+NAME.sas+" had nearly already finished. They were discussing an exciting evening in the Bronze. It seemed "+NAME.tom+" had cheated on "+NAME.zan+" with Vendy and when "+NAME.zan+" found out she made a huge scene. I wished I could have been there. I always predicted their relationship will not last but I always assumed the unavoidable break up will be "+NAME.zan+"'s fault. She was a skank. ")
			
			if(mile.advice1==3){
				txt("But then "+NAME.eva+" looked straight at me and asked: ")
				ayy("What the hell is wrong with you? ");
				txt("THEY KNOW!!! My life was officially over. ");
				kat("I-...");
				txt("Where to even start? How to vindicate? "+NAME.eva+" was a cold cavillous bitch - that was why I liked to hang out with her - but at least "+NAME.sas+" might take pity on me. Still, would not be a pity even worse than open contempt? ");
				qaa("What were you thinking when you decided for a pink color?");
				txt("Oh! They know nothing! ")
				kat("Pink color?... Oh yes, pink color... I felt in a mood for... some experiment. You don't like it? ");
				//qaa("Yeah, but pink?"
				ayy("You look like some trashy stripper. ");
				txt(""+NAME.eva+" went too far. I needed to put her down and lower her self-esteem somehow. Something about her bad brittle hair and lack of will and originality to be a trend-setter (she hated implications she is basic because she was)... "); 
				txt("Then my panties started teasing me again and they interpreted my lowered eyes and sudden discomfort as an acceptance of defeat. "); 
		 
			}else if(mile.advice1==2){
				txt("But then "+NAME.eva+" looked straight at me and told me: ")
				ayy("Nice collar. ");
				txt("THEY KNOW!!! My life was officially over. ");
				kat("I-...");
				txt("Where to even start? How to vindicate? "+NAME.eva+" was a cold cavillous bitch - that was why I liked to hang out with her - but at least "+NAME.sas+" might take pity on me. Still, would not be a pity even worse than open contempt? ");
				qaa("Yeah, I don't think it suits you. ");
				kat("You...don't like... my choker? ");
				txt("I slowly put the information together. They know nothing! ");
				ayy("Obviously, you look like some wannabe goth. ");
				txt("I had enough of "+NAME.eva+"'s criticism of my fashion choices. (Well, the collar was not exactly my choice but whatever.) I needed to put her down and lower her self-esteem somehow. It was not me who spend the last years of the elementary school dressed in black with pale makeup and a ridiculous amount of metal jewelry. "); 
				txt("Then my panties started teasing me again and they interpreted my lowered eyes and sudden discomfort as an acceptance of defeat. "); 
			}else{
				txt("But then "+NAME.eva+" looked straight at me and asked: ")
				ayy("What the hell is wrong with you? ");
				txt("THEY KNOW!!! My life was officially over. ");
				kat("I-...");
				txt("Where to even start? How to vindicate? "+NAME.eva+" was a cold cavillous bitch - that was why I liked to hang out with her - but at least "+NAME.sas+" might take pity on me. Still, would not be a pity even worse than open contempt? ");
				ayy("Why are you lately waste so much time studying? Live a little. ");
				qaa("You always told us "+NAME.zan+" will do something stupid and you not even were there to see the glorious fallout! ");
				kat("Oh! You thought I should go to the Bronze with you!");
				txt("They know nothing! ")
				ayy("Of course. Are you trying to become one of those bookworm nerds? ");
				txt(""+NAME.eva+" went too far, nobody will call me a nerd! I needed to put her down and lower her self-esteem somehow. It should not be hard, she was always a bit insecure about her intelligence and if somebody could benefit from more studying it was her. "); 
				txt("Then my panties started teasing me again and they interpreted my lowered eyes and sudden discomfort as an acceptance of defeat. "); 
			}
			link("Damn! ",180); 
			break;

		case 180:
			set.chapter("Detention");
			txt("Detention meant I would spend an hour alone with "+NAME.mol+". ");
			txt("A precious hour I could spend with playing the Game or literally anything else. ");
			txt("Alone, just we two in an empty class in otherwise empty school. ");
			txt("He gave me some exercises but I could not focus. I could only think about the next wave of vibrations. ");
			mol("Is everything all right, Katarína? You seem to be very tense. ");
			txt("Duh! Of course I was tense! My kitty was the whole day randomly remotely stimulated by three jerks!");
			mol("Can I help you somehow? ");
			txt("He touched my shoulders. ");
			mol("I noticed you started wearing even more provocative outfits. ");
			txt("He began gently massage my nape. ");
			txt("What the hell... ");
			
			link("Just bear it. ",182); 
			link("Let it happen. ",183); 
			link("Threaten him. ",181); 
			if(mile.slut>=2)link("Seduce him. ",184); 
			break;

		case 181:
			mile.teacher=-1;
			mile.sub--;
			txt("I briskly recoiled far from his reach. ");
			kat("What the hell are you doing!?!!");
			mol("I just...");
			kat("This is sexual harassment and I'll report it to the principal! I don't think she'll be very amused! ");
			mol("I didn't...");
			kat("Oh yes, you did! ");//And I have enough of your sleazy stares. 
			mol("Nobody will...");
			kat("All girls will gladly confirm you are a sleazy old pervert! ");
			mol("But Katarína...");
			kat("I hope you will get fired and nobody will <i>ever</i> employ you. ");
			mol("Come on miss Pokorná...");
			link("You will improve all my grades and you will never ever give me those creepy stares or sleazy comments. Or else..",190); 
			link("You will change the last two F's to A's and you will never ever give me or any other girl those creepy stares or sleazy comments. Or else... ",190); 
			break;
			
		case 182:
			txt("I felt very uncomfortable but I let him continue. My grades were already bad and I did not want to make him angry. ");
			txt("I assumed he will not dare do anything more but I was wrong, so wrong. ");
			txt("His hands slipped down and he started rubbing my breasts. ");
			txt("Oh no.")
		//	link("Let it happen. ",); 
			link("Let him continue. ",186); 
			link("Stop him and threaten him. ",181); 
			break;
		
		case 183:
			txt("I felt a bit uncomfortable but I let him continue. My grades were already bad and I did not want to make him angry. ");
			txt("I hoped he will not dare do anything more but I was wrong, so wrong. ");
			txt("His hands slipped down and he started rubbing my breasts. ");
			mol("You like it, you little slut, don't you?");
			txt("He whispered in my ear. ");
			txt("And my panties were buzzing again. ");
			 
			link("<small>Yes</small> ",186); 
			link("Yes! ",186); 
			link("Ye- AH-h!... -s.",185); 
			link("No.",181); 
			link("Hell no!",181); 
			break;
			
		case 184:
			mile.slut++;
			mile.sub--;//to counter further down mile.sub++; seducing is not submission
			txt("I felt a bit uncomfortable, being molested by my teacher, but also a bit naughty and desires of my body, whole day abused by endless teasing, were stronger than my common sense. ");
		//	txt("I hoped he will not dare do anything more but I was wrong, so wrong. ");
			kat("What are you doing, "+NAME.mol+"? ");
			txt("I asked him playfully. ");
			
			txt("His hands slipped down and he started rubbing my breasts. ");
			mol("You like it, you little slut, don't you?");
			txt("He whispered in my ear. ");
			txt("And my panties were buzzing again! ");
			
			link("<small>Yes</small> ",186); 
			link("Yes! ",186); 
			link("Ye- AH-h!... -s.",185); 
			break;

		
		case 185:
			txt("I came and totally melted in his hands. ");
		case 186:
			mile.slut++;
			mile.sub++;
			txt("He was getting bolder and bolder and his hands were everywhere and they felt great in perfect synergy with the vibrations in my crotch. ");
			txt("He pulled up my "+dh.decapitalise(PC.upper.name)+" and for while groped my naked breasts. His left hand touched my thigh and then disappeared under my skirt. ");
			txt("With dread, I realized he will soon find out the truth about my underwear. ");
			link("Distract him with handjob. ",187); 
			link("I don't care. ",188); 
			break;
			
		case 187:
			mile.teacher=1;
			txt("I dropped to my knees and unzipped his pants. ");
			mol("What are you... oh! ");
			if(mile.slut>=2){
				kat(""+NAME.mol+"! I had no idea you are so well endowed!");
				txt("I was not entirely true but I assumed he would enjoy hearing that. ");
			};
			txt("He was already rock hard. I firmly grabbed his member with my slender fingers. It took only a few strokes until he came rather an impressive amount of cum all over my shirt, desk, notes and opened textbook. ");
			if(mile.slut>5){
				txt("I wiped as much as I could and then I licked it from my fingers without breaking eye contact with "+NAME.mol+". ")
			};
			mol("You were amazing Katarína! I don't wonder why a girl with such astonishing skills doesn't care about school. Still... even with such skills, you can earn like three times more in Austria or Germany so you should not underestimate my classes. But I think I will change the last F into A. You deserve it. ");
			link("So fucking grateful. ",190); 
			break;
			
		case 188:
			mile.teacher=2;
			txt("He grabbed my pussy and he could clearly feel my very special underwear. ");
			mol("What the... ?");
			txt("He commanded me to strip my skirt, lifted me up to my desk and started examining my panties. I was red with shame but he was enthusiastic about his discovery. ");
			mol("Is it what I think it is?!?... You little naughty minx!... So during the whole oral exam...");
			txt("I whimpered something, the current level of vibration made me incapable of coherent speech and it was just rhetorical question anyway. ");
			mol("Oh my... you deserve to be punished... or rewarded...");
			txt("Then he kissed my belly and pulled my panties down. ");
			txt("I was not the first time I was eaten but my previous boyfriends mostly saw it as a chore they need to do before I let them do other more lewd things with my body. But "+NAME.mol+" seemed very keen and all the previous stimulation made me extremely sensitive. ");
			txt("I came and I nearly fell down but the "+NAME.mol+" caught me in the last moment. ");
			kat("Wow.");
			txt("I was speechless."); 
			mol("No need to thank me, I'm always ready to help my students. Especially sex-crazed little nymphos like you. Don't be shy to as for my help at any time. And I think It will be fair to change your F to A, now I understand you were distracted. ");
			link("So fucking grateful. ",190); 
			break;
			
		case 190:
			txt("I staggered out of the class (only now I realized the door was not locked any anybody could just walk in). ");
			txt("I went to restrooms, washed with cold water and fixed my appearance as much as was possible. ");	
			txt("My way home was relatively uneventful if you don't count occasional mild buzzing and weird looks other passengers gave me. ");	
					
			txt("Everything changed right before my block. I strongly suspected "+NAME.qaa+" saw me coming from window and turned the intensity high just to mess with me for the last time.  "); 
			txt("Oh no! I hoped for some private time in the lift, but there were old Mrs. Horváth and her stupid little dog. She tried to make small talk and was very happy because she interpreted my suppressed moans as an enthusiastic agreement with her tirades.  ");
		//	txt("When I vainly tried to unlock my doors, I dropped my keys. ");
			
			txt("Finally, I was back in my room. I pulled down and kicked away the cursed panties, fell down on my bed and started furiously masturbating. I did not even bother looking for any of my toys. ");
			txt("When the post-orgasmic bliss faded way I started crying.");
			txt("Not like I was feeling totally humiliated, desperate and helpless. It was caused just by wild hormones and I was completely fine in like no time and ready to face those dicks once again. ");
			link("Evening.",191);
			break;
		
		
		case 191:
			set.meta();
			qaa("So how did you enjoy your task?");
			qbb("She is a little nympho, so I guess a lot.  ");
			qcc("Well, the numbers don't lie - six orgasms in one day is a very nice number. ");
			qaa("Seems like a pretty fun day. ");
			kat("How the hell...");
			qcc("In your Cloud we kinda found access data of your medical bioimplant. ");
			kat("But my bioimplant doesn't record my orgasms!?!?!?");
			qcc("Of course not but it tracks your pulse and other biodata and if you know what are you looking for it is quite obvious. ");
			kat("Right when I thought you can't be any creepier!!!");
			qaa("We are really sorry about the F. If you need tutoring I can help you. ");
			kat("I think that won't be necessary. ")
			qbb("But seriously "+NAME.kat+", you should set your priorities straight and spend more time studying than playing video games. ")
			link("That's just mean! ",200);
			break;

		case 200:
			
			qaa("For your next task, we decided... ");
			qcc("More like you decided. ");
			qaa("You all agreed!?!");
			qbb("I still think my idea was better. ");
			qaa("We can't give her the same task twice! ");
			qbb("It wouldn't be the same task, she would be forbidden to masturbate and manipulated into some kind of public event. ");
			qaa("What kind of public event? ");
			qbb("Dunno, we could brainstorm something out. Like during some public speech. Or in a church. ");
			qaa("You can't do that in church!")
			qcc("And you have to admit it's still a bit derivative. ");
			qbb("The makeup sounds too vanilla. ");
			qaa("It was your idea to start with easy tasks she would do without much arguing to get her used to follow our directions. ");
			qcc("And it isn't just makeup, it's a slutty makeup! ");
			kat("Guys, I'm right here!")
			qaa("And don't forget about the weekend plans. ");
			kat("What weekend plans?!?")
			qaa("The plans. For the weekend. ");
			qbb("You don't have to bother your pretty little head with them for now. ") 
			link("Oh no.",201);
 
			break;	
			
		case 201:
			qcc("Why don't you always wear some nicer makeup to the school? ");
		 
			kat("Considering how I look without heavy makeup and who are my classmates, it is a waste of time. "); 
			qaa("Well, from now on you'll take the time. ");
			kat("So you want me to go to school with heavy makeup? ");
			qbb("With extremely slutty makeup. ");
//TODO NICE!!!
			qaa("It doesn't have to be extremely slutty, a bit slutty would be enough. ");
			qcc("But you of course could go with extremely slutty if you want to. ");
			if(mile.slut<3)kat("I think I'll prefer something less slutty. ");
			link("Friday.",210);	
			break;
			
		case 210:
			/*set.irl();
			set.chapter("Makeup");
			set.newday();
			*/
			
			//morgen_nightie_on();
			 
			
			txt("It was finally Friday, the last day of the longest and worst week of my life. I have to survive one more day, then during the weekend I will have enough time to finish the game and then I will be finally free.  ");
			
			morgen.one("Makeup");
			//link("Wardrobe. ",null, () => wardrobeWrapper("first",211) );
			//link("Random Outfit ",null, () => wardrobeAuto("first",211) );

//TODO			
//link("##SASDFASDF. ",211);
			//link("Go to school. ",172); 
			break;
			
		case 211:
			mile.makeup = true;
			txt("Oh, yeah, I nearly forgot, the <i>slutty</i> makeup. ");
			link("Makeup. ",212, () => EDIT.makeup() );
			//link("Wardrobe. ",null, () => wardrobeWrapper("first",211) );
			//link("Random Outfit ",null, () => wardrobeAuto("first",211) );
			//link("Go to school. ",172); 
			break;
		
		case 212:
			txt("I anxiously checked my reflection in the mirror. Not bad, I had to admit. ");
			 morgen.two(1702);
			 /*
			link("Makeup. ",212, () => EDIT.makeup() );
			link("Wardrobe. ",null, () => wardrobeWrapper("first",212) );
			link("Random Outfit ",null, () => wardrobeAuto("first",212) );
			link("Go to school. ",1702); 
			*/
			break;	
			
			/*
		case 220:
			txt("I anxiously checked my reflection in the mirror. Not bad, I had to admit.   ");
			
			
			link("Go to school. ",1702); 
			break;	
		*/	
			
		case 1702:
			set.meta();
			txt("The nerds were getting fond of playing humiliating games with me. They offered me a bet - if I win their brand new challenge, I will have a free weekend without any new task. However, if I lose, I will be theirs for the whole Saturday. ");
			txt("It was probably an ill-conceived gamble but the free weekend was an offer I could not refuse. ");
			kat("What kind of challenge? ");
			qaa("You can pick what kind of challenge you want!");
			kat("Okay...");
			qcc("It could an intelligence challenge (trivia quiz)...")
			kat("No! I absolutely despise those. ");
			qcc("... or a physical challenge (fight)...");
			kat("I'll take it. ");
			qcc("... or it could be...");
			kat("I want the physical challenge (fight). ");
			qcc("... but I have six more options... ");
			qbb("She picked the physical challenge (fight). ");
			qcc("So I prepared the list for nothing?!?!?");
			link("Yes.",1703);
			break;
		
		case 1703:
			kat("Which one of you should I beat? ");
			txt("I was pretty sure I was actually stronger and faster than any of them. Unlike theirs, my physical exercises went beyond training my right hand. When I was younger I trained gymnastic and I still went to the gym every week and jogged regularly. Or at least I used to before their stupid game swallowed all my free time. ");
			txt("I maybe even get a chance to do my opponent something especially painful. ");
			qaa("You will fight against our champion. ");
			kat("Hey! That's unfair! Why I can't have a champion too? ");
			qcc("You absolutely can. Those are rules. ");
			qbb("Who do you pick?");
			kat("...");
			qbb("As I thought. ");
			kat("I won't fight some virtual beast. ");
			qbb("Hmmm, a best? Why we did not think about that?");
			qaa("Don't worry. I promise your opponent will be exactly as strong as you. ");
			if(mile.deleted==1){
				kat("Okay. ");
				link("Fight.",1705);
			}else{
				kat("Okay... ...Oh no! You fucking twisted assholes! ");
				link("Fight.",1704);
			};			
		
			break;	
		

		case 1704:
			ayy("Hi, me! Nice to see me again! ");
			kat("No, no, no, no. I'll not fight myself! ");
			qcc("There is no way to make the match more fair. ");
			kat("Only you three can come up with something so fucked up. ");
			qbb("Thank you. ");
			kat("That was not a compliment! I'm disgusted by you. I mean, even more than usually. ");
			qaa("Free weekend!");
			link("Uhg, Okay. ",1710);
			break;				
			
		case 1705:
			ayy("Hello. ");
			txt("Said my AI copy in a monotonous voice. ")
			kat("What the... ");
			qaa("You have to excuse her, she is less sophisticated backup version 1.0. ");
			qbb("She is a bit retarded. ");
			qaa("We had no other choice after you callously murdered the poor latest version. ");
			qcc("It was an act of wanton savage neoludditism. ");
			qbb("A manifestation of the worst despicable cyberxenophobia. ");
			if(mile.forkill==1){
				kat("It was not even a real person! ");
			}else{
				kat("She was not even a real person! ");
			};
			qbb("Hitler said exactly the same thing. ");
			if(mile.sub>2){
				kat("But... I'm sorry for deleting her but this not a fair comparison! ");
			}else{
				kat("Are you crazy?!? And no, I will not fight myself! ");
			};
			qcc("There is no way to make the match more fair. ");
			kat("I hate you. ")
			qaa("Free weekend!");
			link("Uhg, Okay. ",1710);
			break;
			
		case 1710:	
			WARDROBE.wearOutfit("Wrestling");
			txt("I expected a ring but what materialized in front of us was a shallow pond filled with viscous pink liquid. ");
			kat("What is that?");
			qaa("Synthetic mud. ");
			qcc("Well, technically it is not a mud at all. And it has strawberry scent and flavour. "); 
			ayy("Really? That is so smart!");
			kat("Uhhg. ");
			txt("The AI took down off her boots and pulled down her tartan skirt. A similar outfit instantly rendered on me, only mine was blue while hers was red. ");
			txt("Then we both entered the pond. The mud was about ankle deep and quite slippery. ");
			if(mile.deleted==1){
				txt("The face of my clone remained motionless, I was hard to guess what is she thinking or if she is thinking at all. ");
			}else{
				txt("My clone smirked. That bitch was enjoying this. ");
			};
			link("Be Aggressive. ",1711);
			link("Be Careful. ",1712);
			break;	
			
		case 1711:		
			txt("I decided to end this travesty as soon as possible and attack. ");
			txt("I charged the AI, hit her with my shoulder first and knocked her over to mud. She was surprised and I was nearly able to win a quick victory but on the ground, she slipped out. ");
			txt("Nerds loudly cheered. ");
			
			
			link("Fight dirty. ",1713);
			link("Fight temperately. ",1714);
			break;
		
		case 1712:
			txt("I was unsure what to do, I really did not want to end in the mud. However, the AI saw my hesitation and charged. ");
			txt("I was surprised and she was able to knock me over to the mud. I gasped - the mud was cold - but despite being in a grim situation I was eventually able to escape her grip. ");
			txt("Nerds loudly cheered. ");
			//txt("The AI followed their advice, seized the cleavage of my top and ripped it open. ")
			//get_dressed("wrestlingUnd");
			
			link("Fight dirty. ",1713);
			link("Fight temperately. ",1714);
			break;
		
		case 1713:
			txt("Our bodies were slippery with the strawberry mud so I decided to grab her by her hair. ");
			txt("However the AI retaliated in the same way, painfully yanked my head and dived my face in the mud. ");
			txt("Luckily like me, she was out of breath and was not able to finish me. ");
			txt("Both exhausted we crawled to the opposite ends of the pond, heavily breathing, coughing up the (actually quite tasty) mud and wiping our faces. ");
			txt("I had the pink mud literally everywhere. ");
			link("The second round. ",1715);
			break;
			
		case 1714:	
			txt("I was aware the game was rigged against me and I did not want to humiliate either of me more than was necessary. "); 
			txt("However, the AI did not share my restraints and followed one of many advice the nerds were shouting at us. She seized the cleavage of my top and ripped it open. ")
			WARDROBE.showLess(0,-1);
			txt("She was awarded by loud applause. ");
			txt("Both exhausted we crawled to the opposite ends of the pond, heavily breathing, coughing up the (actually quite tasty) mud and wiping our faces. ");
			txt("I had the pink mud literally everywhere. ");
			link("The second round. ",1715);
			break;
			
		case 1715:
			txt("Finally we were ready for the second round. We stood up and cautiously advanced against each other.  ");
			txt("Unfortunately, I slipped and fell down right on my butt. Nerds and the AI started laughing. ");
			txt("I threw a badly aimed clod of mud towards nerds, grabbed AI's shin and dragged her down. ");
			txt("My fury gave me strength and I overpowered her. The victory was mine. ");
			
			kat("That's it. Had you enough fun, jerks?!!!");
			qcc("You were supposed to say: are you not entertained? ");
			kat("Fuck you. ");
			
			qaa("Congratulations. A great fight. ");
			qbb("You could do this for I living. I'm pretty sure the record of your match would be very popular. ");
			
			kat("If you <i>ever</i> share it anywhere I will find you and break both your arms. ");
			txt("I was full of adrenaline and I meant every word. ")
			
			//note("#NOTE: In this version you cannot lose.  #");
			//link("Weekend. ",1801);
			link("Weekend",null, () => set.chapter("Second Weekend",100,"weekend") );
			
	}
}

//SECOND WEEK
story.second = function(input){
	switch(input){
		case 101:
			set.chapter("Stockings");
			set.meta();
			if(mile.boobs>1){
				txt(""+NAME.qaa+" immediately noticed my expanded bosom. It really showed where he focused his attention. ")
				qaa("If you think you can sway us with your new splendid boobs you are wrong. I mean, we appreciate the effort but we have to give you a new task anyway. ");
				txt(""+NAME.qcc+" just smirked. ")
			};
			mile.stockings = 2;
			if(!mile.burned){
				qaa("Our next task is another change to your wardrobe. ");
				qcc("Because we know how you love those. ");
				kat("Yeah, I enjoy them so much. ");
				if(mile.ruler){
					nerd_based(
						"Just please follow our next task exactly. We really don't want to be forced to punish you again, "+NAME.kat+". "
						,"Just follow our instructions carefully. We don't want to punish you again. "
						,"And you'll be punished if you fail us. " 
					);
					if(mile.broken){
						kat("Did you buy some sturdier ruler? ")
						txt("I added playfully which did not make them very happy. ");
					}else{
						kat("Hmmm. ")
						txt("My butt started to hurt as soon as they reminded me the humiliating spanking. ");
					};
				};
				qaa("This time it is about your legwear. ");
				kat("So no funny hats? ");
				qcc("We were not able to decide so we'll leave it at your discretion. ");
				kat("Okay? ");
				qcc("You can either wear some sexy stockings with a garter belt. ");
				kat("Of course. ");
				qbb("Or some extremely whorish fishnet stockings or pantyhose. ");
				kat("No surprise. ");
				qaa("Or some cute at least knee-high socks. ");
				kat("That's new. Any fetish I don't know about? ");
				qaa("No!");
				link("Okay",102)
			}else{
				qaa("Our next task another change to your wardrobe. ");
				qcc("Because we know how you love those. ");
				kat("Yeah, I enjoy them so much. ");
				if(mile.ruler){
					nerd_based(
						"And if you fail us, we'll be not afraid to punish you, "+NAME.kat+". As you already know. "
						,"Just follow our instructions carefully. We don't want to punish you again. "
						,"And you'll be punished if you fail us. " 
					);
					if(mile.broken){
						kat("Did you finally get a sturdier ruler? ")
						txt("I added playfully which did not make them very happy. ");
					}else{
						kat("Hmmm. ")
						txt("My butt started to hurt as soon as they reminded me the humiliating spanking. ");
					};
				};
				qaa("This time it is about your legwear. ");
				kat("So no funny hats? ");
				qcc("We want you to get some and wear fishnet stockings. ");
				kat("I'll look like a whore! ");
				qaa("That is the point. ");
				qbb("We want you to look like a little whore! ");
				if(mile.sub>=0){
					link("Fuck me. ",102)
				}else{
					link("Fuck you! ",102)
				}	
			}
			break;
		case 102:
			txt("Saturday, night.")
			link("I-Shop.",109);
			link("Sleep.",110);
			break;
		case 109:
			//MERCHANT
			break;
		case 110:
			/*
			set.newday();
			set.chapter("Stockings");
			set.irl();
			WARDROBE.changeOutfit("none",PC,inventory); //USUALLY IN EFFECT 
			*/
//txt(active_scene)
			txt("I punched the alarm clock and just lied in my bed, not able to gather the energy to wake up. It was Monday. The last week was the worst week of my life and there were plenty of signs this one may be even worse. I was constantly two days from the finishing, every day pushing my estimation. But the only thing I could do was to rise and shine. ");
			/*
			link("Makeup. ",110, () => EDIT.makeup() );
			link("Wardrobe. ",null, () => wardrobeWrapper("second",111) );
			link("Random Outfit ",null, () => wardrobeAuto("second",111) );
			*/
			morgen.one("Stockings");
			break;
		case 111:
//alert("two")
			txt("I looked in the mirror. Yeah, that will do. ");
			morgen.two(120);
			/*link("Makeup. ",111, () => EDIT.makeup() );
			link("Wardrobe. ",null, () => wardrobeWrapper("second",111) );
			link("Random Outfit ",null, () => wardrobeAuto("second",111) );
			link("Go to school. ",120); 
			*/
			break;
			
		case 120:
			txt("And right the first class was the German language! ");
			if(mile.teacher==-1){
				txt("I was quite amusing how careful "+NAME.mol+" was - he was anxious to even look at me. ");
			
				//TODO - selfhatting I deserved that?
				if(mile.sub>1){
					txt("I felt a little bad for him. On the other hand, it was all his fault. ")
				}else{
					txt("It felt awesome. The old pervert totally deserved that.    ")
				};
				
			}else if(mile.teacher>0){
				if(mile.teacher==1){
					txt("I opened my book. On the page were stains of cum I had not bee able to clean completely.  ");
				}else if(mile.teacher==2){
					txt("I put my books on the desk and then remembered that only a few days ago my teacher had given me cunnilingus right there.  ");
				};
			
				if(mile.slut>4){
					txt(""+NAME.mol+" looked at me and smiled. I quickly averted my eyes and blushed with shame. Still, the memory was making me a bit horny. What the hell is wrong with me?  ")
				}else{
					txt(""+NAME.mol+" looked at me and smiled. I quickly averted my eyes and blushed with shame. I felt sick.    ")
				};
		//TODO - WINK?
			};
			link("Oh no.",121);
			break;

			
		case 121:
			txt("During the main break, I was encircled by the group of nerds. ");
			
			{
				let aaa = false;
				let bbb = false;
				let ccc = false;
				
				if(PC.socks){
					aaa = (PC.socks.blueprint ==  "HighSocks" || PC.socks.blueprint ==  "BrightHighSocks") ? true : false;
					bbb = (PC.socks.blueprint ==  "StockingsFishnet" || PC.socks.blueprint ==  "GarterStockingsFishnet") ? true : false;
					ccc = (PC.socks.blueprint ==  "GarterStockingsFishnet" || PC.socks.blueprint ==  "GarterStockingsPoly" || PC.socks.blueprint ==  "GarterStockings") ? true : false;
				};
				
				let skirt = (PC.lower && PC.lower.innerLoose>=1) ? true : false;
				let bra = (!PC.bra) ? true : false;
				let top = (   PC.upper && ( PC.upper.dad == "wTubeTop" || PC.upper.dad == "wHalterTop" || (PC.upper.dad == "wTee" && PC.upper.armCoverage<0.4 && PC.upper.waistCoverage>0.6)  )   ) ? true : false;

				kat("Hello!");
				if(!skirt){
					if(mile.burned){
						qaa("Hello, "+NAME.kat+". Why the hell you aren't wearing a skirt? Are you trying to provoke us? ");
					}else{
						qaa("Hello, "+NAME.kat+". Why are you not wearing a skirt? Did you forget? ");
					};
					qbb("Drop them down!")
					kat("I just...");
				}else{
					qaa("Hello, "+NAME.kat+". ");
				};
				if(!bra){
					qcc("You are wearing a bra! You are not allowed to do that! ");
					kat("Yeah about that...");
				};
				
				txt("I showed them what I picked. ");
				if(bbb&&ccc&&!mile.burned){
					mile.stockings = 3;
					mile.qbb++;
					mile.qcc++;
					
					qbb("I see you tried to pander as many people as possible. ");
					qcc("Good move, nice combo. You look really sexy. ");
					qaa("They look nice. ");
					qbb("Really smart. You look like a total ditz but sometimes you have smart ideas. ");
					kat("Thanks. It is always nice to hear I'm less dumb then I look like. ")
				}else if(bbb){
					mile.stockings = 2;
					if(mile.burned){
						qaa("I see you got those fishnet stockings. They suit you perfectly. ");
						qcc("They are really sexy. ");
						qbb("Have you thought about becoming a hooker? I think you'd be really good at that! ");
					}else{
						mile.qbb++;
						qbb("Hah, I see you picked the fishnet stockings. They are perfect for a girl like you. ");
						kat("Girl like me? ");
						qaa("Don't care about that. They look great. ");
						qcc("You look really sexy. ")
						qbb("Have you though about becoming a hooker? I think you'd be really good at that! ");
					};
					
					
					
					if(mile.burned || mile.slut>6){
						qaa("Come on, you know our "+NAME.kat+", she gladly gives anybody for free. ");
						kat("What is that supposed to mean?! ");
						qcc("That you're sleeping around a lot. ");
						if(mile.slut>7) kat("And? There is nothing wrong with that! But I'm not a whore! ")
					}else if(mile.slut<4){
						kat("Absolutely not! ");
						txt("I was outraged he even suggested that! I did not want to dress like this! I did not want to look like a cheap whore! ");
					}else{
						kat("No!")
					};
				}else if(aaa){
					mile.stockings = 1;
					mile.qaa++;
					qaa("I see you picked long socks. Good choice, they are really cute on you. ");
					qcc("Yeah, they do. ");
					qbb("Hmmm.");
					qaa("You are doing great! ");
					qbb("Don't overpraise her! ");
					qaa("She deserves to be commended for a well accomplished task. ");
					qbb("Like wearing socks is some kind of high achievement! ")
				}else if(ccc){
					mile.stockings = 3;
					mile.qcc++;
					qcc("Nice! You chose stockings with garter belt! They really suit you. ")
					qaa("They look really elegant. ");
					qbb("And slutty. Especially slutty. ");
				}
				
				if( !(aaa||bbb||ccc) || (!skirt || !bra)  ){
					if( !(aaa||bbb||ccc) ){
						qaa("It seems like you failed our task. ");
						if( !skirt || !bra )qcc("And our previous one. ");
						qbb("You need to be punished. ");
					}else{
						qaa("You fulfilled your task for today, however... ");
						qcc("You willfully ignored our previous ones... ")
						qbb("You need to be punished. ");
					};
//TODO	- DISCONECTED FORM PREVIOUS WARNING
//mile.warned = 0;					
					if( !mile.ruler && (mile.warned > 0 || mile.qaa < 1) ){
						link("What!?!",null, () => set.skip("punishment",100,"second",122)  );
						
					}else if(mile.qaa<1 && mile.ruler){
						mile.nudes = 1;
						kat("Punished? How? ");
						qaa("You'll see. ");
						txt("Said "+NAME.qaa+" ominously and sent me away. He probably just tried to scare me. Probably. ");
						link("Okay...",122);
						
					}else{
						mile.warned++;
						qaa("We'll give you the last chance but you have to follow all our orders, as you promised. ");
						qbb("You are too soft on her!");
						qaa("Please, don't force us to do something you'd regret! ");
						qcc("Did you forget about everything we have on you? ");
						link("Okay. ",122);
						link("Please, I'm sorry! I swear it won't happen again! Please, don't do anything I could regret! (Meekly & desperately) ",122, () => mile.sub++  );
						link("Whatever, (Bratty). ",122, ()=> {mile.sub--; mile.warned++} );
						
					
					}
				}else{
					link("The rest of the day.",122);
				}
					
				
				
				
				
			};
			break;	
		
		case 122:
			txt("At least the rest of the day was not very eventful. At the lunch, "+NAME.eva+" and "+NAME.sas+" informed me about what they did during the weekend. They did not comment about my outfit but I knew what they were thinking. ");
			txt("When I returned home I played the game. I finished the part of the main quest which was set in Westgard and I could feel the end is close. Everything went better then I expected. ");
			//TODO WESTGARD
			link("The next task.",130);
			break;
			
		case 130:
			qaa("Hello, "+NAME.kat+". How are you? ");
			kat("Absolutely terribly. What is your next task? ");
			qcc("We wondered what piece of your wardrobe needs to fixed next. ");
			qaa("Tell us, how high are your highest heels? ");
			kat("Highest heels? ");
			txt("Those would be my shoes with ridiculous 13-centimeter stiletto heels. They were an impulse purchase, I bought them because they looked cool and sexy but they were not very comfortable and I yet did not find any opportunity where to wear them without looking silly. ");
			link("Lie.",131);
			link("Tell the truth.",132);
			break;
		
		case 131: 
			if(mile.burned){
				if(mile.sub>2)txt(""+NAME.qaa+" harshly grabbed me by my shoulder. ");
				qaa("Don't dare to lie to us ever again, slut! ");
			}else{
				if(mile.sub>2)txt(""+NAME.qbb+" harshly grabbed me by my shoulder. ");
				qbb("Don't dare to lie to us ever again! ");
			};
			qcc("We know. ");
			kat("But how? Did you break into my house? ");
			qbb("Something even better. ");
			qaa("On your Cloud we found out some of your receipts from online purchases. ");
			qcc("Some of them were interesting. ");
			qbb("Especially that pink dildo. ")
			kat("But... how... you...");
			txt("I was speechless, appalled by this flagrant violation of my privacy and red with shame. ");
			qaa("The important thing is that tomorrow you'll wear those shoes. ");
			link("But...",135);
			break;
			
		case 132: 	
			qaa("Smart decision to not lie to us. ");
			qcc("Because we know. ");
			kat("But how? Did you break into my house? ");
			qbb("Something even better. ");
			qaa("On your Cloud we found out some of your receipts from online purchases. ");
			qcc("Some of them were interesting. ");
			qbb("Especially that pink dildo. ")
			kat("But... how... you...");
			txt("I was speechless, appalled by this flagrant violation of my privacy and red with shame. ");
			qaa("The important thing is that tomorrow you'll wear those shoes. ");
			link("But...",135);
			break;
			
		
		case 135:
			//note("#NOTE: Shoes are still not working properly :(");
			morgen.one("Heels");
			/*
			set.newday();
			set.chapter("Stockings");
			set.irl();
			WARDROBE.changeOutfit("none",PC,inventory); //USUALLY IN EFFECT 
			note("#NOTE: Shoes are still not finished :(");
			link("Makeup. ",135, () => EDIT.makeup() );
			link("Wardrobe. ",null, () => wardrobeWrapper("second",136) );
			link("Random Outfit ",null, () => wardrobeAuto("second",136) );
			*/
			break;
		case 136:
			morgen.two(138);
			/*
			link("Makeup. ",136, () => EDIT.makeup() );
			link("Wardrobe. ",null, () => wardrobeWrapper("second",136) );
			link("Random Outfit ",null, () => wardrobeAuto("second",136) );
			link("Go to school. ",138); 
			*/
			
			break;
			
		case 138:
			{
				let aaa = (PC.socks.blueprint ==  "HighSocks" || PC.socks.blueprint ==  "BrightHighSocks") ? true : false;
				let bbb = (PC.socks.blueprint ==  "StockingsFishnet" || PC.socks.blueprint ==  "GarterStockingsFishnet") ? true : false;
				let ccc = (PC.socks.blueprint ==  "GarterStockingsFishnet" || PC.socks.blueprint ==  "GarterStockingsPoly" || PC.socks.blueprint ==  "GarterStockings") ? true : false;
				
				let skirt = (PC.lower && PC.lower.innerLoose>=1) ? true : false;
				let bra = (!PC.bra) ? true : false;
				//let top = (   PC.upper && ( PC.upper.dad == "wTubeTop" || PC.upper.dad == "wHalterTop" || (PC.upper.dad == "wTee" && PC.upper.armCoverage<0.4 && PC.upper.waistCoverage>0.6)  )   ) ? true : false;
			
				if(!skirt || !bra || !(aaa||bbb||ccc) ){
					if(mile.warned==1){
						mile.nudes = true;
						mile.warned = 0;
					}else{
						mile.warned = 1;
						mile.nudes = false;
					}
					
				}
			};

			txt("So the whole Tuesday I was forced to stumble in those ridiculous heels while those three nerds chuckled whenever the saw me. I was not a very high-heel-loving person and my feet soon hurt. ");
			txt("Why I even bought those cursed shoes? They were obviously too flashy for the school and "+NAME.eva+"'s contemptuous look was ten times worse than all my aching toes. ");
			txt("And why the hell our school had to have so many staircases? ");
			link("The Game. ",140)
			break;
			
		case 140:		
				set.chapter("Seeking for advice 2");
				counter.npca=[true,true,true,true];
		case 141:
				txt("I felt like I am really getting good at that game and I hoped I will be able to finish it this week. ");
				txt("And then I got stuck again.");
				txt("I got to the part when I needed to gain the support of the Margrave of the Neberian Frontier. He was such a cruel, sleazy, feuding bastard he was despised not only by common folk but even by the rest of the Imperial princes but I needed him because despite everything he was still a brilliant and daring commander and his well-trained experienced retinue could be the decisive force of the war. ");
				txt("I tried everything. Appeals to his honor, promises, threats, cold logic and emotional speeches, but he was adamant. He does not care about the suffering in other kingdoms. I wasted the whole day, reloading after every failed attempt and eventually realized I need some help.");
				{
					let temp = "";
					switch(mile.advice1){
						case 1: temp+=" just with a simple kiss. "; break;
						case 2: temp+=" just with a collar. "; break;
						case 3: temp+=" just another different hair color. "; break;
						default: temp+=" just with some minor favour. "; break;
					}
				
					txt("Unfortunately, those damned nerds were getting more daring every day I doubt the would be satisfied "+temp);
				}
				
				if(!mile.burned){
					if(counter.npca[1])link(""+NAME.qaa+" (the one with a crush).",170);
					if(!counter.npca[1])link(""+NAME.qaa+" (the one with a crush).",171);
				}else{
					if(counter.npca[1])link(""+NAME.qaa+" (the one with a crush).",180);
					if(!counter.npca[1])link(""+NAME.qaa+" (the one with a crush).",181);
				};
				
				if(counter.npca[2])link(""+NAME.qbb+" (the creepy one).",160);
				if(!counter.npca[2])link(""+NAME.qbb+" (the creepy one).",161);
				
				if(counter.npca[3])link(""+NAME.qcc+" (the fat one).",150);;
				if(!counter.npca[3])link(""+NAME.qcc+" (the fat one).",151);
			
			
			break;
			
			
		case 150:
			mile.boobjob = 0;
			mile.tf = 0;
			set.meta();
			counter.npca[3] = false;
			if(mile.advice1==3){
				kat("Hi! I might need a very little help. ");
				qcc("You won't trick me into helping you again!");
			}else{
				kat("Hello. ");
				if(mile.weekend_cc==1){
					qcc("Hi, Katarína? Are you here to socialize again? ");
					kat("Yeah... just talk about stuff, like...  <i>Neverion II: The Rise of the Chaos Wizard</i>? What a fun game!  ");
					qcc("One of the best. "); 
					kat("And quests could be solved in so many ways! Like the one with the Margrave. What do <i>you</i> think is the best way to convince him?.");
					qcc("You won't trick me into helping you to beat the game! ");
				}else{
					qcc("Hi, Katarína? Why are you here? ");
					kat("I want to learn more about you so I decided to visit you and talk with you about stuff, like...  <i>Neverion II: The Rise of the Chaos Wizard</i>? What a fun game! ");
					qcc("One of the best. "); 
					kat("And quests could be solved in so many ways! Like the one with the Margrave. What do <i>you</i> think is the best way to convince him?.");
					qcc("You won't trick me into helping you to beat the game! ");
				};
			};
			
			if(mile.boobs>1){
				kat("What?!? <i>You</i> complain about tricking people? ");
				txt("I did not have to point at my bosom, it was the only thing he stared at since the beginning of our conversation anyway. ");
			};
						
			if(mile.advice1==3){
				kat("Come on!")
				qcc("I already helped you more than enough! ");
				kat("Okay, I completely understand. You are a man of strong principles who would never betray his friends. I mean, twice. ")
			}else{
				kat("Okay, I completely understand. You are a man of strong principles who would never betray his friends.  ")
			};
			qcc("Exactly. ");
			
			link("Handjob. ",152);		
			link("Anything but nothing sexual. ",153);		
			break;
		
		
		
		
		case 151:
			set.meta();
			if(mile.sub<1){
				qcc("You are back?! That's great. Sorry if I was too forward. But still, I think it's a good deal for both! ");
				
			}else{
				qcc("You changed your mind? I really think it's a good deal for both! ");
			};
			
			
			if(mile.boobjob){
				if(mile.boobs<2){  //boobjob with be and without - be hides links 
					link("Boobjob. ",158);	
				}else{ 
					link("Boobjob. ",159);	
				};
			};
			if(mile.tg)link("Panties. ",154);
			
			link("Leave. ",141);
			break;
		
		case 152:
			mile.boobjob = 1;
			kat("You would refuse to help me even if I offer you that I'll dye my hairs green or give you a handjob or anything else. ");
			qcc("Yes. ...hand what? ");
			kat("That's when I take my hand and your penis and... ");
			qcc("I mean... you would... ");
			
			if(mile.slut>5){
				kat("Yeah, absolutely. Why not? It's just a handjob. ");
				txt("I had no problem with that. ");
			}else if(mile.slut>2){
				kat("Yeah. ");
			}else{
				kat("Yeah."); 
				txt("I hesitantly agreed. I really did not want to touch his dick but I was willing to make some sacrifices. ");
			};
			
			txt("He was a bit shocked but then he quickly decided to seize his chance. ")
			qcc("I can tell you how to convince the Margrave but I'll want something more than just a handjob. I want you to use your tits. ")
			
			if(mile.boobs<2){  //boobjob with be and without - be hides links 
				link("...Okay. ",158);		
			}else{ 
				link("...Okay. ",159);		
			};
			link("No way! Wouldn't be possible to do anything non-sexual for you?  ",153);		
			link("Back out. ",141);
			break;
			
		case 153:
			mile.tg = 1;
			kat("Don't prolong this and just tell me what do you want. Ask for anything! ");
			txt("I quickly realized my offer was maybe too generous. ")
			kat("But nothing sexual! ");
			qcc("You mean absolutely anything? ");
			txt("I hesitated for a moment. ")
			kat("...yes? ...but nothing sexual! ")
			qcc("I mean... well... ");
			kat("?");
			qcc("..ehm... ")
			kat("Just say it! You have nothing to afraid! I just probably tell you you're disgusting and I'd never ever do that! ");
			qcc("I want your panties. ");
			kat("WHAT?!?!");
			qcc("It's not for anything weird, just a fetish I have! ");
			kat("But... oh fuck!... I guess it might be possible but... ");
			qcc("Awesome! ");
			
			link("Okay. ",154);
			link("Try to offer to do something else. ",152);
			link("Back out. ",141);
			break;
			
		case 154: 	
			mile.qcc++;
			mile.advice2 = 2;
			mile.tg = 2;
			kat("Okay. I promise I'll bring you one of my panties tomorrow to school. ");
			qcc("Really!! Great!! What did you want to know? About the Margrave? I'll tell you everything! ");
			if(mile.immersion>1){
				kat("Tell me everything! What happened to his wife? And how did he won the infamous battle on the Stroma River? Mouser refused to tell me any details! ")
			}else if(mile.immersion<0){
				kat("Well, I don't have to know everything, just how to convince him! ");
				txt("I already knew how easily he could get lost in some unimportant details. ");
			};
			link("Next. ",199);
			break;
			
			
		case 158:
			mile.slut++;
			mile.boobjob = 2;
			mile.qcc++;
			mile.advice2 = 2;
			WARDROBE.showLess(0,-1);	
			/* I poured oil on my bare breasts.*/
			txt("This went really bad, I ruminated when I poured oil on my bare breasts. I originally imagined he will probably quickly ejaculate as soon as I grab his dick and the whole affair will be swiftly done. Well, I was wrong. ");
			if(mile.boobs<2){
				qcc("There is one more thing we need to "+choice("fix","small")+".");
				txt("My breasts started expanding. Great.");
			};
			kat("Take yout pants off and sit back. ");
			txt("I moved between his legs and took his quite sizeable member. ");
			kat("Really? ");
			qcc("That's the actual size!");
			kat("It surely is. ");
			txt("I encased his shaft between the soft flesh of my tits and started moving them up and down. ");
			
			qcc("Ye<small>ah<small>hhh</small></small>");
			if(mile.slut>3){
				txt(""+NAME.qcc+" panted as I rose my tempo and pumped my tits harder. Having such huge boobs was quite fun. I bowed down and played with the tip of his dick with my tongue. ");
				txt("He suddenly cummed all over my face. "); 
				qcc("Sorry about that. ");
				txt("He apologized while I was cleaning myself. ")
				kat("Nevermind. So.. the Margrave? ");
			}else{
				txt("He panted as I rose my tempo and pumped my tits harder. ");
				kat("Warn me before you.. Oh! Ew... It got in my mouth!");
				txt("He suddenly cummed all over my face. "); 
				qcc("Oops. ");
				kat("Uhg!");
				qcc("So, the Margrave...");
			};
			link("Try to forget. ",199);
			break;
		
		
		case 159:
		 	mile.qcc++;
			mile.advice2=2;
			WARDROBE.showLess(0,-1);
			/* I poured oil on my bare breasts.*/
			txt("This went really bad, I ruminated when I was stripping my top. I originally imagined he will probably quickly ejaculate as soon as I grab his dick and the whole affair will be swiftly done. Well, I was wrong. ");
			
			kat("Take your pants off and sit back. ");
			txt("I moved between his legs and took his quite sizeable member. ");
			kat("Really? ");
			qcc("That's the actual size!");
			kat("It surely is. ");
			txt("I encased his shaft between the soft flesh of my tits and started moving them up and down. ");
			
			qcc("Ye<small>ah<small>hhh</small></small>");
			if(mile.slut>3){
				txt(""+NAME.qcc+" panted as I rose my tempo and pumped my tits harder. Having such huge boobs was quite fun. I bowed down and played with the tip of his dick with my tongue. ");
				txt("He cummed all over my face. "); 
				qcc("Sorry about that. ");
				txt("He apologized while I was cleaning myself. ")
				kat("Nevermind. So.. the Margrave? ");
			}else{
				txt("He panted as I rose my tempo and pumped my tits harder. ");
				kat("Warn me before you.. Oh! Ew... It got in my mouth!");
				txt("He suddenly cummed all over my face. "); 
				qcc("Oops. ");
				kat("Uhg!");
				qcc("So, the Margrave...");
			};
			link("Try to forget. ",199);
			break;
		
		
		case 160: 
			set.meta();
			counter.npca[2]=false;
			
			if(mile.advice1 == 2){
				qbb("Hello, "+NAME.kat+". Are you here to beg me to help you with the game because you got stuck again?");
				kat("No I'm here because... actually yes, that's why I'm here.  ");
			}else{
				if(mile.weekend_bb==1){
					qbb("Hello, "+NAME.kat+". I guess you didn't change your opinion about being tied, aren't you? ");
				}else{
					qbb("Hello, "+NAME.kat+". How can I help you? I assume you aren't here to be spanked? ");
				};
				kat("That's a brilliant guess. I'm here because I need a second opinion about something. ");
			};
			qbb("I'm listening. ");
			kat("Well, it is quite hard to convince the Margrave to support you. But a thought that..."); 
			qbb("There is actually a pretty ingenious loophole. I can share it with you but... ");
			
			if(mile.weekend_bb==1&&mile.advice1==2){
				kat("No collars and no bondage! "); 
			}else if(mile.advice1==2){
				kat("No collars or anything similar. "); 
			}else if(mile.weekend_bb==1){
				kat("No bondage or anything similar. "); 
			}else{
				kat("Nothing weird!");
			}
			qbb("Okay. Then there is Plan B. You will suck my dick. ");
		
		
			if(mile.slut>5){
				kat("Great. "); 
				txt("That was not so bad. Just a blowjob. I was afraid he will ask for something twisted. ");
			}else if(mile.slut>2){
				kat("Okay. "); 
				txt("Even though humiliating, at least it would be easy and quick. ");
			}else{
				kat("But... Come on! "); 
				txt("I really, really did not want to do this. It was so disgusting! But I was not able to change his mind. ");
			};
					
			qbb("First, you need to beg me. ");
			txt("I was outraged and weary: ")
			kat("Uhgh! I can give you an awesome blowjob. Why the hell you need to always complicate things and try to degrade me? "); 
		
			qbb("Humiliating you is the fun part. The blowjob itself is just a formality, I could just jerk off if I wanted just that. ");
			txt("I wanted this to be over and go back home. ");
		
			kat("Can I suck your dick?");
		
			qbb("Come on! I thought slut like you would be more experienced regarding begging for dicks!");
		
			link("Beg him for his dick. ",162);
			link("Leave. ",141);
			if(mile.sub<=4)link("Slap him! ",165);
			link("Run away crying. ",141);
			break;
		
		case 161:
			set.meta();
			qbb("I see you changed your mind. ");
			kat("<small>Hmmm.</small>");
			qbb("We can continue where we stopped, once you apologize for your childish tantrum. ");
			kat("What?!?");
			qbb("Apologize! Now, slut!");
			link("Apologize. ",162);
			link("Leave. ",141);
			break;
		
		case 162:
			mile.sub++;
			mile.advice2=2;
			mile.qbb++;
			mile.domina=false;
			kat("Pretty please, would you mind to delight me with your impressive penis? ");
			qbb("No sarcasm. ");
			txt("UGHG!");
			kat("Please, can I suck your dick? ");
			qbb("Hmm... Why? ");
			kat("Because I'm a slut who loves sucking dicks? What the hell you wanna hear?!? ");
			qbb("Okay. Go ahead. ");
			txt("He was just standing there expecting me to do everything. I dropped on my knees, unzipped his pants and hesitantly started. ");
			qbb("No, not like that! I want constant eye contact with you. ");
			txt("I very reluctantly raised my eyes. ");
			qbb("Yes, I love that your hate-filled look. ");
			txt("At least my torment was not long. Even though, that bastard did not let me clean myself until he explained to me how to trick the Margrave. ")
			link("Try to forget. ",199);
			break;
			
		case 165:
			mile.sub--;
			mile.qbb++;
			txt("The loud smack was so satisfying and tingling in my palm so delightful. ");
			kat("YOU WILL NOT CALL ME A SLUT!");
			qbb("Bu.. Wh..");
			kat("You are not so tough now, are you?!")
			txt("He was cowering, taken by surprise by my sudden outburst, scared of another slap and... ");
			kat("Oh my... is that a boner?!!!");
			qbb("No!...");
			link("Leave. ",141);
			if(mile.sub<=2)link("Show him who is in charge. ",166);		
			break;
			
		case 166:
			mile.sub--;
			mile.domina=true;
			mile.advice2=2;
			mile.charge=1;
			txt("I slapped him again, this time quite lightly. ");
			kat("Don't dare you fucking lie to me!  ");
			qbb("I...");
			kat("You are enjoying being beaten by a girl, aren't you? You disgust me! ");
			txt("I pushed him against the wall and roughly grabbed his crotch. ");
			kat("The Margrave loophole?");
			qbb("Margrave who? Augh! Yes, the Margrave! You need to...");
			txt("He was hastily talking while I was roughly rubbing his genitals until he came in his pants. ");
			kat("You will never ever talk to without proper respect! ");
			qbb("<small>Aye, ma'am. </small>")
			link("That was... fun? ",199);
			break;	
	
	
		case 170:
			set.irl();
			counter.npca[1]=false;
			set.chapter("Netflix & chill");
			txt("I sent "+NAME.qaa+" a messaged and he responded that if I want to we can discuss the game and then maybe look at some movie or something. ");
			txt("Based on the included smiley faces, he was pretty excited about spending time with me. ");
			link("Okay. ",171);
			link("Ehhh. ",141);
			
			break;
			
		case 171:	
			mile.advice2=1;
			mile.qaa++;
			set.irl();
			txt("We discussed the game and not only he advised me how to convince the Margrave, he even added several more helpful tips. ");
			txt("Then he invited me to spend some time together and suggested maybe we could watch some movie or something. I feel obliged to agree even though I know well what that means. However, he actually seemed more interested in the movie itself.  ");
			qaa("This is my favorite movie... well, one of the top five. You are gonna love it! ")
			txt("He explained. I hate it. It was so boring and I absolutely did not understand why anybody could enjoy it. The whole story took place on a warship sailing to somewhere on the other end of the world. There was some fighting but literally nothing else happened. ");
			
			link("Doze off. ",174);
			if(mile.slut>2)link("Just suck his dick and go home. ",172);
			break;
			
		case 172:
			mile.advice2sub = 1;
			mile.slut++;
			txt("I could not survive one more minute of that horrid movie. Extreme measures had to be taken. I bend down to his lap. ");
			qaa("Wha...What are you doing, "+NAME.kat+"?");
			kat("I'm going to suck your dick!")
			txt("I ensured him and unzipped his pants. ");
			qaa("But... there'll be a brilliant battle scene soon. Could you wait a moment...  ");
			kat("NO!");
			txt("I just said while grabbing his balls. ");
			qaa("Oh... okay...");
			txt("I licked my lips to build up some moisture and then took his shaft in my mouth. I started sucking, moving back and forth, caressing him with my tongue. ");
			txt("When I felt his dick twitching, I pause for a brief moment and then I continued again, taking him deeper to my throat.  ");
			qaa("I'm going to cum!");
			txt("He warned me. Despite that I was still a little surprised when his first shot hit the back of my throat and I nearly started coughing. ");
			qaa("That was... ");
			txt("He had trouble to express what he felt. ");
			//kat("Thank you! ");
			link("Thank you! ",199);
			link("Awesome, wasn't it? ",199);
			link("Whatever, can I go home now? ",199);
			break;
			
		case 174:
			txt("My eyes were getting heavier and heavier and I eventually decided to give up and just fell asleep. ");
			txt("I was awakened by something touching me. For a moment I was confused where am I but then I remembered. ");
			txt("I felt "+NAME.qaa+"'s hand softly touching my boob, shamelessly taking advantage of my condition. He did not realize I am conscious and started to fondle me even more daringly. ");
			txt("Then he stopped. I thought he might get too scared or suspect I am awake but the opposite was the truth. Soon I felt his hand on my thigh, running higher under my skirt. ");
			
			link("Confront him and leave. ",175);
			if(mile.sub<4)link("Confront him and make him continue. ",176); //TODO
			link("Pretend to be asleep. ",177);
			break;
			
		case 175:
			mile.advice2sub = 2;
			mile.sub--;
			txt("I opened eyes and pretended I'm surprised. ");
			kat("Wha.. WHAT! What are you doing you pervert!");
			qaa("I.. I...");
			txt("He stuttered and quickly withdrew his hand from under my skirt. ")
			kat("How dare you! The only thing you're thinking about is hot to sexually exploit me! I can't believe I trusted you!");
			qaa("But.. but it isn't like...");
			link("Goodbye! ",199);
			break;
		
		case 176:
			mile.sub--;
			mile.advice2sub = 3;
			txt("I opened my eyes. It took "+NAME.qaa+" a while before he glanced at me and with horror realized I am awake. ");
			kat("What are you doing? ");
			txt("I asked him matter-of-factly. ");
			qaa("I... I... ");
			txt("He stuttered and tried to withdrew his hand from under my skirt. But I grabbed his arm. ");
			kat("I did not "+(mile.sub<1 ? "allow" : "tell" )+" you to stop! Go on! ");
			txt("I led his hand higher, not breaking eye contact with him. The mix of shyness and desire in his face was irresistible. ");
			if(!PC.panties){
				qaa("You... you are not wearing any panties! ");
				txt("He was amazed and confused. ")
				if(mile.slut>3){
					kat("Yeah. I'm a little slut. ");
					txt("I smiled. ");
				};
				txt("He reached the pubic mound and started slowly rubbing my bare pussy. ");
			}else{
				txt("He reached the pubic mound and started slowly rubbing my pussy through the very thin fabric of my "+dh.decapitalise(PC.panties.name)+".");
			};
			qaa("Am I doing it right? ");
			kat("Oh yeah! Shut up and continue! ");
			txt("I moaned. He followed my order and continued, now with more confidence. ");
			
			if(PC.panties)txt(""+NAME.qaa+" moved his finger under my panties and started caressing me directly, slowly building up my arousal. ");
			qaa("You are so wet! ");
			kat("Hhhhh!");
			txt("I gasped. ");
			txt("And then I came with his index finger teasing my button. ");
			link("Not bad! ",199);
			break;

		case 177:
			mile.advice2sub = 4;
			txt("I decided to keep pretending I am asleep, wondering how far he will venture. ");
			if(!PC.panties){
				txt("His hand slowly advanced further. He hesitated for a while when he found out "+(mile.slut>3?" I'm a little slut who is not wearing any panties. ":" that I'm not wearing any panties. ") );
				txt("I touched my bare skin, nervously examining with his finger my pubic mound and lightly sliding over my lips. It was electrifying. ");
			}else{
				txt("His hand slowly advanced further until he reached my panties. ");
				txt("He touched me through my "+dh.decapitalise(PC.panties.name)+", nervously examining with his finger my pubic mound and lightly sliding over my lips. It was electrifying. ");
			};
			txt("I inadvertently moaned and he instantly froze. For a minute or two he just stood still, watching me and listening to my breath.  ");
			txt("He was scared that I am waking up and I was scared he finds out that I am just faking it. But when I did not react he dared to continue. ");
			if(PC.panties)txt("His fingers even slid under my panties so he could caress me directly. ");
			qaa("Your pussy is so soft and perfect. ");
			txt("He whispered in deep admiration. My arousal was building up and it was getting harder and harder to stay still. ");
			txt("And then I came with his index finger teasing my button. ");
			link("Not bad! ",199);
			
			break;	
				
			
		case 180:
			set.irl();
			counter.npca[1]=false;
			qaa("What do you want, "+NAME.kat+"? ");
			txt("He invited me very coldly. ");
			kat("I was wondering... I might need a little advice about the game... ");
			qaa("What would I get in return? ");
			if(mile.advice1 == 1){
				kat("Maybe another kiss?");
			}else{
				kat("Dunno, what would you want? ");
			}
			qaa("Stop playing stupid! I want you to suck my cock.  ");
			kat("To suck your cock? ");
			qaa("Don't pretend you're surprised. You're a cock-sucking whore who goes with anybody but my cock isn't good enough for you? ");
			txt("So that was making him pissed. ");
			link("Okay, I'll suck it. ",181);
			link("Fuck you! ",140);
			break;
			
			
		case 181: 
			mile.qaa++;
			mile.advice2=1;
			txt(""+NAME.qaa+" watched with disdain how I reluctantly dropped to my knees and started unzipping his pants. ");
			qaa("And don't be sloppy. ");
			if(mile.sub<2){
				kat("You'll rank me in comparison to all the other bj's you got? I'm sure there were so many! ");
				txt("I laughed but he grabbed me by hair: ");
				qaa("Shut up and suck!");
			}else if(mile.sub>3){
				kat("Yes, sir. ");
				txt("I agreed submissively. ");
				qaa("Great, I love you obedient and on your knees. ");
			}else{
				txt("I mumbled something angry. It was probably a good thing he did not hear it clearly. ");
			};
			txt("I sucked his cock while he was firmly clenching my hair and guided me back and forth which I hated. ");
			txt("Suddenly he roughly pulled my head back and I was hit by his load straight into my face. ");
			kat("What the fuck?!");
			qaa("You look far better this way. ");
			
			if(mile.sub < 0){
				kat("You asshole! I would never date somebody like you! ");
				txt("I snapped at him while wiping his cum from my face. ");
				qaa("And yet you are here, obediently sucking my dick! ");
				txt("He gloated. ");
			}else if(mile.sub <= 3){
				kat("Fuck! Was that necessary?!?! ");
				txt("I groaned while wiping his cum from my face. ");
				qaa("No. But I enjoyed it. ");
				txt("He chuckled. ");
			}else if(mile.sub > 3){
				txt("I was wiping his cum from my face and was close to tears. This was all wrong! It should not be this way! I was on my knees and some pathetic loser was gloating above me! Could I sink even lower? ")
				
			};
			
			
//TODO			
			link("Fuck. ",199);
			break;
			
			
			
			
		case 199:
			WARDROBE.showAll();	
			txt("With the new knowledge, I finished the quest in under twenty minutes. ");
			link("Next day.",200)
			break;
		
		case 200:
			/*set.newday();
			set.irl();
			WARDROBE.changeOutfit("none",PC,inventory); //USUALLY IN EFFECT 
			*/
//ASAP
			//txt("The did not contact me and I had idea what will be my next task. ");
			morgen.one("Kisses");
			if(mile.nudes)set.chapter("Nudes");
		//TODO
		/*
			txt("The did not contact me and I had idea what was my task for that day. ");
			link("Makeup. ",200, () => EDIT.makeup() );
			link("Wardrobe. ",null, () => wardrobeWrapper("second",201) );
			link("Random Outfit ",null, () => wardrobeAuto("second",201) );
			*/
			break;
		case 201:
			txt("The did not contact me and I had no idea what will be my next task. ");
			morgen.two();
			/*
			
			link("Makeup. ",201, () => EDIT.makeup() );
			link("Wardrobe. ",null, () => wardrobeWrapper("second",201) );
			link("Random Outfit ",null, () => wardrobeAuto("second",201) );
			link("Go to school. ",202); 
			*/
			break;
		
		
			
		
		
		case 202: 
			txt("I meet with them before school. ");
			qaa("We have a very special task for you. ");
			qcc("We have no doubts you'll enjoy it. ");
			kat("What is it? ");
			qaa("We want you to kiss a girl. ");
			kat("Kiss a girl?!?! Like you want me to make out with the AI? "+((mile.cyberlesbo>0||mile.cyberlesbo2) ? "(Again?)" : "") );
			qaa("No, no. We want you to kiss a real girl. ");
			kat("What!?!  well... I guess I might be able to convince "+NAME.sas+"...")
			qcc("We want you to kiss two girls! ");
			kat("What?!");
			qaa("Yeah, It won't be a challenge if you just could easily convince "+NAME.sas+". ");
			if(mile.domina){
				qcc("Or three. Three is a nice number. ");
				qaa("Good idea. Your task is to kiss three girls. ");
				txt("Was suspiciously quiet the whole conversation. ");
				
			}else{
				qbb("Make it three. ")
				qcc("Three is a nice number. ")
				
			}
			
			if(mile.tg==2){
				link("So kiss three girls.", 206);
			}else{
				link("So kiss three girls.", !mile.nudes ? 203 : 204);
			};
			break;
		
		
		case 206:
			txt("The other two nerds left, only "+NAME.qcc+" remained. He seemed nervous, half expecting I will betray him. It was a very tempting idea but unfortunately, he still could very negatively affect my future. So I decided to give him what he wanted. We were the only people in the locker room. ");
			qcc("Do you have... you know? "); 
			kat("Panties for you? Yeah! ");
			
			link("Give him some panties. ",208);
			if(mile.slut>4)link("Pull down "+dh.decapitalise(PC.panties.name)+". ",207); 
			break;
		
		case 207:
			mile.qcc++;
			WARDROBE.remove("panties");
			txt("I moved my hands under my skirt and pulled down the panties I was wearing and then handed them to absolutely stunned "+NAME.qcc+". He was so shocked he was not even able to take them. ");
			kat("Are those fine? ");
			qcc("O... of course they are, "+NAME.kat+"! Thank you!!! You're the best!!!");
			txt("He quickly grabbed them. ");
			qcc("If you'll need any help with anything else... I'm sure we came up with some deal! ");
			
			link("Leave.", !mile.nudes ? 203 : 204);
			if(mile.sub<4)link("Make him put them on. ",209);
//TODO 5?
			break;
			
		case 208:
			txt("With a sigh, I reached int my bag and handed him a pair of my panties. ");
			kat("Are those fine? ");
			qcc("Of course they are, "+NAME.kat+"! Thank you!!! ");
			txt("He was staring at them with amazement, gingerly touching the delicate fabric with his fingers. ");
			qcc("If you'll need any help with anything else... I'm sure we came up with some deal! ");
			
			link("Leave.", !mile.nudes ? 203 : 204);
			if(mile.sub<4)link("Make him put them on. ",209);
//TODO 5?
			break;
			
		case 209:
			mile.sub--;
			txt("He was about to put them into his bag but then I stopped him: ");
			kat("Put them on! ")
			qcc("What?!?! ");
			kat("Put them on! I want to see you in them! ");
			qcc("But...");
			kat("Do it! ")
			txt("I harshly ordered. He reluctantly stripped down his pants and underwear, his pride hidden under his long shirt, and pulled on my panties. ");
			qcc("I.. is that okay? ");
			kat("Lift up your shirt! ");
			qcc("But... ");
			txt("I did it myself. Of course, they were stretched by his huge boner. Dressing in my underwear made him obviously very aroused. ");
			kat("You're such a pathetic perverted loser! ");
			qcc("I'm sorry, "+NAME.kat+"! ");
			link("Leave.", !mile.nudes ? 203 : 204);
			break;
		
		
		case 203: 
			txt("The rest of the day was uneventful. Girls were glad when I told them we will go to the Bronze tonight. It seemed like a good place for my "+(mile.immersion>=0 ? "quest." : "task." ) );
			link("Evening", 210);
			break;
			
		case 204:
			mile.nudes++;
			txt("I left them and walked to my first class. Something was wrong. I could feel it. People were staring at me and smirking. What is going on? ");
			kat(""+NAME.eva+"!");
			eva("Hello, "+NAME.kat+". ");
			kat("What is wrong? ")
			eva("I'm not sure what you mean? ");
			kat("Everybody is staring at me the whole morning. ");
			eva("Oh that. I guess they saw your pictures. ");
			kat("What pictures!?!? ");
			eva("Those nude pictures. ");
			kat("Nude pictures?!?!? ");
			txt("She handed me her phone. There were several pictures of me, I was topples wearing only thong. There were genuine, I remembered taking them a few months ago! ");
			kat("You couldn't warn me sooner? ");
			eva("I thought it was you who released them. ");
			kat("Why would I do that? ")
			eva("To show off. ");
			kat("She was extremely smug. ");
			txt("Those damn nerds! It was not hard to guess who shared them and how they got them. ");
			
			if(mile.slut>6){
				txt("I was shocked at first but then I calmed down. The situation was not so bad. Everybody has seen my tits, what is the big deal? My reputation suffered a little but not irreversibly. The general opinion was that I am a slut anyway. Some people will sneer for a while but when I stay cool they will soon stop. And those photos were not bad either. I was as hot as hell.  ");
			}else if(mile.slut>2){
				txt("I was shocked and humiliated. Everybody in the school seen my tits! Sure, it could be worse and people will soon forget but still, my reputation suffered a hit. On the other hand, I definitely did not have to be ashamed for my perky tits, on those pictures was I sexy as hell. ");
			}else{
				txt("I was shocked and was about to burst into tears. How they could do this to me? My reputation was ruined! Everybody has seen my tits and I became the laughing stock of the whole school. There was no way I would be able to fully recover from this! Once the pictures were on internets, they will never go away! ");
				txt("I spend the rest of the day like in a haze.  ");
			};
			link("Evening", 210);
			break;
		
		case 210: 
			set.chapter("Kissing girls at Bronze");
			if(mile.nudes){
				txt("I was not looking forward to going out but I was "+(mile.sub<4 ? "afraid" : "terrified")+" to fail their task. ");
			}else{
				txt("Despite their humiliating task I was kinda looking forward to going out again. "
					+(mile.immersion>0 ? "I enjoyed the game a lot but I needed some change. " : "All my free time was wasted on their stupid game. ")
				)
			}
			counter.drunk = 0;
			counter.sas = true;
			counter.zan = true;
			counter.jus = true;
			mile.sasLesbian = false;
			counter.kisses = 0;
		//	mile.dyke = false;
			
			link("Evening", 211);
			break;
			
			
		case 211:
			txt("People agreed Bronze was a terrible place but still everybody went there. The music was very loud and the dancefloor was full. ");
			if(counter.drunk<5)link("Get a drink. ", 212);
			if(counter.sas)link("Talk with "+NAME.sas+". ", 213);
			if(counter.drunk>1&&counter.jus)link("Talk with a woman at the bar. ",230);
			if(counter.zan)link("Talk with "+NAME.zan+". ",220);
			if(counter.kisses>2)link("Have fun",240);
			break;
			
		case 212: 
			switch(counter.drunk){
				case 0: 
					txt("I went to the bar to get a drink. I felt like I'm going to need it. ");
					break;
				case 1: 
					txt("I went to the bar again. I could feel pleasant warmth spreading throughout my whole body . ");
					break;
				case 2: 
					txt("I went to the bar again. I could feel I am already drunk and frolicsome. ");
					break;
				case 3: 
					txt("I went to the bar again. I was pretty drunk and adventurous. ");
					break;
				case 4: 
					txt("I felt quite dizzy. The last shot was a mistake.  ");
					break;
			}
			counter.drunk++;
			link("Back.",211);
			break;
		
		case 213:
			txt(NAME.alexandra+" was sitting in the back, resting and sipping a big green and red cocktail with a tiny umbrella and really long straw. ");
			if(
					mile.sub<-1
				|| (mile.sub<1 && counter.drunk>0)
				|| (mile.sub<3 && counter.drunk>1)
				|| counter.drunk>2
			)link("Kiss "+NAME.sas+". ",214)
			link("Suggest Kiss. ",215)
			link("Leave.",211);
			break;
		
		case 214:
			txt("I leaned closer and kissed her red lips. She was surprised but she did not resist.  ");
			counter.kisses++;
			counter.sas = false;
			if(mile.sasLesbian){
				sas("So you are a lesbian!");
				kat("No! This was a completely heterosexual kiss! ");
			}else{
				sas("What the hell, "+NAME.kat+"?!");
				kat("I just wanted to try something. ");
				sas("...okay.")
			};
			link("Leave.",211)
			break;
			
		case 215:
			mile.sasLesbian = true;
			kat("We should totally kiss! ");
			sas("But why, "+NAME.kat+"? ");
			txt("I did not expect this level of steadfast opposition. ");
			kat("Dunno, for fun?!");
			sas("Are you a lesbian, "+NAME.kat+"?")
			kat("What!? No! Why? ");
			sas("You just wanted to kiss me. ");
			kat("I'm not a lesbian! ");
			sas("Is that why you changed your style and don't hang out with us lately? ");
			kat("NO!");
			sas(""+NAME.eva+" will be so surprised. ");
			kat("You can't tell that to "+NAME.eva+"!  ");
			link("Please, forget everything we talked about!",211);
			break;
			
		case 220:
			counter.kisses++;
			counter.zan = false;
			//npc_set([2,"Tom"],[5,""+NAME.zan+""]);
			kat("Hello, "+NAME.zan+"!");
			zan("Hi, "+NAME.kat+"! How are you! ");
			txt("She was in a very good mood if you know what I mean. ");
			kat("Fine... so, have you ever kissed a girl? ");
			zan("Yeah! ... did you? ");
			kat("Kinda. ... we should kiss. ");
			zan("Okay, but not here. I want that asshole to see us. ");
			txt("She grabbed me and maneuver me through the crowd until she was sure "+NAME.tom+" noticed us and then she kissed me. ");
			txt(""+NAME.tom+"'s jaw dropped when he saw us very erotically kissing right in front of him. ");
			
			tom("He..Hello, girls. What are you doing? ");
			zan("I'm testing the hypothesis that even a girl kisses better than you! ");
			tom("Than me?! Than me?! ");
			txt("He suddenly pulled me closer and passionately pressed his lips against mine. ");
			txt(""+NAME.zan+" gave me a very nasty look. She was not happy I was kissing "+NAME.tom+" even though I had no chance to stop him.  ");
			tom("So? Who is the better kisser, Katarína? ");
			
			link("I don't know!",221);
			link(""+NAME.tom+"",223);
			link(""+NAME.zan+"",222);
			link("You are both great!",221);
			link("You are both awful!",221);
			break;
			
		case 221:
			txt("I tried to calm down the situation but neither of them was satisfied with a draw. ");
			txt(""+NAME.zan+" immediately grabbed me and kissed me again. She did not hold back, the kiss was very long and ardent, with her tongue pushed nearly to my throat and her fingers gently tapping my back. ");
			txt(""+NAME.tom+" did not give me even second to collect myself. He held my head tightly but gently, caressing me and violently plundering my mouth. ")
			tom("So? ");
			zan("Soooo? ");
			kat("Ehh...");
			txt("I was catching my breath. ");
			link(""+NAME.tom+"",223);
			link(""+NAME.zan+"",222);
			if(mile.sub<3)link("I don't care! Don't drag me to your issues! ",211);
			break;
			
		case 222:
			txt(""+NAME.tom+" was not a very graceful loser.");
			tom("Of course you bitches are sticking together! ");
			txt("He left us very angry.");
			zan(""+NAME.kat+" has probably even bigger dick than you! ");
			txt(""+NAME.zan+" screamed at him. It did not even make sense since I had no penis. " );
			zan("Thank you, "+NAME.kat+", I owe you one. ");
			link("You are welcome. ",211);
			break;
			
		case 223:
			txt(""+NAME.zan+" was not a very graceful loser.");
			zan("Everybody knows you are a deceitful snake and a promiscuous whore! You just want to get railed by "+NAME.tom+", don't you, slut!");
			
			if(mile.sub<3){
				kat("That's rich! A slut like you is calling me a whore! ");
				zan("Fuck you! ");	
			}else{
				kat("I didn't mean...")
				txt("I feebly tried to defend myself but she did not listen. ");
				zan("Fuck you! ");	
			};
			
			txt(""+NAME.tom+" led me away from pissed "+NAME.zan+". ");
			
			tom("Thank you, "+NAME.kat+". I can say you're also a better kisser than "+NAME.zan+". ");
			if(mile.nudes){
				txt("Then he, smiling and staring at my cleavage, added: ");
				tom("Even naked you look better than her. ");
				if(mile.slut>4){
					kat("Heh, thank you! ");
					txt("He was not ashamed to admit he has seen my nude pictures. ");
				}else{
					txt("I shivered with disgust. He was not ashamed to admit he has seen my nude pictures. ");
				}
			};
			
			txt("I removed his hand he was still holding on my hip. ");
			kat("Aren't you dating "+NAME.zan+"? Or Vendy? ");
			tom("To be honest, at the moment I'm not entirely sure. But if you are interested...");
			txt("He winked. ");
			link("Quickly escape",211);
		//TODO
		//	if(mile.slut>100)link("Quickie",211); 
			break;
			
		case 230:
			counter.kisses++;
			counter.jus=false;
			npc_set([6,"Justine"]);
			
			txt("Alone at the bar was sitting an attractive woman in her late twenties with jet-black hair, fair skin and arms covered with tattoos. If somebody was a kinky bisexual, it was her. ");
			kat("Hello. ");
			txt("She curiously looked at me. ");
			npc(6,"Hi. How are you? ");
			kat("Fine... Well, actually not so fine. ");
			npc(6,"What is troubling you, hon? ");
			kat("I made a stupid bet that I'll kiss a girl. ");
			npc(6,"Don't say nobody is interested, you look quite cute.");
			kat("I'm too shy to just walk around and ask strangers whether they want to kiss me. ");
			npc(6,"Maybe I can help you?");
			kat("You..");
			txt("She leaned closer to me, her eyes were so deep it was almost scary, and kissed me. ");
			npc(6,"You're welcome, hon. ");
			link("T.. Thank you.",211)
			break;
		

		
		case 240: 
			set.chapter("Whoring yourself");
			mile.prostitute = false;
			npc_set([1,"Some guy"]);
//TODO GETTING DRUNK
			txt("Finally, I finished that humiliating task I could enjoy myself. I was partying hard! ");
			txt("It was after midnight when I decided to go home.  ")
			txt("I was walking to a tram stop when a silver car suddenly stopped next to me. I assumed the driver wanted to ask for directions but he just yelled: ");
				
			npc(1,"How much?");
			kat("What? For what?");
			npc(1,"For sex, obviously. ");
			txt("Shocked I realized what he meant. ");
			kat("I'm not a prostitute! ");	
			npc(1,"Are you sure? ");
			kat("Yes! I won't have sex with you! ");
			npc(1,"I'll pay you 100 Euro just for a blowjob. ");
			kat("No!");
			if(mile.slut<3){
				mile.slut--;
				txt("I ran away totally disgusted. I felt so dirty and ashamed. How could he even think I am a prostitute?! My self-esteem was hit very strongly. ")
				link("Morning",250);
			}else{
				npc(1,"150 Euro. ");
				txt("That was a lot of money for a blowjob. What the fuck, am I actually considering it?!? ");
				link("No!",241, ()=> mile.slut--);
				link("Okay. ",243);
				link("I... no... I can't! ",241);
				if(mile.slut>6)link("Sure, absolutely! ",243);
				
				if(mile.sub<4){
					link("Fuck off, how many times I have to repeat I'm not a whore! ",241, ()=> mile.slut--);
					link("200 € or nothing!",242);
				}
				
			}
			break;
			
		case 241:
			txt("I felt dirty and deeply ashamed. How could he mistake me for a prostitute? ");
			txt("Even worse, for a brief moment, I was actually considering I will suck a stranger for money. ");
			link("Morning",250);
			break;
		
		case 242:
			txt("He chuckled. ");
			npc(1,"You are cute but you aren't worthy 200 Euros, slut. ");
			
			if(mile.slut>4 && mile.sub<2){
				kat("I'm worth every cent. ");
				txt("I stated confidently. He eyed me for a brief moment and then nodded. ");
				npc(1,"Okay, I believe you. 200. Get in the car and impress me. ");	
				link("Get in the car.",243);
			}else{
				link("Your loss.",241);
				link("I'll do it for 150.",243,()=>{mile.sub++} );
			};
			break;
			
		case 243:
			mile.prostitute=true;
			txt("He was driving with one hand, the other one on my thigh. ");
			npc(1,"What is your name, slut? ");	
			kat("K...  "+NAME.zan+".");
			txt("I was afraid a bit where were we going but he just drove his bavarian to a dark parking lot. ");
			txt("I did not wait and lowered my head to his lap. ");
			
			txt("I unfastened his belt, unzipped his pants and took his dick out. I took the tip in my mouth, wiggling my tongue against it. He grabbed me by my hair but did not force me and let me continue to suck him in my own tempo. ");
			txt("I felt a bit hazy. I was drunk and the whole situation was so surreal. Was I really sucking a stranger for money? ");
			txt("Then it was all over and my mouth was filled with his load. I tried to stop the cum from dripping down to my "+dh.decapitalise(PC.upper.name)+" while he was nonchalantly showing yellow bills to my cleavage. I did not even count them when I stumbled out of his car. ");
			npc(1,"Not bad. I hope I'll see you again. ");	
			link("Bye?",250);
			break;
			
		case 250:
			txt("In the morning my head ache and it was especially hard to leave the warm bed. ");
			if(mile.prostitute){
				txt("I was not really sure whether I actually sold myself out or whether it was just a dream. Until I found three 50 € bills. Fuck. Was it worth it? ");
			};
			morgen.one("Piercings");
			break;
		case 251:
			morgen.two();
			break;
			
		case 252:
			txt("At the school I tried to avoid my classmates, I was a bit embarrassed after what I have done the last night and was afraid of gossips. ");
			link("Next task.",253);
			break;
		
		case 253: 
			qaa("We decided that your new task will be to get a piercing. ");
			kat("I thought the deal was you'll not ask me for anything extreme or permanent? ")
			qcc("Since you have earrings and navel piercing we assumed you're not against the whole concept. ");
			qbb("And piercings shouldn't be considered to be extreme or permanent. ")
			qaa("And you can pick whatever piercing you want! If you don't want anything showy, you can pick some hidden ones. ");
			if(mile.skirt==1)qbb("But don't try to be a smartass like with that skirt - just a new pair of earrings won't cut it. ")
			kat("But you'll want to see it, won't you? ");
			qcc("Yeah!... I mean.. Yes. ");
			link("New piercing.",254);
			break;
			
		case 254:
			link("Get the piercing.",255);
			{
				let cont = false;
				if(
					   WARDROBE.ownGarment("nose",inventory,PC)
					|| WARDROBE.ownGarment("lips",inventory,PC)
					|| WARDROBE.ownGarment("eyebrow",inventory,PC)
					|| WARDROBE.ownGarment("pubic",inventory,PC)
					|| WARDROBE.ownGarment("tongue",inventory,PC)
					|| WARDROBE.ownGarment("nipples",inventory,PC)
					
				)cont = true;
				link("The next day.",260,()=>{},cont);
			}
			break;
		
		case 255:
			//MERCHANT
			break;
			
		case 260:
			txt("I was glad it was finally Friday. ");
			morgen.one("Friday")
			break;
			
		case 261:
//TODO ADJUST BY MORGEN
			txt("I was glad it was finally Friday. ");
			let cont = true;
			if(!PC.upper){
				cont = false
				imp("I cannot go to school without a shirt or top!");
			};
			if(!PC.lower && PC.upper && PC.upper.slot != "upperLower"){
				cont = false
				imp("I cannot go to school without a skirt or pants! ");
			};
			if(!PC.panties){
				if(mile.slut<2){
					cont = false
					imp("I cannot go toschool without panties! ");
				}else if(mile.slut<5){
					txt("I do not feel comfortable to go to school without panties!")
				}
			}else if(mile.slut>10){
				txt("I would feel more comfortable without panties!  ")
			};
			
			
			if( !(
						WARDROBE.equipedGarment("nose",PC)
					|| WARDROBE.equipedGarment("lips",PC)
					|| WARDROBE.equipedGarment("eyebrow",PC)
					|| WARDROBE.equipedGarment("pubic",PC)
					|| WARDROBE.equipedGarment("tongue",PC)
					|| WARDROBE.equipedGarment("nipples",PC)
			)){
				cont = false
				imp("I need to wear some new piercing. ");
			};
				
			link("Makeup. ",active_scene, () => EDIT.makeup() );
			link("Wardrobe. ",null, () => wardrobeWrapper(content,active_scene) );
			link("Random Outfit ",null, () => wardrobeAuto(content,active_scene) );
			link("Go to school. ",262,()=>{},cont); 
			break;	
			
			
		case 262:
		
		
			if(WARDROBE.equipedGarment("nose",PC) || WARDROBE.equipedGarment("eyebrows",PC) || WARDROBE.equipedGarment("lips",PC) ){
				qcc("Wow. ");
				qbb("Nice piercings. ");
				qaa("A bit trashy. ");
				qbb("Just like she is. ");
				qcc("They look good. ");
				qaa("Is this all? ");
				//if(att.p_ear>0)link("Move away hair. ",2422);
				//if(att.p_nose>0)link("Point at nose. ",2500);
				//if(att.p_nose>0)link("Point at face. ",2500);
				//if(att.p_tongue>0)link("Stick out tongue. ",2423);
				link("Yes.",2430);
				if( WARDROBE.equipedGarment("nipples",PC) ){
					if(PC.bra){
						link("Take off shirt and bra. ",264);
					}else{
						link("Take off shirt. ",264);
					}
				};
				if( WARDROBE.equipedGarment("pubic",PC) ){
					if(PC.panties){
						link("Take off skirt and panties. ",265);
					}else{
						if(att.p_pubic>0)link("Take off skirt. ",265);
					};
				};
				link("Yeah, what else would you want!",270);
				//ASAP both
				
			}else{
				qaa("So? How did you cope with your task? ");
				qcc("I don't see anything. Does it mean... ");
				qbb("Don't be shy and start stripping. ");
				//if(att.p_ear>0)link("Move away hair. ",2422);
				//if(att.p_nose>0)link("Point at nose. ",2500);
				//if(att.p_nose>0)link("Point at face. ",2500);
				if( WARDROBE.equipedGarment("tongue",PC) )link("Stick out tongue. ",263);
				if( WARDROBE.equipedGarment("nipples",PC) ){
					if(PC.bra){
						link("Take off shirt and bra. ",264);
					}else{
						link("Take off shirt. ",264);
					}
				};
				if( WARDROBE.equipedGarment("pubic",PC) ){
					if(PC.panties){
						link("Take off skirt and panties. ",265);
					}else{
						link("Take off skirt. ",265);
					};
				};
				//if(att.p_pubic==0&&att.p_nipple==0&&att.p_tongue==0&&att.p_ear==0)link("Something horrible happened and you cannot see any other link. ",2430);
				//ASAP both
				link("##Something is broken. ",270);
			};
			break;
		
		case 263:	
			qcc("Nice. ");
			qaa("I like it. ");
			qbb("I wonder how that would feel during oral. ");
			if( mile.advice2 == 2 ){
				txt("I shivered when he told me that. I really hoped I will not ever have to suck his dick again. ");
			};
			kat("Too bad you'll never find out. ");
			qbb("Or will I?");
			if(mile.gaa>=2){
				qaa("Stop being always such a creep. ");
				qbb("What? Are you jealous? Would you mind if she sucked my dick and not yours? ");
				qaa("Shut up!");
			};
			if( WARDROBE.equipedGarment("nipples",PC) )link("And that isn't everything! ",264);
			link("New task. ",270);
			break;
			
		case 264:		
			mile.slut++;
			mile.warned = 0;
			WARDROBE.showLess(0,-1);
	//WUT? THIS IS HAPPENING IRL!!!
	/*		if(mile.slut>4){
				let inter="";
				if(mile.boobs>1)inter+="- now significantly expanded -"
				txt("I kinda enjoyed stripping in front of those nerds, their pathetic stares locked at my "+inter+" chest. I took my time and gave them a good show. ");
				txt("Nerds were really amazed by my bosom and new nipple piercings. I really should have them pierced a long time ago.  ");
			}else{
				let inter="";
				if(mile.boobs>2){
					inter+=" - especially now when "+NAME.qcc+" turned my breast into this huge udders";
				}else if(mile.boobs>1){
					inter+=" - especially now when "+NAME.qcc+" expanded my chest.";
				}
				txt("I hated stripping in front of them"+inter+". I tried to make it as quick and unerotic as possible. ");

	TODO
	mile.slut - be shameles

				
				txt("Nerds were really amazed by my bosom and my brand new nipple piercings. ");
			};
*/			
			
			if(mile.slut>5){
				txt("I kinda enjoyed stripping in front of those nerds, their pathetic stares locked at my chest. I took my time and gave them a good show. ");
				txt("Nerds were really amazed by my bosom and new nipple piercings. I really should have them pierced a long time ago.  ");
			}else{
				txt("I hated stripping in front of them. I tried to make it as quick and unerotic as possible. ");
				txt("Nerds were really amazed by my bosom and my brand new nipple piercings. ");
			};
			
			qcc("Wow. ");
			qaa("You passed this task with flying colors. ");
			qbb("Good choice. ");
			qcc("I hoped but I assume she will go for something lamer. ");
			qbb("Nah, I told you she is a slut who will definitely get her nipples pierced. ");
			if(mile.burned){
				qaa("Yeah, sluts like her love drawing attention to their tits. ");
				if(mile.slut<4&&mile.sub<3)kat("Hey! I'm not a slut! ")
			}else if(mile.gaa>2){
				qaa("Having her nipples pierced doesn't mean she is a slut. ");
				qbb("I really think it does. ");
				qcc("There is nothing wrong with being a slut. ");
				qaa("Don't listen to them, you are great "+NAME.kat+"! ");
			}else{
				qaa("You are great "+NAME.kat+"! ");
			};
			link("New task.",270);
			break;
			
		case 265:
			mile.slut++;
			mile.warned = 0;
			WARDROBE.showLess(-1,0);
			if(mile.slut>5){
				txt("With a smile, I unzipped my skirt. ");
				kat("You really want to see my brand new piercing, don't you? ");
				txt("I teased them. It made them pretty hyped with high expectations.  ");
			}else{
				txt("With sight, I rolled up my skirt. Needless to say, this move made them pretty hyped with high expectations. ");
			};
			
			if(!PC.panties){
				qbb("You don't even bother with panties anymore, do you? ");
			};
			txt("They moved closer to admire my new piercing. ");
			qaa("Wow. ");
			qcc("Nice! ");
			qbb("You should get a clit piercing. ");
			kat("Are you crazy?! I'd never allowed anybody to pierce me... there.  ");
			qcc("I like it. It looks really great. ");
			qaa("You definitely passed this task. ");
			if( WARDROBE.equipedGarment("nipples",PC) )link("And that isn't everything! ",264);
			link("New task.",270);
			break;	
			
//THERE SHOULD BE GAME TO DIVIDE PARTIES
			
		case 270:	
			WARDROBE.showAll();
			qaa("Have you heard about another "+NAME.pet+"'s party? ");
			kat("Yeah, I was invited?" );
			qaa("We all were invited too. ");
			kat("In that case, I probably stay at home. I refuse to be at the same party as that your AI. ");
			qaa("We understand. But we have a solution. ");
			txt("I was not sure where was he heading. ");
			qaa("You can go with us instead of the AI. ");
			kat("What?!?! I can't go with you! ")
			txt("I did not want to offend them but the reason was obvious. I mean, how I would explain to "+NAME.eva+" and "+NAME.sas+" or other people why I'm suddenly hanging out with them? ");
			qcc("Don't worry, our brilliant plan counts with it. ");
			qaa("Nobody has to know it is <i>you</i> you. ");
			kat("You mean...");
			qaa("You can pretend you are our AI and nobody would wonder why are you with us. ");
			kat("I don't want to pretend I'm an AI! ");
			qaa("Too bad. It is your next task. ");
			link("The Party.",300);
			break;
			
		case 280:
			//note("### TO BE CONTINUED :-( ###");
			link("The Party.",300);
		/* TODO - EAR PIERCING 	
		case 2422:
			//ASAP desc
			qcc("Oh. ");
			qaa("Just this? ");
			qbb("You failed. ");
			kat("What? You literally said anywhere I want!")
			qaa("She didn't failed! Still... she doesn't show a good attitude by doing the least amount of necessary assignment.  ");
			if(mile.sub>1){
				kat("I'm sorry! If you wanted something else you should ask for something else! I try to satisfy you but you're really not making this easy! ");
			}else{
				kat("Yeah? Tough luck. I'll do what I have to but nothing more. I don't care what you think about my attitude! ");
			};
			link("New task.",2430);
			break;
		*/	
			break;
			
			
		case 300: 
			set.meta();
			set.chapter("The Party");
			
		
			txt("This was an especially devious plan. There was no win for me - I had to go with them and either I could reveal my true identity and have my reputation tarnished by associating myself with those pathetic nerds. Or humiliate myself by pretending I am my own AI clone! Either way, I was damned. ");
			txt("For some reason, they felt the need to specify I should wear something nice and sexy. Like they have ever seen me at a party in something ugly and unsexy! ");
			
			txt("Still, I was not yet sure whether to pick something simple and elegant - "+choice("placeholder","dress_1")+" or maybe "+choice("placeholder","dress_2")+", something more sexy and provocative - "+
				choice("placeholder","dress_3")+" or "+choice("placeholder","dress_4")+" - or something downright slutty like "+
				choice("placeholder","dress_5")+" or "+choice("placeholder","dress_6")+
			". ");
			
			link("The Party.",301);
			break;
			
		case 301:
		
			if(mile.partyAIdress == 1 || mile.partyAIdress == 2) mile.slut--;
			if(mile.partyAIdress == 5 || mile.partyAIdress == 6) mile.slut++;
		
			txt("I meet with the trio in a virtual reality antechamber before we teleported to "+NAME.pet+"'s place. They dropped jaws when they saw my dress were a weak consolation. ");
			kat("So how should I act? ");
			if(mile.burned){
				qaa("How you want! You just have to accompany us, be extremely nice to us and do whatever we tell you to. We don't care about anything else. Don't forget you'll be punished for any misbehaving! ");
			}else{
				if(mile.domina){
					qaa("How you want! You just have to accompany us, be extremely nice to us and do whatever we tell you to. We don't care about anything else. ");
					qcc("Don't forget you'll be punished for any misbehaving! ");
				}else{
					qaa("How you want! You just have to accompany us, be extremely nice to us and do whatever we tell you to. We don't care about anything else. ");
					qbb("Don't forget you'll be punished for any misbehaving! ");
				};
			}
			kat("...okay. ");
			txt("I was trying to get into the role. I am a bot... ");
			qaa("What the hell are you doing? ");
			txt("They laughed when they saw my face trying to simulate a bland, robotic, indifferent expression. ");
			qaa("You're trying too hard! She was programmed to act just like you! ");
			qcc("Just be yourself. ");
			kat("That's like the best advice ever. Just be yourself! OMG! ");
			
			link("The Party.",302);
			break;
			
		case 302:
			txt("The place was completely different than before. We were in front of a spacious log cabin at the shore of small, crystal clear lake. It was surrounded by wild forest and the simulated smell of pines and spruces was very strong. In the distance on the horizon were seen majestic tall mountain half-covered by snow. ");
			pet("Hello! How are you? ");
			txt(""+NAME.pet+" was quick to welcome us. ");
			pet("I see "+NAME.kat+" is no longer angry at you? ");
			txt("He winked at me. ");
			
			link("Hmmmmm. ",307);
			link("I like them now. ",306);
			link("No, I'm here against my will just because they blackmail me! ",303);
			if(mile.slut > 6)link("I love being their cumdump! ",304);
			link("No, I'm still extremely angry at them and hate being here! ",305);
			break;
			
		case 303: 
			pet("But that's horrible! You shouldn't be blackmailing poor Katarína! ")
			kat("That what I told them! ");
			pet("It only could end badly for you! ");
			kat("That what I told them too! ");
			txt("The nerds were perplexed, not sure whether we are joking or not. I was not either. Did he think I am AI or a real person? "+NAME.pet+" just smiled: ");
			pet("Anyway, have fun! ")
			link("The Party",307);
			break;
			
		case 304: 
			txt("Fuck this! I will not do this halfway. Everybody should see that I am just a sex-obsessed program made by some creeps! ");
			pet("Wow. I haven't seen that coming. Our perfect Katarína is now a mere cumdump for a bunch of nerds? ");
			kat("Yeah, I'm a submissive nympho slut! ")
			qaa("She loves it. ");
			qbb("She always was, she just stopped pretending. ");
			pet("Cool. Anyway, have fun but remember: no public gangbangs, at least not before midnight. I don't want you to offend my other guests! ");
			txt("He winked at us. He knew I was an AI, right? He had to know that! Or did he? Fuck! ");
			link("The Party",307);
			break;
		
		case 305: 
			txt("I decided to be completely honest. ");
			pet("That's awful! You don't have to be here if you don't want to. ");
	//TODO base on someht
			if(mile.burned || mile.qaa < 3){
				qaa("Nah, she'll be fine, won't you, "+NAME.kat+"? ");
			}else{
				qaa("Come on, "+NAME.kat+", it won't be so bad? ");
			};
			kat("I guess... ");
			pet("Great! Have fun! ");
			link("The Party",307);
			break;
			
		case 306: 
			pet("That's awesome to hear! I'm happy you finally found some common ground. ");
			qaa("Yeah, we convince "+NAME.kat+" to change her opinion about us. ")
	//TODO
			kat("Hmmmm. They did. ");
			pet("Well, I won't ask how but I'm glad it worked! Have fun! ");
			link("The Party",307);
			break;
			
		case 307: 
			txt("The nerds enjoyed being in the center of attention for a change, not ostracized to the periphery where they belonged. I was an entertaining novelty and everybody was interested in how they created a bot based on "+NAME.kat+" and how I work. ");
			npc_set([1,"Mike"],[2,"Tom"],[3,"Zoly"])
			if(mile.partyAIdress>2){
				npc(1,"You make her dress this way? ");
				qaa("No, she decided to dress this way herself! ");
				if(mile.slut>9 && mile.partyAIdress>3){
					txt("Well, what other such a good excuse to wear such whorish clothes on public I ever get?   ")
				}else{
					txt("Damn, I did, did I not? Maybe I should have picked something less revealing? ");
				}
			};
			
			if(mile.burned){
				npc(1,"Did you change her personality in any way? She was pretty lose the last time. ");
				qaa("Not at all! Our program only analyzed her behavior and core values and found out "+NAME.kat+" is a complete slut who is only barely able to suppress her natural promiscuity. ");
				npc(3,"That makes sense! ");
				txt("I was stunned by the way he talked about me! ");
				
				link("I'm not a slut! ",308);
				link("Find a different group to not have to listen "+NAME.qaa+". ",309);
			
			}else if(mile.gf){
				txt("At last "+NAME.qaa+" did the bare minimum to defend me. ");
				npc(1,"So the AI is an even bigger slut than the real "+NAME.kat+"? ");
				qaa("I don't think the real "+NAME.kat+" is a slut! Being hot and outgoing doesn't make her slut! Saying that is very unfair to her! ");
				
//TODO ASAP
//DEFENDS HER
			}
			
			
			link("Next",309);
			break;
			
		case 308:
			if(mile.sub<1){
				kat("I'm not a slut! ");
				txt("I feebly protested which made everybody laugh. ");
			}else{
				kat("I'm not a slut! ");
				txt("I sharply retorted but my tantrum just made everybody laugh. ");
			};
			link("Find a different group. ",309);
			
			break;
			
		case 309: 
			npc(1,"So, is she fully functional? ");
			txt("Mike asked with a sleazy smile. He pointed at me but addressed "+NAME.qcc+" without giving me a second glance. ");
			qcc("Yeah! It could be said she is! The heuristic allows her to react to any possible situation. ");
			npc(1,"I meant <i>down there</i>. Or is she just a smooth doll? ");
			if(mile.qaa>3){
				qcc("Ehh...");
				txt("He looked at me, he seemed as uncomfortable with the new topic as I was. ");
				qcc("Well, she isn't a smooth doll, but discussing any further details would be... ungentlemanly. ");
				npc(1,"Who cares, she's just a bot! ");
				qcc("She's not <i>just</i> a bot! ");
				txt("He had the decency to defend me at least a little. ")
			}else{
				qcc("No, of course not! She is... ");
				txt("He sleazily chuckled: ")
				qcc("Fully functional even in this area. However, while we had literally thousands of pictures and hours of video content for her face, behavior, movement and figure in general, we had to interpolate a bit in this area. ");
				txt("He was immersed in technical details without realizing how creepy he sounded. I was just standing there absolutely speechless. They were discussing the shape of my vulva right in front of me without even caring I am standing there!" ); 
				qcc("But based on her phenotype and some reference models I think we got pretty close to the actual thing.  ");
				npc(1,"Cool! ");				
			};
						
			
			link("Try to sneak away. ",310)
			break;
		
		case 310: 
			txt("Oh no! "+NAME.eva+" accompanied by "+NAME.sas+" noticed me. I vainly hoped they maybe will not be here but they could not miss any fun. ");
			sas("Hello "+NAME.kat+"! Are you "+NAME.kat+"? Is she "+NAME.kat+"? ");
			txt(""+NAME.sas+" looked at "+NAME.eva+". "+NAME.eva+" shrugged. What the hell? Obviously, I was the AI and they should recognize that!  ");
			eva("Do you enjoy getting gangbanged by those creeps every day? ");
			txt(""+NAME.eva+" asked with a mischievous grin. ");

			link("...yeah? ",311);
			link("Yes, of course! ",311);
			link("Yeah, I absolutely love it to be hardly pounded by them! ",311);
			link("No! ",312);
			link("Fuck NO! ",312);
			break;
		
		case 312: 
			sas("So she's not the AI? ");
			eva("Maybe she's programmed to not enjoy it. ");
			sas("Or maybe they gangbang her only every other day? ");
			eva("Yeah, that could be true. ");

			if(mile.boobs > 1){
				if(mile.boobs > 2){
					sas("But look at her monstrous tits! "); 
					eva("I see. Those creeps overdo it a bit. "); 
				}else{
					sas("But look at those tits! ");
					eva("I see. Those creeps a bit improved her! "); 
				};
			}else{
						
			};
			//TODO

			txt("From the way they nonchalantly bad-mouthed me it was obvious they believe I am the bot. I was not sure how to feel it. Was my acting so good? Or was AI so perfect it was indistinguishable from me? Or were they so stupid? And the shameless way they were talking about me when they thought I was not there! Even "+NAME.sas+" was joking about me! ");

			sas("Poor "+NAME.kat+"! ");
			eva("To be honest, she kinda deserved this. ");
			txt(""+NAME.sas+" shrugged and did not even tried to defend me, she just agreed with everything "+NAME.eva+" said. ");
			sas("Well, I guess you're right. Did I tell you she kissed me? ");
			eva("What? Really? Are you lesbians now? How cute! ");
			sas("NO! At least not me, definitely. I'm not sure about "+NAME.kat+"... ");
			txt("I hesitated whether to interrupt their gossiping or to run away but "+NAME.eva+" solved it for me: ");
			eva("What are you still going here? Hush! Go back to your creators! "); 

			link("Next",320);
			break;
			
			
		case 311:
			sas("So she's their AI, not "+NAME.kat+"? ");
			eva("Dunno, the real "+NAME.kat+" is hanging out with them a lot lately. Who knows? ");
			txt("She chuckled. I did not violently assault her only because I knew this was virtual reality and any damage I would do would not be permanent. ");
			eva("Tell us more! Do they like take turns? Or do they fuck you all at the same time? ");

			if(mile.slut < 3){
				kat("I guess it varies... ");
				txt("I answered ambiguously, I had no idea what to say. My face was red, I was seriously ashamed and humiliated by discussing this! "+NAME.eva+" reveled in all the nasty details. ");
			}else{
				if(mile.sub < 2){ //TODO
					kat("I meant I would enjoy being gangbanged by them, however, there were no actual gangbangs so far. My masters are unfortunately so pathetic they either can't get hard or instantly came when they see me in my underwear. ");
					txt("I really enjoyed bad-mouthing them. ");
				}else{
					kat("All the possible configurations! They love to spitroast me and getting involved in all kinds of weird and twisted fetishes! I can't get enough of their cocks! ");
					txt("My intention was to depict the nerds as dangerous sexual deviants and gain some sympathy from the girls. However, "+NAME.eva+" looked rather excited. ");
				};
				
			}
			

			
			sas("Poor girl! ");
			eva("To be honest, "+NAME.kat+" kinda deserved this. ");
			txt(""+NAME.sas+" shrugged and did not even tried to defend me, she just agreed with everything "+NAME.eva+" said. ");
			sas("Well, I guess you're right. Did I tell you she kissed me? ");
			eva("What? Really? Are you lesbians now? How cute! ");
			sas("NO! At least not me, definitely. I'm not sure about "+NAME.kat+"... ");
			txt("I hesitated whether to interrupt their gossiping or to run away but "+NAME.eva+" solved it for me: ");
			eva("What are you still going here? Hush! Go back to your creators! ");

			link("Next",320);
	
			break;
			
			
			
		case 320:
			mile.partySaved = 0;
			if(mile.qaa>4){
				mile.partySaved = 1;
			}else if(mile.qcc>3){
				mile.partySaved = 3;
			}else if(mile.qaa>3){
				mile.partySaved = 1;
			}else if(mile.qcc>2){
				mile.partySaved = 3;
			}else if(mile.qaa>2){
				mile.partySaved = 1;
			}else if(mile.qcc>1){
				mile.partySaved = 3;
			};
			
			
			//npc_set("Tom");
			txt("I ran far away that bitches but unfortunately straight into "+NAME.qbb+". ");
			qbb("Oh, here are you! Come here! ");
			txt("I reluctantly went to him. ");
			tom("Wow, does she do everything you tell her? ");
			qbb("Yeah, she's very obedient, aren't you? ");
			if(mile.sub > 3){
				kat("Yes, I'm very obedient. ")
			}else{
				txt("I only gave him a deadly glance. ")
			};
			tom("Like absolutely anything? ");
			qbb("Yeah! Absolutely anything! What would you like to try? ");
			tom("Can I like.. dunno... grab her tits? ");
			qbb("Yeah! Go ahead! ");
			txt(""+NAME.tom+" with a confident smile squeezed my breasts. ");
			
			link("Slap him. ",321);
			link("Let him grope you.",330);
			break;
			
		case 321:
//TODO
			
			mile.sub--;
			tom("Ahhh! ");
			txt("His face was red, I was furious and stroke him as hard as he deserved. But to my surprise, he started laughing. ");
			tom("Wow, she's perfect! You're geniuses! This is exactly how would the real "+NAME.kat+" react! ");
			qbb("Of course! ");
			tom("But she isn't very obedient and respectful! ");
			qbb("Oh, she is. You just need to be firm and punish her if she isn't. Hey slut, show us your tits! ");
			link("Show tits. ",322);
			link("Refuse. ",323);
			break;
		
		case 322: 
			mile.sub++;
			mile.partyEnding = 2;
			txt("He mentioned a punishment which made me wary. So I decided to follow his outrageous demand. ");
			txt("I loosened my dress and give all those assholes a flash of my bare breasts. ");
			qbb("Good girl! ");
			txt(""+NAME.qbb+" commended me. ");
			
			if(mile.partySaved == 1){
				qaa("What are you doing?!? ");
				txt(""+NAME.qaa+" walked by and noticed how I was exposing myself. ");
				qbb("The bot is showing us her tits. ");
				qaa("That might be enough! Stop it, "+NAME.kat+"! ")
				txt("He ordered me and dragged me away. ");
				link("Leave the Party. ", 500);
			}else if(mile.partySaved == 3){
				qaa("Hey, what are you doing?!? ");
				txt(""+NAME.qcc+" just arrived. I gave him a desperate pleading look. He hesitated for a moment. ");
				qaa("I think... I need "+NAME.kat+" for myself... for a moment... apologies... ");
				txt("He grabbed me by my arm and dragged me out of the protesting crowd. ");
				link("Leave the Party. ", 500);
			}else{
//TODO
				link("Leave the party.",null, () => set.chapter("Third Weekend",100,"weekend2") );
				
			};
			break;
			
		case 323:
			WARDROBE.showLess(1,-1);
			mile.partyEnding = 1;
			mile.sub--;
			kat("Go fuck yourself! ");
			qbb("Well, you have only yourself to blame! ");
			txt("My dress was suddenly gone! I quickly crossed arms to cover my tits. The crowd burst loudly laughing. ");
			txt("I tried to leave or to conjure some other clothes but he somehow blocked all my commands. ");
			kat("What the hell are you doing! Give me my dress back! ");
			qbb("Eh... how do you show your gratitude if I do? " );
			kat("Fuck you! ");
			txt("I stormed off, hopping "+NAME.qaa+" or "+NAME.qcc+" would be able to override whatever he did. ");
			
			link("Find "+NAME.qaa+"",324);
			link("Find "+NAME.qcc+"",325);
			break;
			
		case 324: 
			if(mile.gf){
				mile.partySaved = 1;
				qaa("Why the hell are you naked, "+NAME.kat+"! ");
				txt(""+NAME.qaa+" snapped at me. ");
				if(mile.sub>0){
					kat(""+NAME.qbb+" took my dress! Please, do something! ");
					txt("I begged. ")
				}else{
					kat(""+NAME.qbb+" took my dress! Do something! ");
					txt("I ordered. ")
				};
				qaa("Sure, "+NAME.kat+". ");
				link("Leave the Party. ", 500);
			}else{
				qaa("Why are you naked, "+NAME.kat+"! ");
				kat(""+NAME.qbb+" took my dress! ");
				qaa("Okay. ")
				kat("Just okay? Do something! ");
				qaa("Why? I'm sure he had a good reason! ");
				kat("Damn you! ");
				link("Find "+NAME.qcc+"",325);
			//	link("Find "+NAME.pet+"",326);
			};
			break;
			
		case 325: 
			if(mile.qcc>2){
				mile.partySaved = 3;
				qcc("What is going on, "+NAME.kat+"! ");
				txt(""+NAME.qcc+" was puzzled. ");
				if(mile.sub>0){
					kat(""+NAME.qbb+" took my dress! Please, help me! ");
				}else{
					kat(""+NAME.qbb+" took my dress! You have to help me! ");
					txt("I demanded. ")
				};
				qcc("Well... okay.");
				
				link("Leave the party. ", 500);
			}else{
				qcc("What is going on, "+NAME.kat+"! ");
				txt(""+NAME.qcc+" was puzzled. ");
				if(mile.sub>0){
					kat(""+NAME.qbb+" took my dress! Please, help me! ");
				}else{
					kat(""+NAME.qbb+" took my dress! You have to help me! ");
					txt("I demanded. ")
				};
				qcc("Hmm...");
				kat("Come on! Don't be a dick! ");
				qcc("You have to kneel and ask me very nicely. ")
				
				link("Beg nicely on knees. ",326)
				link("Find "+NAME.qaa+". ",324);
			//	link("Find "+NAME.pet+"",326);
			};
			break;
			
		case 326: 
			mile.partySaved = 3;
			mile.sub++;
			txt("I could not stay half-naked for a moment longer! There was no time for dignity. ");
			txt("I dropped on my knees. ");
			kat("Pretty please, will you help me? ");
			qcc("But of course, dear "+NAME.kat+"! ");
			
			link("Leave the party. ", 500);
			break;
					
		case 330:
			mile.partyEnding = 3;
			mile.sub++;
			txt("I let him to molest me, roughly grope and knead my tits. I was forced to pretend I am just the bot, basically their helpless toy. ")
			tom("Wow, I prefer this "+NAME.kat+" way more than the original! She's a stuck-up tease!  ");
			qbb("Yeah! Everybody does! ");
			txt("That hurt! ");
			txt(""+NAME.tom+" was not only the one who wanted to feel my tits now when it was allowed. I was gradually groped by like a half dozen guys. ");
			
			
	//TODO
			
			
				
			if(mile.partySaved == 1){
				qaa("What are you doing?!? ");
				txt(""+NAME.qaa+" just arrived and he really did not like how was everybody touching me. ");
				qaa("Let "+NAME.kat+" be! ");
				txt("He roughly grabbed me by my arm and dragged me out of the crowd. ");
				link("Leave the party. ", 500);
			}else if(mile.partySaved == 3){
				qaa("Hey, what are you doing?!? ");
				txt(""+NAME.qcc+" just arrived. I gave him a desperate pleading look. He hesitated for a moment. ");
				qaa("I think... I need "+NAME.kat+" for myself... for a moment... apologies... ");
				txt("He grabbed me by my arm and dragged me out of the protesting crowd. ");
				link("Leave the party. ", 500);
			}else{
				txt("It was absulutely horrible. Both "+NAME.qaa+" and "+NAME.qcc+" were aware of what was going on but none of them cared. I was saved only by "+NAME.pet+" who liked a bit of debauchery at his parties but not too much. ");
				pet("Leave that poor bot be! You're acting like animals! You should be ashamed! And especially you, "+NAME.qaa+", "+NAME.qbb+" and "+NAME.qcc+"! ");
				txt("They all looked very ashamed. ");
				pet("Are you okay, "+NAME.kat+"? ");
				if(mile.sub>0){
					kat("Yeah... thank you...");
					txt("He looked a bit concerned. ");
					pet("Is everything okay? ");
					kat("Yeah! Don't worry! ");
					pet("Okay...");
					
				}else{
					kat("Of couse! ");
					txt("I angrily snapped. He smiled. ");
					pet("Great!");
				};
				
				txt("I decided to finally leave the party. After "+NAME.pet+"'s reprehension, none of the nerds dared to stop me. ");
				link("Leave the party.",null, () => set.chapter("Third Weekend",100,"weekend2") );
				//TOOD
				
			};
			
			
			break;
			
			
			case 500:
					WARDROBE.showAll();
					
					let defender = 0;
					let defender_2 = 0;
					let accuser_2 = 0;
					let crime = 0;
					
					if(mile.partyEnding == 1){
						crime = "punished her by taking away her dress"
					}else if(mile.partyEnding == 3){
						crime = "let few guys touch her"
					}else if(mile.partyEnding == 2){
						crime = "ask her to show her tits to few guys"
					};

					if(mile.partySaved == 3){
						defender = 3;
						if(mile.gf){
							defender_2 = 1;
						}else{
							accuser_2 = 1;	
						}
					}else if(mile.partySaved == 1){
						defender = 1;
						if(mile.gaa > 2){
							defender_2 = 3;
						}else{
							accuser_2 = 3;	
						}
					};
		
					
					if(defender == 3){
						txt("We met again, for the debriefing. "+NAME.qcc+" looked uneasy: ");
						qcc("Don't you think this went too far?!? ");
					}else if(defender == 1){
						if(mile.gf > 2 || mile.qaa > 4){
							txt("We met again, for the debriefing. "+NAME.qaa+" was furious: ");
							qaa("This went too far!!! ");
						}else{
							txt("We met again, for the debriefing. "+NAME.qaa+" was frowning: ");
							qaa("Don't you this went too far!?! ");
						}
						
					};

					if(defender_2 == 1){
						qaa("Yeah! What the hell! You shouldn't make "+NAME.kat+" do that! ");
					}else if(defender_2 == 3){
						qcc("Yeah, that was a bit too much! ");
					};

					qbb("I didn't do anything wrong! She wasn't hurt in any way and everybody thought she was the AI! ");

					if(accuser_2 == 3){
						qcc("Yeah, he just "+crime+". No big deal. ");
					}else if(accuser_2 == 1){
						qaa("Yeah, he just "+crime+". No big deal. ");
					};

					if(defender == 3){
						qcc("It was very unfair and humiliating to make her do that! ");
					}else if(defender == 1){
						qaa("It was very unfair and humiliating to make her do that! ");
					};

					kat("Yeah! What the fuck is wrong with you! ");

					if(defender == 1){
						qcc("Shut up, "+NAME.kat+", we are talking!. ");
					}else if(defender == 3){
						qaa("Shut up, "+NAME.kat+", we are talking!. ");
					};


					if(defender_2){
						qbb("You're too nice on her! "+NAME.kat+" got you both wrapped around her finger! You know how manipulative she is! She flirts with you and pretends to be your friend but laughs behind your back how stupid you are! ");
						if(mile.gf){
							qaa("You're paranoid and jealous! ");
							if(mile.qcc>3){
								qcc("Yeah, "+NAME.kat+" isn't so bad! ");
							};
						}else{
							qcc("Even "+NAME.kat+" doesn't deserve to be treated this way! ");
							if(mile.qaa>3){
								qaa("Yeah, she doesn't! ");
							};
						};
						qbb("Are you thick and blind?! Remember, once you'll regret you ever trusted her!  ")
						qaa("Why you just don't admit you messed up? ")
						qbb("Because I didn't! ");
						
					}else if(defender == 1){
						qbb("You're not able to think straight! "+NAME.kat+" knows you have a crush on her and exploits that! She flirts with you and lies to you and you're falling for everything! She doesn't give a fuck about you! ");
						qcc(""+NAME.qbb+" is right, you always approached "+NAME.kat+" too uncritically and defended her even when she didn't deserve that! ");
						qaa("You're paranoid and jealous! "+NAME.kat+" would never try to trick me! ");
						qbb("Don't be stupid! ");
						qaa("Fuck you both! ")
					}else if(defender == 3){
						qbb("You're too nice on her! You're too weak and susceptible! Don't fall for her manipulation and fake remorse! She doesn't care for you! ");
						qaa("How many times she tried to humiliate you?!? Do you think that if the situation was reversed, she would have any mercy? No, she would love to see you suffer! ");
						kat("I wouldn't! I would never- ");
						qbb("Shut up, "+NAME.kat+"!");
						qcc("Yeah, I'm a wimpy dumbass who isn't able to think for himself! Fuck you both! ");
					};
					
					/*		
					if(mile.gf){
						qaa("You're paranoid and jelaous! ");
					}
					*/
					txt("The heated conversation continued for several more minutes. ")
					
					if(defender_2){
						txt("The evening was a dreadful experience, but all's well that ends well. ")
					}else{
						//
					};
					
					
					//link("Third Weekend",666);
					
					//link("Saturday.",null, () => set.chapter("Third Weekend",100,"weekend2") );
					
					//if(debug) 
						
					link("Saturday.",null, () => set.chapter("Third Weekend",100,"weekend2") );
					
				break;
			
			
			
			
			
			
			case 666:
				txt("Welcome back! :D ");
				link("Saturday.",null, () => set.chapter("Third Weekend",100,"weekend2") );
				break;
			
	}
}








