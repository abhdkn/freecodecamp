function newQuote(){  
    $.ajaxSetup({ cache: false });
  $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(response) {
    console.log("json:",response);
    
$(".getQuote").html('<h2>' + JSON.stringify(response.quote) + '</h2>');
$(".getAuthor").html('<h3> - ' + JSON.stringify(response.author) + '</h3>');
    Quote = response.quote;
      Author = response.author;
    
    $('.tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + Quote + '" ' + Author));
    
});
};