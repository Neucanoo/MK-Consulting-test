import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDatetimeComponent } from './td-datetime.component';

describe('TdDatetimeComponent', () => {
  let component: TdDatetimeComponent;
  let fixture: ComponentFixture<TdDatetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdDatetimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
