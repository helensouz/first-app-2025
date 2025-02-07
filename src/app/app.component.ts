import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCompontent } from './header.component';
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './components/dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderCompontent, UserComponent, TasksComponent],

})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserid?: string;

  get selectedUser(){
   return DUMMY_USERS.find(user => user.id === this.selectedUserid)!
  }

  onSelectUser(id: string ){
    this.selectedUserid = id


  }
}
