//THE LETTER MINIGAME
const ABCDEF = function(){	
	let main; //the main div in which is the container, INPUTED
	let container;
	let end_victory; //function what to do if puzzle is solved, INPUTED
	let end_defeat; //function what to do if puzzle is NOT solved, INPUTED

	var symbol = []; //symbols written on the letter
	var inputy = []; //buttons 
	var signs = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]

	function start(victory,defeat,text,div){	
		main = document.getElementById(div);
		end_victory = victory;
		end_defeat = defeat;
		
		create(text); 
	};
	
	
	function create(letter){ 
		console.log("RESULT: ")
		console.log(letter) //SIC!
			
		//container
		container = document.createElement("DIV");
		container.id = "abc_cointainer";
		main.appendChild(container);

		//div letter
		const topik = document.createElement("DIV");
		topik.id = "abc_topik";
		container.appendChild(topik);

		//div input
		const botik = document.createElement("DIV");
		botik.id = "abc_botik";
		container.appendChild(botik);
		botik.innerHTML="";
		
		
 
		symbol = [];
		
		signs = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
		signs = dh.shuffle(signs)
		signs.splice(28) //there are 26 letters + 2 for " " and "."
		signs[0] = 0;
		signs[1] = 1;
	//	1 26
	//	signs[30]=30;
		
		
		{
 
			let record_meaning=[];
			for (let i=1; i<signs.length; i++) {
				//var temp=64+i;
				record_meaning[i] = i+" "+String.fromCharCode(64+i)+" "+signs[i];
			};
			//console.log(record_meaning);
		}
		
		
		//create the letter
		for (let i = 0; i < letter.length; i++) {
			//create row
			let temp_row = document.createElement("DIV");
			temp_row.id = "abc_row_"+i;
			temp_row.className = "abc_row";
			topik.appendChild(temp_row);
			
			//create symbols
			for (let k = 0; k < letter[i].length; k++) {
				//assigns random signs to the letters
				let temp_letter = letter[i][k];

//console.log(temp_letter)				
				if(!temp_letter){
					break;
				}else if(temp_letter==" "){
					temp_letter = 0;
				}else if(temp_letter=="."){
					temp_letter = 1
//console.log("---30")
				}else{
					temp_letter = temp_letter.charCodeAt(0)-63;
				};
				
//console.log(temp_letter)
			//	console.log(temp_letter)
				let index = symbol.length;
				symbol[index]={
					meaning: letter[i][k],
					sign: signs[temp_letter],
					done: false,
					div: document.createElement("DIV")
				};
				symbol[index].div.id = "abc_symbol_"+index;
				symbol[index].div.className = "abc_symbol";
				temp_row.appendChild(symbol[index].div);
				symbol[index].div.innerHTML="<img src=\"Minigames/Symbols/"+symbol[index].sign+".gif\" width=\"20px\">";
				
				if(symbol[index].sign==0) symbol[index].done = true; //spaces
				if(symbol[index].sign==1) symbol[index].done = true; //dots
				
//console.log(symbol);

			};
		};
		
		
		signs.splice(0,2); //to remove space and dot
		
		signs = dh.shuffle(signs);
		//console.log(signs);
		
		inputy = []; 
	 
		//create imput buttons 
		for (let i=0; i<3; i++) {
			let temp_row = document.createElement("DIV");
			temp_row.id = "abc_row_"+i;
			temp_row.className = "abc_row_2";
			botik.appendChild(temp_row);
			
			for (let k=0; k<10; k++) {
				let index=inputy.length;
				
				//SPECIAL CASES
				if(index == signs.length){
					const clear=document.createElement("DIV");
					clear.onclick=function(){ABCDEF.reset()};
					temp_row.appendChild(clear);
					clear.className = "abc_inputy";
					clear.id = "abc_clear";
					clear.innerHTML="*"
					clear.style.fontSize="60px";
					clear.style.cursor="pointer";
					
					const victory = document.createElement("DIV");
					victory.onclick=function(){
						main.removeChild(container);//main.removeChild(document.getElementById("abc_cointainer"));
						end_victory();
					};
					temp_row.appendChild(victory);
					victory.className = "abc_inputy";
					victory.id = "abc_victory";
					victory.innerHTML=">"
					victory.style.fontSize="60px";
					victory.style.fontWeight="bold";
					victory.style.cursor="pointer";
					victory.style.display="none";
					
					const defeat = document.createElement("DIV");
					defeat.onclick=function(){
						main.removeChild(container);
						end_defeat();
					};
					temp_row.appendChild(defeat);
					defeat.className = "abc_inputy";
					defeat.id = "abc_defeat";
					defeat.innerHTML="X"
					defeat.style.fontSize="40px";
					defeat.style.fontWeight="bold";
					defeat.style.cursor="pointer";
					 
					
					
					break;
				}
				
				
				
				inputy[index]={
					sign: signs[index],
					div: document.createElement("DIV")
				};
				inputy[index].div.id="abc_inputy_"+index;
				inputy[index].div.className = "abc_inputy";
				temp_row.appendChild(inputy[index].div);
				inputy[index].div.innerHTML="<br><img  src=\"Minigames/Symbols/"+inputy[index].sign+".gif\" width=\"20px\" > <form><input style=\"abc_inputfield\" oninput=\"ABCDEF.input("+index+")\" type=\"text\" size=\"1\" maxlength=\"1\"  id=\"abc_inputfield_"+index+"\" name=\"abc_inputfield_"+index+"\" ></form>";
				
				if(debug){
					let correct_for_record = -1;
					for (let i=0; i<symbol.length; i++){
						if(symbol[i].sign==inputy[index].sign){
						//	console.log(symbol[i].sign+";"+inputy[index].sign)
							correct_for_record=symbol[i].meaning
						};
					};
					//console.log(index+": "+correct_for_record+" (symbol "+signs[index]+".gif)")//SIC!
				}
			};
		};
	}
	
	
	function reset(){
		for (let i=0; i<symbol.length; i++){
			symbol[i].div.innerHTML="<img src=\"Minigames/Symbols/"+symbol[i].sign+".gif\" width=\"20px\">";
			symbol[i].done = false;
			if(symbol[i].sign==0)symbol[i].done=true; //spaces
		};
		for (let i=1; i<signs.length; i++){
			document.getElementById("abc_inputfield_"+i).value="";
		};
	};
	
	
	function input(index){
		let value = document.getElementById("abc_inputfield_"+index).value
		value = value.toUpperCase();
		replace(index,value);
	};
	
	
	function replace(index,value){
		for (let i=0; i<symbol.length; i++){
 			if(symbol[i].sign == inputy[index].sign){
				if(value==""||value==" "){
					symbol[i].div.innerHTML="<img src=\"Minigames/Symbols/"+symbol[i].sign+".gif\" width=\"20px\">";
					symbol[i].done = false;
				}else{
					symbol[i].div.innerHTML = value;
					if(symbol[i].meaning==value) symbol[i].done = true;
				};
			};
		};
		check_done();
	};
	
	
	function check_done(){
		var victory = true;

//console.log(symbol);

		for (let i=0; i<symbol.length; i++){
			

//console.log(i+" "+symbol[i].done+" "+symbol[i].meaning);			
//ASAP quick fix 
/*
			if(symbol[i].meaning=="J")symbol[i].done=true;
			if(symbol[i].meaning=="Q")symbol[i].done=true;
			if(symbol[i].meaning=="Z")symbol[i].done=true;
			if(symbol[i].meaning=="X")symbol[i].done=true;
*/			
			if(!symbol[i].done){
				victory = false;
				break;
			};
		};
		
		if(victory){
			document.getElementById("abc_victory").style.display = "block";
			document.getElementById("abc_clear").style.display = "none";
			document.getElementById("abc_defeat").style.display = "none";
		}
	};
	
	
	
	return {
		start:start,
		input:input,
		reset:reset,
	};
}();


