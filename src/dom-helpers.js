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

        const p = document.createElement('p');
        p.textContent = `$${product.price}`;

        li.append(img, h3, p);
        productsList.append(li);
    });
};


export const renderProductDetails = (product) => {
    const detailsSection = document.querySelector('#product-details');

    detailsSection.classList.remove('hidden');

    document.querySelector('#product-title').textContent = product.title;
    document.querySelector('#product-thumbnail').src = product.thumbnail;
    document.querySelector('#product-thumbnail').alt = product.title;
    document.querySelector('#product-price').textContent = product.price;
    document.querySelector('#product-description').textContent = product.description;
    document.querySelector('#product-rating').textContent = product.rating;
};


export const renderError = (message) => {
    const errorEl = document.querySelector('#error-message');
    errorEl.textContent = message;
};