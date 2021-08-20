import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './components/groups/groups.component';
import { ManagementComponent } from './components/management/management.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewComponentT } from "./components/teachers/new/new.component";
import { UpdateComponentT } from "./components/teachers/update/update.component";
import { DeleteComponentT } from "./components/teachers/delete/delete.component";
import {NewComponentP} from "./components/management/new/new.component";
import {UpdateComponentP} from "./components/management/update/update.component";
import {DeleteComponentP} from "./components/management/delete/delete.component";

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    pathMatch: 'full'
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
        path: "new", component: NewComponentP
      },
      {
        path: "update", component: UpdateComponentP
      },
      {
        path: "delete", component: DeleteComponentP
      }
    ]
  },
  {
    path:"teachers",
    component:TeachersComponent,
    children: [
      {
        path: "new", component: NewComponentT,
      },
      {
        path: "update", component: UpdateComponentT
      },
      {
        path: "delete", component: DeleteComponentT
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
