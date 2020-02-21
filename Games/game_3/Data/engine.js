let active_scene = 0; 
let failback_scene = 0;

let chapter_name = "Default"; //name of the active chapter (used for saving)
let day = 0; //track time, what day is in the story right name

let content = "intro";
//let originalContent = "intro";
//story.intro; //content (respective text, links, etc) is loaded from this function
//let content_name = "story"; //remembers the name of the variable which is content (for saving)
 
let eventy = {};
let alty = {};

let possible_choices = [];





function link(input,target,additional,condition){
	//console.log("link")
	
	if(typeof condition === "undefined"){condition=true};
	if(typeof additional === "undefined"){additional = (function(){}) };
	var index = eventy.length;
	
	if(condition==true){
		text += "<div class=\"link\" id=\"link_"+index+"\">"+input+"</div> ";
		eventy[index] = (function(){
			additional();
			if(target !== undefined && target !== null) main(target);
		});
	}else{
		text += "<div class=\"link link_dead\" >"+input+"</div> ";
	};
};


let URDEAD = false;
function main(input){
	if(!input)return;
	
	
	//if(typeof input === "undefined")return;
	
	if(debug) console.log("<"+input+","+content+">"); //SIC
	
	//scrolls to the top
	document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome a Firefox
		
	//scene
	failback_scene = active_scene;
	active_scene = input;

	//CLEAR VARIABLES 
	alty= [];
	eventy = [];
	text = "";
	
	//LOAD TEXTS FROM CONTENT
	/*
console.log("DUNGEON.active");
console.log(DUNGEON);
console.log(DUNGEON.active);
*/
	if(DUNGEON && DUNGEON.active){
		
	/*	
		console.log(content)
		console.log(vault)
		console.log(vault[content])
		console.log("dva+ "+DUNGEON.vaultAlt)
	*/
		if( vault[content].story && input >= 100){
			vault[content].story(input);
			
		}else if( vault[content].reaction ){
			if( input == 100 ){
				vault[content].initiate();	
			}else if( input > 100 ){
				vault[content].intro();
				DUNGEON.attack();
				//vault[content].fight();
			}else{
				checkCombatPoison();
				vault[content].reaction(input);
				DUNGEON.attack();
				/*	
				if(counter.enemy){
					
					//vault[content].fight();
				}else{
					vault[content].result();
				}
				//vault[content].fight();
				*/
			}
		}else{
			vault[content]();
		};
	}else{
		story[content](input);
		alty[eventy.length] = "Does not change back variables and causes mess!!";
		if(debug && failback_scene!=active_scene)link("<small>##Back.</small> ",failback_scene); 
	};
	
	var debug = "";
	if(debug){
		debug = "<small><span onclick=\"main("+(active_scene+1)+")\">#FORWARD </span>"+"<span onclick=\"main("+(active_scene-1)+")\">#BACK </span>"+"<span onclick=\"main(2)\" >#CONTENT </span></small>";
	}
	
	//WRITTE ON SCREEN
	document.getElementById("div_text").innerHTML = text + debug;
	
	
	
	 
	
	
	 
	
	//ADD ONCLICK ACTIONS 
	//console.log(link_events.length)
	for(let ii = 0; ii < eventy.length; ii++){
		const div_link = document.getElementById("link_"+ii);
		
		div_link.addEventListener("click",function(){
			ultraOff();
			eventy[ii]();
		}, false); 
		
		
		
		if(alty[ii]){
			div_link.addEventListener("mouseenter",function(event){
				ultra(event,alty[ii]);
			}, false);
			div_link.addEventListener("mousemove",function(event){
				ultraUpdate(event);
			}, false); 
			div_link.addEventListener("mouseleave",function(){
				ultraOff(); 
			}, false); 
			
	//		(function(ii){ 
				//console.log("Event "+ii+":")
				//console.log(link_events[ii])
				//console.log("ff: "+link_events[ii])
		/*
		document.getElementById("link_"+ii).addEventListener("mousemove",function(event){
					fce_ultra_off(); 
					fce_ultra_on(event,alty[ii]);       //eventy[ii]()
				}, false); 
				document.getElementById("link_"+ii).addEventListener("mouseleave",function(){
					fce_ultra_off();       //eventy[ii]()
				}, false); 
		*/
	//		})(ii);
		};
		
	};
	
	
	 

	
	//SPECIAL CHOICES
	possible_choices=[];
	if(DUNGEON && DUNGEON.active){
		if(vault[content] && vault[content].effects){
			vault[content].effects(input);
		};
	}else{
		if(effects[content] &&effects[content][input]){
			effects[content][input]();
		};
	};
	
	
/*		
if(document.getElementById("name_1")){
	document.getElementById("name_1").innerHTML = "88888888888";	
	console.log("yeah")
}
*/
	
	//POTION - this definitely should not be here and should not be done this way
	/*
	for (var ii = 0; ii < potiony.length; ii++){
		potion.add("potion_"+ii,potiony[ii]);
	};
	*/
	/*
	if(document.getElementById("pot")){
		
	};
	if(document.getElementById("pot1")){
		potion.add("pot1");
	};
	if(document.getElementById("pot2")){
		potion.add("pot2");
	};
	if(document.getElementById("pot3")){
		potion.add("pot3");
	};
	*/
	//turn into loop

/*

	if(skip_main){
		let asdf = skip_main;
		skip_main = void 0;
		main(asdf);
	};
	*/
	
	
	
	//DEATH
	/*
	if(URDEAD){
		URDEAD();
		//URDEAD = void 0;
		
		hide_links();
		document.getElementById("div_text").innerHTML += "<div class=\"link\" id=\"link_DEATH\">Failure</div> "
		document.getElementById("link_DEATH").addEventListener("click",function(){
			//	console.log(URDEAD)
				main(URDEAD);
			}, false); 
			
	};
	*/
	
};







