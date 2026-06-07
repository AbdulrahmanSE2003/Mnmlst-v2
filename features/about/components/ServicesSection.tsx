import ServicesAccordion from "./ServicesAccordion";

const ServicesSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <h4
        className={`font-plus-jakarta-sans font-bold text-6xl capitalize -ml-3 text-sidebar-foreground/85 tracking-tight`}
      >
        what I can do for you
      </h4>
      <p
        className={`font-light leading-relaxed lg:w-3/4 text-md text-secondary-foreground`}
      >
        As a frontend engineer, I am a digital craftsman — building interfaces
        that feel fast, intentional, and alive.
      </p>

      {/* ServicesAccordion */}
      <ServicesAccordion />
    </div>
  );
};

export default ServicesSection;
