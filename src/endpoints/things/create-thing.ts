import express from 'express';

import { Thing } from '~/models';

export async function createThing(
  req: express.Request,
  res: express.Response,
): Promise<void> {
  const thing = await Thing.create(req.body);
  res.status(201).send(thing);
}
