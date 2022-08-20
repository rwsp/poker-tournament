export const STARTING_STACK = 4500;

export interface Blind {
    small: number,
    big: number,
}

export const BLINDS: Blind[] = [
    { small: 5,    big: 10 },
    { small: 10,   big: 20 },
    { small: 15,   big: 30 },
    { small: 20,   big: 40 },
    { small: 25,   big: 50 },
    { small: 50,   big: 100 },
    { small: 75,   big: 150 },
    { small: 100,  big: 200 },
    { small: 150,  big: 300 },
    { small: 200,  big: 400 },
    { small: 250,  big: 500 },
    { small: 500,  big: 1000 },
    { small: 1000, big: 2000 },
];