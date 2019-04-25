import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
 
import { LoginComponent } from './login/login.component';
import { AlbumComponent } from './album/album.component';
 
export const AppRoutes: Routes = [
    { path:'test', component: AlbumComponent},
    { path: '', component: LoginComponent }
    
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
