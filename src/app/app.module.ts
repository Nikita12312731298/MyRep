import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { AddPostComponent } from './home/add-post/add-post.component';
import { ArticlesComponent } from './home/articles/articles.component';
import { ShowPostComponent } from './home/show-post/show-post.component';
import { CommonService } from './common.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumComponent,
    LoginComponent,
    AddUserComponent,
    AddPostComponent,
    ArticlesComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
