import cup from "../assets/Coffees/cup.png";
// import drink from '../assets/Coffees/drink.png'

export const Coffes = () => {
  return (
    <>
    <div className=" grid grid-cols-2 gap-5  md:grid md:grid-cols-3 grid-rows-2  justify-items-center md:gap-12 relative  bg-no-repeat bg-cover bg-center p-5 "
    // style={{backgroundImage: `url(${drink})`, filter: 'opacity(0.5)' }}

    >


      <div className=" w-32 h-32  md:w-48 md:h-48  flex justify-center  relative  items-center rounded-lg border-r-5 border-2 border-black ">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>


      <div className=" w-32 h-32  md:w-48 md:h-48   flex justify-center  relative  items-center rounded-lg border-r-5 border-2 border-black">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>

      <div className=" w-32 h-32  md:w-48 md:h-48   flex justify-center  relative  items-center rounded-lg border-r-5 border-2 border-black ">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>

      <div className=" w-32 h-32 md:w-48 md:h-48   flex justify-center  relative  items-center rounded-lg border-r-5 border-2  border-black">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>

      <div className=" w-32 h-32  md:w-48 md:h-48   flex justify-center  relative  items-center rounded-lg border-r-5 border-2 border-black">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>

      <div className=" w-32 h-32  md:w-48 md:h-48   flex justify-center  relative  items-center rounded-lg border-r-5 border-2 border-black">
        <img src={cup} alt="" className="w-32 h-32   absolute top-[-65px] rounded-full"  />
      </div>


    </div>
    </>
  );
};
