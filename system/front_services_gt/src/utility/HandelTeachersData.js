

function HandelDataTeachrs(tea,time){
    
    let TimeTeachers={}

    let newTime={}

    let Keys=Object.keys(time);
    for(let key of Keys){
        newTime[key]=[];
        for(let val of time[key]){
            newTime[key].push([val,1]);
        }
    }
 
    let KT=Object.keys(tea);
    for(let i=0 ;i<KT.length;i++){
        TimeTeachers[KT[i]]=[newTime]
    }
    return TimeTeachers

}

export default HandelDataTeachrs;