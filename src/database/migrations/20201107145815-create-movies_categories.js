module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('movies_categories', {
         id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
         },
         categories_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'categories', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
         },
         movies_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'movies', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
         },
         created_at: {
            type: Sequelize.DATE,
            allowNull: false
         },
         updated_at: {
            type: Sequelize.DATE,
            allowNull: false
         }
      });
   },

   down: queryInterface => {
      return queryInterface.dropTable('movies_categories');
   }
};
