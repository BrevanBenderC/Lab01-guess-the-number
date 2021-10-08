//Set constants
const music = document.getElementById('music')
const btn = document.getElementById('button');
let response = document.getElementById('response');
const instructions = document.getElementById('instructions');
const refresh = document.getElementById('restart');
const giveup = document.getElementById('giveup');
const correct = document.getElementById('correct-amount');
const failed = document.getElementById('failed-amount');

//Set variable numbers
let number = Math.floor(Math.random() * 20);
let lives = 4;
let correctNum = 0;
let failedNum = 0;
console.log(number);

btn.addEventListener('click' , function(){
    //set the spooky tunes
    let input = document.getElementById('guess1').value;
    music.volume = 0.1;
    music.play();
    //adjust lives
    lives--;
    // clean up the box to look better
    instructions.style.display = "none";
    //if you win
    if (input == number){
        response.innerHTML = `You enter room ${number} and find the secret passage. You race through tight corridors and make it out alive! Press the restart button to play again`;
        guess1.style.display = "none" ;
        button.style.display = "none" ;
        giveup.style.display = "none" ;
        correctNum++;
        correct.textContent = `Amount of guesse correct: ${correctNum}`;

        
    //If input is too high
    } else if (Number(input) > number){
        response.innerHTML = `You enter rooom ${input}. While frantically searching you find a note that says "To escape search rooms with a lower number". You have ${lives} more tries. `;
    
    //If unput is too low
    
    } else if (Number(input) < number){
        response.innerHTML = `You enter room ${input}. A terrifying goul chases you out. Your gut is telling you to search in higher room numbers. You have ${lives} more tries.`;
    }
    //if input is too high
    if (Number(input) > 30){
        lives++;
        response.innerHTML = `There are only 20 rooms. You still have ${lives} tries.`
    }
    //if you run out of lives
    if (lives <=0) {
        guess1.style.display = "none";
        button.style.display = "none";
        ghost.style.display = "block";
        response1.innerHTML = "Oh no! The ghosts caught you. How spooky. Press restart to try again";
        failedNum++;
        failed.textContent = `Amount of times failed: ${failedNum}`;
    }
});

    //giveup button
giveup.addEventListener('click', () =>{
    response.innerHTML = `Giving up so easy? The escape was in room ${number} Press restart to try again.`;
    instructions.style.display = "none";

});

refresh.addEventListener('click', () =>{
    lives = 4;
    response1.innerHTML = " ";
    response.innerHTML = " ";
    guess1.style.display = "flex";
    button.style.display = "flex";
    giveup.style.display = "flex";
    instructions.style.display = "flex";
    ghost.style.display = "none";

});

