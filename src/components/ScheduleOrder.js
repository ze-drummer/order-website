import React, { useState } from 'react';

const ScheduleOrder = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // La logique pour gérer la planification de la commande peut être ajoutée ici
        console.log(`Commande planifiée pour le ${date} à ${time}`);
    };

    return (
        <div>
            <h2>Planifiez votre commande</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Sélectionnez la date :</label>
                    <input 
                        type="date" 
                        id="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="time">Sélectionnez l'heure :</label>
                    <input 
                        type="time" 
                        id="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Planifier la commande</button>
            </form>
        </div>
    );
};

export default ScheduleOrder;