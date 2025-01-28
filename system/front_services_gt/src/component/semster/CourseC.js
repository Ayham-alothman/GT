import { IoSend } from "react-icons/io5";




function CourseC(){
    return(
        <div className="h-screen flex flex-col">
            <div className=" h-12">
                <h1 className="ml-5 text-3xl text-p4 font-bold">Add Course</h1>
            </div>

            <div className=" h-28 flex justify-between px-20 text-lg font-light text-p4">
              <div>
                <div className="mb-3">select course "Name English"</div>
                <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
                 <option value="1">Option 1</option>
                 <option value="2">Option 2</option>
                 <option value="3">Option 3</option>
                 <option value="4">Option 4</option>
                 <option value="5">Option 5</option>
               </select>
              </div>
              
              <div className="flex flex-col mb-4">
                 <label className="mb-2 text-gray-700" htmlFor="inputId">
                   Min number class
                 </label>
                 <input
                   id="inputId"
                   type="text"
                   className=" w-24 rounded-2xl border border-gray-300  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   placeholder="Enter your text"
                 />
              </div>

              <div className="flex flex-col mb-4">
                 <label className="mb-2 text-gray-700" htmlFor="inputId">
                 Max number class
                 </label>
                 <input
                   id="inputId"
                   type="text"
                   className=" w-24 rounded-2xl border border-gray-300  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   placeholder="Enter your text"
                 />
              </div>

              <div className="flex flex-col mb-4">
                 <label className="mb-2 text-gray-700" htmlFor="inputId">
                   Hourse course
                 </label>
                 <input
                   id="inputId"
                   type="text"
                   className=" w-24 rounded-2xl border-gray-300  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   placeholder="Enter your text"
                 />
              </div>




            </div>



            <div className=" h-36 flex justify-between px-20 text-xl text-p4 font-light ">

               <div className=" ">
                 <div className="mb-3">Type class</div>
                 <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                  <option value="5">Option 5</option>
                 </select>
               </div>
               
               <div className="  flex flex-col justify-around text-xl text-p4 font-light">
                <div className="flex space-x-4">

                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       id="checkboxId"
                       className="form-checkbox h-5 w-5 text-blue-600"
                     />
                     <p className="ml-2 text-gray-700">start with individual period</p>
                   </div> 


                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       id="checkboxId"
                       className="form-checkbox h-5 w-5 text-blue-600"
                     />
                     <p className="ml-2 text-gray-700">Multi teacher</p>
                   </div> 
                 
                </div>

                <div className="flex space-x-4">
                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       id="checkboxId"
                       className="form-checkbox h-5 w-5 text-blue-600"
                     />
                     <p className="ml-2 text-gray-700">Possibilty of conflict lab</p>
                   </div> 


                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       id="checkboxId"
                       className="form-checkbox h-5 w-5 text-blue-600"
                     />
                     <p className="ml-2 text-gray-700">All same day</p>
                   </div> 
                </div>
               </div>  
           
            </div>

            <div className=" h-20 flex justify-between px-20 items-center text-p4">

               <div className="flex space-x-4 ">
                <div>
                <div className="mb-1">name teachers</div>
                 <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                  <option value="5">Option 5</option>
                 </select>

                </div>
                <div className="flex items-center">
                    <p className=" text-2xl"><IoSend /></p>
                </div>
               </div>

               
               <div className="h-10 w-28  "> <button className="w-full h-full bg-blue-700 text-white rounded-3xl">Save</button> </div>

            </div>

            <div className="ml-20 flex-1 flex  ">
                <div className="w-72 h-full flex flex-col  mr-2">
                    <div className="bg-p4 w-full h-10 flex items-center justify-center text-white rounded-xl">name techers</div>
                    <div className="flex-1 bg-white">
                        <div className="border-b-2 border-p4 flex justify-center">name techers</div>
                    </div>
                </div>
                <div className=" flex-1  flex flex-col ">
                    <div className=" bg-p4 h-14  rounded-xl flex justify-around items-start text-white p-2">
                        <div>name course</div>
                        <div>min class</div>
                        <div>max class</div>
                        <div>type class</div>
                        
                    </div>
                    <div className=" bg-white h-full w-full rounded-xl overflow-y-scroll">
                        <div className="flex justify-around items-center border-b-2 border-p4">
                         <div>name course</div>
                         <div>min class</div>
                         <div>max class</div>
                         <div>type class</div>
                         

                        </div>
                    </div>
                </div>
                <div className=" w-60 flex items-end justify-center    ">
                    <button className=" w-44 bg-p4 h-12 text-white rounded-2xl">Set All Courses</button>
                </div>
            </div>
            
            <div className="h-3"></div>

        </div>
   )
}

export default CourseC;