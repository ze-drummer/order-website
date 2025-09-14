import React, { useState } from 'react';

const DessertSelector = () => {
    const [dessertsSelectionnes, setDessertsSelectionnes] = useState([]);
    const desserts = [
        'Gâteau au chocolat',
        'Glace',
        'Tarte aux fruits',
        'Cheesecake',
        'Tiramisu spéculoos'
        'crumble pommes'
    ];

    const gererChangementDessert = (dessert) => {
        setDessertsSelectionnes((precedent) => {
            if (precedent.includes(dessert)) {
                return precedent.filter((d) => d !== dessert);
            } else {
                return [...precedent, dessert];
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
                                checked={dessertsSelectionnes.includes(dessert)}
                                onChange={() => gererChangementDessert(dessert)}
                            />
                            {dessert}
                        </label>
                    </li>
                ))}
            </ul>
            <h3>Desserts sélectionnés :</h3>
            <ul>
                {dessertsSelectionnes.map((dessert) => (
                    <li key={dessert}>{dessert}</li>
                ))}
            </ul>
        </div>
    );
};

export default DessertSelector;