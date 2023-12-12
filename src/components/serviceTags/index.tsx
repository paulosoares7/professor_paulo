import Image, { StaticImageData } from "next/image";

interface ServicesTagsProps {
    id?: number;
    local: string | StaticImageData,
    title: string;
    text: string;
    alt: string;
} 

export default function ServicesTags ({local, title, text, alt} : ServicesTagsProps) {

    return (
        <div className=" w-[20rem] md:w-56 h-72 flex flex-col items-center content-center gap-1" >
            <Image src={local} alt={alt} className="w-28 h-28"/> 
            <h1 className="font-semibold text-center text-[14pt] md:text-[12pt] mb-4">{title}</h1>
            <span className="font-medium text-[12pt] md:text-[10pt] text-center md:text-justify ">{text}</span>
        </div>
    )
}