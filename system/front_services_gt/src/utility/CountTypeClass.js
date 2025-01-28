

function CountTypeClass(ob){
    let Types={}
    Object.keys(ob).map((course)=>{
        if(Types[ob[course].typeC]){
            Types[ob[course].typeC]=Types[ob[course].typeC]+ob[course].hall
        }
        else{
            Types[ob[course].typeC]=Number(ob[course].hall);
        }
    })
    return Types;
}

export default CountTypeClass;