import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)}, //homeModule is lazy loaded
  {path: '', redirectTo: '/home/products', pathMatch:'full'}, //all not assigned addresses will be reidrected to HomeComponent
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
