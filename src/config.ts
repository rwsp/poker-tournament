export const STARTING_STACK = 3600;
export const STAGE_LENGTH = 20 * 60;


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
    { id:  4,small: 30,   big: 60 },
    { id:  5,small: 40,   big: 80 },
    { id:  6,small: 50,   big: 100 },
    { id:  7,small: 75,  big: 150 },
    { id:  8,small: 100,  big: 200 },
    { id:  9,small: 150,  big: 300 },
    { id: 10,small: 250,  big: 500 },
    { id: 11,small: 500,  big: 1000 },
    { id: 12,small: 750, big: 1500 },
    { id: 13,small: 1500, big: 3000 },
    { id: 14,small: 3000, big: 6000 },
];