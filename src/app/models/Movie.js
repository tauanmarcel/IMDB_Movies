import Sequelize, { Model } from 'sequelize';

class Movie extends Model {
   static init(sequelize) {
      super.init(
         {
            title: Sequelize.STRING,
            launch: Sequelize.INTEGER,
            description: Sequelize.STRING,
            director_id: Sequelize.INTEGER
         },
         {
            sequelize
         }
      );

      return this;
   }

   static associate(models) {
      this.belongsTo(models.Director, {
         foreignKey: 'director_id',
         as: 'director'
      });

      this.hasMany(models.Avaliation, {
         foreignKey: 'movies_id',
         as: 'avaliation'
      });

      this.hasMany(models.MoviesActor, {
         foreignKey: 'movies_id',
         as: 'movies_actors'
      });

      this.hasMany(models.MoviesCategory, {
         foreignKey: 'movies_id',
         as: 'movies_categories'
      });
   }
}

export default Movie;
