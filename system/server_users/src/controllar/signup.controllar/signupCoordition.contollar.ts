import { Request,Response } from "express";
import { SignupForcoordination } from "../../model/signup.model/signup.model.coordination";

async function signupCoorditionControllar(req:Request,res:Response){
    try{
        const newidCoord=await SignupForcoordination({username:req.body.username,password:req.body.password,forCollega:req.body.forCollega,forUniversity:req.body.forUniversity})

         res.status(200).json({idNewCoordition:newidCoord});
    }
    catch (e: any) {
        if (e.state && e.message) {
          res.status(e.state).json(e.message);
        } else if (e instanceof Error) {
          res.status(400).json(e.message);
        } else {
          res.status(400).json(e);
        }
      }
}

export {signupCoorditionControllar}