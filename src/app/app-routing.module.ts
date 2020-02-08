import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PwaChildComponent } from './pwa-child/pwa-child.component';

const routes: Routes = [
  {path: '', component: PwaChildComponent},
  {path: 'login', component: PwaChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
