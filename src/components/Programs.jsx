import dumb from "../assets/dumbell.svg"
import flame from "../assets/flame.svg"
import health from "../assets/heartHealth.svg"
import run from "../assets/runing.svg"
import Animated from "./Animated"
import Program from "./Program"

const programs = [
    {
        logo:dumb,
        title:"Strength Training",
        text:"In this program, you are trained to improve your strength through many exercises."
    },
    {
        logo:flame,
        title:"Fat Burning",
        text:"This program is suitable for you who wants to get rid of your fat and lose their weight."
    },
    {
        logo:run,
        title:"Cardio Training",
        text:"In this program, you are trained to do sequential moves in range of 20 until 30 minutes."
    },
    {
        logo:health,
        title:"Health Fitness",
        text:"This programs is designed for those who exercises only for their body fitness not body building."
    },
]

export default function Programs() {
return (
        <div className=" mt-9 pr-8 " id="programs">
            <div className="flex justify-center"> <Animated>
            <h1 className="  italic text-[3rem] uppercase font-bold  text-center "> 
            <span className="clip-text">Explore Our</span>  <span className=" mx-14">Programs</span> 
            <span className="clip-text">To Shape You </span></h1>
        </Animated> </div>
       
        <div className="grid mt-9 grid-cols-4 gap-6  max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {programs.map((e,i )=><Program key={e.text} i={i} title={e.title}  text={e.text} logo={e.logo} /> )}
        </div>
    </div>
  )
}
