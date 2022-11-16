/* Imports */
import { getAllMinerals } from './fetch-utils.js';
import { renderMineralCard } from './render-utils.js';

const mineralListContainer = document.getElementById('mineral-list-container');

/* Events */
window.addEventListener('load', async () => {
    const minerals = await getAllMinerals();

    for (let mineral of minerals) {
        const mineralEl = renderMineralCard(mineral);
        console.log(mineralEl);
        mineralListContainer.append(mineralEl);
    }
});
