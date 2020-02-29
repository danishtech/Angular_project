import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedEventDetailsComponent } from './completed-event-details.component';

describe('CompletedEventDetailsComponent', () => {
  let component: CompletedEventDetailsComponent;
  let fixture: ComponentFixture<CompletedEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
