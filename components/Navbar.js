import Link from "next/link";
//import logo from "../ieee_white_logo.png";\
import logo from "../images/ieee-nfsu-logo.png"
import Image from "next/image";
import { useState } from "react";
var style = {
  navbarcontainer: "flex justify-around pt-4 pt-1 flex-direction-column items-center",
  linkcontainer: "md:flex gap-10 text-white items-center p-2",
  hidden_link:"hidden md:block md:flex gap-10 text-white items-center p-2",
  button: "hover:underline cursor-pointer text-lg",
  pillbtn:"block md:hidden ",
  logo: "w-3 cursor-pointer ",
  logocontainer: "w-80",
  hidden_logo:"hidden md:block w-80",
  bigbutton: "p-3 text-lg rounded-full bg-[#00B5E2] pointer hover:font-bold"
};
export default function Navbar() {
  //const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="sticky top-0 bg-black">
      <div className={style.navbarcontainer}>
        <Link href="/#">
          <div className={toggle?style.hidden_logo:style.logocontainer}>
            <Image src={logo} alt="LOGO" className={style.logo} />
          </div>
          {/* <h1>logo</h1> */}
        </Link>
        {/* pill button */}
        <button className={style.pillbtn} onClick={() => setToggle(!toggle)}>
          <svg className="w-5 h-5" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="#00B5E2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* head links */}
        
        <div className={
            toggle?style.linkcontainer:style.hidden_link }>
          <a className={style.button}>
            <Link href="/#Aboutus" scroll={false}>
              <p>About</p>
            </Link>
          </a>

          <a className={style.button} >
            <Link className={style.button} href="/Blog" >
              <p>Blog</p>
            </Link>
          </a>

          <a className={style.button} >
            <Link className={style.button} href="/Projects" >
              <p>Projects</p>
            </Link>
          </a>

          <a className={style.button}>
            <Link href="/Event" >
              <p>Events</p>
            </Link>
          </a>
          <a className={style.button}>
            <Link href="/Teams" >
              <p>Teams</p>
            </Link>
          </a>
          <a className={style.button}>
            <Link href="/#Connect">
              <p>Contact us</p>
            </Link>
          </a>

          <button className={style.bigbutton}><a href="https://forms.gle/uqvCH89HQi4zzQLy6">Join US</a></button>
        </div>
      </div>
    </div>
  );
}
