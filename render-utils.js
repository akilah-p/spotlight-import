export function renderStock(stockObject) {
    const div = document.createElement('div');
    div.classList.add('class-div');


    const h2 = document.createElement('h2');
    h2.textContent = `Stock Name: ${stockObject.name}`;

    const p = document.createElement('p');
    p.textContent = `${stockObject.market} has a cap of ${stockObject.caps}`;

    div.append(h2, p);
    return div;

}

export function renderAnimal(animalObject) {
    const div = document.createElement('div');
    div.classList.add('class-div');

    const h2 = document.createElement('h2');
    h2.textContent = `Animal Name:${animalObject.name}`;

    const p = document.createElement('p');
    p.textContent = `Scientific Name: ${animalObject.scientific}`;

    const pa = document.createElement('p');
    pa.textContent = `Personality: ${animalObject.personality}`;


    div.append(h2, p, pa);
    return div;
}

export function renderCompany(companyObject) {
    const div = document.createElement('div');
    div.classList.add('class-div');

    const h2 = document.createElement('h2');
    h2.textContent = `Name: ${companyObject.name} Ein: ${companyObject.ein}`;

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
    p.textContent = `Call Now: ${avatarObject.phone}. City: ${avatarObject.city}`;


    div.append(img, p,);
    return div;
}

    // const ul = document.createElement('ul');
    // for (let color of avatarObject.colors) {
    //     const li = document.createElement('li');
    //     li.textContent = color;
    //     ul.append(li);





