import cup from '../assets/about/cup.png'

const About = () => {
  return(
    <div className="flex justify-evenly  items-center mb-10 ">

    <div className="flex flex-col justify-center items-center text-3xl gap-2">
      <h1 className='font-extrabold text-amber-700 font-mono text-3xl' >Coffee with Faisal</h1>
      <h2>Coffee is special in this shop</h2>
      <button className='border bg-amber-700 rounded-sm text-white '>View-more</button>
    </div>


    <div className="">
    <img src={cup} alt="cup" />
    </div>





    </div>
  )
}
export default About;