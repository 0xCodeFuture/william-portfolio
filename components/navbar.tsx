"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { useColorTheme } from "./theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { colorTheme, setColorTheme } = useColorTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#connect" },
  ];

  const colorThemes = [
    { name: "Default", value: "default", color: "#00b894" },
    { name: "Ocean", value: "ocean", color: "#0077be" },
    { name: "Sunset", value: "sunset", color: "#ff6b35" },
    { name: "Forest", value: "forest", color: "#2d5016" },
    { name: "Purple", value: "purple", color: "#6a0dad" },
    { name: "Rose", value: "rose", color: "#e91e63" },
  ];

  const handleColorThemeChange = (newColorTheme: string) => {
    setColorTheme(newColorTheme);
    if (theme === "light") {
      document.documentElement.className =
        document.documentElement.className.replace(/color-\w+/g, "");
      if (newColorTheme !== "default") {
        document.documentElement.classList.add(`color-${newColorTheme}`);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full navbar-glass border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white drop-shadow-lg relative">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent blur-sm opacity-70"></span>
              <span className="relative">William Hatton</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-white font-medium hover:text-primary px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-gradient-to-r ${
                    index % 3 === 0
                      ? "hover:from-primary/30 hover:to-accent/30"
                      : index % 3 === 1
                      ? "hover:from-accent/30 hover:to-secondary/30"
                      : "hover:from-secondary/30 hover:to-primary/30"
                  } hover:shadow-lg`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* <div className="flex items-center space-x-4"> */}
          {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-gradient-to-r hover:from-primary/30 hover:to-accent/30 transition-all duration-300 text-white hover:text-white"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-accent" />
              <span className="sr-only text-white">Toggle theme</span>
            </Button>

            {theme === "light" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gradient-to-r hover:from-secondary/30 hover:to-primary/30 transition-all duration-300 text-white hover:text-white"
                  >
                    <Palette className="h-[1.2rem] w-[1.2rem] text-secondary animate-pulse" />
                    <span className="sr-only">Choose color theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {colorThemes.map((theme) => (
                    <DropdownMenuItem
                      key={theme.value}
                      onClick={() => handleColorThemeChange(theme.value)}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <div
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: theme.color }}
                      />
                      <span>{theme.name}</span>
                      {colorTheme === theme.value && <span className="ml-auto">✓</span>}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            <div className="hidden md:block">
              <Palette className="h-5 w-5 text-secondary animate-pulse" />
            </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-gradient-to-r hover:from-secondary/30 hover:to-primary/30 text-white hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-accent" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </Button>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md border-b border-border">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-white font-medium hover:text-primary block px-3 py-2 rounded-md text-base transition-all duration-300 hover:bg-gradient-to-r ${
                  index % 3 === 0
                    ? "hover:from-primary/30 hover:to-accent/30"
                    : index % 3 === 1
                    ? "hover:from-accent/30 hover:to-secondary/30"
                    : "hover:from-secondary/30 hover:to-primary/30"
                } hover:shadow-lg`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
