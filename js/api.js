//Funcion dentro de ejecutar funcion
function llamar(){
    let busqueda=document.getElementById('inputS').value;
    console.log(busqueda);
    return busqueda;
}

//Ejecutar la llamada a la API
function ejecutarBusqueda(){
    let valor=llamar();
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${valor}&APPID=16ce1dfa3927bddc946d38382bae10ad
    `).then((res)=>{
        res.json().then((json)=>{
            console.log(json);
            datosSidebar(json);
        })
    })
}

function datosSidebar(json){
    document.getElementById('sidebar__tiempo--logo').innerHTML=`<img src="https://openweathermap.org/img/wn/${json.weather[0].icon}@4x.png">`
    document.getElementById('sidebar__tiempo--clima').innerText=`${parseInt(json.main.temp)-273}`;
    document.getElementById('sidebar__tiempo--hora').innerText=`${calcTime(cambiar(json.timezone))}`;
    setGaugeValue(gaugeElement,json.clouds.all/100);
    document.getElementById('velVientohtml').innerHTML=json.wind.speed+`<span>km/h</span>`;
    document.getElementById('tmax').innerHTML=(json.main.temp_max-273).toFixed(2);
    document.getElementById('tmin').innerHTML=(json.main.temp_min-273).toFixed(2);
    bar = document.querySelector(".progress-bar"),
    counter = document.querySelector(".count"),
    i = 0,
    throttle = 1; // 0-1
  
  (function draw() {
    if (i <= json.main.humidity) {
      var r = Math.random();
  
      requestAnimationFrame(draw);
      bar.style.width = i + "%";
      counter.innerHTML = Math.round(i) + "%";
  
      if (r < throttle) {
        // Simulate d/l speed and uneven bitrate
        i = i + r;
      }
    } else {
      bar.className += " done";
    }
  })();

  document.getElementById('visibilidad').innerHTML=json.visibility/1000+`<span id='km'>km</span>`;
  
  bar2 = document.querySelector(".progress-bar2"),
  counter2 = document.querySelector(".count2"),
  j = 0,
  throttle2 = 1;
  (function draws() {
    if(json.hasOwnProperty("rain")==false){
      return;
    }else{
      if (j <= json.rain['1h']*100) {
        console.log(json.rain['1h']*100);
        var l = Math.random();
    
        requestAnimationFrame(draws);
        bar2.style.width = j + "%";
        counter2.innerHTML = Math.round(j) + "%";
    
        if (l < throttle2) {
          // Simulate d/l speed and uneven bitrate
          j = j + l;
        }
      } else {
        bar2.className += " done2";
      }
      
    }
  })();
}








