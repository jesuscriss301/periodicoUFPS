let cantidadNoticias= 3;
function cargarNoticias()
{
	let url="https://carlosreneas.github.io/endpoints/noticias.json";
	let articulos="";
	let div="<div class=''>"+"\n";

	let articulo= "<article class='' >"+"\n"+
            " <h3>titulo - categoria- fecha</h3>"+"\n"+
            " <p>@@. <a href='#'>ver más</a></p> "+"\n"+
            "</article>"+"\n";


	fetch(url, {method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{


		for (i=0; i < 3; i++) {

			//if (i==response.length) {break;}
			if (response[i].id == "1") {
				articulo=articulo.replace("#","html/noticias.html");
				articulo+="<form class='' action='html/noticias.html' method='post'>"+"\n"+
				  				"  <input type='hidden' name='id' value='1'>"+"\n"+
									"</form>"+"\n"+
			}
			articulos+=articulo.replace("titulo",response[i].titulo).
							replace("categoria",response[i].categoria).
							replace("fecha",response[i].fecha).
							replace("@@",response[i].descripcion);

		}

		articulos=div+articulos+"\n</div>";
		document.getElementById("noticias-principales").innerHTML = articulos;
    console.log(articulos);

		//pagination(response);
	});

}
function deportes(){
  let url="https://carlosreneas.github.io/endpoints/categoria_deporte.json";
  let articulos="";
  let div="<div class=''>"+"\n"+
            "<h3>Deportes</h3>"+"\n";

  let articulo= "<a href='#'><p>descripcion</p></a>"


  fetch(url, {method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{


    for (i=0; i < response.length; i++) {

      if (response[i].categoria=="deporte") {
        articulos+=articulo.replaceAll("descripcion",response[i].titulo);
      }
    }

    articulos=div+articulos+"\n</div>";
    document.getElementById("deporte").innerHTML = articulos;
    console.log(articulos);

    //pagination(response);
  });

}
function tecnologias(){
  let url="https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";
  let articulos="";
  let div="<div class=''>"+"\n"+
            "<h3>Tecnologís</h3>"+"\n";

  let articulo= "<a href='#'><p>descripcion</p></a>"


  fetch(url, {method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{


    for (i=0; i < response.length; i++) {

      if (response[i].categoria=="tecnologia") {
        articulos+=articulo.replaceAll("descripcion",response[i].titulo);
      }
    }

    articulos=div+articulos+"\n</div>";
    document.getElementById("tecnologia").innerHTML = articulos;
    console.log(articulos);

    //pagination(response);
  });

}
