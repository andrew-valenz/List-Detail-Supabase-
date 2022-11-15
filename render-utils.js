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
