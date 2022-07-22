import Nav from "./Nav";
import Logo from "../assets/img/logo.svg";
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <div className="py-6 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <img className="h-[30px]" src={Logo} alt="" />
          </a>
          <Nav />
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
