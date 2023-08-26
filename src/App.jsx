import Footer from "./components/Footer"
import Join from "./components/Join"
import Landing from "./components/Landing"
import Plans from "./components/Plans"
import Programs from "./components/Programs"
import Testimo from "./components/Testimo"
import Why from "./components/Why"


function App() {




  return (
    <>
    <div  className="px-[2rem] max-sm:pl-[1rem]:">
      <Landing/>
      <Programs/>
      <Why/>
      
      
      <Plans/>
      <Testimo/>
      <Join/>
    </div>
      
      <Footer/>
    </>
  )
}

export default App
