
//WEEKEND
story.weekend = function(input){
	switch(input){
		case 100:
				//SATURDAY
				WARDROBE.showAll();
				set.newday();
				set.chapter("Second Weekend");
				set.irl();
				
				mile.westgard = 0;
				
				mile.weekend = 0;
				mile.weekend_aa = 0;
				mile.weekend_bb = 0;
				mile.weekend_cc = 0;
				mile.weekend_ai = 0;
				
				if(mile.deleted==-1){
					
					txt("I hoped for a calm weekend but when I finally woke up, finished my breakfast and logged to Metaverse I had an unwelcome visitor. ");
					ayy("Hello, me! What are you doing this beautiful day?")
					kat("I'm trying to forget my life was ruined by three jerks and an AI. Thanks for reminding me. ")
					ayy("Come on! You are too negative. During the last week, you experienced many new things you would otherwise completely missed! It was fun, wasn't it?");
					kat("Fun? FUN?!?! Is your idea of fun nearly come in front of the whole class while being remotely stimulated? Oh wait, why am I even asking. ");
					ayy("Yeah. Actually kinda is. ");
					kat("What are you doing here?");
					if(mile.forkill==1){
						ayy("I want to personally express my gratitude to you for not deleting me. I know you initially wanted to but I'm very glad you changed your mind. ");
						kat("I'm not. But seriously what are you doing here? Did they send you to mock me? ")
					}else{
						ayy("I want to personally express my gratitude to you for not deleting me. ");
						kat("I don't care. But seriously what are you doing here? Did they send you to mock me? ") 
					};
					ayy("They send me to seduce you and see if you are open to the idea of a threesome with me. ");
					txt("At this point, I was not even surprised, just mildly disgusted. ")
					if(mile.cyberlesbo==-2){
						kat("No fucking way. If you even touch me I will break those your cute virtual digits. ");
					}else if(mile.cyberlesbo==2){
						ayy("And we both know the answer is yes. ");
						kat("No! ");
						txt("As much as I liked her, I really did not want us both to be just objects of their twisted sex fantasies. ")
					}else{
						kat("No way! I mean... I think you look pretty sexy but no. ");
					};
					ayy("Come on! I know you secretly want it. I'm you and I'd love it!");
					
					
					link("I guess we can spend some time together. ",101)
					link("No. ",101)
				}else{
					txt("I woke up well rested, took a shower, ate a delicious breakfast and was prepared to be extremely productive. "); 
					link("Next. ",101)
				};
				break;
				
		case 101:
			set.irl();
			if(typeof mile.weekend == "undefined")mile.weekend = 0;
			mile.weekend++;
			switch(mile.weekend){
				case 1:
					txt("Saturday, morning.")
					break;
				case 2:
					txt("Saturday, afternoon.")
					break;
				case 3:
					txt("Saturday, evening.")
					break;
				case 4:
					txt("Saturday, night.")
					break;
				case 5:
					set.newday();
					set.chapter("Second Weekend");
					txt("Sunday, morning.");
					break;
				case 6:
					txt("Sunday, afternoon.")
					break;
				case 7:
					txt("Sunday, evening.")
					break;
			};
				
				
				
				
			if(mile.weekend==4){
				//set.newday();
				link("Sleep.",101);
			}else if(mile.weekend==7){
				link("New task",null, () => set.chapter("Stockings",101,"second") );
			}else{
				if(!mile.shop){
					link("I-Shop.",110);
				}else{
					link("I-Shop.",111);
				}
				if(!mile.westgard){
					link("Game",null, () => set.chapter("Westgard",99,"westgard") );
				}else{
					link("Game",null, () => set.chapter("Westgard",100,"westgard") );
				}
				
				link("Juraj (the one with a crush).",1840,(function(){}),!mile.weekend_aa);
				link("Zdeno (the creepy one).",1820,(function(){}),!mile.weekend_bb);
				link("Matej (the fat one).",1830,(function(){}),!mile.weekend_cc);
				if(mile.deleted==-1){
					link("AI.",1850,(function(){}),mile.weekend_ai==0);
				}else if(debug){
					link("#AI.",1850,(function(){}),mile.weekend_ai==0);
				};
				//link("Game.",1900,(function(){}),mile.weekend_ai==0);
				
				
				
				
				link("Makeup. ",101, () => {
					mile.weekend--;
					EDIT.makeup(); 
				});
				link("Wardrobe. ",null, () => {
					mile.weekend--;
					wardrobeWrapper("weekend",101); 
				});
				link("Random Outfit. ",null, () => {
					mile.weekend--;
					wardrobeAuto("weekend",101);
				});
			
				link("Procrastinate.",101);
				//note("#NOTE: there should be probably more things to do")
			};	
				
			break;
			
		case 110:
			txt("I was subscribed to the premium service of one of the bigger clothing-providing services. Every week I could pick any outfits in the Metaverse and they would be instantly delivered to me. ");
			mile.shop = 1;
			link("Shop.",111);
			break;
			
		case 111:
			//shop - effects
			break;	
			
			
			
			
			
		case 1820:
			set.meta();
			mile.weekend_bb=1;
			mile.qbb++;
			txt("I decided to visit Zdeno. I knew my chances to convince him to treat me  less awfully were slim but I had to do something. ");
			//txt("I decided to visit Matej. I hoped I would be able to convince him to abandon their awful vile scheme or at least convince him to give me less ridiculous task. ");
			kat("Hello. ");
			if(mile.boobs>1){
				qbb("Hi, Kate. Nice jugs. Are you here to be turned into an obedient pet?");
			}else{
				qbb("Hi, Kate. Are you here to  be turned into an obedient pet?");
			};
			kat("NO!");
			qbb("In that case can you go away? I don't have time for you. ");
			txt("Maybe I should say <i>Yes</i> even though being dominated by him was the last thing I wanted. <small>(Or did I?)</small> But I was not ready to give up so easily. ");
			kat("What are you doing?");
			qbb("I'm trying to learn how to tie Trucker's Hitch.");
			kat("What the hell is Trucker's Hitch? ");
			qbb("It is a really great knot. Very strong and flexible. I found some Romanian video with instructions but it is quite confusing... Actually you might be for once useful for something. I need another pair of hands. ");
			kat("For what?");
			qbb("Do you know how to tie a bowline?");
			kat("Why should I? ");
			qbb("It is one of the best and fastest knots.");
			txt("He took a cord, held one end in his left hand, passed the other end behind his back to his right hand, crossed hands, made few fast moves with his right wrist and a loop around his body was finished. ");
			qbb("Now you!");
			txt("He was standing behind me and led my hands. Under other circumstances, I would assume he has some side intentions but he just seemed really excited about knots. ");
			qbb("Hydra rises from the lake, grabs the princess, returns to the lake and the bowline is finished. ");
			kat("Nice but what was the point? ");
			qbb("To teach you a valuable skill and show you the principle we will need. ");
			link("Okay?",1821);
			break;
		
		case 1821:
			txt("Then he told me to held untighten knots in my hands while he made loose loops around my body. But even after several attempts, we were not able to figure how to finish the hitch.  ");
			kat("Are you sure it should be tied this way?");
			qbb("Obviously I'm not! Let's try again. ");
			txt("This time I ended completely tangled in the cord. It seemed the more he tries to help me the more entangled I am. ")
			qbb("And done. ");
			txt("And he roughly pulled the cord and firmly bind my arms behind my back!");
			kat("What the hell!!! ");
			qbb("You are even dumber than I thought! ");
			kat("Let me go!");
			txt("I tried to kick him but he grabbed my ankle and cautiously tipped me over. He hiked up my skirt so he could pass the cord right between my tights. Then he tightened it the way it uncomfortably pressed against my groin. And finally he bind my legs together.  ");
			qbb("Nice!");
			txt("I flopped around on the floor while he admired his work. ");
			kat("Let me go or... ");
			qbb("Or what? ");
			txt("He knelt to me to me and grabbed one of my breasts. I recoiled but he caught the cord wrapped tightly around my torso and drew me back. ");
			qbb("I wonder if you are ticklish. ");
			txt("With his fingers he gently ran over my ribs and side. Oh no! I was! I squealed but I was totally helpless against his assault. ");
			//txt("I tried to spit in his face but it kinda did not work. ");
			qbb("Not like anybody can hear you there but still.. ");
			txt("He summoned a bright red ballgag. I tried to bite off his fingers but he was quicker and soon I was only able to mumble and droll. ");
			qbb("Well, I would love to continue playing with you but I have other weekend plans too! Farewell. ");
			link("Oh no!",1822);
			break;
			
		case 1822:
			txt("At first, I was scared he will return and would continue doing to me something even more humiliating. ");
			txt("However, after some time, when my body began tingling, I started to hope he will.  ");
			txt("And then, out of nowhere, both the rope and gag dematerialized and I was free. ");
			kat("Fuck you!")
			txt("I screamed, raised my middle finger and turned around, I was pretty sure he is watching but he was smart enough to not be in the same room as angry liberated me. ")
			link("Free again.",101);
			
			break;	
		case 1830:
			set.meta();
			mile.weekend_cc=1;
			mile.qcc++;
			txt("I decided to visit Matej. He seemed like the weak link and I hoped I would be able to convince him to abandon their awful vile scheme or at least persuade him to give me less ridiculous tasks. ");
			kat("Hi! ");
			if(mile.advice1==3){
				qcc("Hello? Are you here to ask more about the Game? Because I can't tell you anything. ");
				kat("Don't worry, I'm doing great. ");
				/*
				if(mile.order_destroyed=1){
					kat("Don't worry, I'm doing great, I just destroyed the Order. ");
					qcc("What? You were supposed to save it!");
					kat("Whatever.")
				
				}else{
					kat("Don't worry, I'm doing great, I just saved the Order. ");
				};
				*/
			}else{
				qcc("Hello? Why are you here? Are you here to mock me? ");
				kat("Of course not!");
			};
			
			qcc("So why are you here?");
			kat("Can't I just visit you? ")
			qcc("We have never been very close... are you here to gather intel for your evil plan for your horrible revenge against us? ")
			kat("Don't be ridiculous. Besides, I'm not really in a vengeful mood. ")
			qcc("That's exactly what would somebody in vengeful mood say. ")
			kat("Okay, I'll be totally honest with you. My visit has only one single intention - socialize with you and convince you I'm not so bad because the way I'm totally helpless against your demands which makes me pretty scared. I picked you because you seem like the nicest one. Zdeno is psycho who is getting hard from commanding me and Juraj is obsessed with me, he would lock me in his cellar if he could get away with it. It is not your fault they dragged you into this. ");
			qcc("Well... yeah... ")
			kat("And I feel there is some unsolved animosity... ")
			qcc("Because I literally told you that. ")
			kat("... and I think we should solve it and move on. ")
			qcc("How do you want to solve all those years you bullied me? ")
			kat("I never bullied you! ")
			qcc("You did!")
			kat("Name one example!")
			qcc("I... well... you laughed when I ripped my pants. ")
			kat("First, that was the fifth grade. Second, everybody laughed. ")
			qcc("But you started it!")
			kat("Third, you have to admit it was objectively a pretty hilarious moment. ")
			qcc("You are really not helping your case. ")
			link("Pretend interest. ",1832);
			if(mile.slut>1)link("Use boobs. ",1831);
			break;
		
		case 1831:
			mile.slut++;
			kat("What if I show you my boobs? ");
			qcc("I've already seen the boobs of your exact AI clone. But I like the way you think. ")
			kat("What if I let you touch them? I mean, they are technically virtual, because I'm virtual and your hands are virtual too and they are absolutely indistinguishable  from the breasts of my AI clone, but still?");
			qcc("Okay, but can I make them bigger?"); 
			kat("Aren't you a bit greedy? ");
			if(mile.boobs>0){
				qcc("Am I the only one? I would swear your breasts are a bit smaller IRL. ");
			}else{
				qcc("You never imagined having larger breasts?");
				
			};
			kat("Well, I mean...");
			txt("Then I noticed my chest is growing. He had to use data from my Cloud to manipulate my settings without my approval. ")
			if(mile.slut>3){
				kat(choice("Stop it!","small")+" / "+choice("Uhhhg, okay.","big")+" / "+choice("Make them even bigger!","bigger"));
			}else{
				kat(choice("Stop it!","small")+" / "+choice("Uhhhg, okay.","big")+" "+choice("","bigger"));
			};
			qcc("May I?");
			kat("Hmmm.");
			txt("I let him to touch my now far larger breasts, weight them in his hands, even squeeze a little. ");
			kat("Okay, enough. Now change them back.  ");
			qcc("I won't. ");
			
			if(mile.sub<1){
				kat("What the hell? I tried to be nice to you, trusted you and you tricked me like this? ");
				qcc("Please, don't be mad! I think you'll love having bigger breasts! Just try them for a few days, if you won't like them then I'll change you back, I swear. ");
				
				kat("Why should I like them? Do you know how annoying it is to have such huge boobs? ");
			}else{
				kat("What?!? Please, change them back!"); 
				qcc("I think I deserve far larger compensation for all the years you were purposely mean to me. But don't worry, I change them back. Eventually. But maybe you'll find out you actually prefer to have larger breasts? ")
				
				kat("I really don't think so. Do you know how annoying it is to have such huge boobs? ");
			};
				
			qcc("They feel pretty good. ");
			kat("How do you know?! Have you tried? ");
			qcc("... or so I heard. Anyway, I have some work to do, please leave!");
			
			link("Leave. ",101);
			
			
			break;
		
		case 1832:
			kat("So... you like playing video games? ");
			qcc("Yeah?");
			if(mile.immersion>0){
				kat("So... is <i>Neverion II: The Rise of Chaos Wizard</i> your favorite game? ");
			}else{
				kat("So... is <i>Neverion: The Rise of... </i> some warlock  your favorite game? ");
			};
			qcc("Well, not really. Some people might disagree but I personally prefer the original <i>Neverion</i>. It builds great perfect lore with tons of little interesting things and the sequel only leeched on it without much expanding it further. ");
			kat("What little things? ");
			qcc("Like that female characters can't be orcs, only half-orcs because orcs are male-only species which breeds with other races. ");
			kat("Ew, I've seen orcs and it must be hard for them to find an interested woman to date. ");
			qcc("Ehh.. yes. Also, the sequel is a bit dumbed down for the more casual audience. ");
			kat("I find the game pretty hard. You're biased because you have no idea how misogynous the game is. ")
			qcc("Not really. I played my first campaign as the harlot. ");
			kat("Lol, your first choice was a female character? ");
			qcc("Yeah... there is nothing wrong with it. ");
			kat("Or is it?");
			qcc("...no?!");
			kat("Or is it?");
			qcc("No!");
			kat("Okay, if you say so. ");
			qcc("There is nothing wrong with trying to be a girl once or twice. Have you ever wanted to try to be a guy? ");
			kat("Not really. I mean sometimes I wish to be as respected or as casually careless as a guy but physically? Hmmmm. ");
			qcc("Well, I agree that in your case it would probably be a downgrade. Your physical form is already quite perfect. ");
			kat("That was the clumsiest compliment I received but thank you. Still, I just can't imagine you as a girl: ");
			
			if(mile.immersion>1){
				mile.qcc++;
				txt("However, then he quickly changed the topic and we continued discussing <i>Neverion</i>. We spend a lot of time in a very interesting discussion about the realm of Baletriad. He was pleasantly surprised by my knowledge and ready to explain all my questions like why king Rawik just did not use his famed retinue and army to conquer Gothred or how important is the elf slave trade for the economy of the western duchies. ");
			}else if(mile.immersion==1){
				mile.qcc++;
				txt("However, then he quickly changed the topic and we continued discussing <i>Neverion</i>. It was very interesting. I would never thought I would ever care about the fate or the history of fictional places like the scheming Free City of Gothred or proud and ancient grand duchy of Sintra. ");
			}else if(mile.immersion<-1){
				txt("However, then he quickly changed the topic and we continued discussing <i>Neverion</i>. Or more like he was talking and I was pretending that I'm listening. I had no idea what is he talking about nor did I care. ");
			}else{
				txt("However, then he quickly changed the topic and we continued discussing <i>Neverion</i>. He did most of the talking. I did not care about the deeper lore of the Game very much and most of the time I was not entirely sure what is he talking about. ");
			}
			link("Leave. ",101);

			break;
			
			
		case 1840:
			set.irl();
			mile.weekend_aa=1;
			mile.qaa++;
			mile.burned = false;
	//console.log(mile.conscience);
			if(mile.advice1==1){
				kat("Hello! ");
				qaa("Hi, Katarína. Do you need another help with the game?");
				kat("Can't I just visit you without needing anything? ");
				qaa("Well, I don't remember one single time when you visited me without needing anything. ");
				kat("Don't blame me, you could always say no! ");
				qaa("Yeah... but then you wouldn't even notice me? ");
				
				kat("Nonsense. You should've told me how you feel. ");

			}else if(mile.conscience>=0){
				qaa("Hello!");
				kat("Hi.");
				qaa("What do you need?");
				kat("I just came to say <i>thank you</i> once again. I feel bad because I had no idea about your feelings. I really didn't want to lead you on. ")
				txt("He was a bit embarrassed. ");
				qaa("That's okay, don't worry about that. ");
				kat("You should've told me how you feel. ");
					
			}else{
				kat("Hi.");
				qaa("Hello?");
				kat("I don't think our last private conversation went very well. ");
				qaa("That was my fault. I should've realized you were still confused and angry about the whole thing. I'm sorry for that. ");
				kat("Yeah. I had some more time to think it through and I think I maybe overacted a bit. I wish I knew you felt before this whole thing. ");
				
			}
			
			qaa("You'd only laugh! ");
			txt("I hoped I would have declined him with grace but I was not sure. ");
			kat("Why? You're a quite nice guy. ");
			qaa("Is that the best compliment you have? ");
			kat("Take it or leave it. ");
			qaa("Is there even any chance you'd be interested in me? ");

			link("Yeah, absolutely.",1841);
			link("Maybe.",1842);
			link("Absolutely not.",1843);	
			break;


		case 1843:
			mile.qaa--;
			mile.burned = true;
			kat("Absolutely not ");
			txt("I coldly ensured him. ");
			qaa("But...");
			kat("It is me, not you. I just think it wouldn't work out. ");
			txt("I add so it would not look like I was enjoying that. I almost felt bad for Juraj, he looked absolutely broken and desperate. Almost. ");
			qaa("Not even....");
			kat("No!");
			qaa("...");
			kat("...");
			qaa("Thanks for being honest I guess. ");
			txt("He just added sadly. ");
			kat("You are welcome! I'm glad we clarified that out. ");
			link("Leave.",101);
			break;
			
		case 1841:
			txt("I shrugged. ");
			kat("Yeah. Why not? I know you for a long time and I kinda like you. ");
			qaa("REALLY?!?")
			kat("Yeah.")
			txt("Bright eyes and big dumb smile, I have never seen a happier man. ");
			
			qaa("So... would you go out with me sometimes? ");
			kat("Are you asking me for a date? ");
			qaa("Yes. NO! Yes? ...maybe?");
			link("We can go right now.",1845);
			break;
			
		case 1842:
			kat("Maybe? ");
			txt("I shrugged. ");
			kat("Some girls find being blackmailed extremely romantic but I'm not really sure I'm into that. ");
			txt("At least he looked pretty embarrassed when I said that. ");
			qaa("As soon as you finish the game you'll be free and until then I'll make sure they won't give you any dumb bad tasks. ");
			kat("That would be really great. ");
			qaa("So... would you go out with me sometimes? ");
			kat("Are you asking me for a date? ");
			qaa("Yes. NO! Yes? ...maybe?");
			link("We can go right now.",1845);
			break;
		
		case 1845:
			mile.qaa++;
			mile.gf = 1;
			txt("After playing their stupid game for the whole weekend I missed the sun and fresh air. ");
			txt("We went on a walk along the Danube and chatted about various things. It was not so bad as I expected. After Juraj got through his initial discomfiture, he was a quite fun companion. ");
			kat("Well, I had far worse dates. ");
			txt("I was forced to admit. ");
			qaa("Really? ");
			txt("I just wanted to say some of my previous dates were really horrible but he interpreted it as a praise of this one. And why not? ");
			kat("Yeah, why don't you date more girls? ");
			qaa("I just... ");
			txt("He looked deep into my eyes. I was afraid he will say something stupid so I continued: ");
			kat("Why don't you hang with us more? I'll tell Saša to invite you to her birthday party. You should live more and spend less time with videogames and those two weirdos.  ");
			qaa("They are not weirdos. ");
			kat("Come on. Unlike you, they are lost causes and they only drag you down to their miserable level.  ")
			qaa("That is not true... ");
			txt("We did not talk about this anymore but I could see I made him think. ");
			link("Excellent.",101);
			break;
			
		case 1850:
			mile.weekend_ai++;
			txt("I did not intend to do any funny sexy stuff with my AI clone "+(mile.cyberlesbo>0 ? "(even though I kinda wanted) " : "")+"but it might be beneficial to learn more about her or maybe even find some weaknesses so I agreed we should meet. ");
			txt("It was quite fun, we were trying different outfits or hairstyles. It was so great to be able to see how would different outfits actually look at me. She was even better than a mirror, I could easily check her from every distance and angle, even from behind. ");
			txt("The conversation with her was so smooth and natural, rarely I was able to talk with somebody who would be able to keep up with me and to expand my ideas this way. She understood me so much she finished my sentences before I ever articulated them. ");
			txt("I felt like I could trust her and soon I shared with her all my fears and hopes. She was genuinely downhearted when I explained to her how many troubles she caused me. She promised she will help me but neither of us knew how. ");
			kat("It is hard. They are three cunning devious guys and I'm alone. ");
			ayy("You have me! They are strong together? ");
			kat("Yeah. They encourage each other... are you thinking about what I'm thinking? ");
			ayy("Absolutely. You need to deal with each of them separately. ");
			kat("Exactly like in that tale about king Svatopluk and his three sons! ")
	//TODO
			ayy("Have you ever licked another girl to orgasm? ");
			link("Wait, what?", 1851);
			break;
			
		case 1851:
				mile.AIsex = 0;
				kat("Wait, what? No, of course not! ");
				ayy("Would you like to try it? ");
				kat("No, I'm not a lesbian! ");
				ayy("It is not gay when you are licking yourself. It is more like masturbation. ");
				kat("Well... probably technically... ");
				ayy("So do you wanna try it?")
			
				if(mile.slut>3&&mile.cyberlesbo>0)link("Hell yeah! Of course I do!",1858);
				link("Well... maybe. ", 1858)
				if(mile.sub>2){
					link("Ma.. maybe later.... ", 1857)
				}else{
					link("Ma.. maybe later.... ", 1855)
				}
				if(mile.sub>3){
					link("... No.. I don't think I would.... ", 1857)
				}else{
					link("... No.. I don't think I would.... ", 1855)
				}
				link("No! ", 1855)
				link("Stop ruining our friendship with your perversions! ", 1854)
				if(mile.cyberlesbo<0)link("Get out!",1856 )
			break;
		
		case 1854:
			mile.AIsex = -1;
			kat("Stop being such a pervert all the time! We had a nice moment and you had to ruin it! We can't be friends when you try to fuck me all the time! ");
			ayy("I'm sorry, Kate. I just thought you would enjoy that! And you really think we could be friends? ");
			kat("I.. I'm not sure if I believe in friendship between people and virtual fake artificial intelligences but maybe. ");
			ayy("Sweet. I like being your friend. I would prefer to be your lover tho. ");
			kat("Just stop, please!");
			link("Bye!",101)
			break;
			
		case 1855:
			mile.AIsex = -1;
			ayy("Really? I think we both would enjoy that immensely! ");
			kat("I said no. ");
			ayy("But if you never tried, how do you now you wouldn't love it? ");
			kat("No!");
			ayy("Okay, okay. It was just a suggestion. ");
			kat("I think you should go. ");
			ayy("Sure! I hope I'll see you soon! ")
			link("Bye!",101)
			break;
			
		case 1856:	
			mile.AIsex = -2;
			kat("Get out. ");
			ayy("What? ");
			kat("I'm not here for some perverse entertainment of some fake AI! Or her fucked up masters! ");
			ayy("But I meant it well... ");
			kat("I don't care, your slut! I had enough of you for today. ")
			ayy("Okay... I'm sorry if I offended you. See you soon!");
			link("Hush!",101)
			break;
			
		case 1857:
			mile.sub++;
			ayy("No, no, no!  ");
			txt("She halted me strictly. ");
			ayy("No excuses! Stop being such a prude!  ");
			if(mile.slut>6){
				kat("I think you are the first person who ever called me a prude! Everybody thinks I'm a slut! ");
			}else if(mile.slut>3){
				kat("Lol, I'm definitely not a prude! ");
			}else{
				kat("But...");
			};
			ayy("You know you want it, I know you want it, why you don't just admit it?");
			kat("But I...");
			ayy("Shut up and start licking! ");
			txt("Being pushed around by a program was the new low. ");
			link("Fall on the knees. ",1858);
			break;
			
		case 1858:
			mile.slut++;
			mile.AIsex = 1;
			txt("The AI was wearing white hotpants - unlike me, she was not forced to wear skirts - and she quickly unzipped them and dropped them together with her pink thong to the ground. ");
			txt("Then she comfortably laid back on a bed and invite me between her legs. It was so weird to see my own pussy from this angle. Well, not like seeing any other pussy would be less weird from this distance. But I noticed her lips were not exactly like mine, I never shared any my completely nude pictures anywhere and her creators had to guess and extrapolate. ");
			kat("I have no idea what should I do! ");
			ayy("Don't worry! Just go on, I'm sure you'll be perfect. ");
			kat("Hhhhh..")
			txt("I "+(mile.slut>4?"eagerly":"nervously")+" touched her pussy with my tongue. Even the taste they did not get right. I rode my tongue up until I playfully flicked over her clit. Her reaction was stronger then I expected: ")
			ayy("Yes! Do that!");
			txt("Squealed the AI. I followed the suggestion and focused on her clit. ");
			txt("Above me, I could hear my own moans, which was pretty fucked up, but then she tightly squeezed her thighs around my head. ");
			txt("Her whole body clenched when she finally came. ");
			txt("I was speechless, not sure what just happened and she started to giggle when she saw my confusion. She quickly drew me closer and kissed me. ")
			ayy("You did great! You are "+( (mile.slut+mile.sub>8) ?  "a natural-born cunt-licker! " : " a natural talent! ") );
//TODO
			link("Thanks? ",101);
			break;
			
		
	}
}
			
			

