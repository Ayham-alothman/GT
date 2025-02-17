import { Request,Response } from "express";
import { SignupSubAdminModel } from "../../model/signup.model/signup.model.subadmin";


async function SignupSubAdminControllar(req:Request,res:Response){
    try{
        await SignupSubAdminModel(req.body);
        res.status(200).end();
    }
    catch (e:any) {
        if (e.state && e.message) {
          res.status(e.state).json(e.message);
        } else if (e instanceof Error) {
          res.status(400).json(e.message);
        } else {
          res.status(400).json(e);
        }
      }
}
export {SignupSubAdminControllar}