import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-evenly">
      <div className="max-w-[800px] text-center text-3xl">
        Morty, *burp*, we gotta explore{" "}
        <Link href="/characters" className="text-primary font-bold">
          characters
        </Link>
        ,{" "}
        <Link href="/characters" className="text-primary font-bold">
          episodes
        </Link>
        , or{" "}
        <Link href="/characters" className="text-primary font-bold">
          locations
        </Link>
        , won&apos;t you? It&apos;s gonna be, you know, a real adventure.
      </div>
      <div></div>
    </div>
  );
}
