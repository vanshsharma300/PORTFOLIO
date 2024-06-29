import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-[214px] md:pb-[338px] mx-5">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
         
         <div className="hover:bg-slate-800 rounded-2xl border-4 border-neutral-800 p-4">
         <IoLogoJavascript className="text-7xl text-yellow-400"/>
         </div>
       
         <div className="hover:bg-slate-800 rounded-2xl border-4 border-neutral-800 p-4">
         <FaReact className="text-7xl text-cyan-400"/>
         </div>

         <div className="hover:bg-slate-800 rounded-2xl border-4 border-neutral-800 p-4">
         <TiHtml5 className="text-7xl text-red-600"/>
         </div>

         <div className="hover:bg-slate-800 rounded-2xl border-4 border-neutral-800 p-4">
         <SiTailwindcss className="text-7xl text-cyan-400"/>
         </div>

         <div className=" hover:bg-slate-800 rounded-2xl border-4 border-neutral-800 p-4">
         <RiNodejsLine className="text-7xl text-green-400"/>
         </div>

      </div>
    </div>
  )
}

export default Technologies
