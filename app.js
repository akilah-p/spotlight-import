/* Imports */
import { fetchStock } from './fetch-utils.js';
import { renderStock } from './render-utils.js';

/* Get DOM Elements */
const stockContainer = document.getElementById('stock-list');


/* Events */
window.addEventListener('load', async () => {
    const stocks = await fetchStock();
    console.log(stocks);

    for (let stock of stocks) {
        const stockEl = renderStock(stock);
        stockContainer.append(stockEl);
    }

});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
