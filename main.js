$(document).ready(function(){

   //Ciclo che genera 64 celle
   for (var i = 0; i < 36; i++) {
      $('.grid-container').append( "<div id=" + i + " class=grid-item></div>");
   }

   //Distribuisco all'inizio del gioco quali quadratini devono essere settati come bombe
   var bombs = distributeBombs();
   // console.log(bombs);
   // console.log(typeof(bombs[0]));

   $('.grid-item').click(function(){

      var id = parseInt(this.id);

      if ( bombs.includes(id) ) {

         if ( !($(this).hasClass('bg-red')) ) {
            $(this).addClass('bg-red');
            updateScores('bg-red');
            //updateBombs();
         }

      } else {
         if ( !($(this).hasClass('bg-green')) ) {
            $(this).addClass('bg-green');
            updateScores('bg-green');
            //updatePoints();
         }
      }

   });

});


//Funzione che assegna casualmente 15 bombe ai quadrati della griglia. Restituisce
//un array contenente gli indici dei quadrati ai quali sono state assegnate le bombe
function distributeBombs() {
   var bombs = new Array();
   var i = 0;
   do {
      var whatIsAbomb = randomNumber(0, 63);
      if ( !(bombs.includes(whatIsAbomb)) ) {
         bombs.push(whatIsAbomb);
         i++;
      }
   } while ( i < 15 )
   console.log(bombs);
   return bombs;
}


//Funzione che genera un numero casuale compreso tra l'estremo inferiore start
//e l'estremo superiore end, inclusi.

function randomNumber(start, end) {
   return Math.floor(Math.random() * (end - start + 1)) + start;
}
