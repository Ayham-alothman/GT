function CombainTimeClass(Class, Time) {
    let KC = Object.keys(Class);
    let Days = Object.keys(Time);
    let newOb = {};

    for (let C of KC) {
        let val = Number(Class[C]);
        newOb[C] = {}; 

        for (let D of Days) {
            newOb[C][D] = {}; 

            for (let i = 0; i < Time[D].length; i++) {
                
                    if(Time[D][i]&&Time[D][i]!=0){
                        newOb[C][D][Time[D][i]] = val;
                    } 
                
            }
        }
    }
    return newOb;
}

export default CombainTimeClass;