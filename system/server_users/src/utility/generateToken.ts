import {sign} from 'jsonwebtoken';

function generateToken(date:any){ console.log(date)
             
 const newAdmin={_id:date._id,username:date.username,forUniversity:date.forUniversity,preinfo:date.preinfo,permision:date.permision,depart:date.depart};

 return sign(newAdmin,'GTthree');
}


export {generateToken}