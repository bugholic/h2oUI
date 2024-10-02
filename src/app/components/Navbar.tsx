import Image from "next/image"
import logo from "../../../assets/logo/h2oLogo.svg"
import menu from "../../../assets/icons/menu.svg"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flex w-full">
      <Image
        alt="H2O"
        src={logo}
        width={100}
      />

      <ul className="hidden items-center mx-3 w-full justify-center lg:flex">
        <li>Home</li>
        <li>Who We Are</li>
        <li>Market Applicaions</li>
        <li>About Us</li>
        <li>How It Works</li>
        <li>Contact Us</li>
      </ul>

      <div className="hidden lg:block">
        <Button bgcolor="bg-blue-600" textcolor="text-white" action="Let's Get Started" />
        <button className="block bg-gray-300 rounded-full p-2 sm:hidden">
          <Image src={menu}
            alt="menu"
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar