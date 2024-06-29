import React from "react";

const About = () => {
  return (
    <div className=" border-b border-neutral-900 md:pb-[100px]  mx-4 pb-2">
      <h2 className=" my-10 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className=" flex flex-wrap ">
        <div className="w-full md:w-1/2 md:">
          <div className="flex items-center justify-center">
            <img
              src="./src/assets/about.jpg"
              alt="about image"
              className="rounded-2xl w-[300px] md:w-[500px] md:h-[400px] border-2"
            ></img>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="flex justify-center items-center md:start">
            <p className="md:mt-20 my-2 max-w-lg py-6 text-justify">
              I am a dedicated and versatile full stack developer with a passion
              for creating efficient and user-friendly web applications. With 5
              years of professional experience, I have worked with a variety of
              technologies, including React, Next.js, Node.js, MySQL, PostgreSQL and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
