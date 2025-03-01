


function HandelDataDepartmentSemster(nameDepart,AllDepaertment,idSemster){
    let SendDepart=[];
    for(let CurDepart of nameDepart){
        for(let AllCurDepart of AllDepaertment){
            if(CurDepart==AllCurDepart.username){
               SendDepart.push({
                department_id:AllCurDepart._id,
                semester_id:idSemster
               })
            }
        }
    }
    return SendDepart;
}

export {HandelDataDepartmentSemster}