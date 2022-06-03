import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qt-table',
  templateUrl: './qt-table.component.html',
  styleUrls: ['./qt-table.component.scss']
})
export class QtTableComponent implements OnInit {

  readonly COLUMNS_COUNT = 50;
  readonly ROWS_COUNT = 30;

  columns = new Array(this.COLUMNS_COUNT).fill(0).map((v, i, a) => i + 1);
  rows = new Array(this.ROWS_COUNT).fill(0).map((v, i, a) => new Array(this.COLUMNS_COUNT).fill(0));

  constructor() { }

  ngOnInit(): void {
  }

}
