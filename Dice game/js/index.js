const imgUrl= [
    "img/dice1.png",
    "img/dice2.png",
    "img/dice3.png",
    "img/dice4.png",
    "img/dice5.png",
    "img/dice6.png",
];

   
    

    const body = document.querySelector('body');
    const head=document.querySelector('h1');

    body.addEventListener("click",function(){
    
        const index1=Math.floor(Math.random()*6);
        const index2=Math.floor(Math.random()*6);
        const diceImg1=document.getElementById("p1");
        const diceImg2=document.getElementById("p2");
        diceImg1.setAttribute("src",imgUrl[index1]);
        diceImg2.setAttribute("src",imgUrl[index2]);

        if(index1>index2)
        {
            head.innerHTML="player1 Wins";
        }
        else if(index2>index1)
        {
            head.innerHTML="player2 wins";
        }

        else
        {
            head.innerHTML="It's a draw!!!";
        }

        
})

