import { Component, OnInit } from '@angular/core';
import { ShowPostComponent } from '../show-post/show-post.component' 
import { Post } from '../../models/post.model';
import { CommonService } from 'src/app/common.service';
import { ArticlesService } from './articles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers:[ ArticlesService ]
})
export class ArticlesComponent implements OnInit {

  constructor(private commonService: CommonService , private articleService:ArticlesService, private router:Router ) { }

  public post_to_open;

  public posts:[any];

  ngOnInit() {
    this.OpenPost();
   
    this.getAllPost();
  }

  OpenPost(){
    this.post_to_open = this.commonService.post_to_show;
  }

  getAllPost(){
    if(this.post_to_open.length>0){
    this.articleService.showPost(this.post_to_open).subscribe(result => {
        console.log('result is ', result);
        this.posts = result['data'];
    });
  }else{

    this.router.navigate(['/home']);
  };
  }
  

    Show(){

    }
}
