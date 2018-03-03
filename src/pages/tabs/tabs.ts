import { MealPlanPage } from './../meal-plan/meal-plan';
import { StatisticsPage } from './../statistics/statistics';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  profilePage = ProfilePage;
  statisticsPage = StatisticsPage;
  mealPlanPage = MealPlanPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
