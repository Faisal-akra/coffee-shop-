import cup from "../assets/Coffees/cup.png";
// import drink from '../assets/Coffees/drink.png'

export const Coffes = () => {
  return (
    <>
    <div className="  p-5  grid grid-cols-3 grid-rows-2  justify-items-center gap-12 relative  bg-no-repeat bg-cover bg-center "
    // style={{backgroundImage: `url(${drink})`, filter: 'opacity(0.5)' }}

    >


      <div className=" border-black w-48 h-48  flex justify-center  relative  items-center rounded-lg border-r-5 border-2 ">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>


      <div className=" border-black w-48 h-48   flex justify-center  relative  items-center rounded-lg border-r-5 border-2 ">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>

      <div className=" border-black w-48 h-48   flex justify-center  relative  items-center rounded-lg border-r-5 border-2 ">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>

      <div className=" border-black w-48 h-48   flex justify-center  relative  items-center rounded-lg border-r-5 border-2 ">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>

      <div className=" border-black w-48 h-48   flex justify-center  relative  items-center rounded-lg border-r-5 border-2 ">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>

      <div className=" border-black w-48 h-48   flex justify-center  relative  items-center rounded-lg border-r-5 border-2 ">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>


    </div>
    </>
  );
};
