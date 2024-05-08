import Left from '../components/login/left'
import Right from "../components/login/right";

function Login() {
  return (
    <div className="flex md:justify-center mx-auto h-screen bg-white md:flex-row flex-col">
      <Left/>
      <Right/>
    </div>
  )
}

export default Login
