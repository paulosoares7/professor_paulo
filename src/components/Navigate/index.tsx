import Link from "next/link";

interface NavigateLinksProps {
    href: string,
    label: string,
}

export default function NavigateLinks({href,label}: NavigateLinksProps) {
    return (
      <Link href={`${href}`}>{label}</Link>
    )
  }
  