function hide_links(){
	var elements = document.getElementsByClassName("link")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    };
};

function show_links(){
	var elements = document.getElementsByClassName("link")

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "block";
    };
};



function bold(input){
	text+="<div class=\"bold\" >"+input+"</div> "; 
};

function imp(input){
	text+="<div class=\"imp\" >"+input+"</div> "; 
};

function redded(input){
	text+="<div class=\"speech bloodletters\" >"+input+"</div> "; 
};







function kat(input){
	speech(input,"kat",NAME.kat);
};
function anj(input){
	speech(input,"anj",NAME.anj);
	//text+="<div class=\"speech andrej\" >"+input+"</div> ";
};
function pet(input){
	speech(input,"pet",NAME.pet);
	//text+="<div class=\"speech pet\" >"+input+"</div> ";
};
function ayy(input){
	speech(input,"ayy",NAME.ayy);
};
function qaa(input){
	speech(input,"qaa",NAME.qaa);
};
function qbb(input){
	speech(input,"qbb",NAME.qbb);
};
function qcc(input){
	speech(input,"qcc",NAME.qcc);
};

function eva(input){
	speech(input,"eva",NAME.eva);
};
function sas(input){
	speech(input,"sas",NAME.sas);
};
function mol(input){
	speech(input,"mol",NAME.mol);
};
function tom(input){
	speech(input,"tom",NAME.tom);
};
function zan(input){
	speech(input,"tom",NAME.zan);
};

function choice(input,id){
	return "<div class=\"choice\" id=\""+id+"\">"+input+"</div> ";
};


function dynamic(id){
	return "<span id=\""+id+"\" class=\""+id+"\"></span> ";
};


/*
var eva = ayy;
var sas = qaa;
*/

