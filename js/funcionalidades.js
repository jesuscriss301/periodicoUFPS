
function cargarNoticias()
{
	let url="https://carlosreneas.github.io/endpoints/noticias.json";
	let articulos="";
	let div="<div class=''>"+"\n";

	let articulo= "<article class='' >"+"\n"+
            " <h3>titulo - categoria- fecha</h3>"+"\n"+
            " <p>@@. <a href='#' name='post' title='ide'>ver más</a> </p> "+"\n"+
            "</article>"+"\n";


	fetch(url, {method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{


		for (i=0; i < 3; i++) {

			//if (i==response.length) {break;}
			if (response[i].id =="1") {
				articulo=articulo.replace("#","html/noticias.html");

			}
			articulos+=articulo.replace("titulo",response[i].titulo).
							replace("categoria",response[i].categoria).
							replace("fecha",response[i].fecha).
							replace("@@",response[i].descripcion).
							replace("ide",response[i].id);

		}

		articulos=div+articulos+"\n</div>";
		document.getElementById("noticias-principales").innerHTML = articulos;


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
			if (response[i].id =="6") {
				articulo=articulo.replace("#","html/noticia6.html");

			}
      if (response[i].categoria=="deporte") {
        articulos+=articulo.replaceAll("descripcion",response[i].titulo);
      }
    }

    articulos=div+articulos+"\n</div>";
    document.getElementById("deporte").innerHTML = articulos;


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


    //pagination(response);
  });

}
function cargarNoticia1(){
  let url="https://carlosreneas.github.io/endpoints/noticia_1.json";
  let articulos="";
  let div="<div class=''>"+"\n";
  let articulo= "<article class='' >"+"\n"+
							"<img src='imagen' alt=''>"+"\n"+
            " <h3>titulo - categoria- fecha</h3>"+"\n"+
            " <p>descripcion. </p> "+"\n"+
						" <p>detalle. </p> "+"\n"+
            "</article>"+"\n";


  fetch(url, {method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{
        articulos+=articulo.replace("titulo",response.titulo).
								replace("categoria",response.categoria).
								replace("fecha",response.fecha).
								replace("descripcion",response.descripcion).
								replace("detalle",response.detalle).
								replace("imagen",response.img);


    articulos=div+articulos+"\n</div>";
    document.getElementById("noticia1").innerHTML = articulos;

    //pagination(response);
  });

}
function cargarNoticia6(){
  let url="https://carlosreneas.github.io/endpoints/noticia_6.json";
  let articulos="";
  let div="<div class=''>"+"\n";
  let articulo= "<article class='' >"+"\n"+
							"<div><img src='imagen' alt=''></div>"+"\n"+
            " <h3>titulo - categoria- fecha</h3>"+"\n"+
            " <p> descripcion. </p> "+"\n"+
						" <p> detalle. </p> "+"\n"+
            "</article>"+"\n";


  fetch(url, {method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{
        articulos+=articulo.replace("titulo",response.titulo).
								replace("categoria",response.categoria).
								replace("fecha",response.fecha).
								replace("descripcion",response.descripcion).
								replace("detalle",response.detalle).
								replace("imagen",response.img);


    articulos=div+articulos+"\n</div>";
    document.getElementById("noticia6").innerHTML = articulos;

    //pagination(response);
  });

}
