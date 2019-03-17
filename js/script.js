// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$("#aceFlipA").hide();
$("#aceFlipB").hide();
$("#aceFlipC").hide();
$("#aceFlipD").hide();
$("#deal").click(function(){
    var counterA = 1;
    var counterB = 1;
    var counterC = 1;
    var counterD = 1;
    var cardA = 0;
    var cardB = 0;
    var cardC = 0;
    var cardD = 0;
    var aces = 0;
    $("#aceFlipA").hide();
    $("#aceFlipB").hide();
    var cardA = Math.ceil(Math.random(1)*13);
    if(cardA > 10){
        cardA = 10;
    }
    else if(cardA === 1){
        $("#aceFlipA").show();
        aces = aces+1
    }
    var cardB = Math.ceil(Math.random(1)*13);
    if(cardB > 10){
        cardB = 10;
    }
    else if(cardB === 1){
        $("#aceFlipB").show();
        aces = aces+1;
    }
    $("#hit").click(function(){
        var cardC = Math.ceil(Math.random(1)*13);
        
        if(cardC > 10){
            cardC = 10;
        }
        else if(cardC === 1){
            $("#aceFlipC").show();
        aces = aces+1;
        }
        $("#compScore").text(aces);
        $("#userScore").text(cardA + cardB + cardC);
    });
    $("#aceFlipA").click(function(){
        counterA=counterA+1
        if( counterA % 2 === 0){
            cardA=11
        }
        else if( counterA % 2 === 1){
            cardA=1
        }
        $("#userScore").text(cardA + cardB + cardC)
    });
    $("#aceFlipB").click(function(){
        counterB=counterB+1
        if( counterB % 2 === 0){
            cardB=11
        }
        else if( counterB % 2 === 1){
            cardB=1
        }
        $("#userScore").text(cardA + cardB + cardC)
    });
    $("#aceFlipC").click(function(){
        counterC=counterC+1
        if( counterC % 2 === 0){
            cardC=11
        }
        else if( counterC % 2 === 1){
            cardC=1
        }
        $("#userScore").text(cardA + cardB + cardC)
    });
    $("#aceFlipD").click(function(){
        counterD=counterD+1
        if( counterD % 2 === 0){
            cardD=11
        }
        else if( counterD % 2 === 1){
            cardD=1
        }
        $("#userScore").text(cardA + cardB + cardC)
    });
    $("#compScore").text(aces);
    $("#userScore").text(cardA + cardB + cardC + cardD + cardE)
});
