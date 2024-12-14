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

document.querySelectorAll('.dropdown-content a').forEach(item=> {
  item.addEventListener('click', function(event){
    event.preventDefault();
    var numberOfDevelopers = event.target.getAttribute('data-value');
    document.getElementById('developer-count-display').textContent = "Number of Developers: " + numberOfDevelopers;
    document.getElementById("myDropdown").classList.remove("show");
  });
});