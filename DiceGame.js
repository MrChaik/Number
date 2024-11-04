function DiceRoll() {
    const noOfDice = document.getElementById("noOfDice").value;
    let images = [];
    let values = [];
    const DiceValues = document.getElementById("diceValues");
    const DiceImages = document.getElementById("diceImages");

    for (let i = 0; i < noOfDice; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="./DiceImages/Dice_${value}.jpg" alt="Dice ${value}">`);
    }

    DiceValues.innerHTML = "Dice Values: " + values.join(", ");
    DiceImages.innerHTML = images.join(' ');
}