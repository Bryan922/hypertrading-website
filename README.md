# Hypertrading Website

Site web professionnel présentant notre approche d'hypertrading quantitatif et nos performances.

## Technologies Utilisées

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Heroicons

## Prérequis

- Node.js 18+ 
- npm ou yarn

## Installation

1. Cloner le repository :
```bash
git clone <votre-repo-url>
cd hypertrading-website
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Déploiement sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Installez Vercel CLI :
```bash
npm i -g vercel
```

3. Connectez-vous à votre compte Vercel :
```bash
vercel login
```

4. Déployez le projet :
```bash
vercel
```

## Structure du Projet

- `app/` - Pages et composants Next.js
- `app/components/` - Composants réutilisables
- `public/` - Assets statiques
- `tailwind.config.ts` - Configuration Tailwind CSS
- `vercel.json` - Configuration du déploiement Vercel

## Modification du Contenu

Pour modifier le contenu du site :

1. Les textes et données sont dans les composants respectifs :
   - `app/components/HeroSection.tsx` - Section d'en-tête
   - `app/components/AboutSection.tsx` - Section explicative
   - `app/components/StatsSection.tsx` - Statistiques de performance
   - `app/components/PerformanceChart.tsx` - Graphique de performance

2. Les styles sont principalement gérés via Tailwind CSS dans les classes des composants

## Contribution

1. Créez une branche pour votre fonctionnalité
2. Committez vos changements
3. Poussez sur votre branche
4. Créez une Pull Request 