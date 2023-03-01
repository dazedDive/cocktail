import React, { useState } from 'react';
import lime from '../images/Lime.png';
import SearchForm from './SearchForm';

const Nav = () => {
    const [searchMode, setSearchMode] = useState('');

    const menu = [{id:1,
                text:"find a cocktail",
                searchMode:" an cocktail",
                mode:"s="},
                {id:2,
                text:"search by category",
                searchMode:"category",
                mode:"c="},
                {id:3,
                text:"Ingredient",
                searchMode:"an ingredient",
                mode:"i="},
                {id:4,
                text:"i am lucky",
                searchMode:"random",
                mode:"random"}]
    return (
        <div>
            <img className="z-10 overflow-hidden fixed m-[-100px] top-[-10%] "src={lime} alt="logo"/>
            <ul className="drop-shadow-lg ... flex flex-row justify-end bg-slate-100 ">
                {menu.map(item=>{return(
                    <button
                    onClick={()=>setSearchMode(item)}>
                    <li key={item.id}
                    className="font-bodyFont text-slate-800 text-4xl my-4 mr-12 hover:scale-110 hover:text-lime-500 duration-100"
                    >{item.text}
                    </li>
                    </button>
                    )}
                )}
            </ul>
            {searchMode &&
            <SearchForm
            mode={searchMode}/>
            }
        </div>
    );
};

export default Nav;