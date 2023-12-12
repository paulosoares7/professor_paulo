import AboutUs from "./templates/AboutUs";
import ContactUs from "./templates/ContactUs";
import GetStart from "./templates/GetStart";
import Header from "./templates/Header";
import Princing from "./templates/Princing";
import Services from "./templates/Services";


export default function Home() {
  return (
    <div className=" h-screen w-screen min-w-[20rem] flex flex-col bg-pri-950 mx-auto  sm:max-sm:w-96 xl:max-w-screen-2xl">
      <Header/>

      <GetStart  id={'getstart'}/>

      <Services id={'services'}/>

      <AboutUs id={'about'}/>

      <Princing id={'plans'}/>
      
      <ContactUs id={'contact'}/>
      
    </div>
  )
}
