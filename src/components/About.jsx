import React from 'react'

const About = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
        <h2 className =" my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
        </h2>
        <div className=" flex flex-wrap ">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src='./src/assets/about.jpg' alt="about image" className="rounded-2xl"></img>
                </div>
             </div>
                <div className="w-full lg:w-1/2">
                    <div className='flex justify-center lg:start'>
                        <p className='my-2 max-w-xl py-6'>I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. 
</p>

                    </div>

                </div>

        </div>
      
    </div>
  )
}

export default About;
