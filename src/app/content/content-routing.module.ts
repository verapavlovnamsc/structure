import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MenuitemCoatComponent } from './menuitem-coat/menuitem-coat.component';
import { MenuitemDressComponent } from './menuitem-dress/menuitem-dress.component';
import { MenuitemShoesComponent } from './menuitem-shoes/menuitem-shoes.component';


const routes: Routes = [{
path: "", 
component: ContentComponent,
children: [{
    path: "coat",
    component: MenuitemCoatComponent
    },{
    path: "dress",
    component: MenuitemDressComponent
    },{
    path: "shoes",
    component: MenuitemShoesComponent
    }]  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
