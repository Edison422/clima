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


}







