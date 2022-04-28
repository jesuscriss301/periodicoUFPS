function cargarfecha()
{
  const date = new Date();
  const [month, day, year]= [date.getMonth(), date.getDate(), date.getFullYear()];
  var m = "<p class='fecha'> @@/&&/$$ </p>";
  m= m.replace("@@",date.getDate()).replace("&&",date.getMonth()).replace("$$",date.getFullYear())
  document.getElementById("fecha-hoy").innerHTML=m;
}
