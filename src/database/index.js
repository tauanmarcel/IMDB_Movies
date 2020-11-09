import Sequelize from 'sequelize';

import User from '../app/models/User';
import Director from '../app/models/Director';
import Movie from '../app/models/Movie';
import Category from '../app/models/Category';
import Actor from '../app/models/Actor';
import MoviesCategory from '../app/models/MoviesCategory';
import MoviesActor from '../app/models/MoviesActor';
import Avaliation from '../app/models/Avaliation';

import databaseConfig from '../config/database';

const models = [
   User,
   Director,
   Movie,
   Category,
   Actor,
   MoviesCategory,
   MoviesActor,
   Avaliation
];

class Database {
   constructor() {
      this.init();
   }

   init() {
      this.connection = new Sequelize(databaseConfig);

      models
         .map(model => model.init(this.connection))
         .map(
            model => model.associate && model.associate(this.connection.models)
         );
   }
}

export default new Database();
