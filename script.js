let nummbercounter = document.getElementById("nummberCounter");
let buttonCounter = document.getElementById("ButtonCounter");



buttonCounter.addEventListener("click", function(){
 let currentValue = nummbercounter.innerHTML;
 currentValue++;
 nummbercounter.innerHTML = currentValue;
})
;