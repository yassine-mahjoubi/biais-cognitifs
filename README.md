# Biais Cognitifs | My Biais

Une Progressive Web App (PWA) installable et fonctionnelle hors ligne pour découvrir et comprendre les biais cognitifs qui influencent notre pensée au quotidien. (Français et Anglais)

## Le Concept

Le but de ce projet est de vulgariser la notion de biais cognitif. Chaque jour, nous sommes sujets à des dizaines de biais sans même nous en rendre compte. Cette application permet d'en explorer un au hasard, de lire une description claire et concise, et d'approfondir le sujet grâce à des liens directs vers les sources.

## Démo

Voir la démo sur [GitHub Pages](https://yassine-mahjoubi.github.io/biais-cognitifs/) | Voir la démo sur [Netlify](https://yassine-mahjoubi-biais-cognitifs.netlify.app/)

## Fonctionnalités

- **Installable** sur votre appareil (mobile/desktop)
- **Fonctionne hors ligne** après la première visite
- **Bilingue FR/EN** : Interface disponible en français et anglais
- **Génération Aléatoire** : Découvrez un nouveau biais cognitif à chaque visite
- **Recherche Instantanée** : Trouvez rapidement un biais spécifique grâce au filtre par nom
- **Description Simple** : Comprenez l'essentiel du biais en quelques phrases
- **Liens d'Approfondissement** : Des liens directs vers les pages sources pour ceux qui veulent en savoir plus (Cognitive Bias Codex)
- **Interface Épurée** : Une expérience utilisateur sans distraction, conçue avec Tailwind CSS
- **Responsive** : Parfaitement consultable sur mobile, tablette et ordinateur

## Technologies Utilisées

Ce projet est construit avec une stack moderne :

- **Frontend** : [Vue 3](https://vuejs.org/) (utilisant la Composition API)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool** : [Vite](https://vitejs.dev/)
- **PWA** : Service Worker pour le fonctionnement hors ligne

## Démarrage Rapide

Suivez ces étapes pour lancer le projet en local.

### 1. Prérequis

- [Node.js](https://nodejs.org/) (version 18.x ou supérieure recommandée)
- Un gestionnaire de paquets comme `npm` ou `yarn`

### 2. Installation

```bash
# 1. Clonez le projet
git clone https://github.com/yassine-mahjoubi/biais-cognitifs.git

# 2. Accédez au répertoire du projet
cd biais-cognitifs

# 3. Installez les dépendances
npm install
```

### 3. Configuration de l'environnement

Pour personnaliser l'application, vous pouvez configurer les variables d'environnement.

1.  Créez un fichier `.env` à la racine du projet
2.  Ajoutez les variables suivantes :

```env
# .env
VITE_APP_NAME="Biais Cognitifs - L'Explorateur"
VITE_APP_DEFAULT_LOCALE=fr
VITE_API_URL_FR='./json/biases_cognitif_v3_fr.json'
VITE_API_URL_EN='./json/biases_cognitif_v3_en.json'
```

> **Note** : Ces variables sont optionnelles. Si le fichier `.env` n'existe pas, l'application utilisera ces valeurs par défaut.

### 4. Lancement du serveur de développement

```bash
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:5173` (le port peut varier).

## Build pour la Production

```bash
npm run build-only
```

Les fichiers de production seront générés dans le dossier `dist/`. Vous pouvez ensuite déployer ce dossier sur n'importe quel hébergeur statique (Netlify, GitHub Pages, Vercel, etc.).

## Source des Données

La liste des biais cognitifs provient de plusieurs sources complémentaires. La base initiale a été constituée et traduite à partir de [vsxlabs - Cognitive Bias Codex](https://cognition.vsxlabs.com/biases), puis enrichie avec des biais issus de Wikipedia et du [thedecisionlab](https://thedecisionlab.com/fr/biases-index).

Cette liste continue d'être enrichie et améliorée au fur et à mesure.

## Roadmap

### Phase 1 - Amélioration de l'expérience utilisateur

- [ ] **Système de favoris** : Sauvegarder ses biais préférés pour y revenir facilement
- [ ] **Filtrage par catégorie** : Ajouter des filtres dans la liste (mémoire, perception, social, etc.)
- [ ] **Partage de biais** : Bouton pour partager un biais spécifique via lien ou réseaux sociaux

### Phase 2 - Gamification et engagement

- [ ] **Quiz quotidien** : Un quiz pour tester ses connaissances sur les biais
- [ ] **Défi du jour** : Un biais à identifier dans une situation réelle proposée
- [ ] **Mode "flashcard"** : Pour réviser les biais comme des cartes mémoire

### Phase 3 - Contenu enrichi

- [ ] **Exemples concrets** : Ajouter des situations du quotidien pour chaque biais
- [ ] **Biais liés** : Suggérer des biais connexes ou similaires

### Phase 4 - Social et communauté

- [ ] **Contributions** : Permettre aux utilisateurs de proposer de nouveaux biais

### Phase 5 - Qualité & Performance

- [ ] **Tests unitaires** : Ajouter Vitest pour sécuriser le code
- [ ] **Sitemap** : Pour le SEO
- [ ] **Open Graph** : Améliorer le partage sur les réseaux sociaux

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez :

- Ajouter de nouveaux biais cognitifs
- Améliorer les traductions
- Corriger des bugs
- Proposer de nouvelles fonctionnalités

N'hésitez pas à ouvrir une issue ou une pull request.

## Licence

Ce projet est sous licence. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
