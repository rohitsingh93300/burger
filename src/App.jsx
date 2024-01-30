import Delivery from "./components/Delivery"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Statistics from "./components/Statistics"
import Burgers from "./components/burgers"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

function App() {


  return (
    <>
    <Navbar/>
    <Home/>
    <Delivery/>
    <Statistics/>
    <Burgers/>
    <Contact/>
    {/* <div className="bg-indigo-600 w-full h-screen"></div> */}
    <Footer/>   
    </>
  )
}

export default App