/*
function pot(type){
	var index=potiony.length;
	 
		switch(type){
			case "gob":type=0; break;
			case "elf":type=1; break;
			case "suc":type=2; break;
			case "min":type=3; break;
		};
//	};
	potiony[index]=type;
	return "<div class=\"choice\" id=\"potion_"+index+"\">(placeholder potion)</div> ";
};
*/

function note(input){
	text+="<div class=\"speech neutral\" >"+input+"</div> ";
};

function spoiler(input){
	text+="<div class=\"speech neutral\" ><span class = \"spoiler\">"+input+"</span></div> ";
};
/*
function xxx(input){
	text+=input;
};
*/
function txt(input){
	text+="<div class=\"speech neutral\" >"+input+"</div> ";
};

function hint(input){
	if(!HINT)return;
	text+="<div class=\"speech hint\" >#Hint: "+input+"</div> ";
};

function speech(input,style,speaker = "???"){
	if(NPC.showNames) return text+="<div class=\"speech "+style+"\" >"+speaker+": \""+input+"\"</div> ";
	text+="<div class=\"speech "+style+"\" >\""+input+"\"</div> ";
};


var npc_speech = [];

function npc_set(){
	npc_speech = [];
	
	//if(arguments.length)
	
	for(let i = 0; i < arguments.length; i++){
		npc_speech[ arguments[i][0] ] = arguments[i][1]
	}
	
};


function npc(who,input){
	if(typeof npc_speech[who] == "undefined") npc_speech[who] = "Anon:"
	speech(input,"npc_"+who,npc_speech[who]);
	
 
	
};



	
const div_ultra = document.createElement("DIV");
document.body.appendChild(div_ultra);
div_ultra.id = "div_ultra";
var ultraDelay;

function ultraInitiate(div,desc){
 	div.addEventListener("mouseenter",function(event){ ultra(event, desc  ) } );
	div.addEventListener("mousemove",ultraUpdate);
	div.addEventListener("mouseleave",ultraOff);
};

function ultra(event,input){
	ultraDelay = setTimeout(function(){ 
		div_ultra.style.display = "block";
		div_ultra.innerHTML = input;
	}, 400);
};
 
function ultraUpdate(event){
	let x = event.clientX;
	let y = event.clientY;
	div_ultra.style.left = (x+20);
	div_ultra.style.top = (y+20);
};

function ultraOff(){
	clearTimeout(ultraDelay);
	div_ultra.style.display = "none";
};
 
 

tting = 0;
const set = {}
var se
set.irl = function(){
	WARDROBE.showLess(0,0); //TODO - CHECK IF THIS IS NECESSARY
	//THE IDEA IS THAT THE DIMENSIONS CHANGED BY CLOTHES (ESPECIALLY HEELS) ARE NOT SAVED
		
	
//console.log("SETIRL")


/*
console.log(setting)
console.log(PC.Mods.height);
console.log(PCIRL.Mods.height);
console.log(PCGAME.Mods.height);
*/	
/*
console.log("PC.Mods.hornyness");
console.log(PC.Mods.hornyness);
console.log(PCGAME.Mods.hornyness);
console.log(PCIRL.Mods.hornyness);
*/
	set.save();
	/*
console.log(PCGAME.Mods.hornyness);
console.log(PCIRL.Mods.hornyness);
*/
	setting = 0;
//console.log(PC)
	WARDROBE.updateMods(PC,PCIRL);
	/*
console.log(PC.Mods.hornyness);
console.log(PCGAME.Mods.hornyness);
console.log(PCIRL.Mods.hornyness);
*/
	set.attachSpecialParts();
//console.log(PC)
//console.log(PCIRL)
	WARDROBE.unpackWear(PCIRL.worn,PC);
	
	
	
	DISPLAY.notGame();
	WARDROBE.showAll(); //TODO
	

}

