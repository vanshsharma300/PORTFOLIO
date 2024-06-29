import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom"
//background from ibelik.com
const NavBar = () => {
  return (
    
    <nav className=" flex  justify-between px-3 md:px-28 bg-neutral-950 shadow-2xl py-6 ">
      <div className="flex items-center justify- gap-3 md:gap-5 ">
      <Link to="/" className="text-slate-300 hover:text-slate-100 ">Home 
      </Link>
       <Link to="/about" className="text-slate-300 hover:text-slate-100">About 
        </Link>
        <Link to="/Technologies" className="text-slate-300 hover:text-slate-100">
        Technologies 
        </Link> 
       </div>
      <div className="flex text-2xl gap-4">
       <FaLinkedin  className="hover:text-slate-100"/>
        <FaGithub className="hover:text-slate-100"/>
        <FaSquareXTwitter className="hover:text-slate-100"/>
      </div>
    </nav>
    

  );
};

export default NavBar;
