// This is assignment 1
var two = 2
var one = 1

console.log(one + two)


// This is assignment 2
var games = [["League of legends", "Overwatch"], ["h1z1", "furi"]]


// This is assignment 3
function pickANumber(){
	var number = prompt("Pick a number")

	if (number > 100 ){
		alert("Your number is greater than 100")
	} else {
		alert("Your number is less than 100")
	}	
}

// This is assignment 5
function string(){
	var aString = prompt("Write a word")

	if (aString == "poop"){
		alert("It is poop")
	} else {
		alert("It is not poop")
	}
}

// This is assignment 6

function parrot(name){
	console.log(name)
}

// This is assignment 7

function myFunc(){
	console.log("this is a function without an argument")
}

// This is assignement 8

function door(){
	while((door !=1) && (door !=2) && (door !=3)) {
		var door = prompt("Pick a door 1-3")
	} 

	if (door == 1){
		alert("You win a book")
	} else if (door == 2){
		alert("You win a mouse")
	} else {
		alert("You win nothing!")
	}
}


