import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

import Avaliation from '../models/Avaliation';

class AvaliationController {
   async store(req, res) {
      const schema = Yup.object().shape({
         vote: Yup.number().required()
      });

      const authHeader = req.headers.authorization;

      const [, token] = authHeader.split(' ');

      const { id: users_id, admin } = await promisify(jwt.verify)(
         token,
         authConfig.secret
      );

      if (admin) {
         return res.status(401).json({ error: `Administrators can't vote` });
      }

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validation fails' });
      }

      const { vote } = req.body;
      const { movies_id } = req.params;

      if (vote < 0 || vote > 4) {
         return res.status(400).json({ error: 'Invalid vote amount' });
      }

      const existsVote = await Avaliation.findOne({
         where: {
            movies_id,
            users_id
         }
      });

      if (existsVote) {
         return res.status(400).json({ error: 'You already rated this movie' });
      }

      try {
         await Avaliation.create({
            vote,
            movies_id,
            users_id
         });
      } catch (error) {
         return res.status(400).json({ error });
      }

      return res.status(204).json();
   }
}

export default new AvaliationController();
