import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { AddPostService } from './add-post.service';
import { ViewChild, ElementRef } from '@angular/core';
import {CommonService} from '../../common.service'
 
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [ AddPostService ]
})
export class AddPostComponent {

  ngOnInit(){
    this.commonService.postEdit_Observable.subscribe(res => {
      this.post = this.commonService.post_to_be_edited;
    });
  } 

  @ViewChild('closeBtn') closeBtn: ElementRef;
  
  public post : Post;
 
  constructor(private addPostService: AddPostService, private commonService: CommonService) {
      this.post = new Post();
  }
 
  addPost() {
    if(this.post.title && this.post.description){
        if(this.post._id){
          this.addPostService.updatePost(this.post).subscribe(res =>{
            this.closeBtn.nativeElement.click();
            this.commonService.notifyPostAddition();
            alert("update"+this.post._id)
          });
        } else {
          this.addPostService.addPost(this.post).subscribe(res =>{
            this.closeBtn.nativeElement.click();
            this.commonService.notifyPostAddition();
            alert("add")
          });
        }
    } else {
        alert('Title and Description required');
    }
  }
  
 
}