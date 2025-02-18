import About from "./myComponents/About";
import { Coffes } from "./myComponents/Coffees";
import Navbar from "./myComponents/Navbar";



const App = () => {
  return(
    <div>
      <Navbar/>
      <About/>
    <h1 className="text-center mb-16 font-extrabold text-amber-700 ">Coffess</h1>

      <Coffes/>
    </div>
  )
}

export default App;