import { socialLinks } from "@/lib/constants";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-3 ps-3">
      <h1
        className={`font-plus-jakarta-sans text-8xl lg:text-9xl capitalize -ml-3`}
      >
        About me
      </h1>
      <span
        className={`font-plus-jakarta-sans  font-medium leading-relaxed text-sidebar-foreground/85 tracking-wider text-2xl`}
      >
        Abdulrahman Saad
      </span>

      {/* Intro Paragraph */}
      <p
        className={`font-light leading-relaxed lg:w-3/4 text-md text-secondary-foreground`}
      >
        I&apos;m a frontend engineer and full-stack developer passionate about
        crafting fast, clean, and thoughtful digital products.
        <br /> <br /> With a strong foundation in Next.js and TypeScript, and a
        growing command of the full MERN stack, I bring ideas to life through
        precise code, smooth interactions, and scalable architecture.
      </p>

      {/* Social Links */}
      <div className="flex gap-6 my-4">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/85 hover:text-foreground transition-colors"
            aria-label={social.label}
          >
            <span className="block w-7 h-7">{social.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutHero;
