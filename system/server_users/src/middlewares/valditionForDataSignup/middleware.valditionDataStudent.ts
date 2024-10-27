import { Request, Response, NextFunction } from "express";

function valditionStudentData(req: Request, res: Response, next: NextFunction) {
  if (!req.body.username) {
    res.status(400).json(`the body do't have username`);
  } else if (!req.body.password) {
    res.status(400).json(`the body do't have password`);
  } else if (!req.body.forUniversity) {
    res.status(400).json(`the body do't have forUniversity`);
  } else if (!req.body.forCollega) {
    res.status(400).json(`the body do't have forCollega`);
  } else if (!req.body.levelofyear) {
    res.status(400).json(`the body do't have levelofyear`);
  } else if (req.body.forUniversity.length != 24) {
    res.status(400).json(`the id for university incorect`);
  } else {
    next();
  }
}

export { valditionStudentData };