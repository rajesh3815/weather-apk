const inputbox = document.getElementById('inputbox')
const searchbbtn = document.getElementById('search-btn')
const weather_image = document.querySelector('.weather-img')
const temp = document.querySelector('.temp')
const desc = document.querySelector('.desc')
const humidity = document.getElementById('humidityy')
const windspeed = document.getElementById('wind-speed')
const locationg=document.querySelector('.location-notfound')
const w_body=document.querySelector('.w-body')

async function checkweather(city) {
    const api_key = "1f989eecbd67d17b9c922f845e2f74d2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(Response =>
        Response.json()
    )

    if (weather_data.cod === '404') {
        console.log("error")
       locationg.style.display="flex";
        w_body.style.display = "none"
        return;
    }
    locationg.style.display="None"
    w_body.style.display="flex"
   

    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    desc.textContent = `${weather_data.weather[0].description}`
    windspeed.innerHTML = `${weather_data.wind.speed}km/H`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    console.log(weather_data.weather[0].main)


    if (weather_data.weather[0].main == 'Clouds') {
        weather_image.src = "/assets/cloud.png"
    } else if (weather_data.weather[0].main == 'Rain') {
        weather_image.src = "/assets/rain.png"
    } else if (weather_data.weather[0].main == 'Clear') {
        weather_image.src = "/assets/clear.png"
    } else if (weather_data.weather[0].main == 'Mist') {
        weather_image.src = "/assets/mist.png"
    } else if (weather_data.weather[0].main == 'Snow') {
        weather_image.src = "/assets/snow.png"
    }

}

searchbbtn.addEventListener('click', () => {
    checkweather(inputbox.value);
})

