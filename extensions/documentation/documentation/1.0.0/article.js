module.exports = {
  paths: {
    '/api/articles': {
      get: {
        summary: 'Liste tous les articles',
        description: 'Récupère une liste paginée de tous les articles publiés du blog, triés par date de publication décroissante. Vous pouvez filtrer par catégorie en utilisant le paramètre de requête `category`.',
        tags: ['Article'],
        parameters: [
          {
            name: 'sort',
            in: 'query',
            description: 'Champ de tri et direction (ex: publishDate:desc)',
            schema: {
              type: 'string'
            }
          },
          {
            name: 'pagination[page]',
            in: 'query',
            description: 'Numéro de page pour la pagination',
            schema: {
              type: 'integer',
              default: 1
            }
          },
          {
            name: 'pagination[pageSize]',
            in: 'query',
            description: 'Nombre d\'éléments par page',
            schema: {
              type: 'integer',
              default: 10
            }
          },
          {
            name: 'filters[categories][name][$eq]',
            in: 'query',
            description: 'Filtre par nom de catégorie',
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Liste des articles récupérée avec succès',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: { type: 'integer' },
                          attributes: {
                            type: 'object',
                            properties: {
                              title: { type: 'string' },
                              content: { type: 'string' },
                              publishDate: { type: 'string', format: 'date' },
                              createdAt: { type: 'string', format: 'date-time' },
                              updatedAt: { type: 'string', format: 'date-time' },
                              categories: { type: 'object' }
                            }
                          }
                        }
                      }
                    },
                    meta: { type: 'object' }
                  }
                }
              }
            }
          },
          '400': {
            description: 'Requête invalide'
          },
          '500': {
            description: 'Erreur interne du serveur'
          }
        }
      }
    },
    '/api/articles/{id}': {
      get: {
        summary: 'Récupère un article spécifique',
        description: 'Récupère les détails complets d\'un article spécifique par son ID, y compris ses catégories associées.',
        tags: ['Article'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID de l\'article à récupérer',
            schema: {
              type: 'integer'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Article récupéré avec succès'
          },
          '404': {
            description: 'Article non trouvé'
          }
        }
      }
    }
  }
};