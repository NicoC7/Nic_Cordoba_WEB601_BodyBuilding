import { Component, Input } from '@angular/core';
import { ContentList } from '../helper-files/content-list'; 
import { Content } from '../helper-files/content-interface'; // Update the path

@Component({
  selector: 'app-body-building',
  standalone: true,
  imports: [],
  templateUrl: './body-building.component.html',
  styleUrl: './body-building.component.scss'
})

export class BodyBuildingComponent {
  @Input() contentList: ContentList;

  constructor() {
    // Create an instance of ContentList
    this.contentList = new ContentList();

    // Add at least 3 valid items using the add function
    const contentItem1: Content = {
      id: 1,
      title: 'Workout Routine 1',
      description: 'Full-body workout plan for beginners',
      creator: 'FitnessExpert1',
      imageURL: '',
      type: 'Workout',
      tags: ['Beginner', 'Full-body', 'Fitness']
    };

    const contentItem2: Content = {
      id: 2,
      title: 'Nutrition Guide 1',
      description: 'Healthy eating habits for muscle building',
      creator: 'Nutritionist1',
      imageURL: '',
      type: 'Nutrition',
      tags: ['Diet', 'Muscle Building', 'Healthy Eating']
    };

    const contentItem3: Content = {
      id: 3,
      title: 'Exercise Technique 1',
      description: 'Proper form and technique for key exercises',
      creator: 'PersonalTrainer1',
      imageURL: '',
      type: 'Exercise',
      tags: ['Form', 'Technique', 'Strength Training']
    };

    // Add items to the ContentList
    this.contentList.addContent(contentItem1);
    this.contentList.addContent(contentItem2);
    this.contentList.addContent(contentItem3);
  }
}



