import Link from "next/link";
import { ReactNode } from "react";

interface NavigateLinksProps {
    href: string,
    children?: ReactNode,
}

export default function NavigateLinks({href, children}: NavigateLinksProps) {
    return (
      <Link href={`${href}`}>{children}</Link>
    )
  }
  