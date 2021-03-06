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

import { MenuComponent } from './views/menu/menu.component';
import { DepartamentComponent } from './views/views-department/department/departament.component';
import { ListDepartmentComponent } from './views/views-department/list-department/list-department.component';
import { EditDepartmentComponent } from './views/views-department/edit-department/edit-department.component';
import { EditUserComponent } from './views/views-user/edit-user/edit-user.component';
import { ListUserComponent } from './views/views-user/list-user/list-user.component';
import { RequestComponent } from './views/views-request/request/request.component';
import { ListRequestUserComponent } from './views/views-request/list-request-user/list-request-user.component';
import { ListRequestAdminComponent } from './views/views-request/list-request-admin/list-request-admin.component';
import { EditRequestComponent } from './views/views-request/edit-request/edit-request.component';
import { ListFileComponent } from './views/views-request/list-file/list-file.component';
import { ResponseComponent } from './views/views-response/response/response.component';
import { ShowResponseComponent } from './views/views-response/show-response/show-response.component';



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
    ListUserComponent,
    RequestComponent,
    ListRequestUserComponent,
    ListRequestAdminComponent,
    EditRequestComponent,
    ListFileComponent,
    ResponseComponent,
    ShowResponseComponent
  ],
  imports: [
    BrowserModule,
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
