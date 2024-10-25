import {sign} from 'jsonwebtoken';

function generateToken(date:any){ 
 return sign(date,'GTthree');
}


export {generateToken}