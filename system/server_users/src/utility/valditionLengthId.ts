

async function valditionLenghtId(id:string){
    try{
        if(id.length!=24){throw {state:400,message:'this id not valid'}}

    }
    catch(e){throw e}
}

export {valditionLenghtId}