set.meta = function(){
	WARDROBE.showLess(0,0); //TODO - CHECK IF THIS IS NECESSARY
	//THE IDEA IS THAT THE DIMENSIONS CHANGED BY CLOTHES (ESPECIALLY HEELS) ARE NOT SAVED
	
	set.save();
	setting = 1;
	WARDROBE.updateMods(PC,PCMETA);
	set.attachSpecialParts();
	
//	WARDROBE.unpackWear(PCMETA.worn,PC);
	WARDROBE.unpackWear(PCIRL.worn,PC);
//TODO?
	
	//WARDROBE.draw();
	//WARDROBE.config.PC = PCMETA;
	WARDROBE.showAll(); //TODO
	DISPLAY.notGame();
}

set.game = function(){
	WARDROBE.showLess(0,0); //TODO - CHECK IF THIS IS NECESSARY
	//THE IDEA IS THAT THE DIMENSIONS CHANGED BY CLOTHES (ESPECIALLY HEELS) ARE NOT SAVED
	
	
	set.save();
	setting = 2;
	WARDROBE.updateMods(PC,PCGAME);
	set.attachSpecialParts();
	WARDROBE.unpackWear(PCGAME.worn,PC);
	/*
	PC = PCGAME;
	WARDROBE.draw();
	*/
	//WARDROBE.config.PC = PCGAME;
	WARDROBE.showAll(); //TODO
	attributes.check();
	DISPLAY.game();
}

set.resetGame = function(){
	WARDROBE.showLess(0,0); //TODO - CHECK IF THIS IS NECESSARY
	//THE IDEA IS THAT THE DIMENSIONS CHANGED BY CLOTHES (ESPECIALLY HEELS) ARE NOT SAVED
	
	
	//set.save(); //NO SAVING!!!
	setting = 2;
	WARDROBE.updateMods(PC,PCGAME);
	set.attachSpecialParts();
	WARDROBE.unpackWear(PCGAME.worn,PC);
	/*
	PC = PCGAME;
	WARDROBE.draw();
	*/
	//WARDROBE.config.PC = PCGAME;
	WARDROBE.showAll(); //TODO
	
	attributes.check();
	DISPLAY.game();
}

set.save = function(){
//	WARDROBE.showLess(0,0); //TODO - CHECK IF THIS IS NECESSARY
	//THE IDEA IS THAT THE DIMENSIONS CHANGED BY CLOTHES (ESPECIALLY HEELS) ARE NOT SAVED
	
	switch(setting){
		case 0: WARDROBE.updateMods(PCIRL,PC);
				PCIRL.worn = WARDROBE.packWorn(PC);
			break;
		case 1: WARDROBE.updateMods(PCMETA,PC);
				PCMETA.worn = WARDROBE.packWorn(PC);
			break;
		case 2: WARDROBE.updateMods(PCGAME,PC);
				PCGAME.worn = WARDROBE.packWorn(PC);
			break;
	}
	
	//WARDROBE.showAll(); //TODO
}
set.newday = function(){
	mile.day++;
	
	//TO DO - CALL DRESSING UP 
	
}

