import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentList } from '../helper-files/content-list'; 
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-bodyBuild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-building.component.html',
  styleUrls: ['./body-building.component.scss']
})

export class BodyBuildingComponent {
  contentList: ContentList;

  constructor() {
    
    this.contentList = new ContentList();

    const contentItem1: Content = {
      id: 1,
      title: 'Workout Routine 1',
      description: 'Full-body workout plan for beginners - muscule and fitness',
      creator: 'FitnessExpert1'
    };

    const contentItem2: Content = {
      id: 2,
      title: 'Nutrition Guide 1',
      description: 'Healthy eating habits for muscle building - bbc',
      creator: 'Nutritionist1'
    };

    const contentItem3: Content = {
      id: 3,
      title: 'Exercise Technique 1',
      description: 'Proper form and technique for key exercises - USA Today',
      creator: 'PersonalTrainer1'
    };

    // Add items to the ContentList
    this.contentList.add(contentItem1);
    this.contentList.add(contentItem2);
    this.contentList.add(contentItem3);
  }
}



