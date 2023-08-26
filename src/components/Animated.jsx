
import { motion, useAnimate ,useAnimation,useInView} from "framer-motion"
import { useEffect, useRef } from "react"




export default function Animated({children,del=1}) {
const ref = useRef()
const [scope ,animate] = useAnimate()
const isinter = useInView(ref)
const controls = useAnimation()
const controls2 = useAnimation()
useEffect(() => {

    if(isinter ) {
        controls.start("end");
        controls2.start("end")}
    else {
        controls.start("initial")
        
    }

}, [isinter])

return (
<div ref={ref} className=" relative w-fit overflow-hidden">
    <motion.div 
    variants={{
        initial :{opacity:0,y:75},
        end:{opacity:1,y:0}
        }}

    transition={{duration:.5 ,delay:del *.25}}
    initial="initial"
    animate={ controls}
    >


    {children}

            
    </motion.div>

    <motion.div variants={{
        initial :{left:0},
        end:{left:"100%"}
    }}
    initial="initial"
    animate = {controls2}
    transition={{duration:.5,ease:"easeIn",}}
    className=" z-30 top-0 absolute bg-orange-500 w-full h-full ">

    </motion.div>
            </div>
  )
}
