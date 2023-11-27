import Btn from "@/components/Button";
import NavigateLinks from "@/components/Navigate";

export default function Header() {
    return (
        <header className="text-pri-50 h-16 py-1 px-6 font-sans"> 

          <div className= "h-full px-2 py-2 flex items-center justify-between">
            <div className=" flex flex-col items-start justify-center flex-1 px-6 h-full">
              
              <h1 className="text-lg leading-none font-bold">Paulo Soares</h1>
              <p className="text-sm leading-none font-medium">Prof. de Física</p>
            </div>
            <nav className="flex items-center justify-between gap-3 h-full font-semibold">
              <div className= "px-6 py-2 duration-200 hover:text-pri-450"><NavigateLinks label = 'Início' href="/"></NavigateLinks></div>
              <div className= "px-6 py-2 duration-200 hover:text-pri-450 "><NavigateLinks label='Serviços' href="/"></NavigateLinks></div>
              <div className= "px-6 py-2 duration-200 hover:text-pri-450 "><NavigateLinks label='Sobre' href="/"></NavigateLinks></div>
              <div className= "px-6 py-2 duration-200 hover:text-pri-450 "><NavigateLinks label='Planos' href="/"></NavigateLinks></div>
              <Btn><NavigateLinks label='Contato' href='./'></NavigateLinks></Btn>
            </nav>
          </div>
        </header>
    )
  }
  