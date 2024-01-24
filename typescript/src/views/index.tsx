import { useState } from "preact/hooks";

import { Direction, solveHanoi } from "../logic/hanoi";

type HanoiStep = { count: number; from: Direction; to: Direction };

const Index = () => {
  const [count, setCount] = useState(0);
  const [hanoiSteps, setHanoiSteps] = useState<HanoiStep[]>([]);

  const runHanoi = () => {
    setHanoiSteps([]);
    setCount(0);

    let _count = 0;
    let _hanoiSteps: HanoiStep[] = [];

    solveHanoi(
      6,
      "Left",
      "Right",
      "Middle",
      (from, to) => {
        setCount(() => ++_count);
        _hanoiSteps.push({ count: _count, from, to });
        setHanoiSteps(_hanoiSteps);
      },
      setCount
    );
  };

  return (
    <div class="fixed inset-0 flex h-screen w-full flex-col items-center justify-center gap-4 p-3">
      <h1>Welcome to Hanoi in Typescript!</h1>
      <div class="flex flex-col gap-4">
        <span className="text-center">
          {hanoiSteps && hanoiSteps.length > 0 ? (
            <>
              <strong>Steps taken: </strong>
              {count}
            </>
          ) : (
            <span className="text-center">Thanks for your visit!</span>
          )}
        </span>

        {hanoiSteps && hanoiSteps.length > 0 ? (
          <div className="mx-4 flex max-h-80 w-full max-w-sm flex-col gap-2 overflow-y-auto p-2">
            <div className="relative mx-auto w-auto">
              {hanoiSteps.map(({ count, from, to }) => (
                <div className="flex items-start justify-start gap-2">
                  <span className="w-auto">{count}</span>
                  <span className="w-auto">{from}</span>
                  <span className="w-auto">to</span>
                  <span className="w-auto">{to}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-screen max-h-80 items-center justify-center">
            <span className="text-center">No steps yet. Click "Run Hanoi" to start.</span>
          </div>
        )}

        <div class="flex gap-4">
          <button
            class="mx-auto rounded-md border border-amber-500 p-1 px-3 text-amber-500"
            onClick={() => {
              setHanoiSteps([]);
              setCount(0);
            }}
          >
            Reset
          </button>
          <button
            class="mx-auto rounded-md border border-neutral-200 p-1 px-3"
            onClick={() => runHanoi()}
          >
            Run Hanoi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
