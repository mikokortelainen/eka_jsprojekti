function ajoika() {

  // Hakee käyttäjän antaman luvun.
  var ika = parseInt(document.getElementById('ika').value);


  if(ika < 15) {
    pyora();
    //document.write("Voit ajaa polkupyoraa");
  }
else if (ika < 18 ) {
  mopo();
  //document.write("Voit ajaa mopoa");
}

else {
  auto();
  //document.write("Voit ajaa autoa");
}

}

// Luo uuden h1 tekstin.
function pyora() {
  var x = document.createElement("h1");
  x.textContent = "Voit ajaa polkupyoraa!";
  document.body.appendChild(x)
}

// Luo uuden h1 tekstin.
function mopo() {
  var x = document.createElement("h1");
  x.textContent = "Voit ajaa mopoa!";
  document.body.appendChild(x)
}

// Luo uuden h1 tekstin.
function auto() {
  var x = document.createElement("h1");
  x.textContent = "Voit ajaa autoa!";
  document.body.appendChild(x)
}


// Poistaa napin käytöstä.
function disableButton() {
  document.getElementById("nappi").disabled = "true";
}
