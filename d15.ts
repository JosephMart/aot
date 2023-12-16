type BoxToysExpand<
    Toy extends string,
    End extends number,
    Acc extends Toy[] = []
> = Acc["length"] extends End ? Acc : BoxToysExpand<Toy, End, [...Acc, Toy]>;

type BoxToys<Toy extends string, End extends number> = {
    [Prop in End]: BoxToysExpand<Toy, Prop>;
}[End];
