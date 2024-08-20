import Image from "next/image";
import SignUpForm from "./SignUpForm";

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
      <SignUpForm />
    </main>
  );
};

export default SignUp;
