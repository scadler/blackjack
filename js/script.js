// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var input = "https://api.giphy.com/v1/gifs/search?q=" + $("#search-term").val() + "&rating=pg&api_key=dc6zaTOxFJmzC&limit=6";
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
  $(document).keydown(function(){
    if(event.which == 13){
      var input = "https://api.giphy.com/v1/gifs/search?q=" + $("#search-term").val() + "&rating=pg&api_key=dc6zaTOxFJmzC&limit=6";
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
}
});

$("#random").click(function(){
  var inputCond = $("#search-term").val();
  if(inputCond === ""){
    var input = "https://api.giphy.com/v1/gifs/search?q=" + "random" + "&rating=pg&api_key=dc6zaTOxFJmzC";
    console.log(input);
    $.ajax({
     url: input,
      method: "GET",
      success: function(response) {
      var ranNum = Math.floor(Math.random() * response.data.length);
        $(".text-center").html("");
        $(".text-center").append(`<img class='text-center' src= ${response.data[ranNum].images.original.url}>`);
        },
});
}
  else{
  var input = "https://api.giphy.com/v1/gifs/search?q=" + $("#search-term").val() + "&rating=pg&api_key=dc6zaTOxFJmzC";
    console.log(input);
    $.ajax({
     url: input,
      method: "GET",
      success: function(response) {
      var ranNum = Math.floor(Math.random() * response.data.length);
        $(".text-center").html("");
        $(".text-center").append(`<img class='text-center' src= ${response.data[ranNum].images.original.url}>`);
        },
});
}
});
$(".text-center").click(function(){
  var input = "https://api.giphy.com/v1/gifs/search?q=" + $("#search-term").val() + "&rating=pg&api_key=dc6zaTOxFJmzC";
    console.log(input);
    $.ajax({
     url: input,
      method: "GET",
      success: function(response) {
      var ranNum = Math.floor(Math.random() * response.data.length);
        $(".text-center").html("");
        $(".text-center").append(`<img class='text-center' src= ${response.data[ranNum].images.original.url}>`);
        },
});
});