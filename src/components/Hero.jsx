import heropic from "../assets/profilepic.jpg";

const Hero = () => {
  return (
    <div className = "flex justify-center flex-col lg:flex-row pb-4 lg:ml-10" >
        
      <div className="w-full lg:w-1/2 mt-[300px] lg:mt-[20px] " >
        <div className="flex flex-col items-center lg:items-start">
            <h1 className="display:block pb-10 text-6xl font-thin tracking-tight lg:mt-6 lg:text-7xl lg:ml-3">Vansh Sharma
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl  tracking-tight text-transparent  lg:ml-3">Full stack Developer
            </span>
            <p className = "ml-3 max-w-xl py-6 font-light tracking-tight text-sm lg:text-xl">
            I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB.
             </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:pl-56 pt-14 mb-8 ">
        <div className="border-blue-300 absolute lg:static top-[150px] w-52 h-52 left-[12px]  lg:w-1/2">
            <img src={heropic} alt="vansh pic" className="border-blue-300 rounded-lg w-80 shadow-2xl shadow-slate-600 ml-[100px] lg:ml-[-20px]  "/>

        </div> 
        </div>
   
    </div>
  )
}

export default Hero;
