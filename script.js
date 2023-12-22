window.addEventListener('DOMContentLoaded', (event) => {
    const apiKey = '8b7e71e7113d7ce6ab836bfa470c48c2';
    let city = 'Odessa';

    const inpCity = document.getElementById('inp-city');
    const weatherElement = document.getElementById('weather');
    const weatherElement2 = document.getElementById('weather2');
    const iconw = document.getElementById('img');
    const cit = document.getElementById('city');
    const humidity = document.getElementById('humidity');
    const tempmin = document.getElementById('temp-min');
    const latitude = document.getElementById('coord-lat');

    inpCity.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            city = inpCity.value;
            FuncWeather(city);
        }
    });

    function FuncWeather(cityName) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(url).then((response) => response.json()).then((data) => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                cit.innerText = `${data.name} ${data.sys.country}`;
                humidity.innerHTML = `Влажность: ${data.main.humidity}%`;
                tempmin.innerHTML = `Мин.т: ${data.main.temp_min}°C`;
                latitude.innerHTML = `Широта: ${data.coord.lat}`;
                iconw.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                weatherElement.innerHTML = ` ${temperature}°C`  ;
                weatherElement2.innerHTML = `${description}`;
            })
            .catch((error) => {
                console.error('Произошла ошибка:', error);
            });
    }

    FuncWeather(city);
});