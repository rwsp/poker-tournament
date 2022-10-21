export const STARTING_STACK = 1600;
export const STAGE_LENGTH = 4;


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
    { id:  5,small: 30,   big: 60 },
    { id:  6,small: 40,   big: 80 },
    { id:  7,small: 50,  big: 100 },
    { id:  8,small: 75,  big: 150 },
    { id:  9,small: 100,  big: 200 },
    { id: 10,small: 200,  big: 400 },
    { id: 11,small: 400,  big: 800 },
    { id: 12,small: 800, big: 1600 },
    { id: 13,small: 1500, big: 3000 },
    { id: 14,small: 3000, big: 6000 },
];