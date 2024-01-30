document.addEventListener('DOMContentLoaded', function () {
   
    const apiKey = 'b53925a8b4e84c432f80e3b969f6126c;                                                                                                       ';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lusaka&appid=${apiKey}`;

    
    const weatherInfo = document.querySelector('.weather-info');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          
            const temperature = data.main.temp;
            const description = data.weather[0].description;

          
            weatherInfo.innerHTML = `Temperature: ${temperature}°C, Description: ${description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'Unable to fetch weather data';
        });
});
