import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuhouseComponent } from './menuhouse/menuhouse.component';
import { MenuflatComponent } from './menuflat/menuflat.component';
import { MenutownhouseComponent } from './menutownhouse/menutownhouse.component';



const routes: Routes = [
  {
    path: 'house',
    component: MenuhouseComponent
  },
  {
    path: 'flat',
    component: MenuflatComponent
  },
  {
    path: 'townhouse',
    component: MenutownhouseComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
