export type Count<
    Items extends unknown[],
    Find,
    Acc extends unknown[] = []
> = Items extends [infer Head, ...infer Tail]
    ? Head extends Find
        ? Count<Tail, Find, [...Acc, Head]>
        : Count<Tail, Find, Acc>
    : Acc["length"];
