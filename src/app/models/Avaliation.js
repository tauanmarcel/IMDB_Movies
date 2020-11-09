import Sequelize, { Model } from 'sequelize';

class Avaliation extends Model {
   static init(sequelize) {
      super.init(
         {
            vote: Sequelize.INTEGER,
            movies_id: Sequelize.INTEGER,
            users_id: Sequelize.INTEGER
         },
         {
            sequelize
         }
      );

      return this;
   }
}

export default Avaliation;
