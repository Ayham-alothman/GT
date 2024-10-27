import { Request,Response } from "express";
import {LoginForCoordition} from '../../model/login.model/login.model.coordition'
import { valditionLenghtId } from "../../utility/valditionLengthId";
import { generateToken } from "../../utility/generateToken";

async function LoginCoorditionControllar(req:Request,res:Response){
    try {
        if (!req.body.id || !req.body.password) {
          throw { state: 400, message: "there miss data" };
        }
        await valditionLenghtId(req.body.id);
        const Coordition=await LoginForCoordition(req.body.id,req.body.password)
        const dataForToken = { ...Coordition, IsCoordition: true };
        const token = generateToken(dataForToken);
        res.status(200).cookie("token", token).end();
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

export {LoginCoorditionControllar}