import { useState } from "react"
import { testimonialsData } from "../data/testimonialsData"
import arri from "../assets/rightArrow.png"
import arle from "../assets/leftArrow.png"
import { motion } from "framer-motion"
export default function Testimo() {
    const [selected ,setselected ] = useState(0)
const len = testimonialsData.length
return (
    <div className="flex mt-24 max-md:flex-col" id="testi">
        <div className=" flex-3">
        <p className="text-orange-400 font-bold">TESTIMONIALS</p>
        <div className="text-[3rem]  font-bold ">
            <span className="clip-text">WHAT THEY</span> 
            <p>SAY ABOUT US</p>
        </div>
        <p className=" my-6 text-lg font-medium leading-[50px]  "> {testimonialsData[selected].review}  </p>
        <div className="flex justify-end gap-3"> 
            <button><img src={arle} alt="" className="h-6 " onClick={()=> setselected(s =>(len+(s-1 )) % len)} /></button>
            <button><img src={arri} alt="" className="h-6 "  onClick={()=> setselected(s =>(s+1) % len)}  /></button>
        </div>
        <div className="flex gap-2 mb-10">
            <div className="text-orange-400">{testimonialsData[selected].name } </div> - <p> {testimonialsData[selected].status}</p> 
        </div>
        
        
        </div>

        <div className="img-wrap flex-2 relative">
            <motion.div   initial={{x:90}} animate={{x:0}} transition={{duration:.7 , ease:"easeIn"}}   className="before" ></motion.div>
            <motion.div   initial={{x:-90}} animate={{x:0}} transition={{duration:.7 , ease:"easeIn" }}   className="after"></motion.div>
            <img  src={testimonialsData[selected].image} className="max-md:relative max-md:right-auto z-10 top-[10%] right-[15%] absolute h-[320px] w-[270px] object-cover" alt="" />
        </div>
    </div>
    
)
}
