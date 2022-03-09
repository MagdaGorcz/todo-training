import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AbautUsPage } from './abaut-us.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AbautUsPage,
        }
      ])],
  	declarations: [AbautUsPage],
  	providers: [],
  	exports: [] })
export class AbautUsPageModule {
}
