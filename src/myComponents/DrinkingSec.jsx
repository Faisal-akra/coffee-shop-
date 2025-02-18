import drink1 from "../assets/drinking/drink.webp";
import drinnk2 from "../assets/drinking/drink2.png";

export const Drinking = () => {
  return (
    <div className="flex justify-around ">
      <div className="w-[600px] h-[500px] border border-black" >
        <img src={drink1} alt="" className="w-full h-full" />
      </div>

      <div className="w-[600px] h-[500px] border border-black">
        <img src={drinnk2} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};
