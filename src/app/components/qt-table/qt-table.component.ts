import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class QtTableComponent implements OnInit, OnDestroy {
  @Input() dataModel: AbstractDataModel = new EmptyDataModel();
  
  model: AbstractDataModel = new EmptyDataModel();

  // private _subscription$: Subscription;

  constructor(
    private readonly destroy$: DestroyService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.setModel(this.dataModel);
  }

  ngOnDestroy(): void {
      
  }
  
  disconnect() {
    // this._subscription$?.unsubscribe();
  }

  rowCount(): Array<any> {
    return new Array(this.model.rowCount()).fill(0);
  }

  columnCount(): Array<any> {
    return new Array(this.model.columnCount()).fill(0);
  }

  setModel(model: AbstractDataModel) {
    this.model = model;
    /* this._subscription$ = */ this.model.dataChanged.asObservable().pipe(
      tap(event => {
        console.log('dataChanged', event);
        this.cdr.detectChanges();
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
