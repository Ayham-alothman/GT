import {Request,Response,NextFunction} from 'express';

function valditionUnivercityData(req:Request,res:Response,next:NextFunction){
    if(!req.body.username){
        res.status(400).json(`do't have username`);
    }
    else{next()}

}

export {valditionUnivercityData}