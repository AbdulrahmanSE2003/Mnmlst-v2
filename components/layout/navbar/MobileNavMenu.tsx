import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const mobileLinks = [
  { href: "/work", label: "work" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

const MobileNavMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
          className="md:hidden fixed top-24 left-[5%] right-[5%] z-50 bg-background border-[1.5px] border-foreground/10 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col p-4 gap-1">
            {mobileLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center h-12 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors duration-300 capitalize"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: mobileLinks.length * 0.06, duration: 0.2 }}
              className="mt-2 pt-3 border-t border-foreground/10 h-14"
            >
              <Button asChild className="w-full h-full">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="capitalize"
                >
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavMenu;
