import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content/content.component';
import { MenuitemCoatComponent } from './menuitem-coat/menuitem-coat.component';
import { MenuitemShoesComponent } from './menuitem-shoes/menuitem-shoes.component';
import { MenuitemDressComponent } from './menuitem-dress/menuitem-dress.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  declarations: [MenuitemCoatComponent, 
    MenuitemShoesComponent, 
    MenuitemDressComponent, 
    ContentComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
