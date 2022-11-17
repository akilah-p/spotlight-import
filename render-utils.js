export function renderStock(stockObject) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = stockObject.name;

    const p = document.createElement('p');
    p.textContent = `${stockObject.name} is in ${stockObject.market} and has a cap of ${stockObject.caps}`;

    div.append(h2, p);
    return div;

}

export function renderAnimal(animalObject) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = animalObject.name;

    const p = document.createElement('p');
    p.textContent = `${animalObject.scientific} and ${animalObject.personality}`;


    div.append(h2, p);
    return div;
}

export function renderCompany(companyObject) {
    const div = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = `${companyObject.name} and ${companyObject.ein}`;

    const p = document.createElement('p');
    p.textContent = companyObject.phrase;

    div.append(h1, p);
    return div;

}
