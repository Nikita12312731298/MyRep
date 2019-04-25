import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from './models/post.model'
 
@Injectable()
export class CommonService {
 
    public postAdded_Observable = new Subject();

    public postEdit_Observable = new Subject();

    public postShow_Observable = new Subject();
 
    public post_to_be_edited;

    public post_to_show;

    constructor(){
        this.post_to_be_edited = new Post();
        this.post_to_show = new Post();
    }
 
    notifyPostAddition(){
        this.postAdded_Observable.next();
    }

    notifyPostEdit(){
        this.postEdit_Observable.next();
    }
     
    setPostToEdit(post: Post){
        this.post_to_be_edited = post;
        this.notifyPostEdit();
    }

    notifyPostShow(){
        this.postShow_Observable.next();
    }

    setPostToShow(id){
       this.post_to_show = id;
    }
    
   

    
 
}