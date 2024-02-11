import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';
import {HoverAffectDirective} from "./hover-affect.directive";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, ContentListComponent, HoverAffectDirective]
})
export class AppComponent {
  title = 'Nic_Cordoba_WEB601_BodyBuilding';
}
