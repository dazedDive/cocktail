import React, { useState } from 'react';
import Content from './Content';

const NavDrinks = ({drinks}) => {
const [drinkLink, setDrinkLink] = useState('')

    return (
        <div>
            {drinks ?
            <div className="w-1/2 overflow-x-auto">
            <ul className="rounded-md ... flex flex-row bg-lime-500 mt-2 w-max">
                <li className="font-bodyFont text-xl m-2"><strong>{drinks.drinks.length}</strong> Drinks founds ! :</li>
                {drinks.drinks.map(item=>{return(
                    <a href={item.idDrinks}><li key={item.idDrinks} className="cursor-pointer text-xl m-2
                     hover:text-white hover:scale-105 duration-200"
                     >{item.strDrink}</li></a>
                )})}
            </ul>
            </div>
             : <h1>No results</h1>}
            <Content
            drinks={drinks}/>
        </div>
    );
};

export default NavDrinks;