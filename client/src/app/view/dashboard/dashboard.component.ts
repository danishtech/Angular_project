import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/controllers/events.service';
import { Events } from 'src/app/models/event.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [EventService]
})
export class DashboardComponent implements OnInit {

  Events: Events
  dataLoaded = false;

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this.refresh();
  }

  async refresh() {
    const data = await this._eventService.getEvents().then( data => {
      data.sort((a: any, b: any) => {
        return b.EventID - a.EventID;
      });
      this.Events = data;
      this.dataLoaded = true;
    })
  }

}
