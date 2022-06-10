
const RecipeInfo = ({ recipe }) => {
    return (

        <div class="col mb-3" style={{ width: "25%" }}>
            {/* <div class="card-body"> */}
            {/*  <h1 class="text-primary">Recipe Info</h1> */}
            <img class="card-img-top" src={recipe.image} alt="Unable to load image"></img>

            <div class="card-body">
                <h2 class="card-title">{recipe.title}</h2>
                <div class="card-text">
                    {recipe.sourceUrl ? <a href={recipe.sourceUrl} target="_blank" rel="noreferrer noopener">recipe</a> : ''}
                </div>
            </div>
        </div>
        // </div>

    )
}

export default RecipeInfo;