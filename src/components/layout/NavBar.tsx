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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheetSh";
import { MenuLink, NavLink } from "@/constants";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { Menu } from "lucide-react";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/Logo.png";
import type React from "react";
import { useCallback, useEffect, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();
  const isRTL = lang !== "English";
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Set hash on first load
    handleHashChange();

    // Listen to hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  });

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-50 w-full bg-background shadow-sm border-b border-secondary transition-transform duration-300",
        "rounded-b-lg md:rounded-b-xl",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
      aria-label="Main navigation"
    >
      <div className="container px-4 mx-auto" dir={isRTL ? "rtl" : "ltr"}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Homepage"
            >
              <Image
                src={Logo || "/placeholder.svg"}
                alt="Logo"
                width={48}
                height={32}
                className="w-10 h-6 md:w-12 md:h-8"
                priority
              />
              <span className="text-lg md:text-2xl font-bold text-primary">
                {isRTL ? "المدني" : "Elmadany"}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-x-6">
            {/* Main Menu Links */}
            <div className="flex items-center gap-x-6">
              {MenuLink.map(({ Title, ArTitle, Url }) => (
                <Link
                  key={Title}
                  href={Url}
                  className={`text-base font-medium text-muted-foreground transition-colors hover:text-primary ${
                    activeHash === Url
                      ? "!text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {isRTL ? ArTitle : Title}
                </Link>
              ))}

              {/* About Me Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium text-muted-foreground">
                      {isRTL ? "عني" : "About me"}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        className="grid w-[200px] gap-1 p-2"
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        {NavLink.map(({ Title, ArTitle, Url, Icon }) => {
                          // Dynamically render the icon if it exists
                          const IconComponent = Icon
                            ? (LucideIcons[
                                Icon as keyof typeof LucideIcons
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              ] as React.ComponentType<any>)
                            : null;

                          return (
                            <li key={Title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={Url}
                                  className={`flex items-center w-full p-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground ${
                                    activeHash === Url
                                      ? "!text-primary"
                                      : "text-muted-foreground"
                                  }`}
                                >
                                  {IconComponent && (
                                    <IconComponent className="w-4 h-4 mx-2" />
                                  )}
                                  {isRTL ? ArTitle : Title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Language and Theme Toggle */}
            <div className="flex items-center gap-x-3 ml-4">
              <SelectLang />
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={isRTL ? "left" : "right"}
                dir={isRTL ? "rtl" : "ltr"}
                className="w-[80%] sm:w-[350px]"
              >
                <div className="flex flex-col h-full pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <Link
                      href="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image
                        src={Logo || "/placeholder.svg"}
                        alt="Logo"
                        width={40}
                        height={24}
                        className="w-8 h-5"
                      />
                      <span className="text-lg font-bold text-primary">
                        {isRTL ? "المدني" : "Elmadany"}
                      </span>
                    </Link>
                  </div>

                  <div className="flex flex-col space-y-4">
                    {/* Main Menu Links */}
                    {MenuLink.map(({ Title, ArTitle, Url }) => (
                      <Link
                        key={Title}
                        href={Url}
                        className={`py-2 w-fit text-base font-medium text-foreground hover:text-primary transition-colors ${
                          activeHash === Url
                            ? "!text-primary"
                            : "text-muted-foreground"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {isRTL ? ArTitle : Title}
                      </Link>
                    ))}

                    {/* About Me Accordion */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="about-me" className="border-b-0">
                        <AccordionTrigger className="py-2 text-base font-medium">
                          {isRTL ? "عني" : "About me"}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col rounded-md bg-secondary space-y-2 ">
                            {NavLink.map(({ Title, ArTitle, Url, Icon }) => {
                              // Dynamically render the icon if it exists
                              const IconComponent = Icon
                                ? (LucideIcons[
                                    Icon as keyof typeof LucideIcons
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                  ] as React.ComponentType<any>)
                                : null;

                              return (
                                <Link
                                  key={Title}
                                  href={Url}
                                  className={`flex items-center py-2 px-4 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent ${
                                    activeHash === Url
                                      ? "!text-primary"
                                      : "text-muted-foreground"
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {IconComponent && (
                                    <IconComponent className="w-4 h-4 mr-2" />
                                  )}
                                  {isRTL ? ArTitle : Title}
                                </Link>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Language and Theme Toggle */}
                  <div className="mt-auto pt-4 flex items-center gap-4">
                    <SelectLang onClick={() => setIsOpen(false)} />
                    <ModeToggle onClick={() => setIsOpen(false)} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
