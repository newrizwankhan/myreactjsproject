import { useState ,useEffect} from "react";
import { LOGO_URL } from "../utills/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/userOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn");

// if no dependency array => useEffect is called every render:
// if dependency array is empty [] => useEffect called on initial render(just Once)
//if dependency array is [btnNameReact] => useEffect is called when btnNameReact is updated ;


const OnlineStatus = useOnlineStatus()

  return (
    <div className="flex justify-between bg-white shadow-2xl rounded-2xl	">
      <div className="logo-container">
        <img className="w-40 pl-8 ml-5" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4  m-5 text-xl font-medium ">
          <li className="p-4 hover:font-bold">Online Status : {OnlineStatus ? "🟢":"🔴"}</li>
          <li className="p-4 hover:font-bold">
            <Link to="/" >Home</Link></li>
          <li className="p-4 hover:font-bold">
            <Link to="/about"> About US</Link></li>
          <li className="p-4 hover:font-bold"><Link to="/contact">Contact us</Link> </li>
          <li className="p-4 hover:font-bold"> Cart</li>
          <li className="p-4 hover:font-bold">
            <Link to="/grocery" >Grocery</Link></li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "LogIn"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("LogIn");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
