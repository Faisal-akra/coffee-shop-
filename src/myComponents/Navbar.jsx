import coffeIcon from '../assets/navbar/coffe-icon.png'


const Navbar = () => {
  return(
    <div className="flex justify-between  border border-black  items-center bg-amber-800 p-1 text-white">


<div className="">
<img src={coffeIcon} alt="coffeicon" className='w-16 h-16' />
</div>


<div className="flex gap-5">
<a href="">Home</a>
<a href="">Coffess</a>
<a href="">Beans</a>
<a href="">Contact</a>


</div>


    </div>
  )
}

export default Navbar;