//////////////////////////////
// POTIONS & TRANSFORMATIONS
/////////////////////////////

const POTION = (function(){ 

var randomList = [];
var main;
var container;

//INITIATE - assigns random colours 
const initiate = function(seed,div){
	main = document.getElementById(div);
	var ranco = ["Red","Blue","Green","Yellow","White","Cyan","Black","Pink","Orange","Magenta","Gray"];
	dh.shuffle(ranco,seed);
	randomList = [];
	console.log("POTIONS:"); 
	console.log("SEED:"+seed); 
	for(var i=0;i<elixir.length;i++){
		if(this.elixir[i].unlisted)continue;
		this.elixir[i].color=ranco[i];
		console.log(elixir[i].name+": "+elixir[i].color);
		randomList[randomList.length] = i;
	};
	console.log("> POTIONS INITIALISED");
};


//RANDOM - returns any random elixir, unlisted are not considered  asdf Magenta
const random = function(seed){
	return randomList[ Math.floor( Math.random()*randomList.length ) ];
};

//RANDOM
//picks random elixir (from elixirs which have at least one effect possible)
const random2 = function(){
	var allowed = [];
	allowed.length = 0
	
	for(let i=0;i<this.elixir.length;i++){
		if(this.elixir[i].unlisted)continue;
		
		for(let k=0;k<this.elixir[i].effect.length;k++){
			if(this.elixir[i].effect[k].condit()){
				allowed[allowed.length]= i;
				break;
			};
		};
	};
	return allowed[Math.floor(Math.random()*allowed.length)]
};















//ADD
//if the MAIN ask for a potion (because the STORY says there is place for potion)
//this create the potion, change the text to the name of the potion and adds onclick function drink it
/*
const add = function(id,index){ //id: id of the object; index: index of the elixir, undefined -> random
	//console.log("add p");
	//console.log(index);
	if(typeof index === "undefined")index=random();	
	var obj = document.getElementById(id)
//console.log(index);
	obj.innerHTML="a "+elixir[index].color+" elixir";
	obj.addEventListener("click", 
		function(){
			//alert(id);//test
			drink(id,index)
		}
	);
};
*/



//DRINK
//triggers random effect assigned to type of potion, write description, change caption to empty phial, remove function
const drink = function(index){	//id: id of the object where is clicable name or elixir; index: index of the elixir
	console.log(container)
	console.log(main)
	
	container = document.createElement("DIV");
	container.id = "div_potion";
	main.appendChild(container);
	container.style.top = main.offsetTop;
	container.style.left = main.offsetLeft;
	
	
	
	const eff = random_effect(index);
	let txt = ""; 
	if(eff == -1){
		txt += "The potion had no effect. ";
	}else{
		/*console.log(elixir[index].effect[eff])
		console.log(eff)
		console.log(elixir[index].effect[eff].exec())
		console.log(elixir[index].effect[eff].exec)
		*/
		txt += flavour(index)+elixir[index].effect[eff].exec();
	};

console.log(txt)	
	
	txt += "<div class = \"link\" onclick = \"POTION.end()\"   >Back</div>";
	
	container.innerHTML = txt;
	
	/*
	var obj = document.getElementById(id);
	if(!obj)return;
	
	obj.innerHTML="an empty phial";
	obj.outerHTML = obj.outerHTML; //lol, very ugly (I needed to remove anonymous functions)
	*/
};


const end = function(){
	container.remove();
};

//USE - manually triggered; usually technically not elixirs 
const use = function(index,eff){	//index of the elixir
	if(typeof eff === "undefined")eff = random_effect(index);
	if(eff==-1){
		return "" //???????
	}else{
		return elixir[index].effect[eff].exec()
	};
};





/*
const drink = function(index){	//id: id of the object where is clicable name or elixir; index: index of the elixir
	const eff = random_effect(index);
	elixir[index].effect[eff].exec();

};
*/


//RANDOM EFFECT - creates array from allowed effects and picks one
const random_effect = function(index){ 
	var allowed=[];
	for(var k=0;k<elixir[index].effect.length;k++){
		if(elixir[index].effect[k].condit()){
			allowed[allowed.length]=k;
		};
	};
	if(allowed.length==0)return -1
	
	return allowed[Math.floor(Math.random()*allowed.length)]
};














//FLAVOUR
const flavour = function(index){  //index: index of elixir
	return "<p>"+elixir[index].taste[Math.floor(Math.random()*elixir[index].taste.length)]+"</p>"
};



//ELIXIRS: 
const elixir = []


const transformationSpeed = 2000;

//GOBLINIUM
//- short, green and curvy 
elixir[0]={
	name:"Goblinium",
	bonus: "Dexterity",
	desc: "Small, curvy, green.",
	unlisted:false,
	color:"",
	effect:[],
	taste:["The potion was thick and had an earthly flavour. ","The liquid in the phial was very dense and had an earthy flavour. ","The potion was thick and had a distinctive earthy taste. "],

	effect: [{
	//XXX DEXTERITY XXX
		name:"goblin dexterity",
		condit: function(){
			var chance=0;
			if(!mile.potion[0]){
				if(PC.Mods.skinHue>80&&PC.Mods.skinHue<120)chance++; //skin
				
				
				if(PC.getDim("height")<=158)chance++; //height
				if(PC.getDim("height")>=166)chance--;
				
				if(PC.getDim("buttFullness")>=30)chance++; //butt
				
				if(PC.getDim("breastSize")>=30)chance++; //tits
				
				if(!att.fantasyLips || att.fantasyLips != "#006C00")chance++; //lips
				
				if(chance>=3){return true}else{return false}; //?
			}else{
				return false
			}
		},
		
		exec:function(){
			attributes.change("dex",1);
			mile.potion[0]=true;
			return "<p>After drinking of this potion I suddenly felt more nimble and quick. </p><span class=\"upgrade\">+1 Dexterity</span>"
		}
	
	},{
	//GREENSKING
		name:"greenskin",
		condit: function(){
			if(PC.Mods.skinHue<80||PC.Mods.skinHue>120){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					height:-1,
					skinHue: (85+Math.random()*30)-PC.Mods.skinHue,
					skin: ((8+Math.random()*8)-PC.basedim.skin)-PC.Mods.skin
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			return "<p>I drank it and at first it seemed that nothing did happen - and then I noticed my green hands. </p><p>Quick examination showed my skin turned green - absolutely <i>everywhere</i></p>"
		}
	},{
	//SHORTSTACK
		name:"short",
		condit: function(){
			if(PC.getDim("height")>=150){return true}else{return false};
		},
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					height:-5,
					
					breastSize: 2,
					
					buttFullness: 2,
					legFullness: 2,
					hipWidth: 2,
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
					
			return "<p>I drank it and for a moment I felt a bit dizzy. When I collected myself I noticed the everything around me seemed larger. </p><p>However, the further examination showed it was actually me who shrank. </p>"
		}
	},{
		
	//ASS
		name:"thic ass",
		condit: function(){
			if(PC.getDim("buttFullness")<=35){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					height:-1,
					buttFullness: 10,
					legFullness: 10,
					hipWidth: 10,
					legFem: 4,
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
		
			return "<p> I drank it and lurched when my centre of mass changed. </p><p>With horror I found out my butt is plumper and hips wider. </p>"
		}
	},{	
		
	//CURVYNESS
		name:"curvy",
		condit: function(){
			if( PC.getDim("breastSize")<40 ){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					height:-1,
					breastSize: 10,
					breastPerkiness: -1,
						
					buttFullness: 2,
					legFullness: 2,
					hipWidth: 2,
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
		
			return "<p> I drank it and I could feel how am becoming curvier, how is my body gaining mass, especially in the chest area.  </p>"
		}
	},{
	
	//GREENLIPS
		name:"green lips",
		condit: function(){
			if(!att.fantasyLips || att.fantasyLips != "#006C00"){return true}else{return false};
		},
		exec:function(){
			if(PC.lipstick.fill){
	
				const remove = da.createTransformation(PC.lipstick, WARDROBE.draw,{
					invisible: 1 - PC.lipstick.invisible,
				});
				
				const switchStuff = (() => {
					PC.lipstick.fill = "#006C00";
					console.log("c")
				}); 
				
				const transformation = da.createTransformation(PC.lipstick, WARDROBE.draw,{
					invisible: -1,
				});
				
				da.transformAndShow(remove,(transformationSpeed/2)).then(switchStuff).then(da.transformAndShow.bind(null,transformation,transformationSpeed));
				
			}else{
					
				PC.lipstick.fill = "#006C00";
					
				const transformation = da.createTransformation(PC.lipstick, WARDROBE.draw,{
					invisible: 0 - PC.lipstick.invisible,
				});
				
				da.transformAndShow(transformation, transformationSpeed);
			};
		
			att.fantasyLips = "#006C00";
			return "<p>My lips turned green.  </p>" //TODO!!!
		}
	}]
};



//ELFIUM
//tall, gaunt, elfy
elixir[1]={
	name:"Elfium",
	bonus: "Intelligence",
	desc: "Tall, gaunt.",
	unlisted:false,
	color:"",
	effect:[],
	taste:["The potion was clear with a refreshing sweet taste. ","The potion was pure and sweet. ","The potion tasted kinda nice, it had a rather sweet flavour. ","The potion tasted kinda nice, it had a rather sweet flavour. ","The potion was transparent and had a rather sweet flavour. ","The potion was transparent and had a rather sweet flavour. "],

	effect: [{

		//XXX INTELIGENCE XXX
		name:"elvish intelligence",
		condit: function(){
			var chance=0;
			if(!mile.potion[1]){
				if(PC.Mods.earlobeLength>4)chance++; //ears
				
				if(PC.getDim("height")>=172)chance++; //height
				if(PC.getDim("height")<=165)chance--;
				
				if(PC.getDim("buttFullness")<=12)chance++; //slender
				
				if(PC.getDim("breastSize")<=20)chance++; //tits
				if(PC.getDim("breastSize")>40)chance--; 
				
				if(PC.Mods.skinHue>-20&&PC.Mods.skinHue<30)chance++; //fairskin
				
				if(chance>=3){return true}else{return false}; //OR 4?
			}else{
				return false
			}
		},
		
		exec:function(){
			attributes.change("int",1);
			mile.potion[1]=true;
			return "<p>I could not elucidate why, but I felt more shrewd and knowledgeable.  </p><span class=\"upgrade\">+1 Intelligence</span>"
			//return "<p>I could not elucidate why, but I felt more shrewd and knowledgeable. </p>"
		}
	
	},{


		//FACE
		name:"elf face",
		condit: function(){
			if(att.ears != 2 && PC.Mods.earlobeLength<5 && PC.Mods.eyeTilt<9){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
				
					earlobeLength: 6,
					
					cheekFullness:-10,
					chinWidth: -5, 
					
					faceFem: ( PC.getDim("faceFem")<26 ) ? 8 : 0, 
				
					irisSize:4,
					irisSaturation:40, //90-PC.Mods.irisSaturation,
					irisLightness: 80-PC.Mods.irisLightness,
					
					eyeTilt:6,
					eyeWidth:1,
					eyeTopSize:1,
					eyeBotSize:1,
					eyeSize:1,
					
					hairLength: 20,
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			att.ears = 1;
			
			return "<p> I expected some big changes, but I did not notice any - until I touched my now pointy ears. </p>"
		}
	},{
		//CAT 2 ELF
		name:"cat to elf ears",
		condit: function(){
			if(att.ears == 2){return true}else{return false};
		},
		
		exec:function(){
			const removeEars = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					earlobeLength: 0-PC.Mods.earlobeLength,
				},
			});
			
			const switchEars = ((resolve) => {
				let myPartRight = da.Part.create(da.EarsElf2, {
					side: "right",
				});
				let myPartLeft = da.Part.create(da.EarsElf2, {
					side: "left",
				});
				PC.attachPart(myPartRight, PC.faceParts);
				PC.attachPart(myPartLeft, PC.faceParts); 

			}); 
			
			const transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					earlobeLength: 6,
				},
			});
			
			da.transformAndShow(removeEars,(transformationSpeed)).then(switchEars).then(da.transformAndShow.bind(null,transformation,transformationSpeed));
			
			att.ears = 1;
			return "<p>Instead of my furry cat ears I now had a pair of pointy elvish ones.  </p>"
		}
	


	},{

	//HEIGHT
		name:"height",
		condit: function(){
			if(PC.getDim("height")<=175){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					height: 5,
					
					neckWidth: -2,
					shoulderWidth: -2,
					
					buttFullness: -2,
					legFullness: -2,
					hipWidth: -2,
						
					hairLength: 5,
					
					upperMuscle: -2,
				//	earlobeLength: 3,
					
				/*	breastSize: -6,
					breastPerkiness: 1,
					
					buttFullness: -10,
					legFullness: -10,
					armThickness:-5,
					waistWidth:-5,
					*/
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			return "<p> My perspective suddenly changed. I grew taller. </p>"
		}

	},{

	//SLENDER
		name:"slender",
		condit: function(){
			if(PC.getDim("buttFullness")>12 || PC.getDim("hipWidth")>138 ){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					height: 1,
					
					//negate ass more or less
					buttFullness: -8,
					legFullness: -8,
					hipWidth: -8,
					
					//like half of curviness breast effect
					breastSize: -8,
					breastPerkiness: 4,
					
					//additional
					waistWidth:-3,
					armThickness:-2,
					
					upperMuscle: -4,
					
					hairLength: 5,
				//	earlobeLength: 3,
					
				/*	breastSize: -6,
					breastPerkiness: 1,
					
					buttFullness: -10,
					legFullness: -10,
					armThickness:-5,
					waistWidth:-5,
					*/
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			return "<p>After drinking it I suddenly lose weight and became thinner and slenderer. </p>"
		}
		
	},{

 
	//NO BOOBS
		name:"no big boobs",
		condit: function(){
			if(PC.getDim("breastSize")>30){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					height: 1,
					
					breastSize: (PC.Mods.breastSize>50) ? (45-PC.Mods.breastSize) : -10,
					//breastPerkiness: -1,
					
					buttFullness: -2,
					legFullness: -2,
					hipWidth: -2,
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			return "<p> I drank it and watched my shrinking bosom.</p>";
		}
	
	},{


	//FAIRSKIN
		name:"fairskin",
		condit: function(){
			if(PC.Mods.skinHue<-20||PC.Mods.skinHue>30){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					skinHue: 0-PC.Mods.skinHue,
					skin: (2-PC.basedim.skin)-PC.Mods.skin,
					
					hairLength: 5,
				},
				/*
				basedim: {
					skin: 2-PC.basedim.skin
				},
				*/
		 
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			return "<p>My skin returned to a human-like shade. Well, maybe a bit paler then I was used to.</p>"
		}
	},{


	//NO MUSCLES
		name:"no huge muscles",
		condit: function(){
			if(PC.getDim("upperMuscle")>=18){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					upperMuscle: -12,
					
					hairLength: 4,
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			return "<p>My muscles slowly started to disappear. </p>"
		}
	}],
};



//SUCCUBITE
elixir[2]={
	name:"Succubium",
	bonus: "Charisma",
	desc: "Sexy, demonic features.",
	unlisted:false,
	color:"",
	effect:[],
	taste:["The potion was strong and spicy but sinfully delicious. ","The potion was hot and spicy. ","The potion had a spicy flavour. ","The taste of the potion was very strong and spicy. ",],
	
	effect: [{
		//XXX CHARISMA XXX
			name:"succubi charisma",
			condit: function(){
				var chance=0;
				if(!mile.potion[2]){
					if(PC.getDim("hornyness")>0.5)chance++; //horns
					
					if(att.tailStyle==1 && PC.getDim("tail")>0.5)chance++; //tail
					
					if(PC.getDim("breastSize")>=32)chance++; //boobs
					if(PC.getDim("breastSize")<=16)chance--;
					
					if(PC.Mods.skinHue>280)chance++; //skin
						
					if(PC.Mods.irisHue>300)chance++; //eyes TODO-TEST
					
					if(chance>=3){return true}else{return false}; //OR 4?
				}else{
					return false
				}
			},
			
			exec:function(){
				attributes.change("char",1);
				mile.potion[2]=true;
				return "<p>I could not explain it but after drinking it I felt more confident, sexier and charismatic. </p><span class=\"upgrade\">+1 Charisma</span>"
			}
			
		},{

		//HORNS
			name:"succubi horns",
			condit: function(){
				if(PC.getDim("hornyness")<0.5||att.hornsStyle!=1){return true}else{return false};
			},
			exec:function(){
				if(PC.Mods.hornyness>0.5){
					const removeHorn = da.createTransformation(PC, WARDROBE.draw,{
						Mods: {
							hornyness: 0-PC.Mods.hornyness,
				
						},
					});
					const switchHorns = ((resolve) => {
						let myPart = da.Part.create(da.StraightHorns, {
						  //side: "right",
						  fill: "hsla(335.5,100.0%,49.4%,1.00)",
						});
						PC.attachPart(myPart, PC.decorativeParts);
					}); 
					
					const transformation = da.createTransformation(PC, WARDROBE.draw,{
						Mods: {
							breastSize: 2,
							hornyness: 1,
							hairLength: 8,
						},
					});
					
					da.transformAndShow(removeHorn,(transformationSpeed)).then(switchHorns/*da.transformAndShow.bind(null,temp,50)*/).then(da.transformAndShow.bind(null,transformation,transformationSpeed));
					
				}else{
					let myPart = da.Part.create(da.StraightHorns, {
						//side: "right",
						fill: "hsla(335.5,100.0%,49.4%,1.00)",
					});
					PC.attachPart(myPart, PC.decorativeParts);
						
					const transformation = da.createTransformation(PC, WARDROBE.draw,{
						Mods: {
							breastSize: 2,
							hairLength: 8,
							hornyness: 1,
						},
					});
					
					da.transformAndShow(transformation, transformationSpeed);
				};

				att.hornsStyle = 1;
				return "<p>My head started to hurt and when I touched my forehead I found out I am an owner of two cute horns. </p>"
			}
		
		},{

		//BIGGER HORNS
			name:"bigger horns",
			condit: function(){
				if(PC.getDim("hornyness")<1.5 && att.hornsStyle == 1){return true}else{return false};
			},
			exec:function(){
					
				const transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						hornyness: 2,
						hairLength: 8,
						breastSize: 3,
					},
				});
				
				da.transformAndShow(transformation, transformationSpeed);
	 
				//TODO
				return "<p>My horns grew even longer! </p>"
			}
		
	 
		},{
		
		
		//FEMININE
			name:"feminine",
			condit: function(){
				if(
					PC.getDim("faceFem")<22
					|| PC.getDim("legFem")<18
				){return true}else{return false};
			},
			exec:function(){
				var transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						faceFem: 40 - PC.getDim("faceFem"),
						legFem: 10,
						legFullness: 8,
						
						upperMuscle: (PC.getDim("upperMuscle")>20) ? -5 : 0,
						height: (PC.getDim("height")>174) ? -2 : 0,
					},
				});
				da.transformAndShow(transformation, transformationSpeed);
				
				//TODO
				return "<p>Immediately after I drank it my chest started expanding. My top was nearly ripped open. </p>"
			}
		},{
			
			
		//BOOBS
			name:"huge boobs",
			condit: function(){
				if(PC.getDim("breastSize")<42){return true}else{return false};
			},
			exec:function(){
				var transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						breastSize: 13,
						breastPerkiness: (PC.Mods.breastPerkiness<5) ?  (6-PC.Mods.breastPerkiness) :  7,
						hairLength: 4,
					},
				});
				da.transformAndShow(transformation, transformationSpeed);
				
				return "<p>Immediately after I drank it my chest started expanding. My top was nearly ripped open. </p>"
			}
		},{

		//REDSKING
			name:"redsking",
			condit: function(){
				if(PC.Mods.skinHue<=280){return true}else{return false};
			},
			exec:function(){
				var transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						hornyness: 0.1,
						breastSize: 2,
						skinHue: (280+Math.random()*50)-PC.Mods.skinHue,
						skin: ((6+Math.random()*6)-PC.basedim.skin)-PC.Mods.skin
					},

				});
				da.transformAndShow(transformation, transformationSpeed);
				
				return "<p>My whole body turned red! I looked like some kind of Martian. </p>"
			}
		},{

		 
		//PINK
			name:"pink hair",
			condit: function(){
				if((PC.basedim.hairHue+PC.Mods.hairHue)<280){return true}else{return false};
			},
			exec:function(){
				var transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						hairHue: (280+Math.random()*60)-(PC.basedim.hairHue+PC.Mods.hairHue),
						hairSaturation: (70+Math.random()*20)-(PC.basedim.hairSaturation+PC.Mods.hairSaturation),
						hairLightness: 50-(PC.basedim.hairLightness+PC.Mods.hairLightness),
					},
			
				});
				da.transformAndShow(transformation, transformationSpeed);
				return "<p>My hair started to tingle. I grabbed one strand - it turned purple! </p>"
			}	
		},{
			
		//EYES
			name:"demonic eyes",
			condit: function(){
				if(PC.Mods.irisSize<21){return true}else{return false};
			},
			exec:function(){
				var transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						hornyness: 0.1,
						faceFem: 12, 
						eyeSize: 2, 
						
						hairLength: 6,
						
						cheekFullness: PC.Mods.cheekFullness<0 ? 8 : 0,
						chinWidth: PC.Mods.chinWidth<0 ? 4 : 0,
					
						irisHue: (300+Math.random()*45)-PC.Mods.irisHue,
						irisSize: 10,//50-PC.Mods.irisSize,
						irisSaturation: 100-PC.Mods.irisSaturation,
						irisLightness: 74-PC.Mods.irisLightness
					},
				});
						 
				da.transformAndShow(transformation, transformationSpeed);
				
				return "<p>For I while I was not sure what changed, but then I noticed I can see far better in dark. </p>"
			}
		},{
			

		//TAIL
			name:"demonic tail",
			condit: function(){
				if(PC.getDim("tail")<0.4||att.tail!=1){return true}else{return false};
			},
			exec:function(){
				if(PC.Mods.tail>0.5){
					const removeItem = da.createTransformation(PC, WARDROBE.draw,{
						Mods: {
							tail: 0-PC.Mods.tail,
				
						},
					});
					const switchItem = ((resolve) => {
						let myPart = da.Part.create(da.DemonicTail, {
						  side: "right",
						});
						PC.attachPart(myPart, PC.decorativeParts);
					}); 
	
					const transformation = da.createTransformation(PC, WARDROBE.draw,{
						Mods: {
							tail: 1,
						},
					});
					
					da.transformAndShow(removeItem,(transformationSpeed)).then(switchItem).then(da.transformAndShow.bind(null,transformation,transformationSpeed));
					
				}else{
					let myPart = da.Part.create(da.DemonicTail, {
						side: "right",
					});
					PC.attachPart(myPart, PC.decorativeParts);
						
					const transformation = da.createTransformation(PC, WARDROBE.draw,{
						Mods: {
							breastSize: 2,
							tail: 10,
							hairLength: 4,
						},
					});
					
					da.transformAndShow(transformation, transformationSpeed);
				};

				att.tail = 1;
				return "<p>I drank it and from my behind grew a very long tail. Like what the fuck am I supposed to do with a tail?</p>"
			}
		},{
		
		//WINGS
			name:"#demonic wings",
			condit: function(){
				if(
					(PC.getDim("wings")<0.5||att.wings!=1) && mile.potion[2] //BEWARE INDEX!!!
				){return true}else{return false};
			},
			exec:function(){
				if(PC.Mods.wings>0.5){
					const removeItem = da.createTransformation(PC, WARDROBE.draw,{
						Mods: {
							wings: 0-PC.Mods.wings,
				
						},
					});
					const switchItem = ((resolve) => {
						let myPartLeft = da.Part.create(da.DemonicWings, {
						  side: "left",
						});
						let myPartRight = da.Part.create(da.DemonicWings, {
						  side: "right",
						});
						PC.attachPart(myPartRight, PC.decorativeParts);
						PC.attachPart(myPartLeft, PC.decorativeParts);
					}); 
	
					const transformation = da.createTransformation(PC, WARDROBE.draw,{
						Mods: {
							hornyness: 0.1,
							wings: 0.9,
							breastSize: 2,
							hairLength: 4,
						},
					});
					
					da.transformAndShow(removeItem,(transformationSpeed*2)).then(switchItem).then(da.transformAndShow.bind(null,transformation,transformationSpeed));
					
				}else{
					let myPartLeft = da.Part.create(da.DemonicWings, {
					  side: "left",
					});
					let myPartRight = da.Part.create(da.DemonicWings, {
					  side: "right",
					});
					PC.attachPart(myPartRight, PC.decorativeParts);
					PC.attachPart(myPartLeft, PC.decorativeParts);
						
					const transformation = da.createTransformation(PC, WARDROBE.draw,{
						Mods: {
							breastSize: 2,
							hairLength: 4,
							wings: 0.9,
						},
					});
					
					da.transformAndShow(transformation, transformationSpeed*2);
				};

				att.wings = 1;
			//TODO
				return "<p>I gained a pair of majestic demonic wings. </p>"
			}
		//TODO- LEGS		
		}]
};

			
 
 


 







 
//MINOTAURITE
elixir[3]={
	name:"Minotarium",
	bonus: "Strength",
	desc: "Big, muscular, horny.",
	unlisted:false,
	color:"",
	effect:[],
	taste:["The potion had milky consistency. "],
	
	effect: [{
	//XXX STRENGTH XXX
		name:"minotaur strength",
		condit: function(){
			var chance=0;
			if(!mile.potion[3]){
				if(PC.getDim("hornyness")>0.5 && att.hornsStyle==2)chance++ //bullhorns
				if(att.hoofs)chance++ //hoofs
				
				if(PC.getDim("upperMuscle")>16)chance++; //muscles
				if(PC.getDim("upperMuscle")<10)chance--;
				
				if(PC.getDim("height")>168)chance++;
			/*
				if(PC.getDim("breastSize")>=28)chance++;
				if(PC.getDim("breastSize")>=40)chance++;
				if(att.tail>0)chance++;
				if(att.tail>0)chance++;
				if(PC.Mods.skinHue<=-29)chance++;
				if(PC.Mods.irisSize>=49)chance++;
				*/
				if(chance>=3){return true}else{return false}; //OR 4?
			
			}else{
				return false
			}
		},
		exec:function(){
			attributes.change("str",1);
			mile.potion[3]=true;
			return "<p>After I drank the elixir, I felt great, more powerful with higher stamina. </p><span class=\"upgrade\">+1 Strength</span>"
		}
	},{
 
 
	//BULLHORNS
		name:"bullhorns",
		condit: function(){
			if(PC.getDim("hornyness")<0.5||att.hornsStyle!=2){return true}else{return false};
		},
		exec:function(){
			if(PC.Mods.hornyness>0.5){
				const removeHorn = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						hornyness: 0-PC.Mods.hornyness,
			
					},
				});
				
				//const switchHorns = new Promise(function(resolve){ 
				const switchHorns = ((resolve) => {
					let myPart = da.Part.create(da.CurvedHorns, {
						//side: "right",
						fill: "hsla(0.0,0.0%,12.5%,1.00)",
					});
					PC.attachPart(myPart, PC.decorativeParts);

					//resolve(); 

				}); 
				
				const transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						hornyness: 1,
						upperMuscle: 3,
					},
				});
				
				da.transformAndShow(removeHorn,(transformationSpeed/2)).then(switchHorns/*da.transformAndShow.bind(null,temp,50)*/).then(da.transformAndShow.bind(null,transformation,transformationSpeed));
				
			}else{
				let myPart = da.Part.create(da.CurvedHorns, {
					//side: "right",
					fill: "hsla(0.0,0.0%,12.5%,1.00)",
				});
				PC.attachPart(myPart, PC.decorativeParts);
					
				const transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						hornyness: 1,
						upperMuscle: 3,
						faceFem: -1,
					},
				});
				
				da.transformAndShow(transformation, transformationSpeed);
 
			};

			att.hornsStyle = 2;
			return "<p>I felt a short sharp pain. I could feel two huge horns growing from my head. </p>"
		}
	
 
	},{

	//BULLHORNS
		name:"bigger bullhorns",
		condit: function(){
			if(PC.getDim("hornyness")<1.5 && att.hornsStyle == 2){return true}else{return false};
		},
		exec:function(){
				
			const transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					hornyness: 2,
					upperMuscle: 3,
					height: 1,
					breastSize: -3,
					faceFem: -2, 
					legFem: -2,
				},
			});
				
			da.transformAndShow(transformation, transformationSpeed);
 
			

			
			//TODO
			return "<p>I felt a short sharp pain. I could feel two huge horns growing from my head. </p>"
		}
	
 
	},{

	//MUSCLES
		name:"muscles",
		condit: function(){
			if(PC.getDim("upperMuscle")<28){return true}else{return false};
		},
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					hornyness: 0.1,
					
					upperMuscle: 12,
					
					breastPerkiness: 2, 
					
					neckWidth: 2,
					shoulderWidth: 2,
					
					hipWidth: 2,
					
					waistWidth: 4,
					armThickness: 2,
					
					height: 2,	
					faceFem: -3,
					legFem: -4,
					
					breastSize: -6,
					
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			return "<p>I drank the potion and could watch my growing new musculature. However, I did not feel much stronger. </p>"
		}
		
	},{

	//HEIGHT
		name:"height",
		condit: function(){
			if(PC.getDim("height")<=180){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					hornyness: 0.1,
					
					height: 5,
					
					upperMuscle: 4,
					
					shoulderWidth: 1, 
					waistWidth: 2,
					hipWidth: 1,
					legFullness: 1,
					
					breastSize: -3,
					
					faceFem: -3,
					legFem: -6,
				//	earlobeLength: 3,
					
				/*	breastSize: -6,
					breastPerkiness: 1,
					
					buttFullness: -10,
					legFullness: -10,
					armThickness:-5,
					waistWidth:-5,
					*/
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			return "<p> My perspective suddenly changed. I grew taller. </p>"
		}

	},{
		
		
	//HOOFS
		name:"hoofs",
		condit: function(){
			if(!att.hoofs){return true}else{return false};
		},
		exec:function(){
			var HoofRight = da.Part.create(da.HoofHorse, {
				side: "right",
			});
			var HoofLeft = da.Part.create(da.HoofHorse, {
				side: "left",
			});
			att.hoofs=true;
			PC.attachPart(HoofRight);
			PC.attachPart(HoofLeft);
			//da.draw(canvasGroup, PC);
			WARDROBE.draw();
			return "<p>I staggered - my feet were turned into hoofs!</p>"
		}
	}]
};



