module.exports = {
   up: QueryInterface => {
      return QueryInterface.bulkInsert(
         'categories',
         [
            {
               title: 'Ação',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Animação',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Aventura',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Cinema de arte',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Chanchada',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Comédia',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Comédia de ação',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Comédia de terror',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Comédia dramática',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Comédia romântica',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Dança',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Documentário',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Docuficção',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Drama',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Espionagem',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Faroeste',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Fantasia científica',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Ficção científica',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Filmes com truques',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Filmes de guerra',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Musical',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Filme policial',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Romance',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Suspense',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Terror',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               title: 'Thriller',
               created_at: new Date(),
               updated_at: new Date()
            }
         ],
         {}
      );
   },

   down: QueryInterface => {
      return QueryInterface.bulkDelete('categories');
   }
};
