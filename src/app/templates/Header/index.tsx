
import Btn from "@/components/Button";
import NavigateLinks from "@/components/Navigate";
import useTeacherInformation from "@/hooks/useTeacherInformation";

export default function Header() {

   
  const {name,professor} = useTeacherInformation().user
    return (
        <header className="text-pri-50 h-16 py-1 px-6 font-sans"> 

          <div className= "h-[full] px-2 py-2 flex items-center justify-between">
            <div className=" flex flex-col items-start justify-center flex-1 px-6 h-full">
              
              <h1 className="text-lg leading-none font-bold">{name.toUpperCase()}</h1>
              <p className="text-sm leading-none font-medium">{professor.toUpperCase()}</p>
            </div>
            <nav className="flex items-center justify-between gap-3 h-full font-semibold">
              <div className= "px-6 py-2 duration-200 hover:text-pri-450"><NavigateLinks label = 'Início' href="#getstart"></NavigateLinks></div>
              <div className= "px-6 py-2 duration-200 hover:text-pri-450 "><NavigateLinks label='Serviços' href="#services"></NavigateLinks></div>
              <div className= "px-6 py-2 duration-200 hover:text-pri-450 "><NavigateLinks label='Sobre' href="#about"></NavigateLinks></div>
              <div className= "px-6 py-2 duration-200 hover:text-pri-450 "><NavigateLinks label='Planos' href="#plans"></NavigateLinks></div>

              <Btn>
              
                <NavigateLinks label='Comece aqui' href='#contact'></NavigateLinks>
              </Btn>
            </nav>
          </div>
        </header>
    )
  }
  