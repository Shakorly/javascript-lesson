/*

document.querySelector('.secret_number').textContent = 10
document.querySelector('.input_number').value = 23
document.querySelector('.score').textContent = 12

*/
const num = document.querySelector('.secret_number').textContent = 20 
document.querySelector('.check_guess_number_btn').addEventListener
    ('click', function(){
        const guessNumber = Number(document.querySelector('.input_number').value);
    if (guessNumber == 0){
           document.querySelector('.result-message').textContent = 'You need to enter number to play this game';
    } else{
             if (guessNumber == num){
                document.querySelector('.result-message').textContent = 'weldone'
            } else{
                 document.querySelector('.result-message').textContent = 'Try Again'
            }
        }

    }
)