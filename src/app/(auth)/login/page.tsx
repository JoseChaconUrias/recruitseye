import Image from "next/image";
import Link from "next/link";
import LogInForm from "./LogInForm";

const LogIn = () => {
  return (
    <main className="mx-auto lg:mx-0 flex justify-center items-center min-h-screen">
      <LogInForm />
    </main>
  );
};

export default LogIn;
