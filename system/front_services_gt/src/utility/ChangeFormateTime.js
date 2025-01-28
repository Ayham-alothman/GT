



function ChangeFormateTime(ob){
    let newFormat={}
      Object.entries(ob).map(([day,time]) => {
        let newTime=[]
        time.forEach((e,i)=>{
            if(e==1){newTime.push(i)}
        })
        newFormat[day]=newTime;

      })
      
      return newFormat;
    
    }

    export default ChangeFormateTime;

    