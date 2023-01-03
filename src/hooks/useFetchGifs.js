import React, { useEffect, useState } from 'react';
import { getGifs } from '../utils/getGifs';

export const useFetchGifts = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    console.log('useFetchGifts-getGifs', imgs);
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 1500);
            });
    }, [category]);

    return state;
};

