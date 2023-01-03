import React, {useEffect, useState} from 'react';
import { AddCat } from './components/AddCat';
import { GifGrid } from './components/GifGrid';

export const GifXpertApp = () => {
    const categories = ['Dragon Ball', 'Saint Seiya', 'Batman'];
    
    const [cats, setCategories] = useState(['Dragon Ball']);

    const handleAdd = () => {
        setCategories(cats => [...cats, 'Spiderman']);
    };
    console.log('Categories:', cats);  

    return(
        <div>
            <h2>Gif Expert App</h2>
            <AddCat setCategories={setCategories}/>
            <hr />
            
            <button onClick={handleAdd}>Add Spiderman</button>

           {/*} <h3>Categories Raw</h3> 
            {
                categories
            }

            <h3>Categories List</h3>
            <ol>
                <li>DB</li>
                <li>SS</li>
                <li>Batman</li>
            </ol>

            <h3>Categories Map list with index i</h3>
            <ol>
                {
                    categories.map((cat, i) => {
                        return <li>{i +1} {cat}</li>
                    })
                }
            </ol>

            <h3>Categories List</h3>
            <ol>
                {
                    categories.map(cat => {
                        return <li key={ cat }> { cat } </li>
                    })
                }
            </ol>

            <h3>Categories List Add Element</h3>
            <ol>
                {
                    cats.map(cat => {
                        return <li key={ cat }> { cat } </li>
                    })
                }
            </ol>
            */}
            <h3>Categories List with Grid</h3>
            <ol>
                {
                    cats.map(cat => (
                        <GifGrid 
                            key = {cat}
                            category = {cat}
                        />
                    ))
                }
            </ol>
        </div>
    )
};

export default GifXpertApp;