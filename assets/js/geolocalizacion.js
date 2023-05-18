function Eltiempo(){
    const key = 'bc83d7dd9aacbc1b9931d3d51f41e555';
    const city = 'Santiago';
    const country_ISO_3166 = 'cl';
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.4377756&lon=-70.6504502&appid=bc83d7dd9aacbc1b9931d3d51f41e555';
    //http://api.openweathermap.org/geo/1.0/direct?q=Santiago,cl&limit=1&appid=bc83d7dd9aacbc1b9931d3d51f41e555
    const date = document.getElementById('date');
    const tempimg = document.getElementById('tempimg');
    const temp = document.getElementById('temp');
    const weather = document.getElementById('weather');
    const range = document.getElementById('range');
    const pais = document.getElementById('pais')
    
    fetch(url)
    .then((response)=>{
        if (response.ok) {
            console.log("response.text: ", response.text);
            return response.text();
        } else {
            console.log("response.status: ", response.status);
            throw new Error(response.status);
        }
    })
    .then((data)=> {
        const dataJson = JSON.parse(data);
        pais.innerHTML = `Santiago, ${dataJson.sys.country}`;
        date.innerHTML = (new Date()).toLocaleDateString(); //pais
        
        range.innerHTML = toCelsius(dataJson.main.temp_min)+'/'+toCelsius(dataJson.main.temp_max);// rango
        console.log((new Date()).toLocaleDateString());
        
        var fechaActual = new Date();
        var hora = fechaActual.getHours();
        var minutos = fechaActual.getMinutes();
        var segundos = fechaActual.getSeconds();

        temp.innerHTML = `<i class="bi bi-moon-fill"></i><i class="bi bi-thermometer-half"></i>`+toCelsius(dataJson.main.temp)+`°C`; //temperatura

        
    })
    .catch((err)=>{
        console.log("ERROR: ",err.message)
    })
}


function toCelsius(kelvin){
    return Math.round(kelvin - 273.15)
}

Eltiempo();