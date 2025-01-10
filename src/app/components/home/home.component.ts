import { Component, model } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

   checked1 = model(false);
   checked2 = model(false);

}
