function laskeMinuutit() {
  var min, tun, laske;




  // Etsi elementit joissa tietty id.
  tun = document.getElementById('tunnit').value;
  min = document.getElementById('minuutit').value;

  // Muuntaa käyttäjän antaman luvun numeroiksi.
  tun = parseInt(tun);
  min = parseInt(min);


  // Muuntaa tunnit minuuteiksi ja lisää minuutit.
  laske = tun * 60 + min;

  // Kirjoittaa lopputuloksen.
  //document.write('Nyt on kulunut '+ laske + ' minuuttia');

  document.body.innerHTML = document.body.innerHTML.replace('0 minuuttia', tun+' tunti(a) ja '+min+' minuutti(a), on '+laske+' minuuttia.');








}
