import Head from "next/head";
import { useEffect } from "react";
import Hero from "./components/hero";
import { useMenu, useScroll } from "@/store/store";
import About from "./components/services";
import NewServices from "./components/programs";
import Services from "./components/services";

export default function Home() {
  const { target } = useScroll();
  const { menuIsOpen } = useMenu();

  useEffect(() => {
    if (target == "") {
      return;
    }
    const section = document.getElementById(target);
    section?.scrollIntoView({ behavior: "smooth" });
  }, [target]);
  return (
    <>
      <Head>
        <title>SlipakoffConsulting</title>
        <meta name="description" content="SlipakoffConsulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full font-serif">
        <section id="1" className="h-[calc(100vh-96px)]    ">
          <Hero />
        </section>
       
        <section id="2" className="h-screen border ">
          <Services/> 
        </section>
        <section id="3" className="min-h-screen border ">
          <NewServices />
        </section>
        <section id="4" className="h-screen border ">
          contact
        </section>
      </main>
    </>
  );
}
