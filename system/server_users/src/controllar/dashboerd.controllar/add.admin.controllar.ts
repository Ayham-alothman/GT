import { Request,Response } from "express";
import {SignupForAdmins} from '../../model/dashboard/add.admins'

async function AddAdminContollar(req:Request,res:Response) {
    try{
        
        const {username,password,forUniversity,permision}=req.body;
        const DataAdmins=await SignupForAdmins(username,password,forUniversity,permision);
        res.status(200).json(DataAdmins);
        
    }
    catch(e){ console.log(e)
        res.status(400).json(e);
    }
    
}


export {AddAdminContollar}