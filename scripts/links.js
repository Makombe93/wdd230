
const baseURL = "https://makombe93.github.io/wdd230/";
const linksURL = "https://makombe93.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('activity-links');
    weeks.forEach(week => {
        const weekElement = document.createElement('div');
        weekElement.classList.add('week');
        const weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        weekElement.appendChild(weekTitle);
        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;
            listItem.appendChild(linkElement);
            linksList.appendChild(listItem);
        });
        weekElement.appendChild(linksList);
        linksContainer.appendChild(weekElement);
    });
}

getLinks();
