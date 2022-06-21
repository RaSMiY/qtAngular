import { Component, Input, OnInit } from '@angular/core';
// import { tap } from "rxjs";
import { AbstractDataModel, Direction } from './abstract-data-model';
import { EmptyDataModel } from './empty-data-model';

@Component({
  selector: 'app-qt-table',
  templateUrl: './qt-table.component.html',
  styleUrls: ['./qt-table.component.scss']
})
export class QtTableComponent implements OnInit {
  @Input() model: AbstractDataModel = new EmptyDataModel();

  constructor() {
  }

  ngOnInit(): void {
  }

  rowCount(): Array<any> {
    return new Array(this.model.rowCount()).fill(0);
  }

  columnCount(): Array<any> {
    return new Array(this.model.columnCount()).fill(0);
  }

  setModel(model: AbstractDataModel) {
    this.model = model;
    // this.model.dataChanged.asObservable().pipe(
    //   tap(event => {

    //   })
    // ).subscribe();
  }

  dataHeader(index: number) {
    return this.model.dataHeader(index, Direction.Horizontal, 0)
  }

  data(row: number, column: number): any {
    console.log('call')
    return this.model.data(row, column, 1);
  }

}
