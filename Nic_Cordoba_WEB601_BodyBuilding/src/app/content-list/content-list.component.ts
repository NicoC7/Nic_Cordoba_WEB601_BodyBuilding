import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contentList: Content[] = [];

  constructor() {
    const contentItem1: Content = {
      id: 1,
      title: 'Bodybuilder Workout Plan',
      image: 'https://www.example.com/workout-image.jpg',
      description: 'A comprehensive workout plan for bodybuilders to build muscle and strength.',
      creator: 'FitnessGuru1',
      type: 'Workout',
      tags: ['Bodybuilding', 'Muscle Building', 'Strength Training']
    };

    const contentItem2: Content = {
      id: 2,
      title: 'Nutrition Tips for Bodybuilders',
      image: 'https://www.example.com/nutrition-image.jpg',
      description: 'Essential nutrition advice for bodybuilders to optimize performance and recovery.',
      creator: 'NutritionExpert1',
      type: 'Nutrition',
      tags: ['Diet', 'Protein', 'Meal Planning']
    };

    const contentItem3: Content = {
      id: 3,
      title: 'Bodybuilder Interview: Success Stories',
      image: 'https://www.example.com/interview-image.jpg',
      description: 'Inspiring interviews with successful bodybuilders sharing their journey and tips.',
      creator: 'Interviewer1',
      type: 'Interview',
      tags: ['Inspiration', 'Success Stories', 'Bodybuilding']
    };

    const contentItem4: Content = {
      id: 4,
      title: 'Recovery Strategies for Bodybuilders',
      image: 'https://www.example.com/recovery-image.jpg',
      description: 'Effective recovery techniques for bodybuilders to prevent injuries and enhance performance.',
      creator: 'RecoveryExpert1',
      type: 'Recovery',
      tags: ['Stretching', 'Rest', 'Injury Prevention']
    };

    const contentItem5: Content = {
      id: 5,
      title: 'Essential Supplements for Bodybuilders',
      image: 'https://www.example.com/supplements-image.jpg',
      description: 'Guide to essential supplements to support bodybuilders in achieving their fitness goals.',
      creator: 'SupplementExpert1',
      type: 'Supplements',
      tags: ['Protein', 'Vitamins', 'Muscle Support']
    };

    // Add items to the contentList
    this.contentList.push(contentItem1);
    this.contentList.push(contentItem2);
    this.contentList.push(contentItem3);
    this.contentList.push(contentItem4);
    this.contentList.push(contentItem5);
  }

  displayContentInfo(content: Content) {
    console.log('Clicked Content:', content.id, content.title);
  }
}
