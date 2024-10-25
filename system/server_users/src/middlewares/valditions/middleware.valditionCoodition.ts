import {Request,Response,NextFunction} from 'express';
import {deocodeToken} from '../../utility/decodeToken'

async function valditionCoordition(req:Request,res:Response,next:NextFunction){
  try{
     const token:string=req.cookies('token');
     const data=await deocodeToken(token);
     if(data?.Coordition==true){
      req.decodeToken=data;
      next();}
     else{throw `not have permission`}
  }
  catch(e:any){
    if(e instanceof Error){
        res.status(403).json(e.message)
    }
    else{
        res.status(403).json(e)
    }
  }
}

export {valditionCoordition}