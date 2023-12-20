type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";
type R<Base, Win, Lose> = {
    type: Base;
    lose: Lose;
    win: Win;
};
type Results = {
    "👊🏻": R<"👊🏻", "🖐🏾", "✌🏽">;
    "🖐🏾": R<"🖐🏾", "✌🏽", "👊🏻">;
    "✌🏽": R<"✌🏽", "👊🏻", "🖐🏾">;
};

type ResultsTest = ["👊🏻", "🖐🏾", "✌🏽"] | ["🖐🏾", "✌🏽", "👊🏻"] | ["✌🏽", "👊🏻", "🖐🏾"];
type GetType<T extends ResultsTest[number]> = {
    [Prop in keyof ResultsTest]: Prop extends T ? ResultsTest[Prop] : never;
};

type AAA = GetType<"👊🏻">;

export type WhoWins<
    A extends RockPaperScissors,
    B extends RockPaperScissors
> = Results[B] extends R<B, infer Lose, infer Win>
    ? Lose extends A
        ? "lose"
        : Win extends A
        ? "win"
        : "draw"
    : never;
