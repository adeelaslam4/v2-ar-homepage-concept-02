import Image from "next/image";

export const metadata = { title: "A.R. ASCENDANCY — Private Vorschau" };

export default function Zugang() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-charcoal px-6 text-center text-ivory">
      <Image src="/logo/lockup-original@2x.png" alt="A.R. ASCENDANCY" width={1000} height={1000} unoptimized className="h-36 w-auto" />
      <h1 className="h-section mt-12 text-[2rem] md:text-[2.6rem]">Private Vorschau</h1>
      <p className="lede mt-5 max-w-[460px] text-ivory/70">
        Diese Seite ist ausschließlich über den persönlichen Einladungslink erreichbar. Bitte öffnen
        Sie den Link, den Sie von PENAXIS erhalten haben.
      </p>
    </main>
  );
}
