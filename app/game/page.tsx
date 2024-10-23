"use client";

import CardsGrid from "@/components/CardsGrid";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <section className="box-border w-screen h-screen bg-white flex flex-col items-center px-2 lg:px-52 py-10 gap-16">
      <Navbar />
      <CardsGrid />
    </section>
  );
};

export default Page;
