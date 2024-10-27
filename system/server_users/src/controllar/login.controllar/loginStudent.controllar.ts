import { Request,Response } from "express";
import {LoginForStudent} from '../../model/login.model/login.model.student';
import { valditionLenghtId } from "../../utility/valditionLengthId";
import { generateToken } from "../../utility/generateToken";


async function LoginStudentCntrollar(req:Request,res:Response){
    try {
        if (!req.body.id || !req.body.password) {
          throw { state: 400, message: "there miss data" };
        }
        await valditionLenghtId(req.body.id);
        const Student=await LoginForStudent(req.body.id,req.body.password)
        const dataForToken = { ...Student, IsStudent: true };
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

export {LoginStudentCntrollar}