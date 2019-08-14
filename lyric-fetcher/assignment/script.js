// fetch info from URL
var myForm = document.querySelector("myForm");
var searchButton = document.querySelector("#search");


function myTimer() {
  document.getElementById("lyrics").innerHTML = "Error: It seems like those lyrics may not exist in the database." + "<br>" + "Please try something else";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}

searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  var startTimer = setInterval(myTimer, 30000);
  document.getElementById("lyrics").style.padding = "0px";
  document.getElementById("lyrics").style.borderRadius = "0px";
  document.getElementById("lyrics").style.background = "rgba(170, 70, 120, 0)";

  var song = document.myForm.song.value;
  var artist = document.myForm.artist.value;
  var url = "https://api.lyrics.ovh/v1";
  var newUrl = url + "/" + artist + "/" + song;
  var output = document.getElementById("lyrics");

  let loader = `<br><br><div class="lds-ripple"><div></div><div></div></div>`;
  document.getElementById("lyrics").innerHTML = loader;

  fetch(newUrl)
    .then(function(response) {
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(function(data) {
      clearTimeout(startTimer);
      var lyrics = data.lyrics.replace(/\n/g, "<br>");
      output.innerHTML = lyrics;
      document.getElementById("lyrics").style.padding = "20px 20px";
      document.getElementById("lyrics").style.borderRadius = "40px";
      document.getElementById("lyrics").style.background =
        "rgba(170, 70, 120, 0.486)";
      //finally made it to our actual data

      // for (var i = 0; i < data.length; i++) {
      //     console.log(data[i].name);
      // }
    })
    .catch(function(error) {
      document.getElementById("lyrics").innerHTML = "Error: It seems like those lyrics may not exist in the database.";
    });

});
