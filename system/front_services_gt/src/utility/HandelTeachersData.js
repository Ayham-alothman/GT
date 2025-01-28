

function HandelDataTeachrs(num,time){
    
    let TimeTeachers={}

    let newTime={}

    let Keys=Object.keys(time);
    for(let key of Keys){
        newTime[key]=[];
        for(let val of time[key]){
            newTime[key].push([val,true]);
        }
    }

    for(let i=0 ;i<num;i++){
        TimeTeachers[i]=[newTime]
    }
    return TimeTeachers

}

export default HandelDataTeachrs;