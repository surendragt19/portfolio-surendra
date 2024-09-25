import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "remixicon/fonts/remixicon.css";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white font-[Roboto-regular] overflow-hidden">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
