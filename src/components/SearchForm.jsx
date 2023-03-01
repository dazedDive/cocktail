import React, { useState } from 'react';
import { ImGlass2 } from "react-icons/im";
import axios from 'axios';
import NavDrinks from './NavDrinks';

const SearchForm = ({mode}) => {
    console.log(mode);
    const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
    const [endPoint, setEndPoint] = useState('');
    const [drinks, setDrinks] = useState();

    const handleChange = (e) =>{
        e.preventDefault();
        setEndPoint(e.target.value);
    }

    const searchGo = () =>{
        try{
            axios.get(baseUrl+mode.mode+endPoint)
            .then(response=>setDrinks(response.data))
        }catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="relative top-2 left-1/4">
        <form className="rounded-md ... bg-lime-500 w-1/2 p-3">
            <span className="flex flex-row">
                <label htmlFor="search" className="flex flex-row text-xl">Search {mode?.searchMode}<ImGlass2 className="mt-1 ml-2 mr-5"/></label>
                <input type="text" id="search" name="searchCocktail" className="w-3/4 px-3"
                value={endPoint}
                onChange={handleChange}></input>
                <button className="rounded-md ... mx-2 bg-black text-white px-4 hover:text-lime-400 font-bodyFont"
                onClick={(e)=>{e.preventDefault(); searchGo();setEndPoint('')}}>Go!</button>
            </span>
        </form>
        {drinks &&
        <NavDrinks
        drinks={drinks}/>
        }
        </div>
    );
};

export default SearchForm;