import { socialLinks } from "@/lib/constants";
import Link from "next/link";
import { Button } from "../../ui/button";

const SocialLinks = () => {
  return (
    <div className={`flex items-center gap-3`}>
      {socialLinks.map((link, i) => (
        <Link
          key={i}
          href={link.link}
          className={`w-10 h-10 flex-center border border-border/75 rounded-xl`}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
