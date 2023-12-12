type DeepReadonlyArray<
    Cur extends ReadonlyArray<unknown>,
    Acc extends ReadonlyArray<unknown> = []
> = Cur["length"] extends Acc["length"]
    ? Acc
    : DeepReadonlyArray<
          Cur,
          readonly [...Acc, SantaListProtector<Cur[Acc["length"]]>]
      >;

type SantaListProtector<T> = T extends Record<string, unknown>
    ? {
          readonly [Prop in keyof T]: SantaListProtector<T[Prop]>;
      }
    : T extends unknown[]
    ? DeepReadonlyArray<T>
    : T;
