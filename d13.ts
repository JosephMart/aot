type DayCounter<
    Start extends number,
    End extends number,
    FoundLowerBound extends boolean = false,
    Cur extends number[] = [],
    Acc extends number[] = []
> = FoundLowerBound extends true
    ? Cur["length"] extends End
        ? [...Acc, Cur["length"]][number]
        : DayCounter<
              Start,
              End,
              true,
              [...Cur, number],
              [...Acc, Cur["length"]]
          >
    : Cur["length"] extends Start
    ? DayCounter<Start, End, true, [...Cur, number], [...Acc, Cur["length"]]>
    : DayCounter<Start, End, false, [...Cur, number], Acc>;

// Simplified Version using Exclude...
type Expand0<
    End extends number,
    Acc extends number[] = []
> = Acc["length"] extends End
    ? [...Acc, Acc["length"]][number]
    : Expand0<End, [...Acc, Acc["length"]]>;

type DayCounter0<Start extends number, End extends number> =
    | Exclude<Expand0<End>, Expand0<Start>>
    | Start;
