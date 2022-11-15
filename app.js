/* Imports */

import { getMinerals } from './fetch-utils.js';

/* Get DOM Elements */

/* State */

/* Events */
Window.addEventListener('load', async () => {
    const params = await getMinerals();
    for (let mineral of minerals) {
        const mineralEl = renderMineral(mineral);
        mineralContainer.append(mineralEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
