import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className=" bg-gray-300 ">
      <div className="flex justify-between border-t md:px-10 px-2 border-gray-400">
        <div className="flex items-center justify-center text-xs">Copyright &copy; 2024 and build by- @gxaryan</div>
        <div>
          <div className="flex items-center justify-center py-2 space-x-2 md:space-x-4">
            <a href="https://github.com/aryanpatel077">
              <FaSquareGithub />
            </a>
            <a href="https://www.linkedin.com/in/aryan-patel-se">
              <FaLinkedin />
            </a>
            <a href="https://github.com/aryanpatel077">
              <FaSquareInstagram />
            </a>
            <a href="https://github.com/aryanpatel077">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
