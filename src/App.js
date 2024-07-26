import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const appId = "0370ee99";
    const appKey = "918f4152bdd3679ac973c9e5dee8a2c6";

    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <SearchForm onSearch={fetchRecipes} />
      <Recipe recipes={recipes} />
    </div>
  );
};

export default App;
