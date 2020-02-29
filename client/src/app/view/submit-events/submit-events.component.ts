import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../controllers/events.service'
import { Events } from '../../models/event.model'

@Component({
  selector: 'app-submit-events',
  templateUrl: './submit-events.component.html',
  styleUrls: ['./submit-events.component.css'],
  providers: [EventService]
})
export class SubmitEventsComponent implements OnInit {

  Events: Events;

  constructor(private router: Router, private _eventService: EventService) { }

  ngOnInit() {
    this.refresh();
  }

  async refresh() {
    const data = this._eventService.getEvents().then(data => {
      data.sort((a: any, b: any) => {
        return b.EventID - a.EventID;
      });
      this.Events = data;
      console.log(this.Events)
    })
  }

  eventDetail(val: any) {
    switch (val) {
      case '0':
        this.router.navigateByUrl('/live-events');
        break;
      case '1':
        this.router.navigateByUrl('/upcoming-events');
        break;
      case '2':
        this.router.navigateByUrl('/complete-events');
    }
  }

}
