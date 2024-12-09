import { FaFacebook, FaInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex border border-blue-400 join-vertical *:bg-base-100">
        <button className="btn border border-blue-400 join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn border border-blue-400 join-item justify-start">
          <FaInstagram></FaInstagram> Instagram
        </button>
        <button className="btn border border-blue-400 join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
      </div>
    </div>
  );
};

export default FindUs;