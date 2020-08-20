function paritonTarkastus() {

    // Määrittelee ja hakee käyttäjön antaman luvun.
    var arvo;
    arvo = parseInt(document.getElementById("luku").value);

    // Tarkistaa onko antama luku pariton vai parillinen.
    if(arvo%2 == 0)
    {
      parillinen();
      //document.write("Antamasi luku on parillinen");
    }
    else {
      pariton();
      //document.write("Antamasi luku on pariton");
    }
  }


  function parillinen() {
    var x = document.createElement("h1");

    x.textContent = "Antamasi luku on parillinen.";
    x.setAttribute("id", "Div1");
    document.body.appendChild(x)
  }

  function pariton() {
    var x = document.createElement("h1");

    x.textContent = "Antamasi luku on pariton.";
    x.setAttribute("id", "Div1");
    document.body.appendChild(x)
  }


  // Poistaa napin käytöstä.
  function disableButton() {
    document.getElementById("nappi").disabled = "true";
  }
