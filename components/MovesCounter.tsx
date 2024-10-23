const MovesCounter = ({ moves }: { moves: number }) => {
  return (
    <div className="w-1/2 bg-slate-100 flex justify-between items-center p-5 rounded-lg">
      <p className="text-2xl font-bold tracking-wide">Moves</p>
      <p className="text-3xl font-semibold tracking-wide">{moves}</p>
    </div>
  );
};

export default MovesCounter;
