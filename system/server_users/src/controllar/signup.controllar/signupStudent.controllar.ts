import { Request, Response } from "express";
import { SignupForStudent } from "../../model/signup.model/signup.model.student";

async function signupStudentControllar(req: Request, res: Response) {
  try {
    const idNewStudent = await SignupForStudent({
      username: req.body.username,
      password: req.body.password,
      forUniversity: req.body.forUniversity,
      forCollega: req.body.forCollega,
      levelofyear: req.body.levelofyear,
    });
    res.status(200).json({ idNewStudent: idNewStudent });
  } catch (e: any) {
    if (e.state && e.message) {
      res.status(e.state).json(e.message);
    } else if (e instanceof Error) {
      res.status(400).json(e.message);
    } else {
      res.status(400).json(e);
    }
  }
}

export { signupStudentControllar };
