# Site de Commande

Ce projet est un site local simple qui permet aux utilisateurs de sélectionner des plats et des desserts, de payer et de planifier leur commande.

## Structure du projet

```
order-website
├── public
│   ├── index.html        # Document HTML principal du site
│   └── styles.css        # Styles du site
├── src
│   ├── app.js            # Point d'entrée de l'application
│   ├── components
│   │   ├── DishSelector.js      # Composant pour sélectionner les plats
│   │   ├── DessertSelector.js   # Composant pour sélectionner les desserts
│   │   ├── PaymentForm.js       # Composant pour le paiement
│   │   └── ScheduleOrder.js     # Composant pour planifier la commande
│   └── routes
│       └── orders.js            # Routes pour la gestion des commandes
├── package.json                # Fichier de configuration npm
└── README.md                   # Documentation du projet
```

## Instructions d'installation

1. Clonez le dépôt :
   ```
   git clone <url-du-dépôt>
   ```

2. Allez dans le dossier du projet :
   ```
   cd order-website
   ```

3. Installez les dépendances :
   ```
   npm install
   ```

4. Démarrez le serveur :
   ```
   npm start
   ```

5. Ouvrez votre navigateur et allez sur `http://localhost:3000` pour voir le site.

## Guide d'utilisation

- Les utilisateurs peuvent sélectionner des plats et des desserts via les composants dédiés.
- Le formulaire de paiement permet de saisir les informations de paiement en toute sécurité.
- Les utilisateurs peuvent planifier leur commande en choisissant une date et une heure.
- Toute la gestion des commandes est assurée via les routes définies.

## Contribution

N'hésitez pas à soumettre des issues ou des pull requests pour proposer des améliorations ou corriger des bugs.