import { socialLinks } from "@/lib/constants";
import Link from "next/link";
import { Button } from "../../ui/button";

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
