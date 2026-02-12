import { getProducts } from './fetch-helpers.js';
import { renderProducts, renderError } from './dom-helpers.js';

getProducts().then((products) => {
    if (products.data === null) {
        renderError('Failed to load products.');
    } else {
        renderProducts(products.data);
    }
});

const productsList = document.querySelector('#products-list');
productsList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) return;

    getProductById(li.dataset.productId).then((product) => {
        if (product === null) {
            renderError('Failed to load product details.');
        } else {
            renderProductDetails(product);
        }
    });
});

const searchProducts = document.querySelector('#search-form');
productsList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) return;

    const id = li.dataset.id;

    getProductById(li.dataset.productId).then((product) => {
        if (product === null) {
            renderError('Failed to load product details.');
        } else {
            renderProducts(product);
        }
    });
});