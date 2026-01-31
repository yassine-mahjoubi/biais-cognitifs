# Biais Cognitifs - L'Explorateur

Une PWA installable et fonctionnelle hors ligne pour découvrir et comprendre les biais cognitifs qui influencent notre pensée au quotidien. (Français et Anglais)

## 🎯 Le Concept

Le but de ce projet est de vulgariser la notion de biais cognitif. Chaque jour, nous sommes sujets à des dizaines de biais sans même nous en rendre compte. Cette application permet d'en explorer un au hasard, de lire une description claire et concise, et d'approfondir le sujet grâce à un lien direct vers la source (cognition.vsxlabs.com).

## ✨ Fonctionnalités

- **Installable** sur votre appareil (mobile/desktop)
- **Fonctionne hors ligne** après la première visite
- **Génération Aléatoire** : Découvrez un nouveau biais cognitif à chaque visite.
- **Description Simple** : Comprenez l'essentiel du biais en quelques phrases.
- **Lien d'Approfondissement** : Un lien direct vers la page source en anglais pour ceux qui veulent en savoir plus.
- **Interface Épurée** : Une expérience utilisateur sans distraction, conçue avec Tailwind CSS.
- **Responsive** : Parfaitement consultable sur mobile, tablette et ordinateur.

## 🛠️ Technologies Utilisées

Ce projet est construit avec un stack moderne:

- **Frontend** : [Vue 3](https://vuejs.org/) (utilisant la Composition API)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Backend & Données** : [Supabase](https://supabase.io/) (pour l'API et la base de données des biais)

## 🚀 Démarrage Rapide

Suivez ces étapes pour lancer le projet en local.

### 1. Prérequis

- [Node.js](https://nodejs.org/) (version 18.x ou supérieure recommandée)
- Un gestionnaire de paquets comme `npm` ou `yarn`.

### 2. Installation

```bash
# 1. Clonez le projet (remplacez avec votre URL de dépôt)
git clone https://github.com/yassine-mahjoubi/biais-cognitifs.git

# 2. Accédez au répertoire du projet
cd biais-cognitifs

# 3. Installez les dépendances
npm install
```

### 3. Configuration de l'environnement

Pour que l'application puisse communiquer avec votre base de données Supabase, vous devez configurer les variables d'environnement.

1.  Créez un fichier `.env` à la racine du projet.
2.  Copiez le contenu du fichier `.env.example`

```env
# .env

# URL de votre projet Supabase (disponible dans les paramètres API de votre projet Supabase)
VITE_SUPABASE_URL="https://"

# Clé anonyme (anon key) de votre projet Supabase (disponible dans les paramètres API)
VITE_SUPABASE_ANON_KEY="votre-cle-anon"
```

### 4. Lancement du serveur de développement

```bash
npm run dev
```

## 📦 Build pour la Production

```bash
npm run build
```

## Source des données

La liste des biais cognitifs a été initialement constituée en utilisant un script JavaScript (`back/subabase_fill_from_wiki.js`). Ce script a effectué les étapes suivantes :

1.  **Scraping** : Extraction des informations depuis une page Wikipédia dédiée aux biais cognitifs.
2.  **Injection** : Remplissage d'une table dans une base de données Supabase avec les données scrappées.
3.  **API** : L'application utilise ensuite l'API auto-générée par Supabase pour récupérer et afficher la liste des biais.
