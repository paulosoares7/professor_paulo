"use client"

import { useState } from 'react'

import NavigateLinks from "@/components/Navigate";
import useTeacherInformation from "@/hooks/useTeacherInformation";
import { List, X } from "@phosphor-icons/react/dist/ssr";

export default function Header() {

  const [isActiveDropdown, setIsActiveDropdown] = useState(false)

 function handleOpenMenu() {
  setIsActiveDropdown(true)
 }
 function handleCloseMenu() {
  setIsActiveDropdown(false)
 }
   
  const {name,professor} = useTeacherInformation().user
    return (
        <header className="flex items-center justify-center  text-pri-50 h-16 w-full py-3 font-sans"> 

          <nav className= "flex-1 flex items-center justify-center">
            <div className=" hidden md:flex sm:pl-8 flex-col flex-1 items-end sm:items-start justify-center md:pl-16 h-full">
              
              <h1 className="text-[12px] sm:text-sm font-bold">{name.toUpperCase()}</h1>
              <p className=" text-[10px] sm:text-xs sm:leading-none font-medium">{professor.toUpperCase()}</p>
            </div>
            <div className="hidden px-16 md:flex items-center justify-between text-ter-100  gap-0 sm:gap-8 h-full font-semibold ">

              <NavigateLinks href="#getstart"> <div className= "bg-pri-850 p-1 rounded-md duration-200 hover:text-pri-50 hover:bg-pri-850">Início</div></NavigateLinks>
              <NavigateLinks href="#services"><div className= " p-1  duration-200 rounded-md hover:text-pri-50 hover:bg-pri-850 ">Serviços</div></NavigateLinks>
              <NavigateLinks href="#about"><div className= " p-1  duration-200 rounded-md hover:text-pri-50 hover:bg-pri-850 ">Sobre</div></NavigateLinks>
              <NavigateLinks href="#plans"><div className= " p-1  duration-200 rounded-md hover:text-pri-50 hover:bg-pri-850 ">Planos</div></NavigateLinks>
              <NavigateLinks href='#contact'><div className= " p-1  duration-200 rounded-md hover:text-pri-50 hover:bg-pri-850 ">Contato</div></NavigateLinks>

            </div>

              {/* Start: Menu Mobile */}
            <div className="ml-2 relative flex flex-1 items-center justify-between md:hidden">

            
            
              {isActiveDropdown === false ? (
                <button type="button"  onClick={handleOpenMenu} className="  bg-ter-500 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-ter-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <List  size={24}/>
                </svg>
              
              </button>

              ):(
                <button type="button" onClick={handleCloseMenu}  className="bg-ter-500 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-ter-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <X size={24}/>
                </svg>
              </button>

              )}

              <div  className={`${isActiveDropdown=== false ? 'hidden ': 'block'} md:hidden flex-1 absolute z-50 p-0 w-52 bg-pri-500  top-[3.25rem] rounded shadow-lg`}>

                <NavigateLinks href="#getstart"> <button onClick={handleCloseMenu} className= "p-2 duration-200 w-full text-left hover:text-pri-50 hover:bg-pri-850">Início</button></NavigateLinks>
                <NavigateLinks href="#services"><button onClick={handleCloseMenu} className= "p-2 duration-200 w-full text-left hover:text-pri-50 hover:bg-pri-850 ">Serviços</button></NavigateLinks>
                <NavigateLinks href="#about"><button onClick={handleCloseMenu} className= "p-2 duration-200 w-full text-left hover:text-pri-50 hover:bg-pri-850 ">Sobre</button></NavigateLinks>
                <NavigateLinks href="#plans"><button onClick={handleCloseMenu} className= "p-2 duration-200 w-full text-left hover:text-pri-50 hover:bg-pri-850 ">Planos</button></NavigateLinks>
                <NavigateLinks href='#contact'><button onClick={handleCloseMenu}  className= "p-2 duration-200 w-full text-left hover:text-pri-50 hover:bg-pri-850 ">Contato</button></NavigateLinks>

              </div>

              <div className="flex flex-col items-end justify-center px-1 h-full">
              
              <h1 className="text-[12px]  font-bold">{name.toUpperCase()}</h1>
              <p className=" text-[10px]  font-medium">{professor.toUpperCase()}</p>
            </div>
            </div>

            

            
              {/* End: Menu Mobile */}
          </nav>
        </header>
    )
  }
  