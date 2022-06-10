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

    percentatge() {
        
       console.log (this.gamesWithSameDoorWon.length /  (this.gamesWithSameDoorWon.length + this.gamesWithSameDoorLost.length) * 100 ,"% of games were won when not switching door.")



    }

    percentatgeS() {
        console.log (this.gamesWithDoorChangeWon.length /  (this.gamesWithDoorChangeWon.length + this.gamesWithDoorChangeLost.length) * 100 , "% of games were won when switching door.")

    }

}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function playGameNoSwitch(array,numOfGameObj,arrayStat){


let guess; 
let reset; 

for(let i = 0; i < numOfGameObj; i++){

guess = Math.floor(Math.random() * 3)
reset = Math.floor(Math.random() * 3)
array[i].doors[0].isCar = false;
array[i].doors[1].isCar = false;
array[i].doors[2].isCar = false;

array[i].doors[reset].isCar = true;

    array[i].doorPicked = guess;
    array[i].finalPick = guess;
   

if( array[i].doors[array[i].finalPick].isCar ){
    arrayStat.gamesWithSameDoorWon.push(array[i]);
    array[i].won = true;

}else if(!array[i].doors[array[i].finalPick].isCar) {
    arrayStat.gamesWithSameDoorLost.push(array[i]);
    array[i].won = false;

}else{
    console.log("woops");
}


}



}



function playGameWithSwitch(array1,numOfGameObj1,arrayStat1){

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

    
    


    
       if ( !array1[i].doors[0].opened  && !array1[i].doors[0].isCar){
        array1[i].doors[0].opened = true;

       }else if(!array1[i].doors[1].opened && !array1[i].doors[1].isCar){

        array1[i].doors[1].opened = true;

       }else if(!array1[i].doors[2].opened && !array1[i].doors[2].isCar){

        array1[i].doors[2].opened = true;

    }

    if (!array1[i].doors[0].opened){

        array1[i].finalPick = 0;

    }else if (!array1[i].doors[1].opened){

        array1[i].finalPick = 1;

    }else if (!array1[i].doors[2].opened){
        
        array1[i].finalPick = 2;

    }
   
    if ( array1[i].finalPick == array1[i].doorPicked){
        console.log("yesh")
    }

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

 let numOfGame =  1001;  // change this to user input
 let numOfDoor = new Array();
 let numOfDoor1 = new Array();

 let statistics = new Statistics();
 let statistics1 = new Statistics();


 numOfDoor.push(new Door(0, false));
 numOfDoor.push(new Door(1, false));
 numOfDoor.push(new Door(2, false));

 numOfDoor1.push(new Door(0, false));
 numOfDoor1.push(new Door(1, false));
 numOfDoor1.push(new Door(2, false));

for (let i = 0; i < numOfGame; i++){

    gamesList.push(new Game());

    gamesList1.push(new Game());



}

for(let i = 0; i < numOfGame; i ++){

    for(let y = 0;y < 3 ; y++ ){
        gamesList[i].doors.push(numOfDoor[y]);

        gamesList1[i].doors.push(numOfDoor1[y]);

       
    }
    //shuffleArray(gamesList[i].doors); 
    //shuffleArray(gamesList1[i].doors); 

}

//console.log(gamesList[48].doors[1]);

playGameNoSwitch(gamesList,numOfGame,statistics);

playGameWithSwitch(gamesList1,numOfGame,statistics1);



statistics.percentatge();
statistics1.percentatgeS();