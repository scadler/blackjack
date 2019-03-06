// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var input = "https://api.giphy.com/v1/gifs/search?q=" + $("#search-term").val() + "&rating=pg&api_key=dc6zaTOxFJmzC&limit=3";
  console.log(input);
  $.ajax({
    url: input,
    method: "GET",
    success: function(response) {
        $(".text-center").append(`<img src="${response.data[0].images.original.url}">`);
        console.log(`${response.data[0].images.original.url}`);
        $(".text-center").html("");
        response.data.forEach(function(gifs){
        $(".text-center").append("<img class='text-center' src='" + gifs.images.original.url + "'>" );
        });
        },

});
  
});

$("#search-button").click(function(){
   $.ajax({
    method: "GET",
    success: function(response) {
      var gifs = Math.floor(Math.random() * response.data.length);
        $(".text-center").html("");
        response.data.forEach(function(gifs){
        $(".text-center").append("<img class='text-center' src='" + response.data[gifs].images.original.url + "'>" );
        });
        },
});
});