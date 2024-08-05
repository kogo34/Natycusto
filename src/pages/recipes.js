
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RecipeCard from "../component/recipeCard";
import { Link } from "react-router-dom";

export default function Recipes() {
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'birriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'];
    const recipes = [
        {
            title: "spaghetti",
            image: "/img/gallery/img (1).jpg",
            authorimag: "/img/gallery/img10.png",
            recipedescipt: "ici on met le desciption lorem"
        },
        {
            title: "RIZ BLANC",
            image: "/img/gallery/img (2).jpg",
            authorimag: "/img/gallery/img11.png",
            recipedescipt: "ici on met le desciption lorem"
        },
        {
            title: "SALADE",
            image: "/img/gallery/img (3).jpg",
            authorimag: "/img/gallery/img12.png",
            recipedescipt: "ici on met le desciption lorem"
        },
        {
            title: "PIZZA",
            image: "/img/gallery/img (4).jpg",
            authorimag: "/img/gallery/img13.png",
            recipedescipt: "ici on met le desciption lorem"
        },
        {
            title: "frite au poulet",
            image: "/img/gallery/img (5).jpg",
            authorimag: "/img/gallery/img14.png",
            recipedescipt: "ici on met le desciption lorem"
        },
        {
            title: "cookies",
            image: "/img/gallery/img (6).jpg",
            authorimag: "/img/gallery/img15.png",
            recipedescipt: "ici on met le desciption lorem"
        },
        {
            title: "burger",
            image: "/img/gallery/img (7).jpg",
            authorimag: "/img/gallery/img16.png",
            recipedescipt: "ici on met le desciption lorem"
        },
        {
            title: "cakes",
            image: "/img/gallery/img (8).jpg",
            authorimag: "/img/gallery/img17.png",
            recipedescipt: "ici on met le desciption lorem"
        },
        {
            title: "pizza",
            image: "/img/gallery/img (9).jpg",
            authorimag: "/img/gallery/img10.png",
            recipedescipt: "ici on met le desciption lorem"
        }
    ].sort(() => Math.random() - 0.5);

    return (
        <div className="recipes-page">
            <div className="previous-seaches">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    {searches.map((search, index) => (
                        <div key={index} style={{ animationDelay: index * .2 + "s" }} className="search-item">
                            {search}
                        </div>
                    ))}
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <button className="btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="order-button-container">
                    <Link to="/order" className="order-button">Commander/Réserver</Link>
                </div>
            </div>
            <div className="recipescontainer ">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>

        </div>
    );
}



