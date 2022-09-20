import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhotelesAdminComponent } from './components/admin/addhoteles-admin/addhoteles-admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HotelesAdminComponent } from './components/admin/hoteles-admin/hoteles-admin.component';
import { IndexAdminComponent } from './components/admin/index-admin/index-admin.component';
import { InfoHotelesComponent } from './components/admin/info-hoteles/info-hoteles.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { AddreservaUserComponent } from './components/users/addreserva-user/addreserva-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: IndexAdminComponent
  },
  {
    path:'admin/dashboard',
    component: DashboardComponent,
  },
  {
    path: 'admin/hoteles/addHotel',
    component: AddhotelesAdminComponent
  },
  {
    path:'admin/hoteles',
    component: HotelesAdminComponent
  },
  {
    path: 'reserva',
    component: AddreservaUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/hoteles/:id',
    component: InfoHotelesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
