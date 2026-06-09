"use client";

import { links } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm transition-colors duration-500 font-medium capitalize ${
            pathname === link.href
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground "
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
