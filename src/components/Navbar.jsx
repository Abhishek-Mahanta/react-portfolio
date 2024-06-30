import logo from "../assets/lg.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="m-2 w-10" src={logo} alt="logo" width="60" height="50" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/abhishek-mahanta-6917701a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Abhishek-Mahanta" target="_blank">
        <FaGithub />
      </a>
      <FaSquareXTwitter />
      <a href="mailto:amahanta04@gmail.com" target="_blank" rel="noopener noreferrer">
        <TfiEmail />
      </a>
    </div>
  </nav>
}

export default Navbar;