//HP
elixir[4]={
	name:"Health Potion",
	unlisted:false,
	color:"",
	effect:[],
	taste:["The potion was tasteless but instantly made me feel better. "],
};

elixir[4].effect[elixir[4].effect.length]={
	name:"hp 6",
	condit: function(){
		
		if(STATS.item && STATS.item.hp && STATS.item.hp.value <= STATS.item.hp.max){
			return true
		}else{
			return false
		}
	},
	exec:function(){
		mile.potion[4] = true;
		STATS.change("hp",6);
		return "<p>All the pain disappeared and I noticed my health bar was fuller. </p>"
	}
};

elixir[4].effect[elixir[4].effect.length]={
	name:"hp 6",
	condit: function(){
		
		if(STATS.item && STATS.item.hp && STATS.item.hp.value <= STATS.item.hp.max){
			return false
		}else{
			return true
		}
	},
	exec:function(){
		mile.potion[4] = true;
		return "<p>If I were in a dungeon, the potion would recharge my Hit Points. </p>"
	}
};
 
//ENG
elixir[5]={
	name:"Energy Potion",
	unlisted:false,
	color:"",
	effect:[],
	taste:["The potion was a bit sour but very reinvigorating. "],
};

elixir[5].effect[elixir[5].effect.length]={
	name:"eng 6",
	condit: function(){
		
		if(STATS.item && STATS.item.eng && STATS.item.eng.value <= STATS.item.eng.max){
			return true
		}else{
			return false
		}
	},
	exec:function(){
		mile.potion[5] = true;
		STATS.change("eng",6);
		return "<p>I felt revved up, my weariness was gone and my energy bar a bit fuller. </p>"
	}
};

