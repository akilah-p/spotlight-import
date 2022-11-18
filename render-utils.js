export function renderStock(stockObject) {
    const div = document.createElement('div');
    div.classList.add('class-div');

    const span = document.createElement('span');
    span.textContent = 'Name';

    const h2 = document.createElement('h2');
    h2.textContent = `${stockObject.name}`;

    const p = document.createElement('p');
    p.textContent = `${stockObject.name} is in ${stockObject.market} and has a cap of ${stockObject.caps}`;

    div.append(h2, p);
    return div;

}

export function renderAnimal(animalObject) {
    const div = document.createElement('div');
    div.classList.add('class-div');

    const h2 = document.createElement('h2');
    h2.textContent = `Name:${animalObject.name}`;

    const p = document.createElement('p');
    p.textContent = `Scientific Name: ${animalObject.scientific} and Personality: ${animalObject.personality}`;


    div.append(h2, p);
    return div;
}

export function renderCompany(companyObject) {
    const div = document.createElement('div');
    div.classList.add('class-div');

    const h2 = document.createElement('h2');
    h2.textContent = `Name: ${companyObject.name} and Ein ${companyObject.ein}`;

    const p = document.createElement('p');
    p.textContent = `Company Slogan: ${companyObject.phrase}`;

    div.append(h2, p);
    return div;

}

export function renderAvatar(avatarObject) {
    const div = document.createElement('div');
    div.classList.add('class-div');

    const img = document.createElement('img');
    img.src = avatarObject.image;

    const p = document.createElement('p');
    p.textContent = `Call Now: ${avatarObject.phone}. Located in a city near you ${avatarObject.city}`;

    div.append(img, p,);
    return div;
}

    // const ul = document.createElement('ul');
    // for (let color of avatarObject.colors) {
    //     const li = document.createElement('li');
    //     li.textContent = color;
    //     ul.append(li);





