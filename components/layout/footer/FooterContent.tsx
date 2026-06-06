import { Button } from "@/components/ui/button";
import { links, socialLinks } from "@/lib/constants";
import Link from "next/link";

const FooterContent = () => {
  return (
    <div
      className={`grid md:grid-cols-2 gap-y-10 justify-between items-start w-full relative z-10`}
    >
      {/* Left Col */}
      <div className={`flex flex-col gap-6 md:gap-12`}>
        {/* Footer Social Links */}
        <div className={`flex items-center gap-3`}>
          {socialLinks.map((link, i) => (
            <Button
              key={i}
              variant={"icon"}
              className={`rounded-full text-white hover:bg-white group hover:text-black size-12`}
              asChild
            >
              <Link href={link.link} className={`group-hover:text-black`}>
                {link.icon}
              </Link>
            </Button>
          ))}
        </div>

        <div className={`capitalize flex items-center gap-3`}>
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`flex items-center gap-3`}
            >
              <span
                className={`text-white/75 hover:text-white transition-colors duration-500`}
              >
                {link.label}
              </span>
              <span>{`${i === links.length - 1 ? " " : "/ "} `} </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Col */}
      <div className={`flex flex-col gap-1.5`}>
        <span className={`text-muted-foreground capitalize tracking-wider`}>
          Contact Me
        </span>
        <Link
          href={"mailto:abdulrahman.saad2303@gmail.com"}
          className="text-white/85 hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
        >
          abdulrahman.saad2303@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default FooterContent;
