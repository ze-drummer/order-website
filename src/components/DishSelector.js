import React, { useState } from 'react';

const DishSelector = () => {
    const [selectedDishes, setSelectedDishes] = useState([]);
    const dishes = [
        { id: 1, name: 'Spaghetti Bolognaise' },
        { id: 2, name: 'Poulet Tikka Masala' },
        { id: 3, name: 'Sauté de légumes' },
        { id: 4, name: 'Tacos au bœuf' },
    ];

    const handleDishSelect = (dish) => {
        setSelectedDishes((prevSelected) => {
            if (prevSelected.includes(dish)) {
                return prevSelected.filter((item) => item !== dish);
            } else {
                return [...prevSelected, dish];
            }
        });
    };

    return (
        <div>
            <h2>Sélectionnez vos plats</h2>
            <ul>
                {dishes.map((dish) => (
                    <li key={dish.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedDishes.includes(dish.name)}
                                onChange={() => handleDishSelect(dish.name)}
                            />
                            {dish.name}
                        </label>
                    </li>
                ))}
            </ul>
            <h3>Plats sélectionnés :</h3>
            <ul>
                {selectedDishes.map((dish, index) => (
                    <li key={index}>{dish}</li>
                ))}
            </ul>
        </div>
    );
};

export default DishSelector;