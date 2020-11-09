import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import Sequelize, { Op } from 'sequelize';

import authConfig from '../../config/auth';

import Movie from '../models/Movie';
import Director from '../models/Director';
import MoviesActor from '../models/MoviesActor';
import Actor from '../models/Actor';
import MoviesCategory from '../models/MoviesCategory';
import Category from '../models/Category';
import Avaliation from '../models/Avaliation';

class MovieController {
   async show(req, res) {
      const { director, title, category, actor } = req.query;

      const movies = await Movie.findAll({
         attributes: ['id', 'title', 'description', 'launch'],
         include: [
            {
               model: Director,
               as: 'director',
               attributes: ['name'],
               where: {
                  name: {
                     [Op.or]: {
                        [Op.like]: director ? `%${director}%` : '%%'
                     }
                  }
               }
            },
            {
               model: MoviesActor,
               as: 'movies_actors',
               attributes: ['id'],
               required: true,
               include: {
                  model: Actor,
                  as: 'actors',
                  attributes: ['name'],
                  where: {
                     name: {
                        [Op.or]: {
                           [Op.like]: actor ? `%${actor}%` : '%%'
                        }
                     }
                  }
               }
            },
            {
               model: MoviesCategory,
               as: 'movies_categories',
               attributes: ['id'],
               required: true,
               include: {
                  model: Category,
                  as: 'categories',
                  attributes: ['title'],
                  where: {
                     title: {
                        [Op.or]: {
                           [Op.like]: category ? `%${category}%` : '%%'
                        }
                     }
                  }
               }
            }
            // {
            //    model: Avaliation,
            //    as: 'avaliation',
            //    attributes: [
            //       [Sequelize.fn('AVG', Sequelize.col('vote')), 'vote']
            //    ]
            // }
         ],
         where: {
            title: {
               [Op.or]: {
                  [Op.like]: title ? `%${title}%` : '%%'
               }
            }
         }
      });

      const avaliations = await Avaliation.findAll({
         attributes: [
            'movies_id',
            [Sequelize.fn('AVG', Sequelize.col('vote')), 'vote']
         ],
         group: ['movies_id']
      });

      const parseMovies = [];

      movies.map(movie => {
         const match = avaliations.find(vote => vote.movies_id === movie.id);

         parseMovies.push({
            id: movie.id,
            title: movie.title,
            description: movie.description,
            launch: movie.launch,
            director: movie.director,
            movies_actors: movie.movies_actors,
            movies_categories: movie.movies_categories,
            vote: match.vote
         });
      });

      return res.status(200).json({ moveis: parseMovies });
   }

   async store(req, res) {
      const schema = Yup.object().shape({
         title: Yup.string().required(),
         description: Yup.string().required(),
         launch: Yup.number().required(),
         director_id: Yup.number().required(),
         actors: Yup.array().required(),
         categories: Yup.array().required()
      });

      const authHeader = req.headers.authorization;

      const [, token] = authHeader.split(' ');

      const { admin } = await promisify(jwt.verify)(token, authConfig.secret);

      if (!admin) {
         return res
            .status(401)
            .json({ error: 'Only administrators can register movies' });
      }

      const {
         title,
         launch,
         description,
         director_id,
         actors,
         categories
      } = req.body;

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validation fails' });
      }

      const director = await Director.findByPk(director_id);

      if (!director) {
         return res.status(400).json({ error: 'Director not found!' });
      }

      try {
         const movie = await Movie.create({
            title,
            launch,
            description,
            director_id
         });

         actors.map(async actor => {
            await MoviesActor.create({
               actors_id: actor.actors_id,
               movies_id: movie.id
            });
         });

         categories.map(async category => {
            await MoviesCategory.create({
               categories_id: category.categories_id,
               movies_id: movie.id
            });
         });

         return res.status(200).json({ movie });
      } catch (error) {
         return res.status(400).json({ error });
      }
   }
}

export default new MovieController();
