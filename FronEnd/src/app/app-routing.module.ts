import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { DepartamentComponent } from './views/department/departament.component';
import { EditDepartmentComponent } from './views/edit-department/edit-department.component';
import { ListDepartmentComponent } from './views/list-department/list-department.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'menu', component: MenuComponent},
  {path: 'department', component: DepartamentComponent},
  {path: 'list department', component: ListDepartmentComponent},
  {path: 'edit department', component: EditDepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
