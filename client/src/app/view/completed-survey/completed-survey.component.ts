import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/controllers/categories.service';
import { Categories } from 'src/app/models/categories.model';

@Component({
  selector: 'app-completed-survey',
  templateUrl: './completed-survey.component.html',
  styleUrls: ['./completed-survey.component.css'],
  providers: [CategoriesService]
})
export class CompletedSurveyComponent implements OnInit {

  submitPage: any;
  categories: Categories

  constructor(private _categoriesService: CategoriesService) { }

  ngOnInit() {
    this.submitPage = 'A';
    this.refresh();
  }

  async refresh() {
    await this._categoriesService.getCategories().then( data => {
      this.categories = data;
      console.log(this.categories)
    });
  }

  nextStep(val: any) {
    console.log(val)
    switch (val) {
      case 'A':
        this.submitPage = 'A';
        break;
      case 'B':
        console.log("here in B")
        this.submitPage = 'B';
        break;
      case 'C':
        this.submitPage = 'C';
        break;
      case 'D':
        this.submitPage = 'D';
        break;
      case 'E':
        this.submitPage = 'E';
        break;
    }
  }

}
