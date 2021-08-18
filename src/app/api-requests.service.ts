import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  requestUrl = 'http://localhost:3000'
  constructor(
    public http: HttpClient
  ) { }

  /*
  Teachers
   */

  public getTeachers(){
    return this.http.get(this.requestUrl + '/api/getTeachers');
  }
  public newTeacher(data){
    return this.http.post(this.requestUrl + '/api/newTeacher', data);
  }
  public deleteTeacher(data){
    return this.http.delete(this.requestUrl + '/api/deleteTeacher', data);
  }
  public updateTeacher(data){
    return this.http.patch(this.requestUrl + '/api/updateTeacher', data);
  }

  /*
  Users
   */

  public getUsers(){
    return this.http.get(this.requestUrl + '/api/getUsers');
  }
  public deleteUser(data){
    return this.http.delete(this.requestUrl + '/api/deleteUser', data);
  }
  public newUser(data){
    return this.http.post(this.requestUrl + '/api/newUser', data);
  }
  public updateUser(data){
    return this.http.patch(this.requestUrl + '/api/updateUser', data);
  }

  /*
  Personnel
   */

  public getPersonnel(){
    return this.http.get(this.requestUrl + '/api/getPersonnel');
  }
  public newPersonnel(data){
    return this.http.post(this.requestUrl + '/api/newUser', data);
  }
  public deletePersonnel(data){
    return this.http.delete(this.requestUrl + '/api/deleteUser', data);
  }
  public updatePersonnel(data){
    return this.http.patch(this.requestUrl + '/api/updateUser', data);
  }

  /*
  Groups
   */

  public getGroups(){
    return this.http.get(this.requestUrl + '/api/getGrpups');
  }

  public newGroup(data){
    return this.http.post(this.requestUrl + '/api/newGroup', data);
  }

  public deleteGroup(data){
    return this.http.delete(this.requestUrl + '/api/deleteGroup', data);
  }

  public updateGroup(data){
    return this.http.patch(this.requestUrl + '/api/updateGroup', data);
  }

}
