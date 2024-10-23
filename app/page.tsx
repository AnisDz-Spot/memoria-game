"use client";

import useStore from "@/lib/store";
import Link from "next/link";

export default function Home() {
  const theme = useStore((state) => state.theme);
  const numberOfPlayers = useStore((state) => state.numberOfPlayers);
  const gridSize = useStore((state) => state.gridSize);

  const setTheme = useStore((state) => state.setTheme);
  const setNumberOfPlayers = useStore((state) => state.setNumberOfPlayers);
  const setGridSize = useStore((state) => state.setGridSize);

  return (
    <section className="bg-prussianBlue w-screen h-screen flex justify-center items-center">
      <main className="bg-utOrange min-w-[90vw] lg:min-w-[50%] rounded-2xl px-8 py-10 lg:p-10 text-white flex flex-col justify-center items-center">
        <h1 className="text-white text-[2.5rem] lg:text-[3rem] font-bold uppercase tracking-wide mb-8">
          Memoria Game
        </h1>
        <div className="w-full flex flex-col justify-center gap-2">
          <div className="gap-3">
            <p className="text-xl lg:text-2xl capitalize text-white mb-2 font-semibold">
              Select theme
            </p>
            <div className="flex justify-between items-center gap-5 lg:gap-10">
              <button
                onClick={() => setTheme("numbers")}
                className={`${
                  theme === "numbers"
                    ? "bg-prussianBlue"
                    : "bg-gray-400 opacity-50"
                } w-full py-2 text-2xl lg:text-3xl rounded-3xl font-semibold`}
              >
                Numbers
              </button>
              <button
                onClick={() => setTheme("icons")}
                className={`${
                  theme === "icons"
                    ? "bg-prussianBlue"
                    : "bg-gray-400 opacity-50"
                } w-full py-2 text-2xl lg:text-3xl rounded-3xl font-semibold`}
              >
                Icons
              </button>
            </div>
          </div>
          <div className="flex flex-col items-between">
            <p className="text-xl lg:text-2xl capitalize text-white mt-5 mb-2 font-semibold">
              Number of Players
            </p>
            <div className="flex justify-between items-center gap-2 lg:gap-4">
              {[1, 2, 3, 4].map((item) => (
                <button
                  onClick={() => setNumberOfPlayers(item)}
                  key={`players-${item}`}
                  className={`${
                    numberOfPlayers === item
                      ? "bg-prussianBlue"
                      : "bg-gray-400 opacity-50"
                  } w-full py-2 text-2xl rounded-3xl font-semibold`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-between">
            <p className="text-xl lg:text-2xl capitalize text-white mt-5 mb-2 font-semibold">
              Grid Size
            </p>
            <div className="flex justify-between items-center gap-4">
              <button
                onClick={() => setGridSize(16)}
                className={`${
                  gridSize === 16 ? "bg-prussianBlue" : "bg-gray-400 opacity-50"
                } w-full py-2 text-2xl lg:text-3xl rounded-3xl font-semibold`}
              >
                4x4
              </button>
              <button
                onClick={() => setGridSize(36)}
                className={`${
                  gridSize === 36 ? "bg-prussianBlue" : "bg-gray-400 opacity-50"
                } w-full py-2 text-2xl lg:text-3xl rounded-3xl font-semibold`}
              >
                6x6
              </button>
            </div>
          </div>
          <Link
            href="/game"
            className="w-full text-2xl lg:text-3xl text-center bg-white text-prussianBlue uppercase font-bold tracking-wider py-3 mt-5 rounded-3xl"
          >
            Start Game
          </Link>
        </div>
      </main>
    </section>
  );
}
