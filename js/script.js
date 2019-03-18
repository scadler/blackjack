// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$("#aceFlipA").hide();
$("#aceFlipB").hide();
$("#aceFlipC").hide();
$("#aceFlipD").hide();
var compCard = 0;
var compDraw = true;
var cardsDrawn = 0;
var gameOver = false;
$("#compScore").text(0);
$("#deal").click(function(){
    $("#aceFlipD").hide();
    var compDraw = true;
    $("#compScore").text(0);
    cardsDrawn=2;
    $("#cardNum").text(cardsDrawn);
    $("#winner").text("");
    var counterA = 1;
    var counterB = 1;
    var counterC = 1;
    var counterD = 1;
    var counterHit = 1;
    var cardA = 0;
    var cardB = 0;
    var cardC = 0;
    var cardD = 0;
    var hand = 0;
    var aces = 0;
    var hitTwo = false;
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
        $("#aceFlipD").hide();
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
            
        
        
            $("#aceFlipA").click(function(){
                if(hitTwo === false){
                counterA=counterA+1;
                if( counterA % 2 === 0){
                    cardA=11;
                }
                else if( counterA % 2 === 1){
                    cardA=1;
                }
                hand=cardA+cardB+cardC;
                $("#userScore").text(hand);
                }
            });
            $("#aceFlipB").click(function(){
                if(hitTwo === false){
                counterB=counterB+1;
                if( counterB % 2 === 0){
                    cardB=11;
                }
                else if( counterB % 2 === 1){
                    cardB=1;
                }
                hand=cardA+cardB+cardC;
                $("#userScore").text(hand);
                }
            });
            $("#aceFlipC").click(function(){
                if(hitTwo === false){
               counterC=counterC+1;
                if( counterC % 2 === 0){
                    cardC=11;
                }
                else if( counterC % 2 === 1){
                    cardC=1;
                }
                hand=cardA+cardB+cardC;
                $("#userScore").text(hand);
                }
            });
            $("#aceFlipD").hide(); 
            $("#userScore").text(cardA + cardB + cardC);
        }
        $("#stand").click(function(){
            if(hitTwo === false){
                if(gameOver === false){
                if(compDraw === true){
                    var num = 0;
                    compCard = 0;
                        while(compCard < 15){
                            num = Math.ceil(Math.random(1)*13);
                            compCard = compCard+num;
                            }
                    $("#compScore").text(compCard);
                    }
                }
            }
                compDraw = false;
    //            hand = cardA+cardB+cardC;
      //          console.log(hand);
        //        if(hand < 22 && compCard < 22){
          //              if(hand > compCard){
            //                $("#winner").text("User");
              //          }  
                //        if(hand < compCard){
                  //          $("#winner").text("Computer");
                    //    }  
//                }
  //              if(compCard >= 22 && hand < 22){
    //                $("#winner").text("User");
      //          }
        //        else{
          //          $("#winner").text("Computer");
            //    }
//            }
  //          }
});
        $("#hit").click(function(){
            hitTwo=true;
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
            
            
            $("#aceFlipA").click(function(){
                counterA=counterA+1;
                if( counterA % 2 === 0){
                    cardA=11;
                }
                else if( counterA % 2 === 1){
                    cardA=1;
                }
                hand=cardA+cardB+cardC+cardD;
                $("#userScore").text(hand);
            });
            $("#aceFlipB").click(function(){
                counterB=counterB+1;
                if( counterB % 2 === 0){
                    cardB=11;
                }
                else if( counterB % 2 === 1){
                    cardB=1;
                }
                hand=cardA+cardB+cardC+cardD;
                $("#userScore").text(hand);
            });
            $("#aceFlipC").click(function(){
            console.log("C");
               counterC=counterC+1;
                if( counterC % 2 === 0){
                    cardC=11;
                }
                else if( counterC % 2 === 1){
                    cardC=1;
                }
                hand=cardA+cardB+cardC+cardD;
                $("#userScore").text(hand);
            });
            $("#aceFlipD").click(function(){
                counterD=counterD+1;
                if( counterD % 2 === 0){
                    cardD=11;
                }
                else if( counterD % 2 === 1){
                    cardD=1;
                }
                hand=cardA+cardB+cardC+cardD;
                $("#userScore").text(hand);
            });
            $("#userScore").text(cardA + cardB + cardC + cardD);
            $("#stand").click(function(){
            if(hitTwo === true){
                if(gameOver === false){
                if(compDraw === true){
                    var num = 0;
                    compCard = 0;
                        while(compCard < 15){
                            num = Math.ceil(Math.random(1)*13);
                            compCard = compCard+num;
                            }
                    $("#compScore").text(compCard);
                    }
    //                hand = $("#userScore").val();
                    compDraw = false;
        //        if(hand < 22 && compCard < 22){
          //              if(hand > compCard){
            //                $("#winner").text("User");
              //          }  
                //        if(hand < compCard){
                  //          $("#winner").text("Computer");
                    //    }  
//                }
  //              if(compCard >= 22 && hand < 22){
    //                $("#winner").text("User");
      //          }
        //        else{
          //          $("#winner").text("Computer");
            //    }
               }
            }
            });
            }
    });
    });
    
    //ace flip
    //think code doesnt know what c and d are here, reason not working
    $("#aceFlipA").click(function(){
        if(counterHit === 1){
        counterA=counterA+1;
        if( counterA % 2 === 0){
            cardA=11;
        }
        else if( counterA % 2 === 1){
            cardA=1;
        }
        hand=cardA+cardB;
        $("#userScore").text(hand);
        }
    });
    $("#aceFlipB").click(function(){
        if(counterHit === 1){
        counterB=counterB+1;
        if( counterB % 2 === 0){
            cardB=11;
        }
        else if( counterB % 2 === 1){
            cardB=1;
        }
        hand=cardA+cardB;
        $("#userScore").text(hand);
        }
    });
    
        $("#userScore").text(cardA + cardB + cardC + cardD);
        console.log("cardA is " +cardA);
        console.log("cardB is " +cardB);
        console.log("cardC is " +cardC);
        console.log("cardD is " +cardD);
    console.log("cardA is " +cardA);
    console.log("cardB is " +cardB);
    console.log("cardC is " +cardC);
    console.log("cardD is " +cardD);
    
    //user score
    
    hand=cardA+cardB;
    $("#userScore").text(hand);
    
    //computer logic
    
    $("#stand").click(function(){
        console.log("stand");
            if(gameOver === false){
                if(compDraw === true){
                    var num = 0;
                   compCard = 0;
                        while(compCard < 15){
                         num = Math.ceil(Math.random(1)*13);
                            compCard = compCard+num;
                            }
                    $("#compScore").text(compCard);
                    }
                compDraw = false;
//                if(hand < 22 && compCard < 22){
//                       if(hand > compCard){
//                            $("#winner").text("User");
//                        }  
//                        if(hand < compCard){
//                            $("#winner").text("Computer");
//                        }  
//                }
//                if(compCard >= 22 && hand < 22){
//                    $("#winner").text("User");
//                }
//                else{
//                    $("#winner").text("Computer");
//                }
//}
//});
}
});
});
$("#dark").click(function(){
    $(".score").css("color", "#f9f9f9");
    $("body").css("background-color", "#444444");
    $("#drawn").css("color", "#a9a9a9");
    $("#info").css("color", "#a9a9a9");
    $("#top").css("border-color", "#888888");
    $(".aces").css("background-color", "#a9a9a9");
    $(".buttons").css("background-color", "#a9a9a9");
    $(".lightButtons").css("color", "#aaaaaa");
});
$("#light").click(function(){
    $(".score").css("color", "#595959");
    $("body").css("background-color", "#f9f9f9");
    $("#drawn").css("color", "#000000");
    $("#info").css("color", "#000000");
    $("#top").css("border-color", "#ff9999");
    $(".aces").css("background-color", "#f2f2f2");
    $(".buttons").css("background-color", "#f2f2f2");
    $(".lightButtons").css("background-color", "#f2f2f2");
    $(".lightButtons").css("color", "#777777");
});