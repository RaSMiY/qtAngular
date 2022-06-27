import { Subject } from 'rxjs';
import { AbstractDataModel, Direction } from './abstract-data-model';

export class DataModel implements AbstractDataModel {
    private _data: Array<Array<Array<any>>>;

    constructor() {
        this._data = Array(this.rowCount()).fill([])
            .map(() => Array(this.columnCount()).fill([])
                .map(() => [10, null]));
    }

    data = (row: number, column: number, role: number) => {
        let result;

        result = this._data[row][column][0];

        return result
    };

    rowCount = () => 35;
    columnCount = () => 50;

    dataHeader = (index: number, direction: Direction, role: number) => {
        return '_' + index;
    }

    setData = (row: number, column: number, value: any, role: number) => {
        this._data[row][column][0] = value;
        this.dataChanged.next([row, column]);
    }

    dataChanged = new Subject<[number, number]>();
}