//THE PUZZLE MINIGAME
const ARVAK = function(){	
	let main; //the main div in which is the container, INPUTED
	let end_victory; //function what to do if puzzle is solved, INPUTED
	let end_defeat; //function what to do if puzzle is NOT solved, INPUTED
	
	let container; //the container div in which is the game
	let canvas; //canvas on which is drawn the  assignment
	
	//const field_origin = {x: 200, y: 100};
	const size = 120;
	let rows; //INPUTED
	let columns; //INPUTED
	 
	let piece = []; //game pieces (actually divs)
	let indexOfDragged; //index of a piece which is being dragged
	let original = {x:0, y:0} //original location (for dragging)
	const gridSize = 20;
	
	giveUpMode = false; //solution is displayed, the game cannot be win
	
	let piecesOffset = {}; //where are pieces at the beginning of the game and what is their color in comparison with other pieces 
	
//START
	function start(victory,defeat,div,cola = 3, rowa = 3){

		main = document.getElementById(div);
		end_victory = victory;
		end_defeat = defeat;
		rows = +rowa;
		columns = +cola;
	
		giveUpMode = false;
		
		piecesOffset = {
			top: 5,
			left: (  (size*columns)-(size/2)  )/(  columns*rows  ),
			color: 300/(rows*columns),
		}
			
		create(); //create the board 
	};
	
	
//CREATE
	function create(){
		
		//container
		container = document.createElement("DIV");
		container.id = "tang_cointainer";
		main.appendChild(container);
	//	container.innerHTML = "";
	
	//CANVAS
		//size
		canvas = document.createElement("CANVAS");
		container.appendChild(canvas);
		canvas.width = (columns+2)*size;
		canvas.height = (1+rows+2)*size;

		//background
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "hsl(228, 4%, 80%)";
		ctx.fill();
		
		//outer line
		ctx.beginPath();
		ctx.rect(10, 10, canvas.width-20, canvas.height-20);
		ctx.strokeStyle = "black";
		ctx.stroke();
		
		//inner line
		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.rect(size, 2 * size, (size*columns), (size*rows) );
		ctx.strokeStyle = "black";
		ctx.fillStyle = "hsl(228, 4%, 70%)";
		ctx.stroke();
		ctx.fill();
		
	 //GIVE UP BUTTONS
		//give up 
		
		let cancel = document.createElement("DIV");
		cancel.id = "tang_cancel";
		container.appendChild(cancel);
		cancel.innerHTML ="Give up";
		cancel.addEventListener("mousedown",giveUp, false); 
		


		
		let cancel2 = document.createElement("DIV");
		cancel2.id = "tang_cancel2";
		container.appendChild(cancel2);
		cancel2.innerHTML ="Give up & Show solution";
		cancel2.addEventListener("mousedown",giveUp2, false); 
		
		{
		//	console.log("position")

//let position = canvas.getBoundingClientRect();
		//	cancel.style.left = position.x +15;
		//	cancel2.style.right = position.x + canvas.width;
//	console.log(position)
	}
		
	//PIECES
		piece = [];
		let matrix = [];
	
		const possible = [1,-1,2,-2,3,-3]; //possible configurations of protrusions (negative are fitting holes)
		
		for(let xx = 0; xx < columns; xx++){
			matrix[xx] = [];
				for(let yy = 0; yy < rows; yy++){
					matrix[xx][yy] = [];
					const max = matrix[xx][yy];
				
					/*
						sides of the piece:
						
						|---0---|
						|		|
						3		1
						|		|
						|---2---|
					
					*/
				 
				
				if( !matrix[xx-1] ){ //there is none on the left		
					max[3] = 0;
				}else{ //the left side is the opposite to the piece on the left (
					max[3] = matrix[xx-1][yy][1] * -1;
				};
				
				
				if( !matrix[xx][yy-1] ){ //there is none above 		
					max[0] = 0;
				}else{ //top side is the opposite as the one above (protrusion and fitting hole)
					max[0] = matrix[xx][yy-1][2] * -1;
				};

				
				if(xx+1 == columns && yy+1 == rows){ //bottom right piece, obviously both smooth
					max[1] = 0;
					max[2] = 0;

				}else{ 			
					let chance = 1; //having some protrusion/holes already lowers the chance there will be more
					if( max[0] != 0) chance -= 0.25;
					if( max[3] != 0) chance -= 0.525;
				
					let currentSide = Math.random() < 0.5 ? 1 : 2; //it is not important which side gets solved first
					
					if(xx + 1 == columns){ //there is nothing on the right, smmoth			
						max[1] = 0;
						currentSide = 2;
					}else if(yy + 1 == rows){ //there is nothing bellow, smooth		
						max[2] = 0;
						currentSide = 1;
					}else{
						if( Math.random() < chance ){
							max[currentSide] = dh.pick_one(possible); //possible[ Math.floor(Math.random()*possible.length) ]
							chance -= 0.25;
						}else{
							max[currentSide] = 0;
						};
						currentSide = currentSide == 1 ? 2 : 1;
					};
					
					if( Math.random() < chance ){ 
						max[currentSide] = dh.pick_one(possible);
					}else{
						max[currentSide] = 0;
					};
				};
				
				
				piece.push( createPiece(max,xx,yy) ); //PIECE IS CREATED
				
			};
		};

	//INITIAL POSIITON OF THE PIECES
		dh.shuffle( [...piece.keys()] ).forEach(
			i => {
				
				piece[i].style.top = container.offsetTop + size/2 + (piecesOffset.top*i);
				piece[i].style.left = container.offsetLeft + size/2 + (piecesOffset.left*i);
				
				for(let k = Math.floor(Math.random()*4); k > 0; k--){
					rotate.call(piece[i]);
				};
				
			}
		)
		 
	};
	
	
//CREATE PIECE
	function createPiece(max,x,y){
		const temp = document.createElement("DIV");
		temp.index = piece.length;
		container.appendChild(temp);
	
		temp.desc = document.createElement("DIV");
		temp.appendChild(temp.desc);
		temp.desc.innerHTML = temp.index+"("+x+";"+y+")";
		temp.desc.style.display = "none";
		
		
		temp.classList.add("tang_arvak");
		temp.classList.add("tang_rot_0");
		
		temp.style.width = size*2;
		temp.style.height = size*2;
		
		temp.style.backgroundColor = "hsla("+(piecesOffset.color*temp.index)+", 60%, 50%, 1)"; //"hsla("+(20+20*index)+"), 80%, 50%, 1)";
		
		temp.clap = max;
		temp.style.clipPath = calcClipping(max);
		temp.rotation = 0;
		
		temp.addEventListener("mousedown",startDragging, false); 
		temp.addEventListener("contextmenu",rotate, false);
		temp.addEventListener("dblclick",rotate, false);
			
		return temp;
	}
	

 //CALCULATE CLIPPING 
	function calcClipping(input){
		//I'm too dumb, doing this manually is faster than figuring out the algorithm 
		const output = []
		switch(input[0]){
			default:
			case 0: output[0] = ""; break;
			
			case 1: output[0] = "37.5% 25%, 50% 10%, 62.5% 25%,"; break;
			case -1: output[0] = "37.5% 25%, 50% 40%, 62.5% 25%,"; break;
			
			case 2: output[0] = "37.5% 10%, 50% 25%, "; break;
			case -2: output[0] = " 50% 25%, 62.5% 40%,"; break;
			
			case 3: output[0] = "50% 25%, 62.5% 10%,"; break;
			case -3: output[0] = "37.5% 40%, 50% 25%,"; break;
		
		};
		switch(input[1]){
			default:
			case 0: output[1] = ""; break;
			case 1: output[1] =  " 75% 37.5%,  90% 50%,  75% 62.5%,"; break;
			case -1: output[1] =  " 75% 37.5%,  60% 50%,  75% 62.5%,"; break;
			
			case 2: output[1] =  "90% 37.5%, 75% 50%, "; break;
			case -2: output[1] =  "75% 50%, 60% 62.5%,"; break;
			
			case 3: output[1] =  "75% 50%, 90% 62.5%,"; break;
			case -3: output[1] =  "60% 37.5%, 75% 50%, ";   break;
		};
		
		switch(input[2]){
			default:
			case 0: output[2] = ""; break;

			case 1: output[2] =  "62.5% 75%, 50% 90%, 37.5% 75%,"; break;
			case -1: output[2] =  "62.5% 75%, 50% 60%, 37.5% 75%,"; break; 
			
			
			case 2: output[2] =  "62.5% 90%, 50% 75%,"; break;
			case -2: output[2] =  "50% 75%, 37.5% 60%,"; break; 
			
			
			case 3: output[2] =  "50% 75%, 37.5% 90%,"; break;
			case -3: output[2] =  "62.5% 60%, 50% 75%,"; break;  
			

		};
		
		switch(input[3]){
			default:
			case 0: output[3] = ""; break;
			case 1: output[3] =   "25% 62.5%, 10% 50%, 25% 37.5%,"; break;
			case -1: output[3] =   "25% 62.5%, 40% 50%, 25% 37.5%,"; break;
			
			case 2: output[3] =   "10% 62.5%, 25% 50%, "; break;
			case -2: output[3] =   "25% 50%, 40% 37.5%,"; break;
			
			
			case 3: output[3] =   "25% 50%, 10% 37.5%,"; break;
			case -3: output[3] =   "40% 62.5%, 25% 50%, "; break;
			
		//	case -1: output[3] =   "25% 62.5%, 40% 50%, 25% 37.5%,"; break;
			
			
		//	case 3: output[3] =   "25% 50%, 10% 37.5%"; break;
		//	case -3: output[3] =   "25% 40%, 25% 50%,"; break;
			//case 2: output[3] =  "90% 37.5%, 25% 50%, "; break;
			//case -2: output[3] =  "75% 50%, 60% 62.5%,"; break;
			//case -1: output[1] =  "25% 37.5%, 60% 50%, 25% 62.5%,"; break;
		/*	case 1: output[3] =  " 25% 62.5%,  10% 50%,  25% 37.5%,"; break;
			case -1: output[3] =  " 25% 62.5%,  40% 50%,  25% 37.5%,"; break;
			*/
		}
		return "polygon(25% 25%, "+output[0]+" 75% 25%, "+output[1]+" 75% 75%, "+output[2]+" 25% 75%, "+output[3]+" 25% 25%)"
	}
	
	
	
	
//ROTATE PIECE 
	function rotate(e){
		if(e)e.preventDefault();
		
		this.clap = rotateClap(this.clap)
		
		this.classList.remove("tang_rot_"+this.rotation);
		this.rotation++;
		if(this.rotation>3)this.rotation = 0;
		this.classList.add("tang_rot_"+this.rotation);
		
		checkVictory();
	}
	
	function rotateClap(array){
		const moved = array.pop();	
		array.unshift(moved);
		return array;
	};
	
//DRAGGING
	function startDragging(e){
		indexOfDragged = this.index;
		
		this.classList.add("tang_dragged");
		
		original = {
			x: e.clientX,
			y: e.clientY
		}
		
		e.preventDefault();
		document.onmousemove =  drag; 
		document.onmouseup = endDragging;
		
	};
	
	function drag(e){
		e.preventDefault();
		current = {
			x: e.clientX,
			y: e.clientY
		}
	
		piece[indexOfDragged].style.top = (piece[indexOfDragged].offsetTop - (original.y - current.y) ) + "px";
		piece[indexOfDragged].style.left = (piece[indexOfDragged].offsetLeft - (original.x - current.x) ) + "px";
		
		original = {
			x: e.clientX,
			y: e.clientY
		}
	}


	function endDragging(){
		piece[indexOfDragged].classList.remove("tang_dragged");
		document.onmouseup = null;
		document.onmousemove = null;
		
		adjustToGrid(); 
		
		indexOfDragged = null; //SIC
		checkVictory();
	}


	//ADJUST TO GRID
	function adjustToGrid(){
		let system = container.getBoundingClientRect();
		let place = piece[indexOfDragged].getBoundingClientRect();
		place.x -= system.x;
		place.y -= system.y; //no idea why minus!!
		
		let restX = Math.abs(place.x % gridSize);
		
		if(restX > gridSize/2){
			piece[indexOfDragged].style.left = (piece[indexOfDragged].offsetLeft + (gridSize - restX) )
		}else{
			piece[indexOfDragged].style.left = (piece[indexOfDragged].offsetLeft - restX )
		}
	
		let restY = Math.abs(place.y % gridSize);
		if(restY > gridSize/2){
			piece[indexOfDragged].style.top = (piece[indexOfDragged].offsetTop + (gridSize - restY) )
		}else{
			piece[indexOfDragged].style.top = (piece[indexOfDragged].offsetTop - restY )
		};
	}
	
	
	function checkVictory(){
console.log("Check victory:")			

		const origin = container.getBoundingClientRect();
		origin.x += size;
		origin.y += 2 * size;

		piece.forEach(a => a.marked = false);
		
		const matrix = [];
		//IS EVERY SPACE OCCUPIED? 
		
		for(let i = 0; i < rows; i++){
			matrix[i] = [];
			for(let k = 0; k < columns; k++){
				const location = {
					x: origin.x + (size * k) - size/2,
					y: origin.y + (size * i) - size/2
				}
				
//THE BUG IS SOMEWEHRE HERE!!		
	
//		console.log(i+";"+k);
//		console.log(location);
		
				const tolerance  = gridSize - 1; 
				for(let m = 0; m < piece.length; m++){
					if(!piece[m].marked){
						const position = piece[m].getBoundingClientRect();
	//	console.log(position);			
						//if(position.x == origin.x && position.y == origin.y){
						if(
								(position.x - tolerance < location.x && position.x + tolerance > location.x)
								&&
								(position.y - tolerance < location.y && position.y + tolerance > location.y)
						){
							piece[m].marked = true;
							matrix[i][k] = piece[m].clap;
//					alert("yes")
							break;
						}
					}
				};
			};
		};
	


	console.log("matrix:");
	console.log(matrix);

	
		//DO ALL PIECES FIT? 
		function do_pieces_fit(){
			for(let i = 0; i < rows; i++){
				for(let k = 0; k < columns; k++){					
					if( !matrix[i-1] ){
						if( matrix[i][k][0] != 0 )return false
					}else{		
						if( matrix[i][k][0] != matrix[i-1][k][2] * (-1) )return false
					};
					//1
					if( !matrix[i][k+1] ){
						if( matrix[i][k][1] != 0 )return false
					}else{
						if( matrix[i][k][1] != matrix[i][k+1][3] * (-1) )return false
					};				
					//2
					if( !matrix[i+1] ){
						if( matrix[i][k][2] != 0 )return false
					}else{
						if( matrix[i][k][2] != matrix[i+1][k][0] * (-1) )return false
					};				
					//3
					if( !matrix[i][k-1] ){
						if( matrix[i][k][3] != 0 )return false
					}else{
						if( matrix[i][k][3] != matrix[i][k-1][1] * (-1) )return false
					};						
				};
			};
			return true;
		};
		
		let victorious = true;

		for(let m = 0; m < piece.length; m++){
			if(!piece[m].marked)victorious = false;	
		};

		if(victorious) victorious = do_pieces_fit();
				
		if(victorious) end(true);
	};
	
//END	
	function end(won){
		//red border 
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.lineWidth = 20;
		ctx.rect(size, 2 * size, (size*columns), (size*rows) );
		ctx.strokeStyle = "red";
		ctx.fillStyle = "red";
		ctx.stroke();
		ctx.fill();
		
	 	//on click clears all and returns to the game
		setTimeout(	() => piece.forEach( a => {
			a.classList.add("done"); //DOESN WORK!
			console.log("as")
			console.log(a)
			a.onclick = a => {
				main.removeChild(container);
				if(giveUpMode) return end_defeat();
				return won ? end_victory() : end_defeat();
			}
		}), 300);		
	}
	
//GIVE UP & END	
	function giveUp(){
		setTimeout(	() => {
			main.removeChild(container);
			end_defeat();
		}, 300);
	};

//GIVE UP & SHOW SOLUTION
	function giveUp2(){
		showSolution();
		giveUpMode = true;
	};

//SHOW SOLUTION
	function showSolution(){	
		piece.forEach(a => a.desc.style.display = "block");
	};
	
	return {
		start:start
	};
}();










