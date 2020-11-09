module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('avaliations', {
         id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
         },
         vote: {
            type: Sequelize.INTEGER,
            allowNull: false
         },
         movies_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'movies', key: 'id' }
         },
         users_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'users', key: 'id' }
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
      return queryInterface.dropTable('avaliations');
   }
};
