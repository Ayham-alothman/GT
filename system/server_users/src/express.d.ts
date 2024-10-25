// express.d.ts
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      decodeToken?: any; // Adjust this type based on your JWT payload structure
    }
  }
}
