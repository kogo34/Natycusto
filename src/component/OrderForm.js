import React, { useState } from 'react';

export default function OrderForm({ dishes }) {
    const [order, setOrder] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
        reservationType: 'commande',
        reservationTime: '',
        numPersons: 1,
        reservedDishes: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleAddDish = (dish) => {
        setOrder({
            ...order,
            reservedDishes: [...order.reservedDishes, { ...dish, numPeople: 1 }]
        });
    };

    const handleRemoveDish = (index) => {
        const updatedReservedDishes = [...order.reservedDishes];
        updatedReservedDishes.splice(index, 1);
        setOrder({
            ...order,
            reservedDishes: updatedReservedDishes
        });
    };

    const handleChangeNumPeople = (index, numPeople) => {
        const updatedReservedDishes = [...order.reservedDishes];
        updatedReservedDishes[index].numPeople = numPeople;
        setOrder({
            ...order,
            reservedDishes: updatedReservedDishes
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour traiter la commande ou la réservation (ex: envoyer les données au serveur)
        console.log(order);
    };

    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <h3>Passer une commande ou faire une réservation</h3>
            <div>
                <label>Prénom:</label>
                <input type="text" name="firstName" value={order.firstName} onChange={handleChange} required />
            </div>
            <div>
                <label>Nom:</label>
                <input type="text" name="lastName" value={order.lastName} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={order.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Numéro de téléphone:</label>
                <input type="tel" name="phoneNumber" value={order.phoneNumber} onChange={handleChange} required />
            </div>
            <div>
                <label>Localisation:</label>
                <input type="text" name="location" value={order.location} onChange={handleChange} required />
            </div>

            <div>
                <label>Type de réservation:</label>
                <select name="reservationType" value={order.reservationType} onChange={handleChange} required>
                    <option value="commande">Commande</option>
                    <option value="réservation">Réservation</option>
                </select>
            </div>

            {order.reservationType === 'réservation' && (
                <>
                    <div>
                        <label>Heure de réservation:</label>
                        <input type="time" name="reservationTime" value={order.reservationTime} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Nombre de personnes:</label>
                        <input type="number" name="numPersons" value={order.numPersons} onChange={handleChange} min="1" required />
                    </div>
                </>
            )}

            <div>
                <label>Plats réservés / commandés:</label>
                <ul>
                    {order.reservedDishes.map((dish, index) => (
                        <li key={index}>
                            {dish.title} - Pour {dish.numPeople} personne(s)
                            <input
                                type="number"
                                value={dish.numPeople}
                                onChange={(e) => handleChangeNumPeople(index, parseInt(e.target.value))}
                                min="1"
                            />
                            <button type="button" onClick={() => handleRemoveDish(index)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
                <div>
                    <label>Ajouter un plat:</label>
                    <select onChange={(e) => handleAddDish({ title: e.target.value })}>
                        <option value="">Sélectionnez un plat</option>
                        {dishes.map((dish, index) => (
                            <option key={index} value={dish.title}>{dish.title}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button type="submit">Confirmer</button>
        </form>
    );
}

