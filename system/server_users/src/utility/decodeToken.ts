import {verify} from 'jsonwebtoken'
async function deocodeToken(token:string){
 try{
     const data:any=verify(token,'GTthree');
     return data
 }
 catch(e:any){throw e}
}

export {deocodeToken}