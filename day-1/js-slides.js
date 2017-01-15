var one = 1
var two = 2 

var me = {firstName: "Domitrius", lastName: "Clark", birthDay: "April 3, 1993", interests: ["League of Legends","OverWatch", "Web Development"] }

var any = function (string){
	console.log(string)
}

var thisGuy = function(){
	console.log("This is what your printing out")
}

function selectDoor () {
	while ((selectDoor != 1) && (selectDoor != 2) && (selectDoor != 3)) {
	var selectDoor  = prompt("Select a door 1, 2, or 3")
	}


	if (selectDoor == 1){
		alert("You win this!!") 
	} else if (selectDoor == 2){
		alert("You win THIS now")
	} else if (selectDoor == 3){
		alert("Now you win THIIIIIIS")
	} else {
		alert("The door numbers are 1-3.")
	}
}

games = ["League of Legends", "Overwatch", "H1Z1"]
for (var i=0; i<games.length; i++){
	console.log(games[i] + " " + "is the game i like to play most")
}

	
var bottlesOfBeer = 99

while (bottlesOfBeer > 0) {
	console.log( bottlesOfBeer + " " + "bottles of beer on the wall")
	console.log( bottlesOfBeer + " " + "bottles of beer")
	console.log( "take one down pass it around")
	console.log ( bottlesOfBeer + " " + " "  + "bottles of beer on the wall")
	bottlesOfBeer --

}


