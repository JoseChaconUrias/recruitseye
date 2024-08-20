import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <main className="flex flex-col min-h-screen p-32">
      <section className="w-[638px] h-screen">
        <div className="flex flex-row gap-3 mb-3">
          <Image
            src="/landing4.jpg"
            alt="photo"
            width={200}
            height={200}
            className="w-1/2 h-[214px] rounded-xl"
          />
          <Image
            src="/landing5.jpg"
            alt="photo"
            width={200}
            height={200}
            className="w-1/2 h-[214px] rounded-xl"
          />
        </div>
        <div className="flex gap-3">
          <Image
            src="/landing1.jpg"
            alt="photo"
            width={200}
            height={200}
            className="w-[214px] h-[334px] rounded-xl"
          />
          <div>
            <Image
              src="/landing6.jpg"
              alt="photo"
              width={200}
              height={200}
              className="w-[214px] h-[167px] rounded-xl"
            />
            <div className="w-[214px] h-[167px] flex items-center justify-center">
              <p className="text-3xl font-bold">Create</p>
            </div>
          </div>
          <div className="w-[214px] h-[167px] flex items-center justify-center">
            <p className="text-3xl font-bold">Explore</p>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="flex flex-row gap-20 items-center">
          <Image
            src="/landing7.jpg"
            alt="photo"
            width={200}
            height={200}
            className="w-[288px] h-[455px] rounded-xl"
          />
          <div>
            <p className="text-6xl font-bold">
              Share <br /> and <br /> Inspire
            </p>
          </div>
        </div>
      </section>
      <div className="rounded-3xl w-[27.5rem] border border-dark-grey p-14 fixed right-48 bg-dark-mode">
        <h1 className="text-center text-3xl font-bold mb-10">Recruits Eye</h1>
        <div className="flex flex-col gap-3 rounded-md items-center justify-center">
          <input
            className="rounded-xl p-2 bg-dark-grey w-full"
            type="text"
            placeholder="Username"
          />
          <input
            className="rounded-xl p-2 bg-dark-grey w-full"
            type="text"
            placeholder="Email"
          />
          <input
            className="rounded-xl p-2 bg-dark-grey w-full"
            type="password"
            placeholder="Password"
          />
          <input
            className="rounded-xl p-2 bg-dark-grey w-full"
            type="password"
            placeholder="Confirm Password"
          />
          <button className="rounded-full bg-dark-red w-32 p-2 font-bold">
            Sign Up
          </button>
          <p className="font-bold text-lg">or</p>
          <button className="flex items-center justify-center gap-x-10 p-2 rounded-xl bg-dark-grey w-full">
            <div className="flex w-full items-center justify-between px-10">
              <Image src="/google.png" alt="logo" width={25} height={25} />
              <p>Sign up with Google</p>              
            </div>
          </button>
          <button className="flex items-center justify-center gap-x-10 p-2 rounded-xl bg-dark-grey w-full">
            <div className="flex w-full items-center justify-between px-10">
              <Image src="/facebook.png" alt="logo" width={25} height={25} />
              <p>Sign up with Facebook</p>              
            </div>
          </button>
          <span className=" font-bold">
            Already have an account?
            <Link className="text-blue-600 font-bold" href="/login">
              {" "}
              Login
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
