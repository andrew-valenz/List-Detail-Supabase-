import { getMineral } from '../fetch-utils.js';
import { renderMineralDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('mineral-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const mineral = await getMineral(id);
    const mineralDetailEl = renderMineralDetail(mineral);
    mineralDetailContainer.append(mineralDetailEl);
});
