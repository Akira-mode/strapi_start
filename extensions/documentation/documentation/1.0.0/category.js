module.exports = {
  paths: {
    '/api/categories': {
      get: {
        summary: 'Liste toutes les catégories',
        description: 'Récupère une liste de toutes les catégories disponibles pour le blog.',
        tags: ['Catégorie'],
        responses: {
          '200': {
            description: 'Liste des catégories récupérée avec succès'
          }
        }
      }
    }
  }
};