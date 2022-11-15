export function renderMineralCard(mineral) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('mineral-card');

    p.textContent = mineral.name;
    img.src = `./assets/${mineral.color}.jpeg`;
    a.href = `./detail/?id=${mineral.id}`;

    div.append.apply(p, img);

    a.append(div);

    return a;
}

export function renderMineralDetail(mineral) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const crystalSystemEl = document.createElement('p');
    const hardnessEl = document.createElement('p');
    const descriptionEl = document.createElement('p');

    div.classList.add('mineral-detail');

    nameEl.textContent = mineral.name;
    nameEl.classList.add('name');

    colorEl.textContent = mineral.color;
    colorEl.classList.add('color');

    crystalSystemEl.textContent = mineral.crystalSystem;
    crystalSystemEl.classList.add('crystal-system');

    hardnessEl.textContent = mineral.hardness;
    hardnessEl.classList.add('hardness');

    descriptionEl.textContent = mineral.description;
    descriptionEl.classList.add('description');

    img.src = `../assets/${mineral.color}.jpeg`;

    div.append(nameEl, colorEl, crystalSystemEl, hardnessEl, descriptionEl);

    return div;
}
