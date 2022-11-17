/* Imports */
import { fetchAnimal, fetchStock, fetchCompany } from './fetch-utils.js';
import { renderAnimal, renderCompany, renderStock } from './render-utils.js';

/* Get DOM Elements */
const stockContainer = document.getElementById('stock-list');
const animalContainer = document.getElementById('animal-list');
const companyContainer = document.getElementById('company-list');

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


