import drink1 from "../assets/drinking/drink.webp";
import drinnk2 from "../assets/drinking/drink2.png";

export const Drinking = () => {
  return (
    <div className="flex justify-around gap-4">


      <div className="w-[300px] h-[200px]         md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[500px] border border-black rounded-2xl" >
        <img src={drink1} alt="" className="w-full h-full rounded-2xl" />
      </div>

      <div className="w-[300px] h-[200px]         md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[500px] border border-black rounded-2xl">
        <img src={drinnk2} alt="" className="w-full h-full rounded-xl" />
      </div>


    </div>
  );
};
