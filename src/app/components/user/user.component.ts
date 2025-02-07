import { Component , computed, Input, input, signal, Output, EventEmitter, output} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required: true}) user!: User
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter()



  get imagePath(){
     return  `./assets/${this.user.avatar}`
  }



  getSelectedUser(selectedUserid: string){
    DUMMY_USERS.find(user => user.id === selectedUserid)!
  }

  onSelectUser(){
    this.select.emit(this.user.id)

  }

}
