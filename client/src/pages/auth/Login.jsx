import LoginImg from "../../assets/Exams-bro.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <div className="fixed top-0 left-0 -z-10 bg-primary w-1/2 h-screen rounded-tr-3xl rounded-br-3xl"></div>
        <div className="flex w-2/3 items-center justify-center m-auto mt-28 bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-600">
          <div className="w-1/2 flex flex-col items-center">
            <div className="pb-10">
              <p className="text-3xl font-bold">Welcome to IMS</p>
            </div>
            <form
              className="w-full flex flex-col px-10 gap-8 items-center "
              onSubmit={handleSubmit}
            >
              <input
              // required
                type="email"
                placeholder="Enter Your Email"
                className="w-full border border-primary rounded-lg text-sm focus:ring-1 focus:ring-primary focus:border-primary active:outline-none active:ring-1 active:ring-primary active:border-primary"
              />
              <input
                // required
                type="password"
                placeholder="Enter Your Password"
                className="w-full border border-primary rounded-lg text-sm focus:ring-1 focus:ring-primary focus:border-primary active:outline-none active:ring-1 active:ring-primary active:border-primary"
              />
              <button
                type="submit"
                className="bg-primary px-6 py-2 rounded-md hover:bg-dark"
              >
                Log In
              </button>
            </form>
          </div>
          <div className="w-1/2 bg-primary">
            <img src={LoginImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
