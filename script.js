document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name!');
    }
});

function getWeather(city) {
    const apiKey = '4122c36dd74d685afb11f79b6955eea3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.log(error));
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-info');
    const { main, name, sys, weather, wind } = data;

    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    const weatherHtml = `
        <h2>${name}, ${sys.country}</h2>
        <img class="weather-icon" src="${iconUrl}" alt="Weather icon">
        <p class="temperature">${Math.round(main.temp)}°C</p>
        <p>${weather[0].description}</p>
        <div class="details">
            <div><strong>Humidity:</strong> ${main.humidity}%</div>
            <div><strong>Wind Speed:</strong> ${wind.speed} m/s</div>
        </div>
    `;

    weatherContainer.innerHTML = weatherHtml;
}
