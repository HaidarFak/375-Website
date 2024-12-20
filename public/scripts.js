function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content a')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// This will allow users to choose number and disable session feature until a number is chosen.
document.querySelectorAll('.dropdown-content a').forEach(item=> {
  item.addEventListener('click', function(event){
    event.preventDefault();
    var numberOfDevelopers = event.target.getAttribute('data-value');
    localStorage.setItem('numOfDevelopers', numberOfDevelopers);
    document.getElementById('developer-count-display').textContent = "Number of Developers: " + numberOfDevelopers;
    document.getElementById("start-session-btn").disabled = false;
    document.getElementById("myDropdown").classList.remove("show");
  });
});

// This will display number of voters on second page
window.onload = function(){
  const numOfDevelopers = localStorage.getItem('numOfDevelopers');
  console.log("Number of developers:", numOfDevelopers);
  if (numOfDevelopers){
    document.getElementById('developer-num').textContent = numOfDevelopers;
  } else {
    alert("No number of developers selected! Please go back to home page.");
  }
};

// Voting functions
let votes = [];
let numVotes = 0;
let numberOfDevelopers = 1;
let questionMarkVotes = 0;

const numOfDevelopers = parseInt(localStorage.getItem("numOfDevelopers"), 10);

document.querySelectorAll('.container div').forEach(item => {
  item.addEventListener('click', function(event) {
    const vote = event.target.getAttribute('data-value');
    votes.push(vote);
    numVotes++;
    
    if(votes === '?'){
      questionMarkVotes++;
    }

    if(numOfDevelopers > numVotes){
      alert("Voter number " + (numVotes + 1) + "'s turn.")
    }

    
    if (numVotes == numOfDevelopers){
      calculateAvg();
    }
  });
});

// Calculate the average votes
function calculateAvg(){
  const validVotes = votes.filter(vote => !isNaN(vote)).map(Number);

  if (validVotes.length > 0){
    const sum = validVotes.reduce((acc,curr) => acc + curr, 0);
    const average = sum / validVotes.length;
    document.getElementById('average-display').textContent = average.toFixed(2);

    if(!Number.isInteger(average)){
      alert("Voting Complete, The number is a decmial, There is a disagreement");
    } else {
      alert("Everyone agrees on the number");
    }
  }

  if (questionMarkVotes > 0) {
    document.getElementById('mark-display').textContent = 
      `"?" was chosen ${questionMarkVotes} ${questionMarkVotes === 1 ? 'time' : 'times'}`;
    alert(`The "?" option was chosen ${questionMarkVotes} ${questionMarkVotes === 1 ? 'time' : 'times'}.`);
  }

}

// Restart session
document.getElementById('restart-button').addEventListener('click', function(){
  votes = [];
  numVotes = 0;
  questionMarkVotes = 0;
  document.getElementById('average-display').textContent = "Waiting for votes...";
  document.getElementById('mark-display').textContent = "";
  console.log("Voting session restarted");
});