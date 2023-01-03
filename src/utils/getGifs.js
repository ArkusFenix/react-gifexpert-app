export const getGifs = async( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=hwpjKDXAY6w99TB6m4DChqEMfZk6gsok`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    //console.log('Data:', data);
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url
        }
    });

    //console.log('GifGrid-getGifs:', gifs);
    //setImages(gifs);
    return gifs;
};