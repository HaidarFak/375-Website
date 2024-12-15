// Author: Matt
// Users will input strings for the name of user stories in the input module
// Each user story string will be converted to a class object for grading

function Fibonacci( num_cards ){
    numbers = [1, 2];
    top = 1;
    count = 2;
    while( count != num_cards ){
        numbers.push( numbers[top] + numbers[top - 1]);
        count++;
        top++;
    }
}

class Card{
    constructor(number){
        this.played = false;
        this.number = number;
    }
    
}

class Developer {
   
    // constructor
    constructor(name, number_of_cards) {
      this.name = name;                             // name of the player
      this.number_of_cards = number_of_cards;       // each developer is given the same number of cards
      this.cards = [];                              // holds the user assigned difficulty numbers
    }
  }