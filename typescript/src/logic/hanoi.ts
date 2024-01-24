export type Direction = "Left" | "Middle" | "Right";

export function solveHanoi(
  count: number,
  from: Direction,
  to: Direction,
  other: Direction,
  move: (from: Direction, to: Direction) => void,
  setIntermittedValue: any
) {
  if (count > 0) {
    solveHanoi(count - 1, from, other, to, move, setIntermittedValue);
    move(from, to);
    solveHanoi(count - 1, other, to, from, move, setIntermittedValue);
  }
}
