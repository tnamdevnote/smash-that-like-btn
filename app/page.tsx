import Button from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FBDDDB] p-16">
      <section className="flex h-72 w-full max-w-sm items-center justify-between antialiased md:max-w-md lg:max-w-lg">
        <article className="flex flex-col">
          <p className="font-serif text-xl  text-red-950/80">
            <span className="text-5xl">W</span>ithout craftsmanship, inspiration
            is a mere reed shaken in the wind.
          </p>
          <span className="mt-4 self-end text-xs text-red-950/60">
            <i>Johannes Brahms, 1833~1897</i>
          </span>
        </article>
        <Button />
      </section>
    </main>
  );
}
