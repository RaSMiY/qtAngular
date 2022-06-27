import { Component } from '@angular/core';
import { AbstractDataModel } from './components/qt-table/abstract-data-model';
import { DataModel } from './components/qt-table/data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'qt-angular';

  model: AbstractDataModel = new DataModel();

  constructor() {
    
  }

  onButtonClick() {
    this.model.setData(20, 25, 16, 1);
  }
}
