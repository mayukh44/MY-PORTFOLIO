import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const NavItems = [
  {name: "Home", href:  "#hero"},
  { name: "About", href: "#about" },
  { name: "Education", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // start closed

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/40 backdrop-blur-sm shadow-xs"
          : "py-5 bg-background/30 backdrop-blur-sm" 
      )}
    >
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">M</span>B
          </span>
        </a>

        {/* desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {NavItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative text-foreground/80 hover:text-primary transition-colors duration-300
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        

        {/* mobile Nav */}
        <div
  className={cn(
    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center min-h-screen py-8",
    "transition-all duration-300 md:hidden",
    isMenuOpen
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  )}
>
  <div className="flex flex-col space-y-8 text-xl w-full max-w-xs mx-auto">
    {NavItems.map((item, key) => (
      <a
        key={key}
        href={item.href}
        onClick={() => setIsMenuOpen(false)}
        className="relative text-foreground/80 hover:text-primary transition-colors duration-300
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
          after:bg-primary after:transition-all after:duration-300 hover:after:w-full break-words"
      >
        {item.name}
      </a>
    ))}
  </div>
</div>







      </div>
    </nav>
  );
};
