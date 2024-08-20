"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter()

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log({res});
      sessionStorage.setItem("user", JSON.stringify(true));
      setEmail("");
      setPassword("");
      router.push("/");
    } catch(e) {
      console.error(e);
    }
  };

  return (
    <form
      className="rounded-3xl w-[27.5rem] border border-dark-grey p-14 bg-dark-mode"
      onSubmit={handleLogIn}
    >
      <h1 className="text-center text-3xl font-bold mb-10">Welcome Back!</h1>
      <div className="flex flex-col gap-3 rounded-md items-center justify-center">
        <input
          className="rounded-xl p-2 bg-dark-grey w-full"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="rounded-xl p-2 bg-dark-grey w-full"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="rounded-full bg-dark-red w-32 p-2 font-bold">
          Log In
        </button>
        <p className="font-bold text-lg">or</p>
        <button className="flex items-center justify-center gap-x-10 p-2 rounded-xl bg-dark-grey w-full">
          <div className="flex w-full items-center justify-between px-10">
            <Image src="/google.png" alt="logo" width={25} height={25} />
            <p>Sign up with Google</p>
          </div>
        </button>
        <button
          className="flex items-center justify-center gap-x-10 p-2 rounded-xl bg-dark-grey w-full"
          type="submit"
        >
          <div className="flex w-full items-center justify-between px-10">
            <Image src="/facebook.png" alt="logo" width={25} height={25} />
            <p>Sign up with Facebook</p>
          </div>
        </button>
        <span className="text-sm font-bold">
          Don't have an account?
          <Link className="text-blue-600 font-bold" href="/signup">
            {" "}
            Signup
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LogInForm;
