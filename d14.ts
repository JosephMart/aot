type Parse<
    Base extends string,
    Delimiter extends string = "/"
> = Base extends `${infer Pre}${Delimiter}${infer Post}`
    ? Post extends string
        ? [Pre, ...Parse<Post, Delimiter>]
        : [Pre]
    : [Base];

type DecipherNaughtyList<Base extends string> = Parse<Base, "/">[number];
type d14 = DecipherNaughtyList<"timmy/jimmy/bobby/foo">;
