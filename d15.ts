type BoxToysExpand<
    Toy extends string,
    End extends number,
    Acc extends Toy[] = []
> = End extends Acc["length"] ? Acc : BoxToysExpand<Toy, End, [...Acc, Toy]>;

type BoxToys<Toy extends string, End extends number> = BoxToysExpand<Toy, End>;
