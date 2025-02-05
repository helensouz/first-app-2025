import { Component , computed, Input, input, signal, Output, EventEmitter, output} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required: true}) user!: User

  select = output<string>();



  imagePath = computed(() => { // only will be recompute only when the avatar value changed
    return  `./assets/${this.user.avatar}`
  })


  getSelectedUser(selectedUserid: string){
    DUMMY_USERS.find(user => user.id === selectedUserid)!
  }

  onSelectUser(){
    this.select.emit(this.user.id)

  }

}
