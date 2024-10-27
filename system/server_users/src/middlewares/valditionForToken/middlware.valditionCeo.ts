import { Request, Response, NextFunction } from "express";
import { deocodeToken } from "../../utility/decodeToken";

async function valditionCeo(req: Request, res: Response, next: NextFunction) {
  try {
    const token: string = req.cookies.token;
    if (!token) {
      throw `not have token must do login `;
    }
    const data = await deocodeToken(token);
    if (data?.IsCeo == true) {
      req.decodeToken = data;
      next();
    } else {
      throw `not have permission`;
    }
  } catch (e: any) {
    if (e instanceof Error) {
      res.status(403).json(e.message);
    } else {
      res.status(403).json(e);
    }
  }
}

export { valditionCeo };
