

export default function Join() {
return (

    <div className="mt-16 relative">
        <div className="bg-orange-500 w-48 h-1 rounded-full  absolute top-0"></div>

        <div className="flex items-center max-lg:flex-col">
        <p className="text-[3rem] font-bold flex-1 ">
            <span className="clip-text">READY TO</span>LEVEL UP YOUR BODY<span className="clip-text"> WITH US?</span>
        </p>
        <div className="flex-2">
            <form className=" p-2 bg-[gray]  w-[30rem]  max-md:w-fit  flex justify-between">
                <input type="email" className=" outline-none text-xl max-md:text-lg  bg-transparent text-white invalid:focus:text-orange-700 invalid:text-pink-700 valid:text-green-600" placeholder="enter your e-mail" />
                <button className=" bg-orange-400  whitespace-nowrap p-4 font-bold "> join now</button>
            </form>     
        </div>
        
        </div>
        
    </div>
)
}
