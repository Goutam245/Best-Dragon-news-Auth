import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button className="btn ">
         <FcGoogle></FcGoogle> Login with Google
        </button>
        <button className="btn ">
          <BsGithub></BsGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
