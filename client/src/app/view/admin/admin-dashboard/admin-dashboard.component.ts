import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../canvasjs.min';
import { SchoolService } from '../../../controllers/schools.service'
import { EventService } from 'src/app/controllers/events.service';
import { Events } from 'src/app/models/event.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [SchoolService, EventService]
})
export class AdminDashboardComponent implements OnInit {

  Events: Events

  constructor(private _schoolService: SchoolService, private _eventService: EventService) { }

  ngOnInit() {
    this.chart();
    this.refresh();
  }

  async refresh() {
    const data = this._schoolService.getSchool();
    console.log(data);

    const eventData = this._eventService.getEvents().then(data => {
      data.sort((a: any, b: any) => {
        return b.EventID - a.EventID;
      });
      this.Events = data;
    })
  }

  async chart() {

    var chart = new CanvasJS.Chart("donutChart", {
      animationEnabled: true,
      title: {
        horizontalAlign: "left"
      },
      data: [{
        type: "doughnut",
        startAngle: 60,
        // showInLegend: true,
        //innerRadius: 60,
        indexLabelFontSize: 10,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 700, label: "Event Development" },
          { y: 500, label: "Economic Development" },
          { y: 400, label: "Sport Development" },
          { y: 600, label: "Social Development" },
          { y: 300, label: "Branding Development" },
        ]
      }]
    });
    chart.render();

  }

}
