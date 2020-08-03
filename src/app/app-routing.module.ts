import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content/content.component';


const routes: Routes = [
  {
    path: 'shop',
    component: ContentComponent
    // loadChildren: () => import('./content/content.module')
      // .then(m => m.ContentModule),
  },
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: '**', redirectTo: 'shop' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
