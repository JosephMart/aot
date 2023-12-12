type RemoveNaughtyChildren<T> = {
    [Prop in keyof T as Prop extends `naughty_${infer A}`
        ? never
        : Prop]: T[Prop];
};
