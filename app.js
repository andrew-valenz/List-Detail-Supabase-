/* Imports */
import { getMinerals } from './fetch-utils.js';
import { renderMineralCard } from './render-utils.js';

const mineralListContainer = document.getElementById('mineral-list-container');

/* Events */
Window.addEventListener('load', async () => {
    const minerals = await getMinerals();

    for (let mineral of minerals) {
        const mineralEl = renderMineralCard(mineral);
        mineralListContainer.append(mineralEl);
    }
});
