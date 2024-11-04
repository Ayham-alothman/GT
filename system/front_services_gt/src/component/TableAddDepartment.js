import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

let AllDep;

function TableAddDerpartment() {
  let [Depart, setDepart] = useState([]);
  let [ShowInput,setShowInput]=useState(0);
  let [NameD,setNameD]=useState('')
   function showIn(num){
    if(num==0&&ShowInput==0){return}
    else if(num==1&&ShowInput==1){return}
    else{setShowInput(num)}
   }

   function InsertDpartment(){
    if(NameD.length==0){alert(`do't insert name empty`);return}
     setDepart([...Depart,NameD]);
     setShowInput(0);
     setNameD('');
     AllDep=[...Depart,NameD];
   }
   function removeDepartment(ind){
    Depart.splice(ind,1);
    setDepart([...Depart]);
    AllDep=[...Depart];
   }




  return (
    <>
      <div className="w-full h-full bg-white flex flex-col relative">
        <div className=" h-12  flex justify-end ">
          <button className="bg-p4 px-4 py text-white rounded-full"onClick={()=>{showIn(1)}}>
            Add new Department
          </button>
        </div>
        <div className="flex-1  mt-1 w-96 mx-auto rounded-md flex flex-col max-h-80 ">
          <div className="h-12   bg-p3 flex flex-row justify-around items-center">
            <div className=" text-p4">Name Department</div>
            <div className=" text-p4 mr-5">Action</div>
          </div>
          <div className="flex-1 overflow-y-scroll ">
            {Depart.map((e, i) => {
              return (
                <>
                  <div className="h-12 flex justify-around items-center my-1  ">
                    <div className="flex-1 flex justify-center ml-6 border-r-2 border-p4 ">
                      <p>{e}</p>
                    </div>
                    <div className="flex-1 flex justify-around items-center">
                      <button onClick={()=>{removeDepartment(i)}} className=" bg-red-500 ml-10   px-4 py-1 rounded-full">
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className={ShowInput?" absolute top-0 left-10 w-[800px] h-80 bg-p2 flex flex-col":"hidden"}>
            <div className=" h-10 flex mx-5 mt-4 justify-end items-center"><IoMdCloseCircleOutline onClick={()=>{showIn(0)}} className=" text-p4 text-3xl"/></div>
            <div className="h-12 ml-12 mb-2 "><h1 className=" text-2xl font-bold text-p4">Add Department</h1></div>
            <div className=" ml-12 h-24"><input onChange={(e)=>{setNameD(e.target.value)}} value={NameD} className=" h-10 rounded-full" type="text" placeholder="enert name collega"></input></div>
            <div className=" flex-1 mb-8 mx-10 flex justify-end items-end"><button onClick={()=>{InsertDpartment()}} className="w-16 h-8 text-white bg-p4 rounded-full">insert</button></div>
        </div>









      </div>
    </>
  );
}

export default TableAddDerpartment;
export {AllDep} ;
