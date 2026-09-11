let nummbercounter = document.getElementById("nummberCounter");
let buttonCounter = document.getElementById("ButtonCounter");
const stopit = document.getElementById("stopit");
let spammessage = document.getElementById("spammessage");
const spam = 10;



buttonCounter.addEventListener("click", function(){
 let currentValue = nummbercounter.innerHTML;
 currentValue++;
 nummbercounter.innerHTML = currentValue;

 if (currentValue >= spam){
    stopit.style.display = "block";
    spammessage.innerHTML = "Please stop it already!";
}
})
;
