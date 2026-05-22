# to-do

## meta

Pour chaque feature :

- Injecter Title et Meta depuis @angular/platform-browser
- Title.setTitle(...) => titre spécifique à la page
- Meta.updateTag(...) => mettre à jour og:title, og:description, og:url

## env

Quand le VPS sera configuré et le domaine pointé :

- Mettre à jour og:url dans index.html et dans chaque Meta.updateTag() des composants.
Une variable d'environnement Angular (environment.ts)  pour centraliser l'URL de base

src/environments/
├── environment.ts          ← développement
└── environment.production.ts  ← production

export const environment = {
  baseUrl: 'https://ton-domaine.fr'
};
