// Author: Matt
// Users will input strings for the name of user stories in the input module
// Each user story string will be converted to a class object for grading

class UserStoryObject {
    
    // constructor 
    constructor(name, voters) {
      this.name = name;         // name of the user story
      this.voters = voters;     // how many developers are voting?
      this.assigned_cards = []; // holds the user assigned difficulty numbers
    }

    // get a card from a player and assign the card to this UserStoryObject
    receiveCard ( card ) {
        this.assigned_cards.push( card );
        
    }

    // calculate the grade for this user story
    getScore(){

        // don't grade until everyone votes
        if(this.voters != this.assigned_cards.length){
            print("Error - all players have not voted yet");
            return;
        }

        else{
            let grade = 0;
            for (let i = 0; i < this.voters; i++){
                grade += this.assigned_cards[i];
            }
            return grade;
        }
    }
  }