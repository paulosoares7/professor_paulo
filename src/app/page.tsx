import GetStart from "@/templates/GetStart";
import Services from "@/templates/Services";
import Header from "@/templates/header";

export default function Home() {
  return (
    <div className=" h-screen bg-pri-950 ">
      <Header/>
      <GetStart/>
      <Services/>
      
    </div>
  )
}
