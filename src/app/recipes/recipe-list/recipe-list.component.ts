import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Shakshuka', 'Based on tomatos and eggs', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/12/Shakshuka-main-1.jpg'),
    new Recipe('Humus', 'Based on humus seeds', 'https://3.bp.blogspot.com/-ovh6wpwY2B0/WZ2HHFjhlNI/AAAAAAAACYY/kreEz0X29GYx1nboDt4Qc6oyZtiz0PUsQCLcBGAs/s1600/P8131325_Fotor.jpg')
  ]
}
