// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var input = "https://api.giphy.com/v1/gifs/search?q=" + $("#search-term").val() + "&rating=pg&api_key=dc6zaTOxFJmzC";
  console.log(input);
  $.ajax({
    url: input,
    method: "GET",
    success: function(response) {
        $(".text-center").append(`<img src="${response.data[0].images.original.url}">`);
        console.log(`${response.data[0].images.original.url}`);
        $(".text-center").replaceWith("<img class='text-center' src='" + response.data[0].images.original.url + "'>");
  },
});
  
});

