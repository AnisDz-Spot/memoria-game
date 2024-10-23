"use client";

import useStore from "@/lib/store";
import Link from "next/link";

const Navbar = () => {
  const reset = useStore((state) => state.resetGame);

  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-prussianBlue text-[2rem] lg:text-[3rem] font-bold uppercase tracking-widest">
        Memoria
      </h1>
      <div className="flex justify-center items-center gap-3 lg:gap-6">
        <button
          onClick={() => reset()}
          className="text-xl lg:text-2xl bg-prussianBlue text-white rounded-full py-2 px-6 lg:px-8 font-medium hover:bg-utOrange"
        >
          Restart
        </button>
        <Link
          href="/"
          className="text-xl lg:text-2xl bg-gray-400 text-white rounded-full py-2 px-6 lg:px-8 font-medium hover:bg-utOrange"
        >
          New game
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
