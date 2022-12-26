$(document).ready(function () {
  //con jquery
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        infoPersonal = data.results[0];
        console.log(infoPersonal);
        cargarDatos(infoPersonal);
        
        
    }
  });
  
});
 
