import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex  justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-4  border-2 border-blue-400 rounded-lg  border-dashed">
        <Link className=" " to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={userIcon} alt="" />
        </div>
        <button className="btn btn-primary rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
