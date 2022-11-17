export function renderStock(stockObject) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = stockObject.name;

    const p = document.createElement('p');
    p.textContent = `${stockObject.name} is in ${stockObject.market} and has a cap of ${stockObject.caps}`;

    div.append(h2, p);
    return div;

}



// export function renderAnimal(animalObject) {
//     const div = document.createElement('div');

//     const h2 = document.createElement('h2');
//     h2.textContent = animalObject.name;

//     const p = document.createElement('p');
//     p.textContent = `${animalObject.name} is in ${stockObject.market}`;




//     const ul = document.createElement('ul');
//     for (let cap of stockObject.caps) {
//         const li = document.createElement('li');
//         li.textContent = cap;
//         ul.append(li);
//     }
//     div.append(h2, p, ul);
//     return div;
// }
