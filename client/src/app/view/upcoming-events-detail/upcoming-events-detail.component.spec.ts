import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventsDetailComponent } from './upcoming-events-detail.component';

describe('UpcomingEventsDetailComponent', () => {
  let component: UpcomingEventsDetailComponent;
  let fixture: ComponentFixture<UpcomingEventsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
