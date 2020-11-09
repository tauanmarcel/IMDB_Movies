import Sequelize, { Model } from 'sequelize';

class MoviesActor extends Model {
   static init(sequelize) {
      super.init(
         {
            actors_id: Sequelize.INTEGER,
            movies_id: Sequelize.INTEGER
         },
         { sequelize }
      );

      return this;
   }

   static associate(models) {
      this.belongsTo(models.Actor, {
         foreignKey: 'actors_id',
         as: 'actors'
      });
   }
}

export default MoviesActor;
