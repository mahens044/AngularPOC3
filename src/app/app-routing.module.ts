import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenderComponentsComponent } from './render-components/render-components.component';

const routes: Routes = [

    { path: 'render-comp', component: RenderComponentsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