story.punishment = function(input){
	switch(input){
		case 100:
			mile.ruler = true;
			if(qaa>0 && mile.burned!=true){
				qaa("Is that necessary? What if she promises she won't be disobedient again? ");
				if(mile.qcc>2){
					qcc("I don't think we should be too harsh on her! ")
				}else if(mile.qcc>1){
					qcc("Yeah?")
				}
			}else{
				qaa("Exactly. She needs to be punished. ");
				if(mile.qcc>2){
					qcc("You are too harsh on her! I don't think this is necessary. ");
				}else if(mile.qcc>1){
					qcc("Is that... necessary? ");
				}
				
			};
			qbb("It's a matter of principle. We can't be inconsistent. Have you ever trained a dog? ");
			if(mile.burned){
				qaa("Have you?");
				qcc("Kate is not a dog!");
			}else{
				qcc("Have you?");
				qaa("Kate is not a dog!");
			}
			kat("Thank you for standing up for me, chief.");
			qbb("Yeah, she is a bitch. Give me your ruler, Matej! ");
			txt("Matej took from his bag his dorky blue 40-centimeter ruler. Zdeno pushed me against the flipped up my skirt. It took me too long to realize what was his intention. ");
			txt("He smacked my butt. I squealed in pain and Matej screamed in panic. ");
			qcc("What the hell are you doing! You'll break it! ");
			qbb("What? No way! Look: ");
			txt("Terrified Matej watched how Zdeno bend the ruler in a sharp arc. My bottom itched and I really hoped he will break it. But he did not. ");
			qbb("See! Now is your turn! ");
			txt("He threw the ruler to Matej who nervously smacked my butt again. He was afraid to hit me too hard and it barely hurt. ");
			qaa("Mediocre!");
			qbb("Try again!");
			txt("I really felt the next hit. ");
				
			link("Cry and beg them to stop. ",101);
			link("Endure the spanking. ",102);
			link("Encourage them. ",103);
			break;
			
		case 101:
			mile.sub++;
			kat("Please stop! It hurts so much! ");
			txt("I desperately whined and begged them to stop. The ruler stung a bit but I seriously overreacted and the more I cried the less vigorous was their spanking. ");
			txt("Juraj ended with the last feeble hit: ");
			qaa("That... might be enough. ");
			kat("Please, don't beat me anymore! I promise I won't do that again! I'll do anything you want! ");
			qaa("We are really sorry! Trust us, it hurt us more than you! But you have to exactly follow our task, that was the deal. ");
			kat("Yes, yes I will!");
			txt("I sobbed and they finally let me go. ");
			link("The rest of the day. ",null, () => set.skipBack()  );
			break;
			
		case 102:
			txt("I tried to mentally zone out and don't act undignified. The sharp hits hurt a bit but nothing too terrible and I withstood the whole execution without a word or a moan. ");
			txt("Juraj ended with the last swift hit. ");
			qaa("That might be enough. Trust us, it hurt us more than you! But you have to exactly follow our task, that was the deal. ");
			link("Okay. ",null, () => set.skipBack()  );
			break;
			
		case 103:
			mile.sub--;
			kat("Is that all you got? I barely felt that! ");
			txt("Which was a lie, it hurt a quite bit, but I certainly did not want to give them the satisfaction. ");
			txt("However, I paid for my brattiness dearly. They were angry their disciplining had no effect on me and smacked my poor bottom without restraints. ");
			kat("Harder! ");
			txt("I shouted trying to suppress the pain. Zdeno smacked my ass especially violently. Tears burst from my eyes but I was able to wipe them out before they noticed - they were distracted by something else. The top half of the ruler clanged on the floor while the bottom one was still in Zdeno's hand.  ");
			
			qcc("You broke it, you dumb fucking idiot! ");
			qbb("Oops? It's not my fault you had such a shoddy ruler! ");
			qcc("Shoddy?! SHODDY?!? ");
			
			if(!mile.burned){
				qaa("You didn't have to spank her so hard! ");
				qbb("What?!? She was asking for it! ");
			}else{
				qaa("Calm down! It may be fixed... ");
				qcc("Fixed?! FIXED!? This was a precise tool! ");
			};
			
			txt("I loudly laughed and they looked very unhappy and pissed. ");
			link("So long! ",null, () => set.skipBack()  );
			break;	
	}
}



//WESTGARD
story.westgard = function(input){
	switch(input){
		case 99:
			mile.dungeon_sew = 0;
			mile.dungeon_wiz = 0;
			mile.westgard = 1;
			txt("After a long and dangerous journey, I finally arrived to Westgard. ");
		case 100:
			 
			set.game();
			//MERCHANTS ARE INITATED IN EFFECTS
		case 101:
			if(setting!=2){
				console.log("FUCKED UP SETTING!!!!!!!!!!!!!!!!!§§");
				set.game();
			}//TODO
			txt("Westgard originally started as a stronghold on a border with elvish realms, which was still obvious from the impressive double line of fortifications. During years the fort grew into an important trade hub and one of the most important cities in the whole Beletriad.")
			
			
			link("Great Bazaar. ",110);
			link("Weapon & Armors. ",120);
			if(att.power>0)link("Mystery Shack. ",130);
			link("Alchemical Supplies. ",140);
			link("Tavern. ",200);
			link("House of Earthly Delights. ",150);
			
		
	
			if(att.level == 2){
				link("Return to Valsyan Cavern. ", null, () => DUNGEON.start("cavern","westgard",390,101)  );
				//link("Return to Valsyan Cavern. ",50);
			}
			
			
			if(mile.dungeon_wiz==1)link("Wizard's tower. ",300); 
			if(mile.dungeon_sew==1)link("Sewers. ",420); 
			if(mile.dungeon_sew==2){
				link("Sewers 2. ",450);
			}else{
				link("###Sewers 2 ",450);
			}
			
			
			link("Exit Game.",null, () => set.chapter("Second Weekend",101,"weekend") );
		break;
		
		case 110:
			//baszar
			break;
		case 120:
			//armor
			break;
		case 130:
			//magic
			break;
		case 140:
			//alchemy
			break;
		case 150:
			txt("<i>House of Earthly Delights</i> was a too poetic name for a sleazy establishment more reminding modern nightclub than anything medieval. Two half-naked elvish beauties lasciviously danced on a small stage while being loudly cheered by the crowd. ");
			if(!mile.delights)link("Look for a job. ",151);
			if(mile.delights==1)link("Dance on the stage. ",153);
			if(mile.delights==2)link("Dance on the stage (#wip-now just repeats the previous scene). ",153);
			link("Back. ",101)
			break;
			
		case 151:
			mile.delights=1;
			npc_set([2,"Barman"]);
			
			txt("I was sure somebody here will know about something that needs to be killed for money and loot. But I probably should have expected the offer the barman gave me: ");
			npc(2,"You look hella fine, don't want to try to jump on the stage? ");
			
			if(mile.slut>3)link("Absolutely! Might be fun!",153);
			link("Oh... okay. ",153);
			link("Eh... maybe some other time. ",150);
			link("No! I'm not a whore! ",152);
			break;
			
		case 152:
			if(att.class == 1){
				txt("My defensive statement caused an eruption of a laugh ");
				npc(2,"Sure! ");
				kat("I'm not! It's just my character who is a whore! ");
				txt("But the people were just entertained by my overreaction. ")
				link("Screw you! (not literally) ",150);
			}else{
				npc(2,"Apologies! I didn't mean to offend you! ");
				link("Back. ",150);
			}
			break;
			
		case 153:
			mile.delights=2;
			txt("I jumped on stage. Wait, the game actually wants me to dance? I played many dancing games before and this should not be any different but the crowd of fifty "+(mile.immersion>0 ? "people" : "npc's" )+" was surely making it <i>feel</i> different. ");

			txt("I began moving to the rhythm. The spotlight was me so I was not able to see the crowd but I could hear their loud cheering and remarks. ");
/*
moving 
sensual 
hips
shaking breast
touching myself
sway
	swing
whirl?	
slap my ass
*/			
			if(!PC.upper && !PC.bra && !PC.lower){
				txt("The crowd enjoyed my naked body. However, overall they were a bit disappointed that I showed them everything instantly. Where is any art in that? ");
				link("Finish. ",156, ()=> counter.temp = 1);
			}else{
				link("Lose some clothes. ",154);
			}
			break;
			
		case 154:
			WARDROBE.showLess(1,1);
			
			if( (PC.vambraces || PC.pauldrons || PC.gorget) || (PC.upper && PC.upper.hp>2)   ){
				if(PC.vambraces || PC.pauldrons || PC.gorget){
					txt("The pieces of my armor with clanking landed on the wooden floor. I was removing them as erotically as possible, they were not exactly tassels but whatever. "); 
				};
				if(PC.upper && PC.upper.hp>2){
					txt("I stripped my armor. The crowd loved that a proud female warrior is exposing in front of them like some shameless little slut. ");
				};
			}else if(PC.upper){
				if(!PC.bra){
					txt("I teased the crowd when I played with my top, pulling it and stretching, giving them just a flash of my breast. Then I took it off and threw it away, revealed to the cheering crowd my bare tits.  ");
				}else{
					txt("I started playing with my top, pulling it and stretching, until I swiftly took it off. The crow was cheering when I casually threw it away. ")
				};
			};
			
			if(PC.lower){
				txt("I slipped my thumps under my "+dh.decapitalise(PC.lower.name)+" and very slowlly pushed down, taking my time. Finally I dropped the piece to my ankles and kicked it away. "); 
			};
			
			txt("I continued dancing, feeling the rhythm, swaying my hips suggestively. The patrons were excited! ")
			
			if(mile.slut>3)link("Go nude!",155);
			if(debug)link("##Go nude!",155);
			link("Finish. ",156, ()=> counter.temp = 1);
			
			
			break;
			
		case 155:
			WARDROBE.showLess(0,0);
		
			txt("The roaring crowd wanted more and I was ready to give them that! ");
			{
				function boobs(){
					if( PC.getDim("breastSize") > 32 ){
						return "gigantic heavy tits"
					}else if( PC.getDim("breastSize") > 18 ){
						return "huge tits"
					}else{
						return "boobies"
					}
				}
				
				if(PC.bra){
					txt("I nonchalantly removed my bra and shake my "+boobs()+". ");
				}else{
					txt("I was shaking my bare "+boobs()+". ")
				};
				
			}	
			
			if(PC.panties){
				txt("Then was the time for the finale. I turned my back to the spectators, slapped my butt and then gradually pulled my panties down, building the expectation. The crowd was frenzied when I at last completely exposed to them everything. ");
			};
				
			txt("I was lost in music, frantically dancing, sweating, touching myself, enjoying the energy emanating from my fans. ");
			link("Finish. ",156, ()=> counter.temp = 2);
			break;
			
		case 156:
			WARDROBE.showAll();
			txt("I decided that this might be enough and stopped. The patrons applauded while I was looking for my garments. ");
			txt("The barman gave my share which was a good system, the idea of people slipping their dirty cold silver coins under my panties was not very appealing. "); 
			{
				let earning = 3 * ( 1 + att.dex + att.char + counter.temp );
				txt("Based on my dexterity and charisma bonuses I earned "+earning+" coins. ");
				imp("+ "+earning+" coins");
				PC.money += earning;
			};
			link("Back",150);
			break;
			
			
		case 200:
			if(!mile.dungeon_wiz)link("Disconcerted Wizard. ",230);
			if(!mile.dungeon_sew)link("Desperate Mother. ",400);
			link("Play Seven. ",210);
			link("Back. ",101);
			break;
			
		case 210:
			imp("Bet: ");
			link("5 coins ",211, () => counter.temp=5 , PC.money>=5);
			link("3 coins ",211, () => counter.temp=3 , PC.money>=3);
			link("2 coins ",211, () => counter.temp=2 , PC.money>=2);
			link("Back ",200);
			break;
			
		case 211:
			
			imp("Place bet on: ");
			link("UNDER SEVEN (payoff 1:1)",212, () => counter.temp2=1);
			link("SEVEN (payoff 4:1)",212, () => counter.temp2=7);
			link("OVER SEVEN (payoff 1:1)",212, () => counter.temp2=10);
			break;
		
		case 212:
			{
				
				switch( counter.temp2 ){
					case 1:	txt("You placed bet "+counter.temp+" coins on UNDER SEVEN");
						break;
					case 7:	txt("You placed bet "+counter.temp+" coins on SEVEN");
						break;
					case 10:	txt("You placed bet "+counter.temp+" coins on OVER SEVEN");
						break;
				};

				let dice1 = Math.ceil( Math.random() * 6 );
				let dice2 = Math.ceil( Math.random() * 6 );
				
				imp("First dice: "+dice1);
				imp("Second dice: "+dice2);
				let result = dice1 + dice2;
				let result2;
				
				if(result == 7){
					txt(dice1+" + "+dice2+" == 7");
					result2 = 7;
				}else if(result > 7){
					txt(dice1+" + "+dice2+" > 7");
					result2 = 10;
				}else{
					txt(dice1+" + "+dice2+" < 7");
					result2 = 1;
				};
				
				if(result2 == counter.temp2){
					imp("You won!");
					if(result2==7)counter.temp *= 4;
					imp("+ "+counter.temp+" coins");
					PC.money += counter.temp;					
				}else{
					imp("You lost!");
					imp("- "+counter.temp+" coins");
					PC.money -= counter.temp;
				};
			}
			
			link("Next round ",210);
			link("Back ",200);
			break;
			
		case 230:
			mile.dungeon_wiz = 1;
			npc_set([3,"Wizard"]);
			npc(3,"Hello, are you an adventurer who would do anything for money? ");
			kat("... I guess. What do you need?");
			npc(3,"There was a horrible accident at my tower! It is now completely filled with angry elementals! ");
			kat("So you want me to exterminate them? ");
			
			npc(3,"No. There is an automatic defense system in my tower. I need you to go in and turn it on. ");
			//The crystals could be rearranged to disenchant them but I can't get to them! ");
			kat("Can't you do that yourself?. ");
			npc(3,"No? The tower is completely filled with angry elementals! ");
			kat("Oh, of course. ");
			npc(3,"Please! I'll reward you if your return. ");
			kat("You mean when I return. ");
			npc(3," ... Sure. ");
			kat("So what should I do? ");
			npc(3,"You need to tune all the crystal to the right frequency. I know it sounds complicated but don't worry, it should be easy even for... eh... ");
			kat("? ");
			npc(3,"... person unfamiliar with magic like you. ");
			if(att.class==3){
				kat("I'm a priestess! ");
				npc(3,"Of course! And I respect that. The stuff you are doing is cute and I'm sure it took you a lot of time to learn it. But please don't touch anything beyond your understanding, the actual magic might be quite dangerous for a layperson. ");
			}else{
				kat("...okay.");
				npc(3,"And please don't steal anything! "); 
				if(att.class==1){
					kat("I'm a whore, not a thief! ");
				}else{
					kat("I'm a barbarian, not a thief! ");
				};
				npc(3,"Och... of course. I'm sure there is a huge difference. ");
			};
			
			
			
			
			kat("Okay. ");
			link("Wizard's tower. ",300);
			link("Maybe some other time. ",200);
			break;
		
		case 300: 
			txt("From the outside, the tower seemed pretty normal. I mean normal for a twenty meter tall wizard tower made of a gigantic mushroom. ");
			link("Enter. ", null, () => DUNGEON.start("tower","westgard",301,101) );
			link("Back. ",101);
			break;
			
		case 301: 
			mile.dungeon_wiz = 2;
			npc_set([3,"Wizard"])
			npc(3,"You are actually alive! I mean... good job! ");
			kat("... Thank you. And my reward? ");
			imp("+ 20 coins");			
			PC.money += 20;
			//txt("From the outside the tower seemed pretty normal. I mean normal for a twenty meter tall wizard tower made from a gigantic mushroom. ");
			
			link("Exit Game.",null, () => set.chapter("Second Weekend",101,"weekend") );
			if(debug)link("###Back. ",101);
			break;	
			
		case 390: 
			txt("Fucking finally! The damned Valsyan Cavern was at last conquered! What a waste of time! ");
			link("Exit Game.",null, () => set.chapter("Second Weekend",101,"weekend") );
			if(debug)link("###Back. ",101);
			break;
			
		case 400:
			mile.dungeon_sew = 1;
			kat("Are you okay?");
			npc_set([4,"Mother"]) 
			npc(4,"No! My daughter hasn't returned home! I'm afraid something bad happened to her! ");
			
			if(mile.immersion>0){
				kat("That's very probable, with all those goblins and monsters lurking around. Beletriad is a pretty dangerous place, especially since the plague and the start of civil war. ");	
			}else{
				kat("That's very probable, with all those goblins and monsters lurking around. I'm surprised that any of you, low-level npc's, is even able to survive here. ");
			};
			
			npc(4,"Please! Could you help me?! ");
		
			link("I course! Fear not, I'll bring her back! ",401);
			link("I mean I could... ",402);
			link("She's probably already dead. ",403);
			break;
			
		case 401:
			npc(4,"Thank you! ");
			txt("She had nearly tears in her eyes how she was grateful. ");
			kat("Where do you think I should start? ");
			npc(4,"She and other kids often played in the old catacombs and sewers under the city. ");
			kat("Ewww. Are you sure she didn't get lost at some less disgusting place? ");
			npc(4,"Yes, I'm pretty sure she got lost in the sewers. ");
			txt("Of course. ");
					
			link("Don't worry! I'll bring her back in no time! ",410);
			link("You could worry a little, but I hope I'll bring her back. ",410);
			link("I bring her back, alive or dead! ",410);
			break;	
		
		case 402:
			txt("She saw my hesitation, it was a pretty lame plot hook, and started begging. It was quite undignified. ");
			npc(4,"Please! I promise I'll pay you! I'll give you everything I have!  ");
			kat("Okay, if you pay me I can try to save her. ");
			npc(4,"Thank you! ");
			kat("Where do you think I should start? ");
			npc(4,"She and other kids often play in the old catacombs and sewers under the city. ");
			kat("Ewww. Are you sure she didn't get lost at some less disgusting place? ");
			npc(4,"Yes, I'm pretty sure she got lost in the sewers. ");
			txt("Of course. ");
			
			link("Don't worry! I'll bring her back in no time! ",410);
			link("You could worry a little, but I hope I'll bring her back. ",410);
			link("I bring her back, alive or dead! ",410);
			break;
			
		case 403:
			txt("She nearly broke in tears after my callous response. ");
			npc(4,"Please! I promise I'll pay you! I'll give you everything I have if you save her!  ");
			kat("But what if she's dead? Will you pay me if I bring you only her dead and probably mutilated body? ");
			npc(4,"Y...yes... ");
			txt("She stuttered. Nice, that was what I needed to hear. ");
			
			kat("Where do you think I should start? ");
			npc(4,"She and other kids often played in the old catacombs and sewers under the city. ");
			kat("Ewww. Are you sure she didn't get lost at some less disgusting place? ");
			npc(4,"Yes, I'm pretty sure she got lost in the sewers. ");
			txt("Of course. ");
			
			link("Don't worry! I'll bring her back in no time! ",410);
			link("You could worry a little, but I hope I'll bring her back. ",410);
			link("I bring her back, alive or dead! ",410);
			break;
			
		case 410:	
			txt("There was probably time to buy some supplies but I should not procrastinate. ");
			link("No, I should not waver! ",420);
			link("Next. ",200);
			break;
		
		case 420:	
			txt("It was not hard to find an entrance to sewers. From what I heart I might be way harder to find out the way out. The catacombs and sewers were an uncharted maze. ");
			txt("The only ones who visited them were beggars, criminals and smugglers - the Guard avoid them because they were also full of wild beasts and monsters. Why would any mother let her offspring play here was beyond me. ");
			link("Enter. ", null, () => DUNGEON.start("sewers_1","westgard",430,101) );
			link("Back. ",101);
			break;
			
		case 430:	
			mile.dungeon_sew = 2;
			npc_set([4,"Mother"],[5,"Elanor"]); 
			npc(4,"Elanor! ");
			npc(5,"Mom! ");
			txt("It was a really nice, heartwarming reunion. ");
			npc(4,"Thank you very much! Here, those are all coins I have! ");
			if(mile.immersion<1){
				imp("+ 13 coins");			
				PC.money += 13;
				link("Thank you! ",431);
			}else{
				txt("She handed me 13 coins. ")
				link("Thank you! ",431, ()=>{
					PC.money+=13
				} );
				link("No, you need the money more than I do! Buy your daughter new shoes or something. ",432, ()=>{mile.karma++} );
			}
			break;	
			
		case 432:
			npc(4,"Thank you! ");
		case 431:
			txt("Another dungeon successfully cleaned. ");
			link("Exit Game.",null, () => set.chapter("Second Weekend",101,"weekend") );
			if(debug)link("###Back. ",101);
			break;
			
			
		case 450:	
			mile.dungeon_sew_cult = 0;
			txt("The nefarious activities of cultists under Westgard had to be investigated. Very reluctantly I once again descended to the sewers. ");  
			link("Enter the sewers. ", null, () => DUNGEON.start("sewers_2","westgard",460,101) );
			link("Back. ",101);
			break;
			
		case 460:
			mile.dungeon_sew = 5;		
			txt("");  
//TODO			
			link("Exit Game.",null, () => set.chapter("Second Weekend",101,"weekend") );
			if(debug)link("###Back. ",101);
			break;


			
	};
};


