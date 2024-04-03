"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { ModeToggle } from "./theme-toggle";
import RickIcon from "./icons/rick.svg";
import MortyIcon from "./icons/morty.svg";

export const Header = () => {
  const path = usePathname();
  return (
    <header className="flex w-full justify-center border-b-2 p-4 transition-all duration-300">
      <div className="flex w-full items-center justify-evenly">
        <Link href="/">
          <div className="flex items-center gap-5">
            <Image src={RickIcon} alt="rick.svg" height={60} />
            <Image src={MortyIcon} alt="rick.svg" height={60} />
          </div>
        </Link>
        <div className="flex gap-8">
          <Link
            href="/characters"
            className={`text-primary hover:border-primary-foreground rounded border-b-2 px-4 pb-3 text-2xl font-bold ${path.includes("/characters") ? "border-primary" : ""}`}>
            Characters
          </Link>
          <Link
            href="/episodes"
            className={`text-primary hover:border-primary-foreground rounded border-b-2 px-4 pb-3 text-2xl font-bold ${path.includes("/episodes") ? "border-primary" : ""}`}>
            Episodes
          </Link>
          <Link
            href="/locations"
            className={`text-primary hover:border-primary-foreground rounded border-b-2 px-4 pb-3 text-2xl font-bold ${path.includes("/locations") ? "border-primary" : ""}`}>
            Locations
          </Link>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};
