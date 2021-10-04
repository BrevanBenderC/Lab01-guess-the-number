const btn = document.getElementById('button');
let response = document.getElementById('response');

let number = [Math.floor(Math.random() * 20)]

let lives = 4 

btn.addEventListener('click' , function(){
    let input = document.getElementById('guess1').value;
    lives--;
    console.log(number)
    if (input == number){
        response.innerHTML = `You enter room ${number} and find the secret passage. You race through tight corridors and make it out alive! You have ${lives} more tries.`;
    } else if (input < number){
        response.innerHTML = `You enter rooom ${input}. While frantically searching you find a note that says "To escape search rooms with a lower number". You have ${lives} more tries. `;
    } else {
        response.innerHTML = `You enter room ${input}. A terrifying goul chases you out. Your gut is telling you to search in higher room numbers. You have ${lives} more tries.`;
    }
});
