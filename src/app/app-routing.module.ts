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
import { NewComponent } from "./components/groups/new/new.component";
import { UpdateComponent } from "./components/groups/update/update.component";
import { DeleteComponent } from "./components/groups/delete/delete.component";
import {NewComponentS} from "./home/new/new.component";
import {DeleteComponentS} from './home/delete/delete.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path:"schools",
    component:HomeComponent,
    children: [
      {
        path: "new", component: NewComponentS
      },
      {
        path: "delete", component: DeleteComponentS
      }
    ]
  },
  {
    path:"groups",
    component:GroupsComponent,
    children:[
      {
        path: "new", component: NewComponent
      },
      {
        path: "update", component: UpdateComponent
      },
      {
        path: "delete", component: DeleteComponent
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