elixir[5].effect[elixir[5].effect.length]={
	name:"eng 5 no",
	condit: function(){
		
		if(STATS.item && STATS.item.eng && STATS.item.eng.value <= STATS.item.eng.max){
			return false
		}else{
			return true
		}
	},
	exec:function(){
		mile.potion[5] = true;
		return "<p>If I were in a dungeon, the potion would recharge my Energy. </p>"
	}
};



//Najadium 
elixir[6]={
	name:"Najadium",
	unlisted:true,
	bonus: "None",
	desc: "Blue.",
	color:"",
	effect:[],
	taste:[""],
	effect: [{
	
	//BLUESKIN
		name:"bluesking",
		condit: function(){
			if(PC.Mods.skinHue<150){return true}else{return false};
		},
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					skinHue: 190-PC.Mods.skinHue,
					skin: (10-PC.basedim.skin)-PC.Mods.skin
				},
		
			});
			da.transformAndShow(transformation, transformationSpeed);
			return "<p>I the water reflection I noticed my skin was turning blue. The spring had to be enchanted by naiads. </p>"
		}
	},{

	//BLUELIPS
		name:"blue lips",
		condit: function(){
			if(!att.fantasyLips || att.fantasyLips != "#003B96"){return true}else{return false};
		},
		exec:function(){
			if(PC.lipstick.fill){
				const remove = da.createTransformation(PC.lipstick, WARDROBE.draw,{
					invisible: 1 - PC.lipstick.invisible,
				});
				
				const switchStuff = (() => {
					PC.lipstick.fill = "#003B96";
				}); 
				
				const transformation = da.createTransformation(PC.lipstick, WARDROBE.draw,{
					invisible: -1,
				});
				
				da.transformAndShow(remove,(transformationSpeed/2)).then(switchStuff).then(da.transformAndShow.bind(null,transformation,transformationSpeed));
				
			}else{
				
				PC.lipstick.fill = "#003B96";
					
				const transformation = da.createTransformation(PC.lipstick, WARDROBE.draw,{
					invisible: 0 - PC.lipstick.invisible,
				});
				
				da.transformAndShow(transformation, transformationSpeed);
			};
		
			att.fantasyLips = "#003B96";
			return "<p>I did not notice anything different until I bend to the spring again and in the mirror-like surface I could see my lips now were dark blue.  </p>"
		}
	},{

	//BLUEHAIR
		name:"blue hair",
		condit: function(){
			if((PC.basedim.hairHue+PC.Mods.hairHue)<200||(PC.basedim.hairHue+PC.Mods.hairHue)>250){return true}else{return false};
		},
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					hairHue: 240-PC.basedim.hairHue,
					hairSaturation: 100-PC.basedim.hairSaturation,
					hairLightness: 50-PC.basedim.hairLightness,
				},
		
			});
			da.transformAndShow(transformation, transformationSpeed);
			return "<p>The water turned my hair blue! The spring had to be enchanted by naiads. </p>"
		}
	},{	
		
		
	//ENERGY
		name:"eng 4",
		condit: function(){
			
			if(STATS.item && STATS.item.eng && STATS.item.eng.value <= STATS.item.eng.max){
				return true
			}else{
				return false
			}
		},
		exec:function(){
			STATS.change("eng",3);
			return "<p>The water was cold and pure and I have never drink anything so good. I felt refreshed. </p>"
		}
		
	}]
};
 






