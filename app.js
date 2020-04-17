'use strict';
var areYouTigerKing = '';

function numberOfTigers() {
 
    var correctAnswer = 10;

    for(var i = 0; i < 8; i = i + 1){
        var numberGuess = prompt('You are now pregnant with Tigers. 1-11, How many will you have?');
        if(numberGuess == correctAnswer){
            alert('10 BRUH! YOU WILL BEAR 10 TIGERS!');
            break;
        } else {
            alert('Come On Bruh!');
        }
        if (i == '7') {
            alert('Damn !');
            isSithLordOrMaster = 'NO';
        }
    }
}




function dmc (){
    while ((areYouTigerKing != 'NO') && (areYouTigerKing !='YES')){
    areYouTigerKing = prompt('Yes or No Question. Are you a Tiger King?').toUpperCase();
   
    }

    alert ('Sweet!')
   
}
   

dmc();

numberOfTigers();




//areYouTigerKing();
//function myFunctio(){
    
  //  var response = ('Glad to hear it!')



