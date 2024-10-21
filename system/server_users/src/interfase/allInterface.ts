import mongoose from 'mongoose';

interface UniversityToReg {
 
 username:string,
 colleges:string[],
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
    forUniversity:mongoose.Types.ObjectId,
    forCollega:string
   } 



interface Students {
    _id:mongoose.Types.ObjectId
    username:string,
    password:string,
    forUniversity:mongoose.Types.ObjectId,
    forCollega:string,
    levelofyear: number
   } 


export {UniversityToReg,AdminsToReg,CoordinationToReg,Students}