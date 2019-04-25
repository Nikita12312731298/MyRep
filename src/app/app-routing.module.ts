import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { AlbumComponent } from './album/album.component';
import { ArticlesComponent } from './home/articles/articles.component';


const routes: Routes = [
  {path:'', component: LoginComponent ,data: { class:'Active' }},
  {path:'login',component: LoginComponent },
  {path:'home',component: HomeComponent },
  { path:'test', component: AlbumComponent},
  { path:'article', component: ArticlesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
