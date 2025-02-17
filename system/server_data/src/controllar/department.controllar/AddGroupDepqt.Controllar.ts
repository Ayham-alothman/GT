import {Request,Response} from 'express';
import { AddGroupDepartModel } from '../../model/department.model/AddGroupDepart.Model';



async function AddGroupDepartControlar(req:Request,res:Response){
    try{
      let {departs,idUni}=req.body;
      if(departs.length>0){
        for(let depart of departs){
          await AddGroupDepartModel(depart,idUni);

        }
        console.log('suc depart')
        res.status(200).end();
      }
      else{throw `not found any depart `}
      
      

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

export  {AddGroupDepartControlar}