import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSnilsComponent } from './check-snils.component';

describe('CheckSnilsComponent', () => {
  let component: CheckSnilsComponent;
  let fixture: ComponentFixture<CheckSnilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckSnilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckSnilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
