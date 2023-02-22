import React from 'react';

const Content = ({drinks,linkdrink}) => {
    return (
        <>
        {drinks &&
        <div className="container w-1/2">
            {drinks.drinks.map(article=>{
                return(
                    <div key={article.idDrink} id={article.idDrink}>
                    <h1 className="mt-8 font-bodyFont text-5xl text-lime-500">{article.strDrink}</h1>
                    <h3 className="font-bodyFont text-slate-700 text-2xl mt-3"> Ingredients : </h3>

                    <span className="flex flex-row">
                    <h3 className="text-slate-800 text-2xl mx-1">{article.strMeasure1}  </h3>
                    <h3 className="text-lime-500 text-2xl mx-1">{article.strIngredient1}</h3>
                    <h3 className="text-slate-800 text-2xl mx-1">{article.strMeasure2}  </h3>
                    <h3 className="text-lime-500 text-2xl mx-1">{article.strIngredient2}</h3>
                    <h3 className="text-slate-800 text-2xl mx-1">{article.strMeasure3}  </h3>
                    <h3 className="text-lime-500 text-2xl mx-1">{article.strIngredient3}</h3>
                    </span>
                    <span className="flex flex-row">
                    <h3 className="text-slate-800 text-2xl mx-1">{article.strMeasure4}  </h3>
                    <h3 className="text-lime-500 text-2xl mx-1">{article.strIngredient4}</h3>
                    <h3 className="text-slate-800 text-2xl mx-1">{article.strMeasure5}  </h3>
                    <h3 className="text-lime-500 text-2xl mx-1">{article.strIngredient5}</h3>
                    <h3 className="text-slate-800 text-2xl mx-1">{article.strMeasure6}  </h3>
                    <h3 className="text-lime-500 text-2xl mx-1">{article.strIngredient6}</h3>
                    </span>
                    <span className="flex flex-row">
                    <h3 className="text-slate-800 text-2xl mx-1">{article.strMeasure7}  </h3>
                    <h3 className="text-lime-500 text-2xl mx-1">{article.strIngredient7}</h3>
                    <h3 className="text-slate-800 text-2xl mx-1">{article.strMeasure8}  </h3>
                    <h3 className="text-lime-500 text-2xl mx-1">{article.strIngredient8}</h3>
                    <h3 className="text-slate-800 text-2xl mx-1">{article.strMeasure9}  </h3>
                    <h3 className="text-lime-500 text-2xl mx-1">{article.strIngredient9}</h3>
                    </span>
                    <p className="mt-3 text-white text-justify text-xl">{article.strInstructions}</p>
                    <img className ="scale-75 rounded" src={article.strDrinkThumb} alt={article.strDrink}/>
                    </div>
                )
            })}
        </div>
        }
        </>
    );
};

export default Content;