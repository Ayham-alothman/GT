import {Request,Response} from 'express';

import { LoginForAdmin } from '../../model/login.model/login.model.admin';
import { generateToken } from "../../utility/generateToken";
import { valditionLenghtId } from "../../utility/valditionLengthId";

async function LoginAdminControllar(req:Request,res:Response){
    try{
        if (!req.body.id || !req.body.password) {
            throw { state: 400, message: "there miss data" };
          }
          await valditionLenghtId(req.body.id);
          const Admin=await LoginForAdmin(req.body.id,req.body.password);
          const token =generateToken(Admin);
          res.status(200).cookie("token", token,{
           maxAge:3600000
        }).end();
        } catch (e: any) { console.log(e)
          if (e.state && e.message) {
            res.status(e.state).json(e.message);
          } else if (e instanceof Error) {
            res.status(400).json(e.message);
          } else {
            res.status(400).json(e);
          }
        }
        

    
    
}

export {LoginAdminControllar}