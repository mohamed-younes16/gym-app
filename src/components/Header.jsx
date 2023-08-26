import logo from "../assets/logo.png"
import humb from "../assets/bars.png"
import { useRef } from "react"

export default function Header() {
  const ulref = useRef()
  return (
    <nav className="pt-8 ">
        <div className="flex justify-between">
            <img src={logo} alt="" className=" w-40 h-12" />
            <ul ref={ulref} className=" text-lg flex gap-6 max-md:flex-col max-md:fixed z-30 max-md:bg-white max-md:bg-opacity-25">
                <li><a href="#home" className="hover:text-orange-600 transition duration-300" onClick={(()=>ulref.current.classList.remove("shown"))}>home</a></li>
                <li><a href="#programs" className="hover:text-orange-600 transition duration-300"  onClick={(()=>ulref.current.classList.remove("shown"))}>Programs</a></li>
                <li><a href="#whyUs" className="hover:text-orange-600 transition duration-300" onClick={(()=>ulref.current.classList.remove("shown"))}>Why Us</a></li>
                <li><a href="#plans" className="hover:text-orange-600 transition duration-300" onClick={(()=>ulref.current.classList.remove("shown"))}>Plans</a></li>
                <li><a href="#testi" className="hover:text-orange-600 transition duration-300" onClick={(()=>ulref.current.classList.remove("shown"))}>testimonials</a></li>
            </ul>
            <img src={humb} className="max-md:block hidden cursor-pointer w-10 fixed top-10 right-10  z-40" alt="bars logo" onClick={() =>ulref.current.classList.toggle("shown")} />
        </div>
    </nav>
  )
}
