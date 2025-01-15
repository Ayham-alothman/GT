import mongoose from 'mongoose';
import {Request} from 'express'




interface UniversityToReg {
 
 username:string,
 colleges?:string[],
 admins?:[mongoose.Types.ObjectId]
}

interface AdminsToReg {
    username:string,
    password:string,
    forUniversity:string
   } 
   


   interface CoordinationToReg{
    username:string,
    password:string,
    forUniversity:string,
    forCollega:string
   } 



interface StudentsToReg {
    username:string,
    password:string,
    forUniversity:string,
    forCollega:string,
    levelofyear: number
   } 


export {UniversityToReg,AdminsToReg,CoordinationToReg,StudentsToReg}