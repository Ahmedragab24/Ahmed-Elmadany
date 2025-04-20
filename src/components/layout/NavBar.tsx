"use client";

import { ModeToggle } from "../ui/modeToggle";
import SelectLang from "../ui/selectLang";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { MenuLink, NavLink } from "@/constants";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/Logo.png";
import { useEffect, useState, useCallback } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang } = useLanguage();

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
  }, [handleScroll, isMenuOpen]);

  return (
    <nav
      className={`bg-background shadow-md fixed top-0 left-0 w-full transition-transform duration-300 z-50 border-b border-secondary rounded-b-[2rem] md:rounded-b-[6rem]  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container" dir={`${lang === "English" ? "ltr" : "rtl"}`}>
        <div className="flex justify-between h-16">
          {/* Logo and Main Navigation */}
          <div className="flex gap-x-6">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex gap-2 justify-center items-center">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={48}
                  height={32}
                  className="w-[40px] h-[24px] md:w-[48px] md:h-[32px]"
                />
                <span className="text-lg md:text-2xl font-bold text-primary">
                  {lang === "English" ? "Elmadany" : "المدني"}
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:flex sm:gap-x-6">
              {MenuLink.map(({ Title, ArTitle, Url }) => (
                <Link
                  key={Title}
                  href={Url}
                  className="inline-flex items-center px-2 text-md font-medium text-gray-500 duration-300 hover:text-primary"
                >
                  {lang == "English" ? Title : ArTitle}
                </Link>
              ))}
              {/* Dropdown Menu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-500 text-md">
                      {lang == "English" ? "About me" : "من أنا"}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col gap-2">
                      {NavLink.map(({ Title, ArTitle, Url }) => (
                        <NavigationMenuLink
                          key={Title}
                          href={Url}
                          className="w-[9.55rem] text-gray-500 px-5 py-2 rounded-sm duration-300 hover:bg-primary hover:text-foreground"
                        >
                          {lang == "English" ? Title : ArTitle}
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
            <DropdownMenu open={isMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <Menu className="!w-7 !h-7 text-primary" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-fit">
                {MenuLink.map(({ Title, Url }) => (
                  <DropdownMenuItem
                    key={Title}
                    asChild
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href={Url}>{Title}</Link>
                  </DropdownMenuItem>
                ))}
                {/* Dropdown Submenu */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-foreground flex justify-center items-center">
                      About me
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col text-center gap-2 bg-secondary rounded-md">
                      {NavLink.map(({ Title, Url }) => (
                        <Link
                          key={Title}
                          href={Url}
                          className="w-32 px-5 py-2 duration-300 hover:bg-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {Title}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* Language and Theme Toggle */}
                <DropdownMenuItem>
                  <SelectLang onClick={() => setIsMenuOpen(false)} />
                  <ModeToggle onClick={() => setIsMenuOpen(false)} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
