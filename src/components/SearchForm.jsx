import React, { useState } from 'react';
import { ImGlass2 } from "react-icons/im";
import Content from './Content';
import NavDrinks from './NavDrinks';

const SearchForm = ({mode}) => {
    const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
    const [endPoint, setEndPoint] = useState('');
    const [drinks, setDrinks] = useState();

    const handleChange = (e) =>{
        e.preventDefault();
        setEndPoint(e.target.value);
    }

    const searchGo = () =>{
        try{
        fetch(baseUrl+mode+endPoint)
        .then(rep=>rep.json())
        .then(json=>setDrinks(json))
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="relative top-2 left-1/4">
        <form className="rounded-md ... bg-lime-500 w-1/2 p-3">
            <span className="flex flex-row">
                <label htmlFor="search" className="flex flex-row text-xl">Search by <ImGlass2 className="mt-1 ml-2 mr-5"/></label>
                <input type="text" id="search" name="searchCocktail" className="w-3/4 px-3"
                value={endPoint}
                onChange={handleChange}></input>
                <button className="rounded-md ... mx-2 bg-black text-white px-4 hover:text-lime-400 font-bodyFont"
                onClick={(e)=>{e.preventDefault(); searchGo()}}>Go!</button>
            </span>
        </form>
        <NavDrinks
        drinks={drinks}/>
        </div>
    );
};

export default SearchForm;