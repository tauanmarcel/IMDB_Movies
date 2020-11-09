module.exports = {
   up: QueryInterface => {
      return QueryInterface.bulkInsert(
         'directors',
         [
            {
               name: 'Alfred Hitchcock',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Orson Welles',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'John Ford',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Howard Hawks',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Martin Scorsese',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Akira Kurosawa',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Buster Keaton',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Ingmar Bergman',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Frank Capra',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Federico Fellini',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Steven Spielberg',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Jean Renoir',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'John Huston',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Luis Buñuel',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'D. W. Griffith',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Ernst Lubitsch',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Robert Altman',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'George Cukor',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Woody Allen',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Vincente Minnelli',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Francis Ford Coppola',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Michael Powell',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Stanley Kubrick',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Billy Wilder',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Satyajit Ray',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Roman Polanski',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'François Truffaut',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Preston Sturges',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Sergei Eisenstein',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Fritz Lang',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Jean-Luc Godard',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Sam Peckinpah',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'F.W. Murnau',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'David Lean',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Werner Herzog',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Nicholas Ray',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Josef von Sternberg',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Gabriele Muccino',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Douglas Sirk',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Max Ophüls',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Louis Malle',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Sergio Leone',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Sidney Lumet',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Oliver Stone',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Bernardo Bertolucci',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Jonathan Demme',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Jacques Tati',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Otto Preminger',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Spike Lee',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Tim Burton',
               created_at: new Date(),
               updated_at: new Date()
            },
            {
               name: 'Jerry Lewis',
               created_at: new Date(),
               updated_at: new Date()
            }
         ],
         {}
      );
   },

   down: QueryInterface => {
      return QueryInterface.bulkDelete('directors');
   }
};
