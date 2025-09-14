import React, { useState } from 'react';

const PaymentForm = ({ onPaymentSuccess }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Simulation du traitement du paiement
            setTimeout(() => {
                onPaymentSuccess();
                clearForm();
            }, 1000);
        }
    };

    const validateForm = () => {
        if (!cardNumber || !expiryDate || !cvv) {
            setError('Tous les champs sont obligatoires.');
            return false;
        }
        if (cardNumber.length !== 16) {
            setError('Le numéro de carte doit comporter 16 chiffres.');
            return false;
        }
        if (cvv.length !== 3) {
            setError('Le CVV doit comporter 3 chiffres.');
            return false;
        }
        setError('');
        return true;
    };

    const clearForm = () => {
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Informations de paiement</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Numéro de carte :</label>
                <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength="16"
                />
            </div>
            <div>
                <label>Date d'expiration :</label>
                <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/AA"
                />
            </div>
            <div>
                <label>CVV :</label>
                <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength="3"
                />
            </div>
            <button type="submit">Payer maintenant</button>
        </form>
    );
};