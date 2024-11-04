import Navbar from "../component/frequentcomponent/Navbar"

function AddCourse(){
    return(
    <>
     <div className=" h-screen  flex flex-col">
       <Navbar/>
       <div className="h-28 flex px-10 pt-3 ">
        <div className=" basis-1/5"><h1 className=" text-2xl text-p4">Study Plan:</h1></div>
        <div className=" basis-4/5 flex pt-6">
            <div className="flex flex-col">
                <p className=" text-sm font-light mb-1 ">Acadmic year</p>
                <input type="text" className=" border w-48 h-8 pl-3 rounded-full border-px " placeholder="Acadmic year" ></input>
            </div>

            <div className="flex flex-col ml-44">
                <p className=" text-sm font-light mb-1 ">Semester</p>
                <input type="text" className=" border w-48 h-8 pl-3 rounded-full border-px " placeholder="Semester" ></input>
            </div>
            
        </div>
       </div>
       
       <div className="flex-1 bg-backgroundReg bg-cover mt-5 flex flex-col px-8 ">
         <div className="flex-1 flex  ">
            <div className=" basis-1/5 flex"><h1 className=" text-2xl text-p4">Names :</h1></div>
            <div className=" basis-4/5 flex space-x-12">
              <div className="flex flex-col">
                  <p className=" text-sm font-light mb-1 ">Course Name English</p>
                  <input type="text" className=" border w-48 h-8 pl-3 rounded-full border-px " placeholder="Course Name English" ></input>
              </div>
              <div className="flex flex-col">
                  <p className=" text-sm font-light mb-1 ">Course Name Arabic</p>
                  <input type="text" className=" border w-48 h-8 pl-3 rounded-full border-px " placeholder="Course Name Arabic" ></input>
              </div>
              <div className="flex flex-col">
                  <p className=" text-sm font-light mb-1 ">Course code</p>
                  <input type="text" className=" border w-48 h-8 pl-3 rounded-full border-px " placeholder="Course code" ></input>
              </div>

           
            </div>

         </div>

         <div className="flex-1 flex">
            <div className="basis-1/5"><h1 className=" text-2xl text-p4 ">Number of Course houres :</h1></div>
            <div className="flex flex-col basis-4/5">
                  <p className=" text-sm font-light mb-1 ">Number of Course houres</p>
                  <input type="text" className=" border w-48 h-8 pl-3 rounded-full border-px " placeholder="Number of Course houres" ></input>
            </div>
         </div>

         <div className="flex-1 flex">
            <div className="basis-1/5"><h1 className=" text-2xl text-p4 "> Description course :</h1></div>
            <div className="flex flex-col basis-4/5">
                  <input type="text" className=" border w-96 h-28 pl-3 rounded-lg border-px " placeholder="Description course" ></input>
            </div>
         </div>
       </div>
        
     </div>
    </>
    )
}

export default AddCourse