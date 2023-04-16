
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const result = document.querySelector('.result');
const count = document.querySelector('.count');




var countNum =0;
let randomNumber = Math.floor(100*Math.random());
function checkGuess() {
    const userGuess = Number(guessField.value);

    countNum++;
    count.textContent = "猜測次數:"+countNum;
    if ( userGuess === randomNumber) {

        result.textContent = '猜測結果:Congratulations!' ;
        
        }
        else if (userGuess < randomNumber) {
        
        result.textContent = '猜測結果:數字太小!' ;
        
        }
        else if (userGuess > randomNumber) {
        
        result.textContent = '猜測結果:數字太大!';
        
        }
        
}

//guessField.focus(); //游標焦點預設在輸入欄位裡




guessSubmit.addEventListener('click', checkGuess); //當按鈕被點擊,執行函式






