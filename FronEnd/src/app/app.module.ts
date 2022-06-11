import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";


import { MenuComponent } from './views/menu/menu.component';
import { DepartamentComponent } from './views/views-department/department/departament.component';
import { ListDepartmentComponent } from './views/views-department/list-department/list-department.component';
import { EditDepartmentComponent } from './views/views-department/edit-department/edit-department.component';
import { EditUserComponent } from './views/views-user/edit-user/edit-user.component';
import { ListUserComponent } from './views/views-user/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    DepartamentComponent,
    ListDepartmentComponent,
    EditDepartmentComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
