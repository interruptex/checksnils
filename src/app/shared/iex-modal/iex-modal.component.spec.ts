import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IexModalComponent } from './iex-modal.component';

describe('IexModalComponent', () => {
  let component: IexModalComponent;
  let fixture: ComponentFixture<IexModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IexModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IexModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
