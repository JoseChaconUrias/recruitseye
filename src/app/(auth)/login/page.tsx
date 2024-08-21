import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <main className="mx-auto lg:mx-0 flex justify-center items-center min-h-screen">
      <LoginForm />
    </main>
  );
};

export default Login;
