const apiKey = '46143804-c250369a659784c87f3539553';

export function searchImages(query) {
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error()
        }
        return response.json();
    })
    .then(data => {
        return data.hits;
    })
    .catch(error => {
        console.error('Error fetching images:', error);
        throw error;
    });
}

