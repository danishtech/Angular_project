import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitEventsComponent } from './submit-events.component';

describe('SubmitEventsComponent', () => {
  let component: SubmitEventsComponent;
  let fixture: ComponentFixture<SubmitEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
