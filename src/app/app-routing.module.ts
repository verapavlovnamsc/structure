import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusuitComponent } from './menusuit/menusuit.component';
import { MenujacketComponent } from './menujacket/menujacket.component';
import { MenucoatComponent } from './menucoat/menucoat.component';





const routes: Routes = [
  {
    path: 'suit',
    component: MenusuitComponent
  },
  {
    path: 'jacket',
    component: MenujacketComponent
  },
  {
    path: 'coat',
    component: MenucoatComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



