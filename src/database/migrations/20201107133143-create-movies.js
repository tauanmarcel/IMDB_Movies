module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('movies', {
         id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
         },
         title: {
            type: Sequelize.STRING,
            allowNull: false
         },
         launch: {
            type: Sequelize.INTEGER,
            allowNull: false
         },
         description: {
            type: Sequelize.STRING,
            allowNull: false
         },
         director_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'directors', key: 'id' }
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
      return queryInterface.dropTable('movies');
   }
};
