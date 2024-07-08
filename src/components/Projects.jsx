import React from "react";

const Projects = () => {
  return (
    <div className="mt-6">
      <h1 className="flex justify-center text-2xl">Projects</h1>
      <div className=" flex flex-col md:flex-row mt-4 md:mt-7 
      border-green-800 ">
       
          <div className="p-14 md:w-[50%] flex items-center justify-center ">
         <img src="./src/assets/typingpic.png" alt="project-img"  className="w-80 rounded-lg  border-2 border-slate-500"/>
          </div>

          <div className="px-2 md:w-[50%] flex flex-col pl-4 md:pl-0 justify-center py-5 gap-4 mr-6">
            <div className=" flex flex-col md:gap-3 md:items-center bg-black rounded-xl py-5 px-2">
              <h1 className="text-xl underline cursor-pointer text-center">
                 
                To Do List
              </h1>
              <p className="text-white text-sm md:text-md text-justify ">
                It is a full stack project which covers all the crud operations
                of the backend.
              </p>
              <li className=" list-none flex md:gap-3">
                <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
                  HTML
                </li>
                <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
                  CSS
                </li>
                <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
                  JAVASCRIPT
                </li>
                <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
                  REACT JS
                </li>
                <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
                  NODE JS
                </li>
                <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
                  EXPRESS JS
                </li>
              </li>
            </div>
          </div>
         
          </div>

          <div className=" flex flex-col md:flex-row mt-4 md:mt-4">
       
          <div className=" p-14 md:w-[50%] flex items-center justify-center ">
            <img src="./src/assets/typingpic.png" alt="project-img"  className="w-80 rounded-lg  border-2 border-slate-500"/>
          </div>

          <div className="px-2 md:w-[50%] flex flex-col pl-4 md:pl-0 justify-center py-5 gap-4 mr-6">
            <div className=" flex flex-col md:gap-3 md:items-center bg-black rounded-xl py-5 px-2">
              <h1 className="text-xl underline cursor-pointer text-center">
                {" "}
                Typing Speed Test
              </h1>
              <p className="text-white text-sm md:text-md text-justify ">
                It is a full stack project which covers all the crud operations
                of the backend.
              </p>
              <li className=" list-none flex md:gap-3">
                <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
                  HTML
                </li>
                <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
                  CSS
                </li>
                <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
                  JAVASCRIPT
                </li>
              </li>
            </div>
          </div>
         
          </div>

          <div className=" flex flex-col md:flex-row mt-4 md:mt-4">
       
       <div className=" p-14 md:w-[50%] flex items-center justify-center ">
         
       <img src="./src/assets/typingpic.png" alt="project-img"  className="w-80 rounded-lg border-2 border-slate-500"/>
       </div>

       <div className="px-2 md:w-[50%] flex flex-col pl-4 md:pl-0 justify-center py-5 gap-4 mr-6">
         <div className=" flex flex-col md:gap-3 md:items-center bg-black rounded-xl py-5">
           <h1 className="text-xl underline cursor-pointer text-center px-2">
             {" "}
             To Do List
           </h1>
           <p className="text-white text-sm md:text-md text-justify ">
             It is a full stack project which covers all the crud operations
             of the backend.
           </p>
           <li className=" list-none flex md:gap-3">
             <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
               HTML
             </li>
             <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
               CSS
             </li>
             <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
               JAVASCRIPT
             </li>
             <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
               REACT JS
             </li>
             <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
               NODE JS
             </li>
             <li className="border-b text-sm md:text-lg text-violet-600 md:border-2 border-violet-600 px-2 py-1 font-bold rounded-lg cursor-pointer">
               EXPRESS JS
             </li>
           </li>
         </div>
       </div>
      
       </div>

        </div>
    

  );
};

export default Projects;