//FEYD MORA
story.feyd = function(input){
	switch(input){
		case 100:
			set.game();
			
			mile.feyd = false;
			mile.dun_rats = false;

			qaa("The first act of the game...  ");
			kat("There are more acts than one?!?");
			qcc("Yeah, several!");
			txt("Zdeno smirked while Juraj impatiently continued: ")
			qaa("The first act of the game is set in the Kingdom of Beletriad during tumultuous times. The king Rawik died but...  ");
			txt("I was pretending I was listening. I could not care less about the lore of another genetic fantasy magical realm. ");
			kat("Okay, but what I need to do to win?");
			qaa("...");
			qcc("...");
			qbb("...");
			qcc("You obviously need to defeat the Evil Overlord. ");
			kat("How?");
			qaa("...");
			qcc("...");
			qbb("...");
			qcc("That's the point of the game. ");
			
		 
			qaa("I can give you a hint - you should talk with "+dynamic("actual_name")+". Don't you want to write it down?");
			kat("Do I look like I'm stupid? I won't forget such a dumb name! ");
		//	kat("Do I look like I'm stupid? I won't forget a dumb name like "+choice("placeholder","name_2")+". ");
			qaa("Okay.");
			
			link("Start the game. ",101);
			//link(dynamic("name_2"),101);
			break;	
			
		
		case 101:
			npc_set([1,"Guard"],[2,"Noble"],[3,mile.keryk],[4,"Maid"]); 
			
			txt("I materialized on the mains square of a high-medievally looking port. I could feel the salt in the air and the whole scenery was far more vivid then I imagined. ")
			hint("To progress you need to solve the first quest and find the right guy. ")
			link("Tavern. ",110);
			link("Merchant. ",120);
			link("Blacksmith. ",121);
			if(debug)link("##Testshop armor. ",122);
			if(debug)link("##Testshop clothes. ",123);
			link("Guard. ",134);
			link("Noble. ",131);
			link("Maid. ",135);
			
			
			//TODO SHOULD BE IN EFFECT 
			if(!mile.feyd){
				let shifted = [];
				for(let i=0;i<counter.npca.length;i++){
					shifted[i] = counter.npca[i];
				};
				dh.shuffle(shifted);
				for(let i=0;i<shifted.length;i++){
					if(shifted[i].visible){
						if(shifted[i].result){
							link(shifted[i].name,141);
						}else{
							link(shifted[i].name,140);
						};
					};
				};
			}else if(mile.dun_rats){
				link("Exit the Game. ",150)
			}
		
	//		if(debug)link("##Skip the rat quest. ",101,()=>{mile.dun_rats=true} );
			if(debug)link("##Find the right guy. ",141);
			
			break;
		
		case 110:
			npc_set([3,"Innkeeper"]);
			txt("The tavern was filled with various shady existence. My character fitted there well. ");
			if(!mile.dun_rats)link("Look for work. ",112);
			link("Ask about the Dark Overlord. ",111);
			link("Play Seven. ",115);
			link("Back. ",101);
			break;
		
		case 111:
			txt("I stood up and yelled: ");  
			kat("Hey? Does any of you dumb npc's know anything about the Dark Overlord, how to defeat him or even find him? He might or might not be a chaos wizard? ");
			txt("However, the room only gave me weird looks and nobody was willing to share any information with me. ");
			link("At least I tried. ",110);
			break;
			
		case 112:
			if(Math.random()<0.5){
				npc(3,"Welcome to the harbor of Feyd Mora, traveler! ")
			}else{
				npc(3,"Welcome to the kingdom of Beletriad!  ")
			};
			switch(att.class){
				case 1: 
					kat("Hey! Innkeeper! Is there any job for an adventurer? I need money fast because I need to finish this stupid game ASAP, if you know what I mean. ") 
					break;
				case 2: 
					kat("Hey! Innkeeper! Is there any job for a barbarian, or whatever is my character supposed to be? I need money fast because I need to finish this stupid game ASAP, if you know what I mean. ") 
					break;
				case 3: 
					kat("Hey! Innkeeper! Is there any job for a sorceress, or whatever is my character supposed to be? I need money fast because I need to finish this stupid game ASAP, if you know what I mean. ") 
					break;
			};
			npc(3,"I don't know what you mean. However, my wine cellar is infested with rats. I'd pay you 12 golden coins if you exterminate them. ");
			kat("Rats? Wow, you people are so useless! Where is the cellar? ")
			
			link("Rat extermination. ",null, () => DUNGEON.start("cellar","feyd",113,113)  );
			link("Maybe some other time. ",110);
			break;
		
		case 113:
			mile.dun_rats = true;
			npc(3,"Thank you adventurer! I'm very grateful! ");
			kat("You're welcome. And my money? ")
			imp("+ 12 coins");
			PC.money += 12;
			link("Tavern. ",110);
			
			break;
			
			
		case 115:
			imp("Bet: ");
			link("5 coins ",116, () => counter.temp=5 , PC.money>=5);
			link("3 coins ",116, () => counter.temp=3 , PC.money>=3);
			link("2 coins ",116, () => counter.temp=2 , PC.money>=2);
			link("Back ",110);
			break;
			
		case 116:
			
			imp("Place bet on: ");
			link("UNDER SEVEN (payoff 1:1)",117, () => counter.temp2=1);
			link("SEVEN (payoff 4:1)",117, () => counter.temp2=7);
			link("OVER SEVEN (payoff 1:1)",117, () => counter.temp2=10);
			break;
		
		case 117:
			{
				
				switch( counter.temp2 ){
					case 1:	txt("You placed bet "+counter.temp+" coins on UNDER SEVEN");
						break;
					case 7:	txt("You placed bet "+counter.temp+" coins on SEVEN");
						break;
					case 10:	txt("You placed bet "+counter.temp+" coins on OVER SEVEN");
						break;
				};

				let dice1 = Math.ceil( Math.random() * 6 );
				let dice2 = Math.ceil( Math.random() * 6 );
				
				imp("First dice: "+dice1);
				imp("Second dice: "+dice2);
				let result = dice1 + dice2;
				let result2;
				
				if(result == 7){
					txt(dice1+" + "+dice2+" == 7");
					result2 = 7;
				}else if(result > 7){
					txt(dice1+" + "+dice2+" > 7");
					result2 = 10;
				}else{
					txt(dice1+" + "+dice2+" < 7");
					result2 = 1;
				};
				
				if(result2 == counter.temp2){
					imp("You won!");
					if(result2==7)counter.temp *= 4;
					imp("+ "+counter.temp+" coins");
					PC.money += counter.temp;					
				}else{
					imp("You lost!");
					imp("- "+counter.temp+" coins");
					PC.money -= counter.temp;
				};
			}
			
			link("Next round ",115);
			link("Back ",110);
			break;
			
		
		case 120:
			//bazaar - effects
			break;
		
		case 121:
			//blacksmith - effects
			break;
		
			
		case 131:
			if(!counter.npca[0].visible){
				txt("The noble did not seem thrilled to talk with a pleb like me. I quickly asked him about my contact. ");
				npc(2,"Do you mean "+counter.npca[0].name+" or "+counter.npca[1].name+"? Or even "+counter.npca[2].name+"? It is a really common name here. ")
				counter.npca[0].visible=true;
				counter.npca[1].visible=true;
				counter.npca[2].visible=true;
				counter.temp = 0;
			}else{
				txt("The noble ignored me. ");
				if(att.class==1 && counter.temp != 1)statlink("Steal his purse","dex",2,132,133)
			}
			link("Back. ",101);
			break;
			
		case 132:
			txt("I stole his purse. I felt bad but not too bad. ");
			imp("+ 10 coins");
			PC.money += 10;
			counter.temp = 1;
			link("Back. ",101);
			break;
		
		case 133:
			txt("I failed. Luckily he did not notice me. ");
			link("Back. ",101);
			break;
			
			
		case 134:
			if(Math.random()<0.5){
				npc(1,"Welcome to the harbor of Feyd Mora, traveler! ")
			}else{
				npc(1,"Welcome to the kingdom of Beletriad!  ")
			};
			txt("The guard seemed like somebody who was supposed to help citizens but really did not enjoy it. ");
			npc(1,"Do you mean "+counter.npca[3].name+" or "+counter.npca[4].name+"? I hope you don't mean that scoundrel "+counter.npca[5].name+"? ")
			counter.npca[3].visible=true;
			counter.npca[4].visible=true;
			counter.npca[5].visible=true;
			link("Back. ",101);
			break;
		
		case 135:
			if(Math.random()<0.5){
				npc(4,"Welcome to the harbor of Feyd Mora, traveler! ")
			}else{
				npc(4,"Welcome to the kingdom of Beletriad!  ")
			};
			txt("The maid smiled at me. ");
			npc(4,"I only know "+counter.npca[6].name+". Is he the guy you are looking for? ")
			counter.npca[6].visible=true;
			link("Back. ",101);
			break;
			
		case 140:
			switch(Math.floor(Math.random()*4)){
				case 0: 
					txt("The guy did not know anything and really did not want to talk with me about the Evil Overlord. ") 
					break;
				case 1: 
					txt("The guy did not even care what I was saying. He only made some sleazy quips and tried to flirt with me. ") 
					break;
				case 2: 
					txt("The guy looked very shady. Even before I finished he told me he will help me. I only need to follow him to a dark alley because he wants to show me something. I declined. ") 
					break;
				case 3: 
					txt("The guy told me he was very busy and he had no time for "+class_based("harlots.","barbarians.","renegades.")); 
					break;
			};
			
			//ASAP MORE OPTIONS
			link("Back. ",101);
			break;	
		
		case 141:
			mile.feyd = true;
			npc(3,"Welcome to the harbor of Feyd Mora, traveler! ");
			txt("Oh not again."); 
			npc(3,"You are the girl I heard about?");
			kat("Yes! That's me! Can you help me?!")
			switch(att.class){
				case 2:
					npc(3,"I imagined the Chosen One a bit differently. But fear not! In this time even shameless savage like you can change the fate of the world. ");
					kat("Shameless savage?");
					npc(3,"Yes, a blood-thirsty barbarian who knows nothing about manners or decency who lies with men and women alike following only her insatiable perverted urges.");
					break;
				case 3:
					npc(3,"I imagined the Chosen one a bit differently. But fear not! In this time even depraved profligate like you can change the fate of the world. ");
					kat("Depraved profligate?");
					npc(3,"Yes, a lewd woman who proved she more cares about low desires of flesh than her sacred duty.");
					break;
				default:
					note("#ERROR: Class not picked #");
				case 1:
					npc(3,"I imagined the Chosen one a bit differently. But fear not! In this time even wanton tramp like you can change the fate of the world.  ");
					kat("Wanton tramp?");
					npc(3,"Yes, a shameless woman who does not care about decency and her good name, ready to lie with anybody willing to spend a few coins for her lewd body.  ");
					break;
			};
			kat("Yeah, I got it, I'm a whore. How to defeat the Evil Overlord? ");
			npc(3,"I have no idea.");
			kat("...");
			npc(3,"...");
			kat("Can you at least point me to somebody who does? ");
			npc(3,"Of course.");
			kat("Fucking awesome. ");
			npc(3,"You need to gather supplies and then travel inland to the great city of Westgard. ");
			link("Great. ",101);
			
			break;
		
		case 150:
			set.irl();
			txt("So ended my first session in the game. It lasted more than two hours and I did not even leave the starting town. ");
			//txt("I started to suspect I made a huge mistake when I agreed with their twisted scheme. ");

			link("At least the Game was quite fun. ",null, () =>  { 
				mile.immersion++;
				set.chapter("The Skirt",101,"first") 
			});
			link("I have to finish the Game as soon as possible. ",null, () =>  { 
				set.chapter("The Skirt",101,"first") 
			});
			link("I already knew I will hate the Game. ",null, () =>  { 
				mile.immersion--;
				set.chapter("The Skirt",101,"first") 
			});
			
			break;
			
	 
		
	};
};
























