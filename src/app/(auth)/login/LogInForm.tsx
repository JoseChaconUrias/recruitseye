import Image from "next/image"
import Link from "next/link"

const LogInForm = () => {
  return (
    <form className="rounded-3xl w-[27.5rem] border border-dark-grey p-14 bg-dark-mode">
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
        <Link className="text-blue-600 font-bold" href="/signup">
          {" "}
          Signup
        </Link>
      </span>
    </div>
  </form>
  )
}

export default LogInForm