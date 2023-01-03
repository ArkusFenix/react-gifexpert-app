import React from 'react';
//import React, { useEffect, useState } from 'react';
import { useFetchGifts } from '../hooks/useFetchGifs';
//import { getGifs } from '../utils/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    //const [images, setImages] = useState([]);
    
    const {data:images, loading} = useFetchGifts(category) ;

    /* useEffect(() => {
        //getGifs();
        getGifs(category)
            .then(setImages);
    }, []); */
    
    //Moved to utils/getGifs.js
    //getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} - CustomHook</h3>
            <div className="card-grid">
            {/*<h3>{category} - Basic</h3>
            <ol>
                {
                    images.map( ({id, title})  => (
                        <li key = {id}>{title}</li>
                    ))    
                }
            </ol>
            */}
            {/* <h3>{category} - GifGridItem</h3>
            {
                images.map(img => (
                    <GifGridItem 
                        key = {img.id}
                        {...img}
                    />
                ))
            } */}

            
            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            {
                images.map(img => (
                    <GifGridItem
                        key = {img.id}
                        {...img}
                    />
                ))
            }
            </div>
        </>
    );
};