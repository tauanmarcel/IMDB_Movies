import 'dotenv/config';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import Youtch from 'youch';
import routes from './routes';

import './database';

class App {
   constructor() {
      this.server = express();

      this.middlewares();
      this.routes();
      this.exceptionHandler();
   }

   middlewares() {
      this.server.use(cors(/* { origin: 'http://origin.com.br' } */));
      this.server.use(express.json());
   }

   routes() {
      this.server.use(routes);
   }

   exceptionHandler() {
      this.server.use(async (err, req, res, next) => {
         if (process.env.NODE_ENV === 'development') {
            const errors = await new Youtch(err, req).toJSON();

            return res.status(500).json(errors);
         }

         return res.status(500).json({ error: 'Internal server error' });
      });
   }
}

export default new App().server;