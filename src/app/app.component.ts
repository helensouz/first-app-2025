import { TaskComponent } from './task/task.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCompontent } from './header.component';
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './components/dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';
import { Task } from './task/task.model';
import { UserListComponent } from "./user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [UserListComponent]
  // imports: [HeaderCompontent, UserComponent, TasksComponent, UserListComponent],

})
export class AppComponent {

  users = DUMMY_USERS;
  list: Task[] = []
  selectedUserid?: string;

  get selectedUser(){
   return DUMMY_USERS.find(user => user.id === this.selectedUserid)!
  }

  onSelectUser(id: string ){
    this.selectedUserid = id
  }

// //todo -- get the items list
//   getListItem(){
//   }

  get getListItem(): Task[] {
    return this.list.filter(task => task.userId === this.selectedUserid);
}


}
