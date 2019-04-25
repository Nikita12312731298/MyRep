import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShowPostService } from './show-post.service';
import { Post } from '../../models/post.model';
import { CommonService } from '../../common.service';
import { Router } from '@angular/router';
import { ArticlesComponent } from '../articles/articles.component'

 
@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
  providers: [ ShowPostService ]
})
export class ShowPostComponent implements OnInit {
 
  @ViewChild('closeBtn') closeBtn: ElementRef;
 
  public posts : any [];
  public post_to_delete;
  public post_to_open;
 
  constructor(private showPostService: ShowPostService, private commonService: CommonService, private router: Router) {
  }
  k = 0;
  limit = 0;

  next(){
    return this.k=this.k+5
  }

  previous(){
    return this.k=this.k-5
  }
 
  ngOnInit(){
    this.getAllPost();
 
    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });

    
  }
 
  setDelete(post: Post){
    this.post_to_delete = post;
  }
 
  unsetDelete(){
    this.post_to_delete = null;
  }
 
  getAllPost(){
    this.showPostService.getAllPost().subscribe(result => {
        console.log('result is ', result);
        this.posts = result['data'];
    });
  }
 
 
  deletePost(){
    this.showPostService.deletePost(this.post_to_delete._id).subscribe(res => {
      this.getAllPost();
      this.closeBtn.nativeElement.click();
    })
  }

  editPost(post: Post){
    this.commonService.setPostToEdit(post);
}

  setOpen(post:Post){
    this.post_to_open = post;
  }

  OpenPost(id){
    this.commonService.setPostToShow(id);
     alert(id)
     this.router.navigate(['/article']);

  }

 
}