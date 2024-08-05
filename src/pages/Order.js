
import React from 'react';
import RecipeCard from '../component/recipeCard';
import OrderForm from '../component/OrderForm';

export default function Order() {
    const dishes = [
        {
            title: "Spaghetti",
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
    ];

    return (
        <div className="order-page">
            <OrderForm dishes={dishes} />
            <h2>Nos Plats</h2>
            <div className="recipescontainer">
                {dishes.map((dish, index) => (
                    <RecipeCard key={index} recipe={dish} />
                ))}
            </div>
        </div>
    );
}
