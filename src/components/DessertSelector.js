import React, { useState } from 'react';

const DessertSelector = () => {
    const [selectedDesserts, setSelectedDesserts] = useState([]);
    const desserts = ['Gâteau au chocolat', 'Glace', 'Tarte aux fruits', 'Cheesecake'];

    const handleDessertChange = (dessert) => {
        setSelectedDesserts((prevSelected) => {
            if (prevSelected.includes(dessert)) {
                return prevSelected.filter((d) => d !== dessert);
            } else {
                return [...prevSelected, dessert];
            }
        });
    };

    return (
        <div>
            <h2>Sélectionnez vos desserts</h2>
            <ul>
                {desserts.map((dessert) => (
                    <li key={dessert}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedDesserts.includes(dessert)}
                                onChange={() => handleDessertChange(dessert)}
                            />
                            {dessert}
                        </label>
                    </li>
                ))}
            </ul>
            <h3>Desserts sélectionnés :</h3>
            <ul>
                {selectedDesserts.map((dessert) => (
                    <li key={dessert}>{dessert}</li>
                ))}
            </ul>
        </div>
    );
};

export default DessertSelector;