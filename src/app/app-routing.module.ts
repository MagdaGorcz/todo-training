import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbautUsPageModule } from './pages/abaut-us.page-module';
import { HomePageModule } from './pages/home.page-module';

const routes: Routes = [{ 
        path: 'about-us', 
        loadChildren: () => AbautUsPageModule
      },
  { 
        path: '', 
        loadChildren: () => HomePageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