//ENG
elixir[7]={
	name:"Antivenom",
	unlisted:false,
	color:"",
	effect:[],
	taste:["The was transparent and only a bit bitter. "],
};

elixir[7].effect[elixir[7].effect.length]={
	name:"anti 7",
	condit: function(){
		
		if(STATS.item && STATS.item.hp){
			return true
		}else{
			return false
		}
	},
	exec:function(){
		mile.potion[7] = true;
		STATS.cure();
		return "<p>Any effect of the poison were suppressed and I was cured. </p>"
	}
};

elixir[7].effect[elixir[7].effect.length]={
	name:"anti 7 no",
	condit: function(){
		
		if(STATS.item && STATS.item.hp){
			return false
		}else{
			return true
		}
	},
	exec:function(){
		mile.potion[7] = true;
		return "<p>A small notification told me that now I am poison-free. This antivenom might be useful. </p>"
	}
};










 
//BOVINITE
elixir[8]={
	name:"Bovinite",
	bonus: "Strength",
	desc: "Tall, muscular, tits, wide hips, horny. ",
	unlisted:false,
	color:"",
	effect:[],
	taste:["The potion had milky consistency. "],
	
	effect: [{
	//XXX STRENGTH XXX
		name:"cow strength",
		condit: function(){
			var chance=0;
			if(!mile.potion[8]){
				if(PC.getDim("hornyness")>0.5 && att.hornsStyle==2)chance++ //bullhorns
				if(att.hoofs)chance++ //hoofs
				
				if(PC.getDim("upperMuscle")>14)chance++; //muscles
				if(PC.getDim("height")>165)chance++; //height
				
				if(PC.getDim("breastSize")>=32)chance++; //boobs
				if(PC.getDim("breastSize")<=20)chance--;
	
				if(PC.getDim("legFullness")>=35 )chance++; //legs
				if(PC.getDim("legFullness")<24 )chance--;
				

				//PC.getDim("hipWidth")>=1
				
				
			/*
				if(PC.getDim("breastSize")>=28)chance++;
				if(PC.getDim("breastSize")>=40)chance++;
				if(att.tail>0)chance++;
				if(att.tail>0)chance++;
				if(PC.Mods.skinHue<=-29)chance++;
				if(PC.Mods.irisSize>=49)chance++;
				*/
				if(chance>=4){return true}else{return false}; //OR 4?
			
			}else{
				return false
			}
		},
		exec:function(){
			attributes.change("str",1);
			mile.potion[8]=true;
			//TODO
			return "<p>After I drank the elixir, I felt great, more powerful with higher stamina. </p><span class=\"upgrade\">+1 Strength</span>"
		}
	},{
 
 
	//BULLHORNS
		name:"bullhorns",
		condit: function(){
			if(PC.getDim("hornyness")<0.5||att.hornsStyle!=2){return true}else{return false};
		},
		exec:function(){
			if(PC.Mods.hornyness>0.5){
				const removeHorn = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						hornyness: 0-PC.Mods.hornyness,
			
					},
				});
				
				//const switchHorns = new Promise(function(resolve){ 
				const switchHorns = ((resolve) => {
					let myPart = da.Part.create(da.CurvedHorns, {
						//side: "right",
						//fill: "hsla(0.0,0.0%,12.5%,1.00)",
					});
					PC.attachPart(myPart, PC.decorativeParts);

					//resolve(); 

				}); 
				
				const transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						hornyness: 1,
						upperMuscle: 3,
					},
				});
				
				da.transformAndShow(removeHorn,(transformationSpeed/2)).then(switchHorns/*da.transformAndShow.bind(null,temp,50)*/).then(da.transformAndShow.bind(null,transformation,transformationSpeed));
				
			}else{
				let myPart = da.Part.create(da.CurvedHorns, {
					//side: "right",
					//fill: "hsla(0.0,0.0%,12.5%,1.00)",
				});
				PC.attachPart(myPart, PC.decorativeParts);
					
				const transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						hornyness: 1,
						upperMuscle: 3,
					},
				});
				
				da.transformAndShow(transformation, transformationSpeed);
 
			};

			att.hornsStyle = 2;
			return "<p>I felt a short sharp pain. I could feel two huge horns growing from my head. </p>"
		}
	
 
	},{

	//BOOBS
			name:"huge boobs",
			condit: function(){
				if(PC.getDim("breastSize")<52){return true}else{return false};
			},
			exec:function(){
				var transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						breastSize: 18,
						breastPerkiness: (PC.Mods.breastPerkiness<4) ?  (5-PC.Mods.breastPerkiness) :  5,
						hornyness: 0.1,
						upperMuscle: 2,
						height: 1,	
					},
				});
				da.transformAndShow(transformation, transformationSpeed);
				
				//TODO
				return "<p>Immediately after I drank it my chest started expanding. My top was nearly ripped open. </p>"
			}
	},{
			
			

	//MUSCLES
		name:"muscles",
		condit: function(){
			if(PC.getDim("upperMuscle")<21){return true}else{return false};
		},
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					hornyness: 0.1,
					height: 1,	
					upperMuscle: 8,
					breastPerkiness: 3, 
					breastSize: 6,
					
					
					neckWidth: 1,
					shoulderWidth: 1,
					
					legFullness: 5,
					hipWidth: 3,
										
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			//TODO
			return "<p>I drank the potion and could watch my growing new musculature. However, I did not feel much stronger. </p>"
		}
		
	},{

	//HEIGHT
		name:"height",
		condit: function(){
			if(PC.getDim("height")<=174){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					hornyness: 0.1,
					height: 4,
					upperMuscle: 2,
					breastPerkiness: 2, 
					breastSize: 5,
					
					legFullness: 5,
					hipWidth: 3,
					
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			return "<p> My perspective suddenly changed. I grew taller. </p>"
		}

	},{
		
	//ASS
		name:"wide hips",
		condit: function(){
			if(PC.getDim("legFullness")<=35 || PC.getDim("hipWidth")<=146 ){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					height: 1,
					hornyness: 0.1,
					upperMuscle: 2,
					breastSize: 2,
					
					legFullness: 12,
					hipWidth: 10,
					legFem: 4,
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
		
		//TODO
			return "<p> I drank it and lurched when my centre of mass changed. </p><p>With horror I found out my butt is plumper and hips wider. </p>"
		}
	},{	
	
	
	//HOOFS
		name:"hoofs",
		condit: function(){
			if(!att.hoofs){return true}else{return false};
		},
		exec:function(){
			var HoofRight = da.Part.create(da.HoofHorse, {
				side: "right",
			});
			var HoofLeft = da.Part.create(da.HoofHorse, {
				side: "left",
			});
			att.hoofs=true;
			PC.attachPart(HoofRight);
			PC.attachPart(HoofLeft);
			//da.draw(canvasGroup, PC);
			WARDROBE.draw();
			return "<p>I staggered - my feet were turned into hoofs!</p>"
		}
	}]
};






