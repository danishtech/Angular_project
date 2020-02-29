import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/controllers/events.service';
import { Events } from 'src/app/models/event.model';

@Component({
  selector: 'app-pending-approval',
  templateUrl: './pending-approval.component.html',
  styleUrls: ['./pending-approval.component.css'],
  providers: [EventService]
})
export class PendingApprovalComponent implements OnInit {

  Events: Events

  constructor( private _eventService: EventService) { }

  ngOnInit() {
    this.refresh()
  }

  async refresh() {
    const data = await this._eventService.getEvents().then( data => {
      data.sort((a: any, b: any) => {
        return b.EventID - a.EventID;
      });
      this.Events  = data;
    })
  }

}
