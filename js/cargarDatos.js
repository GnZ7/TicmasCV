let nombre;
let apellido;
let foto;

function cargarDatos() {
  nombre = infoPersonal.name.first;
  apellido = infoPersonal.name.last;
  foto = infoPersonal.picture.large;
  
  let htmlFoto = " <img class = 'rounded-circle' src = '" + foto + "'>";
  //$('#imagen').append(htmlInfo);
  document.getElementById("imagen").innerHTML = htmlFoto;   

 }
