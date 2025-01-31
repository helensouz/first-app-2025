import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCompontent } from './header.component';
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './components/dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderCompontent, UserComponent, TasksComponent],

})
export class AppComponent {

  users = DUMMY_USERS;

  onSelectUser(id: string ){
    console.log(id)


  }
}
