export declare type MaUrl = string;
/** Jeśli szerokość wyświetlania <= index, wtedy używamy wartości */
export interface MaRwdThresholds<T> {
    [index: number]: T;
}
export interface Dictionary<T> {
    [index: string]: T;
}
