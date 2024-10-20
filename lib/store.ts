import { IconType } from "react-icons";
import { create } from "zustand";

type State = {
    theme: string;
    numberOfPlayers: number;
    gridSize: number;
}

type Action = {
    setTheme: (theme: string) => void;
    setNumberOfPlayers: (players: number) => void;
    setGridSize: (size: number) => void;
}

const useStore = create<State & Action>((set) => ({
    theme: "icons",
    numberOfPlayers: 1,
    gridSize: 16,

    setTheme: (theme) => set(() => ({ theme: theme })),
    setNumberOfPlayers: (players) => set(() => ({ numberOfPlayers: players })),
    setGridSize: (size) => set(() => ({ gridSize: size })),
}))

export default useStore;