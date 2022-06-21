import { Subject } from 'rxjs';
import { AbstractDataModel, Direction } from './abstract-data-model';

export class DataModel implements AbstractDataModel {
    data = (row: number, column: number, role: number) => {
        let result;

        result = row + column + 10;

        return result
    };

    rowCount = () => 35;
    columnCount = () => 50;

    dataHeader = (index: number, direction: Direction, role: number) => {
        return '_' + index;
    }

    dataChanged = new Subject<[number, number]>();
}
