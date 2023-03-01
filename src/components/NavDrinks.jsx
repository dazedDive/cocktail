import React from 'react';
import Content from './Content';

const NavDrinks = ({drinks}) => {
    console.log(drinks)

console.log(drinks);
    return (
        <div>
            <div className="w-3/4 overflow-x-auto... ">
                <ul className="rounded-md ... flex flex-row bg-lime-500 mt-2 w-max">
                    {drinks?.drinks &&
                    <li className="font-bodyFont text-xl m-2"><strong>{drinks?.drinks?.length > 0 ? drinks.drinks.length + " drinks founds" : "No Results" }</strong></li>
                    }
                    {drinks.drinks?.map(item=>{return(
                    <a href={item.idDrinks}><li key={item?.idDrinks} className="cursor-pointer text-xl m-2
                     hover:text-white hover:scale-105 duration-200"
                     >{item?.strDrink}</li></a>
                )})}
                </ul>
            <Content
            drinks={drinks}/>
            </div>

        </div>
    );
};

export default NavDrinks;