import { Subject } from "rxjs";
import { AbstractDataModel, Direction } from "./abstract-data-model";

export class EmptyDataModel implements AbstractDataModel {
    data = (row: number, column: number, role: number) => {
        return '';
    };

    rowCount = () => 0;
    columnCount = () => 0;

    dataHeader = (index: number, direction: Direction, role: number) => {
        return '';
    }

    setData = (row: number, column: number, value: any, role: number) => {}

    dataChanged = new Subject<[number, number]>();
}
