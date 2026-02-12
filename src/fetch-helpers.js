export const fetchData = (url) => {

};

export const getProducts = () => {
    return fetch('https://dummyjson.com/products')
        .then((response) => {
            if (!response.ok) {
                throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            return { data: data.products, error: null };
        })
        .catch((error) => {
            return { data: null, error: error };
        });
};
export const getProductById = (id) => {
    return fetch(`https://dummyjson.com/products/1`)
        .then((response) => {
            if (!response.ok) {
                throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            return { data: responseData, error: null };
        })
        .catch((error) => {
            return { data: null, error: error };
        });
};


export async function searchProducts(query) {
    const URL = (`https://dummyjson.com/products/search?q=phone`);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to send message.');
        }

        const responseData = await response.json();

        return { data: responseData, error: null };

    } catch (error) {
        return { data: null, error: error };
    }
}

