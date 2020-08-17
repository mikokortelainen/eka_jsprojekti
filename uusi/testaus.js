
// Vertailun funktio.

function vertaile() {

  var luku1, luku2, laske;

  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);


  if (luku1 == luku2) {
    document.write("Luvut on yhtäsuuret");

  }
  else if (luku1 < luku2) {
    document.write(luku2 + " On suurempi kuin "+ luku1);
  }
else {
  document.write(luku1 + " On suurempi kuin "+ luku2);
  }
}



// Yhteenlaskun funktio.

function laskeYhteen() {
var luku1, luku2, laske;

luku1 = parseInt(document.getElementById('eka').value);
luku2 = parseInt(document.getElementById('toka').value);
// Yhteenlasku.
laske = luku1 + luku2;


var str = document.getElementById("loppuLasku").innerHTML;
var res = str.replace("0", laske);
document.getElementById("loppuLasku").innerHTML = res;
}



// Kertolaskun funktio.

function kerro() {

  var luku1, luku2, laske;

  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  // Kertolasku.
  laske = luku1 * luku2;

  var str = document.getElementById("loppuLasku").innerHTML;
  var res = str.replace("0", laske);
  document.getElementById("loppuLasku").innerHTML = res;
}



// Jakolaskun funktio.

function jaa() {

  var luku1, luku2, laske;

  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  // Jakolasku.
  laske = luku1 / luku2;

  var str = document.getElementById("loppuLasku").innerHTML;
  var res = str.replace("0", laske);
  document.getElementById("loppuLasku").innerHTML = res;
}
