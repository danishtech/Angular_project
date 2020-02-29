import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../canvasjs.min';

@Component({
	selector: 'app-admin-stats',
	templateUrl: './admin-stats.component.html',
	styleUrls: ['./admin-stats.component.css']
})
export class AdminStatsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Popular Sports"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
				indexLabel: "{name} - #percent%",
				dataPoints: [
					{ y: 450, name: "Football" },
					{ y: 120, name: "Hockey" },
					{ y: 300, name: "Basketball" },
					{ y: 800, name: "Cricket" },
					{ y: 150, name: "Tennis" },
					{ y: 250, name: "Others" }
				]
			}]
		});

		chart.render();
		this.performanceChart();
	}

	performanceChart() {
		let chart = new CanvasJS.Chart("performerChart", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Attendance in Years"
		},
		data: [{
			type: "column",
			dataPoints: [
				{ y: 1400, label: "2010" },
				{ y: 5500, label: "2011" },
				{ y: 2400, label: "2011" },
				{ y: 3400, label: "2012" },
				{ y: 1800, label: "2013" },
				{ y: 5000, label: "2014" },
				{ y: 2800, label: "2015" },
				{ y: 6800, label: "2016" },
				{ y: 9500, label: "2017" },
				{ y: 2800, label: "2018" },
				{ y: 3400, label: "2019" },
				{ y: 7100, label: "2020" }
			]
		}]
	});
		
	chart.render();
	}

	pieChart() {
	}

}
