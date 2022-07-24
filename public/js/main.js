const submiBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name =  document.getElementById('city_name');
const temp =document.getElementById('temp');
const temp_status =document.getElementById('temp_status');
const getInfo = async (event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "" ){
        city_name.innerText = `Plz write name before search`;
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d86cea5ba43d14a372786703963da616`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
         temp_real_val.innerText = arrData[0].main.temp;
         temp_status.innerText = arrData[0].weather[0].main;
    }catch{
        city_name.innerText = `Plz write city name properly`;
    }
}
}

submiBtn.addEventListener('click',getInfo);