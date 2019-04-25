import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
    @ViewChild('addPost') addBtn: ElementRef;
    
    public condition = false;

    constructor(private commonService: CommonService, private router: Router){
 
        if(localStorage.getItem('UserName')){
            this.condition = true
        }
        else{
            this.condition = false

        }

        this.commonService.postEdit_Observable.subscribe(res => {
            this.addBtn.nativeElement.click();
        });
 
    }
 
    

    logout(){
        localStorage.removeItem('UserName');
        this.router.navigate(['/']);
    }
   
}