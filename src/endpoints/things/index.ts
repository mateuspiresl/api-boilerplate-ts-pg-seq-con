import { Router } from 'express';

import { createThing } from './create-thing';
import { findThings } from './find-things';

export const ThingsController = Router()
  .get('/', findThings)
  .post('/', createThing);
