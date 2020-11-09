import Sequelize, { Model } from 'sequelize';

class MoviesCategory extends Model {
   static init(sequelize) {
      super.init(
         {
            categories_id: Sequelize.INTEGER,
            movies_id: Sequelize.INTEGER
         },
         { sequelize }
      );

      return this;
   }

   static associate(models) {
      this.belongsTo(models.Category, {
         foreignKey: 'categories_id',
         as: 'categories',
         required: true
      });
   }
}

export default MoviesCategory;
