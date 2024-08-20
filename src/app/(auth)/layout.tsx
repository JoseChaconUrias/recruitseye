import AuthNavBar from "@/components/header/AuthNavBar";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="fixed top-0 left-0 right-0">
        <AuthNavBar />        
      </div>

      <section>{children}</section>
    </main>
  );
};

export default AuthLayout;
