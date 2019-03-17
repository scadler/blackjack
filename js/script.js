// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$("#aceFlipA").hide();
$("#aceFlipB").hide();
$("#aceFlipC").hide();
$("#aceFlipD").hide();
var cardsDrawn=0;
$("#deal").click(function(){
    cardsDrawn=2;
    $("#cardNum").text(cardsDrawn);
    $("#userAlert").text("");
    var counterA = 1;
    var counterB = 1;
    var counterC = 1;
    var counterD = 1;
    var counterHit = 1;
    var cardA = 0;
    var cardB = 0;
    var cardC = 0;
    var cardD = 0;
    var aces = 0;
    $("#aceFlipA").hide();
    $("#aceFlipB").hide();
    $("#aceFlipC").hide();
    $("#aceFlipD").hide();
    cardA = Math.ceil(Math.random(1)*13);
    if(cardA > 10){
        cardA = 10;
    }
    else if(cardA === 1){
        $("#aceFlipA").show();
        aces = aces+1;
    }
    cardB = Math.ceil(Math.random(1)*13);
    if(cardB > 10){
        cardB = 10;
    }
    else if(cardB === 1){
        $("#aceFlipB").show();
        aces = aces+1;
    }
    //hit
    
    $("#hit").click(function(){
        cardC=0;
        cardD=0;
        counterHit = counterHit+1;
        if(counterHit % 2 === 0 && counterHit <= 3){
            cardsDrawn=3;
            $("#cardNum").text(cardsDrawn);
            $("#aceFlipC").hide();
            if(cardC === 1){
                $("#aceFlipC").show();
                aces = aces+1;
            }
            //
            var cardC = Math.ceil(Math.random(1)*13);
            console.log(cardC);
            if(cardC > 10){
              cardC = 10;
           }
            else if(cardC === 1){
                $("#aceFlipC").show();
                aces = aces+1;
            }
            $("#compScore").text(aces);
            $("#userScore").text(cardA + cardB + cardC);
        }
        //hit 2
        if(counterHit % 2 === 1  && counterHit === 3){
            cardsDrawn=4;
            $("#cardNum").text(cardsDrawn);
            cardD=0;
            console.log("worksB");
            $("#aceFlipD").hide();
            if(cardD === 1){
                $("#aceFlipD").show();
            aces = aces+1;
            }
    
            cardD = Math.ceil(Math.random(1)*13);
            console.log(cardD);
            if(cardD > 10){
                cardD = 10;
            }
            else if(cardD === 1){
               $("#aceFlipD").show();
                aces = aces+1;
            }
            $("#compScore").text(aces);
            $("#userScore").text(cardA + cardB + cardC + cardD);
        }
        if(counterHit > 3){
            $("#userAlert").text("(You can draw no more cards)");
        }
    });
    
    //ace flip
    //think code doesnt know what c and d are here, reason not working
    $("#aceFlipA").click(function(){
        counterA=counterA+1;
        if( counterA % 2 === 0){
            cardA=11;
        }
        else if( counterA % 2 === 1){
            cardA=1;
        }
        $("#userScore").text(cardA + cardB + cardC + cardD);
    });
    $("#aceFlipB").click(function(){
        counterB=counterB+1;
        if( counterB % 2 === 0){
            cardB=11;
        }
        else if( counterB % 2 === 1){
            cardB=1;
        }
        $("#userScore").text(cardA + cardB + cardC  + cardD);
    });
    $("#aceFlipC").click(function(){
        counterC=counterC+1;
        if( counterC % 2 === 0){
            cardC=11;
        }
        else if( counterC % 2 === 1){
            cardC=1;
        }
        $("#userScore").text(cardA + cardB + cardC  + cardD);
    });
    $("#aceFlipD").click(function(){
        counterD=counterD+1;
        if( counterD % 2 === 0){
            cardD=11;
        }
        else if( counterD % 2 === 1){
            cardD=1;
        }
        $("#userScore").text(cardA + cardB + cardC + cardD);
        console.log("cardA is " +cardA);
        console.log("cardB is " +cardB);
        console.log("cardC is " +cardC);
        console.log("cardD is " +cardD);
    });
    console.log("cardA is " +cardA);
    console.log("cardB is " +cardB);
    console.log("cardC is " +cardC);
    console.log("cardD is " +cardD);
    //user score
    
    $("#compScore").text(aces);
    $("#userScore").text(cardA + cardB);
    console.log(cardC);
    console.log(cardD);
});
