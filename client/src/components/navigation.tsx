import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#properties", label: "Properties" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const handleScroll = (id: string) => {
    if (location !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      handleScroll(href.substring(1));
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary cursor-pointer">
                Elevation Global Property
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.href.startsWith("#") ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        location === "/" && item.href === "#properties"
                          ? "text-primary"
                          : "text-neutral-700 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link href={item.href}>
                      <span
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                          location === item.href
                            ? "text-primary font-semibold"
                            : "text-neutral-700 hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      {item.href.startsWith("#") ? (
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                            location === "/" && item.href === "#properties"
                              ? "text-primary"
                              : "text-neutral-700 hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link href={item.href}>
                          <span
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                              location === item.href
                                ? "text-primary font-semibold"
                                : "text-neutral-700 hover:text-primary"
                            }`}
                          >
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
