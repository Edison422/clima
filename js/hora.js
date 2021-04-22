//Cambiar de timezone de la API a UTC
function cambiar(timezone){
    let zona=(parseInt(timezone)*-5)/-18000;
    return zona;
}

//------------
visitortime = new Date();
let zonaSitioActual = -visitortime.getTimezoneOffset()/60;
zonaSitioActual;
//------------


function calcTime(offset) {

    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    let dia=nd.toDateString().split(' ')[0];
    let hora=nd.toLocaleTimeString().substring(0,5);
    let dia__hora=dia+' '+hora;
    return dia__hora;

}





let navigator;

navigator.geolocation.getCurrentPosition(function(position) {
    haz_algo(position.coords.latitude, position.coords.longitude);
  });


$(document).ready(function () {
    //Click al boton para pedir permisos
    $("#pedirvan").click(function () {
        //Si el navegador soporta geolocalizacion
        if (!!navigator.geolocation) {
            //Pedimos los datos de geolocalizacion al navegador
            navigator.geolocation.getCurrentPosition(
                    //Si el navegador entrega los datos de geolocalizacion los imprimimos
                    function (position) {
                        window.alert("nav permitido");
                        $("#nlat").text(position.coords.latitude);
                        $("#nlon").text(position.coords.longitude);
                    },
                    //Si no los entrega manda un alerta de error
                    function () {
                        window.alert("nav no permitido");
                    }
            );
        }
    });

});