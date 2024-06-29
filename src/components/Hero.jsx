import heropic from "../assets/profilepic.jpg";

const Hero = () => {
  return (
    <div className="flex justify-center flex-col-reverse gap-6 mx-4 md:flex-row mt-12">
    

      <div className="w-full md:w-1/2 flex items-center justify-center md:mt-[20px] py-5">
        <div className="flex flex-col items-center md:items-start">
          <h1 className=" pb-6 text-6xl font-thin tracking-tight md:mt-6 md:text-7xl ">
            Vansh Sharma
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl  text-transparent md:ml-1">
           Web Developer
          </span>
          <p className=" max-w-xl pt-6 font-light md:ml-1 text-sm md:text-xl text-justify">
            I am a passionate full stack developer with a knack for crafting
            robust and scalable web applications. With 5 years of hands-on
            experience, I have honed my skills in front-end technologies like
            React and Next.js, as well as back-end technologies like Node.js,
            MySQL, PostgreSQL, and MongoDB.
          </p>
        </div>
      </div>

      <div className="md:min-h-[70vh] md:w-1/2 flex items-center justify-center">
        <div className=" w-1/2 md:w-1/2 flex items-center justify-center">
          <img
            src={heropic}
            alt="vansh pic"
            className="rounded-lg md:rounded-xl shadow-lg shadow-slate-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
