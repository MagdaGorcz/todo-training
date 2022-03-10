import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImagesPage } from './images.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ImagesPage,
        }
      ])],
  	declarations: [ImagesPage],
  	providers: [],
  	exports: [] })
export class ImagesPageModule {
}
