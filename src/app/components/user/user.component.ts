import { Component , computed, Input, input, signal} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  avatar = input.required<string>() // input is a function, <> defined which value will be used
  name = input.required<string>()
  // they only changes if the values changes

  imagePath = computed(() => { // only will be recompute only when the avatar value changed
    return  `./assets/${this.avatar}`
  })


  // get imagePath(){
  //   return  `./assets/${this.avatar}`
  // }


  onSelectUser(){

  }

}
