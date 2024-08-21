import Image from "next/image";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <main className="flex flex-col lg:px-2 xl:px-32 justify-between">
      <section className="hidden lg:flex flex-row justify-between items-center min-h-screen">
        <div className="hidden lg:block w-[638px] ">
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
                <p className="text-xl font-bold xl:text-3xl">Create</p>
              </div>
            </div>
            <div className="w-[214px] h-[167px] flex items-center justify-center">
              <p className="text-xl font-bold xl:text-3xl">Explore</p>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <p className="text-center text-xl font-bold xl:text-3xl">
            The difference between the impossible and the possible lies in a
            person's determination.
          </p>
        </div>
      </section>

      <section className="flex flex-row items-center justify-between min-h-screen">
        <div className="hidden lg:flex flex-row gap-20 items-center">
          <Image
            src="/landing7.jpg"
            alt="photo"
            width={200}
            height={200}
            className="w-[288px] h-[455px] rounded-xl"
          />
          <div>
            <p className="text-3xl xl:text-6xl font-bold">
              Share <br /> and <br /> Inspire
            </p>
          </div>
        </div>
        <div className="mx-auto lg:mx-0">
          <SignupForm />
        </div>
      </section>
    </main>
  );
};

export default Signup;
