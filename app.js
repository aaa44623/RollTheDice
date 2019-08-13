/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;

init();

//dice = Math.floor(Math.random() * 6) + 1;
//Generating random number Math.floor(Math.random() * 6) + 1
//generates a random whole number from 1 to 6

//document.querySelector('#current-' + activePlayer).textContent = dice;
//first part(let us select the something from the preview)
//second part(will display the desire thing we want to show)
//querySelector lets us select items just like CSS so we can grab the ID

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';
//turns font italic

var x = document.querySelector('#score-0').textContent;

///var lastDice;
document.querySelector('.btn-roll').addEventListener('click', function()
                                                    {
    if(gamePlaying)
        {
            
            //1. Random number
            var dice = Math.floor(Math.random() * 6) + 1;
            
            //2. Display the results
            var diceDom = document.querySelector('.dice');
            diceDom.style.display = 'block';
            diceDom.src = 'dice-' + dice + '.png';

            //3. Update the round score IF the rolled number was NOT 1
            /*if (dice === 6 && lastDice === 6)
                {
                    //Lose all your score
                    scores[activePlayer] = 0;
                    document.querySelector('#score-' + activePlayer).textContent = '0';
                    nextPlayer();
                }*/
            if (dice !== 1)
                {
                    //Add score
                    roundScore += dice;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;  
                }
             
            else
                {
                    //next player
                   nextPlayer();
                }
            lastDice = dice;
        }
});
//we can also do the function inside the brackets



document.querySelector('.btn-hold').addEventListener('click', function()
{
    if(gamePlaying)
        {
            //add Current score to Global Score
            scores[activePlayer] += roundScore;

            //Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            var input = document.querySelector('.final-score').value;
            var  winningScore;
            //undefined, 0, null or "" are coerced to false
            //anything else is coerced to true
            if(input)
                {
                    winningScore = input;
                }
            else
                {
                    winningScore = 100;
                }
            //Check if player won the game
            if (scores[activePlayer] >= 100)
                {
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                    document.querySelector('.dice').style.display = 'none';
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    gamePlaying = false;

                }
            else
                {
                    //nextPlayer
                    nextPlayer();
                }
        }
});
                                                     
function nextPlayer()
{
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;//turnery operator
    //Same Thing as 
    // if(activePlayer === 0){
    //activePlayer = 1;
    //}else{
    //activePlayer = 0;
    //}
    roundScore = 0
            
    //set The value to 0 for whoever rolls a 1
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
            
    //adjust the little circle dot for the active player
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    //......//
    //in this case we can use toggle in case of add or remove
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
            
    document.querySelector('.dice').style.display = 'none';
            
}

//NEW GAME button sets everything to zero
document.querySelector('.btn-new').addEventListener('click', init)


//initialize function called in the begining
function init()
{
    scores = [0,0]
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    //here, we are trying to hide the dice in the begining of the game.
    //so we cite the dice class from HTML, and this way '.dice'. 

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}



