const TANGRAM = function(){	
	const canvas_width = 600;
	const canvas_height = 600;
	const field_origin = {x: 100, y: 100};
	const piece_default_top_offset = 30;
	const piece_default_left_offset = 30;
	const gridSize = 10;
	
	let main; //the main div in which is the container, INPUTED
	let end_victory; //function what to do if puzzle is solved, INPUTED
	let end_defeat; //function what to do if puzzle is NOT solved, INPUTED
	
	let container; //the container div in which is the game
	let canvas; //canvas on which is drawn the  assignment
	
	let piece = []; //game pieces (actually divs)
	let indexOfDragged; //index of a piece which is being dragged
	
	
	//START
	function start(victory,defeat,div){
		main = document.getElementById(div);
		
		end_victory = victory;
		end_defeat = defeat;
		
		create(); //create the board 
	};
	
	//CREATE
	function create(){
		//container
		container = document.createElement("DIV");
		container.id = "tang_cointainer";
		main.appendChild(container);
		
		/*
		//curtain - 
		curtain = document.createElement("DIV");
		curtain.id = "tang_curtain";
		main.appendChild(curtain);
		curtain.style.top = container.offsetTop;
		curtain.style.left = container.offsetLeft;
		curtain.style.display = "none";
		*/
		
		canvas = document.createElement("CANVAS");
		container.appendChild(canvas);
		canvas.width = canvas_width;
		canvas.height = canvas_height;
		
		
		let ctx = canvas.getContext("2d");
		
	/*	
		var back = new Image();
		back.src = "Minigames/rocks1.gif";
		
		
		console.log(back)
		setTimeout(function(){  //dropping down the final piece is considered to be a click, need delay
				console.log(back)
				var pat = ctx.createPattern(back, "no-repeat");
				ctx.fillStyle = pat;
				ctx.rect(0, 0, canvas_width, canvas_height);
				ctx.fill();
		}, 500);
	*/		
			
	
		ctx.rect(10, 10, canvas_width-20, canvas_height-20);
		ctx.strokeStyle = "black";
		ctx.stroke();
		
		//ctx.fillText("(this is a prototype; drag, double click to rotate)", 100, 30);
		
		const problem = [];
		problem[0] = {
			border: [ 
			
				[0,0], [150,0], [175,75], [200,0], [450,0],
				[450,450],
				[200,450],[175,375],[150,450],[0,450],
				[0,0],
				
				//[500,400], [100,400], [100,100],
				//[50,300], [100,250], [100,200], [400,200], [400,400], [100,400], [100,350], [50,300] //, [50,250] 
			],
			
			pieces: [
				"polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 75%, 50% 75%, 50% 25%, 0 25%)",
				//[200,200],
				//[0,200],
			]
			
		}
		
		let actualProblem = 0; 
		
		function drawPoly(polygon,color,fill,width = 4){
			ctx.beginPath();
			ctx.moveTo(polygon[0][0]+field_origin.x,polygon[0][1]+field_origin.y);
			for(let i = 1; i < polygon.length; i++) ctx.lineTo(polygon[i][0]+field_origin.x, polygon[i][1]+field_origin.y)	
			ctx.lineWidth = 4;
			ctx.fillStyle = fill;
			ctx.fill();
			ctx.strokeStyle = color;
			ctx.stroke();
			
		}
	/*
		function calculatePiece(row,column,tack){
			switch()
		};
		*/
		function createPiece(index){
			//let index = piece.length;
			//if(!id)id = index;
			
			piece[index] = document.createElement("DIV");
			//piece[index].id = "tang_piece_"+id;
			container.appendChild(piece[index]);
		
			
						
			piece[index].classList.add("tang_piece");
			piece[index].classList.add("tang_rot_0");
			
			piece[index].style.clipPath = problem[actualProblem].pieces[index];
			
			piece[index].rotation = 0;
			piece[index].index = index;
			
			piece[index].addEventListener("mousedown",startDragging, false); 
			
			piece[index].addEventListener("contextmenu",rotate, false);
			piece[index].addEventListener("dblclick",rotate, false);
			
		}
		
		
		drawPoly(problem[actualProblem].border,"black","red");
		
	piece = [];
	/*	createPiece("alpha");
		createPiece("beta");
	*/	
		for(let i = 0; i < problem[actualProblem].pieces.length; i++){
			console.log("XXXX")
			createPiece(i);
		}
console.log(piece);


		
		//DEFAULT PLACE OF PIECES
		for(let i = 0; i < piece.length; i++){
			piece[i].style.top = container.offsetTop + (piece_default_top_offset*(i+1));
			piece[i].style.left = container.offsetLeft + (piece_default_left_offset*(i+1));
			
			for(let k = Math.floor(Math.random()*4); k > 0; k--){
				rotate.call(piece[i]);
			}
		}
		
		
		let original = {x:0, y:0}
		
		
		
		
		
		
		
		
		function checkVictory(){
console.log("----------------")
			let winning = true;
			const origin = container.getBoundingClientRect();
			origin.x += field_origin.x;
			origin.y += field_origin.y;
	console.log(origin)				
			for(let i = 0; i < piece.length; i++){
				if( !checkPiece(i) ){
					winning = false;
					break;
				};
			};
			
			function checkPiece(index){
		//		if(!piece[index].rotation == 0) return false;
	
		
				const position = piece[index].getBoundingClientRect();		
	console.log(position)

console.log(position.x == origin.x)	
console.log(position.y == origin.y)	
console.log(position.x == origin.x && position.y == origin.y)	
				if(position.x == origin.x && position.y == origin.y) return true;
			};
			
	console.log(winning);		
			if(winning)end();
			
/*			let position = piece[0].getBoundingClientRect();
			console.log(position);
			
		position = container.getBoundingClientRect();
			console.log(position);
			
		const origin = container.getBoundingClientRect();
console.log("VICT?")	
console.log(origin.x+";"+origin.y);		
			let winning = true;
			
			for(let i = 0; i < piece.length; i++){
console.log("piece 1")
				if( !checkPiece(i) ){
console.log("nope")
					winning = false;
					break;
				};
			};
			
			function checkPiece(index){
				if(!piece[index].rotation == 0) return false;
				
				const position = piece[index].getBoundingClientRect();
				const xxx = position.x - problem.piece[index][0];
				const yyy = position.y - problem.piece[index][1];
console.log(xxx+";"+yyy);				
				if(xxx == origin.x && yyy == origin.y) return true;
			};
*/			
			
		
			/*
			const alpha = piece[0].getBoundingClientRect();
			
			alpha.rotation = piece[0].rotation;
			
			console.log(origin.x+";"+origin.y);
			console.log((origin.x+200)+";"+(origin.y+200));
			console.log(alpha.x+";"+alpha.y+";"+alpha.rotation);
			
			if(
					(alpha.x == origin.x + 200)
				&&	(alpha.y == origin.y + 200)
				&&	(alpha.rotation == 0)
			)alert("v")
			*/
			
			/*
			if(
				piece[0].getBoundingClientRect().x == c.x
				&&
				piece[0].getBoundingClientRect().y == container.getBoundingClientRect().y
			)alert("Victory")
			*/
		}
		
		function end(){
			drawPoly(problem[actualProblem].border,"white","white",10);
			
			setTimeout(function(){  //dropping down the final piece is considered to be a click, need delay
				for(let i = 0; i < piece.length; i++){ 
					piece[i].onclick = (function(){
						main.removeChild(container);
						end_victory();
					}) 
				};
			}, 300);
			
		}

	}
	
	return {
		start:start
	};
}();


 
const BULL = function(){	
	//the game is basically classic Bulls and Cows/Mastermind 
	//https://en.wikipedia.org/wiki/Bulls_and_Cows
	
	var click = new sound("Minigames/button.wav"); //by JarredGibb
	var denied = new sound("Minigames/denied.mp3"); //by original_sound
	var success = new sound("Minigames/success.wav");//https://freesound.org/people/thisusernameis/sounds/426889/
	var const_numbers = 4;  //the number of digits you are looking for 
	var const_attempts = 8; //the number of possible attempts
	var current_attempt = 0; //the current attempt
	var current_number = 0; //the current digit
	var result = []; //the number you are supposed to find
	var quess = [];  //player attempt 
	var game_result=0;
	var end_victory; //what is returned in the case of players victory
	var end_defeat; //what is returned in the case of players defeat 
	var main; //div into which is the game placed
	
	//handling of sound effects 
	function sound(src) {
		this.sound = document.createElement("audio");
		this.sound.src = src;
		this.sound.setAttribute("preload", "auto");
		this.sound.setAttribute("controls", "none");
		this.sound.style.display = "none";
		document.body.appendChild(this.sound);
		this.play = function(){
			this.sound.play();
		}
		this.stop = function(){
			this.sound.pause();
		}
	};
	
	//START
	function start(victory,defeat,div,numbers = 4, attempts = 8){
		const_numbers = numbers;  //the number of digits you are looking for 
		const_attempts = attempts; //the number of possible attempts
		
		main = document.getElementById(div);
		
		//clears variables:
		current_attempt = 0;
		current_number = 0;
		game_result = 0;
		
		end_victory = victory;
		end_defeat = defeat;
		
		quess = [];
		result = [];
		
		//picks random number the player is supposed to find
		for(var i = 0;i<const_numbers;i++){
			for(var repeat=true;repeat==true;){
				result[i] = Math.floor(Math.random()*10);
				repeat=false;
				for(var k = 0;k<i;k++){
					if(result[i]==result[k])repeat=true;
				};
			};
		};
		//for cheating
		console.log("RESULT "+result);//LEE
		
		//create the board 
		create();
	};

	
	//handles the input and the ending of the game
	function input(keycode){
		if(game_result==1){
			main.removeChild(document.getElementById("bull_cointainer"));
			end_victory();
			return		
		}else if(game_result==-1){
			main.removeChild(document.getElementById("bull_cointainer"));
			end_defeat(result);
			return		
		};
				
		if(keycode==27){
			// * clear:
			quess=[];
			for(var k = 0;k<const_numbers;k++){
				inbox[current_attempt][k].innerHTML = "";
			};
			current_number=0;
		}else if(keycode==13){
			// > enter:
			if(current_number>=const_numbers){
				check();
				return
			};
		}else if(current_number<const_numbers){
			//number:
			var number = keycode-96;
			for(var k = 0;k<const_numbers;k++){
				if(quess[k] == number)return 
			};
			inbox[current_attempt][current_number].innerHTML = number;
			quess[current_number]=number;
			current_number++;
		};
		click.play();
	};

	//compares the player's guessed number with the result
	function check(){
		var green = 0;
		var yellow = 0;
		
		for(var i = 0;i<const_numbers;i++){
			for(var k = 0;k<const_numbers;k++){
				if(quess[i]==result[k])yellow++;
			};
		};
		
		for(var i = 0;i<const_numbers;i++){
			if(quess[i]==result[i]){
				green++;
				yellow--;
			};
		};
		
		if(green==const_numbers){
			var victory=true;
		}
		
		for(var i = 0;i<const_numbers;i++){
			if(green>0){
				outbox[current_attempt][i].classList.add("bull_green");
				green--;
			}else if(yellow>0){
				outbox[current_attempt][i].classList.add("bull_yellow");
				yellow--;
			}else{
				outbox[current_attempt][i].classList.add("bull_red");
			}
		};
		current_attempt++;
		current_number=0;
		quess=[];
		if(victory){
			//alert("w")
			success.play();
			game_result=1;
		}else if(current_attempt==const_attempts){
			game_result=-1;
			denied.play();
		}else{
			denied.play();
		}
		
	};


			var inbox = [];//?
			var outbox = [];//?
	//creates the board 
	function create(){ 
		
		
		//container
		var container = document.createElement("DIV");
		container.id = "bull_cointainer";
		main.appendChild(container);

		//div showing inputed numbers and results
		var topik = document.createElement("DIV");
		topik.id = "bull_topik";
		container.appendChild(topik);

		//div with the numpad
		var botik = document.createElement("DIV");
		botik.id = "bull_botik";
		container.appendChild(botik);

		//the numpad and buttons with numbers
		var numpad = document.createElement("DIV");
		numpad.id = "bull_numpad";
		numpad.className = "bull_column";
		botik.appendChild(numpad);

		var num_button = [];
		var num_row = [];

		function new_button(label,keycode){
			var counter = num_button.length;
			num_button[counter] = document.createElement("DIV");
			num_button[counter].className = "bull_num_button";
			num_button[counter].innerHTML = label;
			num_row[num_row.length-1].appendChild(num_button[counter]);
			
			num_button[counter].addEventListener("click", function(){
				input(keycode);
			});
		};
		
		function new_row(){
			var counter = num_row.length;
			num_row[counter] = document.createElement("DIV");
			num_row[counter].className = "bull_row";
			numpad.appendChild(num_row[counter]);
		};

		new_row();
		new_button("1",97);
		new_button("2",98);
		new_button("3",99);
		new_row();
		new_button("4",100);
		new_button("5",101);
		new_button("6",102);
		new_row();
		new_button("7",103);
		new_button("8",104);
		new_button("9",105);
		new_row();
		new_button("*",27);
		new_button("0",96);
		new_button(">",13);


		
		//div for showing inputed numbers and results 
		var inputed = document.createElement("DIV");
		inputed.id = "bull_inputed";
		topik.appendChild(inputed);

		for(var i = 0;i<const_attempts;i++){
			var temp_row = document.createElement("DIV");
			if(i%2==0){
				temp_row.className = "bull_row_even";
			}else{
				temp_row.className = "bull_row_odd";
			}
			temp_row.id="bull_inputed_row"+i;
			inputed.appendChild(temp_row);

			inbox[i]=[];
			for(var k = 0;k<const_numbers;k++){
				inbox[i][k] = document.createElement("DIV");
				inbox[i][k].id = "bull_inbox"+i+"_"+k;
				inbox[i][k].className = "bull_inbox";
				temp_row.appendChild(inbox[i][k]);
				
			//	inbox[i][k].innerHTML = i+";"+k+" o ";
			};
			
			var temp_outputed = document.createElement("DIV");
			temp_outputed.id = "bull_outputed";
			temp_outputed.className = "bull_inbox";
			temp_row.appendChild(temp_outputed);
			
			outbox[i]=[];
			for(var k = 0;k<const_numbers;k++){
				outbox[i][k] = document.createElement("DIV");
				outbox[i][k].id = "bull_outbox"+i+"_"+k;
				outbox[i][k].className = "bull_outbox bull_outbox_"+k;
				
				outbox[i][k].style.height = Math.floor(100/const_numbers)+"%";
				
				temp_outputed.appendChild(outbox[i][k]);
			};
		};
	};
	
	return {
		start:start
	};
}();



