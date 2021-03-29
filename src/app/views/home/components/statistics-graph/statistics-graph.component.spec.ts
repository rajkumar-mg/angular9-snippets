import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsGraphComponent } from './statistics-graph.component';

describe('StatisticsGraphComponent', () => {
  let component: StatisticsGraphComponent;
  let fixture: ComponentFixture<StatisticsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
