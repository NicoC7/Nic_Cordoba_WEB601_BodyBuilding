
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  myContentArray: Content[] = [];

  contentItem1: Content = {
    id: 1,
    title: 'Muscle-Building Workout Plan for Beginners',
    description: 'Get started on your journey to building muscle with this comprehensive workout plan designed for beginners. Includes exercises targeting major muscle groups and tips for proper form.',
    creator: 'FitnessExpert1',
    imageURL: 'https://cdn.muscleandstrength.com/sites/default/files/3_day_beginner_workout_routine_-_1200x630.jpg',
    type: 'Workout',
    tags: ['Beginner', 'Muscle Building', 'Fitness']
  };
  
  contentItem2: Content = {
    id: 2,
    title: 'Nutrition Guide for Bodybuilders',
    description: 'Learn how to fuel your body for maximum muscle growth and recovery with this detailed nutrition guide. Includes meal plans, macronutrient breakdowns, and supplementation advice.',
    creator: 'Nutritionist1',
    imageURL: 'https://i.pinimg.com/originals/17/45/c6/1745c635d4ef2816e6f63b2241fcd73c.jpg',
    type: '',
    tags: ['Diet', 'Muscle Building', 'Healthy Eating']
  };
  
  contentItem3: Content = {
    id: 3,
    title: 'Effective Exercise Techniques for Strength Training',
    description: 'Master the fundamental exercises essential for building strength and muscle mass. This guide covers proper form, technique tips, and variations to keep your workouts challenging.',
    creator: 'PersonalTrainer1',
    imageURL: 'https://www.muscleandfitness.com/wp-content/uploads/2020/03/Athletic-Man-Performing-Squat-In-Empty-Gym.jpg?quality=86&strip=all',
    type: 'Exercise',
    tags: ['Strength Training', 'Exercise Technique', 'Workout Tips']
  };
  
  contentItem4: Content = {
    id: 4,
    title: '10 Foods to Boost Muscle Growth',
    description: 'Discover the top foods that can help you pack on muscle mass and recover faster from workouts. From lean proteins to complex carbohydrates, optimize your diet for maximum gains.',
    creator: 'Nutritionist1',
    imageURL: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/02/High-protein-foods-268221e.jpg?resize=768,574',
    type: 'Nutrition',
    tags: ['Muscle Building', 'Diet', 'Healthy Eating']
  };
  
  contentItem5: Content = {
    id: 5,
    title: 'Benefits of High-Intensity Interval Training (HIIT) for Bodybuilders',
    description: 'Learn how incorporating HIIT workouts into your training routine can enhance muscle growth, increase calorie burn, and improve cardiovascular health. Get ready to take your workouts to the next level!',
    creator: 'FitnessExpert1',
    imageURL: 'https://www.zumub.com/blog/wp-content/uploads/2021/11/HIIT-1.jpg',
    type: '',
    tags: ['HIIT', 'Cardio', 'Workout Tips']
  };
  
  contentItem6: Content = {
    id: 6,
    title: 'Essential Supplements for Bodybuilders',
    description: 'Discover the key supplements that can support your muscle-building goals and enhance overall performance. From protein powders to creatine, learn how to optimize your supplement stack.',
    creator: 'FitnessExpert1',
    imageURL: 'https://www.zumub.com/blog/wp-content/uploads/2018/03/120_roundtable-supplements-1.jpg',
    type: 'Nutrition',
    tags: ['Supplements', 'Muscle Growth', 'Performance Enhancement']
  };
  
  contentItem7: Content = {
    id: 7,
    title: 'Advanced Training Techniques for Muscle Hypertrophy',
    description: 'Take your muscle-building efforts to the next level with these advanced training techniques. From drop sets to supersets, learn how to maximize muscle hypertrophy and achieve your physique goals.',
    creator: 'PersonalTrainer1',
    imageURL: 'https://www.borntough.com/cdn/shop/articles/Advanced_Training_Techniques_Supersets_Eccentrics_Dropsets.jpg?v=1638379851&width=1400',
    type: 'Exercise',
    tags: ['Muscle Hypertrophy', 'Training Techniques', 'Advanced Workouts']
  };

  
  

  ngOnInit() {
    this.myContentArray = [this.contentItem1, this.contentItem2, this.contentItem3, this.contentItem4, this.contentItem5, this.contentItem6, this.contentItem7];
  }
}

export { Content };
