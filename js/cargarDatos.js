let nombreApellido;
let foto;
let email;
let cel;
let tel;
let infoExtra;

function cargarDatos() {
  nombreApellido = infoPersonal.name.first + " " + infoPersonal.name.last;
  email = infoPersonal.email;
  foto = infoPersonal.picture.large;
  let htmlFoto = " <img class = 'rounded-circle' src = '" + foto + "'alt='Foto personal'>";
  cel = infoPersonal.cell;
  tel= infoPersonal.phone;
  let locationTag = infoPersonal.location;
  ubicacion = locationTag.street.number + " " + locationTag.street.name + " - " + locationTag.city + ", " + locationTag.country;
  //infoExtra = "I'm a " + infoPersonal.dob.age + " years old " + infoPersonal.gender + ", " + "born in " + infoPersonal.nat; 
  
  document.getElementById("imagen").innerHTML = htmlFoto;
  document.getElementById("nombre").innerText = nombreApellido;
  document.getElementById("email").innerText = email;
  document.getElementById("cel").innerText = "Cel: " + cel;
  document.getElementById("tel").innerText = "Tel: " + tel;
  document.getElementById("ubicacion").innerText = ubicacion;
  //document.getElementById("infoExtra").innerText = infoExtra;
  /**let htmlInfoExtra="";
  infoExtra.forEach( element =>
    htmlInfoExtra += '<li>' + element + '</>'
  );
  document.getElementById("ulInfoExtra").innerHTML = htmlInfoExtra;*/ 
 }