set.attachSpecialParts = function(subject = PC){
	
	
	//console.log("nails "+att.irlNails);
	
	if(setting==2){
		
		//TATTOOS
	/*
		while(PC.tattoos.length>0)PC.removeTattoo(PC.tattoos[0]);
		switch(att.class){
			case 2:
				{
					let tattoo = WARDROBE.create("BlueTriangle");
					PC.addTattoo(tattoo);
				};
				{
					let tattoo = WARDROBE.create("BlueDragon");
					PC.addTattoo(tattoo);
				};
			 
				
				{
					let tattoo = WARDROBE.create("BlueBand2");
					PC.addTattoo(tattoo);
				};
				
				break;	
			case 3: 
				{
					let tattoo = WARDROBE.create("EgyptSun");
					PC.addTattoo(tattoo);
				};
				break;
		};
	*/	
		
//console.log("11");		

		if(att.ears==2){
			let myPartRight = da.Part.create(da.CatEars, {
			  side: "right",
			});
			let myPartLeft = da.Part.create(da.CatEars, {
			  side: "left",
			});
			subject.attachPart(myPartRight, subject.decorativeParts);
			subject.attachPart(myPartLeft, subject.decorativeParts);
			
		}else if(att.ears==1){
			
			let myPartRight = da.Part.create(da.EarsElf2, {
				side: "right",
			});
			let myPartLeft = da.Part.create(da.EarsElf2, {
				side: "left",
			});
			subject.attachPart(myPartRight, subject.faceParts);
			subject.attachPart(myPartLeft, subject.faceParts);
		
		}
			
			
		if(att.hornsStyle == 2){
			let myPart = da.Part.create(da.CurvedHorns, {
			//  side: "right",
			});
			subject.attachPart(myPart, subject.decorativeParts);
		}else if(att.hornsStyle == 1){
			let myPart = da.Part.create(da.StraightHorns, {
			//  side: "right",
			});
			subject.attachPart(myPart, subject.decorativeParts);
		};
		
		if(att.pupils){
			let myPartRight = da.Part.create(da.PupilCat, {
			  side: "right",
			});
			let myPartLeft = da.Part.create(da.PupilCat, {
			  side: "left",
			});
			subject.attachPart(myPartRight, subject.faceParts);
			subject.attachPart(myPartLeft, subject.faceParts);
		}
	
		if(att.hoofs){
			let myPartRight = da.Part.create(da.HoofHorse, {
				side: "right",
			});
			subject.attachPart(myPartRight);
			
			let myPartLeft = da.Part.create(da.HoofHorse, {
				side: "left",
			});
			subject.attachPart(myPartLeft);
		}
		
		 if(att.fantasyLips){
			WARDROBE.display.makeup.lips.prominence = 1; 
			WARDROBE.display.makeup.lips.fill = att.fantasyLips;
		 }else{
			WARDROBE.display.makeup.lips.prominence = 0;  
		 }
		 
		if(att.fantasyMascara || att.fantasyMascaraTop || att.fantasyMascaraBot){
			WARDROBE.display.makeup.mascara.prominence = 1; 
			WARDROBE.display.makeup.mascara.fill = att.fantasyMascara;
			WARDROBE.display.makeup.mascara.topFill = att.fantasyMascara;
			WARDROBE.display.makeup.mascara.botFill = att.fantasyMascara;
		 }else{
			WARDROBE.display.makeup.mascara.prominence = 0;  
		 }
		 
		if(att.fantasyNails){
//console.log("yay");
			WARDROBE.display.makeup.nails.prominence = 1; 
			WARDROBE.display.makeup.nails.fill = att.fantasyNails;
		}else{
//console.log("nay");
			WARDROBE.display.makeup.nails.prominence = 0;  
		}
		
		
		
		
		if(att.tail == 1){
			let myPart = da.Part.create(da.DemonicTail, {
						side: "right",
					});
			subject.attachPart(myPart, subject.decorativeParts);
		}else if(att.tail == 2){
			let myPart = da.Part.create(da.CatTail, {
					side: "right",
				});
			subject.attachPart(myPart, subject.decorativeParts);
		}
		
		
		if(att.wings){
			let myPartLeft = da.Part.create(da.DemonicWings, {
			  side: "left",
			});
			let myPartRight = da.Part.create(da.DemonicWings, {
			  side: "right",
			});
			subject.attachPart(myPartRight, subject.decorativeParts);
			subject.attachPart(myPartLeft, subject.decorativeParts);
		}
		
		
		
		
		//TO DO TAIL
	}else{
//console.log("22");


		

		//TATTOOS
		while(PC.tattoos.length>0)PC.removeTattoo(PC.tattoos[0]);
		
		if(att.ears!=1){
			let myPartRight = da.Part.create(da.EarsElf2, {
				side: "right",
			});
			let myPartLeft = da.Part.create(da.EarsElf2, {
				side: "left",
			});
			subject.attachPart(myPartRight, subject.faceParts);
			subject.attachPart(myPartLeft, subject.faceParts);
		}
		
		if(att.pupils){
			let myPartRight = da.Part.create(da.PupilHuman, {
			  side: "right",
			});
			let myPartLeft = da.Part.create(da.PupilHuman, {
			  side: "left",
			});
			subject.attachPart(myPartRight, subject.faceParts);
			subject.attachPart(myPartLeft, subject.faceParts);
		}
	
		if(att.hoofs){
			let myPart = da.Part.create(da.FeetHuman, {
				side: "right",
			});
			subject.attachPart(myPart);
			
			let myPartLeft = da.Part.create(da.FeetHuman, {
				side: "left",
			});
			subject.attachPart(myPartLeft);
		}
		
		if(att.irlLips){
			WARDROBE.display.makeup.lips.prominence = 1; 
			WARDROBE.display.makeup.lips.fill = att.irlLips;
		}else{
			WARDROBE.display.makeup.lips.prominence = 0;  
		}
		
		if(att.irlNails){
			WARDROBE.display.makeup.nails.prominence = 1; 
			WARDROBE.display.makeup.nails.fill = att.irlNails;
		}else{
			WARDROBE.display.makeup.nails.prominence = 0;  
		}
		
		
		if(att.irlMascara || att.irlMascaraTop || att.irlMascaraBot){
			WARDROBE.display.makeup.mascara.prominence = 1; 
			WARDROBE.display.makeup.mascara.fill = att.irlMascara;
			WARDROBE.display.makeup.mascara.topFill = att.irlMascaraTop;
			WARDROBE.display.makeup.mascara.botFill = att.irlMascaraBot;
		 }else{
			WARDROBE.display.makeup.mascara.prominence = 0;  
		 }
	}
	/*
	console.log(att.irlMascaraTop);
	console.log(WARDROBE.display.makeup.mascara.prominence);
	console.log(WARDROBE.display.makeup.mascara.fill);
	console.log(WARDROBE.display.makeup.mascara.topFill);
	*/
};









