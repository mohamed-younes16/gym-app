import Header from "./Header";
import hero from "../assets/hero_image.png"
import herobg from "../assets/hero_image_back.png"
import heart from "../assets/heart.png"
import statistics from "../assets/calories.png"
import { motion } from "framer-motion";
import Animated from "./Animated";
export default function Landing() {

return (
    <div className="flex max-lg:flex-col gap-10  max-lg:items-center pl-8 " id="home" >
        <div className="left-land relative flex-3">
            <div className="blur bg-orange-400 bg-opacity-75 to "></div>
                <Header/>

                <div className="relative w-fit h-14 mt-16
                p-4 bg-neutral-800 rounded-full  mr-3">

                <p className="z-10 relative ml-2 whitespace-nowrap">THE BEST FITNESS CLUB IN THE TOWN</p>
                <motion.div drag 
                transition={{duration:.8,ease:"easeIn"}}
                initial={{left:"150px"}} dragConstraints={{ left: 0, right: 10, top: 0, bottom: 0 }} 
                whileInView={{left:20}} className="orange-slider  cursor-pointer absolute to "></motion.div>
                </div>
                
               <Animated><div className="text-[80px] mt-8 font-bold  relative">
                <span className="clip-text ">SHAPE</span>  YOUR <br />IDEAL BODY</div></Animated> 
               
               <Animated del={2} ><p className="max-w-md text-xl">In here we will help you to shape and build your ideal body and live up your life to fullest</p></Animated> 
                <div className="flex gap-10 mt-10 max-md:flex-wrap">

                    <div >
                        <p className="text-3xl">+ 140</p>
                        <p className="text-gray-400">EXPERT COACHES</p>
                    </div>
                    <div>
                        <p className="text-3xl">+ 978</p>
                        <p className="text-gray-400">Member Joined</p>
                    </div>

                    <div>
                        <p className="text-3xl">+ 50</p>
                        <p className="text-gray-400">Fitness Programs </p>
                    </div>
                </div>
                <div className="flex gap-4 mt-10">
                    <button className="bg-orange-400 text-black hover:bg-black hover:text-white  font-bold p-3 text-xl transition duration-300"> Get Started</button>
                    <button className="border-2 border-orange-400 p-3   font-bold text-xl"> Learn More</button>

                </div>
        </div>
        <div className="right-land  w-[20rem] max-md:w-[15rem] max-md:bg-transparent bg-orange-400 relative min-h-[40rem]">
            <img src={hero} alt=""  className=" absolute w-[24rem] max-md:w-[15rem] z-10 left-[-5rem] bottom-2" />
            <motion.img src={herobg} alt="bg"
            transition={{duration:2,bounce:.3,type:"spring"}}
            initial={{left:"150px"}}
            
            whileInView={{left:-90}} className="max-md:w-[15rem] absolute left-0 to z-[1] top-1/2 translate-y-[-50%]  bottom-2 "/>
            
            <div className="absolute z-10 bg-[#464d53] max-sm:right-0 rounded-xl p-3  top-14 right-1/4">
                <img src={heart} alt="heart logo" className=" w-8" />
                <p className="text-gray-500 my-4">Heart Rate</p>
                <p className="text-2xl">116 bpm</p>
            </div>

             <div className="absolute z-10 bg-[#656565] max-sm:left-[-80px] flex  gap-4 rounded-xl p-3  max-md:top-14  left-[-60%] md:bottom-10">
                <img src={statistics} alt="stat logo" className=" w-12" />
                <div>
                    <p className=" text-gray-500">Calories <br /> Burned</p>
                    <p className="text-xl">220 <br /> Calorie</p>
                </div>
            </div>
            
        </div>
    </div>
)
}
