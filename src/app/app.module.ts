import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiRequestsService } from './api-requests.service'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ManagementComponent } from './components/management/management.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NewComponent } from './components/groups/new/new.component';
import { UpdateComponent } from './components/groups/update/update.component';
import { DeleteComponent } from './components/groups/delete/delete.component';
import { NewComponentT } from './components/teachers/new/new.component';
import { UpdateComponentT } from './components/teachers/update/update.component';
import { DeleteComponentT } from './components/teachers/delete/delete.component';
import { NewComponentP } from './components/management/new/new.component';
import { UpdateComponentP } from './components/management/update/update.component';
import { DeleteComponentP } from './components/management/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    GroupsComponent,
    ManagementComponent,
    TeachersComponent,
    NewComponent,
    UpdateComponent,
    DeleteComponent,
    NewComponentT,
    UpdateComponentT,
    DeleteComponentT,
    NewComponentP,
    UpdateComponentP,
    DeleteComponentP
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    ApiRequestsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