//let testContent;

//CHAPTER - change chapter 
set.chapter = function(name = "Day "+day, input, active_content = content){
	chapter_name = name;
	SAVE.autosave();
	
	content = active_content; //story[active_content];
	
	//active_scene is changed by the main() but SAVE.autosave() needs it and has to be before main()
	//if(typeof input !== "undefined")active_scene = input; 
	if(typeof input !== "undefined")main(input);
	
}

set.goto = function(cont,input=101){
	content = cont;
	main(input);
}




set.skipBack = function(){
	content = counter.backContent;
	main(counter.backInput)	
}

set.skip = function(newContent,newInput,backContent,backInput){
	counter.backContent = backContent;
	counter.backInput = backInput; //TODO - DO NOT USE COUNTER! - BUT HAS TO BE SAVED 
	content = newContent;
	main(newInput);
}


function may_desc(target_id,new_desc){
	//TODO - DOESNT FUCKING WORK!!!!! NO FUCKING IDEA WHY!!!!!!!!
	
	//console.log(target_id)
	//console.log(new_desc)
	const target = document.getElementById(target_id);
	//console.log(target)
	if(target)target.innerHTML = new_desc;
	//may be necessary to change to textnode
	/*
	setTimeout(function(){  //dropping down the final piece is considered to be a click, need delay
		if(target)target.innerHTML = new_desc;
		//	document.getElementById("name_1").innerHTML = "FUICK";
		}, 200);
	*/
};


function may_effect(target_id,effect){
//console.log("XTT");console.log(target_id);
	const index = possible_choices.length-1; 
	target = document.getElementById(target_id);
	if(!target)return;
	//console.log(target_id);
	function trigger_effect(){
		for (k = 0; k < possible_choices[index].length; k++){
			if(target_id==possible_choices[index][k].id&&possible_choices[index][k].active==true){ //FUCKING CUMSY
				effect(); 
				break;
			};
		};
	};
	target.addEventListener("click",trigger_effect); 
};



