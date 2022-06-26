const nameInput = document.getElementById("Nameinput");
console.log(nameInput);
const distanceInput = document.getElementById("distanceinput");
console.log(distanceInput);
const ageInput = document.getElementById("eta");
console.log(ageInput);

const confirmButton = document.getElementById(`confirm-button`);
const resetButton = document.getElementById(`reset-button`);
const finalButton = document.getElementById(`last-button`);

let namePax = document.getElementById(`nomePax`);
let discount = document.getElementById(`tariffa`);
let car = document.getElementById(`car`);
let pnrReservation = document.getElementById(`reservation`);
let totalPrice = document.getElementById(`final-price`);

confirmButton.addEventListener(`click`,function(){
   nameInput.value = nameInput.value;
   console.log(nameInput.value);
   distanceInput.value = distanceInput.value;
   console.log(distanceInput.value);
   ageInput.value = eta.value;
   console.log(ageInput.value);

   let price = distanceInput.value * 0.21;
   console.log(price)
   if(ageInput.value === `minorenni`){
    price = (price/100) * 80;
    console.log(price);
    namePax.innerText = nameInput.value;
    discount.innerText = ageInput.value;
    let numeroCar = Math.round(Math.random()*20);
    console.log(numeroCar);
    car.innerText = numeroCar;
    let numeroPnr = Math.round(Math.random()*1000);
    console.log(numeroPnr);
    pnrReservation.innerText = `L`+ numeroPnr +`P`;
    totalPrice.innerText = price.toFixed(2)+ `€`;

   }
  else if(ageInput.value === `over65`){
    price = ( price /100)*60;
    console.log(price);
    console.log(price);
    namePax.innerText = nameInput.value;
    discount.innerText = ageInput.value;
    let numeroCar = Math.round(Math.random()*20);
    console.log(numeroCar);
    car.innerText = numeroCar;
    let numeroPnr = Math.round(Math.random()*1000);
    console.log(numeroPnr);
    pnrReservation.innerText = `V`+ numeroPnr +`N`;
    totalPrice.innerText = price.toFixed(2)+ `€`;
  
}
else{
    namePax.innerText = nameInput.value;
    discount.innerText = ageInput.value;
    let numeroCar = Math.round(Math.random()*20);
    console.log(numeroCar)
    car.innerText = numeroCar;
    let numeroPnr = Math.round(Math.random()*1000);
    console.log(numeroPnr);
    pnrReservation.innerText = `F`+ numeroPnr +`G`;
    totalPrice.innerText = price.toFixed(2)+ `€`;
}
}
)
resetButton.addEventListener(`click`,function(){
    nameInput.value = ``;
   console.log(nameInput.value);
   distanceInput.value = ``;
   console.log(distanceInput.value);
   ageInput.value = ``;
   console.log(ageInput.value);

})
finalButton.addEventListener(`click`,function(){
    window.alert("COMPLIMENTI HAI COMPRATO IL BIGLIETTO!!");
})