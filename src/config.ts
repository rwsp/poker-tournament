export const STARTING_STACK = 5200;

export interface Blind {
    id: number,
    small: number,
    big: number,
}

export const BLINDS: Blind[] = [
    { id:  0, small: 5,    big: 10 },
    { id:  1,small: 10,   big: 20 },
    { id:  2,small: 15,   big: 30 },
    { id:  3,small: 20,   big: 40 },
    { id:  4,small: 25,   big: 50 },
    { id:  5,small: 30,   big: 100 },
    { id:  6,small: 50,   big: 150 },
    { id:  7,small: 75,  big: 200 },
    { id:  8,small: 100,  big: 300 },
    { id:  9,small: 200,  big: 400 },
    { id: 10,small: 500,  big: 500 },
    { id: 11,small: 1000,  big: 2000 },
    { id: 12,small: 2000, big: 4000 },
    { id: 13,small: 5000, big: 10000 },
];