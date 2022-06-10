import axios from 'axios'
// Hooks
import { useState } from 'react'
// Components
import RecipeInfo from '../RecipeInfo/RecipeInfo';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap'

function App() {
  const [recipes, setRecipes] = useState([])
  const [recipeQuery, setRecipeQuery] = useState('')
  const [ingredientQuery, setIngredientQuery] = useState(false)

  const handleChange = (e) => {
    // This prints in the console what we type in the input field
    // console.log(e.target.value)
    setRecipeQuery(e.target.value)
    // console.log(e.target.value)

  }

  const handleCheck = (e) => {
    setIngredientQuery(!ingredientQuery)
    console.log(ingredientQuery)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
    const apiKey = '?apiKey=' + process.env.REACT_APP_API_KEY
    const query = '&query=' + recipeQuery
    const showIngredients = '&addRecipeInformation=' + ingredientQuery
    // console.log(baseUrl + apiKey + query)
    try {
      const response = await axios.get(baseUrl + apiKey + query + showIngredients)
      // console.log(response.data)
      setRecipes(response.data.results)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="App container">
      <h1>Foodie Kitchen</h1>
      <img src="https://files.slack.com/files-pri/T9KJM7QJX-F03JQNJCBQF/foodielog.jpg"></img>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipeQuery">Recipe: </label>
        <input type="text" id="recipeQuery" name="recipeQuery" value={recipeQuery} onChange={handleChange} required></input>
        <label htmlFor="ingredientQuery">Include recipe?</label>
        <input type="checkbox" id="ingredientQuery" name="ingredientQuery" checked={ingredientQuery} onChange={handleCheck}></input>
        <Button variant="success" type="submit">Submit</Button>
      </form>

      <div class="container" >
        <div class="row">
          {recipes.map(recipe => {
            return (
              <RecipeInfo recipe={recipe} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;