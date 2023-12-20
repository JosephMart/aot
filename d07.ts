type GG<T> = T extends string ? `good_${T}` : any;

export type AppendGood<T> = {
    [Prop in GG<keyof T>]: Prop extends `good_${infer A}`
        ? A extends keyof T
            ? T[A]
            : never
        : never;
};
