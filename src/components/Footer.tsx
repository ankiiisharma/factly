import { GrPrevious } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { GrLinkPrevious } from "react-icons/gr";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[50px] lg:px-[150px] px-[30px] items-center flex justify-between bg-white shadow-sm">
        <Link to={"/"}>
          <div
            className={`hover:translate-x-3 px-5 ease-in-out duration-200 cursor-pointer`}
          >
            <GrPrevious />
          </div>
        </Link>
        <Link to={"https://www.github.com/ankiiisharma"}>
          <div
            className={`hover:translate-x-3 px-5 ease-in-out duration-200 cursor-pointer`}
          >
            <FaGithub size={20} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
