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



const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}%`;
}

// setGaugeValue(gaugeElement, 1);