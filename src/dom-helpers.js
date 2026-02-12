export const renderProducts = (products) => {
    const productsList = document.querySelector('#products-list');
    const productCount = document.querySelector('#product-count');
    productsList.innerHTML = '';
    productCount.textContent = products.length;

    products.forEach((product) => {
        const li = document.createElement('li');
        li.dataset.productId = product.id;

        const img = document.createElement('img');
        img.src = product.thumbnail;
        img.alt = product.title;

        const h3 = document.createElement('h3');
        h3.textContent = product.title;

        const info = document.createElement('p');
        info.textContent = `$${product.price}`;

        li.append(img, h3, info);
        productsList.append(li);
    })
};


export const renderProductDetails = (product) => {
    detailsSection.classList.remove('hidden');

    detailsSection.innerHTML = '';
    detailsSection.removeAttribute('hidden');

    const li = document.createElement('li');
    li.dataset.productId = product.id;

    const img = document.createElement('img');
    img.src = product.thumbnail;
    img.alt = product.title;

    const h2 = document.createElement('h2');
    h2.textContent = product.title;

    const info = document.createElement('p');
    info.textContent = `${product.count} · ${product.price}`;

    const productsH3 = document.createElement('h3');
    productsH3.textContent = 'product-description';

    const productsList = document.createElement('ul');
    product.details.forEach((product) => {
        const li = document.createElement('li');
        li.textContent = product;
        productsList.append(li);
    });

    detailsSection.append(h2, img, info, productssH3, productsList);
};


export const renderError = (message) => {

}