// SelectLang.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/providers/LanguageContextProvider";
import Image from "next/image";
import * as React from "react";

const SelectLang = ({ onClick }: { onClick?: () => void }) => {
  const { lang, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {lang === "English" ? (
            <Image
              src="/English Flag.png"
              alt="Flag"
              width={32}
              height={32}
              className="w-6 h-6 rounded-xl"
            />
          ) : (
            <Image
              src="/Arabic Flag.png"
              alt="Flag"
              width={32}
              height={32}
              className="w-6 h-6 rounded-xl"
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            setLanguage("Arabic");
            if (onClick) onClick()
          }}
          className="flex justify-center items-center gap-x-4 cursor-pointer"
        >
          Arabic
          <Image
            src="/Arabic Flag.png"
            alt="Flag"
            width={32}
            height={32}
            className="w-5 h-5 rounded-xl"
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setLanguage("English");
            if (onClick) onClick()
          }}
          className="flex justify-center items-center gap-x-4 cursor-pointer"
        >
          English
          <Image
            src="/English Flag.png"
            alt="Flag"
            width={32}
            height={32}
            className="w-5 h-5 rounded-xl"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectLang;
