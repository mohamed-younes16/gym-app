/* eslint-disable react/prop-types */
import arrow from "../assets/rightArrow.png"
import { motion } from "framer-motion"


export default function Program({text,logo,title,i}) {




  return (
    <motion.div  
    
    variants={{
      initial :{opacity:0,y:75},
      end:{opacity:1,y:0}
      }}
      transition={{duration:.5 ,delay:i *.1}}
    initial="initial"
    animate="end"

    className="p-8 to gg program overflow-hidden   mx-auto  transition  cursor-pointer bg-[#808080] hover:scale-105">
        <img src={logo} alt="" className=" w-8" />
        <p className="my-6">{title} </p>
        <p>{text}</p>
        <div className="flex gap-2"> Join Now <img src={arrow} alt="arrow image" /></div>
    </motion.div>
  )
}
