class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false;
    }

   
}


class Game {
    constructor() {
        this.doors = []; // 
        this.doorPicked; // which door i init picked prob an int
        this.openedGoatDoor; // which door was the goat door prob an int
        this.finalPick; // which door was picked prob an int
        this.won; // true or false
    }
    //Add any method needed
}


class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];
    }

    // gives the win rate of each type of gameplay
    percentatge() {
        
       console.log (Math.trunc(this.gamesWithSameDoorWon.length /  (this.gamesWithSameDoorWon.length + this.gamesWithSameDoorLost.length) * 100) ,"% of games were won when not switching door.")



    }

    percentatgeS() {
        console.log (Math.trunc(this.gamesWithDoorChangeWon.length /  (this.gamesWithDoorChangeWon.length + this.gamesWithDoorChangeLost.length) * 100) , "% of games were won when switching door.")

    }

}



function playGameNoSwitch(array,numOfGameObj,arrayStat){


let guess; 
let reset; 

for(let i = 0; i < numOfGameObj; i++){

// resets all doors to closed and picks a random door to have a car

guess = Math.floor(Math.random() * 3)
reset = Math.floor(Math.random() * 3)
array[i].doors[0].isCar = false;
array[i].doors[1].isCar = false;
array[i].doors[2].isCar = false;

array[i].doors[reset].isCar = true;

    array[i].doorPicked = guess;
    array[i].finalPick = guess;
   
// very simple checks if door picked has a car if yes send that game to the statiscs array

if( array[i].doors[array[i].finalPick].isCar ){
    arrayStat.gamesWithSameDoorWon.push(array[i]);
    array[i].won = true;

}else if(!array[i].doors[array[i].finalPick].isCar) {
    arrayStat.gamesWithSameDoorLost.push(array[i]);
    array[i].won = false;

}else{
    //this is here just in case things mess up

    console.log("woops");
}


}



}



function playGameWithSwitch(array1,numOfGameObj1,arrayStat1){

    //same thing here as the funcction above, we reset all doors and set a random door to have a car

    let guess; 
    let reset;

    for(let i = 0; i < numOfGameObj1; i++){
    
    guess = Math.floor(Math.random() * 3)
    reset = Math.floor(Math.random() * 3)
    array1[i].doors[0].isCar = false;
    array1[i].doors[1].isCar = false;
    array1[i].doors[2].isCar = false;
    array1[i].doors[0].opened = false;
    array1[i].doors[1].opened = false;
    array1[i].doors[2].opened = false;

    array1[i].doors[reset].isCar = true;
    
    array1[i].doorPicked = guess;
    

    array1[i].doors[array1[i].doorPicked].opened = true;


        //the code bellow, we look for a door that does not have a car and is not one we picked so essentilally we look for the other goat door to reveal it
    
       if ( !array1[i].doors[0].opened  && !array1[i].doors[0].isCar){
        array1[i].doors[0].opened = true;

       }else if(!array1[i].doors[1].opened && !array1[i].doors[1].isCar){

        array1[i].doors[1].opened = true;

       }else if(!array1[i].doors[2].opened && !array1[i].doors[2].isCar){

        array1[i].doors[2].opened = true;

    }

    //after opening goat door, we set final pick to the door the game will pick

    if (!array1[i].doors[0].opened){

        array1[i].finalPick = 0;

    }else if (!array1[i].doors[1].opened){

        array1[i].finalPick = 1;

    }else if (!array1[i].doors[2].opened){
        
        array1[i].finalPick = 2;

    }
   
    if ( array1[i].finalPick == array1[i].doorPicked){
        //also here to see if anything messes up
        console.log("yesh")
    }

    //sends which game won into the array of statistics

    if( array1[i].doors[array1[i].finalPick].isCar ){
        
        arrayStat1.gamesWithDoorChangeWon.push(array1[i]);

        array1[i].won = true;
    
    }else if(!array1[i].doors[array1[i].finalPick].isCar) {

        arrayStat1.gamesWithDoorChangeLost.push(array1[i]);
        array1[i].won = false;
    
    }else{
        console.log("woops");
    }


    }
    

}

//each game needs to make 3 doors
 let gamesList = new Array();
 let gamesList1 = new Array();

 let numOfGame =  1500;  // change this to how many games you wish to run

 let numOfDoor = new Array();
 let numOfDoor1 = new Array();

 let statistics = new Statistics();
 let statistics1 = new Statistics();

// the reason there is two two sets of numOfDoor is because instead of A. making alot of doors for  each game, we cann just reuse the same 3 doors by resetting them which i do in the fucntions above. B. its so if ever we wanna call say .isCar of a type of game for which ever instance of game,
// we can pull it both for the game where we swtich door and dont switch door if we wnated to 
 numOfDoor.push(new Door(0, false));
 numOfDoor.push(new Door(1, false));
 numOfDoor.push(new Door(2, false));

 numOfDoor1.push(new Door(0, false));
 numOfDoor1.push(new Door(1, false));
 numOfDoor1.push(new Door(2, false));


 //makes the number of games wanted
for (let i = 0; i < numOfGame; i++){

    gamesList.push(new Game());

    gamesList1.push(new Game());



}

//puts doors in each game

for(let i = 0; i < numOfGame; i ++){

    for(let y = 0;y < 3 ; y++ ){
        gamesList[i].doors.push(numOfDoor[y]);

        gamesList1[i].doors.push(numOfDoor1[y]);

       
    }
    
}

//runs the game then deos the calculation

playGameNoSwitch(gamesList,numOfGame,statistics);

playGameWithSwitch(gamesList1,numOfGame,statistics1);



statistics.percentatge();
statistics1.percentatgeS();