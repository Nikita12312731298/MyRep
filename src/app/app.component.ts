import {Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WW';
  User = 'Гость';

  constructor (){
   

    if(localStorage.getItem('UserName')!=null){
      this.User = localStorage.getItem('UserName');
    }
  }
}
