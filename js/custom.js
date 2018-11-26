$( document ).ready(function() {
    var x = Math.floor((Math.random() * 100) + 1);
    $('.goodreads').html('"'+quotes[x]["text"]+'"');
});