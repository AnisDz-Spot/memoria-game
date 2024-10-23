import { create } from "zustand";

type State = {
    theme: string;
    numberOfPlayers: number;
    gridSize: number;
    reset: boolean;
}

type Action = {
    setTheme: (theme: string) => void;
    setNumberOfPlayers: (players: number) => void;
    setGridSize: (size: number) => void;
    resetGame: () => void;
}

const useStore = create<State & Action>((set) => ({
    theme: "icons",
    numberOfPlayers: 1,
    gridSize: 16,
    reset: false,

    setTheme: (theme) => set(() => ({ theme: theme })),
    resetGame: () => set((state) => ({ reset: !state.reset })),
    setNumberOfPlayers: (players) => set(() => ({ numberOfPlayers: players })),
    setGridSize: (size) => set(() => ({ gridSize: size })),
}))

export default useStore;