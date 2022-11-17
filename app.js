/* Imports */
import { fetchAnimal, fetchStock, fetchCompany, fetchAvatar } from './fetch-utils.js';
import { renderAnimal, renderAvatar, renderCompany, renderStock } from './render-utils.js';

/* Get DOM Elements */
const stockContainer = document.getElementById('stock-list');
const animalContainer = document.getElementById('animal-list');
const companyContainer = document.getElementById('company-list');
const avatarContainer = document.getElementById('avatar-list');

/* Events */
window.addEventListener('load', async () => {
    const stocks = await fetchStock();

    for (let stock of stocks) {
        const stockEl = renderStock(stock);
        stockContainer.append(stockEl);
    }

});

window.addEventListener('load', async () => {
    const animals = await fetchAnimal();

    for (let animal of animals) {
        const animalEl = renderAnimal(animal);
        animalContainer.append(animalEl);

    }
});

window.addEventListener('load', async () => {
    const companies = await fetchCompany();

    for (let company of companies) {
        const companyEl = renderCompany(company);
        companyContainer.append(companyEl);

    }
});

window.addEventListener('load', async () => {
    const avatars = await fetchAvatar();

    for (let avatar of avatars) {
        const avatarEl = renderAvatar(avatar);
        avatarContainer.append(avatarEl);

    }
});



