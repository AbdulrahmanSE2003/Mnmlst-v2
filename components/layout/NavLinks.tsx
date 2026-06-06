"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm transition-colors duration-500 capitalize ${
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