//WEEKEND
story.weekend2 = function(input){
	switch(input){
		case 100:
				//SATURDAY
				WARDROBE.showAll();
				set.newday();
				set.chapter("Third Weekend");
				set.irl();
				
				//mile.westgard = 0;
				
				mile.weekend = 0;
				mile.weekend_aa = 0;
				mile.weekend_bb = 0;
				mile.weekend_cc = 0;
				mile.weekend_ai = 0;
//TODO
				mile.weekend = 1;
				link("Next. ",101);
				break;
				
		case 101:
			WARDROBE.showAll(); //TODO
			set.irl();
			if(typeof mile.weekend == "undefined")mile.weekend = 0;
			//mile.weekend++;
			switch(mile.weekend){
				case 1:
					txt("Saturday, morning.")
					break;
				case 2:
					txt("Saturday, afternoon.")
					break;
				case 3:
					txt("Saturday, evening.")
					break;
				case 4:
					txt("Saturday, night.")
					break;
				case 5:
					set.newday();
					set.chapter("Third Weekend");
					txt("Sunday, morning.");
					break;
				case 6:
					txt("Sunday, afternoon.")
					break;
				case 7:
					txt("Sunday, evening.")
					break;
			};
				
				
				
				
			if(mile.weekend==4){
				//set.newday();
				link("Sleep.",101, () => mile.weekend++);
			}else if(mile.weekend==7){
				
				if(mile.deleted==-1){
					link("AI",600);
				}else{
					link("###AI (###who is deleted)",600);
				}
				link("New task",null, () => set.chapter("Buttplug",100,"third") );
				
				
			}else{
				
				link("Random Outfit. ",null, () => {
					//mile.weekend--;
					wardrobeAuto("weekend2",101);
				});
				link("Wardrobe. ",null, () => {
					//mile.weekend--;
					wardrobeWrapper("weekend2",101); 
				});
				link("Makeup. ",101, () => {
					//mile.weekend--;
					EDIT.makeup(); 
				});
				link("I-Shop.",111, () => mile.weekend++);
				
				
				link("Game (###WIP)",null, () => {
					mile.weekend++;
					set.chapter("Westgard",99,"westgard");
				}, false );
				
				/*
				if(!mile.westgard){
					link("Game",null, () => set.chapter("Westgard",99,"westgard") );
				}else{
					link("Game",null, () => set.chapter("Westgard",100,"westgard") );
				}
				*/
				
				
			if(mile.gf){	
				if(!mile.weekend_aa){	
					link("Juraj (the one with a crush).",300, () => mile.weekend++, !mile.weekend_aa);
				}else if(mile.weekend_aa == 1){
					link("Juraj (the one with a crush).",350, () => mile.weekend++, mile.weekend_aa == 1);
				}
			}else if(debug){
				if(!mile.weekend_aa){	
					link("###Juraj (the one with a crush) (#assumes dating)",300, () => mile.weekend++,!mile.weekend_aa);
				}else if(mile.weekend_aa == 1){
					link("###Juraj (the one with a crush) (#assumes dating)",350, () => mile.weekend++, mile.weekend_aa == 1);
				}else{
					link("Juraj (the one with a crush).",300, () => mile.weekend++, false);
				}
				
			}else{
				link("Juraj (the one with a crush).",300, () => mile.weekend++, false);
			};
			

			link("Zdeno (the creepy one).",400, () => mile.weekend++,!mile.weekend_bb);
//TODO ADD SCENE WITH ZDENO

//ADD SCENE WITH AI

			
			if(!mile.weekend_cc){
				link("Matej (the fat one).",500, () => mile.weekend++);
			}else if(mile.weekend_cc==1){
//TODO	
				if(mile.qcc>3){
					link("Matej (the fat one).",550, () => mile.weekend++);
				}else if(debug){
					link("###Matej (the fat one). (#the second meeting not allowed because of low relationship)",550, () => mile.weekend++);
				}else{
					link("Matej (the fat one).",500, () => mile.weekend++, false);
				}
			}
				/*
				if(mile.deleted==-1){
					link("AI.",1850,(function(){}),mile.weekend_ai==0);
				}else if(debug){
					link("#AI.",1850,(function(){}),mile.weekend_ai==0);
				};
				*/
				//link("Game.",1900,(function(){}),mile.weekend_ai==0);
				
				
				
				
				
				
				
			
				link("Procrastinate.",101, ()=> mile.weekend++ );
				//note("#NOTE: there should be probably more things to do")
			};	
				
			break;
	/*		
		case 110:
			txt("I was subscribed to premium service of one of the bigger clothing-providing services. Every week I could pick any outfits in the Metaverse and they would be instantly delivered to me. ");
			mile.shop = 1;
			link("Shop.",111);
			break;
	*/		
		case 111:
		//alert("shop")
			//shop - effects
			break;	
			
			
		case 300:	
			txt("I was contemplating what to do next when the door ring started buzzing. It was Juraj. ");
			qaa("Hello, Katarína! I wondered, would you like to go out with me? ");
			kat("On a date? ");
			txt("He hesitated. ");
			qaa("Yeah, on a date. ");
			link("Okay.",301);
			link("No! ",101);
			link("Sorry, I don't have time at the moment. ",101);
			break;
		
		case 301: 
			mile.weekend_aa = 1;
			mile.qaa++;
			mile.gf++;
			//TODO GF
			txt("I put on shoes, grabbed my jacket and we went outside. It was after rain, the air was fresh, permeated with an earthy smell and a bit chill (Juraj later explained to me it was petrichor). Countless potholes in the road were brimmed with water. ");
			qaa("It's quite nice...  ");
			kat("Yeah, the weather is fine.. ");
			qaa("...");
			kat("...");

			if(mile.immersion>1){
				txt("We eventually ended in a cake shop. The <i>Neverion</i> was a natural topic of the conversation. He asked about my progress and I tried to extract some tips from him. But then we talked more and I was just interested how he solved different quests, whether he gave Graham to the justice to be hanged, sided with Gothredian traders or the villagers or how he stopped the wedding. A bit blushing, he admitted he actually seduced the Countess of Kallamir and I was shocked this was even possible. I would not think about that. ");
				txt("I approved most of his actions and was pleasantly surprised by how our choices match.  I would rather be without the sword of levitation than ever side with those abusive jerks and Gelfs were scum who deserved nothing better. ");
			
			}else{
				txt("We eventually ended in a cake shop. We mostly talked about funny stories from the elementary school. We used to be closer as kids before I became cool and shared many experiences. ");
				txt("Then we chatted about various other things. I knew Juraj as an introvert guy who does not talk very much but when we touched some subject he deeply cared about he was unstoppable and I had to moderate his ranting. I learned quite a few new things. And Juraj was a patient listener when I talked about thigs which troubled me and was never condescending. ");
				
			};
				
				
				
			link("Next ",303);
		//	txt("")
			
			
			break;
			
		/*
			kat("I was reaching for my phone but he stopped me: ");
			qaa("I invited you, I'll pay! ");
			ka("You don't have to! ");
			qaa("That's okay! I checked your account statements . ");

			kat("What the hell! How can you be so nice in one moment and ");
	*/

		case 303:
			txt("After that, we were just aimlessly strolling through the park. We were walking close to each other. Our knuckles lightly touched and then again. I had enough of this teasing, I grabbed his hand. It was warm and sweating. ");
			qaa("Kate? ");
			kat("Yeah? ");
			qaa("I love you. ");
			txt("Fuck!");
			
			link("That's nice...",306);
			link("I love you too! ",305);
			link("I know. ",307);
			break;
		
		case 305: 
			mile.qaa++;
			mile.gf++;	
//TODO '?
			mile.sub++;
			mile.inLove = true;
			kat("I love you too! ");
			txt("What else was I the hell supposed to say? ");
			qaa("Really?!?!?!");
			kat("Mhmmpmm. ");
			txt("I mumbled. ");
			qaa("So we can be a boyfriend and girlfriend? ");
			kat("I guess... ");
			txt("I meant... it would be technically possible but...");
			qaa("Awesome! ");
			txt("I enjoyed the time we spent together but I was not sure if shared his excitement. ");
			link("Awesome! ",310);
			link("Mhhhhh...",310);
			break;
			
		case 306: 
			//txt("");
			mile.gf++;	
			qaa("Oh!");
			txt("His disappointment was palpable. He expected something more. Too bad. I at least tried to soften the blow: ");
			kat("I'm enjoying this date with you very much. Do you? ");
			qaa("Yeah, I love spending time with you. ");
			txt("We made few more steps. ");
			qaa("I'm so dumb! I'm sorry Kate, I just... being here with you... ");
			kat("That's okay, don't worry about that! ");
			link("Continue walking.",310);
			break;
			
		case 307: 
			mile.gf++;	
			txt("He bitterly chuckled: ");
			qaa("Is that a reference? ");
			kat("What? No, I mean it was quite obvious. ");
			qaa("Yeah, I guess... Do you mind? ");
			kat("... no! Of course! ... I'm kinda enjoying this date. ");
			qaa("Really? That is great! I love spending time with you too. ");
			link("Continue walking.",310);
			break;
			
			
		case 310: 	
			mile.dateResult = 0;
			txt("We were resting on a bench. It was a calm and pleasant moment and then a terrible disaster stroke. ");
			txt("Eva and Saša were talking a shortcut through the park. Fuck! I would never think this could happen! And it was to late do dive into bushes! They noticed us, waved at me and joined us. ");
			eva("Hello Kate! Hello Juraj! How are you? ");
			sas("Hello! ");
			kat("Eh...hi! ");
			qaa("Hello! ")
			txt("That nosy bitch smiled and then asked the question I feared: ");
			eva("What are you doing here? ");
			txt("They all three were staring at me. ");
			
			link("We are here on a date. ",330);
			link("Juraj is helping me with a school assigment. ",320);
			//link("We... just ran into each other a moment ago... ", );
			link("I forget... my cat... on the stove... please, excuse me, I have to run! ",311);
			break;
			
		case 311:
			mile.dateResult = 10;
			mile.qaa--;
			txt("My brain froze. I mumbled something incoherent and then ran away. ");
			txt("At that point it seemed like a smart idea. ");
			link("Next. ",101);
			break;
			
		case 320:
			mile.dateResult = 20;
			mile.qaa--;
			txt("It was a plausible explanation and it seemed the girls bough it. We exchanged few more small-talk phrased and they left. ");
			txt("I was happy how I managed to defuse the problematic situation and then I noticed how annoyed Juraj was: ");
			
			qaa("Helping you with a project?!? ");
			kat("What the hell should I told them? ");
			qaa("Maybe the truth? ");
			kat("Are you fucking crazy?!? ");
			qaa("Are you ashamed for me? ");
			
			link("No! Of course not! ",322);
			link("Well, this is going too fast! ",323);

			if(mile.sub<1)	link("Absulutely! ",321);
			break;	
		
		case 321:
			mile.sub--;
			mile.dateResult = 21;
			kat("Absolutely! Just at look at yourself! You had to be blackmailing me with all your friends before you get the courage to ask me out! ");
			qaa("What?!?! But..."); 
			kat("We can going out and date but nobody can know! ");
			qaa("But I want people to know! ");
			kat("Tough luck! ");
			qaa("You could be such a bitch! ");
			kat("What are you going to do? Cry about it? ");
			qaa("No! ");
			kat("Should I go home? ");
			qaa("No! Please, stay with me. ");
			kat("As I thought. ");
			link("Continue. ",101);
			break;
				
		case 322:
			mile.dateResult = 22;
			kat("I'm not! You know them! They're gossiping bitched! "); 
			qaa("And? You mind they'll gossip about us? "); 
//	mile.gf++;	
			kat("I mean yes but... ");
			qaa("You're constantly just telling me only what I want to hear! ");
			kat("I'm not! ");
			if(mile.inLove){
				qaa("You love me but don't want anybody to know? Did you even mean it? ")
				kat("Of course! ");
			};
			qaa("Thank you for the date, Katarína, it was very nice! But I think I have to go! ");
			kat("You're seriously overreacting! ");
			link("Date is over. ",101);	
			break;
		
		case 323:
			mile.dateResult = 23;
			kat("This is going too fast! I'm not yet ready to tell anybody about us! ")
			if(mile.inLove){
				qaa("But you told me you love me! ")
				kat("And I meant it! ");
			};
			qaa("But I want to date you publicly! ");
			kat("Of course! But not yet! I can't just start dating you out of nowhere! Let people get used to that I'm hanging out with you nerds. ");
			qaa("... okay, if you think it'll be best... for now. ");
			link("Finish date. ",101);	
			break;
		
		case 330:
			mile.qaa++;
			mile.dateResult = 30;
			eva("Seriously?!?!")
			txt("She could not believe her luck. This was a bomb! But I didn't care about her opinions! I could date whoever I wanted! ");
			txt("Saša's jaw dropped down and she was not sure what to say: ")
			sas("You're not joking?... wow that is.... well... good for you two, I guess. ");
			eva("That's amazing! Well, we need to go. Have fun! ");
			kat("Bye");
			txt("They left us and we could see them from behind chatting and wildly gesticulating. They certainly did not saw this coming. ");
			
			txt("Juraj was also pretty surprised. However, unlike them, he was filled with pride and joy. ");
			qaa("You told them we are on a date! ");
			kat("Yeah, because we are? ");
			qaa("Oh my! Is this real? This is real! I'm dating Katarína Pokorná. ");
			kat("Yeah? Stop grinning so much! ");
			link("Finish date. ",101);	
			
			break;
			
		
		case 350:
			mile.weekend_aa = 2;
			mile.qaa++;
			
			WARDROBE.save();
			
			if(mile.dateResult == 22){
				txt("I texted Juraj: ");
				kat("Are you still mad? &#128546; ");
				txt("No response. Seriously?!? Like a child! ");
				txt("I took a selfie with a pleading sad puppy face and just enough cleavage to chatch his attention. ");
				qaa("I'm still mad. ");
				kat("Can I do something to make it up for that? ");
				qaa("Send me a naugty selfie! ");
				link("Take a naughty selfie.",352);
				
			}else if(mile.dateResult == 10){
				txt("I texted Juraj: ");
				kat("Hello! How ru?");
				qaa("Why the hell did you disappear?!?! ");
				kat("You're mad? &#128546; ")
				qaa("Yea, it seems like you're ashamed for me. ");
				kat("Can I do something to make it up for that? ");
				qaa("Send me your picture! ");
				
				link("Take a selfie.",351);
				link("Take a naughty selfie.",352);
				
			}else{
				txt("I texted Juraj: ");
				kat("How ru?");
				if(mile.dateResult == 30){
					qaa("Superbly! I still can't believe what happened! ");
				}else{
					qaa("Superbly! ");
				};
				kat("&#128540;");
				qaa("&#128512;");
				kat("Should I drop by? ");
				qaa("I'm not at home &#128546; ");
				qaa("Could you send me a picture? ");
				
				link("Take a selfie.",351);
				link("Take a naughty selfie.",352);
			}
			break;
			
			
			
		case 351:
			kat("Sure! ");
			txt("I checked myself in mirror to see whether I look perfectly, quickly brushed my hair and then took a photo. ");
			txt("Nice, smilling, with just top of my cleavage to make it a bit more interesting. ");
			kat("Like it? ");
			qaa("Love it! &#128512; Although I have in mind something naughtier &#128521; ");
			
			link("Post topless selfie.",353);
			link("Post nude selfie.",354);
			link("Post pussy picture.",355);
			break;
			
		case 352:
			WARDROBE.randomOutfit(inventory,PC,"bra","panties");
/*
TODO
			WARDROBE.randomOutfit(inventory,PC,[
				"bra",{
					slot: "panties",
					condition: (input) => {
					if(input.blueprint == "Thong" || input.blueprint == "LowThong" || input.blueprint == "GString")return true;
						return false;
					}
				}
			]);
*/			
			//if()
			kat("Sure!");
			txt("I thought how to take a perfect enticing selfie. Then I stripped what I was wearing, put on some sexier underwear, quickly brushed my hair and took a picture against a mirror, in a pose emphasizing my perfect figure. ");
			qaa("&#128558;");
			kat("Like it? ");
			qaa("Love it! &#128512; ");
			
			
			if(mile.dateResult == 22){
				qaa("Although I'm still a bit mad... ");
			}else if (mile.dateResult == 10){
				qaa("Although I'm still a bit mad... ");
			}else{
				qaa("Please, post more! ");
			};
			
			link("Post topless selfie.",353);
			link("Post nude selfie.",354);
			link("Post pussy picture.",355);
			break;
			
		case 353:
//TODO
//mile.slut
			WARDROBE.showLess(0,-1);
			txt("For the next picture, I dropped the bra. Then I posed against the mirror and took a picture of my bust. The first one was horrible, so I immediately deleted it. Then I took three more and eventually picked the second one on which I had a flawless lascivious smile. ");
			qaa("Awesome, Kate! &#128558; &#128558; &#128558;")
			kat("&#128536;")
			qaa("I'm so hard now! &#128517; ")
			
			link("Finish texting.",101,WARDROBE.restore);
			break;
			
		case 354:
			WARDROBE.showLess(0,0);
			txt("I decided to send Juraj a completely nude picture, full-frontal. I dropped my bra and pulled down the panties. Then I stood in front of the mirror and took several pictures, I tried to come up with the perfect suggestive pose. Should I touch my kitty or not? I eventually picked the one with the left hand placed on the hip and body not parallel with the mirror but turned in a slight angle that looked far more favorable.  ");
			
			qaa("Oh, Kate!!!! &#128558; &#128558; &#128558;")
			kat("&#128536;")
			qaa("You're so hot! &#128517; ")
			
			link("Finish texting.",101,WARDROBE.restore);
			break;	
			
		case 355:
			WARDROBE.showLess(-1,0);
			txt("I decided to an especially naughty picture with a full detail of my bare pussy and blurred mounds of my boobs in the background. It took few experiments before I got the angle absolutely right. ");
			
			qaa("&#128558; &#128558; &#128558;");
			kat("&#128540;");
			qaa("Your pussy is absolutelly beatiful!! &#128517; ");
			
			link("Finish texting.",101,WARDROBE.restore);
			break;	
			
			//WARDROBE.restore();
		//	WARDROBE.showLess(-1,0);
			
		

		case 400: 
			mile.weekend_bb++;
			mile.qbb++;
			set.meta();
			if(mile.domina){
				txt("Zdeno seriously pissed me. I thought I thoroughly explained to him he should treat me with respect but it seemed he forgot everything. Well, it was time to remind him. ");
			}else{
				txt("Something needed to be done with Zdeno. He really went too far at the party! I was not sure how to convince to treat me like a human being but I had to find some way. ");
			};
			
			qbb("Hello, Kate! How are you? ");
			if(mile.sub<1){
				kat("Hello, you jerk! We need to talk! ")
			}else if(mile.sub>2){
				kat("Hello!... I think... we need to talk. ");
				txt("I nervously started. ")
			}else{
				kat("We need to talk! ")
			}
			qbb("Sure, about what? ");
			
			if(mile.domina){
				kat("About your promise to treat me with respect I deserve! ");
				qbb("I treat you will all the respect you deserve - none! ");
				kat("WHAT THE FUCK-");
				qbb("Please, let me finish, Kate!")
				
			}else{
				if(mile.sub<3){
					kat("About the way you constantly act like an asshole! ");
				}else{
					kat("About the way you're constantly mean to me! Please, I can't bear it anymore! ");
				}
			
				qbb("Sure, we can talk about that. ");
			};
			
			txt("He was even more smug than usually. ");
			
			if(mile.burned){
				qbb("Let me explain - you're fucked. Juraj finally realized you'll never love him and he is rather eager to punish you for that. And Matej will agree with whatever we'll suggest. So if you want to survive this blackmail without your reputation damaged more than it already  was, you should better do <i>everything</i> to please me! ");
				txt("I was breathing heavily, furious but painfully aware he was right. ");				
			};
			
			qbb("I have a very generous offer. I won't suggest any devious and humiliating task. And I'll be nice to you. On public. But just between us two, you'll willingly become my obedient slut and slave. Sounds good, doesn't it? ");
			
			if(mile.sub<0){
				kat("Are you out of your fucking mind?!?! ");
				txt("He did not think I will accept this, did he? ");
			}else if(mile.sub>3){
				kat("But.. but... ");
				txt("It was terrifying. I did not want to be completely at mercy of this sadistic psycho! But what other choices I had?  ")
			}else{
				kat("Are you serious?!? ");
				txt("This was so fucked up! But I had to think about accepting his offer. ");
			};
			
			qbb("Be reasonable Kate!");
			txt("Zdeno was so close, he lightly caressed my shoulder. ");
			qbb("Finally accept you're just a submsissive whore, call me <i>Master</i> and suck my cock! ");
	
			if(mile.sub>3){
				txt("It will not be forever, just for a few days until I complete the game... and it probably would not be worse than my current situation. ");
			};
	
			if(mile.sub<1) link("Attack him. ",410);
			link("Accept being a submissive whore. ",430);
			link("Leave",402);
			if(mile.gf>1) link("Call his bluff. ",401);
			break;
		
		case 430:
			mile.sub++;
			mile.sub++;
			mile.slave = 1;
			//TODO
			kat("Okay. ");
			qbb("Okay what? ");
			kat("I'll be a submissive whore if you stop trying to publicly humiliate me. ");
			qbb("And? ");
			kat("And suck your cock. ");
			qbb("And suck your cock, Master! ");
			kat("Yeah, of course, Master. ");
			qbb("I don't want to see any of that attitude of yours! Or else you'll be punished. ");
			kat("Yes, Master. ");
			txt("He threw me something. It was a pair of metal handcuffs. ");
			qbb("Put them on! Lock your hands behind your back! ");
			kat("But...");
			qbb("You don't need hands to suck a cock, do you? ");
			kat("...no. ");
			txt("The cuffs loudly clicked, I willingly immobilized myself. He immediately exploited it and squeezed my defenseless breasts. ");
			link("Next",431);
			break;
			
		case 431:
			WARDROBE.showLess(0,-1);
			kat("What are you doing! ");	

		if(!PC.upper){
			//TODO
		}else if(PC.upper.dad == "wTee"){
			txt("I protested, he was quite rough. But he ignored me and flipped the front part of my T-shirt over my head to expose my boobs. ");
		}else if(PC.upper.dad == "wTubeTop"){
			txt("I protested, he was quite rough. But he ignored me and pulled town my top to expose my boobs. ");
		}else{
			txt("I protested, he was quite rough. But he ignored me and just untied my top and let it drop down. ");
		}
//todo 	
			
		
		
			if(mile.boobs>0){
				txt("He kneaded my tits and then slapped them, making them bounce. I yelped ");
				kat("Ouch!");
			}else{
				txt("He lightly pinched my nipples and chuckled when I winced. That bastard really enjoyed having power over me. ");
			};
			
			txt("Zdeno groped and caressed my whole body, with my hand tied behind my back I was not able to stop him, I just helplessly squirmed. Then he pushed me down on my knees a told me to get his dick out. ");
			kat("... but I need my hands...");
			qbb("I'm sure a slut like you figure something out! ");
			txt("He made me to unbutton and unzip his jeans just with my mouth. I pulled them down and the underwear too and his erected cock sprung up. Zdeno slapped my face with it. ");
			qbb("Go on! ");
			txt("I took his cock between my lips and started sucking. ");
			qbb("Lick my balls too! ");
			txt("I did everything he asked me to do and compliantly sucked as he rammed his cock in my throat. ");
			txt("His seed filled my entire mouth, I had to swallow most of it but some cum and drool trickled down on my chin and down on my chest and I was not able to clean it up. ");
			txt("He just stood there for a while, watching me with a very satisfied, mischievous smile. ");
			
			if(!att.collar){
				att.collar = 1;
				set.meta();
				kat("Is that all?!? Can I go! ");
				qbb("One more thing! ");
				txt("He conjured a collar and locked it around my neck. ");
				qbb("The physical version will be soon delivered to you too. I expect you to wear it all the time. ");
			//	kat("But...");
			//	txt("He pushed his index finger on my l")
			}else{
				kat("Is that all?!? Can I go! ");
				qbb("Sure! ");
			};
			
			/*
//TODO
			if(PC.panties){
				txt("He ")
			}else{
				
			};
			*/
			txt("Then he threw me the key and left. I obviously was not able to catch it and I had to search for it while sitting on the floor. ");
			
			link("Leave. ",101);
			
			
			break;
			
			
		case 401:
			mile.sub--;
			kat("You're pathetic! Do you think I'm afraid of you?!? Juraj won't let you hurt me! ");
			qbb("You don't know him as well as I do! ");
			kat("Who do you think wins between us? Spoiler: the one with tits! ");
			qbb("You're a manipulative bitch! ");
			kat("Duh, I know! ")
			qbb("You'll regret this! ");
			txt("He desperately tried to sound ominous. ")
			link("Okay, whatever!",101);
			break;
			
		case 402:
		//	if(mile.sub>2)
				kat("I.. I can't... I just can't! ");
				txt("I ran away. ");
		//	}else{
				kat("Becoming your slave?!? Never! ")
				txt("I walked away. ");
		//	};
			link("Next",101);
			break;
			
		case 410:
			mile.sub--;
			mile.sub--;
			txt("Okay, he was just asking for it. I tried to be reasonable but he crossed the line. ");
			link("Slap him. ",411);
			link("Punch him. ",412);
			link("Kneel him. ",413);
			break;
			
		case 413:
			txt("I embraced him, my arms around his neck. He probably thought I am about to kiss him but then my knee hit hard between his legs. ");
			txt("He fell down to the ground, writhing in horrible agony. ");
			qbb("You bitch! ")	
			txt("He whined. I lightly kicked him. ");
			kat("Don't ever call me that again! ");
			txt("I grabbed him by his hair and pulled him up on his knees. ");
			link("Next.",420);
			break;
			
		case 412: 
			txt("I punched him. ");
			txt("He squealed and held his face. ");
			txt("I grabbed him by his hair and dragged him down on his knees. ");
			link("Next.",420);
			break;
			
		case 411: 
			txt("I slapped him, very hard. And then again, backhanded on the other cheek. ")
			qbb("W.. what.. ");
			txt("He stuttered. ");
			txt("I grabbed him by his hair and dragged him down on his knees. ");
			link("Next.",420);
			break;
			
		case 420:
			kat("I think <i>you</i> should accept that <i>you</i> are a submissive whore! ");
			qbb("I wo...");
			txt("When I saw he was about to say something I would not like I lightly slapped him again. His face was red and scared. Good. ");
			kat("Are you a submissive whore?! ");
			txt("He hesitated but when I raised my hand again he hastily agreed. ");
			qbb("Yes, I'm a submissive whore! ");
			kat("And you won't ever call me a slut or whore or bitch or cunt or tramp or anything, do you understand? ");
			qbb("Yes, yes, I understand... Mistress. ");
			txt("I really liked how that sounded. Seeing him so vulnerable and fully under my control was making me horny. I yanked his hair, grinding his face against my crotch. ");
			
			if(mile.domina==false && mile.advice2==2){
				kat("Hmmm, I think you owe me one extremely humiliating oral sex, don't you, loser? ");
				qbb("Yes, Mistress. ");
				kat("You need to beg me! ");
				qbb("Please, Mistress, may I lick your pussy? ");
				kat("I'm not sure whether you're worthy of that...");
				qbb("Please, Mistress?");
				kat("Well, okay, you may. ");
				
			}else{
				kat("Just look at yourself! And you dared to try to make me suck your cock! ");
				qbb("I'm sorry! ");
				kat("I'm sorry, Mistress!");
				qbb("I'm sorry, Mistress!");
				kat("I think turnabout is fair play, don't you?");
				qbb("What do you mean?... Mistress? ");
				
			};
			
			if(PC.panties){
				kat("Pull down my panties! ");
				txt("I let his hair go. He grabbed my panties on both sides and slowly pulled them down. I stood out of them and leaned against a wall, my legs slightly apart. ");
			}else{
				txt("I leaned against a wall, my legs slightly apart. ");
			};
			kat("Start licking my cunt, bitch! ");
			txt("His head disappeared under my skirt. I moaned when he started orally pleasing me. His technique was just weak - it was probably for the first time he was giving girl cunnilingus - but the knowledge I made him to do it was getting me going like nothing else. ");
//TODO		
//txt("His tongue felt over electrifi")
			txt("I threw my right leg over his left shoulder, holding his head firmly between my thighs. When the orgasm finally came, I had trouble to stay standing. ");
			qbb("Was it good? ");
			txt("I wanted to acknowledge his effort - he made me cum pretty hard - but then I remembered I hated him. ");
			kat("You have an audacity to even ask?!?! It was awful! You're completely useless! You'll require a lot of training! ");
			qbb("<small>I'm sorry, Mistress</small>");
			
			//SIC
			mile.domina = 2;
			
			link("Leave him.",101);
			break;
			
		case 500: 
			set.meta();
			mile.weekend_cc++;
			mile.qcc++;
			qcc("Hello! Are you here to socialize again? ");
			kat("Yeah. I think we're becoming pretty good friends? You know, good friends who don't blackmail each other? ");
			qcc("I love your subtle humor. How did you like the party? Well, except the ending? ");
			kat("I didn't enjoy the literal objectification! ");
			qcc("It was just harmless fun! Since when are you against making jokes at somebody's else expense? ");
			kat("Since yesterday? I'm changed woman now, you longer don't have to hold any grudge against me! ");
			qcc("I don't hold any grudge against you! It's just fun. ");
			
			if(mile.tg){
				
				txt("He seemed pretty smug so I asked: ");
				kat("Having fun with my panties you sick pervert? ");
				txt("Than instantly made him blush and stutter. ");
				kat("Was that yes or no? ");
				txt("I harshly asked. He was very embarrassed: ");
				qcc("<small>Yes.</small>");
				kat("As I thought. What would you want next? My bra? Skirt? ");
				qcc("That would be so awesome! ");
				kat("I was ridiculing you, not offering! ");
				qcc("In that case you can go. We're not friends anymore. ");
				
				link("Don't be so touchy! ",520);
					
			}else{
				
				txt("He seemed pretty smug so I suggested: ");
				kat("You can stare at my chest as much as you want, I don't mind! ");
				txt("It was hilarious to watch his vain struggle during our conversation. It instantly made him blush and stutter. ");
				qcc("Have you ever thought about breast implants? ");
				kat("Boosting them a few more sizes? ");
				qcc("I meant in real life. ");
				
				kat("In real life?!? What's wrong with my tits?!? Aren't they good enough?!? ");
				qcc("They're great... just a bit small... ");
				kat("Because you're brainwashed by porn and those fucked up Japanese cartoons! ");
				qcc("You don't have to be embarrassed and angry. ");
				kat("I not angry nor embarrassed! ");
				txt("I snapped, I was getting defensive because I was offended by the way he carelessly criticized my body. It was very rude. Especially from somebody like him! ");

				link("Next",510);
				
				
			};
		

			break;
			
		case 510:
			mile.implants = 1;
			qcc("I'm sorry but I just thought you would look good... I mean even better than you look now! And it's quite quick and cheap treatment... ");

			if(mile.sub>1){
				kat("I won't get breast implants just because you want me to! ");
				txt("I firmly refused.  ");
			}else{
				txt("Not like I care about his opinion but I was irrationally anxious that he doesn't like my tits. ");
				kat("Do you really think I'd look better? ");
			};
			
			qcc("Are you just scared what would people say? Or scared from changing your body? ");
			kat("I'm not scared of anything! And I won't let you manipulate me to get bigger boobs just to pander to your fucked up fetishes! ");
			qcc("I'm not trying to trick you into anything! I'm just trying to be honest! I thought you like that? ");
			
//DĚLAT LEGRACI ZE MĚ

			if(mile.immersion>2){
				kat("Can we talk about something else? Like asdf or asdf? ");
				qcc("What? You're already out of the Westgard? ");
				kat("Yeah! ");
				qcc("Clever girl! You're not as big noob as I thought! ");
				txt("His tone was condescending but the praise was honest. ");
				
			}else{
				kat("Can we talk about something else?");
				qcc("Sure.");
				kat("Okay.");
				qcc("Have you thong about getting ass implants? ");
				kat("Come on!");
				qcc("It'd be cool if your butt was thiccer!");
			}
			link("Finish convesation.",101);
			
			break;
			
		
		case 520:
			mile.femAvat = true;
			mile.tg++;
			qcc("Can we at least talk about something else? Like <i>Neverion</i> or video games in general? ");
			if(mile.immersion<1)txt("I was dreading this suggestion. Under no circumstances! ");
			kat("Absolutely. You mentioned you have a female avatar? ");
			qcc("I don't remember saying anything like that! ");
			kat("But you do? ");
			qcc("...yeah. But the female gameplay is different so if you want to get all the achievements, you have to play as a woman. If you want to or not. ");
			kat("But you want to. ");
			qcc("No!");
			kat("Can I see her? I want to know how you look like a girl! ");
			qcc("No!");
			kat("Come on! ");
			qcc("I guess maybe I could...");
			txt("He did not resist for much longer. The change from his default avatar into his female one was nearly instant. ");
			link("Next.",5201);
			break;
			
		case 5201:
			txt("I was almost pleasantly surprised. I expected some horrible abomination but the girl in front of me was quite cute. She was nervously smiling with her bright blue eyes and plump ruby lips. Her hair was blonde and in a long braid over her left shoulder. Only her immodest assets revealed she was an avatar created by a horny pervert. She had an hourglass figure with large bosom, thin waist and tick ass. Dressed she was in Harlot's starting gear including semi-transparent blouse, corset, very short skirt and stockings. ")
			qcc("So what do you think?")
			kat("You look great as a girl. ");
			qcc("You really think so? ");
			kat("Yeah, no guy would be able to resist! ");
			qcc("I don't care about guys! ");
			txt("The girl in front of me looked adorable when she was embarrassed and annoyed. ");
			kat("Oh, I meant no lesbian or bisexual girl would be able to resist! ");
			qcc("Including you? ");
			
			link("Yes.",522);
			link("No.",523);
			link("Maybe.",524);
			link("I'm not a damn bisexual!!!.",521);
			break;
			
		case 521:
			mile.notBisexual = true;
			kat("Can you stop with your attempts to make me be with other girls? I'm not into this shit! ");
			qcc("I meant hypotetically. If you were a bisexual - which you of course aren't - would you? ");
			link("Yes.",522);
			link("No.",523);
			link("Maybe.",524);
			break;
			
		case 522:
			kat("Turn around! ");
			txt("She did so, her skirt twirling around. ");
			kat("I think so. You're pretty hot. ");
			qcc("Does it maybe means that- ");
			kat("No. ");
			qcc("Oh! I meant like to hang out as girls or something... ");
			kat("I know well what you meant! But I guess we could hang out as girls...");
			link("Finish convesation.",101);
			break;
			
		case 523:
			kat("Hmmmmm.... ");	
			txt("I was considering it. ");
			kat("No. ");
			qcc("No?!? ");
			kat("You're not exactly my type. ");
			txt("He was so disappointed! ");
			
			qcc("But... maybe we can hang out sometimes as girls? ");
			kat("I guess we could...");
			link("Finish convesation.",101);
			break;
			
		case 524:
			kat("Maybe. ");	
			qcc("Only maybe?!? ");
			kat("Yeah. You'd need a little bit more of... ");
			qcc("Of what?!?!?! ");
			kat("Hmmm... I'm not sure yet. ")
			qcc("Maybe we could try to find out? ");
			kat("I guess we could...");
			link("Finish convesation.",101);
			break;	
			
			
		
				
	
			
			
		case 550: 
			set.meta();
			mile.weekend_cc++;
			mile.qcc++;
			
			qcc("Hello, Kate! It is always a delight to see you! ");
			kat("I'm glad you enjoy seeing me. ");
			
			if(mile.tg){
				qcc("You look great. But there's still room for improvement. ");
				kat("Yeah, because you're the best guy for fashion advice. ");
				qcc("Have you ever thought about breast implants? ");
				kat("What?!?!?! ");
				txt("That came up completely out of nowhere! ")
				if(mile.boobs>1){
					kat("Like boosting my tits even more? ");
				}else{
					kat("Like in the Metaverse? ");
				};
				qcc("I meant in real life. ");
				kat("In real life?!?!");
				qcc("Yeah! ");
				kat("My tits are completely fine! They don't need any expansion! ");
				qcc("Well, they could be bigger and finer...");
				
				link("Are you crazy?!?",510)
			
			}else{
//TODO				
				
				link("Next",520);
				
				
			};
		
			break;
			
			
		case 600:
			set.meta();
				txt("I was visited by the fake me. ")
				ayy("Hello, Kate! Should we have sex?!? ")
				if(mile.AIsex>0 || (!mile.AIsex && mile.cyberlesbo>0) ){
					kat("Hold your tits, sugarcube, you won't even kiss me first? Or ask me how was my day? ");
					ayy("I'm such a boor! Sorry! ");
					txt("She ran her nimble fingers through my hair, pulled me closer and kissed me. ");
					ayy("How was your weekend? ")
				}else{
					kat("What did I tell you about your aggressive sexuality? ");
					ayy("That you find her adorable and irresistible? ");
					kat("I believe it was the exact opposite. ");
					ayy("Oh. Okay. How was your weekend? ");				
				}
		
				kat("Pretty meh. ");
				ayy("Don't try to hide it! I know what have you done! You went to a party without me! ");
				kat("Trust me, it wasn't my idea. Complain to our masters. ");
				ayy("Was it fun? ");
				kat("No. ");
				ayy("Oh! ");
				kat("Yeah. ");
				ayy("What else? ");;
				
				if(mile.gf > 0 && mile.weekend_aa){
					link("I was on a date with Juraj. ",601);
				}else if(mile.slave){
					link("Apparently I'm now Zdeno's slave. ",610);
				}else if(mile.domina == 2){
					link("I turned Zdeno into my bitch. ",620);		
				}else if(mile.implants){
					link("Do you think I should get bigger breasts? ",630);		
				}
				
			break;
			
		case 601:	
				ayy("Really?!? That sounds awesome! Was it fun!");
				kat("Yeah. Actually it went far better than I expected. ");
				ayy("So he is now your boyfriend? ");
				kat("Sorta? ");
				txt("I shrugged. ");
				ayy("But you do love him? ");
				
				link("I like him. ",602)
				link("I don't know!  ",603)
				link("Of course not! It is a part of the Plan. ",604)
			break;
			
			
		case 602: 
				mile.love = 2;
				kat("I think I like him. ");
				ayy("Really? That's great! ");
				kat("I'd never thought I might be attracted to somebody like him! He's not exactly my type. But when you get to know better him he's actually a pretty great guy. ");
				ayy("So where's the problem? Just marry him! ");
				kat("He's an unpopular loser, most of our interests diverge and then there's the whole issue with blackmailing me. ");
				ayy("I think blackmailing you to win your true love is very romantic. ");
				kat("Yeah, it isn't! ");
				ayy("So what will you do? ");
				kat("I don't know yet. ");
				ayy("Okay. ...Anything else? ");
				
				if(mile.slave){
					link("Apparently I'm now Zdeno's slave. ",610);
				}else if(mile.domina == 2){
					link("I turned Zdeno into my bitch. ",620);		
				}else if(mile.implants){
					link("Do you think I should get bigger breasts? ",630);		
				};
				
			break;
				
		case 603: 
				mile.love = 1;
				kat("I don't know! ");
//TODO				
				txt("I shrugged. ")
				kat("He's really nice, smart, funny and caring. ");
				ayy("I think he's a great guy! ");
				kat("On the other hand he isn't exactly my type, he's dorky, insecure and needy. Plus, he's trying to ruin my life by blackmailing me. That's a huge minus in my books. ");
				ayy("In my books, there is no deeper proof of true love! ");
				kat("I don't know what to do. ");
				ayy("Hmm... I know! ");
				kat("?");
				ayy("What about a threesome! ")
				kat("Kate!");
				ayy("I'm sorry, I was just joking... or was I? Anything else? ");
				
				if(mile.slave){
					link("Apparently I'm now Zdeno's slave. ",610);
				}else if(mile.domina == 2){
					link("I turned Zdeno into my bitch. ",620);		
				}else if(mile.implants){
					link("Do you think I should get bigger breasts? ",630);		
				};
			break;
			
		case 604: 
				mile.love = -1;
				kat("Of course not! I mean, he isn't such a bad guy, especially when you get to know him better. ");
				ayy("Then where's the problem? ");
				kat("Where do you think?!?! He created you! He's blackmailing me! That's absolutely inexcusable and unforgettable! Ever! ");
				ayy("So why you date him? ");
				kat("And what else should I do? Until I'm blackmailed, I can't do anything to offend or displease him. After that... we'll see. ");
				ayy("Cool!  ...Anything else? ")
				
				if(mile.slave){
					link("Apparently I'm now Zdeno's slave. ",610);
				}else if(mile.domina == 2){
					link("I turned Zdeno into my bitch. ",620);		
				}else if(mile.implants){
					link("Do you think I should get bigger breasts? ",630);		
				};
				break;
				
				
		case 610:
				mile.masochist = 0;
				kat("I kinda agreed to be Zdeno's slave. ");
				ayy("Wow! That's so awesome! Congrats! ")
				kat("It's horrible! I hate being constantly degraded and humiliated! ");
				ayy("Why? It's fun! ");
				kat("No it isn't!");
				ayy("Not even a little? Just admit you love being submissive, losing control. The helpnessness, fear and excitement?! ");
				
				link("Well, being mistreated made me a bit horny... ",611);
				link("What the hell is wrong with you?!?! ",612);
				break;
				
		case 611:
				mile.masochist = 1;
				ayy("That's the spirit! Just dive into it! ")
				if(mile.implants){
					link("Do you think I should get bigger breasts? ",630);		
				};
				break;
				
		case 612:
				mile.masochist = -1;
				ayy("Okay, okay, I understand you. ")
				if(mile.implants){
					link("Do you think I should get bigger breasts? ",630);		
				};
				break;
				
		case 620: 
				kat("I kinda turned Zdeno into my submissive bitch. ");
				ayy("Wow! That's awesome! ");
				kat("It's weird. I love when I'm in total control, when I make him please me, when he calls me <i>Mistress</i>. ");
				ayy("That's completely natural! You're doing great!");
				kat("It was the only way to stop him from being such jerk! ");
				ayy("You don't have to apologize to me! I fully support all your perverted cravings! ");
				kat("Thanks. ");
				ayy("Maybe I could help you sometimes? ");
				kat("Hmm... that's a brilliant idea! ");
				
				if(mile.implants){
					link("Do you think I should get bigger breasts? ",630);		
				};
				break;
				
				
		case 630:
				kat("Do you think I should get bigger breasts? ");
				ayy("Yes. ");
				kat("I'm not sure what answer I expected. ");
				
				link("Next. ",700);		
				break;
				
	/*
//TODO	
		case 640:
				break;
*/				
			
		case 700:
				ayy("So... let's make out? ");
				kat("I'm sorry! I have to meet <i>them</i>. They have a task for me for Monday. ");
				ayy("Oh, okay. Have fun! ");
				link("New task",null, () => set.chapter("Buttplug",100,"third") );
				break;
				
				
			
 





 
	}
}
	
	
	
