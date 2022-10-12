import { AboutComponent } from './about/about.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }, {
    path:'sobre',component:SobreComponent
  }, {
    path:'about',component:AboutComponent
  }, {
    path:'detalhes/:id',component:DetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
