import LoginImg from "../../assets/Exams-bro.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/micro/Loading";
import {
  login,
  selectError,
  selectIsLoading,
  selectSuccess,
  selectUserInfo,
} from "./features/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector(selectUserInfo);

  const loading = useSelector(selectIsLoading);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(selectError);
  const success = useSelector(selectSuccess);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ username, password }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(`/`);
    } else {
      navigate("/login");
    }
  }, [userInfo, error, success, loading, navigate]);
  if (loading) {
    <Loading />;
  }
  return (
    <div>
      <div>
        <div className="fixed top-0 left-0 -z-10 bg-primary w-1/2 h-screen rounded-tr-3xl rounded-br-3xl"></div>
        <div className="md:flex w-2/3 items-center justify-center m-auto mt-28 bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-600">
          <div className="md:w-1/2 w-2-3 flex flex-col items-center">
            <div className="p-5">
              <p className="lg:text-3xl md:text-xl text-lg font-bold pt-10 md:pt-0">
                Welcome to IMS
              </p>
            </div>
            <form
              className="w-full flex flex-col px-10 py-10 gap-8 items-center "
              onSubmit={handleLogin}
            >
              <input
                autoComplete="off"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter Your Username"
                className="w-full border border-primary rounded-lg text-sm focus:ring-1 focus:ring-primary focus:border-primary active:outline-none active:ring-1 active:ring-primary active:border-primary"
              />
              <input
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <div className="w-1/2 bg-primary hidden md:block">
            <img src={LoginImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
