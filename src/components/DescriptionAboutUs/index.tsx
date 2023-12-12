
interface DescriptionAboutUsProps {
    title: string,
    text: string
}

export default function DescriptionAboutUs ({title, text} : DescriptionAboutUsProps) {

    return (
        <div className="text-center md:text-left">
            <h1 className="font-semibold mb-2">{title}</h1>
            <span className="font-medium text-[10pt] leading-none">{text}</span>
        </div>
    )
}