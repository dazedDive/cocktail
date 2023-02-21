import React, { useState } from 'react';
import { ImGlass2 } from "react-icons/im";
import axios from 'axios';

const SearchForm = ({mode}) => {
    const baseUrl = "www.thecocktaildb.com/api/json/v1/1/search.php?";
    const [endPoint, setEndPoint] = useState('');

    const handleChange = (e) =>{
        e.preventDefault();
        setEndPoint(e.target.value);
    }
    console.log(mode);
    console.log(baseUrl+mode+endPoint);

    const searchGo = () =>{
        fetch(baseUrl+mode+endPoint)
        .then(rep=>console.log(rep))

    }
    return (
        <div className="relative top-2 left-1/3">
        <form className="rounded-md ... bg-lime-500 w-1/2 p-3">
            <span className="flex flex-row">
                <label htmlFor="search" className="flex flex-row text-xl">Search by <ImGlass2 className="mt-1 ml-2 mr-5"/></label>
                <input type="text" id="search" name="searchCocktail" className="w-3/4 px-3"
                value={endPoint}
                onChange={handleChange}></input>
                <button className="rounded-md ... mx-2 bg-black text-white px-4 hover:text-lime-400"
                onClick={(e)=>{e.preventDefault(); searchGo()}}>Go!</button>
            </span>
        </form>
        </div>
    );
};

export default SearchForm;