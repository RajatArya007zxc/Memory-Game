

document.addEventListener('DOMContentLoaded',()=>{

const cardArray=[

    {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
]


const grid= document.querySelector(".grid");
const resultDisplay=document.querySelector('#result');
var cardChoosen=[];
var cardChoosenId=[];
var cardWon=[];

// Create Board 
function CreateBoard(){

    for(i=0;i<=cardArray.length -1 ;i++){
        var card=document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i)
        //card.addEventListener('click',flipcard);
        grid.appendChild(card);
    }


}

//Check for Match 
function checkforMatch(){

    var cards=document.querySelectorAll('img');

     const optionOneId=cardChoosenId[0];
     const optionTwoId=cardChoosenId[1];

     if(cardChoosen[0]===cardChoosen[1]){
         alert('You found A Match');
         cards[optionOneId].setAttribute('src','images/white.png');
         cards[optionTwoId].setAttribute('src','images/white.png');
           cardWon.push(cardChoosen)
     }
     else{
         cards[optionOneId].setAttribute('src','images/blank.png');
         cards[optionTwoId].setAttribute('src','images/blank.png');
         alert("Better Luck Next Time");
     }

     cardChoosen =[];
     cardChoosenId=[];
     resultDisplay.textContent=cardWon.length;
     if(cardWon.length===(cardArray.length)/2){
         resultDisplay.textContent="Congratulation you found all";
     }
}



// Flip the Card
function flipcard(){
    cardId=this.getAttribute('datat-id');
      cardChoosen.push(cardArray[cardId].name)

      cardChoosenId.push(cardId)
      this.setAttribute('src',cardArray[cardId].img)
 
       if(cardChoosen.length === 2 ){
           setTimeout(checkforMatch,500);
       }

}

CreateBoard();






})
