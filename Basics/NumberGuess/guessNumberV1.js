let highScore = 20

let secretNumber = Math.trunc(Math.random() * 20 +1);




document.querySelector('#btnCheck').addEventListener(
    "click", () => {

        let guessNumber = Number(document.querySelector('#guessInputId').value);


        if (!guessNumber || guessNumber < 1 || guessNumber > 20){
            document.querySelector("#resultMessage").textContent = 'You need to provide a number between 1 and 20';
        }
        else if (guessNumber > secretNumber){  
            document.querySelector('#resultMessage').textContent = "You guess is too hign";
            highScore--
            document.querySelector("#highScore").textContent = " Your highScore is " + highScore
            if (highScore <1 ){
                document.querySelector("#resultMessage").textContent = "Your lost the game, Try Again Later";
                document.querySelector('#btnCheck').disabled = true;

            }
    }
        else if (guessNumber < secretNumber){
            document.querySelector("#resultMessage").textContent = "You guess is too low";
            highScore--
            document.querySelector("#highScore").textContent = " Your highScore is " + highScore 
            if (highScore < 1 ){
                document.querySelector("#resultMessage").textContent = "Your lost the game, Try Again later";
                document.querySelector('#btnCheck').disabled = true;

            }
        }

        else{
            document.querySelector("#resultMessage").textContent = "You Win";
            document.querySelector('#displaySecretNumber').textContent = "The secret Number is " + secretNumber;
            document.querySelector("body").style.backgroundColor = "green";
        }

    }
);



document.querySelector("#resetBtn").addEventListener(
    'click', () => {
        location.reload();}
)  