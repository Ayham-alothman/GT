import { Request,Response } from "express";
import {AddUniversity} from '../../model/dashboard/add.university'

async function AddUniversityContollar(req:Request,res:Response) {
    try{
        
        const {username}=req.body;
        const DataUniversity=await AddUniversity(username);
        console.log(DataUniversity)
        res.status(200).json(DataUniversity);
        
    }
    catch(e){
        res.status(400).json(e);
    }
    
}


export {AddUniversityContollar}