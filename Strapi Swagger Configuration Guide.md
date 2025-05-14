# Guide pour intégrer Swagger dans Strapi pour un blog

Ce document fournit un guide étape par étape pour configurer le plugin `@strapi/plugin-documentation` afin d'intégrer Swagger (OpenAPI) dans un projet Strapi, ainsi qu'un prompt pour instruire une IA comme Cody à l'implémenter dans un projet de blog.

## Guide de configuration du plugin Swagger

### Étape 1 : Installer le plugin
1. Assurez-vous que votre projet Strapi (v4 ou v5) est opérationnel. Notez que la compatibilité avec Strapi 5 peut nécessiter une vérification.
2. Installez le plugin avec la commande suivante :
   ```bash
   npm install @strapi/plugin-documentation
   ```
3. Strapi détecte automatiquement le plugin, mais une configuration peut être nécessaire.

### Étape 2 : Configurer le plugin
1. Créez ou modifiez `./config/plugins.js` pour activer et personnaliser le plugin. Exemple :
   ```javascript
   module.exports = ({ env }) => ({
     documentation: {
       enabled: true,
       config: {
         openapi: '3.0.1',
         info: {
           version: '1.0.0',
           title: 'Blog API',
           description: 'Documentation de l’API pour mon blog Strapi',
           contact: {
             name: 'Votre Nom',
             email: 'votre.email@example.com',
           },
         },
         'x-strapi-config': {
           plugins: ['upload', 'users-permissions'],
           path: '/documentation',
         },
         servers: [{ url: env('API_URL', 'http://localhost:1337'), description: 'Serveur local' }],
         security: [{ bearerAuth: [] }],
       },
     },
   });
   ```
   - `openapi` : Version OpenAPI (3.0.1).
   - `info` : Métadonnées de l’API.
   - `servers` : URL de l’API (développement ou production).
   - `security` : Support pour l’authentification JWT.

2. (Facultatif) Protégez l’accès à la documentation avec un mot de passe via l’interface admin.

### Étape 3 : Générer et accéder à la documentation
1. Redémarrez le serveur Strapi :
   ```bash
   npm run develop
   ```
2. Accédez à Swagger UI via :
   - URL : `http://localhost:1337/documentation`
   - Ou via l’interface admin (section “Documentation”).
3. Swagger UI liste les endpoints (ex. : `/api/articles`, `/api/categories`) avec des options de test.

### Étape 4 : Vérifier les endpoints
- Les routes sont générées à partir de `./api/**/config/routes.json`.
- Assurez-vous que les types de contenu “Article” et “Catégorie” ont des routes publiques activées (Settings > Roles > Public).
- Exemple de réponse pour `GET /api/articles` :
   ```json
   {
     "data": [
       {
         "id": 1,
         "attributes": {
           "title": "Mon premier article",
           "content": "Contenu de l'article...",
           "publishedAt": "2025-05-14T12:00:00.000Z",
           "category": {
             "data": {
               "id": 1,
               "attributes": {
                 "name": "Technologie"
               }
             }
           }
         }
       }
     ],
     "meta": {}
   }
   ```

### Étape 5 : Personnaliser la documentation (facultatif)
- Ajoutez des descriptions via un fichier dans `./src/extensions/documentation/overrides/`. Exemple :
   ```json
   {
     "paths": {
       "/articles": {
         "get": {
           "description": "Récupère la liste des articles publiés avec leurs catégories",
           "summary": "Liste des articles"
         }
       }
     }
   }
   ```
- Redémarrez Strapi pour appliquer les modifications.

### Étape 6 : Tester avec authentification
- Obtenez un JWT via `/api/auth/local`.
- Dans Swagger UI, entrez le token dans “Authorize” pour tester les endpoints protégés.

### Étape 7 : Débogage
- Si des endpoints manquent, vérifiez :
  - Permissions (Settings > Roles > Public ou Authenticated).
  - Fichiers `routes.json`.
- Consultez les logs (`npm run develop`).

### Étape 8 : Déploiement
- Mettez à jour l’URL du serveur dans `./config/plugins.js` (ex. : `https://votre-domaine.com`).
- Incluez le plugin dans le build (`npm run build`).

## Prompt pour Cody

**Prompt** :  
"Je développe un blog avec Strapi.js et je veux intégrer une documentation API avec Swagger en utilisant le plugin @strapi/plugin-documentation. Fournis un guide complet pour :  
- Installer et configurer le plugin dans un projet Strapi v4.  
- Configurer un fichier ./config/plugins.js pour définir une documentation avec OpenAPI 3.0.1, incluant un titre ('Blog API'), une description, et une URL de serveur (http://localhost:1337 pour le développement).  
- Activer la documentation pour mes types de contenu 'Article' (champs : titre, contenu, image, date, catégorie) et 'Catégorie' (champ : nom), avec des endpoints publics pour lister tout et des endpoints authentifiés protégés par JWT.  
- Fournir un exemple de fichier d’override pour ajouter une description personnalisée à l’endpoint GET /api/articles.  
- Expliquer comment accéder à Swagger UI et tester un endpoint (par exemple, GET /api/articles) avec un JWT.  
- Inclure les étapes pour déployer la documentation en production sur une plateforme comme Render, avec les variables d’environnement nécessaires.  
Fournis des exemples de code pour chaque étape et explique simplement pour un développeur intermédiaire."

## Conseils supplémentaires
- **Compatibilité Strapi 5** : Vérifiez la compatibilité du plugin sur le GitHub officiel ou envisagez `swagger-jsdoc` pour une configuration manuelle.
- **Sécurité** : Limitez l’accès à la documentation en production (mot de passe ou restriction IP).
- **Maintenance** : Mettez à jour le plugin régulièrement pour les correctifs.