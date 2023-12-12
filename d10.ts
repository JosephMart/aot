type StreetSuffixTester<Street, Suffix> = Street extends `${string}${infer B}`
    ? B extends Suffix
        ? true
        : StreetSuffixTester<B, Suffix>
    : false;
