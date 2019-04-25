import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';
import { CommonService } from '../../common.service';
 
@Injectable()
export class ArticlesService {
 
    constructor(private http: HttpClient){
 
    }
     
    showPost(id){
        return this.http.post('/api/post/showPost',{id : id})
    }

    showAllPost(){
        return this.http.post('/api/post/getAllPost',{});
    }
 
}