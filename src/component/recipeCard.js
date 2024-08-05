import CustomImage from "./customimage"
export default function RecipeCard({ recipe }) {
    return (
        <div className="recipescard">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipecardinfo">
                <img className="auther-img" src={recipe.authorimag} alt="" />
                <p className="reciptitle"> {recipe.title} </p>
                <p className="recipedescipt">{recipe.recipedescipt} </p>
                <a className="VIEW" href="#!"> VIEW RECIPE</a>
            </div>
        </div>
    )
}