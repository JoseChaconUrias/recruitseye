import Image from "next/image";
import Link from "next/link";
import LogInForm from "./LogInForm";

const LogIn = () => {
  return (
    <main className="flex flex-row justify-center items-center min-h-screen p-32">
      <LogInForm />
    </main>
  );
};

export default LogIn;
