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
type WhoWins<
    A extends RockPaperScissors,
    B extends RockPaperScissors
> = Results[B] extends R<B, infer Lose, infer Win>
    ? Lose extends A
        ? "lose"
        : Win extends A
        ? "win"
        : "draw"
    : never;
