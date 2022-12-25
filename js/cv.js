
//con jquery
let nombre;
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        infoPersonal = data.results[0];
        console.log(infoPersonal);
        nombre= infoPersonal.name.first;            

      
    }
  });
 
//con js
  fetch ('https://randomuser.me/api/')
  .then(response => response.json())
  .then(json => console.log(json.results[0].gender))

 