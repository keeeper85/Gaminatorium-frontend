import Navbar from "../components/Navbar/Navbar";
import { AuthProvider } from "../contexts/Authcontext";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element
}

function Layout({children}: LayoutProps) {
  return (
    <AuthProvider>
      <header className="flex justify-center">
        <Navbar />
      </header>

      <main className='flex flex-col justify-center items-center'>
        <section className='w-ful'>
          {children}
        </section>

      </main>
    </AuthProvider>
  );
}

export default Layout;
