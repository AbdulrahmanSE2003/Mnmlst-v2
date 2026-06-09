"use client";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import { bgTextures, projects } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className={`min-h-screen w-full my-16 p-16 space-y-10`}>
      <SectionHeading>Projects</SectionHeading>

      {/* TODO:Link to each project */}

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
        {" "}
        {projects.slice(0, 2).map((p) => (
          <div
            key={p.title}
            className={`h-120 rounded-4xl p-6 shadow-2xl group overflow-hidden relative `}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              className={`object-cover group-hover:scale-103 transition-transform duration-700`}
            />
            <div
              className={`absolute inset-0 bg-linear-to-b from-foreground/80 to-transparent pointer-events-none`}
            />

            <div
              className={`h-full flex flex-col justify-end gap-4 text-white relative z-20`}
            >
              <h6
                className={`text-3xl font-semibold drop-shadow-2xl shadow-foreground`}
              >
                {p.title}
              </h6>
              <p className={`leading-snug tracking-tight`}>{p.description}</p>
            </div>
          </div>
        ))}
        <div
          className={`h-120 rounded-4xl p-6 shadow-2xl group bg-zinc-500 overflow-hidden relative `}
        >
          <Image
            src={bgTextures}
            alt="textures background"
            fill
            className={`object-cover group-hover:scale-103 transition-transform duration-700`}
          />
          <div
            className={`absolute inset-0 bg-linear-to-b from-foreground/50 to-foreground/25 `}
          />

          <div
            className={`h-full flex flex-col justify-between items-start gap-4 text-white relative z-20`}
          >
            <h6 className={`text-5xl font-medium shadow-2xl `}>
              See how i shape brands with clarity and craft — explore more.
            </h6>

            <Button
              variant={"link"}
              asChild
              className={`text-background text-md font-medium w-fit z-20`}
            >
              <Link href={"/work"} className={`group`}>
                View All Work
                <ArrowUpRight
                  className={`size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500`}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
