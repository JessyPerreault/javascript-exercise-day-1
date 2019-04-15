var myForm = document.getElementById('myForm');
var submitButton = document.myForm.quizButton;
var reset = document.myForm.reset;
var image = document.myForm.image;

var question1 = document.myForm.question1;
var question2 = document.myForm.question2;
var radio = document.myForm.radio;
var radio2 = document.myForm.radio2;
var checkbox = document.myForm.checkbox;

var score = 0;

submitButton.addEventListener("click", function(event) {



   if (radio[1].checked) {
       score++;
   }

   if (document.getElementById("radio7").checked) {
       score++;
   }

   if (question1.value == "belching") {
       score++;
   }

   if (question2.value == "beth") {
       score++;
   }

   if (checkbox[3].checked) {
       score++;
   }

   document.getElementById("yourScore").innerHTML = ("Behold!! Your score is " + score);
   

   reset.style.display = "block";
   submitButton.style.display = "none";
   image.style.display = "block";

   event.preventDefault();

})
