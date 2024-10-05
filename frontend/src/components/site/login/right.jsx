import Logo from "../../../images/logo_login.png";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import useLogin from "../../../hooks/site/useLogin";

function Right() {
  const { email, password, error, success, handleLogin } = useLogin();
  return (
    <div className="md:w-[40%]">
      <Link to="/">
        <IoCloseSharp className="absolute text-[45px] top-5 right-5 text-black cursor-pointer" />
      </Link>
      <div className="flex flex-col items-center justify-center h-screen">
        <Link to="/">
          <img src={Logo} className="h-[40px] mt-8 cursor-pointer" alt="" />
        </Link>
        <div className="mt-10 md:w-[50%] px-4 md:px-0">
          <h2 className="text-[26px] font-bold nunito-font">Login</h2>
          <p className="nunito-font text-[14px] mt-4 text-gray-500">
            Entre com os dados que você forneceu durante o seu cadastro.
          </p>
          <form className="mt-6" onSubmit={handleLogin}>
            <label
              className="nunito-font text-[14px] mt-4 text-gray-500"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md	h-[40px] p-2 text-black font-bold nunito-font mt-1 mb-4 placeholder:font-normal"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="nunito-font text-[14px] mt-4 text-gray-500"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md	h-[40px] p-2 text-black font-bold nunito-font mt-1 mb-4 placeholder:font-normal"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full h-[40px] bg-black mt-4 text-white nunito-font rounded-md"
              type="submit"
            >
              Login
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-500 mt-2">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Right;
