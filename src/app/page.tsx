import Navbar from "@/components/layout/NavBar";
import Home from "@/app/(pages)/Home/page";
import ScrollUp from "@/components/ui/scrollUp";
import Footer from "@/components/layout/Footer";

const Main = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <ScrollUp/>
      <Footer/>
    </main>
  );
};

export default Main;
