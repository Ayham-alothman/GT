function HandelFinalDataTeachers(Data) {
    let Data1 = JSON.parse(JSON.stringify(Data)); // Deep copy of Data
    
    let Keys = Object.keys(Data1);

    for (let k of Keys) {
        for (let k1 of Data1[k]) {
            let Keys1 = Object.keys(k1);
            for (let ele of Keys1) {
                // Filter the array based on the second element
                k1[ele] = k1[ele].filter(Nele => Nele[1] === 1).map(Nele => Nele[0]);
            }
        }
    }
    return Data1;
}


export default HandelFinalDataTeachers;