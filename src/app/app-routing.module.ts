import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './components/groups/groups.component';
import { ManagementComponent } from './components/management/management.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent,
    children: [
      {
        path: "new", component: HomeComponent
      },
      {
        path: "update", component: HomeComponent
      },
      {
        path: "delete", component: HomeComponent
      }
    ]
  },
  {
    path:"groups",
    component:GroupsComponent,
    children:[
      {
        path: "new", component: HomeComponent
      },
      {
        path: "update", component: HomeComponent
      },
      {
        path: "delete", component: HomeComponent
      }
    ]
  },
  {
    path:"management",
    component:ManagementComponent,
    children: [
      {
        path: "new", component: HomeComponent
      },
      {
        path: "update", component: HomeComponent
      },
      {
        path: "delete", component: HomeComponent
      }
    ]
  },
  {
    path:"teachers",
    component:TeachersComponent,
    children: [
      {
        path: "new", component: HomeComponent
      },
      {
        path: "update", component: HomeComponent
      },
      {
        path: "delete", component: HomeComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
