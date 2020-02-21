//SAVING & LOADING FROM THE LOCAL STORAGE OF THE BROWSER 

let NPC = {};
let NAME = {};
let HINT = true;
const STORAGE = (function(){ 
//default values
	const def = {
		colors: {
			bgr: "hsl(228, 4%, 80%)",
			bgr2: "hsl(228, 4%, 70%)",
			//highlight: "red",
			highlight: "hsl(0, 0%, 18%)",
			text:  "hsl(0, 0%, 0%)",
		},
		avatar: 250,
		difficulty: 0,
		hint: true,
		npcs: {
			showNames: false,
			cast: {
				kat : {
					name: "Kate",
					full_name: "Katarína",
					color: "#c20051", 
					desc: "me, the beautiful , smart and feisty heroine of this story",
				},
				qaa: {
					name: "Juraj",
					color: "#110df2",
					desc: "nerd with a crush",
				},
				qbb: {
					name: "Zdeno",
					color: "#158000",
					desc: "creepy nerd",
				},
				qcc: {
					name: "Matej",
					color: "#c9501d",
					desc: "fat nerd",
				},
				sas: {
					name:  "Saša",
					full_name: "Alexandra",
					color: "#110df2",
					desc: "my best friend",
				},
				
				eva: {
					name:  "Eva",
					color:  "#c20091",
					desc:  "my best friend and worst enemy",
				},
				
				pet: {
					name: "Peter",
					color: "#026d73",
					desc: "pretty cool guy",
				},
				ayy:{
					name: "AI",
					color: "#c20091",
					desc: "the titular AI",
				},
				
				
				mol:{
					name: "Mr. Molnár",
					color: "#026d73",
					desc: "sleazy German techer",
				},
				tom:{
					name: "Tom",
					color: "#158000",
					desc: "some asshole",
				},
				zan:{
					name: "Žanet",
					color: "#c20091",
					desc: "some skank",
				},
				
				
				npc_1:{
				//	name: "NPC 1",
					color: "#026d73",
					desc: "NPC 1",
				},
				npc_2:{
				//	name: "NPC 2",
					color: "#158000",
					desc: "NPC 2",
				},
				npc_3:{
				//	name: "NPC 3",
					color: "#c9501d",
					desc: "NPC 3",
				},
				npc_4:{
				//	name: "NPC 4",
					color: "#c20091",
					desc: "NPC 4",
				},
				npc_5:{
				//	name: "NPC 5",
					color: "#c20091",
					desc: "NPC 5",
				},
				npc_6:{
				//	name: "NPC 6",
					color: "#026d73",
					desc: "NPC 6",
				},
				
				/*
				ven:{
					name: "Vendy",
					color: "",
					desc: "some wannabe",
				},
				jus:{
					name: "Justýna",
					color: "",
					desc: "640 yers old vampire",
				},
				*/
				
			},
		}
	};
	
	
//initialise & save/load  settings and stuff; runst when the game is loaded 
	function check(){
	//NEW - INITIALISE
		if (localStorage.getItem("fai_initiated") === null){ //new game
			localStorage.setItem("fai_initiated", 1);
			localStorage.setItem("fai_version",version);
			
			
			
			STORAGE.initiate();
			STORAGE.load();
	//WRONG VERSION
	
//TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!! ADD NEW NPCS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

		}else if(localStorage.getItem("fai_version") != version){
		
		//STUFF CHANGED BETWEEN VERSIONS 
			if( !localStorage.getItem("fai_npcs") ){
				localStorage.setItem("fai_npcs",JSON.stringify(def.npcs));
			};
			if( !localStorage.getItem("fai_hint") ){
				localStorage.setItem("fai_hint",JSON.stringify(def.hint));
			};
			
			
			localStorage.setItem("fai_version",version);
			
			if(!NPC || !NPC.cast){
				apply_npcs(def.npcs);
			};
				
			STORAGE.load();
	//THE SAME VERSION
		}else{ 
			STORAGE.load();
		}
	}
	
//reset - sets to default  
	function RESET(){
		localStorage.removeItem("fai_initiated");
		location.reload(true);
	}

	
	function initiate(){
		localStorage.setItem("fai_colors",JSON.stringify(def.colors));
		localStorage.setItem("fai_avatar",JSON.stringify(def.avatar));
		localStorage.setItem("fai_difficulty",def.difficulty);
		//localStorage.setItem("fai_npcs",JSON.stringify(def.npcs));
		apply_npcs(def.npcs);
		
		localStorage.setItem("fai_hint",JSON.stringify(def.hint));
		console.log("> STORAGE INITIALISED")
	}
	
	function load(){
		css_colors();
		css_avatar();
		//NPC = JSON.parse(localStorage.getItem("fai_npcs"));
		apply_npcs();
		
		HINT = JSON.parse(localStorage.getItem("fai_hint"));
		window.difficulty = parseInt(localStorage.getItem("fai_difficulty"));
		console.log("> STORAGE LOADED")
	}
	
	
	
	
	
	
//CSS - change the css of the page
	function css_colors(colors){	//TO DO - change the name
		if(typeof colors === "undefined")colors = JSON.parse(localStorage.getItem("fai_colors"));
		const root = document.documentElement;
		function set(variable,color){
			root.style.setProperty(variable,color);
		}		 

		set("--text", colors.text);
		set("--bgr", colors.bgr);
		set("--bgr2", colors.bgr2);
		set("--highlight",colors.highlight);
	}
	
	
	function css_avatar(width){	//TO DO - change the name
		if(typeof width === "undefined")width = JSON.parse(localStorage.getItem("fai_avatar"));
		const root = document.documentElement;
		
		root.style.setProperty("--avatar",width);
		
		const total_width = document.getElementById("div_main").offsetWidth
		document.getElementById("div_left").style.width = width;
		document.getElementById("div_right").style.width = total_width - width;
	}


	function apply_npcs(new_npc){
		if(new_npc){
			NPC = new_npc;
			localStorage.setItem("fai_npcs",JSON.stringify(new_npc));
		}else{
			NPC = JSON.parse(localStorage.getItem("fai_npcs"));
		};
		const root = document.documentElement;
		
		function set(variable,color){
			root.style.setProperty(variable,color);
		}		 
		
		for(key in NPC.cast){	
			set("--"+key, NPC.cast[key].color);
			if(!NPC.cast[key].name) continue;
			NAME[key] = NPC.cast[key].name;
		};
		NAME.katarina = NPC.cast.kat.full_name;
		NAME.alexandra = NPC.cast.sas.full_name;
		/*
		set("--bgr", colors.bgr);
		set("--bgr2", colors.bgr2);
		set("--highlight",colors.highlight);
		*/
	}
	
	return{
		RESET,
		def,
		check,
		initiate,
		load,
		css_colors,
		css_avatar,
		apply_npcs,
	};
  
})();	




//LOADING - hides everything until the page is loaded and looks cool
//TO DO 
const INTRO = (function(){ 
	let counter = 0;
	function done(){
		document.getElementById("div_intro").style.display="none";
		/*
		if(superbug) document.getElementById("div_intro").style.display="none"; //TEMP TESTING!!!
		document.getElementById("div_intro").addEventListener("click", function(){
			document.getElementById("div_intro").style.display="none";
		});
		*/
	}
	
	function step(){
		let el = document.getElementById("div_intro_dot_"+counter);
		if(el)el.classList.add("div_intro_dot_active");
		counter++;
	}
	
	return{
		done:done,
		step:step
	};
})();


/*
DOESNT DO SHIT
var preloadedImages = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = "Images/"+arguments[i];
    }
}
preload(
	"chainmai2.jpg"
	,"chainmai2.png"
	,"copper.jpg"
	,"iron.jpg"
)
*/

