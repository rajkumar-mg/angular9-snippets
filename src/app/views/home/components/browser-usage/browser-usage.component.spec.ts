import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserUsageComponent } from './browser-usage.component';

describe('BrowserUsageComponent', () => {
  let component: BrowserUsageComponent;
  let fixture: ComponentFixture<BrowserUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
