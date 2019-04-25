import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';
import { DecimalPipe } from '@angular/common';
 
@Injectable()
export class AddPostService {
 
    constructor(private http: HttpClient){
 
    }
     a:number;
     b : number;
     Photo : string;
     date: Date
    
    addPost(post: Post){
        this.a = post.photo.lastIndexOf('assets/');
        this.b = post.photo.lastIndexOf('\\');
        this.date = new Date

        post.photo = "assets/"+post.photo.substr(this.b + 1);
        
 
        return this.http.post('/api/post/createPost',{
            title : post.title,
            description : post.description,
            photo: post.photo,
            date: this.date
        })
    }

    updatePost(post: Post){
        return this.http.post('/api/post/updatePost',{
            id: post._id,
            title : post.title,
            description : post.description,
            photo: post.photo
        })
    }
}