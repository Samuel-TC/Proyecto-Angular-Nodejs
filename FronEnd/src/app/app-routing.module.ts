import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { DepartamentComponent } from './views/views-department/department/departament.component';
import { EditDepartmentComponent } from './views/views-department/edit-department/edit-department.component';
import { ListDepartmentComponent } from './views/views-department/list-department/list-department.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { ListUserComponent } from './views/views-user/list-user/list-user.component';
import { EditUserComponent } from './views/views-user/edit-user/edit-user.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'menu', component: MenuComponent},

  {path: 'department', component: DepartamentComponent},
  {path: 'list/department', component: ListDepartmentComponent},
  {path: 'edit/department/:id', component: EditDepartmentComponent},

  {path: 'list/user', component: ListUserComponent},
  {path: 'edit/user/:id', component: EditUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
