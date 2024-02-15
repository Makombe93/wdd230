const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather';

async function apiFetch() {
    try {
      const response = await fetch(`${url}?lat=49.7539&lon=6.6412&units=imperial&appid=7618145daad2bbd2425812a3fda0a590`);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);
      } else {
        throw new Error(await response.text());
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  function displayResults(data) {
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const iconCode = data.weather[0].icon;
  
    currentTemp.textContent = `${temperature} °F`;
    captionDesc.textContent = weatherDescription;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${iconCode}@2x.png`);
    weatherIcon.setAttribute('alt', weatherDescription);
  }
  
  apiFetch();