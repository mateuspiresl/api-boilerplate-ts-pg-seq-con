import { Router } from 'express';

import { ThingsController } from './things';

export const ApiRouter = Router().use('/things', ThingsController);
