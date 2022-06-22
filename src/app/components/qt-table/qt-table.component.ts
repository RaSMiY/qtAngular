import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { DestroyService } from 'src/app/services/destroy.service';
import { AbstractDataModel, Direction } from './abstract-data-model';
import { EmptyDataModel } from './empty-data-model';

@Component({
  selector: 'app-qt-table',
  templateUrl: './qt-table.component.html',
  styleUrls: ['./qt-table.component.scss'],
  providers: [
    DestroyService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QtTableComponent implements OnInit {
  @Input() dataModel: AbstractDataModel = new EmptyDataModel();
  
  model: AbstractDataModel = new EmptyDataModel();

  constructor(
    private readonly destroy$: DestroyService
  ) {
  }

  ngOnInit(): void {
    this.setModel(this.dataModel);
  }

  rowCount(): Array<any> {
    return new Array(this.model.rowCount()).fill(0);
  }

  columnCount(): Array<any> {
    return new Array(this.model.columnCount()).fill(0);
  }

  setModel(model: AbstractDataModel) {
    this.model = model;
    this.model.dataChanged.asObservable().pipe(
      tap(event => {
        console.log('dataChanged', event)
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  dataHeader(index: number) {
    return this.model.dataHeader(index, Direction.Horizontal, 0)
  }

  data(row: number, column: number): any {
    console.log('call')
    return this.model.data(row, column, 1);
  }

}
