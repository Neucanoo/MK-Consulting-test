import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdStringComponent } from './td-string.component';

describe('TdStringComponent', () => {
  let component: TdStringComponent;
  let fixture: ComponentFixture<TdStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
