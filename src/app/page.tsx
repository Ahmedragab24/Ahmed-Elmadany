import Navbar from "@/components/layout/NavBar";
import Home from "./(pages)/Home/page";
import ScrollUp from "@/components/ui/scrollUp";

const Main = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <ScrollUp/>
    </main>
  );
};

export default Main;
