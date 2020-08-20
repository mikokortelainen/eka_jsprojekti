function lukuJarjestus()
{

  var luku1, luku2, luku3;

  luku1 = parseInt(document.getElementById("eka").value);
  luku2 = parseInt(document.getElementById("toka").value);
  luku3 = parseInt(document.getElementById("kolmas").value);


  // Kirjoittaa antamasi luvut ja tekee rivinvaihdon.
  document.write("Annoit numerot: " + luku1 + " " + luku2 + " " + luku3 + "</br>");

  // Järjestää luvut
  if(luku1 < luku2 && luku1 < luku3)
  {
    if(luku2 < luku3)
    {
      document.write("Jarjestettuna: " + luku1 + " " + luku2 + " " + luku3);
    }
    else {
      document.write("Jarjestettuna " + luku1 + " " + luku3 + " " + luku2);
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1<luku3)
    {
      document.write("Jarjestettuna " + luku2 + " " + luku1 + " " + luku3);
    }
    else {
      document.write("Jarjestettuna " + luku2 + " " + luku3 + " " + luku1);

    }
  }
  else if(luku3 < luku1 && luku3 < luku2)
    {
      if(luku1 < luku2)
      {
        document.write("Jarjestettuna " + luku3 + " " + luku1 + " " + luku2);
      }
      else {
        document.write("Jarjestettuna " + luku3 + " " + luku2 + " " + luku1);

      }
    }
  }
