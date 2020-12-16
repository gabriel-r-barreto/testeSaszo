import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacaComponent } from './pages/placa/placa/placa.component';


const routes: Routes = [
 
  { path: 'placa', component: PlacaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
