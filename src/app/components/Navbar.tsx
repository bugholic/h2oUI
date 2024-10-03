import Image from "next/image";
import logo from "../../../assets/logo/h2oLogo.svg";
import menu from "../../../assets/icons/menu.svg";
import Button from "./Button";
import Link from "next/link";

const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleMenuClick = () => {
  setIsMenuOpen((prev) => !prev);
};

const Navbar = () => {
  return (
    <nav className="flex w-full">
      <Image alt="H2O" src={logo} width={100} />
      {isMenuOpen && (
        <ul className="block items-center bg-white mx-3 w-full justify-center lg:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/"> Who We Are </Link>
          </li>
          <li>
            <Link href="/"> Market Applicaions </Link>
          </li>
          <li>
            <Link href="/"> About Us </Link>
          </li>
          <li>
            <Link href="/"> How It Works</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      )}
      <div className="hidden lg:block">
        <Button
          bgcolor="bg-blue-600"
          textcolor="text-white"
          action="Let's Get Started"
        />

        <button
          onClick={() => handleMenuClick}
          className="bg-gray-300 rounded-full p-2 sm:hidden"
        >
          <Image src={menu} alt="menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
