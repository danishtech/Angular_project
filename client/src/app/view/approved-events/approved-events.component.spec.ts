import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedEventsComponent } from './approved-events.component';

describe('ApprovedEventsComponent', () => {
  let component: ApprovedEventsComponent;
  let fixture: ComponentFixture<ApprovedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
