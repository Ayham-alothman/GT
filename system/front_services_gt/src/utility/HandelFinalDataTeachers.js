
function HandelFinalData(Data){
    const Data = JSON.parse(JSON.stringify(Data));
    
    let Keys=Object.keys(Data);
  
    for(let k of Keys){
      
      for(let k1 of Data[k]){
       
          let Keys1=Object.keys(k1);
        for(let ele of Keys1){
          
            for(let Nele of k1[ele] ){console.log(k,k1,ele,Nele)
                if(Nele[1]==1){Nele=Nele[1]}
                
            }
            
        }
      }
    }
  
   }
  
   let teachers ={
    1: [
        {
            1: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0]],
            2: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0], [5, 1], [6, 0]],
        },
        {
            1: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0]],
            3: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0], [5, 1], [6, 0]],
        },
    ],
    2: [
        {
            1: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0]],
            3: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0], [5, 1], [6, 0]],
        },
    ]
}

  
      HandelFinalData(teachers)