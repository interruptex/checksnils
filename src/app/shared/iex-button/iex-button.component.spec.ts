import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IexButtonComponent } from './iex-button.component';

describe('IexButtonComponent', () => {
  let component: IexButtonComponent;
  let fixture: ComponentFixture<IexButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IexButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IexButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
