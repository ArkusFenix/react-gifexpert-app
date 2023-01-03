import React from 'react';

export const GifGridItem = ({id, title, url}) => {
    //props already include id, title and url
    console.log('GifGridItem Img:', {id, title, url});
    
    return(
        <div className = "card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src = {url} alt = {title} />
        </div>
    );
};