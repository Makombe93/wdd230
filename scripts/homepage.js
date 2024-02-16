document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu');
    const navList = document.querySelector('.navmenu');
    const darkModeBtn = document.getElementById('dark-mode')

    menuBtn.addEventListener('click', function () {
        navList.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    darkModeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let visitCount = localStorage.getItem('visitCount') || 0;
    document.getElementById('count').innerText = visitCount;

    
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
});



const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather';

async function apiFetch() {
    try {
        const response = await fetch(`${url}?lat=-15.414121284003501&lon=28.2819328205179&units=metric&appid=7618145daad2bbd2425812a3fda0a590`);
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

    currentTemp.textContent = `${temperature} °C`;
    captionDesc.textContent = weatherDescription;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${iconCode}@2x.png`);
    weatherIcon.setAttribute('alt', weatherDescription);
}

apiFetch();
