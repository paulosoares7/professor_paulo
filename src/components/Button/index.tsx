import { ReactNode } from "react";


interface ButtonProps {
    children: ReactNode,

}

export default function Btn({children}: ButtonProps) {
    return (
      <button className= "px-4 py-3 rounded-lg duration-200 font-semibold bg-pri-500 hover:bg-pri-450 hover:text-ter-950">
        {children}
      </button>
    )
  }