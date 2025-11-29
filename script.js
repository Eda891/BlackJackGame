let sum=0
let cards=[]
let hasBlackJack=false
let isAlive=false
let message=""
let sumEl=document.getElementById("sum-el")
let messageEl= document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")

let player ={
 name :"Per",
 chips:145
}

let playerEl =document.getElementById("player-el")
playerEl.textContent=player.name+" : $"+ player.chips

function startGame(){

  let fcard=getRandom()
  let scard=getRandom()
 cards=[fcard,scard]
 sum = fcard+scard
 isAlive=true
  renderGame()
}


function renderGame(){
  cardsEl.textContent= "Cards: "
  for(let i=0; i<cards.length;i++) 
  {
    cardsEl.textContent+= cards[i] +" "
  }
  sumEl.textContent="Sum: "+sum
if(sum<=20){
  message="Do you want to draw a new card?"
} else if(sum===21){
  message="wohoo BlackJack"
  hasBlackJack=true
} else{
  message ="you are out of the game"
  isAlive=false
}
messageEl.textContent=message
}

function getRandom(){
  let num=Math.floor(Math.random()*13)+1
  if(num===1){
    return 11
  }else if (num>10){
    return 10
  } else {
    return num
  }}

function newCard(){
  if(isAlive){
  let newCard= getRandom()
  sum+=newCard
  cards.push(newCard)
  renderGame()}
}