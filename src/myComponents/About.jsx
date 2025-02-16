import cup from '../assets/about/cup.png'

const About = () => {
  return(
    <div className="flex justify-evenly border border-black items-center">

    <div className="flex flex-col justify-center items-center">
      <h1 className='font-extrabold text-amber-700' >Coffee with Faisal</h1>
      <h2>Coffee is special in this shop</h2>
      <button className='border bg-amber-800 text-white '>View-more</button>
    </div>


    <div className="">
    <img src={cup} alt="cup" />
    </div>





    </div>
  )
}
export default About;