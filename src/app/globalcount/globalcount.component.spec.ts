import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalcountComponent } from './globalcount.component';

describe('GlobalcountComponent', () => {
  let component: GlobalcountComponent;
  let fixture: ComponentFixture<GlobalcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