//FELINITE
elixir[9]={
	name:"Felinite",
	bonus: "Dexterity",
	desc: "Cat features, lean. ",
	unlisted:false,
	color:"",
	effect:[],
	taste:["The potion had milky consistency. "],
	
	effect: [{
		name:"cat dexterity",
		condit: function(){
			var chance=0;
			if(!mile.potion[9]){
				
				//if(PC.getDim("hornyness")>0.5 && att.hornsStyle==2)chance++ //bullhorns
			//	if(att.hoofs)chance++ //hoofs
				
			//	if(PC.getDim("upperMuscle")>14)chance++; //muscles
			//	if(PC.getDim("height")>165)chance++; //height
				
			//	if(PC.getDim("breastSize")>=32)chance++; //boobs
			//	if(PC.getDim("breastSize")<=20)chance--;
	
				chance++
				if(
					PC.getDim("upperMuscle") >= 25
					&& PC.getDim("hipWidth") >= 125
					&& PC.getDim("breastSize")>=26
				) chance--;
				
				if(att.ears == 2)chance++; //ears
				if(att.tail == 2)chance++; //tail
				if(att.pupils)chance++; //tail

				//PC.getDim("hipWidth")>=1
				
				
			/*
				if(PC.getDim("breastSize")>=28)chance++;
				if(PC.getDim("breastSize")>=40)chance++;
				if(att.tail>0)chance++;
				if(att.tail>0)chance++;
				if(PC.Mods.skinHue<=-29)chance++;
				if(PC.Mods.irisSize>=49)chance++;
				*/
				if(chance>2){return true}else{return false}; //OR 4?
			
			}else{
				return false
			}
		},
		exec:function(){
			attributes.change("dex",1);
			mile.potion[9] = true;
			//TODO
//SPELL concience of my body vědomí, from my
//It felt strange, the potion caused I had a new 
			return "<p>I moved with a cat-like graceful elegance. </p><span class=\"upgrade\">+1 Dexterity</span>"
		}
	},{
 
	//CAT EARS
		name:"cat ears",
		condit: function(){
			if(att.ears != 2){return true}else{return false};
		},
		
		exec:function(){
			const removeEars = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					earlobeLength: 0-PC.Mods.earlobeLength,
				},
			});
			
			const switchEars = ((resolve) => {
				let myPartRight = da.Part.create(da.CatEars, {
					side: "right",
				});
				let myPartLeft = da.Part.create(da.CatEars, {
					side: "left",
				});
				PC.attachPart(myPartRight, PC.faceParts);
				PC.attachPart(myPartLeft, PC.faceParts); 

			}); 
			
			const transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					earlobeLength: 3,
				},
			});
			
			da.transformAndShow(removeEars,(transformationSpeed)).then(switchEars).then(da.transformAndShow.bind(null,transformation,transformationSpeed));
			
			att.ears = 2;
