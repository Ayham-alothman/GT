import {Request,Response} from 'express';
import { SignupForUniversity } from '../../model/signup.model/signup.model.university';

async function signupUniversityControllar(req:Request,res:Response){
    try{
        const idUniversity= await SignupForUniversity({username:req.body.username});
        res.status(200).json({idnewuniversity:idUniversity});

    }catch (e: any) {
        if (e.state && e.message) {
          res.status(e.state).json(e.message);
        } else if (e instanceof Error) {
          res.status(400).json(e.message);
        } else {
          res.status(400).json(e);
        }
      }
    
}

export {signupUniversityControllar}