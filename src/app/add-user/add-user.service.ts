import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
 
@Injectable()
export class AddUserService {
 
    constructor(private http: HttpClient){
 
    }

    addUser(user:User){
        return this.http.post('/api/user/create',{
            username : user.username,
            password : user.password
        })
    }

    checkLogin(user:User){
        return this.http.post('/api/user/check',{
            username: user.username
        })
    }
 
}