//TODO
			return "<p>I gained a new pair of fluffy cat ears. </p>"
		}
	


	},{
	

	//TAIL
		name:"cat tail",
		condit: function(){
			if(PC.getDim("tail")<0.4||att.tail!=2){return true}else{return false};
		},
		exec:function(){
			if(PC.Mods.tail>0.5){
				const removeItem = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						tail: 0-PC.Mods.tail,
			
					},
				});
				const switchItem = ((resolve) => {
					let myPart = da.Part.create(da.CatTail, {
					  side: "right",
					});
					PC.attachPart(myPart, PC.decorativeParts);
				}); 

				const transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						tail: 1,
					},
				});
				
				da.transformAndShow(removeItem,(transformationSpeed)).then(switchItem).then(da.transformAndShow.bind(null,transformation,transformationSpeed));
				
			}else{
				let myPart = da.Part.create(da.CatTail, {
					side: "right",
				});
				PC.attachPart(myPart, PC.decorativeParts);
					
				const transformation = da.createTransformation(PC, WARDROBE.draw,{
					Mods: {
						tail: 1,
					},
				});
				
				da.transformAndShow(transformation, transformationSpeed);
			};

			att.tail = 2;
			return "<p>My tailbone started to hurt. I could feel a long furry tail slowly and elegantly growing out of my body. </p>"
		}
	},{
			
			
	//PULPILS
		name:"cat pupils",
		condit: function(){
			if(!att.pupils){return true}else{return false};
		},
		exec:function(){
			let myPartRight = da.Part.create(da.PupilCat, {
			  side: "right",
			});
			let myPartLeft = da.Part.create(da.PupilCat, {
			  side: "left",
			});
			PC.attachPart(myPartRight, PC.faceParts);
			PC.attachPart(myPartLeft, PC.faceParts);

			let transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					irisSize:2,
					irisSaturation: 90-PC.Mods.irisSaturation,
					irisLightness: 60-PC.Mods.irisLightness,
					eyeSize:2,

				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			att.pupils = true;
			return "<p>My vision changed, the colors faded but everything seemed brighter. <p>"
		}
	},{	
	
	
	
	
	
	//LEAN
		name:"lean",
		condit: function(){
			if(		PC.getDim("height")>=170
				||	PC.getDim("breastSize")>=40
				||	PC.getDim("upperMuscle")>=32
				||	PC.getDim("hipWidth")>=150     ){return true}else{return false};
		},
		
		exec:function(){
			var transformation = da.createTransformation(PC, WARDROBE.draw,{
				Mods: {
					height: -2,
					upperMuscle: (PC.getDim("upperMuscle")>15) ? -5 : 0,
					breastSize: -5,
					
					buttFullness: -6,
					legFullness: -10,
					hipWidth: (PC.getDim("hipWidth")>=125) ? -8 : 0,
				},
			});
			da.transformAndShow(transformation, transformationSpeed);
			
			//TODO
//SPELL
			return "<p>My body became more slender and lean. </p>"
		}

	  
		
	}]
};		
		
return{
		
		initiate,
		//add:add,
		random,
		elixir,
		use,
		end,
		drink,
		//hide:hide,
		//change:change
	};

})();
