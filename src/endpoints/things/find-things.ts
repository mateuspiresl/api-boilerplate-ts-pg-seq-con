import express from 'express';

import { Thing } from '~/models';

export async function findThings(
  req: express.Request,
  res: express.Response,
): Promise<void> {
  const things = await Thing.findAll();
  res.status(200).send(things);
}
