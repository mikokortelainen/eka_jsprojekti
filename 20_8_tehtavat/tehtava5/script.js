function valitseKieli()
{
  var language = document.getElementById("kieli").value;

  if(language == "eng")
  {
    alert("Hello world!");
  }
  else if(language == "swe")
  {
    alert("Hej varlden!");
  }
  else {
    alert("Hola mundo!")
  }
}
