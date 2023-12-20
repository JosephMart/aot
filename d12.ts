export type FindSanta<
    T extends unknown[],
    Acc extends unknown[] = []
> = T extends [infer A, ...infer B]
    ? A extends "🎅🏼"
        ? Acc["length"]
        : FindSanta<B, [...Acc, A]>
    : never;
