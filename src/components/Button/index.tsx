import { ReactNode } from "react";


interface ButtonProps {
    children: ReactNode,

}

export default function Btn({children}: ButtonProps) {
    return (
      <button className= "px-6 py-2 rounded-2xl duration-200 bg-pri-500 hover:bg-pri-450 hover:text-sec-450">
        {children}
      </button>
    )
  }