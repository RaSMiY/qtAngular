import { Subject } from "rxjs";

export enum Direction {
    Vertical,
    Horizontal
}

export interface AbstractDataModel {
    data: (row: number, column: number, role: number) => any;
    rowCount: () => number;
    columnCount: () => number;
    dataHeader: (index: number, direction: Direction, role: number) => any;
    setData: (row: number, column: number, value: any, role: number) => void;

    dataChanged: Subject<[number, number]>;
}
