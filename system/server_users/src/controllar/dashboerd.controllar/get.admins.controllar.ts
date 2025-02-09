import { Request,Response } from "express";
import {getAllAdminss} from '../../model/dashboard/get.admins'

async function GetAdminsContollar(req:Request,res:Response) {
    try{
        
        const DataAdmins=await getAllAdminss();
        res.status(200).json(DataAdmins);
        
    }
    catch(e){console.log(e);console.log('here erorr')
        res.status(400).json(e);
    }
    
}


export {GetAdminsContollar}