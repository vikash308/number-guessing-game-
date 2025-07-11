let num = Math.floor(Math.random() * 100) + 1;
let chance = 10;

document.getElementById("chance").textContent = chance;

document.getElementById("button").addEventListener("click",guessing);
document.getElementById("input").addEventListener("keydown" , function (event){
    if(event.key === "Enter")
        guessing();
})
function guessing() {
  const input = document.getElementById("input");
  const result = document.getElementById("result");
  const userGuess = parseInt(input.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    result.textContent = "Please enter a valid number between 1 and 100!";
    return;
  }

  if (userGuess === num) {
    result.textContent = "🎉 You win!";
    disableInput();
  } else {
    chance--;
    document.getElementById("chance").textContent = chance;
    result.textContent =
      userGuess > num ? "Your number is high 📈" : "Your number is low 📉";
    if (chance <= 0) {
      result.textContent = `😢 You lose! The number was ${num}`;
      disableInput();
    }
  }

  input.value = "";
};

function disableInput() {
  document.getElementById("input").disabled = true;
  document.getElementById("button").disabled = true;
}

document.getElementById("newgame").onclick = function () {
  location.reload();
};
