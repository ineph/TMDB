import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { MediaComponent } from './media/media.component';


const routes: Routes = [
  {path: '', redirectTo: 'discover', pathMatch: 'full'},
  {path: 'discover', component: DiscoverComponent},
  {path: ':media/:id', component: MediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
