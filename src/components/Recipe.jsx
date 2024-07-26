import React from 'react';

const Recipe = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe">
          <h2>{recipe.recipe.label}</h2>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <p>{recipe.recipe.source}</p>
          <a href={recipe.recipe.url} target="_self" >View Recipe</a>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
