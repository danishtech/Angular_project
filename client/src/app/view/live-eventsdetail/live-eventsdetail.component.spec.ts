import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveEventsdetailComponent } from './live-eventsdetail.component';

describe('LiveEventsdetailComponent', () => {
  let component: LiveEventsdetailComponent;
  let fixture: ComponentFixture<LiveEventsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveEventsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveEventsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
