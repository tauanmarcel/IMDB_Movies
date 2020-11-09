module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('movies_actors', {
         id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
         },
         actors_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'actors', key: 'id' },
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
      return queryInterface.dropTable('movies_actors');
   }
};
