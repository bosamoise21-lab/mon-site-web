# Muller

Boutique de mode en ligne construite avec React, TypeScript et Vite.

## Base de données locale

L'API locale utilise SQLite via le module `node:sqlite` fourni avec Node.js 22.12 ou supérieur. Au premier appel de l'API, elle crée `data/muller.sqlite` et y charge le catalogue initial. Les commandes ne sont pas préremplies : elles sont créées lors d'une commande réellement soumise au formulaire.

Le serveur Vite branche l'API sous `/api` en développement et en aperçu de production local. Les images importées sont conservées dans `data/uploads/`. La base et les photos ne sont pas suivies par Git.

## Démarrage

```sh
npm install
npm run dev
```

## Fonctionnalités de démonstration

- Catalogue avec recherche, filtres et tri.
- Fiches produit avec choix de taille et de couleur.
- Panier et formulaire de commande.
- Espace client et tableau de bord administrateur.
- Gestion interactive des produits, des stocks et des commandes.
- Stockage SQLite persistant des produits, commandes, clients, stocks et statuts.

Le paiement n'est pas connecté à un prestataire réel. L'API est prévue pour un usage local de démonstration ; elle doit être sécurisée avant toute mise en ligne publique.

## Vérification

```sh
npm run build
npm run lint
```
