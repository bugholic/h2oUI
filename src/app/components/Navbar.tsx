import Image from "next/image"
import logo from "../../../assets/logo/h2oLogo.svg"


const Navbar = () => {
  return (
   <nav className="flex w-full">
    <Image
    alt="H2O" 
    src={logo}
    width={100}
    />    

    <ul className="flex items-center mx-3 w-full justify-center">
      <li>Home</li>
      <li>Who We Are</li>
      <li>Market Applicaions</li>
      <li>About Us</li>
      <li>How It Works</li>
      <li>Contact Us</li>
    </ul>

    <div>
      <button className="btn bg-blue-700 text-white w-max p-3 rounded-md">
        Let's Get Started
      </button>
    </div>
   </nav>
  )
}

export default Navbar