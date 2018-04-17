/*

   Griglia 6x6, ad ogni click parte una
   richiesta AJAX che prende un
   numero random da 1 a 9.
   Se è <= 5 il quadrato diventa giallo,
   se è > di 5 il quadrato diventa verde.
   Il numero ottenuto appare al centro
   del quadrato

*/

$(document).ready(function(){

   //Ciclo che genera 64 celle
   for (var i = 0; i < 36; i++) {
      $('.grid-container').append( "<div id=" + i + " class=grid-item></div>");
   }

   $('.grid-item').click(function(){

      var itemClicked = $(this);
      var id = parseInt(this.id);

      //Ad ogni click dell'item rimuove la classe, se presente, che inizia con bg-
      itemClicked.removeClass(function (index, css) {
	      return (css.match (/\bbg-\S+/g) || []).join(' '); // removes anything that starts with "page-"
      });

      // if ( itemClicked.hasClass('bg-green') ) {
      //    itemClicked.removeClass('bg-green');
      // } else if ( itemClicked.hasClass('bg-yellow') ) {
      //    itemClicked.removeClass('bg-yellow');
      // }

      console.log("id: " + id );

      // var num = randomNumber(0, 9);
      $.ajax({
         url: "https://www.boolean.careers/api/random/int",
         method: "GET",
         success: function(data, state) {

            if (itemClicked.hasClass('error') ) {
               itemClicked.removeClass('error');
            }

            var randomNumber = data.response;
            console.log(randomNumber);

            itemClicked.text(randomNumber);

            if (randomNumber <= 5) {
               itemClicked.addClass('bg-yellow');
            } else {
               itemClicked.addClass('bg-green');
            }

         },
         error: function(){
            itemClicked.addClass('error');
         }
      });

   });

});
