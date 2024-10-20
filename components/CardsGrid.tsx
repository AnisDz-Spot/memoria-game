import React, { useEffect, useState } from "react";
import useStore from "@/lib/store";
import { IconType } from "react-icons";
import { generateCardsArray } from "@/lib/utils";
import MovesCounter from "@/components/MovesCounter";
import Timer from "@/components/Timer";

type MatchedCards = {
  card: IconType | number;
  cardIndex: number;
};

const CardsGrid = () => {
  const theme = useStore((state) => state.theme);
  const gridSize = useStore((state) => state.gridSize);

  const [cardItems, setCardItems] = useState<(IconType | number)[]>(); // This is holding the cards list
  const [flippedItems, setFlippedItems] = useState<(boolean | null)[]>(
    Array(gridSize).fill(false)
  ); // This is holding the flipped cards list
  const [matchedCardsList, setMatchedCardsList] = useState<MatchedCards[]>([]); // This is holding the matched cards list

  useEffect(() => {
    const newArray = generateCardsArray(theme, gridSize);
    setCardItems(newArray);
  }, [theme, gridSize]);

  // Handle Clicked Card
  const handleClick = (item: IconType | number, index: number) => {
    if (flippedItems[index]) return; // Ignore if already flipped

    const newFlipped = [...flippedItems];
    newFlipped[index] = true;
    setFlippedItems(newFlipped);

    if (matchedCardsList.length === 0) {
      // First card clicked
      setMatchedCardsList([{ card: item, cardIndex: index }]);
    } else if (matchedCardsList.length === 1) {
      // Second card clicked
      setMatchedCardsList([
        ...matchedCardsList,
        { card: item, cardIndex: index },
      ]);

      // Check if the two cards match
      if (matchedCardsList[0].card === item) {
        console.log("It's a Match");
        // Clear matchedCardsList for the next match attempt
        setTimeout(() => {
          setMatchedCardsList([]);
        }, 500); // Optional delay for visual feedback
      } else {
        // No match, flip the cards back after a delay
        setTimeout(() => {
          const resetFlipped = [...flippedItems];
          resetFlipped[matchedCardsList[0].cardIndex] = false;
          resetFlipped[index] = false;
          setFlippedItems(resetFlipped);

          // Clear the matchedCardsList for the next attempt
          setMatchedCardsList([]);
        }, 1000); // Wait for 1 second before flipping back
      }
    }
  };

  return (
    <main>
      <div
        className={`w-fit grid ${
          gridSize === 16
            ? "grid-cols-4 grid-rows-4 gap-8"
            : "grid-cols-6 grid-rows-6 gap-4"
        }`}
      >
        {cardItems &&
          cardItems.map((item, index) => (
            <div
              key={index}
              className={`relative ${
                gridSize === 16 ? "w-28 h-28" : "w-24 h-24"
              } rounded-full cursor-pointer transition-transform duration-500 transform-style-3d ${
                flippedItems[index] ? "rotate-y-180" : ""
              }`}
              onClick={() => handleClick(item, index)}
            >
              <div className="absolute w-full h-full bg-prussianBlue text-white flex justify-center items-center rounded-full backface-hidden">
                {/* Render Front Side */}
              </div>
              <div className="absolute w-full h-full bg-selectiveYellow text-white flex justify-center items-center rounded-full backface-hidden transform rotate-y-180">
                {typeof item === "function" ? (
                  React.createElement(item, { className: "text-[3rem]" })
                ) : (
                  <span className="text-[3rem]">{item}</span>
                )}
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-between items-center gap-5 my-10">
        <Timer />
        <MovesCounter />
      </div>
    </main>
  );
};

export default CardsGrid;
