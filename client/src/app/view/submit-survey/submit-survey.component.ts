import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../controllers/categories.service'
import { Categories } from '../../models/categories.model'
import { Result } from '../../models/result.model'

@Component({
  selector: 'app-submit-survey',
  templateUrl: './submit-survey.component.html',
  styleUrls: ['./submit-survey.component.css'],
  providers: [CategoriesService]
})

export class SubmitSurveyComponent implements OnInit {

  submitPage: any;
  categories: Categories;
  temAnswer: any;
  resultList: Array<Result> = [];

  constructor(private _categoryService: CategoriesService) { }

  ngOnInit() {
    this.submitPage = 'A';
    this.refresh();
  }

  async refresh() {
    const data = this._categoryService.getCategories().then( data => {
      this.categories = data;
      console.log(this.categories)
      for(var i = 0; i < data.length; i++){
        this.temAnswer = data[i].Answers.split(',');
        // console.log(this.temAnswer);
      }
    });
  }

  onRadioCheck(Question: any, Answer: any, CategoryID: any, CategoryName: any) {
    console.log("Question: "+ Question + "Answer: " + Answer);

    var object = new Result();
    object.Question = Question;
    object.Answer = Answer;
    object.CategoryId = CategoryID;
    object.CategoryName = CategoryName;
    object.CreatedBy = 0;
    object.CreatedAt = new Date();
    object.ModifiedBy = 0;
    object.ModifiedAt = new Date();

    //     this._categoryService.submitResult(object).then( data => {
    //   console.log("success");
    // })

    this.resultList.push(object);

    console.log(object);
  }

  nextStep(val: any) {
    console.log(val)
    switch(val) {
      case 'A':
        this.submitPage = 'A';
        break;
      case 'B':
        console.log("here in B")
        this.submitPage = 'B';
        console.log(this.resultList)
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

  submitSurvey() {
    this._categoryService.submitResult(this.resultList).then( data => {
      console.log("success");
    })
  }

}
