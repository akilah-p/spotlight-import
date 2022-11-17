export function renderStock(stockObject) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = `Stock Name: ${stockObject.name}`;

    const p = document.createElement('p');
    p.textContent = `${stockObject.name} is in ${stockObject.market} and has a cap of ${stockObject.caps}`;

    div.append(h2, p);
    return div;

}

export function renderAnimal(animalObject) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = `Name:${animalObject.name}`;

    const p = document.createElement('p');
    p.textContent = `Scientific Name: ${animalObject.scientific} and Personality: ${animalObject.personality}`;


    div.append(h2, p);
    return div;
}

export function renderCompany(companyObject) {
    const div = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = `Name: ${companyObject.name} and Ein ${companyObject.ein}`;

    const p = document.createElement('p');
    p.textContent = `Company Slogan: ${companyObject.phrase}`;

    div.append(h1, p);
    return div;

}

export function renderAvatar(avatarObject) {
    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = avatarObject.image;

    const p = document.createElement('p');
    p.textContent = `Call Now: ${avatarObject.phone}. Located in a city near you ${avatarObject.city}`;



    const ul = document.createElement('ul');
    for (let color of avatarObject.colors) {
        const li = document.createElement('li');
        li.textContent = color;
        ul.append(li);
    }

    div.append(img, p);
    return div;

}
