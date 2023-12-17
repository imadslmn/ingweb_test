import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {DetailsStgComponent} from "./components/details-stg/details-stg.component";
import {ListStgComponent} from "./components/list-stg/list-stg.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DetailsStgComponent, ListStgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StagiareApp';
}
