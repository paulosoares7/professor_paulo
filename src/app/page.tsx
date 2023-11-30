import AboutUs from "@/templates/AboutUs";
import ContactUs from "@/templates/ContactUs";
import GetStart from "@/templates/GetStart";
import Header from "@/templates/Header";
import Princing from "@/templates/Princing";
import Services from "@/templates/Services";

export default function Home() {
  return (
    <div className=" h-screen bg-pri-950 ">
      <Header/>

      <GetStart  id={'getstart'}/>

      <Services id={'services'}/>

      <AboutUs id={'about'}/>

      <Princing id={'plans'}/>
      
      <ContactUs id={'contact'}/>
      
    </div>
  )
}