const CRYSTAL = function(){	
	let main;
	
	let end_victory;
	let end_defeat;
	let result;
	let position;
	
	let row;
	
	let container;
	let out;
	let inp;
	let curtain;
	
	let maxCrystals;
	let maxColors;
	
	//TODO - TEMPORAL
	const tone = new sound("Minigames/button.wav"); //by JarredGibb
	const denied = new sound("Minigames/denied.mp3"); //by original_sound
	const success = new sound("Minigames/success.wav");//https://freesound.org/people/thisusernameis/sounds/426889/

	//handling of sound effects 
	function sound(src) {
		this.sound = document.createElement("audio");
		this.sound.src = src;
		this.sound.setAttribute("preload", "auto");
		this.sound.setAttribute("controls", "none");
		this.sound.style.display = "none";
		document.body.appendChild(this.sound);
		this.play = function(){
			this.sound.play();
		}
		this.stop = function(){
			this.sound.pause();
		}
	};
	
	
	//START
	function start(victory = (function(){alert("win!")}), defeat, div, crystals = 5, colors = 5, increase = 2){
console.log("START");
		main = document.getElementById(div);
		
		end_victory = victory;
		end_defeat = defeat;
		
		maxCrystals = crystals;
		maxColors = colors;
		
		position = 0;
		row = -1;
		
		result = [];
		console.log("RESULT:"); //SIC
		dh.seededRandom(Math.random()*99999);
	
		
		for(let i=0; i<maxCrystals; i++){
			result[i] = [];
			for(let k=0; k<(1+(i*increase)); k++){
	
				result[i][k] = Math.floor(dh.seededRandom()*maxColors);
				//console.log(result[i][k]) //SIC
			};
		};
console.log(result) //SIC
		create();
		nextRow();
	};
	
	
	function indexOfColor(number){
		switch(number){
			case 2: return "blue";
			case 1: return "red";
			case 0: return "green";
			case 3: return "yellow";
			case 4: return "cyan";
			case 5: return "purple";
			case 6: return "orange";
		}
	};
	
	
	
	function check(index){
		if( index==result[row][position] ){
			click(index);
			position++;
			tone.play();
		}else{
			position = 0;
			denied.play();
		}
	};
	
	
	function uncheck(index){
		//console.log("uncheck")
		unclick(index);
		
/*		
		let light = 30 + ((70/result[row].length)*position);
		let halo = (20/result[row].length)*position;
		
console.log(halo);
console.log(light);

		out[row].style.background = "hsla(0, 0%, "+light+"%, 1)";
		out[row].style.boxShadow = "0px 0px "+halo+"px white";
	*/	
		if(position == result[row].length){
			nextRow();
		};
		
		//pulse();
	};
	
	function click(index){
		//alert("fffdown")
		out[row].classList.remove("crystal_out_active")
		out[row].classList.add("crystal_inp_"+indexOfColor(index) );
	//	out[row].classList.remove("crystal_out_inactive");
	};
	
	function unclick(index){
		out[row].classList.add("crystal_out_active")
		out[row].classList.remove("crystal_inp_"+indexOfColor(index) );
	//	out[row].classList.add("crystal_out_inactive");
		
	};
	
	/*
	function pulse(){
		
		
		console.log("pulse");
		console.log(curtain);
		
		curtain.style.display = "block";
		
		setTimeout(function(){ 
			click(result[position]); 
		}, 400)
		
		setTimeout(function(){ 
			unclick(result[position]); 
			curtain.style.display = "none";
		}, 1000)
	};
	*/
	
	
	function sequence(){
		position = 0;
		curtain.style.display = "block";
		pulse(0);
	};
	
	function pulse(index){
		console.log("pulse");
		console.log(index)
		console.log(result[row].length)
		
		if(index == result[row].length){
			curtain.style.display = "none";
			return;
		}
		
		
		
		//console.log(curtain);
				
		
		setTimeout(function(){ 
			click(result[row][index]); 
		}, 400)
		
		setTimeout(function(){ 
			unclick(result[row][index]); 
			//console.log()
			index++;
			console.log(">"+index)
			pulse(index)
		}, 1000)
	};
	
	
	function nextRow(){
		if(row!=-1)success.play();
		console.log("next ro");
		console.log( out[row] );
		if( out[row] ){
			console.log("xxxnext ro");
			
			out[row].classList.remove("crystal_out_active");
			out[row].classList.add("crystal_out_white");
			console.log( out[row] );
			out[row].outerHTML = out[row].outerHTML;
		};
		
		row++;
		position = 0;
//WIN
		if(row==out.length)return finalise();
		
		out[row].classList.remove("crystal_out_dark");
		out[row].classList.add("crystal_out_active");
		
		out[row].addEventListener("mousedown",function(event){
			sequence();
		}, false); 
		
		sequence();
	}
	
	
	function finalise(){
		
		for(let i=0; i<maxColors; i++){
			inp[i].classList.add("crystal_out_white");
			inp[i].classList.remove("crystal_inp_"+indexOfColor(i));
			
			//inp[i].outerHTML = inp[i].outerHTML;
			
			
			curtain.style.display = "block";
			curtain.addEventListener("mousedown",function(event){
			//	setTimeout(function(){ 
					end();
			//	}, 200);
			}, false); 
		};
	
	}
	
	function end(){
		console.log(container);
		console.log(main);
//HAS CHILDREN?
//TODO 		
		main.removeChild(container);
		end_victory();
	};
	
	function create(){
		//container
		container = document.createElement("DIV");
		container.id = "crystal_cointainer";
		main.appendChild(container);

		curtain = document.createElement("DIV");
		curtain.id = "crystal_curtain";
		main.appendChild(curtain);
		curtain.style.top = container.offsetTop;
		curtain.style.left = container.offsetLeft;
		curtain.style.display = "none";
		
		var left = document.createElement("DIV");
		left.id = "crystal_left";
		container.appendChild(left);
		
		var right = document.createElement("DIV");
		right.id = "crystal_right";
		container.appendChild(right);
/*
		out = document.createElement("DIV");
		out.id = "crystal_out";
		//out.classList.className = "crystal_inp_green crystal_out_active";
		
		out.classList.add("crystal_out_inactive");
		//out.classList.add("crystal_inp_green");
		
	//	out.classList.add("crystal_out_active");
		
		left.appendChild(out);
	*/	
			
		function createOutput(index){
			out[index] = document.createElement("DIV");
			out[index].id = "crystal_out_"+index;
		//out.classList.className = "crystal_inp_green crystal_out_active";
			out[index].classList.add("crystal_out");
			out[index].classList.add("crystal_out_dark");
			left.appendChild(out[index]);
		};
		
		function createInput(index){
console.log(index+" "+indexOfColor(index))
			inp[index] = document.createElement("DIV");
			inp[index].classList.add("crystal_inp_"+indexOfColor(index));
			inp[index].classList.add("crystal_inp");
			right.appendChild(inp[index]);
		/*	
			
			inp.addEventListener("onclick",function(event){
			//	alert("adown")
				click(index);
			}, false);
		*/	
			inp[index].addEventListener("mousedown",function(event){
				//alert("down")
				check(index);
			}, false); 
			inp[index].addEventListener("mouseup",function(event){
				uncheck(index);   
			}, false); 
				
		};

		inp = [];
		for(let i=0; i<maxColors; i++)	createInput(i);
		
		out = [];
		for(let i=0; i<result.length; i++)	createOutput(i);
	
		
	};
	
	
	
	return {
		start:start
	};
}();
