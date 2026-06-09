// NOTE: Imports
import bgTextures from "@/public/images/bg-textures.webp";
import star from "@/public/images/star.png";
import zap from "@/public/images/zap.png";
import about1 from "@/public/images/about-1.jpg";
import about2 from "@/public/images/about-2.avif";
import about3 from "@/public/images/about-3.avif";
import about4 from "@/public/images/about-4.avif";
import figma from "@/public/images/figma.avif";
import framer from "@/public/images/framer.avif";
import typescript from "@/public/images/typescript.webp";
import next from "@/public/images/next.webp";
import tailwind from "@/public/images/tailwind.png";
import mongo from "@/public/images/mongo.png";
import express from "@/public/images/express.png";
import process1 from "@/public/images/process-1.jpg";
import process2 from "@/public/images/process-2.avif";

// NOTE: Assets
export {
  star,
  zap,
  bgTextures,
  about1,
  about2,
  about3,
  about4,
  figma,
  framer,
  typescript,
  next,
  tailwind,
  mongo,
  express,
  process1,
  process2,
};

// NOTE: Lists
export const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/work", label: "work" },
];

export const socialLinks = [
  {
    label: "GitHub",
    link: "https://github.com/username",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/in/username",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        color="currentColor"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"></path>
        <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"></path>
        <path
          d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    label: "Instagram",
    link: "https://instagram.com/username",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        color="currentColor"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z"></path>
        <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"></path>
        <path d="M17.3748 6.75024H17.2498M17.4998 6.75024C17.4998 6.88832 17.3878 7.00024 17.2498 7.00024C17.1117 7.00024 16.9998 6.88832 16.9998 6.75024C16.9998 6.61217 17.1117 6.50024 17.2498 6.50024C17.3878 6.50024 17.4998 6.61217 17.4998 6.75024Z"></path>
      </svg>
    ),
  },
];

export const stack = [
  {
    image: next,
    name: "Next.js",
    description:
      "My primary framework for building fast, production-ready web apps — SSR, App Router, and seamless full-stack integration.",
  },
  {
    image: typescript,
    name: "TypeScript",
    description:
      "How I write JavaScript — typed, predictable, and easier to scale across any codebase.",
  },
  {
    image: express,
    name: "Node.js & Express",
    description:
      "My backend foundation — building REST APIs, handling auth, and connecting everything to the database layer.",
  },
  {
    image: mongo,
    name: "MongoDB",
    description:
      "My database of choice for flexible, document-based data modeling with Mongoose on top.",
  },
  {
    image: tailwind,
    name: "Tailwind CSS",
    description:
      "My go-to for styling — utility-first, consistent, and pairs perfectly with component-driven architecture.",
  },
  {
    image: figma,
    name: "Figma",
    description:
      "Where I think before I build — wireframing, prototyping, and aligning design decisions before touching code.",
  },
  {
    image: framer,
    name: "Framer Motion",
    description:
      "Where interactions come alive — smooth animations and micro-interactions that make interfaces feel intentional.",
  },
];

export const experiences = [
  {
    role: "Program Coordinator",
    company: "Eyouth",
    duration: "May 2026 – Present · Part-time",
    description:
      "Coordinating program operations and bridging communication between teams to support the delivery of youth training and development initiatives.",
  },
  {
    role: "Co-founder & Lead Frontend",
    company: "Texon Startup",
    duration: "Oct 2025 – Present · Part-time",
    description:
      "Architected the frontend with Next.js App Router and TypeScript. Built a reusable component library and led a 3-dev Agile team.",
  },
  {
    role: "Frontend Mentor",
    company: "GDG on Campus",
    duration: "Jan 2025 – Apr 2025",
    description:
      "Mentoring 15+ students in React.js, state management, and responsive design.",
  },
];

export const steps = [
  {
    id: "01",
    title: "Understand & Plan",
    desc: "I start by understanding the problem, the users, and the goals — then map out a clear technical approach before writing a single line of code.",
    bg: "bg-neutral-900",
    span: "md:col-span-1",
  },
  { image: process1, span: "md:col-span-1" },
  {
    id: "02",
    title: "Design & Architect",
    desc: "I think through the UI and system architecture together — component structure, data flow, and interactions.",
    bg: "bg-neutral-900",
    span: "md:col-span-1",
  },
  { image: process2, span: "md:col-span-1" },
  {
    id: "03",
    title: "Build & Iterate",
    desc: "I build in focused cycles — shipping working features, gathering feedback, and refining.",
    bg: "bg-foreground",
    text: "text-background",
    span: "md:col-span-1 md:col-span-2",
  },
  {
    id: "04",
    title: "Optimize & Polish",
    desc: "Performance, accessibility, and micro-interactions — the details that separate a good product from a great one.",
    bg: "bg-neutral-900 ",
    span: "md:col-span-2",
  },

  {
    id: "05",
    title: "Ship & Support",
    desc: "Clean deployment, documentation, and ongoing maintenance.",
    bg: "bg-neutral-900",
    span: "md:col-span-1",
  },
];

export const projects = [
  {
    title: "Bedrock",
    description:
      "Minimalist task manager with Kanban, habit tracking, and Google Tasks sync.",
    tech: ["Next.js 16", "Supabase", "Shadcn", "Tailwind"],
    repo: "https://github.com/AbdulrahmanSE2003/Bedrock",
    demo: "https://bedrock-ysgz.vercel.app/",
    image:
      "https://res.cloudinary.com/dbusth6uc/image/upload/v1776639182/Screenshot_from_2026-04-20_00-42-35_ko5idd.png",
  },
  {
    title: "Threads-flow",
    description:
      "Full-stack social platform with real-time feeds and nested threading architecture.",
    tech: ["Next.js 16", "Prisma", "Neon PostgreSQL", "Cloudinary"],
    repo: "https://github.com/AbdulrahmanSE2003/threads-flow",
    demo: "https://threads-flow.vercel.app/",
    image:
      "https://res.cloudinary.com/dbusth6uc/image/upload/v1776639184/Screenshot_from_2026-04-20_00-42-54_kdzdu9.png",
  },
  {
    title: "Uni-Solver",
    description:
      "AI-powered assignment helper that processes PDFs and generates structured solutions.",
    tech: ["Next.js 16", "Tailwind", "Google Gemini API", "AI"],
    repo: "https://github.com/AbdulrahmanSE2003/uni-solver",
    demo: "https://uni-solver.vercel.app/",
    image:
      "https://res.cloudinary.com/dbusth6uc/image/upload/v1770802548/Screenshot_from_2026-02-11_11-35-07_qflxl2.png",
  },
  {
    title: "Miro Clone",
    description:
      "Real-time collaborative whiteboard featuring infinite canvas and multi-user cursors.",
    tech: ["Next.js 16", "Clerk", "Liveblocks", "Convex"],
    repo: "https://github.com/AbdulrahmanSE2003/miro-clone",
    demo: "https://miro-clone-five.vercel.app/",
    image:
      "https://res.cloudinary.com/dbusth6uc/image/upload/v1776639182/Screenshot_from_2026-04-20_00-50-30_jotxp5.png",
  },
  {
    title: "Gemini Clone",
    description:
      "A functional, responsive clone of the Gemini AI chat interface.",
    tech: ["TypeScript", "Next.js"],
    repo: "https://github.com/AbdulrahmanSE2003/gemini-clone",
    demo: "https://gemini-clone-eight-sooty.vercel.app/",
    image:
      "https://res.cloudinary.com/dbusth6uc/image/upload/v1776639181/Screenshot_from_2026-04-20_00-44-13_y5vw4k.png",
  },
];
