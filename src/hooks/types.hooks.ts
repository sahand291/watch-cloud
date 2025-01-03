export interface ICountDown {
    seconds: number
    s: number
    m: number
    h: number
    d: number
    str: string
}

export enum ECounterAction {
    COUNT_DOWN = 'count-down',
    STOP = 'stop',
}



