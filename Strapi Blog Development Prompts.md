# Prompts pour développer un blog avec Strapi.js

Voici une série de prompts pour guider une IA comme Cody dans le développement d’un blog ou site de contenu avec Strapi.js, un CMS headless. Ces prompts couvrent la configuration, la création de contenu, les fonctionnalités avancées et le déploiement.

## 1. Configuration initiale de Strapi
**Prompt** :  
"Je veux créer un blog avec Strapi.js comme CMS headless. Fournis un guide étape par étape pour installer Strapi localement avec Node.js, configurer une base de données PostgreSQL, et lancer le projet. Inclue les commandes nécessaires et explique comment accéder à l’interface admin pour la première fois."

## 2. Création des types de contenu pour le blog
**Prompt** :  
"Explique comment créer des types de contenu dans Strapi pour un blog. Je veux :  
- Un type 'Article' avec les champs titre (texte), contenu (rich text), image de couverture (média), date de publication (date), et catégories (relation avec un type 'Catégorie').  
- Un type 'Catégorie' avec un champ nom (texte).  
Fournis les étapes à suivre dans l’interface admin de Strapi et un exemple de configuration JSON pour ces types."

## 3. Configuration des utilisateurs et permissions
**Prompt** :  
"Pour mon blog Strapi, configure un système d’authentification et de permissions. Je veux :  
- Un rôle 'Auteur' qui peut créer et modifier ses propres articles, mais pas les supprimer.  
- Un rôle 'Lecteur' qui peut uniquement lire les articles publiés.  
- Un administrateur avec un accès complet.  
Explique comment configurer ces rôles dans Strapi et sécuriser les endpoints API avec JWT."

## 4. Création d’une API pour le blog
**Prompt** :  
"Génère un exemple de configuration d’API REST dans Strapi pour mon blog. Je veux :  
- Un endpoint pour lister tous les articles publiés avec leurs catégories.  
- Un endpoint pour récupérer un article spécifique par son slug.  
- Un endpoint pour filtrer les articles par catégorie.  
Fournis les URL des endpoints, un exemple de réponse JSON, et explique comment activer ces routes dans Strapi."

## 5. Intégration d’un plugin pour l’upload d’images
**Prompt** :  
"Je veux permettre l’upload d’images pour les articles de mon blog Strapi. Recommande un plugin pour gérer les fichiers médias (comme Cloudinary ou AWS S3) et explique comment l’installer et le configurer dans Strapi. Fournis un exemple de code pour uploader une image via l’API Strapi."

## 6. Connexion avec un front-end
**Prompt** :  
"Je veux connecter mon API Strapi à un front-end Next.js pour afficher les articles de mon blog. Fournis :  
- Un exemple de code pour récupérer la liste des articles via l’API REST de Strapi dans Next.js (en utilisant `fetch`).  
- Un composant React pour afficher un article avec son titre, contenu, image, et catégorie.  
- Une explication sur la gestion des variables d’environnement pour sécuriser l’URL de l’API Strapi."

## 7. Ajout de fonctionnalités avancées (SEO, commentaires)
**Prompt** :  
"Pour mon blog Strapi, je veux améliorer le SEO et ajouter un système de commentaires.  
- Recommande et explique comment installer un plugin SEO dans Strapi (comme 'strapi-plugin-seo').  
- Propose une structure pour un type de contenu 'Commentaire' lié aux articles, avec les champs auteur (texte), contenu (texte), et date (date).  
- Fournis un exemple de code pour soumettre un commentaire via l’API Strapi depuis un front-end."

## 8. Déploiement du projet
**Prompt** :  
"Guide-moi pour déployer mon projet de blog Strapi sur une plateforme comme Render ou Heroku. Inclue :  
- Les étapes pour configurer une base de données PostgreSQL dans le cloud.  
- Les variables d’environnement nécessaires (par exemple, DATABASE_URL, JWT_SECRET).  
- Une explication sur la mise en production de l’interface admin et de l’API.  
Fournis un exemple de fichier Dockerfile si nécessaire."

## 9. Optimisation des performances
**Prompt** :  
"Comment optimiser les performances de mon API Strapi pour un blog avec beaucoup d’articles ? Fournis :  
- Des conseils pour réduire le temps de réponse des endpoints (par exemple, pagination, caching).  
- Un exemple de configuration de pagination dans Strapi.  
- Une explication sur l’utilisation d’un CDN pour les images.  
Si possible, recommande des outils pour surveiller les performances."

## 10. Tests et documentation
**Prompt** :  
"Pour mon blog Strapi, je veux m’assurer que l’API est robuste. Fournis :  
- Un exemple de test unitaire pour un endpoint REST de Strapi (par exemple, récupérer un article) en utilisant Jest.  
- Une explication sur la génération d’une documentation API automatique avec Strapi (par exemple, avec 'strapi-plugin-documentation').  
- Des recommandations pour maintenir un code propre et bien documenté."

## Conseils pour utiliser ces prompts
- **Spécificité** : Ajoute des détails (par exemple, "en TypeScript" ou "avec Vue.js") si nécessaire.  
- **Clarifications** : Si la réponse est vague, demande "Peux-tu fournir un exemple de code complet ?".  
- **Progression** : Commence par la configuration, puis passe aux fonctionnalités avancées.  
- **Niveau** : Pour les débutants, ajoute "Explique simplement pour un débutant" à la fin des prompts.