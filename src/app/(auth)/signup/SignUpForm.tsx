"use client";
import { auth } from "@/firebase/config";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log({ result });
      sessionStorage.setItem("user", JSON.stringify(true));
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert("An unknown error occurred");
      }
      console.error(error);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google user:", user);
      sessionStorage.setItem("user", JSON.stringify(true));
      router.push("/");
    } catch (error) {
      console.error("Error during Google sign-up:", error);
    }
  };

  const handleFacebookSignup = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Facebook user:", user);
      sessionStorage.setItem("user", JSON.stringify(true));
      router.push("/");
    } catch (error) {
      console.error("Error during Facebook sign-up:", error);
    }
  };

  return (
    <form
      className="rounded-3xl w-[27.5rem] border border-dark-grey p-14 bg-dark-mode"
      onSubmit={handleSignUp}
    >
      <h1 className="text-center text-3xl font-bold mb-10">Recruits Eye</h1>
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
        <input
          className="rounded-xl p-2 bg-dark-grey w-full"
          type="password"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          className="rounded-full bg-dark-red w-32 p-2 font-bold"
          type="submit"
        >
          Sign Up
        </button>
        <p className="font-bold text-lg">or</p>
        <button
          className="flex items-center justify-center gap-x-10 p-2 rounded-xl bg-dark-grey w-full"
          onClick={handleGoogleSignUp}
        >
          <div className="flex w-full items-center justify-between px-10">
            <Image src="/google.png" alt="logo" width={25} height={25} />
            <p>Sign up with Google</p>
          </div>
        </button>
        <button
          className="flex items-center justify-center gap-x-10 p-2 rounded-xl bg-dark-grey w-full"
          onClick={handleFacebookSignup}
        >
          <div className="flex w-full items-center justify-between px-10">
            <Image src="/facebook.png" alt="logo" width={25} height={25} />
            <p>Sign up with Facebook</p>
          </div>
        </button>
        <span className="text-sm font-bold">
          Already have an account?
          <Link className="text-blue-600 font-bold" href="/login">
            {" "}
            Login
          </Link>
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
