let nombreApellido;
let foto;
let email;
let cel;
let tel;

function cargarDatos() {
  nombreApellido = infoPersonal.name.first + " " + infoPersonal.name.last;
  email = infoPersonal.email;
  foto = infoPersonal.picture.large;
  let htmlFoto = " <img class = 'rounded-circle' src = '" + foto + "'alt='Foto personal'>";
  cel = infoPersonal.cell;
  tel = infoPersonal.phone;
  let locationTag = infoPersonal.location;
  ubicacion = locationTag.street.number + " " + locationTag.street.name + " - " + locationTag.city + ", " + locationTag.country;

  document.getElementById("imagen").innerHTML = htmlFoto;
  document.getElementById("nombre").innerText = nombreApellido;
  document.getElementById("email").innerText = email;
  document.getElementById("cel").innerText = "Cel: " + cel;
  document.getElementById("tel").innerText = "Tel: " + tel;
  document.getElementById("ubicacion").innerText = ubicacion;

}
