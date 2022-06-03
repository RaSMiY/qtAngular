import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtTableComponent } from './qt-table.component';

describe('QtTableComponent', () => {
  let component: QtTableComponent;
  let fixture: ComponentFixture<QtTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
