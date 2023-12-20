export type RemoveNaughtyChildren<T> = {
    [Prop in keyof T as Prop extends `naughty_${infer _}`
        ? never
        : Prop]: T[Prop];
};
