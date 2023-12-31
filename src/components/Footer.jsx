import git from "../assets/github.png"
import ig from "../assets/instagram.png"
import linked from "../assets/linkedin.png"
import logo from "../assets/logo.png"
export default function Footer() {

return (

    <div className="flex flex-col items-center  mt-10 py-24 border-t-4">

        <div className="flex gap-10 mb-8">
            <a href="https://github.com/mohamed-younes16"><img src={git} alt="git logo" className=" h-10"/></a>
            <a href="https://www.linkedin.com/in/mohamed-younes-bettioui-7a07b8271/"><img src={linked} alt="linkedin logo"  className=" h-10"/></a>  
            <a href="https://www.instagram.com/younesmohamed_77/"><img src={ig} alt="instagram logo " className=" h-10" /></a>    
        </div>
        <img src={logo} alt="" className=" w-40" />
    </div>
)
}
