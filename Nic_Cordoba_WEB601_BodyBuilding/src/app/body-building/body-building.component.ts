import { Component, Input } from '@angular/core';
import { ContentList } from '../helper-files/content-list'; 
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-body-building',
  standalone: true,
  imports: [],
  templateUrl: './body-building.component.html',
  styleUrls: ['./body-building.component.scss']})

export class BodyBuildingComponent {
  @Input() contentList: ContentList;

  constructor() {
    // Create an instance of ContentList
    this.contentList = new ContentList();

    // Add at least 3 valid items using the add function
    const contentItem1: Content = {
      id: 1,
      title: 'Workout Routine 1',
      description: 'Full-body workout plan for beginners - muscule and fitness',
      creator: 'FitnessExpert1',
      imageURL: 'https://www.muscleandfitness.com/wp-content/uploads/2019/09/Bodybuilder-In-Smokey-Room-Looking-Up-Holding-Dumbbells.jpg?quality=86&strip=all',
      type: 'Workout',
      tags: ['Beginner', 'Full-body', 'Fitness']
    };

    const contentItem2: Content = {
      id: 2,
      title: 'Nutrition Guide 1',
      description: 'Healthy eating habits for muscle building - bbc',
      creator: 'Nutritionist1',
      imageURL: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16185/production/_92810509_brittanyrhodes.jpg',
      type: 'Nutrition',
      tags: ['Diet', 'Muscle Building', 'Healthy Eating']
    };

    const contentItem3: Content = {
      id: 3,
      title: 'Exercise Technique 1',
      description: 'Proper form and technique for key exercises - USA Today',
      creator: 'PersonalTrainer1',
      imageURL: 'https://www.usatoday.com/gcdn/presto/2021/07/21/USAT/dfbd657c-1ef5-4dd9-b355-1619bdc2645f-GettyImages-924491214.jpg?width=700&height=467&fit=crop&format=pjpg&auto=webp',
      type: 'Exercise',
      tags: ['Form', 'Technique', 'Strength Training']
    };

    // Add items to the ContentList
    this.contentList.addContent(contentItem1);
    this.contentList.addContent(contentItem2);
    this.contentList.addContent(contentItem3);
  }
}



