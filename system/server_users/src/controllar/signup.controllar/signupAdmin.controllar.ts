import { Request, Response } from "express";
import { SignupForAdmins } from "../../model/signup.model/signup.model.admin";

async function ControllarAdminSignup(req: Request, res: Response) {
  try {
    const idNewAdmin = await SignupForAdmins({
      username: req.body.username,
      password: req.body.password,
      forUniversity: req.body.forUniversity,
    });
    res.status(200).json({idAdmin:idNewAdmin});
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

export { ControllarAdminSignup };
