



function FormateOntherime(time){
    let newTime={};
    const Keys=Object.keys(time);

    for(let k of Keys){
        newTime[k]=[];
        for(let ele of time[k] ){
            newTime[k].push([ele,1]);
        }
    }
    return newTime;
}

export default FormateOntherime;