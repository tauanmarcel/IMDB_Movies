module.exports = {
   up: QueryInterface => {
      return QueryInterface.bulkInsert(
         'actors',
         [
            {
               name: 'Will Smith',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Tom Hanks',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Marlon Brando',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Christian Bale',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Leonardo DiCaprio',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Robert Downey Jr.',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Al Pacino',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Brad Pitt',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Adam Sandler',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Ben Affleck',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'George Clooney',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Jack Nicholson',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Tom Cruise',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Anthony Hopkins',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Robert De Niro',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Jackie Chan',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Scarlett Johansson',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Laurence Olivier',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Joaquin Phoenix',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Johnny Depp',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Sidney Poitier',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Spencer Tracy',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Burt Lancaster',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'John Wayne',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Nicole Kidman',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Bradley Cooper',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Denzel Washington',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Bette Davis',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Henry Fonda',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Matt Damon',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Martin Scorsese',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Adam Driver',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Humphrey Bogart',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Orson Welles',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Meryl Streep',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'William Holden',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Ralph Fiennes',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Cary Grant',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Akshay Kumar',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Kirk Douglas',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Heath Ledger',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Gene Kelly',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Vin Diesel',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Clark Gable',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Gary Cooper',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Elizabeth Taylor',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Sylvester Stallone',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Antonio Banderas',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'James Cagney',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Javier Bardem',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Ryan Reynolds',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Jaden Smith',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Thandie Newton',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Dan Castellaneta',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Brian Howe',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'James Karen',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Kurt Fuller',
               created_at: new Date(),
               updated_at: new Date()
            }
         ],
         {}
      );
   },

   down: QueryInterface => {
      return QueryInterface.bulkDelete('actors');
   }
};
