const btnBooks = document.getElementById('btnBooks');
const btnUsers = document.getElementById('btnUsers');
const results = document.getElementById('results');

async function getData(params) {
    const response = await fetch(`http://localhost:3000/${params}`);
    const data = await response.json();
    return data;
};
btnBooks.addEventListener('click', async () => {
    try {
        const data = await getData('books');
        results.innerHTML = data.map(element => {
            const {titulo, imagen, autor, fechaPublicacion} = element;
            return `
            <li>
            <h2>${titulo}</h2>
            <img src="${imagen}" alt="">
            <p>${autor}</p>
            <p>${fechaPublicacion}</p>
            </li>
            `
        }).join("");
    } catch (error) {
       console.log(error);
       results.innerHTML ='<p>Books not found</p>'
    }
});
btnUsers.addEventListener('click', async () => {
    console.log('click dado');
    try {
        const data = await getData('users');
        results.innerHTML = data.map(element => {
            const {nombre, apellidos, correo, coleccion, wishlist} = element;
            return `
            <li>
            <h2>${nombre} ${apellidos}</h2>
            <p>${correo}</p>
            <p>${coleccion}</p>
            <p>${wishlist}</p>
            </li>
            `
        }).join("");
    } catch (error) {
       console.log(error);
       results.innerHTML ='<p>Books not found</p>'
    }
});