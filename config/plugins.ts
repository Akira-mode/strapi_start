module.exports = ({ env }) => ({
    documentation: {
    enabled: true,
    config: {
      openapi: '3.0.1',
      info: {
        version: '1.0.0',
        title: 'Blog API',
        description: 'Documentation complète de l\'API du blog développé avec Strapi',
        contact: {
          name: 'Équipe API',
          email: 'contact@monblog.com',
          url: 'https://monblog.com'
        },
        license: {
          name: 'MIT',
          url: 'https://opensource.org/licenses/MIT'
        }
      },
      servers: [
        {
          url: env('API_URL', 'http://localhost:1337'),
          description: 'Serveur de développement'
        },
        {
          url: env('PRODUCTION_URL', 'https://votre-app-production.onrender.com'),
          description: 'Serveur de production'
        }
      ],
      security: [
        {
          bearerAuth: []
        }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      },
      paths: {
        // Nous allons personnaliser certains chemins plus tard
      },
      tags: [
        {
          name: 'Article',
          description: 'Opérations liées aux articles du blog'
        },
        {
          name: 'Catégorie',
          description: 'Opérations liées aux catégories du blog'
        }
      ],
      externalDocs: {
        description: 'Documentation supplémentaire',
        url: 'https://docs.monblog.com'
      }
    }
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "30d",
      },
      jwtSecret: env("JWT_SECRET", "FfmznIwnN5qE2LKkPb4h2A=="),
    },
  },
});
