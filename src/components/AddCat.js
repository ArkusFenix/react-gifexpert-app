import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCat = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('Write category to add');
    
    const handleInputchange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length> 2) {
            setCategories(cats => [inputValue, ...cats ]);
            console.log('Submit done');
        }
    };

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <h1>Value to add: {inputValue}</h1>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputchange}
                />
            </form>
        </div>
    )
};

//export default AddCat;

AddCat.propTypes = {
    setCategories: PropTypes.func.isRequired
};