function may_pick_one(){
	hide_links(); // !! TODO - TEST IF WORKS 
	
	var index = possible_choices.length; //   arguments[0];
	possible_choices[index]=[];
	possible_choices[index].done=false;
	
	var array=[];
	for (let i = 0; i < arguments.length; i++) {
		if(document.getElementById(arguments[i])){ //works????
		   possible_choices[index][i]={
				id:arguments[i],
				obj:document.getElementById(arguments[i]),
				active:false,
				dead:false,
		   };
		};
    };
	
	for (i = 0; i < possible_choices[index].length; i++) {
		possible_choices[index][i].obj.addEventListener("click",activate); 
    };
	
	var active;
	
 
	
	/*
	function deactivate(){
		for (i = 0; i < array.length; i++) {
		   document.getElementById(array[i]).classList.add("choice_dead");
		   document.getElementById(array[i]).classList.remove("choice_active");
		};
		active=void 0;
	};
 */
	function check_links(){
		
		hide_links();
		for(let i=0;i<possible_choices.length;i++){
			//console.log(possible_choices[i].done)
			if(possible_choices[i].done==false)return
		};
		show_links();
	};
	
	function activate(){
		for (k = 0; k < possible_choices[index].length; k++){
			if(possible_choices[index][k].obj==this&&possible_choices[index][k].active==true){
				//DEACTIVATE
				for (i = 0; i < possible_choices[index].length; i++) {
					possible_choices[index][i].active=false;
					possible_choices[index][i].dead=false;
					possible_choices[index][i].obj.classList.remove("choice_dead");
					possible_choices[index][i].obj.classList.remove("choice_active");
				};
				
				//console.log(index)
				possible_choices[index].done=false;
				check_links();
				
				break;
			}else if(possible_choices[index][k].obj==this&&possible_choices[index][k].dead==false){
				//ACTIVATE
				for (i = 0; i < possible_choices[index].length; i++) {
					possible_choices[index][i].dead=true;
					possible_choices[index][i].obj.classList.add("choice_dead");
				};
				possible_choices[index][k].active=true;
				possible_choices[index][k].dead=false;
				possible_choices[index][k].obj.classList.remove("choice_dead");
				possible_choices[index][k].obj.classList.add("choice_active");
				
				//console.log(index)
				possible_choices[index].done=true;
				check_links();
				
				break;
			}else if(possible_choices[index][k].obj==this&&possible_choices[index][k].dead==true){
				 
				break;
			};
		};
	//	console.log("activate:");
	//	console.log(possible_choices[index]);
	};
	

};



function may_body_change(target_id,duration,body){
	target = document.getElementById(target_id);
	if(!target)return;
	const index = possible_choices.length-1; 
	//console.log("i:"+index);
	var body_upgrade = {Mods:{}};
	var body_downgrade = {Mods:{}};
	for (var dim in body){
		body_upgrade.Mods[dim] = body[dim]
		body_downgrade.Mods[dim] = -body[dim]
	};
	
	var target_active=true;
	
	function upgrade(){
		if(target_active){
			let transformation = da.createTransformation(PC, WARDROBE.draw, body_upgrade);
			da.transformAndShow(transformation, duration);
		};
	};
	function downgrade(){
		if(target_active){
			let transformation = da.createTransformation(PC, WARDROBE.draw, body_downgrade);
			da.transformAndShow(transformation, duration);
		};
	};

	function grade(){
		for (k = 0; k < possible_choices[index].length; k++){
			if(target_id==possible_choices[index][k].id&&possible_choices[index][k].dead==false){ //FUCKING CUMSY
				target_active=!target_active;
				break;
			};
		};
		
	};

	target.addEventListener("mouseenter",upgrade); 
	target.addEventListener("mouseleave",downgrade); 
	target.addEventListener("click",grade); 
};