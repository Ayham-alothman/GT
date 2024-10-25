import {verify} from 'jsonwebtoken'
async function deocodeToken(token:string){
 try{
     const data:any=verify(token,'GTthree');
     return data
 }
 catch(e:any){console.log(e.message)}
}

console.log(deocodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXloYW0iLCJhZ2UiOiIyNiIsImlhdCI6MTcyOTc3MTcxMH0.xdeDX7AkdTm4hViFydZiquYDreTeueMELPFTzj2-dZA'))
export {deocodeToken}