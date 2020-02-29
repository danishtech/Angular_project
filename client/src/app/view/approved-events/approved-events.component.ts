import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Events } from 'src/app/models/event.model';
import { EventService } from 'src/app/controllers/events.service';

@Component({
  selector: 'app-approved-events',
  templateUrl: './approved-events.component.html',
  styleUrls: ['./approved-events.component.css'],
  providers: [EventService],
})
export class ApprovedEventsComponent implements OnInit {

  event = new Events;

  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  thirdFormGroup: FormGroup

  joinForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private eventService: EventService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      EventName: ['', Validators.required],
      EventDescription: ['', Validators.required],
      EventSource: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      EventStartDate: ['', Validators.required],
      EventVenue: ['', Validators.required],
      EventBudget: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      EventCategory: ['', Validators.required],
      EventType: ['', Validators.required],
      EventFrequency: ['', Validators.required],
      Estimated_Number_of_Attendees: ['', Validators.required],
      Estimated_Number_of_Participants: ['', Validators.required],
      EventCordinatorName: ['', Validators.required],
      EventCordinatorMobileNumber: ['', Validators.required],
      EventCordinatorEmail: ['', Validators.required],
    });

    this.refresh()
  }

  async refresh() {
    this.eventService.getEvents();
  }

  form1() {
    console.log("success 1")
    this.event.EventName = this.firstFormGroup.value.EventName;
    this.event.EventDescription = this.firstFormGroup.value.EventDescription;
    this.event.EventSource = this.firstFormGroup.value.EventSource;
    this.event.ModifiedByID = 23;
    this.event.ModifiedDate = new Date();
    this.event.Weight = 10;
    this.event.EventID = 1;
    this.event.EventEndDate = new Date();
  }
  
  form2() {
    console.log("success 2")
    this.event.EventStartDate = new Date();
    this.event.EventVenue = this.secondFormGroup.value.EventVenue;
    this.event.EventBudget = this.secondFormGroup.value.EventBudget;
    this.event.EventCriteria = "test";
    this.event.CreatedByID = 23;
    this.event.CreatedDate = new Date();
  }

  form3(){
    // console.log(this.thirdFormGroup.value);
    this.joinForm = new FormGroup({form1: this.firstFormGroup, form2: this.secondFormGroup, form3: this.thirdFormGroup});
    // console.log(this.joinForm.value);

    this.event.EventCategory = this.thirdFormGroup.value.EventCategory;
    this.event.EventType = this.thirdFormGroup.value.EventType;
    this.event.EventFrequency = this.thirdFormGroup.value.EventFrequency;
    this.event.Estimated_Number_of_Attendees = this.thirdFormGroup.value.Estimated_Number_of_Attendees;
    this.event.Estimated_Number_of_Participants = this.thirdFormGroup.value.Estimated_Number_of_Participants;
    this.event.EventCordinatorName = this.thirdFormGroup.value.EventCordinatorName;
    this.event.EventCordinatorMobileNumber = this.thirdFormGroup.value.EventCordinatorMobileNumber;
    this.event.EventCordinatorEmail = this.thirdFormGroup.value.EventCordinatorEmail;

    console.log(this.event)
    this.eventService.addEvent(this.event).then(data => {
      console.log("success")
    });
  }

}
