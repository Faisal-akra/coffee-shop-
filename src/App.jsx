import About from "./myComponents/About";
import { Beans } from "./myComponents/Beans";
import { Coffes } from "./myComponents/Coffees";
import { Drinking } from "./myComponents/DrinkingSec";
import Navbar from "./myComponents/Navbar";



const App = () => {
  return(
    <div>
      <Navbar/>
      <About/>
    <h1 className="text-center mb-10 font-extrabold text-amber-700 ">Coffess</h1>
      <Coffes/>
    <h1 className="text-center mb-10 font-extrabold text-amber-700 ">Beans</h1>
      <Beans/>
    <h1 className="text-center mb-10 mt-10 font-extrabold text-amber-700 ">Cafe-Teria Enviroment</h1>

      <Drinking/>
    </div>
  )
}

export default App;