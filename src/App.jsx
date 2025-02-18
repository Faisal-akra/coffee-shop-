import About from "./myComponents/About";
import { Beans } from "./myComponents/Beans";
import { Coffes } from "./myComponents/Coffees";
import { Drinking } from "./myComponents/DrinkingSec";
import Footer from "./myComponents/Footer";
import Navbar from "./myComponents/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <h1 className="text-center mb-10 font-extrabold text-amber-800 font-serif text-3xl">
        Coffess
      </h1>
      <Coffes />
      <h1 className="text-center mb-10 mt-5 font-extrabold text-amber-800 font-serif text-3xl">

        Beans
      </h1>
      <Beans />
      <h1 className="text-center mb-10 mt-10 font-extrabold text-amber-800 font-serif text-3xl">

        Cafe-Teria Enviroment
      </h1>
      <Drinking />
      <Footer/>
    </div>
  );
};

export default App;
