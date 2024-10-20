import { IconType } from "react-icons";
import { IoHeadsetOutline, IoHeartOutline, IoLogoReddit,
  IoPrintOutline, IoRocketOutline, IoShirtOutline, IoStorefrontOutline,
  IoBulbOutline, IoAmericanFootballOutline, IoBagOutline, IoBodyOutline,
  IoBoatOutline, IoBugOutline, IoCarSportOutline, IoCameraOutline,
  IoCloudyNightOutline, IoConstructOutline, IoFastFoodOutline } from "react-icons/io5";

// Icons array
const iconsArray = {
  icons: [
    IoHeartOutline, IoHeadsetOutline, IoLogoReddit, IoPrintOutline, IoRocketOutline,
    IoShirtOutline, IoStorefrontOutline, IoBulbOutline, IoAmericanFootballOutline,
    IoBagOutline, IoBodyOutline, IoBoatOutline, IoBugOutline, IoCarSportOutline,
    IoCameraOutline, IoCloudyNightOutline, IoConstructOutline, IoFastFoodOutline
  ],
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
};

// Generate random index based on available length
const generateRandomIndex = (length: number): number => {
  return Math.floor(Math.random() * length);
};

// Generate cards array based on theme
export const generateCardsArray = (theme: string, length: number) => {
  let itemsList: (IconType | number)[] = [];

  // Generate the unique items for the theme
  if (theme === "icons") {
    const iconsList: IconType[] = [];
    while (iconsList.length < length / 2) {
      const index = generateRandomIndex(iconsArray.icons.length);
      if (!iconsList.includes(iconsArray.icons[index])) {
        iconsList.push(iconsArray.icons[index]);
      }
    }
    itemsList = iconsList;
  } else {
    const numbersList: number[] = [];
    while (numbersList.length < length / 2) {
      const index = generateRandomIndex(iconsArray.numbers.length);
      if (!numbersList.includes(iconsArray.numbers[index])) {
        numbersList.push(iconsArray.numbers[index]);
      }
    }
    itemsList = numbersList;
  }

  // Duplicate and shuffle the items
  const generatedCardsList = itemsList.concat(itemsList);
  return shuffle(generatedCardsList);
};

// Shuffle array (Fisher-Yates algorithm)
const shuffle = (array: any[]) => {
  let currentIndex = array.length;
  
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap elements
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex],
    ];
  }

  return array; // Return the shuffled array
};
