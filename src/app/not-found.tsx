import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex max-w-[600px] flex-1 flex-col items-center justify-evenly text-center text-2xl">
      <Image
        src="/404-rick.jpg"
        height={400}
        width={700}
        alt="rick-shocked"
      />
      <div>
        Aw, geez, looks like we&apos;ve hit a dead end here, Morty! This page or
        whatever it was supposed to be, *burp*, it&apos;s just not here,
        it&apos;s a 404, Morty! A big fat nothing! Time to get back to the
        portal gun and, you know, find the right dimension or whatever.
      </div>
      <div></div>
    </div>
  );
}
