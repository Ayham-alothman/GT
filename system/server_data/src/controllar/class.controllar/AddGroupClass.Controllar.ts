import { Request,Response } from "express";
import { AddGroupClassModel } from "../../model/class.model/AddGroupClass.Model";
async function AddClassGroupContollar(req:Request,res:Response){
    try{
        const {ClassUni,idUni}=req.body;
        if(ClassUni.length>0){
            for(const Class of ClassUni){
                await AddGroupClassModel(Class,idUni);
            }
            console.log('suc class')
          res.status(200).end();
        }
        else{throw `not found any type class`}
    }
    catch(e:any){ console.log(e)
        if(e instanceof Error){
            res.status(400).json(e.message);
        }
        else{
            res.status(400).json(e)
        }
        }
}
export {AddClassGroupContollar}