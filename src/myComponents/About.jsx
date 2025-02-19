import cup from "../assets/about/cup.png";

const About = () => {
  return (
    <>
      <div className=" mt-5 lg:mt-10 flex justify-evenly  items-center mb-16  ">
        <div className="  text-3xl  flex flex-col justify-center items-center  gap-2">
          <h1 className="text-sm  md:text-lg  lg:text-3xl   font-extrabold text-amber-700 font-mono ">
            Coffee with Faisal
          </h1>
          <h2 className="text-sm md:text-lg lg:text-3xl lg:text-center">
            Coffee is special in this shop
          </h2>
          <button className="text-sm md:text-lg lg:text-3xl   border bg-amber-700 rounded-sm text-white ">
            View-more
          </button>
        </div>

        <div className="">
          <img
            src={cup}
            alt="cup"
            className="w-32 sm:w-40 lg:w-[60%] 2xl:w-[100%]"
          />
        </div>
      </div>
    </>
  );
};
export default About;