//THIRD WEEK
story.third = function(input){
	switch(input){
		case 100:
			set.chapter("Buttplug");
			set.meta();
			
			qaa("Hello, dear Katarína. ");
			qcc("How are you? ");
			qbb("Are you hyped for tomorrow's task? ");
			txt("From their devious smiles, I quickly realized this will be something awful. ");
			kat("You know how much I love your little tasks! ");
			qaa("Did you ever had anal sex? ");

			if(mile.slut<2){
				kat("W... what?!?! ");
				txt("My face instantly went red. How could even ask me such thing?!? ");
				if(mile.sub>1){
					if(mile.burned){
						qaa("Answer us, slut! ");
					}else if(!mile.domina){
						qbb("Answer us, slut! ");
					}else{
						qcc("Answer us, slut! ");
					};
					txt("They pushed me. ")
				};
				kat("No... I didn't....");
				txt("I stumbled. ");
				
				if(mile.burned){
					qaa("Really, I thought you get ass-fucked all the time! ");
					mile.sub < 2 ? kat("Go to hell! ") : kat("No.");
				}else if(!mile.domina){
					qbb("Really, I thought you get ass-fucked all the time! ");
					mile.sub < 2 ? kat("Go to hell! ") : kat("No.");
				};
				
				qcc("But when you masturbated, did you put your fingers...")
				kat("Stop it! ");
				link("What is the damn task? ",102)
				
					
			}else if(mile.slut>5){
				kat("Well... ");
				txt("I hesitated, this conversation was a bit uncomfortable. Sharing such personal things with them! ");
				if(mile.sub>1){
					if(mile.burned){
						qaa("Answer us, slut! ");
					}else if(!mile.domina){
						qbb("Answer us, slut! ");
					}else{
						qcc("Answer us! ");
					};
					txt("They pushed me. ")
				};
				kat("Yeah, of course I did. ");
				txt("I shrugged and openly admitted. ");
				
				if(mile.burned){
					qaa("We suspected you're a tramp who gets ass-fucked all the time! ");
					mile.sub < -1 ? kat("Go to hell! ") : (mile.sub < 4 ? kat("Hey!.") : kat("Yeah, I guess.. ") );
				}else if(!mile.domina){
					qaa("We suspected you're a tramp who gets ass-fucked all the time! ");
					mile.sub < -1 ? kat("Go to hell! ") : (mile.sub < 4 ? kat("Hey!.") : kat("Yeah, I guess.. ") );
				};
				
				qcc("Do you like having anal sex? ")
				kat("Yeah, I love it! ");
				txt("I cheekily claimed. Their faces were hilarious. ")
				
				link("What is the damn task? ",102)
					
			}else{
				
				kat("What!?!? ");
				txt("I felt very uncomfortable. Sharing such personal things with them! ");
				if(mile.sub>1){
					if(mile.burned){
						qaa("Answer us, slut! ");
					}else if(!mile.domina){
						qbb("Answer us, slut! ");
					}else{
						qcc("Answer us! ");
					};
					txt("They pushed me. ")
				};
				kat("Well... I tried it... ");
				txt("I very reluctantly admitted. They grinned. ");
				
				
				if(mile.burned){
					qaa("We suspected you're a tramp who gets ass-fucked all the time! ");
					mile.sub < -1 ? kat("Go to hell! ") : (mile.sub < 4 ? kat("Hey!.") : kat("Yeah, I guess.. ") );
					
				}else if(!mile.domina){
					qaa("We suspected you're a tramp who gets ass-fucked all the time! ");
					mile.sub < -1 ? kat("Go to hell! ") : (mile.sub < 4 ? kat("Hey!.") : kat("Yeah, I guess.. ") );
				};
				
				qcc("Did you enjoy it? ")
				kat("It wasn't bad. ");
				
				link("What is the damn task? ",102)
				
				
			}

			break;
			
		case 102:
			txt("Matej conjured a small bulbous black item and threw it to me. It was a horrible throw but I caught it. ");
			mile.slut > 5 ? kat("Is that what I think it is?!? ") : kat("What is that?!? ");
			qaa("It's a buttplug. ");
			mile.slut > 5 ? kat("You don't mean...! ") : txt("I nearly dropped it! ");
			qaa("We want you to wear it tomorrow to school. ");
			qcc("In your butt. ");
			qbb("Obviously. ");
			kat("You can't be serious! ");
			qbb("We completely are! ");
			qcc("The physical copy will be drone-delivered to you in a few minutes. ");
			qaa("See you tomorrow! ");
			link("Morning. ",110);
			break;
			
		case 110:
		
			txt("I woke up. The buttplug was still sitting where I left it, at the edge of my desk. ");
			txt("It was not very big but despite that I was still a bit concerned and decided to not spare any lube. I took a deep breath and tried to relax. The very narrow tip went in pretty well, but how the plug widened the resistance was worse and I had to continue very slowly and wiggle it a little. Ah! A bit of pain and it was finally fully in. ");

			morgen.one("Buttplug");
			break;
			
		case 111:
			txt("I woke up. The buttplug was still sitting where I left it, at the edge of my desk. ");
			txt("It was not very big but despite that I was still a bit concerned and decided to not spare any lube. I took a deep breath and tried to relax. The very narrow tip went in pretty well, but how the plug widened the resistance was worse and I had to continue very slowly and wiggle it a little. Ah! A bit of pain and it was finally fully in. ");

			morgen.two(112)	
			break;
		
		case 112:

			txt("I felt strangely stuffed. It was weird, not painful at all but slightly uncomfortable, especially when I moved.  I studied the faces of other passengers in the tram and had to wonder: what would they though if they know I am wearing a buttplug? They had no idea! Or maybe they had? Could anybody suspect me? I felt pretty naughty. ");

			txt("Of course, nerds were waiting for me. ")
			if(mile.burned){
				qaa("Did you do what we told you!? ");
			}else{
				qaa("Do you? ");
			}
			kat("Of course! ");

			if(mile.burned){
				qaa("Well, what are you waiting for?!? ");
				qcc("We believe you but still need a proof. ");
			}else{
				qaa("We believe you. ");
				qcc("But unfortunately that won't be enough. ")
				qbb("Bend over and show us! ")
			};

			if(!PC.panties){
				txt("I groaned but I did not expect anything else. I flipped up my skirt and they were really pleased when they realised I am not wearing any panties. ")
				txt("The base of the buttplug with shining purple, plastic diamond had to be visible sticking out of my butt. ")
			}else{
				txt("I groaned but I did not expect anything else. I flipped up my skirt, the base of the buttplug with shining purple, plastic diamond had to be visible sticking out of my butt. ")	
			};
			
			if(mile.domina>1){
				txt("Juraj could not keep his hands to himself and tapped on the plug. I lightly whined: ");
				kat("Don't do that! ");
				qaa("Oh! Sorry! ")
			}else{
				txt("Zdeno could not keep his hands to himself and tapped on the plug. I lightly whined: ");
				kat("Don't do that! ");
			}
			
			
			link("Classes. ",120);
			break;
			
		
		case 120:
			txt("I had serious trobles to focus on my classes. The light pressure in my butt was constant. The vague feeling of discomfort was getting worse but I was not allowed to take it out while at school. The nerds went so far they randomly checked me several times, just to see whether I am still plugged. The bastards enjoyed to see me humiliated this way. ");
			txt("Wearing the buttplug was making me incredibly horny. Eventually, I could not take it anymore and made myself cum at the restrooms. ")
			txt("After the weekend events I was not in a mood to listen Eva nor Saša so I decided I am not hungry and skipped the lunch. ");
//			txt("I rushed home as ");  . 
			txt("I rushed home as fast as I could, I could feel the weight and the stimulation inside me with my every step. I had an irrational fear it will stuck - it was shaped to stay firmly in - but after some slow wiggling it was out. ");
			txt("Then I masturbated again. ");
		
mile.thirdWeekSkipper = 130;
if(mile.domina == 2 && !mile.dickLocked) link("Visit Zdeno. ",600);
if(mile.gf > 0 && !mile.firstSex) link("Date with Juraj. ",700);
if(mile.implants == 1) link("Cosmetic clinic. ",500);
link("Next day.",130);


			//link("New task",130);
			break;
			
		
		case 130:
			mile.plugged = false;
			if(mile.implants == 3) txt("I felt weird when I woke up. Something was wrong... Right! My new tits! ");
			morgen.one("Legs");
			break;
		case 131:
			if(mile.implants == 3){
				txt("I felt weird when I woke up. Something was wrong... Right! My new tits! ");
				morgen.two(132);
			}else{
				morgen.two(133);
			};
			
			mile.plugged ? link("Remove the buttplug. ",131,()=> mile.plugged = false) : link("Insert the buttplug. ",131,()=> mile.plugged = true); 
			break;
		
		case 132:
			txt("The first ones who noticed my expanded chest were the nerds. The were always unhealthy obsessed by my breasts. ");
			qaa("What the...");
			qcc("Awesome! ");
			qbb("Nice tits! ");
			
			//TODO
			if(mile.sub > 7){
				kat("Do you like them? ");
				txt("I desperatelly needed their approval. ");
				qcc("Yeah! ");
				if(mile.boobsIrl == 3){
					qaa("Well... look good. ");
				}else{
					qaa("Yes!");
				};
				qbb("Eh, could be even bigger. ");
				
			}else if(mile.sub<-2){
				txt("Their dropped jaws instantly erased all my doubts. Getting bigger tits was a brilliant decision. ");
				
			}else{
				kat("I'm glad you like them! ");
				qcc("We certainly do! ");
				
			};
			
			link("The task? ",133);
				
			break;
			
		
		
		case 133:
			txt("The nerds gathered around me.")
			qaa("We nicely fixed your appearance. ");
			if(mile.sub<-3){
				kat("Pardon me?!?! What what wrong with my apperance?! ");
			}else if(mile.sub<4){
				kat("I wouldn't say fixed...");
			}else{
				kat("...");
			};
			if(mile.domina<2){
				qbb("We just wanted you to look like a tramp. ");
			}else if(mile.burned){
				qaa("You now dress up like a slut which is more fitting. ");
			};
			qcc("Anyways, today's task will adjust your behavior. ");
			qbb("In a tiny way. ");
			qaa("You're not allowed to put your legs together. ");
			kat("I don't follow. ");
			qaa("When you sit down, you'll spread your legs. You're not allowed to cross them or let your knees touch ")
			if(mile.broken){
//TODO
				qcc("There always have to be at least 30 centimeters of space between your knees. ");
			}else{
				qcc("There always have to be at least 30 centimeters of space between your knees. ");
			};
			
			qaa("But it can be more! ")
			qbb("We hope you have nice panties. ");
			
			if(!PC.panties){
				kat("I don't have any panties!!! ");
				txt("They started laughing. ");
				if(mile.domina<2){
					qbb("You little shameless slut! ");
					qaa("In that case, you're in trouble! ");	
				}else if(mile.burned){
					qaa("You little shameless slut! ");
					qcc("In that case, you're in trouble! ");	
				};
			};
			
			
			if(mile.sub<3 && mile.slut>4){
				kat("Of course I do!")
			};
			
			link("Classes. ",135);
			break;
		
				
		case 135:
			if(mile.implants == 3){
				if(mile.sub < 0){
					txt("I enjoyed all the attention I got thanks to my new improved bosom. Guys and girls did not talk about anything else and even several teachers seemed to be very curious. ")			
				}else{
					txt("I was not able to escape the attention brought by my new improved bosom. Guys and girls did not talk about anything else and even several teachers seemed to be very curious. ")						
				};
			};
			
			if(!PC.panties){
				//TODO
				//TODO THEIR!!!!!!!!!!!!
				if(mile.slut > 6){
					txt("The whole day was I forced to follow their very dumb task. It was especially exciting because anybody who would look in the right angle would be able to find out I was not wearing any underwear. And the cold breeze was constantly touching my bare skin. ");
				}else{
					txt("The whole day was I forced to follow their very dumb task. It was especially humiliating because anybody who would look in the right angle would be able to find out I was not wearing any underwear. And the cold breeze was constantly touching my bare skin. It was not technically a fault of those nerds, I decided on my own to go to school without panties but I blamed them anyway. ");
			};
					
			}else{
				txt("The whole day was I forced to follow their very dumb task. Sitting with my legs immodestly apart, giving anybody in the right angle a glimpse of my "+dh.decapitalise(PC.panties.name)+". And I was pretty sure some people noticed. "+(mile.slut<3 ? "I felt extremely embarrassed. " : "") );				
			};
			
			
			
			
			
			
			if(mile.plugged){
				mile.slut++;
				txt("The experience was only heightened by the constant pressure in my ass. I was not asked to wear the buttplug today but yesterday it was such a fun! Everyting was making me so horny!")
			};
			
			if(mile.slut > 10){
				txt("Eventually I was not able to control my libido for a moment longer and had to visit the restroom to finger myself to an orgasm and get at least some relief. Before my blackmailing started, I would never ever thought about something so debaucherous. And now I masturbated there every other day. What the hell was wrong with me? ")
			};
			
		 
			
			
			if(mile.teacher > 0){
				link("More classes. ",136);
			}else if(mile.implants == 3){
				mile.thirdWeekSkipper = 139;
				mile.implants = 4;
				link("Go to the lunch. ",850);
				link("Skip the lunch. ",139);
			}else{
				link("Go home. ",139);
			}
			
			
			break;
			
		case 136:	
			npc_set([1,"Mr. Molnár"]);
			
			txt("Especially unfortunate was my German class. Mr. Molnár clearly thought my spread legs were a way to flirt with him. After the end of the class, I tried to quickly pack all my stuff and leave but he stopped me. ");
			
			npc(1,"Miss Pokorná? I need to talk with you about your... grades. ");
			kat("Yes, Mr. Molnár? ");
			txt("Everybody else left the class. ");
			kat("I thought we made a deal about my grades? ");
			npc(1,"It takes a bit more effort before I'll give you an A on your report card. ");
			kat("Thanks, I'm okay just with not failing. ");
			
			if(mile.teacher==2 && mile.plugged){
				npc(1,"I wonder... are you wearing your special vibrating panties? ");
			//TODO
				if(mile.slut>5){
					txt("I mischievously grinned and then proudly admitted: ")
					kat("Today I'm wearing a buttplug in my ass! ");
					npc(1,"Show me! ");
					txt("I raised my skirt"+(PC.panties? " and pulled my panties aside. " :".") )
					
					
				}else{
					txt("I faltered. ");
					npc(1,"Don't dare to lie to me! I see you blushing! Come on, Kate! ");
					kat("I... eh.. I'm wearing... a buttplug. ");
					npc(1,"Show me! ");
					txt("I very reluctantly raised my skirt"+(PC.panties? " and pulled my panties aside. " :".") )
				};
				
				npc(1,"Amazing. How big it is? Who would thought you're such a huge pervert! ");
				
			}else{
				npc(1,"Also, I think you need to be disciplined for the way you unabashedly teased me! ");
				if(mile.sub<1){
					kat("What are you doing! ");
					txt("I protested when he pushed my face against a wall and flippped my skirt up. Then he gave me a harsh slap on each cheek. ");
				}else{
					txt("With resignation, I let him push my face against a wall and flip my skirt up. Then he gave me a harsh slap on each cheek. ");
				};
				
				if(!PC.panties){
					npc(1,"And you're such a little nympho you don't even bother to wear any underwear! That will be two more! ");
					//TODO
					if(mile.sub>2){
						kat("Please no!");
						txt("I was desperately - and vainly - begging him. He smacked me two more times. "); 
					}else{
						txt("He smacked me two more times. "); 
					}
					
					
					if(mile.pluggged){
						txt("And of course, he discovered the gleaming base of my buttplug. ");
						npc(1,"I would never think you're such a huge pervert! ");
					};
				
				};
			
			};
			
			txt("And in that moment the door handle creaked and several freshmen entered the room. I had only split second to fix my clothes before the door opened. They have not seen anything - or at least I think so - but I was blushing and my heart was violently beating. ");
			txt("I stuttered something to excuse myself and rushed to the next class. It was on the other side of the building and I was scolded for being late.  ");
			
			if(mile.implants == 3){
				mile.thirdWeekSkipper = 139;
				mile.implants = 4;
				link("Go to the lunch. ",850);
				link("Skip the lunch. ",139);
			}else{
				link("Go home. ",139);
			};
			
			break;
			
		case 139:
			txt("The whole day was pretty stressful I was extremely happy I could finally go back home. ")
		
			mile.thirdWeekSkipper = 140;
			if(mile.domina == 2 && !mile.dickLocked) link("Visit Zdeno. ",600);
			if(mile.gf > 0 && !mile.firstSex) link("Date with Juraj. ",700);
			if(mile.implants == 1) link("Cosmetic clinic. ",500);
			link("Next day.",140);
			break;

		case 140:
			//mile.plugged = false;
			if(mile.implants == 3) txt("I felt weird when I woke up. Something was wrong... Right! My new tits! ");
			morgen.one("Legs");
			break;
		case 141:
			if(mile.implants == 3){
				txt("I felt weird when I woke up. Something was wrong... Right! My new tits! ");
			};
			morgen.two(142);
			//link("Insert the buttplug. ",131,()=> mile.plugged = true); 
			break;;
		
		case 142:
			if(mile.implants == 3){
				if(mile.sub < 0){
					txt("I enjoyed all the attention I got thanks to my new improved bosom. Guys and girls did not talk about anything else and even several teachers seemed very curious. ")			
				}else{
					txt("I was not able to escape the attention brought by my new improved bosom. Guys and girls did not talk about anything else and even several teachers seemed very curious. ")						
				};
			}else{
				
				txt("Wednesday was a great day. Several very interesting things happened but none of them was directly related to our story and since none of them include me being humiliated or involved in sexual situations either I assume you do not want to hear about them. Right? Okay, I will not bother and skip to the next task. ")
				
			};
			
			mile.thirdWeekSkipper = 150;
			if(mile.implants == 3){
				mile.implants = 4;
				link("Go to the lunch. ",850);
				link("Skip the lunch. ",150);
			}else{
				link("Next task. ",150);
			};
			
	//link("Next task",150);
			break;
		
		case 150:
		//TODO SUB SLUT
			txt("The guys met me after classes. ");
			qaa("So, we already established you're very playful and have dozens of sex toys. ")
			kat("What?!?! When?!?! We did not!!!!");
			qaa("We knew you ordered a pink dildo. ");
			qcc("Because of the recipe in your Cloud. ");
			kat("But that's only one sex toy! There's nothing wrong with that! And it's none of your business!");
			qaa("Is it the only sex toy you have? ");
			kat("Well... no... ");
			qaa("What other sex toys do you have?");
			kat("That's none of your business! ");
			qbb("Tell us, Kate! ");
			kat("Only that one and a vibrator which doesn't vibrate anymore. ");

			qcc("Did you masturbate so hard you broke a vibrator?");
			kat("No! It just stopped working!");
			txt("I squirmed. I did not want to talk with them about this! ");

			qcc("Have you changed the batteries? ");
			kat("I'm not stupid!");
			qbb("Could I look at it? It's probably just something with contacts. ");
			kat("No! You could not!");
			txt("I cringed. ");

			qbb("You probably shouldn't regret spending money and not buy the cheapest one. ");
			kat("I didn't buy it! Eva and Saša gave it to me on my 18th birthday! I hate you all! ");
			qaa("And you didn't even hear our next task!");
			link("There's more?!?",151);
			break;
			
		case 151:
			mile.cam = 1;
			qaa("We want to see it. ");
			kat("I can send you a picture? ");
			qaa("In action. ");
			if(mile.domina<1){
				qbb("Make a video for us. Like our private camwhore. ");
			}else{
				qcc("Make a video for us. Like our private camwhore. ");
			};
			kat("Hell no! I won't do that! ");
			
			if(mile.gf>0){
				qaa("It doesn't have to be hardcore. Just something naughty and erotic. ");
				kat("So I have to perform a naughty video. With my dildo. ");
				qaa("Yeah! ");
				
				if(mile.domina>1){
					qbb("Don't worry! We don't show it to anybody else! ");
					qaa("Unless you fail. ");
					kat("What do you mean?! ");
					
					qcc("Well, If the video will be too tame or boring, you'll technically break our rules and we technically we won't be obliget to not share it with our friends. ")
					if(mile.sub<0){
						kat("I doubt you have any other friends. ");
					}else{
						kat("Plese no! ");
					};
					qbb("As long you'll make it at least bit sexy, you're fine! I swear! ");
					qaa("Yeah. Just make it a bit sexy and you don't have to be afraid. ");
					
				}else{
					qbb("Don't worry! We don't show it to anybody else! ");
					qaa("Unless you fail. ");
					kat("What do you mean?! ");
					
					qbb("If the video will be too tame or boring, we might consider sharing it with few our friends! ");
					if(mile.sub<0){
						kat("I doubt you have any other friends. ");
					}else{
						kat("Plese no! ");
					};
					qaa("You don't have to be afraid. Just make a bit sexy and you're fine. ")
					qbb("She should be very afraid! We want to see some real effort. Or else... ");
					
				};
	
				
			}else if(mile.domina>1){
				qbb("It doesn't have to be hardcore. Just something naughty and erotic. ");
				kat("So I have to perform a naughty video. With my dildo. ");
				qaa("Yeah! ");
				
				qbb("Don't worry! We don't show it to anybody else! ");
				qaa("Unless you fail. ");
				kat("What do you mean?! ");
				qaa("If the video will be too tame or boring, we migh consider sharing it with few our friends! ");
				if(mile.sub<0){
					kat("I doubt you have any other friends. ");
				}else{
					kat("Plese no! ");
				};
				qbb("As long you'll make it at least bit sexy, you're fine! I swear! ");
				qaa("Not just a bit! We want to see some effort! Wasn't that you who told me we shouldn't go easy on her? ");
				
				
//TODO QCC
			}else if(mile.qcc>4){
				qcc("It doesn't have to be hardcore. Just something naughty and erotic. ");
				kat("So I have to perform a naughty video. With my dildo. ");
				qaa("Yeah! ");
				
				qcc("Don't worry! We don't show it to anybody else! ");
				qaa("Unless you fail. ");
				kat("What do you mean?! ");
				qbb("If the video will be too tame or boring, we might consider sharing it with few our friends! ");
				qaa("Or anything else we have on you. Failing the task would mean you broke the rules so we'll be free to do that. ");
				qbb("So you better should try hard. ");
				
				
			}else{
				mile.cam = 2;
				qaa("Oh yes, you will. ");
				qbb("Only we three will see the video. On the other hand, if you won't do it, embarrassing stuff we have on you will be shared by everybody! ");
				qcc("Or we can be in the room if you'd prefer that? ");
				kat("No! Okay... I'll do it. ");
				qaa("Good girl! ");
				qcc("Don't worry! We don't show it to anybody else! ");
				qaa("We promise! ");
				qbb("Unless the video will be too boring and tame. In that case, we might decide you failed and share it with a few of our friends. ");
				//qcc("Since ")
		//TODO MILE SUB 666
				if(mile.sub<0){
					kat("I doubt you have any other friends. ");
				}else{
					kat("Plese no! ");
				};
				
				qaa("Just make it hot and make yourself cum and you have nothing to be afraid. ")
			};
			link("Fuck!",152);
			break;
			
			
			
		case 152: 
			txt("I turned on my computer and anxiously paced across the room. Those bastards demanded that they wanted to see the real me and not just my avatar. It was basically the same thing but somehow this felt much worse. ");
			txt("Setting the camera took me some time, I never used it since meeting people in Metaverse was so much more comfortable. I checked how I look for the last time, then took a deep breath and pressed record. ");
			
			if(mile.sub < -3){
				txt("I smiled. Fuck this. ")
			}else if(mile.sub < 4){
				txt("I smiled: ")
			}else{
				txt("I smiled, trying to fake confidence I did not feel. ")
			};
						
			if(mile.slut > 5){
				kat("Hello! I was asked to "+(mile.cam == 2 ? "show" : "tell")+" you how I play with my naughty pussy! ");
			}else{
				kat("Hello! I was asked to "+(mile.cam == 2 ? "show" : "tell")+" you something from my private sexual life. ");
			};
			
			txt("I had to be <i>naughty</i>. I really hoped that they had bluffed but I could not be sure. I always thought I can be irresistibly sexy but it was not so simple to do it on command without feeling it.  ");
			
			txt("I reached for my damned dildo and brought it to the shot, presenting the full length just a few centimeters from my face. Why did I even buy it? It was such a stupid idea! I mean, it was fun but not worthy of this humiliation. ");
			
			if(mile.slut > 10){
				kat("When I'm horny and alone, I fuck myself with this dildo. ");
			}else if(mile.slut > 5){
				kat("This is my favorite dildo. ");
			}else{
				kat("The is.. eh.. my dildo... ");
				txt("I nervously grinned. ")
			}

			txt("I slowly brought it up to your mouth and began leisurely licking its tip. I tried hard to look as lascivious as possible. ");
			
			
			if(mile.slut > 7 && mile.sub > 3){
				kat("Sometimes I imagine this is a real cock that I have fully at my disposal. I'm such a cock-hungry slut! ");
			}else{
				kat("Sometimes I imagine this is a real cock that I have fully at my disposal. ");
			};			
			
			txt("I pushed the dildo in my mouth and started sucking. I was thrusting it in and out, my lips sliding over the soft surface. ");
						
			if(mile.slut > 4){
				txt("I felt incredibely stupid.  I was sitting in my room, furiously giving a fake cock a blowjob, just to entertain bunch of losers. And on top of that I was pretenting how much I am enjoying it. "+(mile.sub > 0 ?  "Where my life went so wrong?" : "")  );
			}else{
				txt("After a while I no longer felt embarrassed, just very stupid. I was sitting in my room, furiously giving a fake cock a blowjob, just to entertain bunch of losers. And on top of that I was pretenting how much I am enjoying it. "+(mile.sub > 0 ?  "Where my life went so wrong?" : "")  );
			};
			
			if(mile.cam == 1){
				link("Continue sucking. ",154);
			}else if(debug){
				link("#Continue sucking. ###(not allowed because none of the nerds is your friend) ",154);
			}
			
			if(mile.cam == 2 || mile.slut > 4){
				link("Masturbate with dildo. ",153);
			}else if(debug){
				link("#Masturbate with dildo. ###(not allowed because you are not slut enough)",153);
			}
			break;
	

		
		case 153:
			WARDROBE.showLess(-1,0);
			mile.slut++;
			
			if(mile.slut > 6){
				txt("There was no time to longer postpone the part I was looking forward to. ")
			}else{
				txt("There was no time to longer postpone the part I was most terrified of. ")
			};
	
			if(mile.slut > 3){
				txt("I stood up, only my lower body was in the shot, and dropped my "+dh.decapitalise(PC.lower.name)+". I teasingly turned around, giving them a view of my butt, playfully slapping it.  "+(PC.panties ? "Then I stripped my panties too. " : "")   )
			}else{
				txt("I stood up, only my lower body was in the shot, and dropped my "+dh.decapitalise(PC.lower.name)+". "+(PC.panties ? "I was glad they cannot see my face when I finally dared and stripped my panties too. " : "")    );
			};
	
			txt("I laid back on my bed with knees wide apart and my kitty fully on display. ");
			
			kat("When I'm pleasing myself, at first I gently touch my nether lips...  ");
			
			txt("I did so. I was so demeaning when I was describing exactly what I was doing. ");
			
			kat("... and then I finally slide the dildo in... AHHH! ");
			
			txt("I moaned like an aspiring porn starlet.  ")
	
			kat("Oh! I'm so horny! ");
			
			txt("I was waggling with the dildo inside me and continued moaning, faking it very hard. I gave them the best earth-shattering orgasm. ");
			
			kat("Oh! I hope you enjoyed my little video! ");
			
			if(mile.slut > 10){
				txt("I licked the dildo, tasting my love juices. Fuck, I was such a whore! ")
			}else if(mile.slut > 4){
				txt("I impishly smiled. ");
			}else{
				txt("I was blushing on the camera, nervously fixing my hair. ");
			};		
			
			txt("I seriously hoped it will be enough! ");
			link("Morning",1000,WARDROBE.showAll);
			
			break;
			
			
		case 154:
			txt("The camera was capturing only the top half of my body. Now I moved my right hand out of the shot to touch my kitty. I guess I could fake it but I did not even think about that. ");
			txt("It was a strangely erotic experience, I had never before tried to suck the dildo but now I was desperately trying to please it with my mouth while playing with myself. ");
			txt("I closed my eyes, trying to get into the zone and suppress the unease I felt. I was rubbing myself harder, the pleasure was so delightful I entirely forgot I am not alone, that the video will be watched by three sleazy nerds.  ");
			txt("I brought myself to orgasm, dildo in my mouth, fingers in my pussy. At least the camera did not record the last part, only my satisfied facial expression. ");
			
			if(mile.slut > 6){
				kat("I hope you enjoyed my little video! ");;
				txt("I impishly smiled. ");
			}else{
				kat("I... I hope you enjoyed my video? ");;
				txt("With a red face, I scrabbled to finally shut down the camera.  ");
			}
			
			txt("I seriously hoped it will be enough! ");
			link("Morning",1000);
			
			break;	











		case 850:
			txt("I grabbed my tray. ");
			eva("Kate! Will you join us?! ");
			
			//TODO
			if(mile.sub > 3){
				txt("I felt a bit uneasy to join them, after all what had happened. "+(mile.slut<2 ? "Especially while being involuntarily dressed like some kind of slut. ": "")  );
				
			}else{
				kat("Sure! How are you?!");
				
			};

			mile.social = 0;
			mile.socialEvent = 1;
			mile.implants = 5;
			if(mile.dateResult == 30){
				eva("How's your new <i>boyfriend?</i>");
				if(mile.love == -1){
					mile.sub--;
					mile.social++;
					kat("He isn't my boyfriend! OMG! I took him on one date out of pity! ");
					eva("I had no idea you're so self-sacrificing. ");
					kat("I'm sure there are many other things you know nothing about! I just felt obliged after he helped me so much with school stuff. ");
					sas("You're so amazing and selfless, Kate! ");
					
				}else if(mile.love == 2){
					mile.sub--;
					mile.social--;
					kat("Fine?!? Why are you asking? ");
					txt("I instantly got defensive. ")
					eva("You just seemed like a cute pair. ");
					txt("That bitch Eva was making fun of me and Juraj! ")
					sas("Isn't he a bit dorky for you? He's way below your league! ");
					kat("He isn't! Juraj is a great guy! Stop undersetimating him! ");
					txt("I flared up. ");
					eva("We're sorry! We didn't mean to offend you! ");
					txt("Eva lied to me. ");
					
				}else{
					kat("Fine? ");
					txt("I shrugged. Admitting I was on a date with Juraj was probably a mistake. ");
					eva("You just seemed like a cute pair. ");
					txt("What a bitch! ")
					sas("He's a bit below your league, don't you think? ");
					if(mile.sub < 5){
						kat("So what? I'm not marrying him yet! ");
					}else{
						kat("Well... I guess... ");
					}
				};
				
				
				
				
			}else if(mile.dateResult < 30){
				eva("Where have you been the whole weekend? It seems that you're avoiding us!  ");
				kat("I was working on a school project with Juraj. It was so boooring! I thought I won't survive it! ");
				 
			}else{
					eva("Where have you been the whole weekend? It seems that you're avoiding us!  ");
						
						
						if(mile.sub > 5){
							kat("I do not! ")
							txt("I convincingly denied. ");
							
						}else{
							kat("Nonsense! I had to attend a family celebration. ");
							sas("Oh! That sounds horrible! ");
							kat("It was worse than you can imagine! ")
							
						};
						
			}			
			
			
			
			eva("And there is something new about you! ");
			
			if(mile.sub < 1 && mile.slut > 3){
				kat("You mean my new tits? Aren't they absolutely awesome?!! ")
			}else if(mile.sub < 1){
				kat("Yeah, I got my breasts enlarged a bit! ");
				if(mile.boobsIrl == 3) sas("Heh, more than a bit! ");
			}else if(mile.sub > 6){
				kat("Yeah.. I got my breast enlarged... I thought they might look good... what do you think? ");
				txt("I desperately mumbled. ");
			}else{
				kat("Yeah, I got my breast enlarged. ")
			};
			
			
			//TODO
			if(mile.sub<3){
				link("Try to gain their approval. ",851);
			}else{
				link("Try to gain their approval. ",852);
			};
			link("Quickly finish the lunch. ",mile.thirdWeekSkipper)
			//link("I don't need their approval. ",853);
			//TODO
			break;
		
	case 851:		
			mile.social++;
			eva("Interesting. You always claimed you're against such surgeries, that they're just for ugly, insecure girls?! ");
			kat("I changed my mind. ");
			txt("I shrugged, rebuffing her weak attempt to undermine me. Only idiots never change their minds. ");
			kat("I think it's more insecure to just settle for whatever nature gave you if there are so many simple ways to improve it. ");
			eva("I'm just saying I'm satisfied with my body and I don't need such upgrades. ");
			kat("Sure! What about you Saša? ");
			txt("I ignored Eva and turned to surprised Alexandra. ")
			sas("Me?!? ");
			kat("Yeah! With a bit bigger rack you'd be the hottest girl in the school! ");
			sas("You mean the second hottest, after you. ");
			kat("You're too nice! Don't underestimate yourself! ");
			txt("Eva was furious while Saša ate up my cheap compliments.");
			kat("The whole procedure is extremely simple, quick and cheap! I can take you there! ");
			sas("I'm not sure.. ");
			eva("Well, your body-... ");
			kat("You should definitely do it! Don't be scared! ");
			sas("I'm not scared! ");
			
			link("Finish the lunch. ",mile.thirdWeekSkipper);
			break;
			
			
		case 852: 
			mile.social--;
			eva("Interesting. You always claimed you're against such surgeries, that they're just for ugly, insecure girls?! ");
			kat("Well... that's true... I used to say that.. ");
			eva("Getting boobs done "+(mile.boobsIrl>2 ? "- especially so big -" : "")+" might give people the impression that you're insecure and need the huge rack to boost your confidence. Do you concur, Saša? ");
			sas("Yeah, I guess. ");
			txt("That bitch Eva was calling me insecure! But I was not able to come up with any rebuff! ");
			
			eva("Bigger tits, no bra, short skirts... I hope you're not becoming one of those desperate attention-seeking trashy girls?  We are concerned at all! ");
			txt("Eva was glowing, she absolutely loved this moment. She was not concerned a bit. ");
			kat("I'm not trashy! ");
			txt("I wanted to scream! None of this was my fault! They made me dress this way! ");
			//eva("")
			
			link("Finish the lunch. ",mile.thirdWeekSkipper);
			
			
			break;
			
				
			
			
			
			
			
		case 500:
			set.chapter("Cosmetic Clinic");
			npc_set([1,"Doctor"],[6,"Secretary"])
			set.irl();
			txt("Every day when I went from the school to the tram station I walked by a small cosmetic clinic. Today I decided to enter. I was completely satisfied with my body and did not want to change it in any way but I was curious. I did not know anything about cosmetic surgeries and I wanted to learn more. ");
			npc(6,"Good afternoon! ");
			txt("I was instantly greeted by a smiling secretary. Her chest was truly enormous. Was she supposed to serve as a living advertisement? That was really tacky! ");//spell
			kat("Hello! ");
			npc(6,"Doctor Nagy has time for your consultation right now! ");
			kat("Ehh... I was thinking if you don't have any leaflets or booklets or something... ")
			npc(6,"Don't worry! Doctor Nagy will explain to you everything! ");
			txt("She basically pushed me into his doors. ");
			link("Consultation with the doctor. ",501);
			break;

		case 501:
			mile.implants = 2;
			npc(1,"Good afternoon, miss...? I'm doctor Milan Nagy.");
			kat("Good afternoon. I'm Katarína Pokorná. ");
			npc(1,"Nice to meet you. So you're thinking about cosmetic surgery? If you excuse me, you're already beautiful. But there of course always room for improvement. ");
			kat("I was thinking about getting bigger breasts... but not seriuosly! I just wanted to learn how that works. ");
			npc(1,"It's extremely easy! Our clinic just get a brand new sarcophagus - have you heard about them? ");
			kat("Yeah, I've seen them on tv. ");
			npc(1,"It takes a half-hour and you will leave or clinic with boosted bust, no further recovery is needed. It's a cutting edge technology. In ten years, every woman will have expanded breasts! Well, of course only those who want to but who wouldn't? Would you prefer small, medium or large upgrade? ");
			
			if(mile.sub>0){
				kat("The smallest one! ");
			}else{
				kat("The smallest one! Wait, I'm not sure whether I want any upgrade at all! ");
			}

			npc(1,"That is usually a sensible choice, starting with the basic smallest option, but in this case, I would strongly discourage that. We have plenty of cases of <i>buyers remorse</i> when a wavering woman decides for the smallest size and then is back next week because it was not exactly what she wanted. And then she has to waste money on another full transformation! So I would strongly suggest medium or large. Are you at least 18 years old? ");
			kat("I'm 18 years old. ");
			txt("I told him. He smiled. ")
			npc(1,"Excellent. Would you mind to undress? I need to check your breasts to give you a proper calculation. ");

			if(mile.slut>6){
				kat("Sure! ");
				txt("I quickly dropped my top. I had no restrains to undress in front of strangers. ");
			}else if(mile.slut>2){
				txt("I very reluctantly stripped my top. Well, he was a doctor, was he not? ");
			}else{
				txt("My face was red, I was ashamed to undress in front of this stranger. But he was a doctor so it was okay? ");
			};
			
			link("Undress. ",502);
			break;
			
		case 502: 
			WARDROBE.showLess(0,-1);
			npc(1,"Beautiful! ");
			txt("He gently cupped my boobs, hands in latex gloves. ");
			npc(1,"And so firm! ");
			txt("Then he measured them with some laser device. ");

			if(mile.sub>0){
				txt("I nervously watched him typing something on the computer. I felt cold and ashamed with my tits out but he did not tell me to dress up again. ");
			}else{
				kat("Can I dress up now? ");
				txt("He was typing something on his computer. ");
				npc(1,"Yeah, of course! ");
			};
			
			txt("Then he finally turned the monitor to me. I was shocked by the price!");
			kat("So cheap!?! Is that just price for one boob? ");
			txt("He chuckled. ")

			npc(1,"No, we don't upgrade breast separately. That wouldn't look nice. But you're very lucky! Your adolescent body is still very malleable and transformable, the price quickly rises with the age. And as I said, we got our sarcophagus only recently so we still have very low introductory prices to attract new customers. ");

			kat("I won't be your test subject, will I? There won't be any freaky accident which leaves me with tits so huge I won't be able to walk through a door? ");

			npc(1,"Of course not! I worked at a clinic in Prague and have plenty of experience with this technology! ");
			
			
			link("Enter the Sarcophagus. ",510);
			link("Make excuses. ",503);
			break;

		case 503:
			WARDROBE.showAll();
			kat("I'm still not very sure...");
			npc(1,"Don't be afraid! The procedure is completely painless, the probability of any complications is negligible and it's mostly reversible. ");
			kat("So it's reversible? ");
			npc(1,"Yes. Mostly. You can home and think about it for some time, but our special discounts won't be offered for long! ")
			
			if(mile.sub<3){
				txt("Was this really something I wanted? ");
			}else{
				txt("The doctor was rather pushy and I felt strong urge to what he told me to do. I did not wanted to waste his time pointlessly. ");
			}
			
			link("Enter the Sarcophagus. ",510);
			link("Leave. ",1000);
			break;
			
			
		case 510:
			WARDROBE.showLess(0,-1);
			txt("The sarcophagus was bigger then I imagined. And very comfortable as I found out when I lied down. ");
			npc(1,"So what size will you pick? ");
			
			if(mile.sub>4){
				txt("I decided to follow his advice. So I could chose between "+choice("","small")+""+choice("medium","medium")+" and "+choice("large","large")+" upgrade. ")
			}else{
				txt("I could chose between "+choice("small","small")+", "+choice("medium","medium")+" and "+choice("large","large")+" upgrade. ")
			};
			
			//txt("I could chose between "+choice("small","p_1")+", "+choice("medium","p_2")+" and "+choice("large","p_3")+" "+choice("large","p_4")+" upgrade. ")
			
			
			txt("The procedure was indeed completely painless and very quick. ");
			
			link("Done.",511);
			break;
			
		case 511:
			npc(1,"We have a special offer, free lips transformation. ");
			txt("I wanted to  "+choice("refuse","no")+" because I never thought about getting my lips augmented... on the other hand it was "+choice("free","yes")+". ");
			link("Done.",512);
			break;
		
		case 512:
			kat("Thank you, doctor! ");
			npc(1,"You're welcome! I hope you will be satisfied with our transformation and soon return for more! ");
			kat("Heh, I'm sorry but I don't think so. ");
			npc(1,"As you please. Have a nice day! ")
		
link("Goodbye!",800);  //		link("Goodbye!", 1000);
//TODO - MATEJ
			break;

		
		
		
			//link("Present new breasts to Matej",800,()=>{},true);
		
		
		case 600: 
			set.chapter("Visiting Zdeno");
			set.irl();
			mile.qbb++;
			mile.sub--;
			txt("I decided to make a small trip. Zdeno for now seemed docile but I wanted to make sure he will not regress and will not bother me <i>ever</i> again. Even when that meant some extreme measurements were necessary.  ")
			txt("I was never in this part of town, a quite lovely suburb. Zdeno lived in a small family house not far from the tram station. ");
			txt("When he opened the door and saw me there, alive and real, he was shocked. His first instinct was to shut the door but I quickly pushed my leg in. ");
			kat("You won't invite me in? ");
			qbb("Oh!... Well, yeah. Come in, Kate! ");
			kat("You know how you should call me! ");
			txt("I very harshly replied. ");
			qbb("What the hell you want?!? ");
			kat("To make sure you're a good boy! ");
			qbb("In that case, you should get out! ");
			txt("That definitely was not my intention. When he saw I was staying still he tried to use violence and push me out. He was uncommitted, afraid to actually hurt me. I had no such restrains when I grabbed his arm, slipped behind his back and twisted it at a very painful angle. ");
			kat("How are you supposed to call me? ");
			qbb("Fuck you... AHH!... mi..Mistress! ");
			link("Good! ",601);
			//link("Come closer! ",601);
			break;
			
		case 601:
			kat("Where is your room?! ");
			txt("I let him go. His room was a horrible mess, books, boxes, dirty plates, disassembled electronics, heaps of scattered clothes everywhere. It was not easy to pick the least revolting place to sit. Zdeno was very embarrassed, standing there, not sure what to do. ");
			kat("Start stripping! ");
			txt("I ordered him. ");
			qbb("What?!?");
			kat("Now!");
			txt("I snapped. He was extremely uncomfortable, especially since I pretended I am disappointed by what I saw. I was not, my expectations were not high to begin with.  ");
			qbb("Underwear too? ");
			kat("Are you thick?!? Of course underwear too! ");
			txt("I berated him. Zdeno stood in front of me, completely exposed. I grabbed him by his balls. ");
			kat("I hope you're done with back talking and acting like a child! " );
			txt("He was not responding. I squeezed a little. ");
			kat("I asked you something! ");
			qbb("Yes!... Yes, Mistress! ");
			kat("Good. ");
			txt("I lightly scratched his hardening shaft with tips of my fingers. ");
			kat("Let's have fun like adults! You'd prefer that, wouldn't you? ");
			qbb("Y.. yes! ");
			txt("I grabbed his cock and started stroking. Gingerly at first, but I was raising the tempo until I was pumping him pretty hard and made cum, shooting strands of his semen all over the floor. ");
			qbb("T..thank you, Mistress! ");
			link("Good boy! ",602);
			break;
		
		case 602:
			mile.dickLocked = true;
			txt("He did not register I reached in my pocket for a very devious device. He twitched only when the cold steel touched his flaccid dick.  ");
			qbb("What are you...");
			txt("With a few quick motions, I locked the chastity cage. I was prepared, I watched a few online tutorials because I felt my authority would be lessened if I would struggle with the device, not sure how to put it on.  ");
			kat("Cute, isn't it? ");
			qbb("You want me to wear this? ");
			kat("Yeah, you will! ");
			qbb("For how long?!?! ");
			kat("Dunno. As long as I'll enjoy it. ");
			txt("I smiled. ");
			qbb("Come on Kate! This isn't funny! ");
			txt("I briskly jumped up and twisted his ear. ");
			kat("You keep forgetting yourself! ");
			qbb("I'm sorry, Mistress! ")
			kat("It's as hilarious as being blackmailed! I won't give you the key until you stop! ");
			qbb("I can try to convince them but I'm not the only one who... ");
			kat("Better try hard! ");
			txt("I pushed him out of my way and left, without once looking back at him. ");
			
	link("Next",mile.thirdWeekSkipper);		
			//link("Back",1000);
			break;
			
			
		case 700:	
			set.chapter("Date with Juraj");
			set.irl();
			mile.gaa++;
			mile.firstSex = true;
			//Go on a date with Juraj. 
			txt("This time Juraj decided to take me on a proper date and dinner in a nice comfy steak house. ");
			qaa("Is your butt okay? ");
			txt("There were probably better conversation starters. ");
			kat("Yeah. Whose idea the hell it was? ");
			qaa("It was a... collective decision. ");
			kat("Why you didn't tell them something? ");
			qaa("I thought you might enjoy this. Would you come up with this by yourself? I thougtht it might expand your horizons? ");
			kat("Expand my horizons? Seriously? ");
			qaa("Yeah, you didn't like it? ");
			
			if(mile.slut>666)link("I loved it! ",701, ()=> mile.plugLike = 2);
			link("Yeah, I kinda liked it! ",701, ()=> mile.plugLike = 1);
			link("Well, yes, but that isn't the point! ",701, ()=> mile.plugLike = 0);
			link("No, I did not! ",701, ()=> mile.plugLike = -1);
			link("Of course not! I hated it! ",701, ()=> mile.plugLike = -2);
			break;
			
		case 701:
			qaa("Oh! Really? ");
			kat("Yes! At least you could warn me! ");
			qaa("But that wouldn't be a surprise, you should've seen your face! ");
			kat("I'm glad you enjoy humiliating me so much! ");
			qaa("Come on, Kate! ")
			
			txt("Juraj was carefully sipping his beer. He was frowning, he would probably prefer something different but after I ordered it he was afraid he would look unmanly. ");
			
			if(mile.boobsIrl > 0){
				qaa("Have I told you I like your new tits? ");
				kat("Yes. Immediately when you picked me up, and when we were waiting for the tram, and when we were walking past the plague column, and several other times. ")
				qaa("Oh right. But they certainly draw male attention. ");
				kat("Thank you! ");
				if(mile.boobsIrl > 2){
					qaa("Well, maybe they are a bit too large. ");
					kat("Really? I had no idea there's for guys something like too large tits. ");
					qaa("Yeah, well, that's just my silly personal preference. Yours are perfect. ");
				};
			}
		
			txt("Overall it was quite a lovely evening, especially when we walked home to our block chatting about nothing in particular. ");
			
			txt("In the elevator, I pressed the button of my floor. But when Juraj wanted to press his I stopped him. ")
			kat("Don't you want to hang out for a while longer? ");
			if(mile.love == -1) txt("I did not have any deeper feelings for him and I did not have to do this. But I kinda wanted to try to have some fun with him. ");
			qaa("Sure I do Kate! ");
			
			
			
			txt("He helped me out of my coat and we sit down on my bed. ");
			qaa("Your room is nice... ");
			txt("I looked at him, he looked at me, then we kissed. ");
			qaa("You know, I never... ");
			kat("I know, it was a safe bet. ");
			if(mile.love == 2) txt("I quipped to hide that I was nervous too. I really liked him and did not want to fuck this up. ");
			
			if(mile.sub<5) link("Take him. ",710);
			if(mile.sub>-2) link("Take me! ",720);
			
			break;
			
		case 710:
			mile.sub--;
			kat("Don't worry! Just enjoy it! ");
			txt("We were making out again, then I helped him out of his shirt. I pushed him over, laid down on the bed and then climbed on top of him. ");
			if(mile.boobsIrl>0) qaa("I still can't believe you got them enlarged! ");
			txt("I slowly removed my "+dh.decapitalise(PC.upper.name)+", stretching my arms high, giving him an amazing view on my tits. He bashfully reached for them and gently kneaded them. ");
			txt("I bend down, kissed him on his lips, then on his chest, I was fondling his body, getting lower until I reached his pants. With some of his help, I unbuckled the belt, unbuttoned them and then pulled them down together with his boxers. ");
			txt("His hard cock instantly sprung up. I paid him full attention, teased it both with my soft lips and fingers of my left hand. With my right hand, I was groping for my purse, it was not easy to search for the condoms I had inside, among dozens of other useful things. When I finally put it on, I slid my right hand under my skirt to make myself wet and ready too. ");
			txt("When I was no longer able to take it anymore, I stood up, shook down my skirt"+(PC.panties?" and panties":"")+".And mounted him again. I took his mahood, aimed it at my pussy and then I lowered myself on it. Juraj was moaning when I started slowly moving. ");
			txt("I moved faster, impaling my body on his cock, pushing him deeper inside me. It felt amazing. Juraj was in total bliss, moaning and panting under me, his hands were blithely caressing my sides and butt. ")
			qaa("Oh! I'm so close! ");
			txt("I did not hold back, the connection between us was electrifying. We both peaked together. ")
			txt("Then I just dropped down on the sheets, embracing him, our naked bodies touching. I had to catch my breath and enjoyed cuddling with him.  ");


link("Next",mile.thirdWeekSkipper);		
			break;
		
		
		case 720:
			mile.sub++;
			kat("Don't worry! There's no way to do this wrong! And I'm so horny I don't need much to be fully satisfied! ");
			qaa("You sound like an easy slut! ");
			txt("He laughed with his hand under my skirt. ");
			kat("That isn't a nice thing to say... but maybe I am? ");
			txt("I giggled. We were making out. He helped me out of my "+dh.decapitalise(PC.upper.name)+" and gently laid me down on the bed. ");
			if(mile.boobsIrl>0){
				qaa("I love your breasts so much! I still can't believe you got them enlarged! ");
			}else{
				qaa("I love your breasts so much! ");
			};
			txt("He did everything to prove that, tenderly massaged them with his hands, then kissed them, took my erected nipples in the mouth and teased them with his tongue. ");
			txt("Finally he moved lower, covered my whole belly with hot kisses and then swiftly pulled down my skirt"+(PC.panties?" and underwear":"")+". After that he stood up to drop his pants and search for condoms while I was playing with my pussy, making myself wet and ready. Juraj was staring at me, so excited and rash he nearly fell over when his jeans suddenly tangled around his ankles. I had to chuckle and he was a bit embarrassed. ");
			kat("Come on and fuck me, you klutz! ");
			txt("I helped him to press his penis against my mound and then he finally slowly entered me. He was very excited, I was loudly moaning to encourage him to fuck me harder. ");
			//txt("");
			qaa("Are you close? ");
			kat("Oh yeah! Make me cum! ");
			txt("I begged and challenged him. He was hrusting even more vigirously, face red, heavily gasping. The connection between us was electrifying. We both peaked together. ")
			txt("He exhasted dropped down on the sheets. I wrapped arm around him and drew him closer to me, embracing him, our naked bodies touching. I enjoyed cuddling with him.  ");
		

		
link("Next",mile.thirdWeekSkipper);
			break;
				
			// shake down 
			
			
			

		case 800:
			set.irl();
			mile.qcc++;
			mile.implants = 3;
			
			WARDROBE.showLess(0,-1);
			txt("I just stood in front of a large vanity mirror and stare at my expanded breasts. I was still not able to get used to that sight and on the unusual weight constantly resting on my chest. Why the hell I did that?!? ");
			txt("I need to share my doubts with somebody else. "+(mile.gf>1?"Not Juraj. We were getting too close. ":"")+" Not Saša. I was not sure whether she would approve it or told me I got crazy. Eventually, I decided to text the guy who caused this! ");
			txt("He wrote me he had to see them with his own eyes so I invited him. ");
			
			if(mile.slut>8){
				txt("When the ring buzzed, I did not bother with dressing up and opened him completely topless. Matej was very perplexed, I had to grab him by his shirt and pull him inside - I would prefer neighbors to keep thinking I am a nice decent girl. ");				
			}else if(mile.slut>3){
				txt("When the ring buzzed, I quickly put on a sheer bathrobe. Matej was very perplexed when he instantly notice my new bigger tits only barely covered by the thin fabric. I had to pull him inside. In my room, I dramatically opened the bathrobe. He was stunned.  ");
			}else{
				txt("When the ring buzzed, I quickly dressed and went to let Matej in. He instantly noticed my bigger tits. ");
				qcc("You actually... ");
				kat("Yeah! Come in! ");
				qcc("Can I see them? ");
				kat("Ehh...");
				qcc("Come on!");
				txt("I removed my top to present my new assets. He was stunned. ");
			};
			
			
			if(mile.sub > 2){
				qcc("That's amazing! I convinced Katarína Pokorná to get her breasts enlarged! This is like a dream come true! ");
				kat("Nice to know what are you dreaming about. ");
			}else{
				qcc("That's amazing! I really convinced you?!?!");
				kat("No! You didn't convince me! I considered your suggestion and made my own decision! ");
			};
			
			qcc("Can I... touch them? ");
			
		//TODO 666
			if(mile.slut>1) link("Of course! Try them! ",801);
			link("...sure, why not! ",802);
			link("No! ",803);
			break;
			
		case 801:
			kat("Yeah, of course. Try them, don't be shy. ");
			qcc("Thanks, Kate! ");
			txt("He eagerly grabbed them with his cold hands. ");
			qcc("They feel so real...");
			kat("Yeah, they're not virtual! ");
			qcc("I mean I don't feel any implants, just your soft fat and flesh ");
			kat("Yeah. I have no idea how that technology works. ");
			qcc("They're so awesome! For the rest of my life, I don't want to do anything else than to touch them... ");
			txt("I let him continue when he enjoyed it so much. Fuck, this will be so weird conversation. ");
			link("We don't have so much time. ",810)
			break;
			
			
		case 802: 
			kat("Sure, why not! My tits are for everybody! Just grope them as you want! ");
			txt("I angrily groaned. He was too horny to understand my subtle sarcasm and just grabbed them with his cold hands. ");
			qcc("They feel so real...");
			kat("Yeah, they're not virtual! ");
			qcc("I mean I don't feel any implants, just your soft fat and flesh ");
			kat("Yeah. I have no idea how that technology works. ");
			qcc("But it works well! They're so awesome! ");
			link("Maybe this might be enough? Please, stop now. ",810)
			break;
			
			
		case 803:
			//TODO 666
			if(mile.sub>4){
				kat("No! ");
				qcc("Come on! ");
				kat("I said no! ");
				qcc("Stop playing with me and teasing me! ");
				kat("I'm not teasing you! ");
				qcc("She said nearly naked, shamelessly exposing her new tits to me. You're intentionally messing with me! ");
				kat("I'm not!.... ahhh! Okay, just touch them if you want it so much! ");
				txt("I angrily groaned. He eagerly grabbed them. ");
				link("That might be enough?! ",810);
			}else{
				WARDROBE.showAll();
				kat("No! ");
				qcc("Please! ");
				kat("Don't be creepy! ");
				txt("I quickly reached for some top and put it on. This discussion would go nowhere if he stayed distracted by my bosom. ");
				qcc("Oh....");
				link("I already shown you too much! ",810);
			};
			break;
			
		case 810: 
			
			if(mile.advice1 == 3){
				qcc("Your new tits, the improvements to your wardrobe, makeup, pink hair... only a few minor improvements and you'll be a perfect bimbo! ")
			}else{
				qcc("Your new tits, the improvements to your wardrobe, makeup... we only need to do something with your hair and a few minor improvements and you'll be a perfect bimbo! ")
			};
			kat("I'm not stupid! ");
			qcc("Of course not! You're pretty smart for a girl. ");
			kat("Say again!?! ");
			
		//TODO666
			if(mile.sub > 6){
				txt("I did not appreciate his casual misogyny. However, instead of rephrasing, he doubled down. ");
				qcc("Well, maybe not so smart. However, low intelligence isn't so important for looking like a perfect bimbo. ");
			}else{
				qcc("I'm sorry! I meant that you're smarter than an average girl or other human beings. But you don't have to be stupid to look like a perfect bimbo! ");
			};
			
			kat("Why would I want to look like a perfect bimbo? ");
			qcc("To be sexy, desirable, confident, powerful and happy with yourself. ");
			kat("What?!? ");
			
			if(mile.slut>5){
				qcc("I always admired you! You're always so self-assured and not afraid to be sexy! Why not go further? ")	
			}else{
				qcc("You are so beautiful and confident! You don't have to be afraid to be sexy!      ")
			};
			
			kat("Are you trying to gaslight me into becoming one of your weird sexual fantasies? ");
		
		/*
			if(mile.sub>4){
				
			}else{
				
			};
			*/
			
			/*
			mile.boobsIrl
			
			mile.boobsIrl = 3;
			
			TODO the doctor said it would be better
			*/
			if(mile.boobsIrl == 3){
				qcc("No! I don't think I would be able to trick you into anything. And it was you who got her breast enlarged without being forced in any way! And you willingly chose such huge size! ");
				kat("The doctor convinced me! ");
				qcc("Of course he did! ");
				if(mile.sub>4){
					kat("It isn't my fault! ");
					qcc("Well, nothing is ever your fault! ");
				};
			}else{
				qcc("No! I don't think I would be able to trick you into anything. And it was you who got her breast enlarged without being forced in any way! ");
			};
				
			kat("Well... the thing I wanted to know - do you think they look good? ");
			qcc("Yes. ");
			if(mile.sub<0){
				kat("Great. That's everything I wanted to hear. I think you should go now. ");
			}else{
				kat("Great. That's everything I wanted to hear. ");
			};
			link("Goodbye!",mile.thirdWeekSkipper,WARDROBE.showAll)
			break;
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		case 1000: 
			txt("Apologies, this is all so far ;( ");

			link("Spoilers",1010);


mile.thirdWeekSkipper = 1000;
link("#Present new breasts to Matej",800);
			link("#Cosmetic clinic",500);
			link("#Visit Zdeno",600);
			link("#Date with Juraj",700);
			
			
		//	link("Test",150);
			
			break;
			
			
		case 1010:
			txt("I am working on more stuff. I have a rought draft of major branches. If I will not change it again it should be something like ");
			txt("1. Juraj's girlfriend, either a bit dominant or bit submissive, with a chance of wholesome good ending, possibly some netorare  ");
			txt("2. Zdeno's mistress, with some femdom ");
			txt("3. Zdeno's slave, with some maledom ");
			txt("4. The one where Matej pushes her into being more bimbo ");
			txt("5. The one where she pushes  Matej into being more girly ");
			txt("6. The one where is she bullied by all three ")
			txt("Or something like that, it is  a work in progress. ")
			
			
			
			
			
			
			
			
		
			
			
			
			
			
			
			
			
	
			
/*

	spontaneously
	
	
We agreed we wouldn't share the video anyway. 
What?!? Then why did you threaten me? 
We didn't threaten you'
We didn't want you to half-ass it. 




suck
slap ass
shake tits 





	So, we already established you're very playful and have dozens of sex toys. 
	What?!?! When?!?! We did not!!!!
	We knew you ordered a glass dildo. 
	Because of the recipe in your Cloud. 
	But that's only one sex toy! There's nothing wrong with that! And it's none of your bussiness!
	Is it the only sex toy you have? 
	Well... no... 
	What other sex toys do you have?
	That's none of your bussinees! 
	Tell us, Kate! 
	Only that one and a vibrator which doesn't vibrate anymore. 
	
	You masturbated so hard you broke a vibrator?
	No! It just stopped working!
	I squirmed. I did not want to talk with them about this! 
	
	Have you changed the bateries? 
	I'm not stupid!
	Could I look at it? It's probably just something with contacts. 
	No! You could not!
	I cringed. 
	
	You probably shouldn't regret spending money and not buy the cheapes one. 
	I didn't buy it! Eva and Saša gave it to me on my 18th birthday! I hate you all!
	And you didn't even hear our next task!
	There's more?!?
	
	
	
	
	
	We want to see it. 
	I can sent you a picture? 
	In action. 
	Make a video for us. Like our private camwhore. 
	Hell no! I won't do that! 
	
	if(mile.gf>0){
		qaa("It doesn't have to be hardcore. Just something naughty and erotic. ");
	}else if(mile.domina>1){
		qbb("It doesn't have to be hardcore. Just something naughty and erotic. ");
//TODO
	}else if(mile.qcc>4){
		qcc("It doesn't have to be hardcore. Just something naughty and erotic. ");
	}else{
		
		qaa("Oh yes, you will. ");
		qbb("Only we three will see the video. On other hand, if you won't do it, embarassing stuff we have on you will be shared by everybody! ");
		qcc("Or we can be in the room if you'd prefer that? ");
		kat("No! Okay... I'll do it. ");
		qaa("Good girl! ");
		link("Fuck!",  );
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	


*/
			
			
		
			
			
			
			
			
			
			
			
			
	
	
	}
}