"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../ui/modeToggle";
import SelectLang from "../ui/selectLang";
import { MenuLink, NavLink } from "@/constants";
import Logo from "../../../public/Logo.png";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll visibility
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`bg-background shadow-md fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container">
        <div className="flex justify-between h-16">
          {/* Logo and Main Navigation */}
          <div className="flex gap-x-6">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex gap-2">
                <Image src={Logo} alt="Logo" width={48} height={32} />
                <span className="text-2xl font-bold text-primary">Elmadany</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:flex sm:gap-x-8">
              {MenuLink.map(({ Title, Url }) => (
                <Link
                  key={Title}
                  href={Url}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 duration-300 hover:text-primary"
                >
                  {Title}
                </Link>
              ))}
              {/* Dropdown Menu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-500">
                      About me
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col gap-2">
                      {NavLink.map(({ Title, Url }) => (
                        <NavigationMenuLink
                          key={Title}
                          href={Url}
                          className="w-[9.55rem] text-gray-500 px-5 py-2 rounded-sm duration-300 hover:bg-primary hover:text-foreground"
                        >
                          {Title}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Language and Theme Switch */}
          <div className="hidden sm:flex sm:items-center sm:gap-x-4">
            <SelectLang />
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="-mr-2 flex items-center sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <Menu className="h-6 w-6 text-primary" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-fit">
                {MenuLink.map(({ Title, Url }) => (
                  <DropdownMenuItem key={Title} asChild>
                    <Link href={Url}>{Title}</Link>
                  </DropdownMenuItem>
                ))}
                {/* Dropdown Submenu */}
                <DropdownMenuItem>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-gray-500">
                          About me
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col gap-2">
                          {NavLink.map(({ Title, Url }) => (
                            <NavigationMenuLink
                              key={Title}
                              href={Url}
                              className="w-32 px-5 py-2 duration-300 hover:bg-primary"
                            >
                              {Title}
                            </NavigationMenuLink>
                          ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </DropdownMenuItem>
                {/* Language and Theme Toggle */}
                <DropdownMenuItem>
                  <SelectLang />
                  <ModeToggle />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
