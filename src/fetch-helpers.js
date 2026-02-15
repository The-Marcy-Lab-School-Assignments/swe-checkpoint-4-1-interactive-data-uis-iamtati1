export const getProducts = () => {
    return fetch('https://dummyjson.com/products')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Fetch failed. ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            return { data: data.products, error: null };
        })
        .catch((error) => {
            return { data: null, error };
        });
};


export const getProductById = (id) => {
    return fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Fetch failed. ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            return { data, error: null };
        })
        .catch((error) => {
            return { data: null, error };
        });
};


export async function searchProducts(query) {
    try {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${query}`
        );

        if (!response.ok) {
            throw new Error(`Fetch failed. ${response.status}`);
        }

        const data = await response.json();

        return { data: data.products, error: null };
    } catch (error) {
        return { data: null, error };
    }
}

