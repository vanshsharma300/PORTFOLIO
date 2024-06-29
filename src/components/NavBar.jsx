import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
//background from ibelik.com
const NavBar = () => {
  return (
    <nav className="mb-15 flex items-center justify-between py-6 lg:mb-20">

<div className="flex flex-shrink-0 items-center">
   

</div>

<div className="m-8 flex items-center justify-center gap-5 text-2xl" >
    <FaLinkedin />
    <FaGithub />
    <FaSquareXTwitter />
    
</div>

  </nav>
  )
}

export default NavBar;


