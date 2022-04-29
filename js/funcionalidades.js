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
			articulos+=articulo.replaceAll("titulo",response[i].titulo).
							replaceAll("categoria",response[i].categoria).
							replaceAll("fecha",response[i].fecha).
							replaceAll("@@",response[i].descripcion);
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
  let div="<div class=''>"+"\n";

  let articulo= "<article class='' >"+"\n"+
            " <h3>titulo - categoria- fecha</h3>"+"\n"+
            " <p>@@. <a href='#'>ver más</a></p> "+"\n"+
            "</article>"+"\n";


  fetch(url, {method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{


    for (i=0; i < 3; i++) {

      //if (i==response.length) {break;}
      articulos+=articulo.replaceAll("titulo",response[i].titulo).
              replaceAll("categoria",response[i].categoria).
              replaceAll("fecha",response[i].fecha).
              replaceAll("@@",response[i].descripcion);
    }

    articulos=div+articulos+"\n</div>";
    document.getElementById("noticias-principales").innerHTML = articulos;
    console.log(articulos);

    //pagination(response);
  });

}
