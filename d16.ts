type FindSantaRow<Row> = Row extends [...infer A, infer B]
    ? B extends "🎅🏼"
        ? A["length"]
        : FindSantaRow<A>
    : never;

export type FindSanta<Matrix extends unknown[]> = {
    [Prop in keyof Matrix]: FindSantaRow<Matrix[Prop]> extends never
        ? never
        : [
              Prop extends `${infer Num extends number}` ? Num : never,
              FindSantaRow<Matrix[Prop]>
          ];
}[number];
