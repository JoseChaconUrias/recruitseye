import Link from "next/link";

const LogIn = () => {
  return (
    <main className="flex flex-row justify-center items-center min-h-screen p-32">
        <div className="rounded-3xl w-[424px] border border-dark-grey p-14">
            <h1 className="text-center text-3xl font-bold mb-10">Recruits Eye</h1>
            <div className="flex flex-col gap-3 rounded-md items-center justify-center">
              <input className="rounded-xl p-2 bg-dark-grey w-full" type="text" placeholder="Username"/>
              <input className="rounded-xl p-2 bg-dark-grey w-full" type="text" placeholder="Email"/>
              <input className="rounded-xl p-2 bg-dark-grey w-full" type="password" placeholder="Password"/>
              <button className="rounded-full bg-dark-red w-32 p-2 font-bold">Sign Up</button>
              <p className="font-bold text-lg">or</p>
              <button className=" p-2 rounded-xl bg-dark-grey w-full">Log in with Google</button>
              <button className=" p-2 rounded-xl bg-dark-grey w-full">Log in with Facebook</button>
              <span className=" font-bold">Already have an account?<Link className="text-blue-600 font-bold" href="/signup"> Login</Link></span>
            </div>
        </div>
    </main>
  );
};

export default LogIn;
