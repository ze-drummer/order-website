const express = require('express');
const router = express.Router();

// Base de données fictive pour les commandes
let orders = [];

// Route pour créer une nouvelle commande
router.post('/create', (req, res) => {
    const { dishes, desserts, paymentInfo, schedule } = req.body;
    const newOrder = {
        id: orders.length + 1,
        dishes,
        desserts,
        paymentInfo,
        schedule,
        status: 'En attente'
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// Route pour récupérer toutes les commandes
router.get('/', (req, res) => {
    res.json(orders);
});

// Route pour récupérer une commande spécifique par ID
router.get('/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Commande non trouvée');
    res.json(order);
});

// Route pour mettre à jour le statut d'une commande
router.put('/:id/status', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Commande non trouvée');
    
    order.status = req.body.status;
    res.json(order);
});

// Route pour supprimer une commande
router.delete('/:id', (req, res) => {
    const orderIndex = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (orderIndex === -1) return res.status(404).send('Commande non trouvée');
    
    orders.splice(orderIndex, 1);
    res.status(204).send();
});

module.exports = router;