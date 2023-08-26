import check from "../assets/tick.png"
import nb from "../assets/nb.png"
import adi from "../assets/adidas.png"
import nike from "../assets/nike.png"
import man1 from "../assets/image1.png"
import man2 from "../assets/image2.png"
import man3 from "../assets/image3.png"
import man4 from "../assets/image4.png"
import Animated from "./Animated"

export default function Why() {
return (
    <div className="my-16 flex max-md:flex-col flex-wrap" id="whyUs">
        <div className="img-wrapper grid grid-cols-3 grid-rows-2 gap-4 max-md:gap-2 flex-1 md:min-w-[600px]">
            
                <img src={man1} alt=""  className="h-[28rem] max-sm:h-[16.5rem] object-cover  w-[12rem] row-span-2"/>

            
            
                <img src={man2} alt=""  className="h-[16rem] max-sm:h-[8rem]  object-cover   col-span-2 " />
                
                
                    <img src={man3} alt="" className="  w-[14rem]  max-sm:h-[8rem] max-sm:w-[10rem]   object-cover   h-[12rem] "  />
                    <img src={man4} alt=""  className="w-[10rem]  max-sm:h-[8rem]   max-sm:w-[6rem]  object-cover   h-[12rem] " />
                
            
        </div>
        <div className="why-us flex-1 pl-6">

            <p className="font-bold text-orange-400">SOME REASONS</p>
            <Animated> <p className="text-[3rem] max-sm:text-4xl font-bold "> <span className="clip-text ">WHY</span>CHOOSE US?</p></Animated> 
            
          <Animated><div className="flex  font-semibold my-3 gap-3 items-center"><img src={check} width={40} alt="" /><p>OVER 140+ EXPERT COACHS</p> </div></Animated>  
          <Animated del={2}><div className="flex  font-semibold my-3 gap-3 items-center"><img src={check} width={40} alt="" /><p>TRAIN SMARTER AND FASTER THAN BEFORE</p> </div></Animated> 
          <Animated del={3}><div className="flex  font-semibold my-3 gap-3 items-center"><img src={check} width={40} alt="" /><p>1 FREE PROGRAM FOR NEW MEMBER</p> </div></Animated> 
          <Animated del={4}><div className="flex  font-semibold my-3 gap-3 items-center"><img src={check} width={40} alt="" /><p>RELIABLE PARTNERS</p> </div></Animated> 
            
            <p className="text-gray-700 font-bold">OUR PARTNERS</p>

            <div className="flex mt-5">
                <img src={nike} width={40}  className=" h-[28px]" alt="nb logo" />
                <img  width={40}  className=" h-[28px]"  src={nb} alt="nike logo" />
                <img  width={40}  className=" h-[28px]"  src={adi} alt="adidas logo" /> 
            </div>
        </div>
        

    </div>
)
}
