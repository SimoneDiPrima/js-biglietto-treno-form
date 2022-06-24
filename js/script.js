const nameInput = document.getElementById("Name-input");
console.log(nameInput);
const distanceInput = document.getElementById("distance-input");
console.log(distanceInput);
const ageInput = document.getElementById("age-input");
console.log(ageInput);

const confirmButton = document.getElementById(`confirm-button`);
const resetButton = document.getElementById(`reset-button`);

confirmButton.addEventListener(`click`, function(){
    const nameValue = nameInput.value;
    const distanceValue = distanceInput.value;
    const ageValue = ageInput.value;
    console.log(nameValue);
    console.log(distanceValue);
    console.log(ageValue);
    
}
)