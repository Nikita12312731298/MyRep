import { Component, OnInit } from '@angular/core';
import { AddUserService } from './add-user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [ AddUserService ]
})
export class AddUserComponent implements OnInit {

  public user:User;

  constructor(private addUserService: AddUserService, private router: Router) {
    this.user = new User;
   }

  ngOnInit() {
  }

  addUser(){
    if(this.user.username){
      this.addUserService.checkLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'fail') {
          this.addUserService.addUser(this.user).subscribe(result =>{
            console.log('response is ', result)
        });
          alert('Success');
        } else {
          alert('User already exist!');
        }
        
      }
      )}
  }


}
