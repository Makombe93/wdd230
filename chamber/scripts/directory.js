const baseURL = "https://makombe93.github.io/wdd230/";
const membersURL = "https://makombe93.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

function displayMembers(members) {
    const directoryContainer = document.querySelector('.directory-container');
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        const name = document.createElement('h2');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

        const website = document.createElement('p');
        website.innerHTML = `Website: <a href="${member.website}" target="_blank">${member.website}</a>`;

        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.membership_level}`;

        // Appending elements to memberCard
        memberCard.appendChild(name);
        memberCard.appendChild(address);
        memberCard.appendChild(phone);
        memberCard.appendChild(website);
        memberCard.appendChild(membershipLevel);

        // Appending memberCard to directoryContainer
        directoryContainer.appendChild(memberCard);
    });
}

getMembers();
