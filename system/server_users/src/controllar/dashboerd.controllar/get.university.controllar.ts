import { Request,Response } from "express";
import {getAllUniversitys} from '../../model/dashboard/get.university'

async function GetUniversityContollar(req:Request,res:Response) {
    try{
        
        const DataUniversity=await getAllUniversitys();
        res.status(200).json(DataUniversity);
        
    }
    catch(e){
        res.status(400).json(e);
    }
    
}


export {GetUniversityContollar}