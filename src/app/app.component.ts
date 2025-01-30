import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCompontent } from './header.component';
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './components/dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderCompontent, UserComponent],

})
export class AppComponent {

  users = DUMMY_USERS;

}
