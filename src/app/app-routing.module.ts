import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePaqueteComponent } from './detalle-paquete/detalle-paquete.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'detalle/:id', component:DetallePaqueteComponent},
  {path: 'home', component:HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
