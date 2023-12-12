type SantasList<A extends readonly unknown[], V extends readonly unknown[]> = [
    ...A,
    ...V
];
