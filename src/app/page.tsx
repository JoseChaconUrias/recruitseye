"use client";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/config";
import { useRouter } from 'next/navigation';
import { signOut } from "firebase/auth"

const Home = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const userSession = sessionStorage.getItem('user');

  console.log(user)

  if (!user && !userSession) {
    router.push("/signup")
  }

  return (
    <main>
      <h1>Hello World!</h1>
      <button
        onClick={() => {
          signOut(auth)
          sessionStorage.removeItem('user')
        }}>
        Logout
      </button>      
    </main>

  )
}

export default Home;