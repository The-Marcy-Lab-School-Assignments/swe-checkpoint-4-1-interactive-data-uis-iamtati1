import { getProducts, getProductById, searchProducts } from './fetch-helpers.js';
import { renderProducts, renderProductDetails, renderError } from './dom-helpers.js';

const productsList = document.querySelector('#products-list');
const searchForm = document.querySelector('#search-form');
const errorEl = document.querySelector('#error-message');


function clearError() {
    errorEl.textContent = '';
}

getProducts().then(({ data, error }) => {
    if (error) {
        renderError(error.message);
    } else {
        renderProducts(data);
    }
});


productsList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) return;

    clearError();

    getProductById(li.dataset.productId)
        .then(({ data, error }) => {
            if (error) {
                renderError(error.message);
            } else {
                renderProductDetails(data);
            }
        });
});


searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearError();

    const formData = new FormData(searchForm);
    const query = formData.get('query');

    const { data, error } = await searchProducts(query);

    if (error) {
        renderError(error.message);
    } else {
        renderProducts(data);
        searchForm.reset();
    }
});