import AboutUs from "@/templates/AboutUs";
import ContactUs from "@/templates/ContactUs";
import GetStart from "@/templates/GetStart";
import Princing from "@/templates/Princing";
import Services from "@/templates/Services";
import Header from "@/templates/header";

export default function Home() {
  return (
    <div className=" h-screen bg-pri-950 ">
      <Header/>
      <GetStart/>
      <Services/>
      <AboutUs/>
      <Princing/>
      <ContactUs/>
      
    </div>
  )
}
